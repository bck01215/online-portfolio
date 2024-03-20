<script lang="ts">
    import profile from "$lib/profile.jpg";
    import { Person } from "$lib/skills";
    import Icon  from '@iconify/svelte';
    let isHover = "";

    function toggleHover(name: string) {
        isHover = name;
    }

    function resetHover() {
        isHover = "";
    }

</script>
  
  <div class="bg-black text-white h-screen w-56 flex flex-col justify-between border-r border-gray-700">
    <!-- Navbar header -->
    <div class="py-4 px-6 flex justify-center items-center mb-10">
        <img src="{profile}" alt="Profile" class="w-16 h-16 rounded-full object-cover">
    </div>
    
    <!-- Navbar links -->
    <nav class="flex-1">
      <ul class="space-y-2">
        {#each Person.resources as item}
          <li class="flex flex-row pl-3 pt-10 text-stone-300 text-2xl" on:mouseenter="{() => toggleHover(item.name)}" on:mouseleave="{() => resetHover()}">
            <a href="{item.link}" class="flex flex-row {isHover === item.name ? 'text-white font-semibold' : 'text-stone-300'}">
                <Icon icon="{item.icon.name}"  class="mr-4 w-10 h-10 duration-300 {isHover === item.name ?  'text-white h-16 w-16': item.icon.color}" />
                    {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    
  </div>
  