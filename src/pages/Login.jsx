import { Container, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [session, setSession] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setSession(true);
    navigate("/");
  };

  const logout = () => {
    setSession(false);
  };

  if (session) {
    navigate("/");
  }

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <Button colorScheme="teal" onClick={login}>
            Login
          </Button>
          {session && (
            <Button colorScheme="teal" onClick={logout}>
              Logout
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;