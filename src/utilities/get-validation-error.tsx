/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeWithKey } from '../models/type-with-key';

export const getValidationError = (errorCode: any) => {
	const codeMatcher: TypeWithKey<string> = {
		ERR_NETWORK: 'Problema con la red',
	};

	return codeMatcher[errorCode];
};
