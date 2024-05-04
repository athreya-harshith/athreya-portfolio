import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import codingIcon from "../assets/coding.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Introduction = () => {
  const bgColorArrow = useColorModeValue("black", "white");
  const typeWriterText = useColorModeValue("#1DA1F2", "cyan");
  const [text] = useTypewriter({
    words: ["Student", "Developer", "Tech Guy"],
    loop: true,
  });
  return (
    <Flex
      h={"90vh"}
      w={"80%"}
      alignItems={"center"}
      alignSelf={"center"}
      mx={"auto"}
      gap={5}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Container>
        <Image src={codingIcon} mx={"auto"} h={250} mb={10}></Image>
        <Text fontSize={"xx-large"} fontWeight={"bolder"} textAlign={"center"}>
          Harshith Athreya
        </Text>
        <HStack
          justifyContent={"center"}
          my={3}
          fontSize={"small"}
          fontWeight={"bold"}
        >
          <Box borderRightColor={bgColorArrow}>Student</Box>
          <Box
            className="border-right"
            borderRightColor={bgColorArrow}
            mx={2}
          ></Box>
          <Box borderRightColor={bgColorArrow}>CSE</Box>
          <Box
            className="border-right"
            borderRightColor={bgColorArrow}
            mx={2}
          ></Box>
          <Box borderRightColor={bgColorArrow}>Tech Guy</Box>
        </HStack>
        <HStack
          justifyContent={"center"}
          fontSize={"large"}
          fontWeight={"bold"}
        >
          <Text>I'm a </Text>
          <Text textColor={typeWriterText}>{text}</Text>
          <Cursor />
        </HStack>
      </Container>
      <Box
        as="div"
        className="scroll-down"
        borderBottomColor={bgColorArrow}
        borderRightColor={bgColorArrow}
      ></Box>
    </Flex>
  );
};

export default Introduction;
