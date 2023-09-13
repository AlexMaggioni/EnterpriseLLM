import { json } from '@sveltejs/kit';
import { containerClient } from '../../../database.js';

export async function PATCH(request) {
    const { id } = request.params;  // Extract the user's ID from the parameters
    const { resource: user } = await containerClient.item(id, id).read();
    let newChatId;

    // Set ID
    if (user.chats.length > 0){
        const highestChatId = Math.max(...user.chats.map(chat => Number(chat.id)));
        newChatId = (highestChatId + 1).toString();
    } else {
        newChatId = "1";
    };

    // Construct the new chat object
    const newChat = {
        id: newChatId,
        title: 'New Chat', // this can be modified later based on user's input
        created: new Date().toISOString(),
        messages: []
    };

    // Append the new chat to the user's chats array
    user.chats.push(newChat);

    // Update the user's data in Cosmos DB
    await containerClient.item(id).replace(user);

    return json(newChat);
}
