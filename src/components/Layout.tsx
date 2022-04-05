import * as React from "react"
import { Box, Flex } from "@chakra-ui/react"

import Header from "@components/Header"
import Footer from "@components/Footer"

const Layout = ({ location, children, isFull }) => {
  const isRootPath = location.pathname
  const baseHeight = isFull ? '100%' : 'auto'

  return (
    <Flex
      flexDir="column"
      maxW="960px"
      h="100%"
      mx="auto"
      px={[4, 8]}
      data-is-root-path={isRootPath}>
      <Header />
      <Box flex="2" h={baseHeight}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
