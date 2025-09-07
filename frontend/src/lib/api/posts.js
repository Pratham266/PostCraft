import { api } from './index';

export const postsAPI = {
  // Generate posts
  generatePosts: async (data) => {
    try {
      const response = await api.post('/posts/generate-text', data);
      return response.data;
    } catch (error) {
      console.error('Error generating posts:', error);
      throw error;
    }
  },

  // Regenerate a specific variation
  regenerateVariation: async (variationId, data) => {
    try {
      const response = await api.post(`/posts/regenerate/${variationId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error regenerating variation:', error);
      throw error;
    }
  },

  // Edit caption for a specific variation and platform
  editCaption: async (variationId, platform, data) => {
    try {
      const response = await api.put(
        `/posts/edit/${variationId}/${platform}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error('Error editing caption:', error);
      throw error;
    }
  },

  // Export posts as ZIP
  exportPosts: async (data) => {
    try {
      const response = await api.post('/posts/export', data, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error exporting posts:', error);
      throw error;
    }
  },

  // Get post history
  getPostHistory: async () => {
    try {
      const response = await api.get('/posts/history');
      return response.data;
    } catch (error) {
      console.error('Error fetching post history:', error);
      throw error;
    }
  },

  // Delete a post
  deletePost: async (postId) => {
    try {
      const response = await api.delete(`/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },
};
