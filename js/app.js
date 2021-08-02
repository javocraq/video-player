const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $fordward = document.querySelector('#fordward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handlebackward);
$fordward.addEventListener('click', handlefordward);

function handlePlay(){
    $video.play();
    $play.hidden = true
    $pause.hidden = false
}

function handlePause(){
    $video.pause();
    $pause.hidden = true
    $play.hidden = false
}


function handlebackward(){
    $video.currentTime -= 10
    console.log('Retroceder 10 segundos', $video.currentTime)
}

function handlefordward(){
    $video.currentTime += 10
    console.log('Adelantar 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado', $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    /*console.log('tiempo actual', $video.currentTime)*/
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value);
}