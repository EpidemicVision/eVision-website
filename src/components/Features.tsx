import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, useColorModeValue, chakra, Center } from '@chakra-ui/react';
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
        <Box position={'relative'}>
            <Center>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Features
                </chakra.h1>
            </Center>
            <Container maxW={'7xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FcCommandLine} w={10} h={10} />}
                        title={'MACHINE LEARNING'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcElectronics} w={10} h={10} />}
                        title={'ARTIFICIAL INTELLIGENCE'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                        title={'DATA SCIENCE'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.'
                        }
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
}