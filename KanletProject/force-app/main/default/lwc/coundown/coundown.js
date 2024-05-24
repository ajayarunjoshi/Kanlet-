import { LightningElement, track } from 'lwc';

export default class CountdownTimer extends LightningElement {
    @track timeRemaining = '00:00:00';

    connectedCallback() {
        // Set the target date and time for the countdown
        const targetDate = new Date('2023-12-31T23:59:59').getTime();

        // Update the countdown every second
        this.countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                // Countdown is over
                this.timeRemaining = '00:00:00';
                clearInterval(this.countdownInterval);
            } else {
                // Calculate time units
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Format time units as HH:MM:SS
                this.timeRemaining = `${this.formatTimeUnit(hours)}:${this.formatTimeUnit(
                    minutes
                )}:${this.formatTimeUnit(seconds)}`;
            }
        }, 1000);
    }

    formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    disconnectedCallback() {
        // Clear the interval when the component is removed from the DOM
        clearInterval(this.countdownInterval);
    }
}