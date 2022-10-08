import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import MenuItem from '../MenuItem/MenuItem.jsx';

const MenuLinks = ({ isOpen }) => {
  return (
    // Wrap Stack component below with Box to force MenuLinks component to a new line by changing display and flexBasis css properties for tablet/mobile devices
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        // Adjust menu's direction and justify properties according to break points
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/valorant">Valorant</MenuItem>
        <MenuItem to="/leagueoflegends">League of Legends</MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={['yellow', 'yellow', 'black', 'black']}
            bg={['black', 'black', 'yellow', 'yellow']}
            _hover={{ bg: ['black', 'black', 'orange', 'orange'] }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
