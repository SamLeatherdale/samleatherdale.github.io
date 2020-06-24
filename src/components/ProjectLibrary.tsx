import React  from 'react';
import { FaBrush, FaCodeBranch, FaReact, FaServer, RiGatsbyLine } from 'react-icons/all';

export enum LibraryEnum {
    REACT = 'react',
    TYPESCRIPT = 'ts',
    CANVAS = 'canvas',
    API = 'api',
    FORK = 'forked',
    GATSBY = 'gatsby',
}

export default function ProjectLibrary({ library }: { library: LibraryEnum }): JSX.Element {
  let Icon;
  let text;
  let title;

  switch (library) {
    case LibraryEnum.REACT:
      Icon = FaReact;
      title = 'React';
      break;
    case LibraryEnum.TYPESCRIPT:
      text = 'TS';
      title = 'TypeScript';
      break;
    case LibraryEnum.CANVAS:
      Icon = FaBrush;
      title = 'HTML5 Canvas';
      break;
    case LibraryEnum.API:
      Icon = FaServer;
      title = 'API';
      break;
    case LibraryEnum.FORK:
      Icon = FaCodeBranch;
      title = 'Forked project';
      break;
    case LibraryEnum.GATSBY:
      Icon = RiGatsbyLine;
      title = 'Gatsby';
  }

  const props = { title, key: library };
  if (Icon) {
    return <Icon {...props} />;
  }

  return <span {...props}>{text}</span>;
}