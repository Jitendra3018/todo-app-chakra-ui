import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
	const [content, setContent] = useState("");
	const toast = useToast();

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent refreshing the page and form submission
		// console.log(content);
		if (!content) {
			toast({
				title: "Please enter a todo",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		const todo = {
			id: nanoid(),
			body: content,
		};
		// console.log(todo);
		addTodo(todo);
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<HStack mt="8">
				<Input
					variant="filled"
					placeholder="Enter any todo..."
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Button px={8} colorScheme="pink" type="submit">
					Add Todo
				</Button>
			</HStack>
		</form>
	);
}

export default AddTodo;
