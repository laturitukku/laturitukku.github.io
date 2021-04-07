<script>

import Icon from 'fa-svelte'
import { faCartPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import {bags} from "./bag.js"
import { page} from './stores.js';

	
export let item
const postimaksu = { price: 'price_1IP7rmGhVVHvhcusm3eFvOwJ', quantity: 1}
const stripe = Stripe('pk_test_51IP1JQGhVVHvhcusuGt7PBVFLKDzF60m7mGTaGK0lxSRyVrUKhRmoiobbMSXuC2hxDST5Z37TX0GU5vhmtkCDNam00GEFKFths');

//"lisää koriin" - click
function addClick(event) {
    let bag = {
        item: item.title,
        price:item.price,
        amount: 1,
        id: item.id,
    };

    //is item allready on bag?
    let itemIndex = bags.findIndex(e => e.item === bag.item);
    //if not, put it in
    if (itemIndex === -1) {
        bags.push(bag)
    }
    //if is, change amount
    else{
        console.log(itemIndex + "is on, add amount ")
        bags[itemIndex].amount = bags[itemIndex].amount +1
      
    }
    len = bags.length
}

//"osta heti" - click ??????? only cables work
function quickCheckout(event){
  let quick = [{ price: item.id, quantity: 1},];
  //add delivery cost if over 30
  if(item.price < 30 ){quick.push(postimaksu)}


    stripe.redirectToCheckout({
      shippingAddressCollection:{
        allowedCountries: ["FI"],
    } ,
      lineItems: quick,
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
}


</script>


<div class="flex flex-row  w-full">
    
    <div class="flex flex-col w-1/3">
        <button on:click={addClick} class="ml-3  h-14   bg-green-500 hover:bg-green-700 text-white font-bold  rounded-3xl uppercase  w-14 ">
            <Icon class=" text-2xl" icon={faCartPlus}></Icon>
        </button>

        <div class="font-thin text-xs self-center p-1 text-center ">Lisää koriin</div>
    </div>
        <div class="flex flex-col  w-1/3">
            <button on:click={quickCheckout}
                    class="ml-3 h-14 bg-yellow-500 hover:bg-yellow-700 text-white  rounded-3xl uppercase  w-14 ">
                <Icon class=" text-2xl" icon={faCreditCard}></Icon> 
            </button>
            <div class="font-thin text-xs self-center p-1 text-center">Osta heti</div>
        </div>
        <div class="flex flex-col  w-1/3">
            <button on:click={() => window.scrollTo(0,0)}
                    on:click={page.ostoskori}
                    class="h-14 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl uppercase  w-14 ml-3">
                <Icon class=" text-2xl" icon={faReceipt}></Icon> 
            </button>
            <div class="font-thin text-xs self-center p-1 text-center">Ostoskoriin</div>
        </div>
    </div>

