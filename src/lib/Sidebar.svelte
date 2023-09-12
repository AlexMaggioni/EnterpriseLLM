<script>
    import HistoryItem from "./HistoryItem.svelte";
    import Profile from "./Profile.svelte";
    
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';
    import { writable } from 'svelte/store';

    const dispatch = createEventDispatcher();
    const checkedItemsCount = writable(0);

    let showSidebar = true;
    let deleteChats = false;
    let selectAll = false;
    let unselectAll = false;
    let confirmedDeletion;

    $: confirmedDeletion = $checkedItemsCount > 0;

    function toggleSidebar() {
        showSidebar = !showSidebar;
        dispatch('toggleSidebar', showSidebar);
    }

    function toggleDeleteChats() {
        deleteChats = !deleteChats;
    }

    function toggleSelectionAll() {    
        selectAll = !selectAll;
        unselectAll = !unselectAll;
    }
</script>


<div class="dark flex-shrink-0 overflow-x-hidden bg-[#202123] w-[260px] h-screen flex flex-col z-100" transition:slide={{ duration: 300, x: -260, axis: 'x'}}>
    
    <!-- Chat Control Buttons -->
    <div class="mb-0 flex flex-col gap-2 px-2 pt-2 bg-[#202123] sticky top-0">
        
        <div class="flex flex-row gap-2">
            <!-- New Chat Button -->
            <button class="flex px-3 py-2 items-center gap-3 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>New chat
            </button>

            <!-- Delete Chat -->
            <button on:click={toggleDeleteChats} class="flex py-2 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 h-11 w-11 flex-shrink-0 items-center justify-center {deleteChats ? 'bg-red-500 hover:bg-red-500/50' : 'none hover:bg-gray-500/10'}">
                <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
    

            <!-- Close Sidebar Button -->
            <button on:click={toggleSidebar} class="flex py-2 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
            </button>
        </div>


        <div class="flex flex-row gap-2">
            {#if deleteChats}
            <!-- Select/Unselect all chats -->
            <button on:click={toggleSelectionAll} class="flex px-3 py-2 mb-2 items-center gap-3 transition-colors duration-300 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow" transition:slide={{duration: 300}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{selectAll ? "Unselect all" : "Select all"}
            </button>

            <!-- Confirm deletion -->
            <button class="flex mb-2 py-2 transition-colors duration-300 text-gray-100 cursor-pointer text-sm rounded-md border {confirmedDeletion ? "bg-green-700 hover:bg-green-700/60" : "hover:bg-gray-500/10"} border-white/20 h-11 w-11 flex-shrink-0 items-center justify-center" transition:slide={{duration: 300}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </button>
            {/if}
        </div>
    </div>

    <!-- Scrollable Chat List -->
    <div class="flex-grow overflow-y-auto overflow-x-hidden scrollbar-trigger flex-col transition-opacity duration-500">
        <div class="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
            <div>
                <span>
                    <div class="relative" style="height: auto; opacity: 1;" transition:slide={{duration: 200}}>
                        <ol>
                            <HistoryItem {deleteChats} {selectAll} {checkedItemsCount}/>
                        </ol>
                    </div>
                </span>
            </div>
        </div>
    </div> 
    
    <Profile/>

</div>