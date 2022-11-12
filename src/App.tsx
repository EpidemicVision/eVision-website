import { Box, Container } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { Layout } from "./components/Layout";
import { TeamMembers } from "./components/TeamMemebrs";

export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
        <div id="features">
          <Features />
        </div>

        <div id='teammembers'>
          <TeamMembers />
        </div>
      </Box>
    </Layout >
  );
};