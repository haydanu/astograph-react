import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container } from 'reactstrap';

import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact }
];

function App() {
  return (
    <div>
      <NavbarComponent />
      <Container className='container'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames='page'
                unmountOnExit>
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
    </div>
  );
}

export default App;
