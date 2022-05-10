import {
  RiCompassFill,
  RiTimeFill,
  RiBarChartFill,
  RiMoreFill,
} from 'react-icons/ri';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

import { Box, Stack } from '@chakra-ui/react';
import { NavButton } from './NavButton';
import { Logo } from './Logo';

export const Sidebar = () => {
  return (
    <Box as="aside" bgColor="black" minH="100vh" w="20" p="4">
      <Logo />

      <Stack spacing="2" mt="6">
        <NavButton aria-label="home" icon={<MdHome fontSize={25} />} />
        <NavButton aria-label="home" icon={<RiCompassFill fontSize={20} />} />
        <NavButton aria-label="home" icon={<FaMicrophoneAlt fontSize={20} />} />
        <NavButton aria-label="home" icon={<RiBarChartFill fontSize={20} />} />
        <NavButton aria-label="home" icon={<RiTimeFill fontSize={20} />} />
        <NavButton aria-label="home" icon={<RiMoreFill fontSize={25} />} />
      </Stack>
    </Box>
  );
};
