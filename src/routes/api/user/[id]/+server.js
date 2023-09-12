import { json } from '@sveltejs/kit';
import { containerClient } from '../../database.js';

export async function GET({ params }) {
    const { id } = params;
    const { resource: userData } = await containerClient.item(id, id).read();
    return json(userData);
}
