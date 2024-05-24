import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

  export default class LightningCard extends LightningElement {

     Mytitle= "Hello Ajay";

      handleclick(){

        this.ShowToast(this.Mytitle);
    } 
      ShowToast(FirstFunctionArrugument){
        const event = new ShowToastEvent({
          title:'Show toast ',
          message:FirstFunctionArrugument,
          variant:'warning',
          mode: 'dismissable',
        })
        this.dispatchEvent(event);
      }
    }