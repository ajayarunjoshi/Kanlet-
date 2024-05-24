import { LightningElement } from 'lwc';

export default class GrateOf3Number extends LightningElement {
    
    Firstnum;
    Secondnum;
    Thirdnum;

    fn(event)
    {
         this.Firstnum = event.target.value;
    }
    
    Sn(event)
    {
         this.Secondtnum = event.target.value;
    }

    Tn(event)
    {
         this.Thirdnum = event.target.value;
    }

    Calme(event)
    {
        if(parseInt(this.Firstnum)>parseInt(this.Secondtnum) && parseInt(this.Firstnum) >parseInt (this.Thirdnum))
        {
            alert('The Grater Number is' + this.Firstnum);
        }

        else if(parseInt(this.Secondtnum)>parseInt(this.Firstnum) && parseInt(this.Secondtnum) >parseInt (this.Thirdnum))
        {
            alert('The Grater Number is' + this.Secondnum);
        }

        else
        {
            alert('The Grater Number is' + this.Thirdnum);
        }
    }

    Clearme(event)
    {
        
    }
}