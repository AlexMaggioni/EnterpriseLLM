<script>
    export let title = 'New chat';
    export let deleteChats;
    export let selectAll;
    let prevSelectAll = selectAll;
    export let checkedItemsCount;
    let checked = false;
    
    $: if (prevSelectAll !== selectAll) {
        if (selectAll) {
            if (!checked) {
                checked = true;
                $checkedItemsCount += 1;
            }
        } else {
            if (checked) {
                checked = false;
                $checkedItemsCount -= 1;
            }
        }
        prevSelectAll = selectAll;
    }

    function toggleChecked(){
        checked = !checked;

        if (checked){
            $checkedItemsCount += 1;
        }

        else {
            $checkedItemsCount -= 1;
        }
    }
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
                {title}      
            <div class="absolute inset-y-0 right-0 w-[75px] z-10 bg-gradient-to-l from-[#202123] to-transparent group-hover:from-[#2A2B32]"></div>
            </div>                                 
        </div>
    </li>

{:else}

    <li class="relative px-2 py-0 z-[15]" style="opacity: 1; height: auto;">
        <div class="flex py-3 px-1 items-center gap-3 relative rounded-lg cursor-pointer break-all bg-[#202123] hover:bg-[#2A2B32] group">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 ml-[9px] align-middle" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div class="flex-1 relative text-sm overflow-hidden whitespace-nowrap align-middle">
                {title}       
            <div class="absolute inset-y-0 right-0 w-[75px] z-10 bg-gradient-to-l from-[#202123] to-transparent group-hover:from-[#2A2B32]"></div>
            </div>                                 
        </div>
    </li>

{/if}
