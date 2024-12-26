import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { experience } from "../data";

const Experience = () => {
  const { activeStep } = useSteps({
    index: 3,
    count: experience.data.length,
  });

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
      <Flex flexDirection={"column"}>
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          Work Experience
        </Text>
        <Flex my={10} pl={{ md: 50 }}>
          <Stepper
            index={activeStep}
            zIndex={-1}
            orientation="vertical"
            gap="0"
            // Responsive height for Stepper
            height={{ base: "auto", sm: "600px", md: "700px", lg: "800px" }}
            minHeight="500px" // Minimum height for small screens
            maxHeight="100%" // Ensure it doesn't stretch too much on large screens
          >
            {experience.data.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0" w="full">
                  <StepTitle>{step.title}</StepTitle>
                  <Flex gap={1} flexDirection={"column"} flexWrap={"wrap"}>
                    <Flex
                      flexDirection={{ base: "column", md: "row" }}
                      gap={{ md: 3 }}
                      w="full"
                    >
                      <Text fontWeight={"bold"}>{step.company}</Text>
                      <Flex gap={4} fontSize={"s"} alignItems={"center"}>
                        <Text as={"i"} fontSize={{ base: "xs", md: "md" }}>
                          {step.startDate}
                        </Text>
                        <Text as={"i"} fontSize={{ base: "xs", md: "md" }}>
                          {step.endDate}
                        </Text>
                      </Flex>
                    </Flex>

                    {/* TechStack Section */}
                    <Flex
                      flexDirection={{ base: "column", md: "row" }}
                      gap={{ md: 3 }}
                      w="full"
                      alignItems="flex-start"
                    >
                      <Text fontSize={{ base: "xs", md: "md" }}>
                        TechStack / Frameworks:
                      </Text>
                      <Text
                        fontSize={{ base: "xs", md: "md" }}
                        as={"i"}
                        pl={3}
                        wordBreak="break-word"
                        maxW="80%" // Use maxW for better control over text wrapping
                      >
                        {step.techStack}
                      </Text>
                    </Flex>

                    {/* Description Section */}
                    <Text
                      maxW="80%" // Adjusting width for better responsiveness
                      fontSize={{ base: "xs", md: "md" }}
                      mb={5}
                      wordBreak="break-word" // Ensure the text breaks properly
                    >
                      {step.description}
                    </Text>
                  </Flex>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Experience;
