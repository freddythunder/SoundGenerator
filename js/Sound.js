/** Actual Sound Generator **/
const Sound = class {
    testvar = 'test';

    constructor(context = new(window.AudioContext || window.webKitAudioContext)()) {
        this.context = context;
        this.osc = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.now = 0;
        this.duration = 0;
    }

    createContext(soundData, gainData, steps, oscType) {
        this.now = this.context.currentTime;
        let i = 0;
        let time,gain=1;
        this.osc.type = oscType.toLowerCase();
        soundData.forEach((freq) => {
            i++;
            time = (steps.timeStep * i);
            this.osc.frequency.setValueAtTime(freq, time);
        });
        i=0;
        gainData.forEach((g) => {
            i++;
            time = (steps.timeStep * i);
            g = Math.pow(g, 5);
            this.gain.gain.setValueAtTime(g, time);

        });
        // this.gain.gain.setValueAtTime(0.00001, 1);
        // this.gain.gain.exponentialRampToValueAtTime(1, this.context.currentTime + .04)
        // this.gain.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + .39);
        return this.context;
    }

    playNow(soundData, gainData, steps, oscType) {
        this.createContext(soundData, gainData, steps, oscType);
        this.osc.connect(this.gain);
        this.gain.connect(this.context.destination);
        setupRecorder(this.context, this.gain);
        startRecorder();
        this.osc.start(this.now);
        this.osc.stop(this.now + steps.duration);
        setTimeout(function() {
            stopRecorder();
        }, (steps.duration * 1000));
    }



}