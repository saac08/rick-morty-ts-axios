/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/getCharacters.service';
import { Grid } from '@radix-ui/themes';
import CharacterCard from './CharacterCard';
import SkeletonCharacterComponent from './SkeletonCharacterComponent';
import { CharacterData } from '../../models/type-with-key';
import Pagination from './Pagination';

function CharacterList() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [characters, setCharacter] = useState<CharacterData[]>([]);

	const fetchCharacter = async () => {
		const response = await getAllCharacters(currentPage);
		setCharacter(response.data.results);
		setTotalPages(response.data.info.pages);
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchCharacter();
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, [currentPage]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};
	return (
		<>
			<Grid
				gap={'4'}
				columns={{ initial: '1', xs: '2', md: '3', lg: '4' }}
			>
				{characters.map((character) =>
					loading ? (
						<SkeletonCharacterComponent key={character.id} />
					) : (
						<CharacterCard key={character.id} {...character} />
					)
				)}
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					loading={loading}
				/>
			</Grid>
		</>
	);
}

export default CharacterList;
