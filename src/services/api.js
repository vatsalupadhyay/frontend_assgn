import axios from 'axios';

const API_URL = 'https://softwium.com/api';

export const fetchBooks = () => axios.get(`${API_URL}/books`);
export const fetchBookById = (id) => axios.get(`${API_URL}/books/${id}`);
