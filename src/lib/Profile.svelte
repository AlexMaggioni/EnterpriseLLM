
<script>
    import img from '$lib/images/coop.png';
</script>

<div class="p-2 mb-[2px]">
    <div class="group relative flex items-center gap-2" data-headlessui-state="">
        <div class="flex items-center transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 p-2 w-[79%] gap-4 pl-[10px]">
            <div class="flex-shrink-0 flex rounded-md w-7 h-7 justify-center items-center">
                <img alt="User" loading="lazy" width="18" height="18" decoding="async" class="rounded-sm" src={img} style="color: transparent;">
             </div>
            <div class="flex overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">Alex Maggioni</div>
        </div>
        <button class="flex py-0 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-[46px] w-11 flex-shrink-0 items-center justify-center">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
        </button>
    </div>
</div>