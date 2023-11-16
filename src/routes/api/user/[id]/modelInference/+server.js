import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { containerClient } from '../../../database.js';

// Replace with your actual Azure ML Studio endpoint and API key
const azureMLEndpoint = 'https://lmdeploy-laxum.canadacentral.inference.ml.azure.com/score';
const azureMLApiKey = 'oQY3gLEXdsBcJ4KsBixqyAkzovlXQx3X';

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
                // Include previous conversation history here if needed
                {
                    "role": "user",
                    "content": messageContent
                }
                // You can add more conversation history here
            ],
            "parameters": {
                "temperature": 0.6,
                "top_p": 0.9,
                "do_sample": true,
                "max_new_tokens": 2000
            }
        }
    };

    // Fetch response from Azure ML Studio
    const azureResponse = await fetch(azureMLEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${azureMLApiKey}`
        },
        body: JSON.stringify(requestBody)
    });

    const modelResponse = await azureResponse.json();

    // Read the user and chat object
    const { resource: user } = await containerClient.item(id, id).read();
    const chats = user.chats;
    const chat = chats.find(chat => chat.id === chatId);

    const timestamp = new Date().toISOString();

    const lastMessage = chat.messages[chat.messages.length - 1];
    if (lastMessage && !lastMessage.isUser && lastMessage.content === "...") {
        // Replace the last message content with model's response
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