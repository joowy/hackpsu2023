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
import { auth, db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

export const Account = ({}) => {
  const user = auth.currentUser;

  const user_email_before = user.email.indexOf("@");
  const emailString = user.email.slice(0, user_email_before);
  const [record, setRecord] = useState(null);
  const dataRef = ref(db, `/users/${emailString}`);

  useEffect(() => {
    get(dataRef).then((snapshot) => {
      console.log(snapshot.val());
      setRecord(snapshot.val());
    });
  }, [record]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {record ? (
        <Box p={8} maxWidth="400px">
          <Card>
            <CardHeader>
              <Heading as="h1" size="2xl" textAlign="center">
                <Text>Credit Score</Text>
                {record.credit_score ? (
                  Math.round(record.credit_score)
                ) : (
                  <Spinner />
                )}
              </Heading>
            </CardHeader>
            <CardBody>
              <VStack alignItems="flex-start" spacing={2}>
                <Text>
                  <strong>Credit Limit:</strong> {record.credit_limit}
                </Text>
                <Text>
                  <strong>Current Age:</strong> {record.current_age}
                </Text>
                <Text>
                  <strong>Current Balance:</strong> {record.current_balance}
                </Text>
                <Text>
                  <strong>Current Income:</strong> {record.current_income}
                </Text>
                <Text>
                  <strong>Education:</strong> {record.education}
                </Text>
                <Text>
                  <strong>Number of Dependents:</strong> {record.num_dependants}
                </Text>
                <Text>
                  <strong>Number of Cards:</strong> {record.number_of_cards}
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
