<script>
   import Model from "./Model.svelte";
   import User from "./User.svelte";
   import Send from "./Send.svelte"
   import img from '$lib/images/coop_grey.png';
   import { fade } from 'svelte/transition';

   export let showSidebar;
   export let chat;

   import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();

   function toggleSidebar() {
       dispatch('toggleSidebar', !showSidebar);
   }

   async function handlesubmitText(event) {
      
      const message = event.detail;
      
      const response = await fetch(`/api/user/alex.maggioni@cooperators.ca/addUserMessage`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
               id: chat.id,
               message : message
            })
        });

      const data = await response.json();
      dispatch('updateChats', data);
   };
   
</script>

{#if !showSidebar}
   <span class="fixed top-2 left-2 z-10">
      <button on:click={toggleSidebar} class="flex py-0 transition-colors duration-200 text-gray-100 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center" in:fade={{ delay: 150, duration: 100, axis: 'x'}}>
         <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
         </svg>
      </button>
   </span>
{/if}

<div class="flex flex-col w-full h-screen overflow-y-auto scrollbar-trigger relative transition-all ease-out">
   
   {#if chat.messages.length > 0}  

      <div class="mb-auto">
         {#each chat.messages as message}
            {#if message.isUser}
               <User message={message.content}/>
            {:else}
               <Model message={message.content}/>
            {/if}
         {/each}
      </div>

   {:else}

      <div class="mb-auto flex items-center justify-center">
         <h1 class="text-4xl text-right pr-4 pt-[220px] w-[250px] h-[65px] coop-font text-[#565869] relative bg-inherit">CoopLlama
            <img src={img} alt="CoopLlama logo" class="absolute top-[225px] right-[216px] w-[35px] h-[35px] rounded-full"/>
         </h1>
      </div>
   
   {/if}

   <Send on:submitText={handlesubmitText}/>
</div>