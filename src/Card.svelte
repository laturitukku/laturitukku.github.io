
<script>
	import Icon from 'fa-svelte'
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
	import Button from "./Button.svelte"


	export let item

	


function toggleActive() { 
	item.active = !item.active;
   	console.log(item.active)
}


</script>

<style>

</style>


<article  class="contact-card my-4 mx-4 w-72 p-5 shadow-md pb-7">
	<h2 class="font-bold pb-3 text-center text-xl ">
		<slot name="title">
			<span class="missing">Unknown title/span>
		</slot>
		
		<div on:click={toggleActive} class="cursor-pointer font-thin bg-gray-100 text-base -mx-5 mt-1 pb-1 "> 
			
			Lisätietoja 
			{#if item.active}
				<Icon  class="-mt-1" icon={faAngleDown}></Icon>
			{:else}
			<Icon class="-mt-1" icon={faAngleRight}></Icon>
			{/if}
		</div>
	</h2>
	{#if item.active}
		<div  class="info pb-5">
			<slot name="info">
				<span class="missing">Unknown info</span>
			</slot>
		</div>
	{/if}
	<slot name="image">
		<span class="missing">Unknown img</span>
	</slot>
	<slot name="price">
		<span class="missing">Unknown price</span>
	</slot>
	<div class=" w-full uppercase flex justify-between   ">
		<Button item={item}  />			
	</div>




</article>