import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Stack,
  IconButton,
} from "@chakra-ui/react";

import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.800" px={{ base: 6, md: 20 }} py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
        gap={10}
      >
        <Box flex="1" minW="250px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="md" mb={4} textAlign={{ base: "center", md: "left" }}>
            Dyphnah Nyamongo
          </Heading>
          <Text mb={4}>
            Your tech-savvy virtual assistant. I bring clarity, efficiency, and creativity to every project. My mission is to lighten your load so you can focus on strategy, decisions, and impact.
          </Text>
          <Flex gap={4} justify={{ base: "center", md: "flex-start" }}>
            <IconButton
              as="a"
              href="#"
              icon={<FaInstagram />}
              aria-label="Instagram"
              variant="outline"
              colorScheme="brand.400"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTiktok />}
              aria-label="TikTok"
              variant="outline"
              colorScheme="blackAlpha"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="outline"
              colorScheme="blue"
            />
          </Flex>
        </Box>

        <Box minW="150px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Quick Links
          </Heading>
          <Stack spacing={2} align={{ base: "center", md: "flex-start" }}>
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Portfolio</Link>
          </Stack>
        </Box>

        <Box minW="150px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Solutions
          </Heading>
          <Stack spacing={2} align={{ base: "center", md: "flex-start" }}>
            <Link href="#">Admin Support</Link>
            <Link href="#">Social Media Support</Link>
            <Link href="#">Web Development</Link>
          </Stack>
        </Box>

        <Box minW="200px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Contact Info
          </Heading>
          <Stack spacing={2} align={{ base: "center", md: "flex-start" }}>
            <Text>Email: nyandukodyphnah4@gmail.com</Text>
            <Text>Whatsapp: +254 707 819 444</Text>
            <Text>Location: Westlands, Nairobi, Kenya</Text>
          </Stack>
        </Box>
      </Flex>

      <Box my={8} h="1px" bg="gray.200" />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        fontSize="sm"
        gap={4}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text color="brand.300">
          © 2025. Website designed and developed by Dyphnah Nyamongo. All rights reserved.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
          color="brand.300"
        >
          <Link href="#"
          color='brand.300'>Media & Privacy Policy</Link>

        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
