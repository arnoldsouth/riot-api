import React from 'react';
import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { MenuLink } from '../../sections/Header/Nav/Nav.jsx';

const Logo = ({ props, to = '/' }) => {
  return (
    <Box>
      <Link
        px={2}
        py={2}
        rounded={'md'}
        fontSize={'4xl'}
        fontWeight={'bold'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={to}
      >
        <MenuLink to="/">RIOT API</MenuLink>
      </Link>
    </Box>
  );
};

export default Logo;
