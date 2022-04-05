import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      minH="48px"
      mt={{ base: 8, md: 0 }}
      p={{ base: 0, md: 8 }}>
      <Text fontSize="sm">
        © 2022 Built with
        <Link
          color="purple.500"
          mx="1"
          href="https://www.gatsbyjs.com">
          Gatsby
        </Link>
        &amp;
        <Link
          color="purple.500"
          mx="1"
          href="https://chakra-ui.com">
          Chakra UI
        </Link>
      </Text>
    </Box>
  )
}

export default Footer