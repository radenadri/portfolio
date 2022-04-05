import React from 'react'
import { Heading, Text, VStack } from '@chakra-ui/react'

const PageHeader = ({ text, description }) => {
  return (
    <VStack
      align="start"
      px={{ base: 0, md: 8 }}
      py="8">
      <Heading
        as="h1"
        fontFamily="Satoshi-Bold">
        {text}
      </Heading>
      <Text
        color="gray.400"
        fontSize="lg">
        {description}
      </Text>
    </VStack>
  )
}

export default PageHeader