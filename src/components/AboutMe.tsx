import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { aboutMe } from "../data";
import proPic from "../assets/recent.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const AboutMe = () => {
  return (
    <Flex
      mx={"auto"}
      my={10}
      flexDirection={"column"}
      justifyContent={"center"}
      w={"80%"}
      gap={10}
      px={{ md: 20 }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        h={{ md: "30vh" }}
        justifyContent={"center"}
        w={"100%"}
      >
        <Box maxW={"250px"} padding={{ base: 1, md: 5 }}>
          <Image src={proPic} borderRadius={10}></Image>
        </Box>
        <Box
          textAlign={{ base: "center", md: "start" }}
          m={5}
          w={{ base: "100%" }}
          my={"auto"}
        >
          <Text
            fontSize={{ base: "xx-large", md: "xxx-large" }}
            fontWeight={"bold"}
            my={2}
          >
            Harshith Athreya
          </Text>
          <Text my={2}>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>Bengaluru , India</span>
          </Text>
          <Flex my={3} gap={4} justifyContent={{ base: "center", md: "start" }}>
            <FontAwesomeIcon icon={faGithub} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          About Me
        </Text>
        <Text textAlign={"start"}>{aboutMe.data}</Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
