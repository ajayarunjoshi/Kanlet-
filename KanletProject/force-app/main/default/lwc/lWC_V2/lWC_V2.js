import { LightningElement } from 'lwc';

export default class LWC_V2 extends LightningElement 
{
   number1;
   number2;
   AddRes = 0;
   AddSub = 0;
   AddMul = 0;
   AddDiv = 0;

   aval(event)
   {
      this.number1 = event.target.value;
      console.log (this.number1);

   }

   bval(event)
   {

      this.number2 = event.target.value;    
      console.log (this.number2);
   }

 clacme()
  {
     this.AddRes =ParsInt(this.number1) + parsInt(this.number2); 
     this.AddSub = this.number1 - this.number2;
     this.AddMul = this.number1 * this.number2;
     this.AddDiv = this.number1 / this.number2;
   }
}