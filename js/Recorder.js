let mediaStreamDestination, recorder, chunks, source;
function setupRecorder(context, gain) {
    mediaStreamDestination = context.createMediaStreamDestination();
    const mime = ['audio/wav', 'audio/mpeg', 'audio/webm', 'audio/ogg'].filter(MediaRecorder.isTypeSupported)[0];
    recorder = new MediaRecorder(mediaStreamDestination.stream, {
        mimeType: mime
    });
    chunks = [];
    gain.connect(mediaStreamDestination);
    recorder.addEventListener('start', function(event) {
        if (source !== null) {
            URL.revokeObjectURL(source);
        }
        chunks.length = 0;
    });
    recorder.addEventListener('dataavailable', function(event) {
        const { data } = event;
        chunks.push(data);
    });
    recorder.addEventListener('stop', function(event) {
        const blob = new Blob(chunks, { 'type': 'audio/wav; codecs=0' });
        source = URL.createObjectURL(blob);
        document.getElementById('dude').src=source;
    });
}
function startRecorder() {
    recorder.start();
}
function stopRecorder() {
    recorder.stop();
}