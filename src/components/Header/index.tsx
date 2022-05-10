import { Box } from '@chakra-ui/react';
import { Search } from './Search';

export const Header = () => {
  return (
    <Box as="header" py="4" h="16">
      <Search />
    </Box>
  );
};
