import React, { useState } from 'react';
import { Button } from './ui/button';

const PostResults = ({ generatedPosts, onRegenerate, onExport, isLoading }) => {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('facebook');
  const [editingContent, setEditingContent] = useState({});

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

  const variations = generatedPosts.variations;
  const currentVariation = variations[selectedVariation];
  const currentPlatformData = currentVariation?.platforms[selectedPlatform];

  // Platform guidelines
  const platformGuidelines = {
    facebook: { maxCaption: 63206, maxHashtags: 30, name: 'Facebook' },
    instagram: { maxCaption: 2200, maxHashtags: 30, name: 'Instagram' },
    linkedin: { maxCaption: 3000, maxHashtags: 15, name: 'LinkedIn' },
    twitter: { maxCaption: 280, maxHashtags: 10, name: 'Twitter/X' },
    whatsapp: { maxCaption: 1000, maxHashtags: 15, name: 'WhatsApp' },
  };

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

  React.useEffect(() => {
    initializeEditingContent();
  }, [selectedVariation, selectedPlatform]);

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

  const validateContent = () => {
    const content = getCurrentContent();
    const guidelines = platformGuidelines[selectedPlatform];

    return {
      captionStatus:
        content.caption?.length <= guidelines.maxCaption ? 'Good' : 'Too Long',
      hashtagCount:
        content.hashtags?.length <= guidelines.maxHashtags
          ? 'Good'
          : 'Too Many',
      hasCTA: content.cta ? 'Yes' : 'No',
    };
  };

  const renderPlatformPreview = () => {
    const content = getCurrentContent();
    const guidelines = platformGuidelines[selectedPlatform];
    console.log({ currentVariation });
    switch (selectedPlatform) {
      case 'facebook':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">YP</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Your Page</div>
                <div className="text-xs text-gray-500">Just now</div>
              </div>
              <div className="ml-auto">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">{content.caption}</p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {currentVariation.media?.images && (
              <div className="mb-3">
                <img
                  src={currentVariation.media.images[0]?.filepath}
                  alt="Generated content"
                  className="w-full rounded"
                />
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>24</span>
              <span>3 comments</span>
              <span>2 shares</span>
            </div>

            <div className="flex space-x-4 border-t pt-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>👍</span>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>💬</span>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>↗️</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        );

      case 'instagram':
        return (
          <div className="bg-white border border-gray-200 rounded-lg max-w-sm">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YP</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">your_page</div>
                </div>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
            </div>

            {console.log({ currentVariation })}
            {currentVariation.media?.images && (
              <div className="mb-3">
                <img
                  src={currentVariation.media.images[0]?.filepath}
                  alt="Generated content"
                  className="w-full"
                />
              </div>
            )}

            <div className="p-3">
              <div className="flex space-x-4 mb-3">
                <button className="text-gray-600 hover:text-red-500">🤍</button>
                <button className="text-gray-600 hover:text-blue-500">
                  💬
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  📤
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  🔖
                </button>
              </div>

              <div className="text-sm font-semibold mb-1">152 likes</div>

              <div className="text-sm mb-2">
                <span className="font-semibold">your_page</span>{' '}
                {content.caption}
              </div>

              <div className="text-sm mb-2">{content.cta}</div>

              <div className="flex flex-wrap gap-1 mb-2">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>

              <div className="text-xs text-gray-500 mb-2">
                View all 12 comments
              </div>
              <div className="text-xs text-gray-500">2 MINUTES AGO</div>

              <div className="flex items-center space-x-2 mt-3 border-t pt-3">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm border-none outline-none"
                />
                <button className="text-blue-500 text-sm font-semibold">
                  Post
                </button>
              </div>
            </div>
          </div>
        );

      case 'linkedin':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YP</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Your Page</div>
                  <div className="text-xs text-gray-500">Company Page • 2m</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  + Follow
                </button>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">{content.caption}</p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {currentVariation.media?.images && (
              <div className="mb-3">
                <img
                  src={currentVariation.media.images[0]?.filepath}
                  alt="Generated content"
                  className="w-full rounded"
                />
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>👁️ 47</span>
              <span>8 comments</span>
              <span>3 reposts</span>
            </div>

            <div className="flex space-x-4 border-t pt-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>👍</span>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>💬</span>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>🔄</span>
                <span>Repost</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>📤</span>
                <span>Send</span>
              </button>
            </div>
          </div>
        );

      case 'twitter':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">YP</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Your Page</div>
                <div className="text-xs text-gray-500">@your_page • 2m</div>
              </div>
              <div className="ml-auto">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">
                {content.caption?.length > 280
                  ? `${content.caption.substring(0, 280)}...`
                  : content.caption}
              </p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {currentVariation.media?.images && (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src={currentVariation.media.images[0]?.filepath}
                  alt="Generated content"
                  className="w-full"
                />
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>💬 24</span>
              <span>🔄 12</span>
              <span>❤️ 89</span>
              <span>📊 1.2K</span>
              <span>📤</span>
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-sm">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YN</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Your Name</div>
                  <div className="text-xs text-gray-500">Just now</div>
                </div>
              </div>

              {currentVariation.media?.images && (
                <div className="mb-3">
                  <img
                    src={
                      '/Users/prathambarot/Desktop/other/PostCraft/backend/uploads/media1_1.png'
                    }
                    alt="Generated content"
                    className="w-full rounded"
                  />
                </div>
              )}

              <div className="mb-3">
                <p className="text-sm text-green-800 mb-2">{content.caption}</p>
                <p className="text-sm font-medium text-green-800 mb-2">
                  {content.cta}
                </p>
                <div className="flex flex-wrap gap-1">
                  {content.hashtags?.map((tag, index) => (
                    <span key={index} className="text-blue-600 text-xs">
                      #{tag.replace('#', '')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-center space-x-1">
                <span className="text-xs text-gray-500">2:14 PM</span>
                <span className="text-green-500">✓✓</span>
              </div>
            </div>

            <div className="mt-3">
              <div className="bg-gray-100 rounded-lg p-2 max-w-xs ml-auto">
                <p className="text-sm text-gray-800">Great content! 👍</p>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500">2:15 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center space-x-2 bg-white rounded-lg p-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm border-none outline-none"
              />
              <button className="text-green-500">📤</button>
            </div>
          </div>
        );

      default:
        return <div>Preview not available</div>;
    }
  };

  const validation = validateContent();

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
                    getCurrentContent().caption?.length >
                    platformGuidelines[selectedPlatform].maxCaption
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {getCurrentContent().caption?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxCaption}
                </span>
              </div>
              <textarea
                value={getCurrentContent().caption || ''}
                onChange={(e) => handleContentChange('caption', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Enter your caption..."
              />
              {getCurrentContent().caption?.length >
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
                    getCurrentContent().hashtags?.length >
                    platformGuidelines[selectedPlatform].maxHashtags
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {getCurrentContent().hashtags?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxHashtags} hashtags
                </span>
              </div>
              <input
                type="text"
                value={getCurrentContent().hashtags?.join(' ') || ''}
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
                value={getCurrentContent().cta || ''}
                onChange={(e) => handleContentChange('cta', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Comment your thoughts below! 👍"
              />
              <p className="text-xs text-gray-500 mt-1">
                Encourage engagement with your audience
              </p>
            </div>

            {/* Content Guidelines */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Content Guidelines
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Caption Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      validation.captionStatus === 'Good'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {validation.captionStatus}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hashtag Count:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      validation.hashtagCount === 'Good'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {validation.hashtagCount}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Has Call to Action:
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      validation.hasCTA === 'Yes'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {validation.hasCTA}
                  </span>
                </div>
              </div>
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
