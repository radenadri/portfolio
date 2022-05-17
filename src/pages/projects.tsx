import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import Seo from "@components/SEO"

import { Box, Heading, Icon, LinkBox, LinkOverlay, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

type ProjectType = {
  title: string;
  url: string;
  description: string;
  date: string;
};

const ProjectCard = ({
  title,
  url,
  description,
  date
}: ProjectType) => {
  const hoverBg = 'gray.700';

  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        w="full"
        h="full"
        p={{ base: 4, md: 8 }}
        bg={hoverBg}
        _hover={{
          transform: "scale(1.025, 1.025)",
        }}
        rounded="md"
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
      >

        <Box>
          <Icon
            as={ExternalLinkIcon}
            w={6}
            h={6} />
          <VStack align="flex-start" mt="4">
            <LinkOverlay href={url} isExternal>
              <Heading
                fontFamily="Satoshi-Bold"
                fontWeight="bold"
                size="md">
                {title}
              </Heading>
            </LinkOverlay>
            <Text color="gray.400" fontSize="sm">
              {description}
            </Text>
            {/* <Text color="gray.400" fontSize="sm">
              {date}
            </Text> */}
          </VStack>
        </Box>
      </VStack>
    </LinkBox>
  );
};

const ProjectsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.site.siteMetadata.projects

  if (projects.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Projects" />
        <PageHeader text="Projects" description="All my sandbox projects, experimenting with latest tools." />
        <Text>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </Text>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <PageHeader text="Projects" description="All my sandbox projects, experimenting with latest tools." />
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="8"
        px={{ base: 0, md: 8 }}>
        {projects.map((project, idx) => {
          return (
            <ProjectCard key={idx} {...project} />
          )
        })}
      </SimpleGrid>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query AllProjectsData {
    site {
      siteMetadata {
        title
        projects {
          title
          url
          description
          date (formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
