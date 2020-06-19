'use strict';

let onYouTubePlayerAPIReady;

(function() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  
  const firstScriptTag = document.querySelector('script');
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  const videoContainer = document.querySelector('.uiux-video-background');
  const videoPlayerWrapper = videoContainer.querySelector('[data-src]');
  const videoId = videoPlayerWrapper.getAttribute('data-src');
  const buffer = parseInt(videoPlayerWrapper.getAttribute('data-buffer') || 2000);

  const resizeBackgroundVideo = (videoPlayerWrapper) => {
    const playerBox = {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      marginTop: 0,
      marginLeft: 0,
    };

    const [margin, overprint] = [24, 100];
    
    playerBox.width = playerBox.width + ((playerBox.width * margin) / 100);
    playerBox.height = Math.ceil((9 * playerBox.width) / 16);
    playerBox.marginTop = -((playerBox.height - playerBox.height) / 2);
    playerBox.marginLeft = -((playerBox.width * (margin / 2)) / 100);
    
    if (playerBox.height < playerBox.height) {
      playerBox.height = playerBox.height + ((playerBox.height * margin) / 100);
      playerBox.width = Math.floor((16 * playerBox.height) / 9);
      playerBox.marginTop = -((playerBox.height * (margin / 2)) / 100);
      playerBox.marginLeft = -((playerBox.width - playerBox.width) / 2);
    }
    
    playerBox.width += overprint;
    playerBox.height += overprint;
    playerBox.marginTop -= overprint / 2;
    playerBox.marginLeft -= overprint / 2;
    
    videoPlayerWrapper.style.width = playerBox.width + 'px';
    videoPlayerWrapper.style.height = playerBox.height + 'px';
    videoPlayerWrapper.style.marginTop = playerBox.marginTop + 'px';
    videoPlayerWrapper.style.marginLeft = playerBox.marginLeft + 'px';
  };
  
  onYouTubePlayerAPIReady = () => {
    player = new YT.Player(videoPlayerWrapper.getAttribute('id'), {
      height: '100%',
      width: '100%',
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        playlist: videoId,
        loop: 1,
        modestbranding: 1,
        showinfo: 0
      },
      events: {
        'onReady': () => {
          player.addEventListener('resize', resizeBackgroundVideo);
          resizeBackgroundVideo(videoPlayerWrapper);
        },
        'onStateChange': () => {
          setTimeout(() => videoContainer.style.opacity = 1, buffer);
          setTimeout(() => videoContainer.style.opacity = 0, (player.getDuration() * 1000) - buffer);
        },
      }
    });
  };
})();
