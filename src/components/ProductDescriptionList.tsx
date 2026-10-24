import * as React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import { CheckIcon } from "./Icons";

type ProductDescriptionListProps = {
  items: string[];
};

const ProductDescriptionList = ({ items }: ProductDescriptionListProps) => {
  const { t } = useTranslation();

  return (
    <Stack as="ul" gap={3} css={{ listStyleType: "none" }} m={0} p={0}>
      {items.map((item) => (
        <Flex as="li" key={item} align="flex-start">
          <Flex
            flexShrink={0}
            align="center"
            justify="center"
            boxSize="5"
            mt="0.5"
            mr={3}
            borderRadius="full"
            bg="brand.50"
            color="brand.700"
          >
            <CheckIcon width={10} height={10} />
          </Flex>
          <Text color="ink.600" fontSize="sm" lineHeight="tall">
            {t(item)}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default ProductDescriptionList;
