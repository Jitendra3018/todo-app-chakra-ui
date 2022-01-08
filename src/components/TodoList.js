import {
	VStack,
	HStack,
	Text,
	IconButton,
	StackDivider,
	Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
	const todos = [
		{
			id: 1,
			body: "get bread",
		},
		{
			id: 2,
			body: "get butter",
		},
	];

	return (
		<VStack
			divider={<StackDivider />}
			borderColor="gray.100"
			borderWidth="2px"
			p="4"
			borderRadius="lg"
			width="100%"
			maxWidth={{
				base: "90vw",
				sm: "70vw",
				md: "60vw",
				lg: "50vw",
				xl: "40vw",
			}}
			alignItems="stretch"
		>
			{todos?.map((todo) => (
				<HStack key={todo.id}>
					<Text>{todo.body}</Text>
					<Spacer />
					<IconButton icon={<FaTrash />} isRound="true" size="md" />
				</HStack>
			))}
		</VStack>
	);
}

export default TodoList;
