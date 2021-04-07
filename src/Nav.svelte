

<script>
    import { page, current } from './stores.js';
    import Icon from 'fa-svelte'
    import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
    
    
    
    
    
    
    
    let icon = faBatteryThreeQuarters;
    
    
    $: console.log(page)
    
    </script>
    
    <style>
        .selected {
        border-bottom: rgba(59, 130, 246, var(--tw-text-opacity)) solid;
        }
    </style>
    
    
    
    <nav class="flex flex-col sm:flex-row justify-center h-15 w-full bg-gray-200 ">
        <span class="sm:w-1/4 flex-row py-4 px-6 inline text-center sm:text-left" >
            <span class="font-bold text-lg">
                LATURI
                <Icon class="text-3xl -mt-1 text-blue-500" icon={icon}>
                </Icon>
                TUKKU
              </span>
        </span>
        <button on:click={page.tuotteet} 
                class="sm:w-1/4 border-0 focus:outline-none text-gray-600 py-4 px-6 block hover:text-blue-500 uppercase"
                class:selected="{$page == 'tuotteet'}">
           Tuotteet
        </button>
       
        <button on:click={page.ostoskori} 
                class="sm:w-1/4 border-0 focus:outline-none text-gray-600 py-4 px-6 block hover:text-blue-500 uppercase"
                class:selected="{$page == 'ostoskori'}">
            Ostoskori
        </button>
       
        <button on:click={page.tietoa} 
                class="sm:w-1/4 border-0 focus:outline-none text-gray-600 py-4 px-6 block hover:text-blue-500 uppercase"
                class:selected="{$page == 'tietoa'}">
            Meistä
        </button>
        
    </nav>
    
    
    
    
    
    
    