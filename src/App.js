import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";

function App() {
	return (
		// In this, when we pass any number from 1 to 64 then in this 1 = 4px, so here as we are passing 4, so the padding is 4*4px = 16px
		<VStack p={4}>
			<IconButton
				icon={<FaSun />}
				isRound="true"
				size="lg"
				alignSelf="flex-end"
			/>
			<Heading
				mb={8}
				fontWeight="extrabold"
				fontSize="5xl"
				bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
				bgClip="text"
			>
				Todo Application
			</Heading>
			<TodoList />
		</VStack>
	);
}

export default App;
