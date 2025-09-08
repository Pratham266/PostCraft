import React, { useRef, useState } from 'react';

export const TwitterLogoSVG = () => (
  <div className="">
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
        fill="black"
      />
    </svg>
  </div>
);

const EllipsisSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#666666" />
    <circle cx="5" cy="12" r="2" fill="#666666" />
    <circle cx="19" cy="12" r="2" fill="#666666" />
  </svg>
);

const CommentSVG = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    version="1.1"
  >
    <g>
      <path
        fill="#536371"
        d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
      ></path>
    </g>
  </svg>
);

const RetweetSVG = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    version="1.1"
  >
    <g>
      <title>Layer 1</title>
      <g id="svg_1">
        <path
          fill="#536371"
          d="m4.5,3.88l4.432,4.14l-1.364,1.46l-2.068,-1.93l0,8.45c0,1.1 0.896,2 2,2l5.5,0l0,2l-5.5,0c-2.209,0 -4,-1.79 -4,-4l0,-8.45l-2.068,1.93l-1.364,-1.46l4.432,-4.14zm12,2.12l-5.5,0l0,-2l5.5,0c2.209,0 4,1.79 4,4l0,8.45l2.068,-1.93l1.364,1.46l-4.432,4.14l-4.432,-4.14l1.364,-1.46l2.068,1.93l0,-8.45c0,-1.1 -0.896,-2 -2,-2z"
          id="svg_2"
        />
      </g>
    </g>
  </svg>
);

const HeartSVG = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    version="1.1"
  >
    <g>
      <path
        fill="#536371"
        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
      ></path>
    </g>
  </svg>
);

const BookmarkSVG = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    version="1.1"
  >
    <g>
      <title>Layer 1</title>
      <g id="svg_1">
        <path
          fill="#536371"
          id="svg_2"
          d="m4,4.5c0,-1.38 1.119,-2.5 2.5,-2.5l11,0c1.381,0 2.5,1.12 2.5,2.5l0,18.44l-8,-5.71l-8,5.71l0,-18.44zm2.5,-0.5c-0.276,0 -0.5,0.22 -0.5,0.5l0,14.56l6,-4.29l6,4.29l0,-14.56c0,-0.28 -0.224,-0.5 -0.5,-0.5l-11,0z"
        />
      </g>
    </g>
  </svg>
);

const ShareSVG = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    version="1.1"
  >
    <g>
      <path
        fill="#536371"
        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
      ></path>
    </g>
  </svg>
);

const PlayButtonSVG = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="#1DA1F2" />
    <path d="M25 20L25 40L40 30L25 20Z" fill="white" />
  </svg>
);

const PauseButtonSVG = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
    <rect x="22" y="20" width="8" height="24" rx="2" fill="#fff" />
    <rect x="34" y="20" width="8" height="24" rx="2" fill="#fff" />
  </svg>
);

const TwitterImagePreview = ({ content }) => {
  const images = content?.media[0]?.images || [];
  return (
    <div className="w-[370px] bg-white border border-gray-300  shadow-sm text-[15px] font-sans overflow-hidden rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3 ">
          <TwitterLogoSVG />
          <div>
            <div className="font-bold text-base text-black">Twitter/X</div>
            <div className="text-sm text-gray-500">@twitter</div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        {content?.caption}
        <div className="flex flex-wrap gap-1">
          {content?.hashtags?.map((tag, index) => (
            <span key={index} className="text-blue-600 ">
              #{tag.replace('#', '')}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-full relative">
        <img
          src={images[0]?.url}
          alt="European Robin on tree branch"
          className="w-full object-cover rounded-lg"
          style={{ height: 300 }}
        />
      </div>

      {/* Footer actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between text-gray-600">
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <CommentSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <RetweetSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <HeartSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <BookmarkSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <ShareSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

const TwitterMultiImagesPreview = ({ content }) => {
  const mediaListLength = content?.media[0]?.images?.length || 5;
  const images = content?.media[0]?.images || [];

  return (
    <div className="w-[370px] bg-white border border-gray-300  shadow-sm text-[15px] font-sans overflow-hidden rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <TwitterLogoSVG />
          <div>
            <div className="font-bold text-base text-black">Twitter/X</div>
            <div className="text-sm text-gray-500">@twitter</div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        {content?.caption}
        <div className="flex flex-wrap gap-1">
          {content?.hashtags?.map((tag, index) => (
            <span key={index} className="text-blue-600 ">
              #{tag.replace('#', '')}
            </span>
          ))}
        </div>
      </div>

      {/* Multiple Images */}
      <div className="w-full px-4 pb-3">
        {mediaListLength === 2 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src={images[0]?.url}
              class="w-full h-60 object-cover rounded-lg"
              alt="img2"
            />
            <img
              src={images[1]?.url}
              class="w-full h-60 object-cover rounded-lg"
              alt="img3"
            />
          </div>
        )}
        {mediaListLength === 3 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src={images[0]?.url}
              class="w-full h-80 object-cover  col-span-1 rounded-lg"
              alt="img4"
            />
            <div class="grid gap-1">
              <img
                src={images[1]?.url}
                class="w-full h-40 object-cover rounded-lg"
                alt="img5"
              />
              <img
                src={images[2]?.url}
                class="w-full h-40 object-cover rounded-lg"
                alt="img6"
              />
            </div>
          </div>
        )}
        {mediaListLength === 4 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src={images[0]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img7"
            />
            <img
              src={images[1]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img8"
            />
            <img
              src={images[2]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img9"
            />
            <img
              src={images[3]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img10"
            />
          </div>
        )}
        {mediaListLength > 4 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src={images[0]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img11"
            />
            <img
              src={images[1]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img12"
            />
            <img
              src={images[2]?.url}
              class="w-full h-48 object-cover rounded-lg"
              alt="img13"
            />
            <div class="relative">
              <img
                src={images[3]?.url}
                class="w-full h-48 object-cover rounded-lg  "
                alt="img14"
              />
              {/* <!-- Overlay --> */}
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold rounded-lg">
                +1
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between text-gray-600">
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <CommentSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <RetweetSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <HeartSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <BookmarkSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <ShareSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

const TwitterVideoPreview = ({ content }) => {
  const video = content?.media[0]?.video?.url;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-[370px] bg-white border border-gray-300  shadow-sm text-[15px] font-sans overflow-hidden rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <TwitterLogoSVG />
          <div>
            <div className="font-bold text-base text-black">Twitter/X</div>
            <div className="text-sm text-gray-500">@twitter</div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        {content?.caption}
        <div className="flex flex-wrap gap-1">
          {content?.hashtags?.map((tag, index) => (
            <span key={index} className="text-blue-600 ">
              #{tag.replace('#', '')}
            </span>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="w-full px-4 pb-3 relative">
        <video
          ref={videoRef}
          src={video}
          poster={video}
          className="w-full object-cover rounded-lg"
          style={{ height: 350 }}
          controls={false}
          onPause={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="hover:scale-110 transition-transform duration-200"
              onClick={handlePlayClick}
              aria-label="Play video"
              type="button"
              tabIndex={0}
            >
              <PlayButtonSVG />
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Pause video"
              type="button"
              tabIndex={0}
              onClick={handlePlayClick}
            >
              <PauseButtonSVG />
            </button>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between text-gray-600">
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <CommentSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <RetweetSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <HeartSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <BookmarkSVG />
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded transition">
            <ShareSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export { TwitterImagePreview, TwitterMultiImagesPreview, TwitterVideoPreview };
