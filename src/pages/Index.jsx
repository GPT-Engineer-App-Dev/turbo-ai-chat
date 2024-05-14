import { useState } from "react";
import { Box, Button, Input, Text, VStack, Container, Heading } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSendPrompt = () => {
    // Simulate a response from GPT-3.5 Turbo
    const simulatedResponse = `Response to: "${prompt}"`;
    setResponse(simulatedResponse);
  };

  return (
    <Container maxW="container.md" centerContent>
      <VStack spacing={4} mt={10}>
        <Heading as="h1" size="xl" textAlign="center">
          GPT-3.5 Turbo Simulator <FaRobot />
        </Heading>
        <Input placeholder="Enter your prompt here..." value={prompt} onChange={handleInputChange} size="lg" />
        <Button colorScheme="blue" onClick={handleSendPrompt} leftIcon={<FaRobot />}>
          Send Prompt
        </Button>
        <Box p={5} shadow="md" borderWidth="1px" w="full">
          <Text mt={4}>{response}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
