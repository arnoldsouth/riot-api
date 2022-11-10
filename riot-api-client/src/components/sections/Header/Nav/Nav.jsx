import React from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import kaneki from '../../../../assets/kaneki.gif';
import Logo from '../../../ui/Logo/Logo.jsx';

export const MenuLink = ({ children, to = '/' }) => (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={to}
  >
    {children}
  </Link>
);

const Nav = ({ props }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Logo />
          </Box>

          <Flex
            alignItems={'center'}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            // w="100%"
            // mb={8}
            // p={8}
          >
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/valorant">Valorant</MenuLink>
                <MenuLink to="/leagueoflegends">League of Legends</MenuLink>

                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={kaneki} />
                </MenuButton>

                <MenuList alignItems={'center'}>
                  <br />

                  <Center>
                    <Avatar size={'2xl'} src={kaneki} />
                  </Center>

                  <br />

                  <Center>
                    <p>Username</p>
                  </Center>

                  <br />

                  <MenuDivider />

                  <MenuItem>Your Games</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
