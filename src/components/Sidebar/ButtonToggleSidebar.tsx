import { IconButton } from '@chakra-ui/react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { useSidebar } from '../../hooks/UseSidebar';

export const ButtonToggleSidebar = () => {
  const { isOpenNav, setIsOpenNav } = useSidebar();

  return (
    <IconButton
      aria-label="toggle Sidebar"
      icon={
        isOpenNav ? (
          <AiOutlineDoubleLeft fontSize={20} color="white" />
        ) : (
          <AiOutlineDoubleRight fontSize={20} color="white" />
        )
      }
      variant="ghost"
      _hover={{ bgColor: 'black' }}
      onClick={setIsOpenNav.toggle}
    />
  );
};
