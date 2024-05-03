export type TypeWithKey<T> = { [key: string]: T };

export type CharacterData = {
	name: string;
	image: string;
	species: string;
	status: string;
};
