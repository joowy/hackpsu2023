import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function GridListWithHeading() {
    return (
      <Box id="about" p={20} bg="#333">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'} color={"#FFFFFF"}>About Us</Heading>
          <Text color={"#FFFFFF"} fontSize={'xl'}>
          InclusiScore harnesses the power of AI and big data to revolutionize financial inclusion,
           making loans and financial services accessible to marginalized communities. Our innovative,
            alternative credit scoring system evaluates individuals without traditional credit histories, 
            empowering them to build credit and break the cycle of poverty. Join us in redefining financial 
            opportunities and creating a more equitable world with InclusiScore.
          </Text>
        </Stack>
  
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <FeatureBox
            title="Addressing Financial Exclusion"
            text="Financial exclusion is a pressing issue for millions of individuals."
          />
          <FeatureBox
            title="Reducing Interest Rates & Fees"
            text="Higher interest rates and fees."
          />
          <FeatureBox
            title="Overcoming Employment Barriers"
            text="Employment barriers."
          />
          <FeatureBox
            title="Establishing Credit History"
            text="Inability to establish a credit history​."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const FeatureBox = ({ title, text }) => (
  <Box
    color={"#FFFFFF"}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    boxShadow="xl"
  >
    <Icon as={CheckIcon} color={"green.400"} mb={2} />
    <Text fontWeight={600} mb={2}>
      {title}
    </Text>
    <Text color={"#FFFFFF"}>{text}</Text>
  </Box>
);