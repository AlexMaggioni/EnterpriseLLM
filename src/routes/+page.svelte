<script>
    import Sidebar from "../lib/Sidebar.svelte";
    import Chat from "../lib/Chat.svelte";

    let showSidebar = true;

    function handletoggleSidebar(event) {
        showSidebar = event.detail;
    }
</script>

<div class="flex">

    {#if showSidebar}
        <Sidebar on:toggleSidebar={handletoggleSidebar}/>
    {/if}

    <Chat showSidebar={showSidebar} on:toggleSidebar={handletoggleSidebar}/>

</div>