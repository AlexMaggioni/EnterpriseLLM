<script>
    let textAreaValue = '';
    let textArea;
 
    function adjustHeight(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
</script>

<div class="min-h-[200px] max-h-[200px] w-full px-4 md:px-8 fixed-send sticky bottom-0 left-0 right-0 z-100 fade-gradient">
    <div class="mt-[90px] pl-2 max-w-[875px] mx-auto">
        <form class="mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6">
            <div class="flex h-full flex-1 items-stretch md:flex-col" role="presentation">
                <div class="flex flex-col-reverse w-full py-2.5 flex-grow md:py-4 md:pl-4 relative border border-black/10 dark:border-gray-900/50 dark:text-white bg-[#40414f] rounded-xl shadow-lg">
                    <textarea 
                        bind:this={textArea}
                        bind:value={textAreaValue} 
                        on:input={() => adjustHeight(textArea)}
                        id="prompt-textarea"
                        rows="1"
                        placeholder="Send a message"
                        class="scrollbar-trigger placeholder-[#8e8ea0] resize-none m-0 w-full border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 focus:shadow-none focus:outline-none dark:bg-transparent md:pr-12 pl-3 md:pl-0"
                        style="max-height: 200px; overflow-y: auto;"></textarea>
                    <button 
                        class="group absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 
                            {textAreaValue.trim() ? 'bg-[#0768af]' : 'bg-transparent'} 
                            right-2 bottom-1.5 transition-colors">
                        <span data-state="closed">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 md:m-0" stroke-width="2">
                                <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" 
                                    fill={textAreaValue.trim() ? '#ffffff' : '#6a6b7b'} class="transition-colors">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>     
            </div>
        </form>
    </div>   
</div>

<style>
    .fade-gradient {
        height: 50%;
        background: linear-gradient(transparent, rgba(52, 53, 64, 1) 75%, rgba(52, 53, 64, 1) 60%);
        z-index: 1; 
    }
 </style>