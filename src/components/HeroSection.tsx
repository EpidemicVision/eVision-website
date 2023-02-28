import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Highlight
} from '@chakra-ui/react';
import { FunctionComponent } from "react";
import { BsArrowUpRight } from 'react-icons/bs';

interface HeroSectionProps { }

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
        <Stack direction={{ base: 'column', md: 'row' }} position={'relative'}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            zIndex={0}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            eVision
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Disease Forecasting
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        In collaboration with Cepheid, Inc., this project employs Long Short-Term Memory (LSTM) neural network data science techniques to predict future influenza vectors. The eVision (Epidemic Vision) machine learning tool currently predicts the trend of influenza cases throughout the flu season with an accuracy of 90.38%, 91.43%, and 81.74% for 3, 7, and 14 weeks in advance predictions respectively.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            leftIcon={<BsArrowUpRight />}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => {
                                window.location.href = "http://20.121.209.136:5008";
                            }} >
                            eVision Tool
                        </Button>
                    </Stack>
                </Stack >
            </Flex >
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'contain'}
                    src={
                        'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
                    }
                />
            </Flex>
        </Stack >
    );
};