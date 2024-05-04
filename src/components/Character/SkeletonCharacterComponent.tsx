import {
	Avatar,
	Badge,
	Box,
	Card,
	Flex,
	Skeleton,
	Text,
} from '@radix-ui/themes';

const SkeletonCharacterComponent = () => {
	return (
		<Box>
			<Card>
				<Flex gap={'3'} align={'center'}>
					<Skeleton>
						<Avatar size={'7'} radius={'medium'} fallback={'T'} />
					</Skeleton>
					<Box>
						<Skeleton>
							<Text
								as='div'
								size={{ initial: '2', xs: '3' }}
								weight={'bold'}
								mb={'1'}
								wrap={'pretty'}
							>
								Name of the Character
							</Text>
						</Skeleton>
						<Skeleton>
							<Text
								as='div'
								size={{ initial: '2', xs: '3' }}
								mb={'1'}
								wrap={'pretty'}
							>
								Species of the character
							</Text>
						</Skeleton>
						<Skeleton>
							<Badge size={{ initial: '2', xs: '3' }}>
								Status of the character
							</Badge>
						</Skeleton>
					</Box>
				</Flex>
			</Card>
		</Box>
	);
};

export default SkeletonCharacterComponent;
