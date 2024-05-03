import axios from 'axios';

export const getAllCharacters = async () => {
	const API_BASE_URL = 'https://rickandmortyapi.com/api/character';
	const getAllCharacters = axios.get(API_BASE_URL);
	return getAllCharacters;
};
