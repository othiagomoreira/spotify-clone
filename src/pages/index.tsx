import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';
import { SidebarProvider } from '../contexts/SidebarContext';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify</title>
      </Head>

      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
    </>
  );
};

export default Home;
