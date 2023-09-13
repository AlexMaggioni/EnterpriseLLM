<script>
    export let toDeleteChatId;
    export let deleteChats;
    export let selectedChat;
    export let chat;

    $: selected = $selectedChat === chat.id;
    $: checked = $toDeleteChatId.includes(chat.id);

    function toggleChecked() {
        if (checked) {
            toDeleteChatId.update(ids => ids.filter(id => id !== chat.id));
        } else {
            toDeleteChatId.update(ids => [...ids, chat.id]);
        }
    };

    function selectChat() {
        $selectedChat = chat.id;
    };
</script>


{#if deleteChats}

    <li class="relative px-2 py-0 z-[15]" style="opacity: 1; height: auto;" >
        <div class="flex py-3 px-1 items-center gap-[7px] relative rounded-lg cursor-pointer break-all bg-[#202123] hover:bg-[#2A2B32] group">
            <button class="pl-[10px]" type="button" on:click={toggleChecked}>
                <svg width="20" height="20" class="cursor-pointer pt-[2px]" stroke="currentColor">
                    <rect class="rect" x="2" y="2" width="12" height="12" rx="2" ry="2" stroke-width="1.25" viewBox="0 0 24 24" fill={checked ? "#ef4444" : "none"}>
                </svg>
            </button>
            <div class="flex-1 relative text-sm overflow-hidden whitespace-nowrap align-middle">
                {chat.title}      
            <div class="absolute inset-y-0 right-0 w-[75px] z-10 bg-gradient-to-l from-[#202123] to-transparent group-hover:from-[#2A2B32]"></div>
            </div>                                 
        </div>
    </li>

{:else}
    
    <li class="relative px-2 py-0 z-[15]" style="opacity: 1; height: auto;">
        <button on:click={selectChat} class="text-left flex py-3 px-1 items-center gap-3 relative rounded-lg cursor-pointer break-all {selected ? "bg-[#343541]" : "bg-[#202123] hover:bg-[#2A2B32]"} group outline-none focus:outline-none w-full justify-start">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 ml-[9px] align-middle" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div class="flex-1 relative text-sm overflow-hidden whitespace-nowrap align-middle">
                {chat.title}
                <div class="absolute inset-y-0 right-0 w-[75px] z-10 bg-gradient-to-l {selected ? "from-[#343541]" : "from-[#202123] group-hover:from-[#2A2B32]"} to-transparent"></div>
            </div>
        </button>
    </li>

{/if}
