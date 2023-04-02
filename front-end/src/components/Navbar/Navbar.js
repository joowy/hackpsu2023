import "../../firebaseConfig";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { app, auth } from "../../firebaseConfig";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ href, children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useNavigate();

  const [error, setError] = useState(null);
  const user = auth.currentUser;
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { googleUser } = result;

      history.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Box 
        as="nav" position="fixed"
        top={0} left={0} right={0} zIndex={1000}
        bg={useColorModeValue("gray.100", "gray.900")} boxShadow="md" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Button
              as={RouterLink}
              to="/"
              variant={"ghost"}
              leftIcon={
                <Image src="/Picture1.png" width="50px" height="50px" />
              }
              color={"#333"}
            >
              InclusiScore
            </Button>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink href="#home" color="#333">Home</NavLink>
              <NavLink href="#about" color="#333">About Us</NavLink>  
            </HStack>
          </HStack>
          <Spacer />
          {user ? (
            <HStack spacing={4}>
              <Text>{user.displayName}</Text>
              <Avatar src={user.photoURL} size="sm" />
            </HStack>
          ) : (
            <Button mr={2} color={"#333"} onClick={handleSignInWithGoogle}>
              Sign in with Google
            </Button>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
