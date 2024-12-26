import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { aboutMe } from "../data";
import proPic from "../assets/recent.jpg";
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
            <Link href={"https://github.com/athreya-harshith"} isExternal>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/harshith-athreya-652a78213/"}
              isExternal
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
            <Link href={""} isExternal>
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
            <Link href={""} isExternal>
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </Link>
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
