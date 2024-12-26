import {
  Box,
  Text,
  IconButton,
  Flex,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { usefullResources } from "../data";

const Resources = () => {
  // Color settings
  const descriptionColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        Useful Resources
      </Text>
      <Stack spacing={8}>
        {usefullResources.data.map((resource, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="md"
            p={4}
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
          >
            <Flex justify="space-between" align="center">
              {/* Resource Title */}
              <Text fontSize="xl" fontWeight="bold">
                {resource.title}
              </Text>

              {/* GitHub Icon (aligned to the right) */}
              <Link href={resource.link} isExternal>
                <IconButton
                  icon={<FaGithub />}
                  aria-label="GitHub Repo"
                  variant="link"
                  size="lg"
                  _hover={{ color: "teal.500" }}
                />
              </Link>
            </Flex>

            {/* Description */}
            <Text mt={2} fontSize="sm" color={descriptionColor}>
              {resource.description}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Resources;
