import { Flex } from '@radix-ui/themes';
import CharacterList from './components/Character/CharacterList';

function App() {
	return (
		<Flex direction={'column'}>
			<CharacterList />
		</Flex>
	);
}

export default App;
