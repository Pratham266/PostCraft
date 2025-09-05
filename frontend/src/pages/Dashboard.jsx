import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../components/ui/button';
import PostResults from '../components/PostResults';
import LoadingSpinner from '../components/LoadingSpinner';
import { postsAPI } from '../lib/api/posts';
import platforms from '../utils/static/platforms.jsx';
import categories from '../utils/static/category.js';

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [postIdea, setPostIdea] = useState('');
  const [postType, setPostType] = useState('image');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [category, setCategory] = useState('General');
  const [unifiedStyle, setUnifiedStyle] = useState(false);
  // const [postVariation, setPostVariation] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState(null);
  const [error, setError] = useState(null);

  const postVariation = 1;

  const postTypes = [
    {
      id: 'image',
      name: 'Image Post',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 'carousel',
      name: 'Carousel',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      id: 'video',
      name: 'Video Post',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const handlePlatformToggle = (platformId) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPlatforms(platforms.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedPlatforms([]);
  };

  const handleGenerate = async () => {
    if (!postIdea.trim()) {
      setError('Please enter a post idea');
      return;
    }

    if (selectedPlatforms.length === 0) {
      setError('Please select at least one platform');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedPosts(null);

    try {
      const response = await postsAPI.generatePosts({
        postIdea,
        postType,
        selectedPlatforms,
        category,
        unifiedStyle,
        postVariation,
      });

      if (response.success) {
        setGeneratedPosts(response.data);
      } else {
        setError(response.error || 'Failed to generate posts');
      }
    } catch (error) {
      console.error('Error generating posts:', error);
      setError(
        error.response?.data?.error ||
          'Failed to generate posts. Please try again.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = async () => {
    await handleGenerate();
  };

  const handleEdit = async (variationId, platform, data) => {
    try {
      const response = await postsAPI.editCaption(variationId, platform, data);

      if (response.success) {
        // Update the specific platform content in the generated posts
        setGeneratedPosts((prev) => ({
          ...prev,
          variations: prev.variations.map((variation) =>
            variation.id === variationId
              ? {
                  ...variation,
                  platforms: {
                    ...variation.platforms,
                    [platform]: {
                      ...variation.platforms[platform],
                      caption: data.caption,
                      hashtags: data.hashtags,
                      cta: data.cta,
                      characterCount: data.caption.length,
                    },
                  },
                }
              : variation
          ),
        }));
      }
    } catch (error) {
      console.error('Error editing caption:', error);
      setError('Failed to edit caption. Please try again.');
    }
  };

  const handleExport = async () => {
    try {
      const response = await postsAPI.exportPosts(generatedPosts);

      // Create download link
      const url = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = url;
      link.download = `postcraft-export-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting posts:', error);
      setError('Failed to export posts. Please try again.');
    }
  };

  return (
    <>
      {isGenerating && <LoadingSpinner />}

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 10h6m-6 4h6m-6 4h4"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    PostCraft
                  </h1>
                  <p className="text-sm text-gray-600">
                    AI-Powered Social Media Content Creation
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-600">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {!generatedPosts ? (
            /* Input Form */
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Create AI-Powered Social Media Posts
                </h2>
                <p className="text-gray-600">
                  Generate engaging content for multiple platforms with
                  AI-powered creativity
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error
                      </h3>
                      <div className="mt-2 text-sm text-red-700">{error}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {/* Post Idea */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your post idea?
                  </label>
                  <textarea
                    value={postIdea}
                    onChange={(e) => setPostIdea(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={4}
                    placeholder="Describe your post idea, campaign, or content theme..."
                  />
                </div>

                {/* Post Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Post Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {postTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setPostType(type.id)}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          postType === type.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${
                              postType === type.id
                                ? 'bg-purple-100'
                                : 'bg-gray-100'
                            }`}
                          >
                            {type.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {type.name}
                            </h3>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platform Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Platforms
                    </label>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSelectAll}
                        className="text-xs text-purple-600 hover:text-purple-700"
                      >
                        Select All
                      </button>
                      <span className="text-gray-300">|</span>
                      <button
                        onClick={handleDeselectAll}
                        className="text-xs text-gray-600 hover:text-gray-700"
                      >
                        Deselect All
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => handlePlatformToggle(platform.id)}
                        className={`p-3 border-2 rounded-lg text-center transition-all ${
                          selectedPlatforms.includes(platform.id)
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`p-2 rounded-lg text-white ${
                              selectedPlatforms.includes(platform.id)
                                ? platform.color
                                : 'bg-gray-400'
                            }`}
                          >
                            {platform.icon}
                          </div>
                          <span className="text-xs font-medium text-gray-700">
                            {platform.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category and Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setShowCategoryDropdown(!showCategoryDropdown)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg text-left focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center justify-between"
                      >
                        <span>{category}</span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            showCategoryDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {showCategoryDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => {
                                setCategory(cat);
                                setShowCategoryDropdown(false);
                              }}
                              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Style Preference
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="style"
                          checked={!unifiedStyle}
                          onChange={() => setUnifiedStyle(false)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Platform Optimized
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="style"
                          checked={unifiedStyle}
                          onChange={() => setUnifiedStyle(true)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Unified Style
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Variations */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Variations
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setPostVariation(num)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                          postVariation === num
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Generate Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleGenerate}
                    disabled={
                      isGenerating ||
                      !postIdea.trim() ||
                      selectedPlatforms.length === 0
                    }
                    className="w-full py-4 text-lg"
                  >
                    {isGenerating ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Generating AI-Powered Posts...</span>
                      </div>
                    ) : (
                      'Generate Posts'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Post Results */
            <PostResults
              generatedPosts={generatedPosts}
              onRegenerate={handleRegenerate}
              onEdit={handleEdit}
              onExport={handleExport}
              isLoading={isGenerating}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
