import React from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'

const LinkWrapper = ({url, name}) => {
  return (
    <>
      <Link
        alignItems="center"
        display="inline-flex"
        color="purple.500"
        href={url}
        isExternal>
        {name}
        <ExternalLinkIcon w="16px" h="16px" mx="6px" />
      </Link>
    </>
  )
}

export default LinkWrapper;