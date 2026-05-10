import { Text, Flex, IconButton, Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="space-around"
      align="center"
      bg="gray.100"
    >
      <VStack gapY={10}>
        <Text fontSize="4xl">This is a simple counter!</Text>
        <VStack bg="white" p={5} borderRadius="full">
          <IconButton
            borderRadius="full"
            variant="subtle"
            colorPalette="green"
            onClick={() => setCount((count) => count + 1)}
          >
            <LuPlus />
          </IconButton>
          <Text fontSize="3xl">{count}</Text>
          <IconButton
            borderRadius="full"
            variant="subtle"
            colorPalette="red"
            onClick={() => setCount((count) => (count > 0 ? count - 1 : count))}
          >
            <LuMinus />
          </IconButton>
        </VStack>
      </VStack>
    </Flex>
  );
}
