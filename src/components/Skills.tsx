import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import cpp from "../assets/c-.png";
import c from "../assets/letter-c.png";
import java from "../assets/java.png";
import javaScript from "../assets/java-script.png";
import typeScript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";

import node from "../assets/nodejs.png";
import express from "../assets/express-js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import mongodb from "../assets/mongodb-png.jpeg";
import git from "../assets/git.png";
import gitHub from "../assets/github.png";
import gitLab from "../assets/gitlab.png";
import firebase from "../assets/fire-base.png";
import linux from "../assets/linux.png";
import mysql from "../assets/mysql.png";

import vsCode from "../assets/vs-code.jpeg";
import mongoDbCompass from "../assets/mongo-db-compass.png";
import postman from "../assets/postman.png";
import androidStudio from "../assets/android-studio.png";
const Skills = () => {
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
          Skills
        </Text>
        <Flex pl={{ base: 2, md: 10 }} maxW={"95vw"} flexWrap={"wrap"} my={3}>
          <Text fontSize={{ base: "small", md: "large" }} fontWeight={"bold"}>
            Languages :{" "}
          </Text>
          {/* {skills.languages.map((skill, i) => (
            <Text mx={2}>
              {skill} {i === skills.languages.length - 1 ? "." : ","}
            </Text>
          ))} */}
          <Image src={c} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={cpp} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={java} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={javaScript} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={typeScript} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={html} h={{ base: 6, md: 8 }} mx={2}></Image>
          <Image src={css} h={{ base: 6, md: 8 }} mx={2}></Image>
        </Flex>
        <Flex pl={{ base: 2, md: 10 }} maxW={"95vw"} flexWrap={"wrap"} my={3}>
          <Text
            fontSize={{ base: "small", md: "large" }}
            fontWeight={"bold"}
            my={"auto"}
          >
            Technologies / Framework :{" "}
          </Text>
          {/* {skills.languages.map((skill, i) => (
            <Text mx={2}>
              {skill} {i === skills.languages.length - 1 ? "." : ","}
            </Text>
          ))} */}
          <Image
            src={node}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={express}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={react}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={redux}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={firebase}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={git}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={gitHub}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={gitLab}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={linux}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
        </Flex>
        <Flex pl={{ base: 2, md: 10 }} maxW={"95vw"} flexWrap={"wrap"} my={3}>
          <Text
            fontSize={{ base: "small", md: "large" }}
            fontWeight={"bold"}
            my={"auto"}
          >
            Databases :{" "}
          </Text>
          <Image
            src={mysql}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={mongodb}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
            bg={"white"}
          ></Image>
        </Flex>
        <Flex pl={{ base: 2, md: 10 }} maxW={"95vw"} flexWrap={"wrap"} my={3}>
          <Text
            fontSize={{ base: "small", md: "large" }}
            fontWeight={"bold"}
            my={"auto"}
          >
            Developer Tools :{" "}
          </Text>
          <Image
            src={vsCode}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={mongoDbCompass}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={postman}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
          <Image
            src={androidStudio}
            h={{ base: 6, md: 8 }}
            mx={2}
            my={{ base: 2 }}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
