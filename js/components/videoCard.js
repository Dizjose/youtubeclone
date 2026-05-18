
export function createVideoCard(video) {
  return `
    <div class="video-card">
      <div class="video-thumbnail">
        <img src="${video.thumbnail}" alt="${video.title}">
        <div class="video-duration">${video.duration}</div> 
      </div>

      <div class="video-info">
        <div class="channel-avatar">${video.avatar}</div>
        <div class="video-details">
          <h3 class="video-title">${video.title}</h3>
          <div class="video-meta">
            <div class="channel-name">${video.channel}</div>
            <div class="video-stats">${video.views} de visualizaciones • ${video.uploaded}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}