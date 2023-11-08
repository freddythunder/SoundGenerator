<?php
$sliders = [
    'StartHz' => ['min' => 30, 'max' => 10000, 'step' => 1, 'value' => 930],
    'EndHz' => ['min' => 30, 'max' => 10000, 'step' => 1, 'value' => 495],
    'Seconds' => ['min' => .01, 'max' => 5, 'step' => .1, 'value' => 0.4],
    'GainIn' => ['min' => 0.1, 'max' => 1, 'step' => .1, 'value' => 0.1],
    'InPer' => ['min' => 0, 'max' => 50, 'step' => 1, 'value' => 0],
    'GainOut' => ['min' => 0.1, 'max' => 1, 'step' => .1, 'value'=> 0.1],
    'OutPer' => ['min' => 0, 'max' => 50, 'step' => 1, 'value'=> 0]
];


?>
<!DOCTYPE html>
<head>
    <title>Sound Generator JavaScript :: The Download Soundboad</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script>
        var sliders = <?= json_encode($sliders); ?>;
    </script>
    <script src="js/Easing.js?cache=<?= md5_file('js/Easing.js'); ?>"></script>
    <script src="js/Data.js?cache=<?= md5_file('js/Data.js'); ?>"></script>
    <script src="js/Sound.js?cache=<?= md5_file('js/Sound.js'); ?>"></script>
    <script src="js/Recorder.js?cache=<?= md5_file('js/Recorder.js'); ?>"></script>
    <script src="js/Graphing.js?cache=<?= md5_file('js/Graphing.js'); ?>"></script>
    <script src="js/Controller.js?cache=<?= md5_file('js/Controller.js'); ?>"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/soundboad.css?cache=<?= md5_file('style/soundboad.css'); ?>" type="text/css" rel="stylesheet">

</head>
<body>

<div class="console">
    <div class="container inner">
        <div class="d-flex">
            <div class="flex-fill m-1">
                <div class="logo">
                    <img src="images/preview.png">
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="flex-fill m-1">
                <div class="bounds">
                    <input type="radio" class="btn-check" name="oscType" id="sine" autocomplete="off" checked>
                    <label class="btn" for="sine">SINE</label>
                    <input type="radio" class="btn-check" name="oscType" id="triangle" autocomplete="off">
                    <label class="btn" for="triangle">TRIANGLE</label>
                    <input type="radio" class="btn-check" name="oscType" id="sawtooth" autocomplete="off">
                    <label class="btn" for="sawtooth">SAWTOOTH</label>
                    <input type="radio" class="btn-check" name="oscType" id="square" autocomplete="off">
                    <label class="btn" for="square">SQUARE</label>
                </div>
            </div>
            <div class="flex-fill m-1">
                <div class="bounds">
                    <div class="displayInline">Function</div>
                    <select id="funcs" class="form-control displayInline width50"></select>
                </div>
            </div>
            <div class="flex-fill m-1">
                <div class="bounds">
                    <div class="displayInline">Something</div>
                </div>
            </div>
            <div class="flex m-1">
                <div class="bounds">
                    <div class="form-check form-switch nopadd">
                        <button class="btn btn-danger" id="fireButton">Fire</button>
                        <!-- // the switch <div><input class="form-check-input left20" type="checkbox" role="switch" id="volDecay"></div> // -->
                    </div>
                </div>
            </div>
        </div>



        <div class="d-flex">
            <div class="flex-fill m-1">
                <div class="bounds">
                    <div class="sliders">
                        <div class="slider1">
                            <?php foreach ($sliders as $slider => $settings) { ?>
                                <div class="sliderWrapper">
                                    <?= $slider; ?><br>
                                    <input class="sliderVertical" type="range" id="<?= $slider; ?>Slider" step="<?= $settings['step']; ?>" min="<?= $settings['min']; ?>" max="<?= $settings['max']; ?>" value="<?= $settings['value']; ?>"><br>
                                    <input class="num" type="number" id="<?= $slider; ?>Value" value="<?= $settings['value']; ?>">
                                </div>
                            <?php } ?>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-fill m-1">
                <div class="bounds">
                    <div class="graphContainer"><canvas id="acquisitions"></canvas></div>
                </div>
            </div>
            <div class="flex-fill m-1">
                <div class="bounds">
                    &nbsp;
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="flex-fill m-1">
                <div class="bounds">
                    Result
                    <audio src="" id="dude" name="dude" controls>
                        Sucks to be you, you cannot use the HTML5 audio tag...
                    </audio>
                </div>
            </div>
        </div>
    </div>
</div>



</body>
</html>