import { json } from '@sveltejs/kit';
import { containerClient } from '../../../database.js';

export async function PATCH({ request, params }) {
    
    const rawData = await request.text();
    const parsedData = JSON.parse(rawData);

    const { id } = params;
    const chatId = parsedData.id;
    const messageContent = parsedData.message;

    const { resource: user } = await containerClient.item(id, id).read();
    const chats = user.chats;
    const chat = chats.find(chat => chat.id === chatId);

    const timestamp = new Date().toISOString();

    // Push a new message to the chat's messages array
    chat.messages.push({
        content: messageContent,
        timestamp: timestamp,
        isUser: true
    });

    // Update the user with the new chat data
    await containerClient.item(id, id).replace(user);
    return json(chats);
};

