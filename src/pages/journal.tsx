import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"

import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import Seo from "@components/SEO"

import { Heading, HStack, LinkBox, LinkOverlay, List, ListItem, Text, VStack } from "@chakra-ui/react"

type ReadingTimeType = {
  text: string;
}

type BlogPostType = {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime: ReadingTimeType
};

const BlogPostCard = ({
  date,
  description,
  title,
  slug,
  readingTime: { text }
}: BlogPostType) => {
  const hoverBg = 'gray.700';

  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        w="full"
        p={{ base: 0, md: 8 }}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        rounded="md"
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
      >
        <VStack alignItems="flex-start">
          <LinkOverlay as={GatsbyLink} to={slug}>
            <Heading
              fontFamily="Satoshi-Bold"
              fontWeight="bold"
              size="md"
            >{title}</Heading>
          </LinkOverlay>
          <HStack
            divider={
              <Text mx={2} color="gray.400">
                •
              </Text>
            }
          >
            <Text color="gray.400" fontSize="sm">
              {date}
            </Text>
            <Text color="gray.400" fontSize="sm">
              { text }
            </Text>
          </HStack>
        </VStack>
        <Text color="gray.400" fontSize="sm">
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

const JournalPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Journal" />
        <PageHeader text="Journal" description="All my writings covering web development and personal thoughts" />
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
      <Seo title="Journal" />
      <PageHeader text="Journal" description="All my writings covering web development and personal thoughts" />
      <List w="full" spacing={{ base: 8, md: 2 }}>
        {posts.map(({
          node: {
            frontmatter,
            fields
          }
        }, idx) => {
          return (
            <ListItem key={idx}>
              <BlogPostCard {...frontmatter} {...fields} />
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}

export default JournalPage

export const pageQuery = graphql`
  query AllBlogPosts {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date (formatString: "MMMM Do, YYYY")
            description
            title
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
