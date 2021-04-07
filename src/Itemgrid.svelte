<script>

import Card from './Card.svelte';
import items from "./data.js"


</script>


  
<!-- <div class="cards flex flex-row flex-wrap justify-center "> -->
<div  class="cards flex flex-row flex-wrap  items-start justify-center	">
{#each items as item}

<Card  item={item}>
    <span slot="title">
        <div class="content">
            {item.title}
        </div>
    </span>
    <span slot="info"> 
        {#if item.type == "Charger"}
            <div class="flex "><span class="w-2/3">Merkki:</span> <span>{item.brand}</span> </div>
            <div class="flex "><span class="w-2/3">Teho:</span> <span>{item.power}</span> </div>
            <div class="flex "><span class="w-2/3">Portit:</span> <span>{item.ports} / USB 2.0</span> </div>
        {:else}
            <div class="flex"><span class="w-2/3">Pituus:</span> <span>{item.length} m</span> </div>
            <div class="flex"><span class="w-2/3">Tyyppi:</span> <span>{item.type}</span> </div>
            <div class="flex "><span class="w-2/3">Merkki:</span> <span>{item.brand}</span> </div>
            <div class="flex n"><span class="w-2/3">Datansiirto:</span> <span> Kyllä</span> </div>
            <div class="flex "><span class="w-2/3">Teho:</span> <span>{item.power}</span> </div>
        {/if}
        
    </span>
    <span slot="image">
        <img class="w-72 h-52" src="{item.img}" alt="" />
    </span>
    <span slot="price">
        <div class="mt-3 mb-3 text-xl">
            Hinta: {item.price} €
        </div>
    </span>
</Card>


{/each}
</div>


