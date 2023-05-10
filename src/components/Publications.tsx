import {
    Box,
    Heading,
    Text,
    Flex,
    HStack,
    Link,
    SimpleGrid,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';


export const Publications: FunctionComponent = () => {
    const cards = [
        {
            title: 'Influenza Forecasting',
            text:
                "In the 2018-19 influenza season, between 37.4 and 42.9 million people in the United States experienced flu like symptoms. From that number, 431 to 647 thousand were hospitalized and 36400 to 61200 (most of them children and seniors) succumbed to the disease. Due to the annual mutation of the very many strands of the flu virus, new vaccines must be developed and administered every flu season. Therefore, the prediction of the rate of growth in reported infection cases of each strand of the flu is paramount to ensuring the correct supply of vaccines per strand.",
            link:
                'https://dl.acm.org/doi/abs/10.1145/3378393.3402286',
            authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
            year: '2020',
        },
        {
            title: 'eVision: Influenza Forecasting Using CDC, WHO, and Google Trends Data',
            text:
                "Influenza, more commonly known as the flu, is a contagious respiratory illness caused by viruses which in the 2018–19 flu season, infected 37.4 to 42.9 million people in the United States alone. Of those, 431 to 647 thousand were hospitalized and 36,400 to 61,200 (most of them elderly and children) succumbed to the disease.",
            link:
                'https://ieeexplore.ieee.org/document/9311072',
            authors: 'Navid Shaghaghi, Andres Calle, Yuhang Qian',
            year: '2017',
        },
        {
            title: 'Expanding eVision\'s Scope of Influenza Forecasting',
            text:
                "According to the United States Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the United States experienced flu like symptoms in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand (most of them children or elderly) succumbed to the disease. Hence, the presence of an early warning mechanism that can alert pharmaceuticals, hospitals, and governments to the trends of the influenza season, would serve as a significant step in helping combat communicable diseases and reduce the mortality of child under the age of five. Both of which are among the targets for the 3rd United Nations (UN) Sustainable Development Goal (SDG): to ensure healthy lives and promote well-being for all at all ages.",
            link:
                'https://ieeexplore.ieee.org/document/9342864',
            authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
            year: '2021',
        },
        {
            title: 'Expanding eVision\'s Granularity of Influenza Forecasting',
            text:
                "According to the United States\' Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the US suffered from Influenza Like Illnesses (ILI) in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand succumbed to the disease. Therefore, the existence of an early warning mechanism that can alert pharmaceuticals, healthcare providers, and governments to the trends of the influenza season well in advance, would serve as a significant step in helping combat this communicable disease and reduce mortality from it.",
            link:
                'https://link.springer.com/chapter/10.1007/978-3-030-70569-5_14',
            authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Supriya Karishetti & Tanmay Wagh',
            year: '2021',
        },
        {
            title: 'eVision: Epidemic Forecasting on COVID-19',
            text:
                "Vaccination is the primary strategy to prevent COVID-19 illness and hospitalization. However, supplies are scarce and due to the regional mutations of the virus, new vaccines or booster shots will need to be administered every so often. Hence, the prediction of the rate of growth in reported COVID-19 cases is paramount to ensuring the ample supply of vaccines as well as for local/state/federal government measures to ensure the availability of hospital beds, supplies, and staff.  eVision is an epidemic forecaster aimed at combining AI - in the form of a Long Short-Term Memory (LSTM) Recursive Neural Network (RNN) - and search engine statistics, in order to make accurate predictions about the weekly number of cases for highly communicable diseases. Starting on replicating an older Google model and then improving upon it, predictions are accurately made as far as seven weeks into the future with an accuracy rate of %91 for seasonal influenza.",
            link:
                'https://www.degruyter.com/document/doi/10.1515/bmt-2021-6028/html',
            authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Jaidev Mirchandani, and Michael Castillo',
            year: '2021',
        },
        {
            title: 'Interplay of Influenza A/B Subtypes and COVID-19',
            text:
                "Influenza, or most commonly termed the flu, is a common respiratory illness caused by viral infection. The circulation of this virus is found year-round but is more common during the flu season: fall and winter. In the United States, the number of reported cases begins to rise in October, reaches a peak in December, and returns to normal in April. Even though there are four subtypes of the Influenza virus, the seasonal flu outbreaks in humans are caused by type A and B viruses. eVision utilizes influenza data provided by the United States Center for Disease Control and Prevention (CDC) and the World Health Organization (WHO) to analyze influenza A and B cases throughout the flu season. During the 2019–20 flu season, the positive influenza cases reported in the US were between 36 and 56 million, which is the highest over the past six years. However, during the 2020–21 flu season which is the first complete flu season within the COVID-19 pandemic, the reported flu cases reduced drastically to 1,899; of which 713 were caused by influenza A viruses, and 1,186 by influenza B viruses",
            link:
                'https://ieeexplore.ieee.org/abstract/document/9677858',
            authors: 'Navid Shaghaghi, Supriya Karishetti, Nancy Ma',
            year: '2021',
        },
    ];

    return (
        <Box
            h="fit-content"
            id="publications"
        >
            <Heading
                as="h1"
                size="xl"
                fontWeight="bold"
                textAlign="center"
                mb={10}
            >
                Publications
            </Heading>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                maxWidth={'100%'}
                alignContent={'center'}
                left={0}
                right={0}
            >
                {cards.map((card, index) => (
                    <Box
                        w={'500px'}
                        rounded={'sm'}
                        overflow={'hidden'}
                        bg="white">
                        <Box p={4}>
                            <Box
                                bg="blue.500"
                                display={'inline-block'}
                                px={2}
                                py={1}
                                color="white"
                                mb={2}>
                                <Text fontSize={'xs'} fontWeight="bold">
                                    Published in {card.year}
                                </Text>
                            </Box>
                            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                                {card.title}
                            </Heading>
                            <Heading color={'gray.600'} fontSize={'md'} noOfLines={1}>
                                Authors: {card.authors}
                            </Heading>
                            <br></br>
                            <Text color={'gray.500'} noOfLines={4}>
                                {card.text}
                            </Text>
                        </Box>
                        <Link
                            href={card.link}>
                            <HStack background={'gray.100'}>
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
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Box >
    );
}