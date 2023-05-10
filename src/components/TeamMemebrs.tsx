import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Center,
} from '@chakra-ui/react';
import { FunctionComponent } from "react";
import George from '../assets/george-kouretas.jpeg';
import Nancy from '../assets/nancy-ma.jpeg';
import Andres from '../ASSETS/andres-calle.jpg';
import Michael from '../assets/michael-castillo.png';
import Navid from '../assets/Navid-Shaghaghi.jpg'
import Husain from '../assets/Husain.jpeg'
import Sreeja from '../assets/Sreeja_Photo.jpg'
import Divya from '../assets/divya.jpg'
import kaushil from '../assets/kaushil.jpg'
import Meghan from '../assets/meghan.png'
import Anika from '../assets/anika.png'
import Liying from '../assets/liying.png'
import Tanmay from '../assets/tanmay.png'
import Ron from '../assets/ron.png'
import Yash from '../assets/yash.png'
import Namratha from '../assets/namratha.png'
import Supriya from '../assets/supriya.png'
import Jaidev from '../assets/jaidev.png'

const testimonials = [
    {
        name: 'Navid Shaghaghi',
        role: 'Professor, department of Mathematics and Computer Science',
        content:
            'Navid Shaghaghi is a lecturer and researcher in the department of Mathematics and Computer Science (MCS) of the College of Arts and Sciences and the departments of Computer Science & Engineering (CSEN) and Bioenginneering (BIOE) of the School of Engineering. He also teaches a couple of courses in the department of Information Systems and Analytics (ISA) of the School of Business at Santa Clara University. ',
        avatar:
            Navid
    },
    {
        name: 'Michael Castillo.',
        role: 'BS Computer Science and Engineering',
        content:
            'Michael is a third year student, with experience in data processing, statistics, and Machine Learning (ML). He has been with the Team since Freshman year, expanding his role as he learned skills in real time. His main motivation is to explore the applications of ML in forecasting, and to indirectly save lives with his work on this project.',
        avatar:
            Michael
    },
    {
        name: 'Sreeja Malladi',
        role: 'MS Computer Engineering',
        content:
            'Hi, I am Sreeja. I am a grad student from the Computer Science department. I did my Bachelors in Computer Science and Engineering from India and I have 3 years of experience in Software Development. I am good at C, Python, Java and SQL. My hobbies in my free time are reading books and painting.',
        avatar:
            Sreeja
    },
    {
        name: 'Divya Syal',
        role: 'BS Computer Science and Engineering',
        content:
            'I\’m a junior Computer Science and Engineering major from Seattle, WA minoring in Innovation, Design, and Entrepreneurship.  My passions include the intersection of healthcare and technology, and this experience has given me a lot of tangible exposure to the field while fostering my Python, ML, and many other skills.  In my free time, I enjoy playing tennis, dancing, and drawing. I\’m excited to see where this project takes us!',
        avatar:
            Divya
    },
    {
        name: 'Kaushil Kundalia',
        role: 'MS in Computer Science',
        content:
            'I am a grad CS student. I love to build backend applications and I mostly look after the engineering side of things.',
        avatar:
            kaushil
    },
    {
        name: 'Husain Unwalla',
        role: 'MS Computer Engineering',
        content:
            'I am a First-year Master\'s student majoring in Computer Engineering. I am interested in software development which led me to join this project. I built this website!',
        avatar:
            Husain
    },
];

