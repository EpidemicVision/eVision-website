import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    chakra,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Image,
    Link,
    LinkBox,
    Spacer,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'

import eVisionLogo from '../assets/eVision-Logo.png'

const navLinks = [
    { name: 'Home', link: '#hero' },
    //!{ name: 'Tool', link: '#tool' },
    // { name: 'Features', link: '#features' },
    { name: 'Papers', link: '#publications' },
    { name: 'Team', link: '#teammembers' },
]

const DesktopSidebarContents = ({ name }: any) => {
    return (
        <Container maxW={['full', 'container.lg']} p={0}>
            <Stack
                justify="space-between"
                p={[0, 4]}
                w="full"
                direction={['column', 'row']}
            >
                <Box display={{ base: 'none', md: 'flex' }}>
                    <Heading fontSize="xl">{name}</Heading>
                </Box>
                <Spacer />
                <Stack
                    align="flex-start"
                    spacing={[4, 10]}
                    direction={['column', 'row']}
                >
                    {navLinks.map((navLink: any, i: number) => {
                        return (
                            <Link
                                href={navLink.link}
                                key={`navlink_${i}`}
                                fontWeight={500}
                                variant="ghost"
                            >
                                {navLink.name}
                            </Link>
                        )
                    })}
                </Stack>
                <Spacer />
                <LinkBox>
                    <Image
                        boxSize={["40px", "50px"]}
                        src={eVisionLogo}></Image>
                </LinkBox>
            </Stack>
        </Container >
    )
}
const MobileSidebar = ({ name }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex w="full" align="center">
                <Heading fontSize="xl">{name}</Heading>
                <Spacer />
                <IconButton
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                />
                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                    <DrawerOverlay />
                    <DrawerContent >
                        <DrawerCloseButton />
                        <DrawerHeader>{name}</DrawerHeader>

                        <DrawerBody>
                            <DesktopSidebarContents />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </>
    )
}

interface SidebarProps {
    name: string
}

const Sidebar = ({ name }: SidebarProps) => {
    return (
        <chakra.header id="header">
            <Box display={{ base: 'flex', md: 'none' }} p={4}>
                <MobileSidebar name={name} />
            </Box>

            <Box display={{ base: 'none', md: 'flex' }} >
                <DesktopSidebarContents name={name} />
            </Box>
        </chakra.header>
    )
}

interface HeaderProps {
    name: string
}

export const Header = ({ name }: HeaderProps) => {
    return (
        <Box w="full" position="fixed" zIndex={99} backdropFilter='auto' backdropBlur="25px" >
            <Sidebar name={name} />
        </Box>
    )
}