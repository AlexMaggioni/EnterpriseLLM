<script>
   import Model from "./Model.svelte";
   import User from "./User.svelte";
   import Send from "./Send.svelte"
   import { blur, fade, slide } from 'svelte/transition';

   export let showSidebar;
   export let chats;
   import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();

   function toggleSidebar() {
       dispatch('toggleSidebar', !showSidebar);
   }
</script>

{#if !showSidebar}
   <span class="fixed top-2 left-2 z-10">
      <button on:click={toggleSidebar} class="flex py-0 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center" in:blur={{ delay: 100, duration: 100, axis: 'x'}}>
         <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
         </svg>
      </button>
   </span>
{/if}

<div class="flex flex-col w-full h-screen overflow-y-auto scrollbar-trigger relative transition-all ease-out">
   <div class="mb-auto">
      <User message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae iusto repudiandae nam laborum nesciunt nemo ducimus. Nesciunt hic quibusdam iusto aperiam magnam, sunt repellat. Optio nulla doloremque doloribus quis.`}/>
      <Model message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae iusto repudiandae nam laborum nesciunt nemo ducimus. Nesciunt hic quibusdam iusto aperiam magnam, sunt repellat. Optio nulla doloremque doloribus quis.`}/>
   </div>
   <Send />
</div>

