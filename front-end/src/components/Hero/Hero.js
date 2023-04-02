import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <Box id="home" bg="#333" p={20}>
      <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"} color={"#FFFFFF"}
        >
          InclusiScore
          <br />
          <Text as={"span"} color={"#0eb49c"}>
            Redefining Financial Opportunities for Marginalized Communities
          </Text>
        </Heading>
        <Box position="relative" h="100px">
          <AbsoluteCenter>
            <Stack flex={1} spacing={6} direction={"row"}>
              <Link to="/form">
                <Button
                  rounded={"full"}
                  px={6}
                  colorScheme={"#0eb49c"}
                  bg={"#0eb49c"}
                  _hover={{ bg: "#0e8f7c" }}
                >
                  Unlock Your InclusiScore Now
                </Button>
              </Link>
            </Stack>
          </AbsoluteCenter>
        </Box>
      </Stack>
    </Container>
    </Box>
  );
}
