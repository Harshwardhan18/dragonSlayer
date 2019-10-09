new Vue({
    el: '#app',
    data: {
        isStart: false,
        pHealth: 100,
        mHealth: 100,
        countA: 0,
        countH: 0,
        logStore: []
    },
    methods: {
        start() {
            this.isStart = true;
            this.pHealth = 100;
            this.mHealth = 100;
            this.countA = 0;
            this.countH = 0;
            this.logStore=[];
        },
        attack() {
            if (this.mHealth <= 0) {
                this.mHealth = 0;
                alert('you WON!!!!');
                this.isStart = false;
                return;
            } else {
                this.pAttack(10);
            }
            if (this.pHealth <= 0) {
                this.pHealth = 0;
                alert('you LOST!!');
                this.isStart = false;
            } else {
                this.mAttack(10);
            }

        },
        spAttack() {
            this.countA++;
            if (this.countA < 4) {
                if (this.mHealth <= 0) {
                    this.mHealth = 0;
                    alert('you WON!!!!');
                    this.isStart = false;
                    return;
                }
                else this.pAttack(20);
                if (this.pHealth <= 0) {
                    this.pHealth = 0;
                    alert('you LOST!!');
                    this.isStart = false;
                }
                else this.mAttack(10);
            }
        },
        heal() {
            this.countH++;
            if (this.countH < 4) {
                if (this.pHealth >= 90) {
                    this.pHealth = 100;
                }
                else this.pHealth + 10;
                if (this.pHealth <= 0) {
                    this.pHealth = 0;
                    alert('you LOST!!');
                    this.isStart = false;
                }
                else this.mAttack(10);
            }
            this.logStore.unshift({ isPlayer: true, text: `Player Healed by 10 points`});
        },
        gUp() {
            this.isStart = false;
            alert('SUCKER');
        },
        mAttack(min) {
            let pDamage = Math.max(Math.floor(Math.random() * min), 5);
            this.pHealth -= pDamage;
            this.logStore.unshift({ isPlayer: false, text: `Player damaged by Monster by ${pDamage} points` });
    
        },
        pAttack(min) {
            let mDamage = Math.max(Math.floor(Math.random() * min), 2);
            this.mHealth -= mDamage;
            this.logStore.unshift({ isPlayer: true, text: `Monster damaged by Player by ${mDamage} points`});
       }

    }
});