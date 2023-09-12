<script>
    import Sidebar from "../lib/Sidebar.svelte";
    import Chat from "../lib/Chat.svelte";

    let showSidebar = true;

    function handletoggleSidebar(event) {
        showSidebar = event.detail;
    }

    export let data;
    const chats = data.chats
</script>

<div class="flex">

    {#if showSidebar}
        <Sidebar chats={chats} on:toggleSidebar={handletoggleSidebar}/>
    {/if}

    <Chat chats={chats} showSidebar={showSidebar} on:toggleSidebar={handletoggleSidebar}/>
</div>