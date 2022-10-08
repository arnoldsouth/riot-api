import { Link, Text } from '@chakra-ui/react';
import React from 'react';

// MenuItem component will need to be stacked horizontally/vertically depending on screen size within the MenuLinks component
// Wraps the passed child with a Link component (from Chakra UI)
const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
