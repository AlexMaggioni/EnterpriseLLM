export const load = async ({ fetch }) => {

    const response = await fetch("http://localhost:5173/api/user/alex.maggioni@cooperators.ca", {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    const chats = await response.json();

    return {
        chats
    }
}
