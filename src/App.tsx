import { Box, Divider } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { TeamMembers } from "./components/TeamMemebrs";
import { Footer } from "./components/Footer";
import { Publications } from "./components/Publications";

export const App = () => {
  return (
    <Layout>
      <Divider orientation='horizontal' borderColor={'gray.400'} borderStyle="solid" />
      <Box bg="gray.50" id="hero">
        <HeroSection />
      </Box>
      <Divider orientation='horizontal' borderColor={'gray.400'} borderStyle="solid" />

      {/* <Tool /> */}

      {/* <Box id="features">
        <Features />
      </Box> */}

      <Publications />
      <Divider orientation='horizontal' borderColor={'gray.400'} borderStyle="solid" />

      <Box id='teammembers'>
        <TeamMembers />
      </Box>
      <Divider orientation='horizontal' borderColor={'gray.400'} borderStyle="solid" />

      <Footer />
    </Layout >
  );
};