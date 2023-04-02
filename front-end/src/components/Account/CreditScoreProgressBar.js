import React from 'react';
import { Box, Progress, useColorModeValue } from '@chakra-ui/react';

export const CreditScoreProgressBar = ({ value }) => {
    const progressBg = useColorModeValue('gray.100', 'gray.700');
    const lowScoreColor = useColorModeValue('red.400', 'red.600');
    const highScoreColor = useColorModeValue('green.400', 'green.600');

    const progressColor = (score) => {
        const percentage = score / 850;
        return `linear-gradient(to right, ${lowScoreColor} 0%, ${lowScoreColor} ${percentage}%, ${highScoreColor} ${percentage}%, ${highScoreColor} 100%)`;
      };
    
    return (
        <Progress
        value={value}
        max={850}
        borderRadius="md"
        bg={progressBg}
        size="md"
        sx={{
            '& > div': {
              background: 'linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)',
            },}}
      />
//     <Progress
//     height="24px"
//     borderRadius="2xl"
//     value={60}
//     sx={{
//       '& > div': {
//         background: 'linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)',
//       },
//     }}
//   />
    );
  };
  