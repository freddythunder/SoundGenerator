/** Graphing for middle of UI **/
let mychart;
const Graphing = {
    chartIt: function(soundData, gainData) {
        let chartLabels = [...soundData.keys()];
        // normalize the gain data against the mean of the frequency
        let avgFreq = soundData.reduce((acc, c) => acc + c, 0) / soundData.length;
        gainData = gainData.map((x) => x * avgFreq);
        let data = {
            labels: chartLabels,
            datasets: [
                {
                    label: 'freq',
                    data: soundData,
                    fill: false,
                    borderColor: '#0C0',
                    backgroundColor: '#79a153'
                },
                {
                    label: 'gain',
                    data: gainData,
                    fill: true,
                    borderColor: '#a14467',
                    backgroundColor:'#6c1c4c'
                }
            ]
        };
        if (typeof mychart !== 'undefined') {
            mychart.destroy();
        }
        mychart = new Chart(document.querySelector('#acquisitions'), {
            type: 'line',
            data: data,
            options: {
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}