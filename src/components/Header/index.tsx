import { Box, Divider, Flex } from '@chakra-ui/react';
import { Search } from './Search';

export const Header = () => {
  return (
    <Flex as="header" py="4">
      <Flex bgColor="#393939" borderRadius="full" px="4">
        <Search />
        <Divider orientation="vertical" />
      </Flex>

      <Box>Profile</Box>
    </Flex>
  );
};
