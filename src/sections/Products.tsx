import * as React from "react";

import {
  Box,
  Center,
  Divider,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Products = () => {
  const _hover = { cursor: "pointer" };

  return (
    <Box mt="2rem" mb="10rem" as="section" flexDirection="column">
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading
            as="h2"
            size="3xl"
            isTruncated
            color="#43A047"
            height="10vh"
            id="products"
          >
            Products
          </Heading>
        </Center>
      </Box>
      <Box mt="2rem">
        <Center>
          <Heading
            as="h2"
            size="3xl"
            isTruncated
            color="#ab47bc"
            height="10vh"
            id="plcCreator"
          >
            PLC Creator
          </Heading>
        </Center>
        <Center w="10rem" _hover={_hover} margin="2rem auto">
          <a href="https://vass6plccreator.bmgk.tech/" target="_blank">
            <img src={require("../assets/PlcCreator.svg")} alt="BMGK Logo" />
          </a>
        </Center>
        <Center>
          <Heading as="h3" size="2xl" isTruncated height="10vh">
            Description
          </Heading>
        </Center>
      </Box>
      <UnorderedList>
        <ListItem> Accelerate PLC writing process.</ListItem>
        <ListItem> Reduction of PLC program writing costs</ListItem>
        <ListItem> Improving the quality of the PLC program.</ListItem>
        <ListItem> Improving the logic within the standard.</ListItem>
        <ListItem> Better and more convenient form of programming.</ListItem>
        <ListItem>
          Avoiding the often tedious process of copying and pasting. And related
          bugs.
        </ListItem>
        <ListItem>
          Facilitating the management of the program languages (generating web
          titles and other texts for the selected language).
        </ListItem>
        <ListItem>
          Automatic check of Eplan tag errors when importing them from an "SDF"
          file.
        </ListItem>
        <ListItem>
          Facilitation of the programming process (reduction of required offline
          competencies)
        </ListItem>
        <ListItem>
          Better management of know-how for a specific technology within the
          standard.
        </ListItem>
      </UnorderedList>
      <Divider orientation="horizontal" mt="5rem" />
    </Box>
  );
};

export default Products;
