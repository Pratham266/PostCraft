import React from 'react';

const BackArrowSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const EllipsisSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="white" />
    <circle cx="5" cy="12" r="2" fill="white" />
    <circle cx="19" cy="12" r="2" fill="white" />
  </svg>
);

const EmojiSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const PaperclipSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49" />
  </svg>
);

const CameraSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const MicrophoneSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const PlayButtonSVG = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
    <path d="M25 20L25 40L40 30L25 20Z" fill="#25D366" />
  </svg>
);

const CheckmarkSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 13.5L6.5 18.5L17.5 7.5"
      stroke="#34B7F1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 13.5L13.5 18.5L22.5 7.5"
      stroke="#34B7F1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const WiFiSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const BatterySVG = () => (
  <svg
    width="20"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <rect x="1" y="6" width="18" height="6" rx="2" ry="2" />
    <line x1="23" y1="7" x2="23" y2="11" />
  </svg>
);

const SignalSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20V8" />
  </svg>
);

const WhatappImagePreviews = () => {
  return (
    <div className="w-[375px] bg-[#0B141A] text-white overflow-hidden rounded-lg">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0B141A]">
        <div className="text-white text-sm font-medium">8:46</div>
        <div className="flex items-center space-x-1">
          <WiFiSVG />
          <span className="text-white text-xs">5G</span>
          <SignalSVG />
          <BatterySVG />
          <span className="text-white text-xs">60%</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#202C33]">
        <div className="flex items-center space-x-3">
          <BackArrowSVG />
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">P</span>
          </div>
          <div>
            <div className="font-semibold text-white">Whatsapp (You)</div>
            <div className="text-xs text-gray-300">Message yourself</div>
          </div>
        </div>
        <button className="p-1">
          <EllipsisSVG />
        </button>
      </div>

      {/* Chat Background with Pattern */}
      <div
        className="flex-1 px-4 py-4 relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#0B141A',
        }}
      >
        {/* Image Message */}
        <div className="flex justify-end mb-4">
          <div className="max-w-xs bg-[#005C4B] rounded-lg p-3 relative">
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=500&q=80"
              alt="Perfume advertisement"
              className="w-full rounded-lg mb-2"
            />
            <div className="text-white text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
            <div className="flex items-center justify-end mt-2 space-x-1">
              <span className="text-xs text-gray-300">8:38 pm</span>
              <div className="flex space-x-1">
                <CheckmarkSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="flex items-center px-4 py-3 bg-[#202C33] space-x-3">
        <EmojiSVG />
        <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Message</span>
        </div>
        <PaperclipSVG />
        <CameraSVG />
        <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
          <MicrophoneSVG />
        </div>
      </div>
    </div>
  );
};

const WhatappVideoPreviews = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-[375px] bg-[#0B141A] text-white overflow-hidden rounded-lg">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0B141A]">
        <div className="text-white text-sm font-medium">8:46</div>
        <div className="flex items-center space-x-1">
          <WiFiSVG />
          <span className="text-white text-xs">5G</span>
          <SignalSVG />
          <BatterySVG />
          <span className="text-white text-xs">60%</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#202C33]">
        <div className="flex items-center space-x-3">
          <BackArrowSVG />
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">P</span>
          </div>
          <div>
            <div className="font-semibold text-white">Whatsapp (You)</div>
            <div className="text-xs text-gray-300">Message yourself</div>
          </div>
        </div>
        <button className="p-1">
          <EllipsisSVG />
        </button>
      </div>

      {/* Chat Background with Pattern */}
      <div
        className="flex-1 px-4 py-4 relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#0B141A',
        }}
      >
        {/* Video Message */}
        <div className="flex justify-end mb-4">
          <div className="max-w-xs bg-[#005C4B] rounded-lg p-3 relative">
            <div className="relative mb-2">
              <video
                ref={videoRef}
                src="https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4"
                className="w-full h-full object-cover rounded-lg"
                style={{ height: 200 }}
                poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=375&q=80"
                controls={false}
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                HD 0:19
              </div>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="hover:scale-110 transition-transform duration-200 pointer-events-auto"
                    tabIndex={0}
                    onClick={handlePlayPause}
                  >
                    <PlayButtonSVG />
                  </button>
                </div>
              )}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="hover:scale-110 transition-transform duration-200 pointer-events-auto"
                    tabIndex={0}
                    onClick={handlePlayPause}
                  >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.4)" />
                      <rect
                        x="18"
                        y="16"
                        width="6"
                        height="24"
                        rx="2"
                        fill="#fff"
                      />
                      <rect
                        x="32"
                        y="16"
                        width="6"
                        height="24"
                        rx="2"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="text-white text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
            <div className="flex items-center justify-end mt-2 space-x-1">
              <span className="text-xs text-gray-300">8:39 pm</span>
              <div className="flex space-x-1">
                <CheckmarkSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="flex items-center px-4 py-3 bg-[#202C33] space-x-3">
        <EmojiSVG />
        <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Message</span>
        </div>
        <PaperclipSVG />
        <CameraSVG />
        <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
          <MicrophoneSVG />
        </div>
      </div>
    </div>
  );
};

