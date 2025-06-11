import videos from '../utils/videos';

export default function VideoGallery() {
  return (
    <div className="gallery">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          />
          <h3>{video.title}</h3>
          <p>{video.country}</p>
        </div>
      ))}
    </div>
  );
}
