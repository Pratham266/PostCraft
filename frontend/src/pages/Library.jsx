import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsFromLibrary } from '../store/slices/librarySlice';
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
  LinkedinVideoPreview,
  LinkedinMultiPreview,
} from '../components/previews/LinkedInPreviews';
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
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const getPreviews = (content) => {
  const platform = content.platform;
  const postType = content.postType;
  switch (platform) {
    case 'facebook':
      if (postType === 'image')
        return <FacebookImagePreview content={content} />;
      if (postType === 'carousel')
        return <FacebookMultipleImagesPreview content={content} />;
      if (postType === 'video')
        return <FacebookVideoPreview content={content} />;
      break;

    case 'instagram':
      if (postType === 'image')
        return <InstagramImagePreview content={content} />;
      if (postType === 'carousel')
        return <InstagramMultipleImagesPreview content={content} />;
      if (postType === 'video')
        return <InstagramVideoPreview content={content} />;
      break;
    case 'twitter':
      if (postType === 'image')
        return <TwitterImagePreview content={content} />;
      if (postType === 'carousel')
        return <TwitterMultiImagesPreview content={content} />;
      if (postType === 'video')
        return <TwitterVideoPreview content={content} />;
      break;
    case 'linkedin':
      if (postType === 'image')
        return <LinkedinImagePreview content={content} />;
      else if (postType === 'carousel')
        return <LinkedinMultiPreview content={content} />;
      else if (postType === 'video')
        return <LinkedinVideoPreview content={content} />;
      break;

    case 'whatsapp':
      if (postType === 'image')
        return <WhatappImagePreviews content={content} />;
      if (postType === 'carousel')
        return <WhatappMultipleImagesPreviews content={content} />;
      if (postType === 'video')
        return <WhatappVideoPreviews content={content} />;
      break;
    default:
      break;
  }
};

const Library = () => {
  const dispatch = useDispatch();
  const libraryPosts = useSelector((state) => state.library.libraryPosts);
  const loading = useSelector((state) => state.library.loading);

  useEffect(() => {
    dispatch(getAllPostsFromLibrary());
  }, []);

  console.log({ libraryPosts, loading });
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="container mx-auto px-4 py-8">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="20px">
          {libraryPosts?.map((post) => getPreviews(post))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Library;
