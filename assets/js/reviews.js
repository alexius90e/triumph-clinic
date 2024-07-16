const reviewsSlideVideos = document.querySelectorAll('.reviews__slide-video');
const whyProgramVideoContent = document.querySelector('.why-program__video-content');

reviewsSlideVideos.forEach((videoEl) => {
  videoEl.addEventListener('click', (event) => {
    if (whyProgramVideoContent) whyProgramVideoContent.classList.remove('active');
    reviewsSlideVideos.forEach((video) => {
      if (video === event.currentTarget) {
        video.classList.add('active');
        video.innerHTML = `
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XIMLoLxmTDw?si=wFzm5etjCkaNdMl5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        `;
      } else {
        video.classList.remove('active');
        video.innerHTML = '';
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
