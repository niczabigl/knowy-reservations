const API_PROTOCOL = 'http://';
const API_URL = 'localhost';
const API_PORT = ':4200';

export const getApiUrl = (endpoint: string): string => `${API_PROTOCOL}${API_URL}${API_PORT}/api${endpoint}`;
