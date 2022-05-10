import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Ri24HoursFill } from 'react-icons/ri';

export const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        {<Ri24HoursFill />}
      </InputLeftElement>
      <Input type="search" placeholder="Search..." />
    </InputGroup>
  );
};
