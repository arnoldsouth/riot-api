import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from '../Nav/Nav.jsx';

// import Logo from '../../../ui/Logo';
import MenuLinks from '../MenuLinks/MenuLinks.jsx';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton.jsx';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleButtonHandler = () => {
    return setIsOpen(!isOpen);
  };

  const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={['navy', 'navy', 'transparent', 'transparent']}
        colors={['white', 'white', 'red', 'red']}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer {...props}>
      {/* <Logo w="6.25rem" colors={['white', 'white', 'teal', 'teal']} /> */}
      <MenuToggleButton
        onMenuToggleButton={menuToggleButtonHandler}
        isOpen={isOpen}
      />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
