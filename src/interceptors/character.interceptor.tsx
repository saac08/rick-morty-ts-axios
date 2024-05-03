import axios from 'axios';
import { getValidationError } from '../utilities/get-validation-error';

export const CharacterInterceptor = () => {
	axios.interceptors.request.use((request) => {
		return request;
	});

	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			console.log('error', getValidationError(error.code));
			return Promise.reject(error);
		}
	);
};
