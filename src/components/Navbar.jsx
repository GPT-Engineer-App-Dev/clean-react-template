import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
      {session ? (
          <Button colorScheme="teal" variant="outline" onClick={logout} mx={2}>
            Logout
          </Button>
        ) : (
          <Link as={RouterLink} to="/login" color="white" mx={2}>
            Login
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;