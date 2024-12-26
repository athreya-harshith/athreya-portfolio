import {
  Box,
  IconButton,
  Stack,
  HStack,
  Flex,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const activeColor = useColorModeValue("teal.500", "teal.300");
  const inactiveColor = useColorModeValue("gray.600", "gray.400");

  return (
    <RouterLink to={to}>
      <ChakraLink
        px={2}
        py={1}
        rounded={"md"}
        fontWeight={isActive ? "bold" : "normal"}
        color={isActive ? activeColor : inactiveColor}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        onClick={onClick}
      >
        {children}
      </ChakraLink>
    </RouterLink>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const showDownloadButton = useBreakpointValue({ base: false, md: true });

  const resumeLink =
    "https://github.com/athreya-harshith/athreya-portfolio/blob/master/src/assets/Athreya_Updated_Resume.pdf";

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={1000} // Ensure navbar is on top
        boxShadow="lg" // Optional: Adds shadow for better visibility
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>athreya_harshith</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to="/" onClick={onClose}>
                Home
              </NavLink>
              <NavLink to="/projects" onClick={onClose}>
                Projects
              </NavLink>
              <NavLink to="/resources" onClick={onClose}>
                Resources
              </NavLink>
            </HStack>
          </HStack>

          {/* Right-aligned section (Download Resume and Theme Toggle) */}
          <Flex alignItems={"center"}>
            {/* Desktop View: Download Resume Button */}
            {showDownloadButton && (
              <ChakraLink
                as="a"
                href={resumeLink}
                download
                _hover={{ textDecoration: "none", bg: "gray.200" }}
              >
                <IconButton
                  icon={<FaDownload />}
                  aria-label="Download Resume"
                  size="lg"
                  colorScheme="teal"
                  variant="ghost"
                />
              </ChakraLink>
            )}

            {/* Theme Toggle Button */}
            <HStack mx={3} onClick={toggleColorMode}>
              {colorMode === "dark" ? (
                <SunIcon />
              ) : (
                <MoonIcon color="gray.900" />
              )}
            </HStack>
          </Flex>
        </Flex>

        {/* Mobile menu dropdown */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} align="flex-start">
              <NavLink to="/" onClick={onClose}>
                Home
              </NavLink>
              <NavLink to="/projects" onClick={onClose}>
                Projects
              </NavLink>
              <NavLink to="/resources" onClick={onClose}>
                Resources
              </NavLink>
              {/* Mobile View: Download Resume Button */}
              <ChakraLink
                as="a"
                href={resumeLink}
                download
                _hover={{ textDecoration: "none", bg: "gray.200" }}
              >
                Resume
                <IconButton
                  icon={<FaDownload />}
                  aria-label="Download Resume"
                  size="lg"
                  colorScheme="teal"
                  variant="ghost"
                />
              </ChakraLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
