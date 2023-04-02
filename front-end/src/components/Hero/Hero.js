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
  VStack,
} from "@chakra-ui/react";
import { css } from '@emotion/react';
import { ChevronDownIcon } from "@chakra-ui/icons";

// 2 GRADIENT DESIGN TO MAKE IT POP! --> Radial looks so much better than linear
const gradientAnimation = css`
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse, #3333, transparent); // double gradients
      mix-blend-mode: multiply;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%; 
      }
    }
  `;

// DOWN ARRAY ANIMATION -> MOVE DOWN 10px forever 
const arrowAnimation = css`
    @keyframes moveDown {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(10px);
      }
    }

    svg {
      animation: moveDown 1.5s infinite;
    }
  `;

export default function CallToActionWithAnnotation() {
  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="home"
      css={gradientAnimation}
      bgGradient="radial(circle, #333, #666)" // gray colors, dark gray and lighter gray 
      backgroundSize="200% 200%"
      animation="gradient 5s ease infinite" // define our gradient, 5s is not too much on the eye
      p={20}
    >
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
            lineHeight={"110%"}
            color={"#FFFFFF"}
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
          <VStack spacing={4} mt={8} css={arrowAnimation}>
            <Text fontSize="lg" fontWeight="bold" color={"#FFFFFF"}>
              Scroll down to learn more
            </Text>
            <Button
              variant="unstyled"
              onClick={scrollToAbout}
            >
              <Icon as={ChevronDownIcon} w={8} h={8} color={"#FFFFFF"} />
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}