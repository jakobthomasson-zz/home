import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import TopAnime from 'src/pages/TopAnime';

export interface IRoute extends RouteProps {
  title?: string;
}

const routes: IRoute[] = [
  {
    title: 'Home',
    path: '/',
    component: () => <div>Home</div>,

  },
  {
    title: 'Top Anime',
    path: '/topanime',
    component: TopAnime,
  },
  {
    title: 'Try hard',
    path: '/tryhard',
    component: () => <div>tryhard</div>,
  },
];

export default routes;
