import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
  FacebookImagePreview,
  FacebookMultipleImagesPreview,
  FacebookVideoPreview,
} from '../components/previews/FacebookPreviews';
import {
  InstagramImagePreview,
  InstagramMultipleImagesPreview,
  InstagramVideoPreview,
} from '../components/previews/InstagramPreviews';
import {
  LinkedinImagePreview,
  LinkedinMultiPreview,
  LinkedinVideoPreview,
} from '../components/previews/LinkedinPreviews';
import {
  TwitterImagePreview,
  TwitterMultiImagesPreview,
  TwitterVideoPreview,
} from '../components/previews/TwitterPreviews';
import {
  WhatappImagePreviews,
  WhatappVideoPreviews,
  WhatappMultipleImagesPreviews,
} from '../components/previews/WhatappPreviews';

const Previews = () => {
  // Array of all preview components
  const previewComponents = [
    <FacebookImagePreview key="fb-image" />,
    <FacebookVideoPreview key="fb-video" />,
    <FacebookMultipleImagesPreview key="fb-multi" />,
    <InstagramImagePreview key="ig-image" />,
    <InstagramVideoPreview key="ig-video" />,
    <InstagramMultipleImagesPreview key="ig-multi" />,
    <LinkedinImagePreview key="li-image" />,
    <LinkedinVideoPreview key="li-video" />,
    <LinkedinMultiPreview key="li-multi" />,
    <TwitterImagePreview key="tw-image" />,
    <TwitterVideoPreview key="tw-video" />,
    <TwitterMultiImagesPreview key="tw-multi" />,
    <WhatappImagePreviews key="wa-image" />,
    <WhatappVideoPreviews key="wa-video" />,
    <WhatappMultipleImagesPreviews key="wa-multi" />,
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Social Media Previews
      </h1>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="20px">{previewComponents}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Previews;
