import {
  RiCompassFill,
  RiTimeFill,
  RiBarChartFill,
  RiMoreFill,
} from 'react-icons/ri';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

import { Flex, Stack } from '@chakra-ui/react';
import { NavItem } from './NavItem';
import { LogoSmallSize } from './LogoSmallSize';
import { LogoLargeSize } from './LogoLargeSize';
import { useSidebar } from '../../hooks/UseSidebar';
import { motion } from 'framer-motion';

export const Sidebar = () => {
  const { isOpenNav } = useSidebar();

  return (
    <motion.div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        padding: '0 16px',
        overflow: 'hidden',
      }}
      animate={{ width: isOpenNav ? '190px' : '70px' }}
      transition={{ duration: 0.3, ease: 'linear' }}
    >
      <Flex
        as="nav"
        flexDir="column"
        alignItems={isOpenNav ? 'flex-start' : 'center'}
      >
        {isOpenNav ? <LogoLargeSize /> : <LogoSmallSize />}

        <Stack spacing="4" mt="10">
          <NavItem title="Home" icon={<MdHome fontSize={20} />} isActive />
          <NavItem title="Compass" icon={<RiCompassFill fontSize={20} />} />
          <NavItem title="Microfone" icon={<FaMicrophoneAlt fontSize={20} />} />
          <NavItem title="Bar Chart" icon={<RiBarChartFill fontSize={20} />} />
          <NavItem title="Time" icon={<RiTimeFill fontSize={20} />} />
          <NavItem title="More" icon={<RiMoreFill fontSize={20} />} />
        </Stack>
      </Flex>
    </motion.div>
  );
};
