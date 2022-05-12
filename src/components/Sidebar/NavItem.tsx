import { Button } from '@chakra-ui/react';
import { useSidebar } from '../../hooks/UseSidebar';
import { motion } from 'framer-motion';

interface NavItemProps {
  isActive?: boolean;
  title: string;
  icon: React.ReactElement;
}

export const NavItem = ({ title, icon, isActive = false }: NavItemProps) => {
  const { isOpenNav } = useSidebar();

  return (
    <Button
      leftIcon={icon}
      variant="ghost"
      color="white"
      justifyContent="flex-start"
      fontSize={14}
      fontWeight="medium"
      _hover={{ bgColor: '#272626' }}
      bgColor={isActive ? '#393939' : ''}
    >
      <motion.span
        hidden={!isOpenNav}
        animate={{ scaleX: isOpenNav ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      >
        {title}
      </motion.span>
    </Button>
  );
};
