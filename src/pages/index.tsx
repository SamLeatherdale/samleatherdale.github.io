import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Project from '../components/Project';
import SEO from '../components/SEO';
import projects from '../data/projects';
import media from '../styles/media';
import { spaceY } from '../styles/mixins';

const Index = () => {

  return (
    <Layout className="page page-home">
      <SEO title="Projects"/>

      <h2>GitHub Projects</h2>
      <p>The following are projects I've build in my spare time, mainly to enhance my knowledge of various aspects of web development. The source code is freely available to view and modify on GitHub. I generally use the GNU GPLv3 license for my work, to ensure all modifications stay open and free.</p>

      <ProjectWrap>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </ProjectWrap>
    </Layout>
  );};

export default Index;

const ProjectWrap = styled.section`
  @media (${media.max.tablet}) {
    ${spaceY('32px')};
  }
`;
  