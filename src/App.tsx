import { Flex } from '@radix-ui/themes';
import CharacterList from './components/Character/CharacterList';

function App() {
	return (
		<Flex direction={'column'} px={'5'} mt={'5'}>
			<CharacterList />
		</Flex>
	);
}

export default App;
