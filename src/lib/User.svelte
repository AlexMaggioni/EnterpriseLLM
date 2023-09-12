<script>
   export let message = '';
   import img from '$lib/images/coop.png';
</script>

<div class="w-full h-auto bg-[#343640] text-base">
   <div class="flex p-4 gap-4 md:gap-6 md:max-w-2xl lg:max-w-3xl xl:max-w-3xl md:py-6 xl:px-0 m-auto text-[#ececf1] justify-center">
      <!-- User Profile picture -->
      <div class="flex-shrink-0 flex rounded-md bg-[#0768af] w-8 h-8 justify-center items-center">
         <img alt="User" loading="lazy" width="20" height="20" decoding="async" class="rounded-sm" src={img} style="color: transparent;">
      </div>
      
      <!-- Main content -->
      <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
         <!-- User Message -->
         <div class="flex flex-grow flex-col gap-3">
            <div class="min-h-[20px] flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words">
               <div class="empty:hidden">
                   {@html message}
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
