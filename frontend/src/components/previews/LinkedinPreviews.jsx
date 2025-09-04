import React, { useRef, useState } from 'react';

const LinkedInLogoSVG = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_17_32)">
      <path
        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
        fill="#0A66C2"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_32">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EllipsisSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#666666" />
    <circle cx="5" cy="12" r="2" fill="#666666" />
    <circle cx="19" cy="12" r="2" fill="#666666" />
  </svg>
);

const GlobeSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#666666" strokeWidth="2" />
    <path d="M2 12h20" stroke="#666666" strokeWidth="2" />
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      stroke="#666666"
      strokeWidth="2"
    />
  </svg>
);

const LikeSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_14102_34664)">
      <mask
        id="mask0_14102_34664"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H23.9991V23.9991H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_14102_34664)">
        <path
          d="M19.1348 11.0388L15.3946 7.26217C14.9733 6.85165 14.6073 6.38789 14.306 5.88265C14.0881 5.48329 13.9066 5.12041 13.7607 4.64809L13.2894 3.23209C13.2546 3.05979 13.18 2.89803 13.0714 2.75977C12.8535 2.32489 12.5262 2.03401 12.1268 1.78057C11.7131 1.562 11.2516 1.44952 10.7838 1.45321C10.3114 1.45321 9.8756 1.56169 9.47624 1.77961C9.06545 2.00945 8.72647 2.34875 8.49704 2.75977C8.25096 3.15085 8.1245 3.60531 8.1332 4.06729V5.15689C8.1332 6.10057 8.27816 6.93577 8.60552 7.87945L9.00488 9.11401H4.42952C4.06664 9.11401 3.74024 9.18697 3.41288 9.36841C3.08648 9.54985 2.86856 9.80425 2.65064 10.1307C2.46824 10.4571 2.39624 10.7479 2.39624 11.1483C2.39624 11.5102 2.4692 11.8375 2.68712 12.1639C2.83208 12.4548 3.01352 12.6363 3.26792 12.8177C3.01352 13.0001 2.83208 13.2171 2.65064 13.4705C2.46824 13.7979 2.39624 14.1252 2.39624 14.4881V14.5246C2.39624 14.9239 2.4692 15.2139 2.68712 15.5412C2.86856 15.8676 3.08648 16.122 3.41288 16.3035L3.6308 16.4119L3.59432 16.4484C3.44936 16.7393 3.34088 17.0292 3.34088 17.3566C3.34088 17.7559 3.44936 18.0823 3.6308 18.3732C3.8132 18.6996 4.03016 18.954 4.35752 19.1355C4.64744 19.3169 4.93832 19.3899 5.26472 19.3899V19.5348C5.26472 19.8977 5.37416 20.2251 5.5556 20.5515C5.73704 20.8779 5.95496 21.0958 6.28136 21.3137C6.60776 21.4961 6.93416 21.5681 7.29896 21.5681H14.4874C15.722 21.5681 16.8106 21.3137 17.9002 20.7694L18.2266 20.6244H20.6238V11.0388H19.1348ZM18.699 18.6996H17.7188L17.0286 19.0625C16.2266 19.4551 15.3438 19.6541 14.451 19.6433H7.84232C7.67868 19.6463 7.51681 19.6091 7.37096 19.5348C7.23255 19.4327 7.11023 19.3103 7.00808 19.1719C6.9716 19.099 6.93512 19.026 6.93512 18.954L6.68072 18.1188L5.882 17.7195C5.80904 17.7195 5.77352 17.683 5.73704 17.683C5.60074 17.5899 5.4888 17.4655 5.41064 17.3201C5.30852 17.1844 5.25692 17.0174 5.26472 16.8478V16.7758L5.44712 15.8311L4.7204 15.1054C4.64744 15.0324 4.57544 14.9959 4.538 14.8875C4.46386 14.7412 4.42662 14.5791 4.42952 14.4151C4.42952 14.2337 4.466 14.0887 4.53896 13.9428L4.57544 13.9073L5.19176 12.8542L4.50248 11.8011C4.50248 11.7646 4.466 11.7646 4.466 11.7281C4.42952 11.6561 4.39304 11.5841 4.39304 11.5102C4.39304 11.4017 4.42952 11.3287 4.466 11.2567L4.57544 11.1473L4.64744 11.0753C4.7204 11.0388 4.7924 11.0388 4.86536 11.0388H11.6554L10.4209 7.26217C10.1745 6.58788 10.0516 5.87475 10.058 5.15689V4.06729C10.0607 3.95009 10.0985 3.83638 10.1665 3.74089C10.221 3.62112 10.3094 3.51997 10.4209 3.45001C10.5274 3.37648 10.6544 3.33851 10.7838 3.34153C10.8202 3.37705 10.8202 3.45001 10.8567 3.48553L11.3655 4.90249C11.546 5.51977 11.7639 5.99209 12.0913 6.53641C12.4906 7.18921 12.8535 7.73449 13.3978 8.27881L17.7178 12.5633H18.0826V18.3367L18.699 18.6996Z"
          fill="#404040"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_14102_34664">
        <rect width="24" height="24" fill="#404040" />
      </clipPath>
    </defs>
  </svg>
);

const CommentSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_14102_34703)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.31998 9.28183H17.082V10.2428H7.31998V9.28183ZM7.31998 13.1648H14.16V12.2048H7.31998V13.1648ZM22.922 11.3138C22.922 12.5358 22.664 13.5708 22.035 14.6418C21.555 15.4928 20.965 16.1218 20.152 16.7118L12.203 21.9618V18.0438H8.28098C7.02298 18.0438 5.95298 17.7858 4.87898 17.1568C3.83452 16.5547 2.96789 15.687 2.36698 14.6418C1.73798 13.5718 1.47998 12.4968 1.47998 11.2388C1.47998 9.98483 1.73798 8.91083 2.36698 7.80183C2.99698 6.73183 3.80898 5.95383 4.87898 5.32483C5.90497 4.7062 7.08299 4.38555 8.28098 4.39883H16.121C17.319 4.38555 18.497 4.7062 19.523 5.32483C20.593 5.95483 21.406 6.73083 22.035 7.80183C22.665 8.91183 22.922 9.98483 22.922 11.2388V11.3138ZM20.336 8.80083C19.891 8.02283 19.336 7.43383 18.563 6.98783C17.785 6.54283 17.008 6.35883 16.121 6.35883H8.28098C7.39498 6.35883 6.61698 6.54283 5.84398 6.98883C5.06598 7.43383 4.51198 8.02283 4.06598 8.80083C3.62498 9.57783 3.40198 10.3158 3.40198 11.2378C3.40198 12.1278 3.62498 12.9018 4.06598 13.6798C4.51198 14.4568 5.06598 15.0118 5.84398 15.4528C6.61698 15.8978 7.39398 16.1208 8.28098 16.1208H14.161V18.3398L19.043 15.1208C19.598 14.7148 20.003 14.2728 20.371 13.6798C20.777 12.9018 21 12.2028 21 11.3128V11.2378C21 10.3158 20.777 9.57783 20.336 8.80083Z"
        fill="#404040"
      />
    </g>
    <defs>
      <clipPath id="clip0_14102_34703">
        <rect width="24" height="24" fill="#404040" />
      </clipPath>
    </defs>
  </svg>
);

const RepostSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.96 5H6C5.45 5 5 5.45 5 6V16H3V6C3 4.34 4.34 3 6 3H13.96L12 0H14.37L17 4L14.37 8H12L13.96 5ZM19.5 8H19V18C19 18.55 18.55 19 18 19H10.04L12 16H9.63L7 20L9.63 24H12L10.04 21H18C19.66 21 21 19.66 21 18V8H19.5Z"
      fill="#404040"
    />
  </svg>
);

const SendSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 661 661"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_14102_34674)">
      <mask
        id="mask0_14102_34674"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="661"
        height="661"
      >
        <path d="M0 0H661V661H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_14102_34674)">
        <path
          d="M568 92L13 277L215 390L436 224L270 445L383 647L568 92Z"
          fill="#404040"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_14102_34674">
        <rect width="661" height="661" fill="#404040" />
      </clipPath>
    </defs>
  </svg>
);

const PlayButtonSVG = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
    <path d="M25 20L25 40L40 30L25 20Z" fill="#0077B5" />
  </svg>
);

const PauseButtonSVG = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
    <rect x="22" y="20" width="8" height="24" rx="2" fill="#fff" />
    <rect x="34" y="20" width="8" height="24" rx="2" fill="#fff" />
  </svg>
);

