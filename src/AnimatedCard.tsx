import React from "react";

type AnimatedCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  previewVideo?: string;
};

export default function AnimatedCard({
  icon,
  title,
  description,
  onClick,
  previewVideo,
}: AnimatedCardProps) {
  return (
    <div className="animatedCard" onClick={onClick}>
      <div className="animatedCard-inner">
        <div className="animatedCard-content">
          {previewVideo ? (
            <video
              src={previewVideo}
              autoPlay
              loop
              muted
              playsInline
              className="card-preview-video"
            />
          ) : (
            <p className="icon">{icon}</p>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}