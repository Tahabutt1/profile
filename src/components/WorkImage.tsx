import { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const thumbRef = useRef<HTMLVideoElement>(null);
  const useVideoThumbnail = Boolean(
    props.video && (!props.image || props.image.includes("placeholder"))
  );

  const handleMouseEnter = () => {
    if (!props.video) return;

    if (useVideoThumbnail && thumbRef.current) {
      thumbRef.current.play();
      setIsVideo(true);
      return;
    }

    setIsVideo(true);
  };

  const handleMouseLeave = () => {
    if (useVideoThumbnail && thumbRef.current) {
      thumbRef.current.pause();
      thumbRef.current.currentTime = 0;
    }
    setIsVideo(false);
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {useVideoThumbnail ? (
          <video
            ref={thumbRef}
            className="work-video-thumb"
            src={props.video}
            muted
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <>
            <img src={props.image} alt={props.alt} />
            {isVideo && props.video && (
              <video src={props.video} autoPlay muted playsInline loop />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
