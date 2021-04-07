<script>
import Itemgrid from './Itemgrid.svelte';
import About from './About.svelte';
import Info from './Info.svelte';
import Ostoskori from './Ostoskori.svelte';
import Nav from './Nav.svelte';  
import Footer from './Footer.svelte';  
import { page } from './stores.js';



</script>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>    
	


<Nav/>

<div class="max-w-screen-lg bg-grey-50 m-auto mt-10 min-h-screen">
	{#if $page == 'tuotteet'}
		<Info />
		<Itemgrid/>
	{:else if $page == 'tietoa'}
		<About />
	{:else if $page == 'ostoskori'}
		<Info />
		<Ostoskori />
	{:else}
		<Itemgrid/>
	{/if}
</div>

<Footer/>