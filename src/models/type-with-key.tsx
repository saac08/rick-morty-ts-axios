export type TypeWithKey<T> = { [key: string]: T };

export type CharacterData = {
	id: number;
	name: string;
	image: string;
	species: string;
	status: string;
};
