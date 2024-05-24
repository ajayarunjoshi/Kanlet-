import { LightningElement } from 'lwc';

export default class LWC_V1 extends LightningElement 
{
    //primitive data type --->string,Integer,Decimal,boolean etc...
   name = 'Ajay Joshi';
   city ='Pune';
   age = '29';
   Sal = 17000; 

          // Array data--->  more then one data

      cities=['Hyd','Blr','Chn','Mum','Tvs'];
      evennum =[46,58,22,102,38,92,48];
      
    //JSON Data
    Student = {'Name': 'Ravi','class':9,'Age':15,'city':'Mumbai'}; 
    
       subme(event)
   {
      this.name= 'Prichi';
      this.city= 'Latur';
      this.age= 'nagar';
      this.sal= '20000';

   } 
}