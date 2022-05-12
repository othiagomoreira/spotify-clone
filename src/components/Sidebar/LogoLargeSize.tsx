import { Flex, Image } from '@chakra-ui/react';
import { ButtonToggleSidebar } from './ButtonToggleSidebar';

export const LogoLargeSize = () => {
  return (
    <Flex gap="4" alignItems="center" mt="8">
      <Image
        boxSize="100%"
        objectFit="cover"
        src="/images/logo.svg"
        alt="Spotify"
      />

      <ButtonToggleSidebar />
    </Flex>
  );
};
