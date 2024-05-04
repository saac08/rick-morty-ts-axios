import { Button, Flex } from '@radix-ui/themes';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

interface Page {
	currentPage: number;
	totalPages: number;
	loading: boolean;
	onPageChange: (newPage: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Page) => {
	const handlePrev = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1); // Trigger callback directly
		}
	};

	return (
		<Flex>
			<Button
				onClick={handlePrev}
				color='gray'
				variant='outline'
				highContrast
				disabled={currentPage === 1}
			>
				<MdNavigateBefore />
			</Button>

			<Button
				onClick={handleNext}
				color='gray'
				variant='outline'
				highContrast
				disabled={currentPage === totalPages}
			>
				<MdNavigateNext />
			</Button>
		</Flex>
	);
};

export default Pagination;
