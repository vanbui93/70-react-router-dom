import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

//main phải là 1 around function
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />
  },
  {
    path: '/contact',
    exact: false,
    main: () => <Contact />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];
export default routes;