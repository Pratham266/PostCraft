import { api } from './index';

export const postsAPI = {
  // Generate AI-powered posts
  generatePosts: async (data) => {
    try {
      const response = await api.post('/posts/generate', data);
      return response.data;
    } catch (error) {
      console.error('Error generating posts:', error);
      throw error;
    }
  },

  // Regenerate specific variation
  regenerateVariation: async (variationId, data) => {
    try {
      const response = await api.post(`/posts/regenerate/${variationId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error regenerating variation:', error);
      throw error;
    }
  },

  // Edit caption for specific platform
  editCaption: async (variationId, platform, data) => {
    try {
      const response = await api.put(`/posts/edit/${variationId}/${platform}`, data);
      return response.data;
    } catch (error) {
      console.error('Error editing caption:', error);
      throw error;
    }
  },

  // Export posts package
  exportPosts: async (data) => {
    try {
      const response = await api.post('/posts/export', data, {
        responseType: 'blob'
      });
      return response.data;
    } catch (error) {
      console.error('Error exporting posts:', error);
      throw error;
    }
  },

  // Get platform guidelines
  getPlatformGuidelines: async () => {
    try {
      const response = await api.get('/posts/guidelines');
      return response.data;
    } catch (error) {
      console.error('Error fetching guidelines:', error);
      throw error;
    }
  }
};
