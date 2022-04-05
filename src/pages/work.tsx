import React from "react"
import { graphql } from "gatsby"

import { AspectRatio, Box, Heading, HStack, Icon, Image, Link, LinkBox, LinkOverlay, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import Seo from "@components/SEO"

const WorkPost = ({ frontmatter }) => {
  const { title, description, img, github, link, uses } = frontmatter
  const imgSrc = getImage(img?.childImageSharp?.gatsbyImageData)
  console.log(uses);
  return (
    <Box as="article">
      <VStack
        alignItems="stretch"
        cursor="pointer"
        w="full"
        p={{ base: 0, md: 8 }}
        _hover={{
          bg: "gray.700",
          transform: "scale(1.025, 1.025)",
        }}
        rounded="md"
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="8">
          <VStack alignItems="flex-start" flex={1}>
            <Heading
              as="h3"
              fontFamily="Satoshi-Bold"
              fontWeight="bold"
              size="lg">
              {title}
            </Heading>
            <Text
              color="gray.400"
              fontSize="sm">
              {description}
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              pt="4"
              spacing={{ base: 4, md: 8 }}>
              {uses.map((use, idx) => {
                return (
                  <Text
                    key={idx}
                    textTransform="uppercase"
                    fontFamily="Satoshi-Bold"
                    fontSize="sm"
                    fontWeight="bold">
                    {use}
                  </Text>
                )
              })}
            </Stack>
            <HStack
              pt="4"
              spacing="4">
              { github && <Link
                  aria-label="Open in Github"
                  href={github}
                  isExternal
                  role="group">
                    <Icon as={AiFillGithub} color={"white"} _groupHover={{ color: "purple.500" }} w={6} h={6} />
                </Link>
              }
              { link && <Link
                  aria-label="Open link"
                  href={link}
                  isExternal
                  role="group">
                    <Icon as={AiOutlineLink} color={"white"} _groupHover={{ color: "purple.500" }} w={6} h={6} />
                </Link>
              }
            </HStack>
          </VStack>
          <AspectRatio w="full" maxW="400px" ratio={16 / 9}>
            <Image
              as={GatsbyImage}
              objectFit="cover"
              image={imgSrc}
              alt={title}
            />
          </AspectRatio>
        </Stack>
      </VStack>
    </Box>
  )
}

const Work : React.FC<any> = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title || `Title`
  const works = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Work" />
      <PageHeader text="Work" description="All my recent works lately" />
      <List w="full" spacing="8">
        {works.map(({ node }, idx) => {
            return (
              <ListItem key={idx}>
                <WorkPost {...node} />
              </ListItem>
            )
          })}
      </List>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query AllWorks {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/content/works/"}, frontmatter: {published: {eq: true}}}
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            github
            link
            img {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            uses
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }

`