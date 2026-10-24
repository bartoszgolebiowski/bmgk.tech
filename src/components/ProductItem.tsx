import * as React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Separator,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import ProductDescriptionList from "./ProductDescriptionList";
import { ExternalLinkIcon } from "./Icons";

export type Product = {
  title: string;
  titleHref: string;
  subTitle: string;
  badge: string;
  logo: string;
  items: string[];
};

const ProductItem = ({
  title,
  titleHref,
  subTitle,
  badge,
  logo,
  items,
}: Product) => {
  const { t } = useTranslation();
  const productName = t(title);

  return (
    <Box
      as="article"
      bg="white"
      borderWidth="1px"
      borderColor="ink.200"
      borderRadius="3xl"
      boxShadow="card"
      overflow="hidden"
      transition="transform .2s ease, box-shadow .2s ease"
      _hover={{ transform: "translateY(-3px)", boxShadow: "cardHover" }}
    >
      <Grid templateColumns={{ base: "1fr", md: "280px 1fr" }}>
        <Flex
          position="relative"
          overflow="hidden"
          align="center"
          justify="center"
          p={8}
          minH={{ base: "160px", md: "100%" }}
          bg="linear-gradient(135deg, rgba(67,160,71,0.10), rgba(142,36,170,0.10))"
          borderRightWidth={{ base: 0, md: "1px" }}
          borderBottomWidth={{ base: "1px", md: 0 }}
          borderColor="ink.100"
        >
          <Box
            position="absolute"
            inset={0}
            opacity={0.55}
            pointerEvents="none"
            css={{
              backgroundImage:
                "radial-gradient(rgba(27,94,32,0.18) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage:
                "radial-gradient(circle at 50% 50%, black, transparent 76%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, black, transparent 76%)",
            }}
          />
          <img
            src={logo}
            alt={`${productName} logo`}
            style={{
              position: "relative",
              maxWidth: 180,
              maxHeight: 84,
              width: "auto",
              height: "auto",
            }}
          />
        </Flex>

        <Box p={{ base: 6, md: 8 }}>
          <Badge
            bg="accent.50"
            color="accent.700"
            textTransform="none"
            fontSize="xs"
            px={2.5}
            py={1}
            borderRadius="full"
          >
            {t(badge)}
          </Badge>

          <Heading as="h3" size="lg" mt={3}>
            <Link
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "accent.600", textDecoration: "none" }}
            >
              {productName}
            </Link>
          </Heading>

          <Box mt={2} color="ink.600" fontSize="md" lineHeight="tall">
            {t(subTitle)}
          </Box>

          <Separator my={5} borderColor="ink.100" />

          <ProductDescriptionList items={items} />

          <Button
            asChild
            mt={6}
            size="sm"
            px={5}
            borderRadius="full"
            variant="outline"
            borderColor="accent.300"
            color="accent.700"
            display="inline-flex"
            gap={2}
            _hover={{ bg: "accent.50" }}
          >
            <a href={titleHref} target="_blank" rel="noopener noreferrer">
              {t("Visit website")}
              <ExternalLinkIcon width={16} height={16} />
            </a>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductItem;
