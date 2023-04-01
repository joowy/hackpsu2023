import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const RegistrationForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Flex mt="5%" justifyContent="space-between">
        <Button
          colorScheme="teal"
          variant="solid"
          w="7rem"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Button
          w="7rem"
          colorScheme="red"
          variant="solid"
          onClick={() => {
            toast({
              title: 'Account created.',
              description: "We've created your account for you.",
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default function Form() {
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <RegistrationForm />
      </Box>
    </>
  );
}