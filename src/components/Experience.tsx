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
    index: 2,
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
            height={{ base: "550px", md: "400px" }}
            gap="0"
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

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <Flex gap={1} flexDirection={"column"} flexWrap={"wrap"}>
                    <Flex
                      flexDirection={{ base: "column", md: "row" }}
                      gap={{ md: 3 }}
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
                    <Flex
                      flexDirection={{ base: "column", md: "row" }}
                      gap={{ md: 3 }}
                      flexWrap={"wrap"}
                    >
                      <Text fontSize={{ base: "xs", md: "md" }}>
                        TechStack / Frameworks :
                      </Text>
                      <Text
                        maxW={"70vw"}
                        fontSize={{ base: "xs", md: "md" }}
                        as={"i"}
                        pl={3}
                      >
                        {step.techStack}.
                      </Text>
                    </Flex>

                    <Text maxW={"70vw"}>{step.description}</Text>
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
