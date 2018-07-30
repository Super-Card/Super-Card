import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import * as pages from '../pages';

const Logo = () => (
  <h1>
    Super<span>Card</span>
  </h1>
);

const Header = () => (
  <div>
    <div className="navbar-bcg">
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          <Logo />
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to={{ pathname: '/auto' }}>Auto</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/sport">Sport</Link>
          <Link to="/restaurants">Restaurants</Link>
        </div>
      </div>
    </div>
    <div className="content">
      <Switch>
        <Route exact path="/" component={pages.Home} />
        <Route path="/auto" component={pages.Auto} />
        <Route path="/beauty" render={pages.Beauty} />
        <Route path="/clothes" render={pages.Clothes} />
        <Route path="/tech" render={pages.Tech} />
        <Route path="/sport" render={pages.Sport} />
        <Route path="/restaurants" render={pages.Restaurants} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </div>
);

export default Header;
