<svelte:head>
	<!-- <script src="https://js.stripe.com/v3/"></script> -->
 </svelte:head>

<script>
	import {bags} from "./bag.js"
	import Checkout from "./Checkout.svelte"

	let items = ["0 (Poista)",1,2,3,4,5,6,7,8,9]
	let posti = 0
	let total = 0

	function countTotal(event){
		total = 0
		//delete or add to total
		for (let i = 0; i < bags.length; i++) {
			if (bags[i].amount == "0 (Poista)") {
				bags.splice(i, 1);
				countTotal();
				break;
			}
			else{
				total = bags[i].price * bags[i].amount + total;

			}
		};
		//is there post payment?
		if (total > 30 || bags.length == 0 || total == 0) {posti = 0}
		else{posti = 9.80}
		total = total + posti
		console.log("total: " + total)
		console.log("posti: " + posti)
	}
	countTotal();


	// function addClick(event) {
	// 	console.log(this.children[0].innerHTML);
		
	// }



</script>
<style>

	table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

 th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f5f5f5;
}
  </style>
  

<!-- <h1 class="text-center uppercase text-xl py-5 bg-blue-400 text-white">valitut tuotteet</h1> -->

<div class="pb-10 px-4 ">	
	<table>
		  <tr>
			<th>Tuote</th>
			<th>Määrä</th>
			<th>Hinta</th>
		  </tr>
	</table>
{#if bags.length == 0}

	<div class="w-full bg-red-400 py-3 mb-3 mt-3 text-white px-2 text-lg"> 
		<strong>Huom!</strong> Ei valittuja tuotteita
	</div>
 {/if}
	<table>
		  {#each bags as bag}
			<tr class="font-normal" >
				<th class="font-normal">{bag.item}</th>
				<!-- <th class="font-normal">{value = bag.amount}</th> -->
				<th class="font-normal">					
					<select on:click={countTotal} bind:value={bag.amount}>
					{#each items as item}
						<option  value={item}>{item}</option> 
					{/each}
					</select>
				</th>
				<th class="font-normal">{(bag.price * bag.amount).toFixed(2)}</th>
		  </tr>
		  {/each}
		  <tr>
			<th>Postikulut</th>
			<th></th>
			<th>{(posti).toFixed(2)}</th>
		  </tr>
		  <tr class="border-t-4 border-blue-500">
			<th></th>
			<th>Yhteensä:</th>
			<th >{(total).toFixed(2)}</th>
		  </tr>

	</table>
</div>

<!-- <Checkout /> -->
<Checkout posti={posti} total={total}/>

