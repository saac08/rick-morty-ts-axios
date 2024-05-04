import { Avatar, Badge, Box, Card, Flex, Text } from '@radix-ui/themes';
import { CharacterData } from '../../models/type-with-key';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

const CharacterCard = ({ name, image, species, status }: CharacterData) => {
	return (
		<Box>
			<Card>
				<Flex gap={'3'} align={'center'}>
					<Avatar
						size={'7'}
						radius={'medium'}
						fallback={'T'}
						src={image}
					/>
					<Box>
						<Text
							as='div'
							size={{ initial: '2', xs: '3' }}
							weight={'bold'}
							mb={'1'}
							wrap={'pretty'}
						>
							{name}
						</Text>
						<Text
							as='div'
							size={{ initial: '2', xs: '3' }}
							weight={'light'}
							color={'gray'}
							mb={'1'}
							wrap={'pretty'}
						>
							{species}
						</Text>
						<Badge
							color={
								status === 'Alive'
									? 'green'
									: status === 'Dead'
									? 'red'
									: 'orange' // Default color for unknown status
							}
							size={{ initial: '2', xs: '3' }}
						>
							{capitalizeFirstLetter(status)}
						</Badge>
					</Box>
				</Flex>
			</Card>
		</Box>
	);
};

export default CharacterCard;
