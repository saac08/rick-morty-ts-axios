import axios from 'axios';

export const getAllCharacters = async (pageNumber: number) => {
	const API_BASE_URL = 'https://rickandmortyapi.com/api/character';
	const getAllCharacters = axios.get(`${API_BASE_URL}/?page=${pageNumber}`);
	return getAllCharacters;
};
