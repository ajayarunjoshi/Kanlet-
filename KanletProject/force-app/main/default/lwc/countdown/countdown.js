import { LightningElement, track } from 'lwc';

export default class LoginPage extends LightningElement {
    @track username = '';
    @track password = '';
    @track showError = false;

    handleUsernameChange(event) {
        this.username = event.target.value;
        this.showError = false;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
        this.showError = false;
    }

    handleLogin() {
        // Basic validation: Check if both fields are not empty
        if (this.username.trim() === '' || this.password.trim() === '') {
            this.showError = true;
        } else {
            // Implement your login logic here
            // For demonstration purposes, let's log the username and password to the console
            console.log('Username:', this.username);
            console.log('Password:', this.password);

            // You can call Apex methods or perform authentication with your backend server here
        }
    }
}