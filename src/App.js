import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
	// In this to get the initial state of the todos, we are unnecessarily calling this localStorage.getItem function on each and every render, because initial state is called only on the first render, so instead of directly providing this over here, we will provide a function that will be called only on the initial render and not on the every render.
	const [todos, setTodos] = useState(
		() => JSON.parse(localStorage.getItem("todos")) || []
	);

	// This is used so that we can persist the todos in the localStorage and it is changed on every render.
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		// In this, when we pass any number from 1 to 64 then in this 1 = 4px, so here as we are passing 4, so the padding is 4*4px = 16px
		<VStack p={4}>
			<IconButton
				icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
				isRound="true"
				size="lg"
				alignSelf="flex-end"
				onClick={toggleColorMode}
			/>
			<Heading
				mb="8"
				fontWeight="extrabold"
				fontSize="5xl"
				bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
				bgClip="text"
			>
				Todo Application
			</Heading>
			<TodoList todos={todos} deleteTodo={deleteTodo} />
			<AddTodo addTodo={addTodo} />
		</VStack>
	);
}

export default App;
