import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { Layout } from "./components/Layout";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
        <Features />
      </Box>
    </Layout>
  );
};