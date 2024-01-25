// import { ReactNode } from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Image from 'next/image';

const NavLink = [
  {
    title: 'Contact Us',
    link: 'https://www.dashtower.com/contact',
  },
  {
    title: 'View Website',
    link: 'https://www.dashtower.com/',
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('cyan.900', 'cyan.500')}
        color='white'
        px={4}
        boxShadow='md'>
        <Flex
          h={20}
          alignItems={'center'}
          justifyContent={{ base: 'space-between', md: 'space-around' }}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            color='black'
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Flex alignItems={'center'} cursor={'pointer'}>
              <Image src='/logo.svg' width={40} height={30} />
              <Text as='b' fontSize='md'>
                PirateProjects
              </Text>
            </Flex>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {NavLink.map((link, index) => (
                <Link href={link.link} key={index}>
                  {link.title}
                </Link>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} pt={2} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NavLink.map((link, index) => (
                <Link href={link.link} key={index}>
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
