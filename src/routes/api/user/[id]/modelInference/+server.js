import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { containerClient } from '../../../database.js';

// Replace with your actual Azure ML Studio endpoint and API key
const azureMLEndpoint = process.env.AZUREML_KEY;
const azureMLApiKey = process.env.AZUREML_ENDPOINT;

export async function PATCH({ request, params }) {
    const rawData = await request.text();
    const parsedData = JSON.parse(rawData);

    const { id } = params;
    const chatId = parsedData.id;
    const messageContent = parsedData.message;

    // Construct the request body for Azure ML Studio
    const requestBody = {
        "input_data": {
            "input_string": [
                {
                    "role": "user",
                    "content": messageContent
                }
                // Maybe add more conversation history here
            ],
            "parameters": {
                "temperature": 0.6,
                "top_p": 0.9,
                "do_sample": true,
                "max_new_tokens": 2000
            }
        }
    };

    let modelResponse;

    try {
        // Fetch response from Azure ML Studio
        const azureResponse = await fetch(azureMLEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${azureMLApiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!azureResponse.ok) {
            throw new Error(`Error from Azure ML Studio: ${azureResponse.status} ${azureResponse.statusText}`);
        }

        modelResponse = await azureResponse.json();

    } catch (error) {
        // Handle the error by setting it as the model's response
        modelResponse = { output: `Error: ${error.message}` };
    }

    // Read the user and chat object
    const { resource: user } = await containerClient.item(id, id).read();
    const chats = user.chats;
    const chat = chats.find(chat => chat.id === chatId);

    const timestamp = new Date().toISOString();

    const lastMessage = chat.messages[chat.messages.length - 1];
    if (lastMessage && !lastMessage.isUser && lastMessage.content === "...") {
        // Replace the last message content with model's or error response
        lastMessage.content = modelResponse.output;
        lastMessage.timestamp = timestamp;
    } else {
        // Otherwise, add a new message
        chat.messages.push({
            content: modelResponse.output,
            timestamp: timestamp,
            isUser: false 
        });
    }

    // Save the updated user object
    await containerClient.item(id, id).replace(user);

    // Return the updated chats
    return json(chats);
}
