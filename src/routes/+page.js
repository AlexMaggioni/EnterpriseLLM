export const load = async () => {

    const response = await fetch("http://localhost:5173/api/user/alex.maggioni@cooperators.ca");
    const chats = await response.json();

    return {
        chats
    }
}