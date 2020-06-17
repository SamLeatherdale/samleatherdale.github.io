import { ProjectProps, ProjectStatus } from '../components/Project';
import { LibraryEnum } from '../components/ProjectLibrary';

import deusEx from '../images/projects/deusex.png';
import discordTextGenerator from '../images/projects/discordtextgenerator.png';
import erppyMobile from '../images/projects/erppymobile.png';
import gridGame from '../images/projects/gridgame.png';
// Icons
import julianLeatherdale from '../images/projects/julianleatherdale.png';
import novaEditor from '../images/projects/novaeditor.png';
import sydneyTrains from '../images/projects/sydneytrains.png';
import trainBoard from '../images/projects/trainboard.png';
import ultraMotherload from '../images/projects/ultramotherload.png';
import youtubeTimeline from '../images/projects/youtubetimeline.png';

const projects: ProjectProps[] = [
  {
    'title': 'Julian Leatherdale',
    'liveUrl': 'https://julianleatherdale.com',
    'icon': julianLeatherdale,
    'description': 'Author website for Julian Leatherdale, using a custom made Gatsby theme.',
    'isDesktopOnly': false,
    'libraries': [LibraryEnum.TYPESCRIPT],
  },
  {
    'title': 'TrainBoard',
    'repo': 'TrainBoard',
    'liveUrl': 'https://trainboard.netlify.app',
    'icon': trainBoard,
    'description': 'Show train departure information on the big screen.',
    'isDesktopOnly': true,
    'libraries': [LibraryEnum.REACT, LibraryEnum.TYPESCRIPT, LibraryEnum.API]
  },
  {
    'title': 'Deus Ex Hacking Game',
    'repo': 'deusex-hackgame',
    'liveUrl': 'https://deusex.netlify.com',
    'icon': deusEx,
    'description': 'A version of the Deus Ex hacking minigame, in React/TypeScript.',
    'isDesktopOnly': true,
    'status': ProjectStatus.BETA,
    'libraries': [LibraryEnum.REACT, LibraryEnum.TYPESCRIPT]
  },
  {
    'title': 'Nova Launcher Editor',
    'repo': 'novalaunchereditor',
    'liveUrl': 'https://novaeditor.netlify.com',
    'icon': novaEditor,
    'description': 'A React app to edit backup files from the Android home screen app Nova Launcher.',
    'isDesktopOnly': true,
    'libraries': [LibraryEnum.REACT, LibraryEnum.TYPESCRIPT],
    'status': ProjectStatus.ALPHA
  },
  {
    'title': 'Sydney Trains Car Lookup',
    'repo': 'sydneytrainscarlookup',
    'icon': sydneyTrains,
    'description': 'Search a Sydney Trains carriage number to find out the model and carriage type.',
    'isDesktopOnly': false,
    'libraries': [LibraryEnum.REACT, LibraryEnum.TYPESCRIPT]
  },
  {
    'title': 'Ultra Motherload',
    'repo': 'ultramotherload',
    'icon': ultraMotherload,
    'description': 'View and modify Super Motherload map files in a simple JavaScript editor.',
    'isDesktopOnly': true,
    'libraries': [LibraryEnum.CANVAS]
  },
  {
    'title': 'YouTube Timeline',
    'repo': 'youtubetimeline',
    'icon': youtubeTimeline,
    'description': 'See the entire history of any YouTube channel without scrolling forever.',
    'isDesktopOnly': false,
    'libraries': [LibraryEnum.API]
  },
  {
    'title': 'Discord Text Generator',
    'repo': 'discordtextgenerator',
    'icon': discordTextGenerator,
    'description': 'Convert text to Discord\'s Regional Text Indicator characters, and split large messages.',
    'isDesktopOnly': false
  },
  {
    'title': 'Erppy Mobile',
    'repo': 'erppymobile',
    'icon': erppyMobile,
    'description': 'A mobile friendly fork of Barry Martin\'s Hopalong Orbits Visualizer.',
    'isDesktopOnly': false,
    'libraries': [LibraryEnum.FORK]
  },
  {
    'title': 'Grid Game',
    'repo': 'gridgamejs',
    'icon': gridGame,
    'description': 'A simple game where the objective is to find a randomly selected tile within a grid.',
    'isDesktopOnly': true,
    'libraries': [LibraryEnum.CANVAS]
  },
  {
    'title': 'Gatsby Portfolio',
    'repo': 'samleatherdale.github.io/tree/gatsby',
    'description': 'The source code of this website.',
    'isDesktopOnly': false,
    'liveUrl': '',
    'libraries': [LibraryEnum.REACT, LibraryEnum.TYPESCRIPT]
  }
];
export default projects;