const pastMembers = [
    {
        name: 'Meghan McGinnis',
        role: 'B.A. 2019 - M.S. 2020',
        avatar: Meghan
    },
    {
        name: 'Yuhang Qian',
        role: 'B.A. 2019',
        avatar: ''
    },
    {
        name: 'Anika Shahi',
        role: 'B.A. 2020',
        avatar: Anika
    },
    {
        name: 'Liying Liang',
        role: 'B.S. 2021',
        avatar: Liying
    },
    {
        name: 'Tanmay Wagh',
        role: 'M.S. 2021',
        avatar: Tanmay
    },
    {
        name: 'Ron Huang',
        role: 'B.S. 2021',
        avatar: Ron
    },
    {
        name: 'Yash Kamdar',
        role: 'M.S. 2021',
        avatar: Yash
    },
    {
        name: 'Yoga Ramachandran',
        role: 'B.S. 2021',
        avatar: ''
    },
    {
        name: 'Bhupinder Jagwani',
        role: 'B.S. 2021',
        avatar: ''
    },
    {
        name: 'Namratha Kamath',
        role: 'B.S. 2021',
        avatar: Namratha
    },
    {
        name: 'Supriya Karishetti',
        role: 'M.S. 2021',
        avatar: Supriya
    },
    {
        name: 'Jaidev Mirchandani',
        role: 'M.S. 2022',
        avatar: Jaidev
    },
    {
        name: 'Nancy Ma',
        role: 'B.S. 2023',
        avatar: Nancy
    },
]

const advisors = [
    {
        name: 'George Kouretas',
        role: 'BS Bioengineering',
        content:
            'Currently part of eVision research team. Interested in medical devices, software development, and all things found on the intersection of healthcare and innovation.',
        avatar:
            George
    },
    {
        name: 'Andres Calle',
        role: 'MS Computer Science and Engineering',
        content:
            'I first entered SCU as a transfer student, switching my major from Biology to Computer Science. After first meeting Professor Shaghaghi in my second quarter at SCU, I would go on to work as a research assistant for him over the summer on various projects. I was brought on to the EPIC Lab due to my interest in Machine Learning, and together with a few of my peers, we began to develop computer vision software, flood monitoring systems, and flu prediction AI. Since that summer, I have completed my undergraduate degree in SCU and have moved on to pursuing my masters, working as a Research Assistant to the Bioinnovation Lab and still working very closely with the EPIC Lab.',
        avatar:
            Andres
    }
]

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    avatar: string;
    index: number;
}

interface AdvisorCardProps {
    name: string;
    role: string;
    avatar: string;
}

function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props;
    return (

        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
        // _before={{
        //     content: '""',
        //     position: 'absolute',
        //     height: '21px',
        //     width: '29px',
        //     left: '35px',
        //     top: '-10px',
        //     backgroundSize: 'cover',
        //     backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        // }}
        // _after={{
        //     content: '""',
        //     zIndex: -1,
        //     position: 'absolute',
        //     height: 'full',
        //     maxW: '640px',
        //     width: 'full',
        //     filter: 'blur(40px)',
        //     transform: 'scale(0.98)',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     top: 0,
        //     left: 0,
        //     backgroundImage: backgrounds[index % 4],
        // }}
        >
            <Flex
                position={'relative'}
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

function AdvisorCard(props: AdvisorCardProps) {
    const { name, role, avatar } = props;
    return (

        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'500px'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            align={'center'}
            bg={useColorModeValue('white', 'gray.800')}
        // _before={{
        //     content: '""',
        //     position: 'absolute',
        //     height: '21px',
        //     width: '29px',
        //     left: '35px',
        //     top: '-10px',
        //     backgroundSize: 'cover',
        //     backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        // }}
        // _after={{
        //     content: '""',
        //     zIndex: -1,
        //     position: 'absolute',
        //     height: 'full',
        //     maxW: '640px',
        //     width: 'full',
        //     filter: 'blur(40px)',
        //     transform: 'scale(0.98)',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     top: 0,
        //     left: 0,
        //     backgroundImage: backgrounds[index % 4],
        // }}
        >
            <chakra.p fontWeight={'bold'} fontSize={14}>
                {name}
                <chakra.span
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    color={'gray.500'}>
                    {' '}
                    - {role}
                </chakra.span>
            </chakra.p>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

export const TeamMembers: FunctionComponent = () => {
    return (
        <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Team Members
                </chakra.h1>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}
                zIndex={1}
            >
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h1
                    py={20}
                    fontSize={48}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Advisors
                </chakra.h1>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}
                zIndex={1}
            >
                {advisors.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h1
                    py={20}
                    fontSize={48}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Past Members
                </chakra.h1>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}
                zIndex={1}
            >
                {pastMembers.map((cardInfo, index) => (
                    <AdvisorCard {...cardInfo} />
                ))}
            </SimpleGrid>

        </Flex>
    );
}