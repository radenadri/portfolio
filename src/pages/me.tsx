import React from "react"

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Box, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react"

import Layout from "@components/Layout"
import MDXComponents from "@components/MDXComponents"
import PageHeader from "@components/PageHeader"
import Seo from "@components/SEO"

type WorkExperienceType = {
  title: string
  company: string
  companyDescription: string
  companyUrl: string
  years: string
  jobDescription: string
  logo: string
}

type WorkExperienceNode = {
  workExperience: WorkExperienceType
}

const WorkExperience : React.FC<WorkExperienceNode> = ({
  workExperience: {
    title,
    company,
    companyDescription,
    companyUrl,
    years,
    jobDescription,
    logo
  }
}) => {
  return (
    <VStack align="start">
      <Box>
        <Text
          color="gray.400"
          fontSize="sm">
          {years}
        </Text>
        <Text mt="1" fontSize="lg">{title}</Text>
        <Stack
          align={{ md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          my="3"
          spacing="4">
          <Link href={companyUrl} isExternal>
            <Image
              h="10"
              loading="lazy"
              src={`/${logo}`}
              alt={company} />
          </Link>
          <VStack
            align="start"
            spacing={0}>
            <Text fontSize="lg">
              {company}
            </Text>
            <Text
              color="gray.400">
              {companyDescription}
            </Text>
          </VStack>
        </Stack>
        <Text maxW="lg">
          {jobDescription}
        </Text>
      </Box>
    </VStack>
  )
}

const Me: React.FC<any> = ({ data, location }) => {
  const { frontmatter, body } = data.mdx
  const { workExperience } = data.site.siteMetadata

  return (
    <Layout location={location}>
      <Seo title={frontmatter.title} />
      <PageHeader text="About Me" description="Short bio about me" />
      <MDXProvider components={MDXComponents}>
        <MDXRenderer data="test">{body}</MDXRenderer>
      </MDXProvider>
      <Box mt="8" p={{ base: 0, md: 8 }}>
        <Heading
          as="h4"
          fontFamily="Satoshi-Bold"
          fontSize="xl"
          fontWeight="bold">
          Work Experience
        </Heading>
        <VStack
          align="start"
          mt="8"
          spacing="8">
          {workExperience.map((work, idx) => <WorkExperience key={idx} workExperience={work} />)}
        </VStack>
      </Box>
    </Layout>
  )
}

export default Me

export const query = graphql`
  query {
    mdx(
      fileAbsolutePath: { regex: "/content/markdown-pages/" }
      frontmatter: { title: { eq: "Me" } }
    ) {
      body
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        workExperience {
          title
          company
          companyDescription
          companyUrl
          years
          jobDescription
          logo
        }
      }
    }
  }
`