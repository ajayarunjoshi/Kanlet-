import { LightningElement, track } from 'lwc';

export default class CountdownWithButtons extends LightningElement {
    @track timeRemaining = '00:00:00';
    @track isCounting = false;
    countdownInterval;

    handleStart() {
        if (!this.isCounting) {
            
            const targetDate = new Date();
            targetDate.setMinutes(targetDate.getMinutes() + 180);
            const targetTime = targetDate.getTime();

            
            this.isCounting = true;
            this.countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetTime - now;

                if (distance <= 0) {
                    
                    this.handleEnd();
                } else {
                   
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                   
                    this.timeRemaining = `${this.formatTimeUnit(hours)}:${this.formatTimeUnit(
                        minutes
                    )}:${this.formatTimeUnit(seconds)}`;
                }
            }, 1000);
        }
    }

    handleEnd() {
        
        clearInterval(this.countdownInterval);
        this.isCounting = false;
        this.timeRemaining = '00:00:00';
    }

    formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit;
    }
}