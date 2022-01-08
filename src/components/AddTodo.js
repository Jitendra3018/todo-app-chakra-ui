import { Button, HStack, Input } from "@chakra-ui/react";

function AddTodo() {
	const handleSubmit = (e) => {};

	return (
		<form onSubmit={handleSubmit}>
			<HStack mt="8">
				<Input variant="filled" placeholder="Enter any todo..." />
				<Button px={8} colorScheme="pink" type="submit">
					Add Todo
				</Button>
			</HStack>
		</form>
	);
}

export default AddTodo;
