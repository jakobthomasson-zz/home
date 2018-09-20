import { RouteProps } from 'react-router-dom';
import TopAnimePage from 'src/pages/TopAnime';
import HomePage from 'src/pages/Home';
import Pdf2TextPage from 'src/pages/Pdf2Text';
import TutorialPage from 'src/pages/Tutorial';

export interface IRoute extends RouteProps {
  title?: string;
}

const routes: IRoute[] = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    title: 'Top Anime',
    path: '/topanime',
    exact: false,
    component: TopAnimePage,
  }, {
    title: 'PDF to Text',
    path: '/pdf2text',
    exact: false,
    component: Pdf2TextPage,
  }, {
    title: 'TS DEMO',
    path: '/tsdemo',
    exact: false,
    component: TutorialPage,
  },
];

export default routes;
