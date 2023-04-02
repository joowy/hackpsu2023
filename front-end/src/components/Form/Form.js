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

import { auth, db } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

const RegistrationForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    credit_limit: "",
    current_age: "",
    current_balance: "",
    current_income: "",
    education: "",
    num_dependants: "",
    number_of_cards: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      credit_limit: parseFloat(formState.credit_limit),
      current_age: parseInt(formState.current_age),
      current_balance: parseFloat(formState.current_balance),
      current_income: parseFloat(formState.current_income),
      education: formState.education,
      num_dependants: parseInt(formState.num_dependants),
      number_of_cards: parseInt(formState.number_of_cards),
    };

    try {
      const user_email_before = auth.currentUser.email.indexOf("@");
      const emailString = auth.currentUser.email.slice(0, user_email_before);
      await set(ref(db, `users/${emailString}`), data);
      toast({
        title: "Form submitted.",
        description: "We've saved your form data.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/account");
    } catch (error) {
      toast({
        title: "Error submitting form.",
        description:
          "There was an error submitting your form data. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Information
      </Heading>

      <FormControl mr="5%">
        <FormLabel htmlFor="credit-limit" fontWeight={"normal"}>
          Credit Limit
        </FormLabel>
        <Input
          id="credit_limit"
          placeholder="Credit limit"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current_age" fontWeight={"normal"}>
          Current Age
        </FormLabel>
        <Input id="current_age" placeholder="Age" onChange={handleChange} />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current_balance" fontWeight={"normal"}>
          Current Balance
        </FormLabel>
        <Input
          id="current_balance"
          placeholder="Balance"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current_income" fontWeight={"normal"}>
          Current Income
        </FormLabel>
        <Input
          id="current_income"
          placeholder="Income"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="education" fontWeight={"normal"}>
          Education
        </FormLabel>
        <Select
          id="education"
          placeholder="Select education level"
          onChange={handleChange}
        >
          <option value="High School">High School</option>
          <option value="Some College">Some College</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="num_dependants" fontWeight={"normal"}>
          Number of Dependants
        </FormLabel>
        <Input
          id="num_dependants"
          placeholder="Number of dependants"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="number_of_cards" fontWeight={"normal"}>
          Number of Credit Cards
        </FormLabel>
        <Input
          id="number_of_cards"
          placeholder="Number of Cards"
          onChange={handleChange}
        />
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
          onClick={handleSubmit}
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
