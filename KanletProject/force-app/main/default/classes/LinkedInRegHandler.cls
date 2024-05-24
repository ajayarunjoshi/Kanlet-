//TODO:This auto-generated class includes the basics for a Registration
//Handler class. You will need to customize it to ensure it meets your needs and
//the data provided by the third party.
global class LinkedInRegHandler implements Auth.RegistrationHandler {
    //Creates a Standard salesforce or a community user
    global User createUser(Id portalId, Auth.UserData data) {
        if (data.attributeMap.containsKey('sfdc_networkid')) {
            //We have a community id, so create a user with community access
            //TODO: Get an actual account
            Account a =[SELECT Id FROM account WHERE name = 'LinkedIn Account'];
            Contact c = new Contact();
            c.accountId = a.Id;
            c.email = data.email;
            c.firstName = data.firstName;
            c.lastName = data.lastName;
            insert(c);
            //TODO: Customize the username and profile. Also check that the username 
            //doesn't already exist and possibly ensure there are enough org licenses
            //to create a user. Must be 80 characters or less.
            User u = new User();
            Profile p =[SELECT Id FROM profile WHERE name = 'Customer Portal Manager'];
            u.username = data.firstName + '@sfdc.linkedin.com';
            u.email = data.email;
            u.lastName = data.lastName;
            u.firstName = data.firstName;
            String alias = data.firstName;
            //Alias must be 8 characters or less
            if (alias.length() > 8) {
                alias = alias.substring(0, 8);
            }
            u.alias = alias;
            u.languagelocalekey = UserInfo.getLocale();
            u.localesidkey = UserInfo.getLocale();
            u.emailEncodingKey = 'UTF-8';
            u.timeZoneSidKey = 'America/Los_Angeles';
            u.profileId = p.Id;
            u.contactId = c.Id;
            return u;
        } else {
            //This is not a community, so create a regular standard user
            User u = new User();
            Profile p =[SELECT Id FROM profile WHERE name = 'Standard User'];
            //TODO: Customize the username. Also check that the username doesn't
            //already exist and possibly ensure there are enough org licenses
            //to create a user. Must be 80 characters or less
            u.username = data.firstName + '@salesforce.com';
            u.email = data.email;
            u.lastName = data.lastName;
            u.firstName = data.firstName;
            String alias = data.firstName;
            //Alias must be 8 characters or less
            if (alias.length() > 8) {
                alias = alias.substring(0, 8);
            }
            u.alias = alias;
            u.languagelocalekey = UserInfo.getLocale();
            u.localesidkey = UserInfo.getLocale();
            u.emailEncodingKey = 'UTF-8';
            u.timeZoneSidKey = 'America/Los_Angeles';
            u.profileId = p.Id;
            return u;
        }
    }
    //Updates the user's first and last name
    global void updateUser(Id userId, Id portalId, Auth.UserData data) {
        User u = new User(id = userId);
        u.lastName = data.lastName;
        u.firstName = data.firstName;
        update(u);
    }
}