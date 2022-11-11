import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps { }

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
        <Container maxW="container.lg">
            <Center p={4} minHeight="70vh">
                <VStack>
                    <Container maxW="container.md" textAlign="center">
                        <Heading size="2xl" mb={4} color="gray.700">
                            eVision
                        </Heading>

                        <Text fontSize="xl" color="gray.500">
                            An Influenza Forecasting tool from the Healthcare and innovation Lab
                        </Text>

                        <Text my={2} fontSize="sm" color="gray.500">
                            102+ builders have signed up in the last 30 days
                        </Text>
                    </Container>
                </VStack>
            </Center>
        </Container>
    );
};