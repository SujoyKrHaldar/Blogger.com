/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

const Image = ({
  src,
  alt = "Background Image",
  className = "",
  objectPosition = "object-center",
}) => {
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement && imageElement.complete) {
      handleImageLoad();
    }
  }, []);

  return (
    <div
      className={`w-full h-full overflow-hidden ease-in-out transition-all duration-700 ${className}
      ${
        imageLoaded
          ? "opacity-100 blur-none scale-100"
          : "opacity-0 blur-xs scale-105"
      }`}
    >
      <img onDragStart={(e) => e.preventDefault()}
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleImageLoad}
        className={objectPosition}
      />
    </div>
  );
};

export default Image;
