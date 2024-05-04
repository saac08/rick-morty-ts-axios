import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/getCharacters.service';
import { Grid } from '@radix-ui/themes';
import CharacterCard from './CharacterCard';
import SkeletonCharacterComponent from './SkeletonCharacterComponent';

function CharacterList() {
	interface Character {
		id: number;
		name: string;
		image: string;
		species: string;
		status: string;
	}

	const [characters, setCharacter] = useState<Character[]>([]);

	const fetchCharacter = async () => {
		const response = await getAllCharacters();
		setCharacter(response.data.results);
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchCharacter();
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	return (
		<>
			<Grid
				gap={'1'}
				columns={{ initial: '1', xs: '2', md: '3', lg: '4' }}
			>
				{characters.map((character) =>
					loading ? (
						<SkeletonCharacterComponent key={character.id} />
					) : (
						<CharacterCard key={character.id} {...character} />
					)
				)}
			</Grid>
		</>
	);
}

export default CharacterList;
