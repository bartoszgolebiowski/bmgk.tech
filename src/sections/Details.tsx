import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import useMobileView from "../utils/hooks/useMobileView";
import { useTranslation } from "../../i18n";

const Details = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();
  const [isMobile] = useMobileView();

  const minH = isMobile ? "100vh" : "60vh";
  const m = "5rem 0";
  const fontSize = isMobile ? "2rem" : "1.2rem";
  const flexDirection = isMobile ? "column" : "row";

  return (
    <Box
      mt="2rem"
      mb="6rem"
      as="section"
      flexDirection="column"
      id="ourGoals"
      ref={ref}
    >
      <Box mt="2rem">
        <Center>
          <Heading as="h2" size="3xl" isTruncated color="#43A047" height="10vh">
            {t("Our goals")}
          </Heading>
        </Center>
      </Box>
      <Center display="flex" flexDirection={"column"}>
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Flex flex="1" margin="auto 2rem">
            <Text
              textAlign="center"
              justifyContent="center"
              fontSize={fontSize}
            >
              <Text
                fontSize="4xl"
                textAlign="center"
                justifyContent="center"
                fontWeight="bold"
                mb="1rem"
              >
                {t("Our goals description1Title")}
              </Text>
              {t("Our goals description1")}
            </Text>
          </Flex>
          <Box
            backgroundImage={`url(/svg/idea1.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
        <Flex
          minH={minH}
          m={m}
          flexDirection={!isMobile ? "row-reverse" : "column"}
        >
          <Flex flex="1" margin="auto 0">
            <Text
              textAlign="center"
              justifyContent="center"
              fontSize={fontSize}
            >
              <Text
                fontSize="4xl"
                textAlign="center"
                justifyContent="center"
                fontWeight="bold"
                mb="1rem"
              >
                {t("Our goals description2Title")}
              </Text>
              {t("Our goals description2")}
            </Text>
          </Flex>
          <Box
            backgroundImage={`url(/svg/idea3.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Flex flex="1" margin="auto 0">
            <Text
              textAlign="center"
              justifyContent="center"
              fontSize={fontSize}
            >
              <Text
                fontSize="4xl"
                textAlign="center"
                justifyContent="center"
                fontWeight="bold"
                mb="1rem"
              >
                {t("Our goals description3Title")}
              </Text>
              {t("Our goals description3")}
            </Text>
          </Flex>
          <Box
            backgroundImage={`url(/svg/idea2.svg)`}
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            objectFit="contain"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
      </Center>
    </Box>
  );
});

export default Details;
