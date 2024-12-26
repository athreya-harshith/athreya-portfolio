import {
  Box,
  Text,
  IconButton,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
const Projects = () => {
  const techStackColor = useColorModeValue("gray.700", "gray.300");
  const durationColor = useColorModeValue("gray.500", "gray.400");
  const keyFeaturesColor = useColorModeValue("gray.800", "gray.200");
  const keyFeaturesLabelColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        Projects
      </Text>
      <Stack spacing={8}>
        {projects.data.map((project, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="md"
            p={4}
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
          >
            <Flex justify="space-between" align="center">
              {/* Project Title */}
              <Text fontSize="xl" fontWeight="bold">
                {project.title}
              </Text>

              {/* GitHub Icon */}
              <IconButton
                as="a"
                href={project.githubLink}
                target="_blank"
                icon={<FaGithub />}
                aria-label="GitHub Repo"
                variant="link"
                size="lg"
                _hover={{ color: "teal.500" }}
              />
            </Flex>

            {/* Project Duration */}
            <Text fontSize="sm" color={durationColor} mt={1}>
              {project.duration}
            </Text>

            {/* Tech Stack */}
            <Text
              mt={2}
              fontSize="sm"
              fontStyle="italic"
              color={techStackColor}
            >
              {project.techStack}
            </Text>

            {/* Project Description */}
            <Box mt={4}>
              <Text>{project.description}</Text>
            </Box>

            {/* Key Features (moved to the end and highlighted) */}
            <Box mt={4}>
              <Text fontSize="sm" fontStyle="italic" color={keyFeaturesColor}>
                <strong style={{ color: keyFeaturesLabelColor }}>
                  Key Features:
                </strong>{" "}
                {project.keyFeatures}
              </Text>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
