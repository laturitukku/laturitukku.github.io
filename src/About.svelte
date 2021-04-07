<script>
    import AccountTieOutline from "svelte-material-icons/AccountTieOutline.svelte";
    import BatteryHeartOutline from "svelte-material-icons/BatteryHeartOutline.svelte";
    import CreditCardOutline from "svelte-material-icons/CreditCardOutline.svelte";
    import TruckDeliveryOutline from "svelte-material-icons/TruckDeliveryOutline.svelte";

    
  let size = "50px";
  let width = size;
  let height = size;
  let color = "currentColor";
//   let viewBox = "0 0 24 24";

</script>


<div class="justify-center flex flex-col text-center">
    <div class="text-6xl font-bold pb-4">
        Latritukku.fi 
    </div>
    <div class="text-xl font-thin">
        Luotettavaa tukkumyyntiä suoraan valmistajalta
    </div>
</div>

<div class="flex flex-row">
<img class="lg:block hidden w-1/3" src="img/phone1.svg" alt="">
<div class="m-6 mt-20 lg:w-2/3 w-11/12 h-auto space-y-16 flex flex-col">
    <div class="flex flex-row ">
        <div class="mr-4 bg-yellow-500 rounded-full flex items-center justify-center" style="height: 70px; width: 80px;"> 
            <AccountTieOutline {color} {size} {width} {height}  />
        </div>
        <div class=" w-full min-h-20 ">
            <div class="text-xl font-bold pb-2">
                Toiminta 
            </div>
            <div class="text-xl font-thin">
                Luotettavaa tukkumyyntiä suoraan valmistajalta
            </div>
        </div>
    </div>
    <div class="flex flex-row ">
        <div class="mr-4 bg-yellow-500 rounded-full flex items-center justify-center" style="height: 70px; width: 80px;">      
            <BatteryHeartOutline style {color} {size} {width} {height}  />
        </div>
        <div class=" w-full h-auto ">
            <div class="text-xl font-bold pb-2">
                Tuotteet 
            </div>
            <div class="text-xl font-thin">
                Luotettavaa tukkumyyntiä suoraan valmistajalta
            </div>
        </div>
    </div>
    <div class="flex flex-row ">
        <div class="mr-4 bg-yellow-500 rounded-full flex items-center justify-center" style="height: 70px; width: 80px;"> 
            <CreditCardOutline {color} {size} {width} {height}  />
        </div>
        <div class=" w-full min-h-20">
            <div class="text-xl font-bold pb-2">
                Maksaminen 
            </div>
            <div class="text-xl font-thin">
                Luotettavaa tukkumyyntiä suoraan valmistajalta
            </div>
        </div>
    </div>
    <div class="flex flex-row ">
        <div class="mr-4 bg-yellow-500 rounded-full flex items-center justify-center" style="height: 70px; width: 80px;"> 
            <TruckDeliveryOutline {color} {size} {width} {height}  />
        </div>
        <div class=" w-full min-h-20">
            <div class="text-xl font-bold pb-2">
                Toimitus 
            </div>
            <div class="text-xl font-thin">
                Luotettavaa tukkumyyntiä suoraan valmistajalta
            </div>
        </div>
    </div>
</div>
</div>