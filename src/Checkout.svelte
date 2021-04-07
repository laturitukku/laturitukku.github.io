<svelte:head>
  <meta http-equiv="Content-Security-Policy" content="'unsafe-inline'">
</svelte:head>

<script>
import {bags} from "./bag.js"


 let len = bags.length
  export let posti
  export let total

  const postimaksu = { price: 'price_1IP7rmGhVVHvhcusm3eFvOwJ', quantity: 1}
  const stripe = Stripe('pk_test_51IP1JQGhVVHvhcusuGt7PBVFLKDzF60m7mGTaGK0lxSRyVrUKhRmoiobbMSXuC2hxDST5Z37TX0GU5vhmtkCDNam00GEFKFths');



  function btn() {

    let items = bags.map(bag => ({ price: bag.id, quantity: bag.amount}));
  console.log(items)
  console.log(posti, + " - " +total)
  //add delivery cost if over 35
  if(posti != 0 ){items.push(postimaksu)}


    stripe.redirectToCheckout({
      shippingAddressCollection:{
        allowedCountries: ["FI"],
    } ,
      lineItems: items,
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
      }
    });
};
  

</script>


<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->


{#if total === 0}
    <button
      disabled
      class="text-center uppercase text-xl py-5 bg-gray-400 w-full text-white font-bold rounded-full shadow-md ">
      Siirry maksamaan
  </button>
{:else}
  <button
      on:click={btn}
      class="text-center uppercase text-xl py-5 bg-green-400 w-full text-white font-bold rounded-full shadow-md hover:bg-green-500">
      Siirry maksamaan
  </button>
{/if}
