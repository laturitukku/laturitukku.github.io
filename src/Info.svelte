<script>
import Icon from 'fa-svelte'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'
</script>


<style>
    /* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
}
</style>




<div class="w-full px-6">
    <div class="w-full bg-blue-400 py-3 mb-3 text-white px-2 ">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    <Icon class=" text-2xl " icon={faShippingFast}></Icon>
    <strong>Nopea!</strong> 7 arkipäivän toimitusaika
    </div>
    <div class="w-full bg-blue-400 py-3 mb-3 text-white px-2">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <Icon class=" text-2xl " icon={faPiggyBank}></Icon>
        <strong>Säästä!</strong> Postikulut 0€ yli 30€ tilauksiin
    </div>
    <div class="w-full bg-blue-400 py-3 mb-3 text-white px-2">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <Icon class=" text-2xl " icon={faHandshake}></Icon>
        <strong>Maksa!</strong> Maksu pankkikortilla tai GooglePay
    </div>
</div>