const LinkedinImagePreview = () => {
  return (
    <div className="w-[552px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <LinkedInLogoSVG />
          <div>
            <div className="font-semibold text-base text-black">LinkedIn</div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>now</span>
              <span>•</span>
              <GlobeSVG />
            </div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour anc{' '}
        <span className="text-blue-600 cursor-pointer hover:underline">
          see less
        </span>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=552&q=80"
          alt="CASSIS NOIR Rose Dusk Perfume"
          className="w-full object-cover"
          style={{ height: 400 }}
        />
      </div>

      {/* Footer actions with border line above */}
      <div className="">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between text-gray-600 border-t border-gray-200">
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <LikeSVG />
              <span className="text-xs font-normal text-gray-600">Like</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <CommentSVG />
              <span className="text-xs font-normal text-gray-600">Comment</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <RepostSVG />
              <span className="text-xs font-normal text-gray-600">Repost</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <SendSVG />
              <span className="text-xs font-normal text-gray-600">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkedinMultiPreview = ({ media }) => {
  const mediaListLength = media?.images?.length || 5;
  return (
    <div className="w-[552px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <LinkedInLogoSVG />
          <div>
            <div className="font-semibold text-base text-black">LinkedIn</div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>now</span>
              <span>•</span>
              <GlobeSVG />
            </div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lc...{' '}
        <span className="text-gray-500 cursor-pointer hover:underline">
          see more
        </span>
      </div>

      {/* Multiple Images */}
      <div className="w-full">
        {mediaListLength === 2 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-60 object-cover "
              alt="img2"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-60 object-cover "
              alt="img3"
            />
          </div>
        )}
        {mediaListLength === 3 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-80 object-cover  col-span-1"
              alt="img4"
            />
            <div class="grid gap-1">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-40 object-cover "
                alt="img5"
              />
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-40 object-cover "
                alt="img6"
              />
            </div>
          </div>
        )}
        {mediaListLength === 4 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img7"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img8"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img9"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img10"
            />
          </div>
        )}
        {mediaListLength > 4 && (
          <div class="grid grid-cols-2 gap-1">
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img11"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img12"
            />
            <img
              src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
              class="w-full h-48 object-cover "
              alt="img13"
            />
            <div class="relative">
              <img
                src="https://images.pexels.com/photos/31009096/pexels-photo-31009096.jpeg"
                class="w-full h-48 object-cover "
                alt="img14"
              />
              {/* <!-- Overlay --> */}
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold ">
                +1
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer actions with border line above */}
      <div className="">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between text-gray-600 border-t border-gray-200">
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <LikeSVG />
              <span className="text-xs font-normal text-gray-600">Like</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <CommentSVG />
              <span className="text-xs font-normal text-gray-600">Comment</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <RepostSVG />
              <span className="text-xs font-normal text-gray-600">Repost</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <SendSVG />
              <span className="text-xs font-normal text-gray-600">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkedinVideoPreview = () => {
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
    <div className="w-[552px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <LinkedInLogoSVG />
          <div>
            <div className="font-semibold text-base text-black">LinkedIn</div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>now</span>
              <span>•</span>
              <GlobeSVG />
            </div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition">
          <EllipsisSVG />
        </button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-3 text-gray-900 leading-relaxed">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lc...{' '}
        <span className="text-gray-500 cursor-pointer hover:underline">
          see more
        </span>
      </div>

      {/* Video */}
      <div className="w-full relative">
        <video
          ref={videoRef}
          src="https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4"
          poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=552&q=80"
          className="w-full object-cover"
          style={{ height: 400 }}
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

      {/* Footer actions with border line above */}
      <div className="">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between text-gray-600 border-t border-gray-200">
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <LikeSVG />
              <span className="text-xs font-normal text-gray-600">Like</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <CommentSVG />
              <span className="text-xs font-normal text-gray-600">Comment</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <RepostSVG />
              <span className="text-xs font-normal text-gray-600">Repost</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:bg-gray-50 px-3 py-2 rounded transition">
              <SendSVG />
              <span className="text-xs font-normal text-gray-600">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LinkedinImagePreview, LinkedinVideoPreview, LinkedinMultiPreview };
