// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Fetch CSRF token from Django
const getCSRFToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/csrf/`, {
      withCredentials: true,
    });
    return response.data.csrfToken;
  } catch (error) {
    // Try getting from cookie if endpoint fails
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return csrfToken || '';
  }
};

// Add CSRF token to all requests
apiClient.interceptors.request.use(async (config) => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase() || '')) {
    const csrfToken = await getCSRFToken();
    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }
  }
  return config;
});

export default apiClient;
