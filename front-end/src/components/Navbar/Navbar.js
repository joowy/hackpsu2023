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
} from "@chakra-ui/react";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { app, auth } from "../../firebaseConfig";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (children) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useNavigate();

  const [error, setError] = useState(null);
  const provider = new GoogleAuthProvider();
  const user = auth.currentUser;

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
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
            >
              InclusiScore
            </Button>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Spacer />
          {user ? (
            <Button as={RouterLink} to="/account">
              {user.displayName}
            </Button>
          ) : (
            <Button mr={2} onClick={handleSignInWithGoogle}>
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
