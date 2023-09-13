import { json } from '@sveltejs/kit';
import { containerClient } from '../../../database.js';

export async function GET({ params }) {
    const { id } = params;
    const { resource: user } = await containerClient.item(id, id).read();
    return json(user.chats);
};