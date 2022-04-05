import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Link as GatsbyLink } from 'gatsby'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH="80px"
        p={{ base: 0, md: 8 }}
        align="center">
        <Flex flex="1" justify="left">
          <Link
            as={GatsbyLink}
            to="/">
            <Text
              fontFamily="Satoshi-Bold"
              fontWeight="bold"
              fontSize="2xl"
              textAlign="left">
              Adri.
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml="auto">
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          justify="flex-end">
          <IconButton
            aria-label="Toggle Navigation"
            bg={'#262629'}
            icon={ isOpen ? <CloseIcon w="3" h="3" /> : <HamburgerIcon color={'white'} w="5" h="5" /> }
            onClick={onToggle}
          />
        </Flex>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing="4">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as={GatsbyLink}
            to={navItem.href}
            p="2"
            href={navItem.href ?? '#'}
            fontFamily="Satoshi-Medium"
            fontWeight="500"
            color="white"
            _hover={{
              textDecoration: 'none',
              color: 'gray.200',
            }}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      display={{ md: 'none' }}
      mb="2">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing="4" onClick={children && onToggle}>
      <Flex
        py="2"
        as={GatsbyLink}
        to={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontFamily="Satoshi-Bold"
          fontWeight="700">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Me',
    href: '/me',
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Journal',
    href: '/journal',
  },
];