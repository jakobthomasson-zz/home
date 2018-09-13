import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import TopAnimePage from 'src/pages/TopAnime';
import HomePage from 'src/pages/Home';

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
    title: 'Try hard',
    path: '/tryhard',
    exact: false,
    component: () => <div>tryhard</div>,
  },
];

export default routes;
