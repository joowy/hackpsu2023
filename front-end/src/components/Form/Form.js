import React, { useState } from "react";
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
  Select,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import { db } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

const RegistrationForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Information
      </Heading>

      <FormControl mr="5%">
        <FormLabel htmlFor="credit-limit" fontWeight={"normal"}>
          Credit Limit
        </FormLabel>
        <Input id="credit-limit" placeholder="Credit limit" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="credit-score" fontWeight={"normal"}>
          Credit Score
        </FormLabel>
        <Input id="credit-score" placeholder="Credit score" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="age" fontWeight={"normal"}>
          Current Age
        </FormLabel>
        <Input id="age" placeholder="Age" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current-balance" fontWeight={"normal"}>
          Current Balance
        </FormLabel>
        <Input id="current-balance" placeholder="Balance" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current-income" fontWeight={"normal"}>
          Current Income
        </FormLabel>
        <Input id="current-income" placeholder="Income" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="education" fontWeight={"normal"}>
          Education
        </FormLabel>
        <Select id="education" placeholder="Select education level">
          <option value="High School">High School</option>
          <option value="Some College">Some College</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="number-dependants" fontWeight={"normal"}>
          Number of Dependants
        </FormLabel>
        <Input id="number-dependants" placeholder="Number of dependants" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="number-cards" fontWeight={"normal"}>
          Number of Credit Cards
        </FormLabel>
        <Input id="number-cards" placeholder="Number of Cards" />
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
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
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
