import { Box, Container } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { Layout } from "./components/Layout";
import { TeamMembers } from "./components/TeamMemebrs";
import { Footer } from "./components/Footer";
import { Publications } from "./components/Publications";
import { Tool } from "./components/Tool";

export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
      </Box>

      {/* <Tool /> */}

      {/* <Box id="features">
        <Features />
      </Box> */}

      <Publications />

      <Box id='teammembers'>
        <TeamMembers />
      </Box>

      <Footer />
    </Layout >
  );
};