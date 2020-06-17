import React  from 'react';
import { FaBrush, FaCodeBranch, FaReact, FaServer } from 'react-icons/all';

export enum LibraryEnum {
    REACT = 'react',
    TYPESCRIPT = 'ts',
    CANVAS = 'canvas',
    API = 'api',
    FORK = 'forked'
}

export default function ProjectLibrary({ library }: { library: LibraryEnum }): JSX.Element {
  let icon;
  let text;
  let title;

  switch (library) {
    case LibraryEnum.REACT:
      icon = <FaReact />;
      title = 'React';
      break;
    case LibraryEnum.TYPESCRIPT:
      text = 'TS';
      title = 'TypeScript';
      break;
    case LibraryEnum.CANVAS:
      icon = <FaBrush />;
      title = 'HTML5 Canvas';
      break;
    case LibraryEnum.API:
      icon = <FaServer />;
      title = 'API';
      break;
    case LibraryEnum.FORK:
      icon = <FaCodeBranch />;
      title = 'Forked project';
      break;
  }

  const props = { title, key: library };
  if (icon) {
    return <i className={icon} {...props} />;
  }

  return <span {...props}>{text}</span>;
}