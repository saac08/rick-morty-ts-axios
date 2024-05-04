import { Flex, Heading, IconButton } from '@radix-ui/themes';
import { CiLight } from 'react-icons/ci';

const Navbar = () => {
	return (
		<Flex p={'5'} justify={'center'} align={'center'} gap={'9'}>
			<Heading>Rick and Morty</Heading>
			<IconButton color='gray' variant='soft' size={'3'}>
				<CiLight size={25} />
			</IconButton>
		</Flex>
	);
};

export default Navbar;
