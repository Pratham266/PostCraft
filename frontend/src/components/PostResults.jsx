import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
  FacebookImagePreview,
  FacebookMultipleImagesPreview,
  FacebookVideoPreview,
} from './previews/FacebookPreviews';
import {
  InstagramImagePreview,
  InstagramMultipleImagesPreview,
  InstagramVideoPreview,
} from './previews/InstagramPreviews';
import {
  LinkedinImagePreview,
  LinkedinVideoPreview,
  LinkedinMultiPreview,
} from './previews/LinkedInPreviews';
import {
  TwitterImagePreview,
  TwitterMultiImagesPreview,
  TwitterVideoPreview,
} from './previews/TwitterPreviews';
import {
  WhatappImagePreviews,
  WhatappVideoPreviews,
  WhatappMultipleImagesPreviews,
} from './previews/WhatappPreviews';

const PostResults = ({
  generatedPosts,
  onRegenerate,
  onExport,
  isLoading,
  postType,
}) => {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('facebook');
  const [editingContent, setEditingContent] = useState({});

  const variations = generatedPosts.variations;
  const currentVariation = variations[selectedVariation];
  const currentPlatformData = currentVariation?.platforms[selectedPlatform];
  // const platfroms = generatedPosts.metadata.platforms;

  useEffect(() => {
    initializeEditingContent();
  }, [selectedVariation, currentVariation]);

  if (!generatedPosts || !generatedPosts.variations) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-gray-500 mb-4">No posts generated yet</div>
          <Button onClick={onRegenerate} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Posts'}
          </Button>
        </div>
      </div>
    );
  }

  // Platform guidelines
  const platformGuidelines = {
    facebook: { maxCaption: 63206, maxHashtags: 30, name: 'Facebook' },
    instagram: { maxCaption: 2200, maxHashtags: 30, name: 'Instagram' },
    linkedin: { maxCaption: 3000, maxHashtags: 15, name: 'LinkedIn' },
    twitter: { maxCaption: 280, maxHashtags: 10, name: 'Twitter/X' },
    whatsapp: { maxCaption: 1000, maxHashtags: 15, name: 'WhatsApp' },
  };

  console.log({ generatedPosts });

  // Initialize editing content
  const initializeEditingContent = () => {
    if (!editingContent[selectedVariation]) {
      setEditingContent((prev) => ({
        ...prev,
        [selectedVariation]: {
          ...currentVariation.platforms,
        },
      }));
    }
  };

  const handleContentChange = (field, value) => {
    setEditingContent((prev) => ({
      ...prev,
      [selectedVariation]: {
        ...prev[selectedVariation],
        [selectedPlatform]: {
          ...prev[selectedVariation][selectedPlatform],
          [field]: value,
        },
      },
    }));
  };

  const getCurrentContent = () => {
    return (
      editingContent[selectedVariation]?.[selectedPlatform] ||
      currentPlatformData
    );
  };

  const currentContent = getCurrentContent();

  const renderPlatformPreview = () => {
    const content = getCurrentContent();
    console.log({ postType });
    switch (selectedPlatform) {
      case 'facebook':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            {postType === 'image' && <FacebookImagePreview content={content} />}
            {postType === 'video' && <FacebookVideoPreview content={content} />}
            {postType === 'carousel' && (
              <FacebookMultipleImagesPreview content={content} />
            )}
          </div>
        );

      case 'instagram': {
        return (
          <div className="bg-white border border-gray-200 rounded-lg max-w-sm">
            {postType === 'image' && (
              <InstagramImagePreview content={content} />
            )}
            {postType === 'video' && (
              <InstagramVideoPreview content={content} />
            )}
            {postType === 'carousel' && (
              <InstagramMultipleImagesPreview content={content} />
            )}
          </div>
        );
      }

      case 'linkedin':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            {postType === 'image' && <LinkedinImagePreview content={content} />}
            {postType === 'video' && <LinkedinVideoPreview content={content} />}
            {postType === 'carousel' && (
              <LinkedinMultiPreview content={content} />
            )}
          </div>
        );

      case 'twitter':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            {postType === 'image' && <TwitterImagePreview content={content} />}
            {postType === 'video' && <TwitterVideoPreview content={content} />}
            {postType === 'carousel' && (
              <TwitterMultiImagesPreview content={content} />
            )}
          </div>
        );

      case 'whatsapp':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-sm">
            {postType === 'image' && <WhatappImagePreviews content={content} />}
            {postType === 'video' && <WhatappVideoPreviews content={content} />}
            {postType === 'carousel' && (
              <WhatappMultipleImagesPreviews content={content} />
            )}
          </div>
        );

      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header with Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Generated Posts</h2>
        <div className="flex space-x-3">
          <Button onClick={onRegenerate} variant="outline" disabled={isLoading}>
            {isLoading ? 'Regenerating...' : 'Regenerate'}
          </Button>
          <Button onClick={onExport} variant="outline">
            Export All
          </Button>
        </div>
      </div>

      {/* Variation Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {variations.map((variation, index) => (
          <button
            key={index}
            onClick={() => setSelectedVariation(index)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedVariation === index
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            Variation {index + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Editing */}
        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-lg font-semibold mb-4">Platform Selection</h3>
            <div className="flex space-x-2">
              {Object.entries(platformGuidelines).map(
                ([platform, guidelines]) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPlatform === platform
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">
                      {platform === 'facebook' && '📘'}
                      {platform === 'instagram' && '📷'}
                      {platform === 'linkedin' && '💼'}
                      {platform === 'twitter' && '🐦'}
                      {platform === 'whatsapp' && '💬'}
                    </span>
                    <span>{guidelines.name}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Editing Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">✏️</span>
              <h3 className="text-lg font-semibold">
                Editing for {platformGuidelines[selectedPlatform].name}
              </h3>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              Max Caption:{' '}
              {platformGuidelines[selectedPlatform].maxCaption.toLocaleString()}{' '}
              characters
              <br />
              Max Hashtags: {platformGuidelines[selectedPlatform].maxHashtags}
            </div>

            {/* Caption Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Caption
                </label>
                <span
                  className={`text-xs ${
                    currentContent.caption?.length >
                    platformGuidelines[selectedPlatform].maxCaption
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {currentContent.caption?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxCaption}
                </span>
              </div>
              <textarea
                value={currentContent.caption || ''}
                onChange={(e) => handleContentChange('caption', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Enter your caption..."
              />
              {currentContent.caption?.length >
                platformGuidelines[selectedPlatform].maxCaption && (
                <p className="text-red-500 text-xs mt-1">
                  Caption exceeds the limit for{' '}
                  {platformGuidelines[selectedPlatform].name}
                </p>
              )}
            </div>

            {/* Hashtags Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  # Hashtags
                </label>
                <span
                  className={`text-xs ${
                    currentContent.hashtags?.length >
                    platformGuidelines[selectedPlatform].maxHashtags
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {currentContent.hashtags?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxHashtags} hashtags
                </span>
              </div>
              <input
                type="text"
                value={currentContent.hashtags?.join(' ') || ''}
                onChange={(e) =>
                  handleContentChange(
                    'hashtags',
                    e.target.value.split(' ').filter((tag) => tag.trim())
                  )
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="#hashtag1 #hashtag2 #hashtag3"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate hashtags with spaces. Include the # symbol.
              </p>
            </div>

            {/* Call to Action Editor */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Call to Action
              </label>
              <input
                type="text"
                value={currentContent.cta || ''}
                onChange={(e) => handleContentChange('cta', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Comment your thoughts below! 👍"
              />
              <p className="text-xs text-gray-500 mt-1">
                Encourage engagement with your audience
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">
                {selectedPlatform === 'facebook' && '📘'}
                {selectedPlatform === 'instagram' && '📷'}
                {selectedPlatform === 'linkedin' && '💼'}
                {selectedPlatform === 'twitter' && '🐦'}
                {selectedPlatform === 'whatsapp' && '💬'}
              </span>
              <h3 className="text-lg font-semibold">
                {platformGuidelines[selectedPlatform].name} Preview
              </h3>
            </div>

            <div className="flex justify-center">{renderPlatformPreview()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostResults;
