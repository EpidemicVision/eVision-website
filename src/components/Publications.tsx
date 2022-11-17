import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Container,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Img,
    Flex,
    HStack,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { FunctionComponent } from 'react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 3,
};

export const Publications: FunctionComponent = () => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Research Paper 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
            title: 'Research Paper 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        },
        {
            title: 'Research Paper 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
            title: 'Research Paper 4',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                ''
        },
        {
            title: 'Research Paper 5',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                ''
        },
        {
            title: 'Research Paper 6',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                ''
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'show'}
            id="publications">
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        position="relative"
                        backgroundPosition="center">
                        <Container size="container.lg" height="600px" position="relative">
                            {<Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)">
                                <Box
                                    w="xs"
                                    rounded={'sm'}
                                    my={5}
                                    mx={[0, 5]}
                                    overflow={'hidden'}
                                    bg="white">
                                    <Box h={'200px'} >
                                        <Img
                                            src={
                                                card.image
                                            }
                                            roundedTop={'sm'}
                                            objectFit="cover"
                                            h="full"
                                            w="full"
                                            alt={'Image'}
                                        />
                                    </Box>
                                    <Box p={4}>
                                        <Box
                                            bg="blue.500"
                                            display={'inline-block'}
                                            px={2}
                                            py={1}
                                            color="white"
                                            mb={2}>
                                            <Text fontSize={'xs'} fontWeight="medium">
                                                Published
                                            </Text>
                                        </Box>
                                        <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                                            {card.title}
                                        </Heading>
                                        <Text color={'gray.500'} noOfLines={2}>
                                            In this paper......
                                        </Text>
                                    </Box>
                                    <HStack background={'blue.400'} color={'white'}>
                                        <Flex
                                            p={4}
                                            alignItems="center"
                                            justifyContent={'space-between'}
                                            roundedBottom={'sm'}
                                            cursor={'pointer'}
                                            w="full">
                                            <Text fontSize={'md'} fontWeight={'semibold'}>
                                                View more
                                            </Text>
                                            <BsArrowUpRight />
                                        </Flex>
                                        <Flex
                                            p={4}
                                            alignItems="center"
                                            justifyContent={'space-between'}
                                            roundedBottom={'sm'}
                                            borderLeft={'1px'}
                                            cursor="pointer">
                                        </Flex>
                                    </HStack>
                                </Box>
                            </Stack>}
                        </Container>
                    </Box>
                ))
                }
            </Slider >
        </Box >
    );
}