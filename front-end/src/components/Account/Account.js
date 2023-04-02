import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { get, ref } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { auth, db } from "../../firebaseConfig";
import { CreditScoreProgressBar } from "./CreditScoreProgressBar";

export const Account = ({}) => {
  const user = auth.currentUser;

  const user_email_before = user.email.indexOf("@");
  const emailString = user.email.slice(0, user_email_before);
  const [record, setRecord] = useState(null);
  const dataRef = ref(db, `/users/${emailString}`);

  useEffect(  () => {
    get(dataRef).then((snapshot) => {
      setRecord(snapshot.val());
    });
  }, [record]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {record ? (
        <Box p={8} marginTop="4rem" marginBottom="3rem" maxWidth="400px">
          <Card>
            <CardHeader>
              <Heading as="h1" size="2xl" textAlign="center">
                <Text>Credit Score</Text>
                {record.credit_score ? (
                  Math.round(record.credit_score) + "/850"
                ) : (
                  <Spinner />
                )}
                <CreditScoreProgressBar value={record.credit_score ? record.credit_score  : 500}/>
              </Heading>
            </CardHeader>
            <CardBody>
            <Text fontSize={"3xl"}  >  <strong>Your Information  </strong></Text>
              <VStack alignItems="flex-start" spacing={2}>
                <Text>
                  Credit Limit: {record.credit_limit}
                </Text>
                <Text>
                  Current Age: {record.current_age}
                </Text>
                <Text>
                  Current Balance: {record.current_balance}
                </Text>
                <Text>
                  Current Income: {record.current_income}
                </Text>
                <Text>
                  Education: {record.education}
                </Text>
                <Text>
                  Number of Dependents: {record.num_dependants}
                </Text>
                <Text>
                  Number of Cards: {record.number_of_cards}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </Box>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
