/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, HStack, Icon, IconButton, Link, Text, VStack } from "@chakra-ui/react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          social {
            email
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const description = data.site.siteMetadata?.description
  const social = data.site.siteMetadata?.social

  return (
    <VStack
      align={'start'}
      justify={'center'}
      h={'100%'}
      p={{ base: 0, md: 8 }}
      spacing={5}>
      <Heading
        as={'h1'}
        fontFamily={'Satoshi-Bold'}
        fontWeight={'bold'}>
        {author?.name} 💻
      </Heading>
      <Text
        color={'gray.300'}
        fontSize={'lg'}>
        {author?.summary}
      </Text>
      <Text
        color={'gray.400'}
        maxW={'xl'}>
        {description}
      </Text>
      <HStack spacing={4} justify={'start'}>
        <IconButton
          as={Link}
          aria-label={'Send email'}
          bg={'#262629'}
          href={`mailto:${social?.email}`}
          icon={<Icon as={AiOutlineMail} color={'white'} w={6} h={6} />}
        />
        <IconButton
          as={Link}
          aria-label={'Open LinkedIn profile'}
          bg={'#262629'}
          href={`https://www.linkedin.com/in/${social?.linkedin}`}
          icon={<Icon as={AiFillLinkedin} color={'white'} w={6} h={6} />}
          isExternal
        />
        <IconButton
          as={Link}
          aria-label={'Open Github profile'}
          bg={'#262629'}
          href={`https://github.com/${social?.github}`}
          icon={<Icon as={AiFillGithub} color={'white'} w={6} h={6} />}
          isExternal
        />
      </HStack>
    </VStack>
  )
}

export default Bio
