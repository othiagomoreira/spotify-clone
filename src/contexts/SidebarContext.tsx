import { createContext, ReactNode } from 'react';
import { useBoolean } from '@chakra-ui/react';

interface SidebarProviderProps {
  children: ReactNode;
}

type SetIsOpenNav = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

interface SidebarContextData {
  isOpenNav: boolean;
  setIsOpenNav: SetIsOpenNav;
}

export const SidebarContext = createContext({} as SidebarContextData);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpenNav, setIsOpenNav] = useBoolean();

  return (
    <SidebarContext.Provider value={{ isOpenNav, setIsOpenNav }}>
      {children}
    </SidebarContext.Provider>
  );
};
