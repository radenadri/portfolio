import React from "react"

import Layout from "@components/Layout"
import Seo from "@components/SEO"
import Bio from "@components/Bio"

const Index: React.FC<any> = ({ location }) => {
  return (
    <Layout location={location} isFull>
      <Seo title="Hello!" />
      <Bio />
    </Layout>
  )
}

export default Index
