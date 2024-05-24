import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

  export default class LightningCard extends LightningElement {

     Mytitle= "Hello Ajay";
     connectedCallback(){

      let callMyFunction = this.myFunction(10 , 2);

      window.alert("callMyFunction by arrow function:"+callMyFunction);

     }

      myFunction=(dividend,divisor) =>{
        return(dividend/divisor);

      }
      }