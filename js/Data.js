/** Class to return data based on UI settings **/
const Data = {
    stepRate: 100, // 100 frames per second of audio
    getSteps: function(min, max, duration) {
        let steps = duration * this.stepRate;
        let freqStep = (max - min) / steps;
        let timeStep = duration / steps;
        return {
            duration: duration,
            steps: steps,
            freqStep: freqStep,
            timeStep: timeStep
        }
    },
    getGainData: function(duration, gainIn, inPer, gainOut, outPer) {
        let steps = duration * this.stepRate;
        let gainData = [];
        let inFrames = 0;
        let outFrames = 0;
        let i = 0;
        let inGain = [];
        let outGain = [];
        if (inPer > 0) {
            inFrames = (steps) * (inPer / 100);
            // repurpose getSoundData for easing functions
            inGain = this.getSoundData(gainIn, 1, inFrames, Easing['easeOut']);
        }
        if (outPer > 0) {
            outFrames = (steps) * (outPer / 100);
            outGain = this.getSoundData(1, gainOut, outFrames, Easing['easeIn']);
        }
        gainData = inGain.concat(Array((steps - inGain.length - outGain.length)).fill(1));
        gainData = gainData.concat(outGain);
        return gainData;
    },
    getSoundData: function(min, max, intervals, fN) {
        var diff = 1 / intervals,
            difference = max - min,
            soundData = [];
        for (let i = diff; i <= 1; i += diff) {
            soundData.push(min + (difference * fN(i)));
        }
        return soundData;
    }

}