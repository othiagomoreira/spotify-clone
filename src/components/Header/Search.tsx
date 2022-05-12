import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiCircle } from 'react-icons/fi';

export const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        {<FiCircle color="#77777" fontSize={18} />}
      </InputLeftElement>
      <Input
        type="text"
        border="none"
        color="gray.50"
        placeholder="Search..."
        _placeholder={{ color: 'inherit' }}
      />
    </InputGroup>
  );
};
