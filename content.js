document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        // Get the video element on YouTube
        const video = document.querySelector('video');
        if (video && !video.paused) {
            video.pause();
        }
    }
    else{
        // Get the video element on YouTube
        const video = document.querySelector('video');
        if(video && video.paused){
            video.play();
        }
    }
});
