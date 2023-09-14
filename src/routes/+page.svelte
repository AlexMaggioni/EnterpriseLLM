<script>
    import Sidebar from "../lib/Sidebar.svelte";
    import Chat from "../lib/Chat.svelte";

    let showSidebar = true;

    function handletoggleSidebar(event) {
        showSidebar = event.detail;
    }

    export let data;
    let chats = data.chats;
    
    let selectedChatId = chats && chats.length > 0 ? chats[0].id : null;    
    
    function handleSelectedChatChanged(event) {
        selectedChatId = event.detail;
    };

    function handleUpdateChats(event) {
        chats = event.detail;
    };

    $: selectedChat = chats.find(chat => chat.id === selectedChatId);
</script>

<div class="flex">
    {#if showSidebar}
        <Sidebar chats={chats} on:toggleSidebar={handletoggleSidebar} on:selectedChatChanged={handleSelectedChatChanged} on:updateChats={handleUpdateChats}/>
    {/if}

    <Chat showSidebar={showSidebar} chat={selectedChat} on:toggleSidebar={handletoggleSidebar} on:updateChats={handleUpdateChats}/>
</div>