const WhatappMultipleImagesPreviews = ({ media }) => {
  const mediaListLength = media?.images?.length || 2;
  return (
    <div className="w-[375px] bg-[#0B141A] text-white overflow-hidden rounded-lg">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0B141A]">
        <div className="text-white text-sm font-medium">8:46</div>
        <div className="flex items-center space-x-1">
          <WiFiSVG />
          <span className="text-white text-xs">5G</span>
          <SignalSVG />
          <BatterySVG />
          <span className="text-white text-xs">60%</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#202C33]">
        <div className="flex items-center space-x-3">
          <BackArrowSVG />
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">P</span>
          </div>
          <div>
            <div className="font-semibold text-white">Whatsapp (You)</div>
            <div className="text-xs text-gray-300">Message yourself</div>
          </div>
        </div>
        <button className="p-1">
          <EllipsisSVG />
        </button>
      </div>

      {/* Chat Background with Pattern */}
      <div
        className="flex-1 px-4 py-4 relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#0B141A',
        }}
      >
        {/* Multiple Images */}
        <div className="w-full px-4 pb-3 max-w-xs bg-[#005C4B] rounded-lg p-3 relative">
          {mediaListLength === 2 && (
            <div class="grid grid-cols-2 gap-1">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-60 object-cover rounded-lg"
                alt="img2"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-60 object-cover rounded-lg"
                alt="img3"
              />
            </div>
          )}
          {mediaListLength === 3 && (
            <div class="grid grid-cols-2 gap-1">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-80 object-cover  col-span-1 rounded-lg"
                alt="img4"
              />
              <div class="grid gap-1">
                <img
                  src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                  class="w-full h-40 object-cover rounded-lg"
                  alt="img5"
                />
                <img
                  src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                  class="w-full h-40 object-cover rounded-lg"
                  alt="img6"
                />
              </div>
            </div>
          )}
          {mediaListLength === 4 && (
            <div class="grid grid-cols-2 gap-1">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img7"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img8"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img9"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img10"
              />
            </div>
          )}
          {mediaListLength > 4 && (
            <div class="grid grid-cols-2 gap-1">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img11"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img12"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover rounded-lg"
                alt="img13"
              />
              <div class="relative">
                <img
                  src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
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
          <div className="flex justify-end mb-4 mt-2">
            <div className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          </div>
          <div className="flex items-center justify-end mt-2 space-x-1">
            <span className="text-xs text-gray-300">8:38 pm</span>
            <div className="flex space-x-1">
              <CheckmarkSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="flex items-center px-4 py-3 bg-[#202C33] space-x-3">
        <EmojiSVG />
        <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Message</span>
        </div>
        <PaperclipSVG />
        <CameraSVG />
        <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
          <MicrophoneSVG />
        </div>
      </div>
    </div>
  );
};

export {
  WhatappImagePreviews,
  WhatappVideoPreviews,
  WhatappMultipleImagesPreviews,
};
