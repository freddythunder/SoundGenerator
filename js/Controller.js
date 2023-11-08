var sound;
window.onload = () => {

    let startHz, endHz, duration, func, oscType, gainIn, perIn, inPer, inSpeed, gainOut, outPer, outSpeed;
    // UI building: function list
    Object.keys(Easing).forEach((func) => {
        const funcs = document.querySelector('#funcs');
        funcs.options[funcs.options.length] = new Option(func, func);
    });

    // Init sliders && buttons
    Object.keys(sliders).forEach((slider) => {
        document.querySelector('#' + slider + 'Slider').addEventListener('input', function(e) {
            document.querySelector('#' + slider + 'Value').value=this.value;
            loadParams();
        });
        document.querySelector('#' + slider + 'Value').addEventListener('input', function(e) {
            document.querySelector('#' + slider + 'Slider').value=this.value;
            loadParams();
        })
    });


    document.querySelector('#funcs').addEventListener('change', function(e) {
        loadParams();
    });
    document.querySelectorAll('.btn-check').forEach((elm) => {
        elm.addEventListener('click', function(e) {
            loadParams();
        });
    });

    // control the fire button
    document.querySelector('#fireButton').addEventListener('click', function(e) {
        let steps = Data.getSteps(startHz, endHz, duration);
        let soundData = Data.getSoundData(startHz, endHz, steps.steps, Easing[func]);
        let gainData = Data.getGainData(duration, gainIn, inPer, gainOut, outPer);
        sound = new Sound();
        sound.playNow(soundData, gainData, steps, oscType);
    });

    // reset JS params based on UI conditions
    const loadParams = () => {
        startHz = document.querySelector('#StartHzValue').value ? +document.querySelector('#StartHzValue').value : 0;
        endHz = document.querySelector('#EndHzValue').value ? +document.querySelector('#EndHzValue').value : 0;
        duration = document.querySelector('#SecondsValue').value ? +document.querySelector('#SecondsValue').value : 0;
        func = document.querySelector('#funcs').value;
        oscType = document.querySelector('[name=oscType]:checked').id;
        gainIn = document.querySelector('#GainInValue').value ? +document.querySelector('#GainInValue').value : 1;
        inPer = document.querySelector('#InPerValue').value ? +document.querySelector('#InPerValue').value : 0;
        gainOut = document.querySelector('#GainOutValue').value ? +document.querySelector('#GainOutValue').value : 0;
        outPer = document.querySelector('#OutPerValue').value ? +document.querySelector('#OutPerValue').value : 0;
        let steps = Data.getSteps(startHz, endHz, duration);
        Graphing.chartIt(
            Data.getSoundData(startHz, endHz, steps.steps, Easing[func]),
            Data.getGainData(duration, gainIn, inPer, gainOut, outPer)
        );
    }
    loadParams();

    // load the player based on default settings
    const loadPlayer = () => {
        loadParams();
        if (startHz && endHz && duration) {
            // Player.loadPlayer(startHz, endHz, duration, oscType, func)
        }
    }




};