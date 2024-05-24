public class AccountDetailsLWC1 {                                    // AccountDetailsLWC1 is class Name 
    /*
    public static list<Account> getAccountDetails(){                 //getAccountDetails is Method Name 
        list<Account> acclist = [Select Name from Account Limit 20];
        System.debug('Account Name ==>'+acclist);
        return acclist;
    }
*/
    /*
    public static list<Contact> getContactDetails(){
        list <Contact> Contactlist = [Select Account.Name, Email, Phone, MobilePhone  from Contact  limit 5];
        System.debug('Contact Name ==>'+Contactlist);
        return Contactlist;
    }

*/  
     public static list<Opportunity> getOpportunityDetails(){
        list <Opportunity> Oppolist = [Select Amount, CloseDate, AccountId from Opportunity limit 5];
        System.debug('Opportunity Name ==>'+Oppolist);
        return Oppolist;
     }
}