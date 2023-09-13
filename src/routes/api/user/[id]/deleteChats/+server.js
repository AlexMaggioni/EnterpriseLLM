import { json } from '@sveltejs/kit';
import { containerClient } from '../../../database.js';

export async function PATCH(request) {
    
    const { id } = request.params;
    
    const rawData = await request.request.text();
    const parsedData = JSON.parse(rawData);
    const chatIdsToDelete = parsedData.ids;

    const { resource: user } = await containerClient.item(id, id).read();
    user.chats = user.chats.filter(chat => !chatIdsToDelete.includes(chat.id));
    await containerClient.item(id, id).replace(user);

    return json(user.chats);
      
};
