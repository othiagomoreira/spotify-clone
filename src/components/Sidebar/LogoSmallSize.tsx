import { Flex, Image } from '@chakra-ui/react';
import { ButtonToggleSidebar } from './ButtonToggleSidebar';

export const LogoSmallSize = () => {
  return (
    <Flex flexDir="column" gap="6" alignItems="center" mt="4">
      <ButtonToggleSidebar />

      <Image
        boxSize="30px"
        objectFit="cover"
        src="/images/logo-icon.svg"
        alt="Spotify"
      />
    </Flex>
  );
};
