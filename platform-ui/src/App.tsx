import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
      </Box>
    </Layout>
  );
};