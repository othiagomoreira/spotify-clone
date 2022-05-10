import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify</title>
      </Head>

      <Flex gap="8">
        <Sidebar />

        <Flex flex="1" flexDir="column">
          <Header />
          <Main />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
