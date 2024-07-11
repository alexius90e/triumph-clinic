const reviewsSlideVideos = document.querySelectorAll('.reviews__slide-video');
const whyProgramVideoContent = document.querySelector('.why-program__video-content');

reviewsSlideVideos.forEach((videoEl) => {
  videoEl.addEventListener('click', (event) => {
    if (whyProgramVideoContent) whyProgramVideoContent.classList.remove('active');
    reviewsSlideVideos.forEach((video) => {
      if (video === event.currentTarget) {
        video.classList.add('active');
      } else {
        video.classList.remove('active');
      }
    });
  });
});

if (whyProgramVideoContent) {
  whyProgramVideoContent.addEventListener('click', (event) => {
    event.currentTarget.classList.add('active');
    reviewsSlideVideos.forEach((video) => video.classList.remove('active'));
  });
}
