import { IconButton, IconButtonProps } from '@chakra-ui/react';

export const NavButton = ({ ...rest }: IconButtonProps) => {
  return (
    <IconButton
      bg="transparent"
      color="gray.200"
      _hover={{ bgColor: 'gray.900' }}
      {...rest}
    />
  );
};
