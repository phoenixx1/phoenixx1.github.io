import React from "react";
import { SiReact } from "react-icons/si";
import { Button } from "@material-ui/core";

import {
  ProjectsContainer,
  Heading,
  AllProject,
  Project,
  PrjImg,
  PrjTitle,
  Stacks,
  SourceButtons,
} from "./ProjectsElements";
import { projects } from "./Data";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Heading>
        <Zoom>PROJECTS</Zoom>
      </Heading>

      <AllProject>
        {projects.map((values) => (
          <Fade top={values.top} bottom={values.bottom}>
            <Project id={values.id}>
              <PrjImg src={values.img} />

              <PrjTitle>{values.title}</PrjTitle>
              <Stacks>
                {values.stacks.map((stack) => (
                  <>{stack}</>
                ))}
              </Stacks>

              <SourceButtons>
                <Button href={values.source} target="_blank">
                  Source
                </Button>
                <Button href={values.demo} target="_blank">
                  Demo
                </Button>
              </SourceButtons>
            </Project>
          </Fade>
        ))}
      </AllProject>
    </ProjectsContainer>
  );
}

export default Projects;
