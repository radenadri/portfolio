import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import Seo from "@components/SEO"

import { Box, Heading, Text } from "@chakra-ui/react"

const NotFoundPage: React.FC<any> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Box p={{ base: 0, md: 8 }}>
        <Heading as="h1">404: Not Found</Heading>
        <Text mt="8">You just hit a route that doesn&#39;t exist... the sadness.</Text>
      </Box>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
