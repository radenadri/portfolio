import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "@components/Layout"
import MDXComponents from "@components/MDXComponents"
import Seo from "@components/SEO"
import { Heading, HStack, Text, VStack } from "@chakra-ui/react"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt} />
      <VStack
        position="relative"
        alignItems="stretch"
        maxW="container.md"
        mx="auto"
        spacing={8}
        p={{ base: 0, md: 8 }}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading
            as="h1"
            fontFamily="Satoshi-Bold"
            fontWeight="bold"
            size="lg">
            {post.frontmatter.title}
          </Heading>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {post.frontmatter.date}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {post.fields.readingTime.text}
            </Text>
          </HStack>
        </VStack>
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </VStack>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      excerpt
      fields {
        slug,
        readingTime {
          text
        }
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM Do, YYYY")
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
