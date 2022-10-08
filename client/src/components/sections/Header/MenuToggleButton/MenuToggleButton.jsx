import React from 'react';
import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

// Toggle visibility of MenuLinks for tablet/mobile devices
// The props toggle function and isOpen variable need to be accessible by the parent component (this conditional renders MenuLinks) and will be defined there at the parent as well (at Header component)
const MenuToggleButton = ({ onMenuToggleButton, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={onMenuToggleButton}>
      {/* If toggle button is open, we want to display the CloseIcon, and vice-versa for close */}
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggleButton;
