import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Container } from '@chakra-ui/react';
import { FcCommandLine, FcBullish, FcElectronics } from 'react-icons/fc';
import { FunctionComponent } from "react";
interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export const Features: FunctionComponent = () => {
    return (
        <Box p={5}>
            <Heading textAlign={'center'}>Features</Heading>
            <Container maxW={'7xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FcCommandLine} w={10} h={10} />}
                        title={'MACHINE LEARNING'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcElectronics} w={10} h={10} />}
                        title={'ARTIFICIAL INTELLIGENCE'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                        title={'DATA SCIENCE'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
}