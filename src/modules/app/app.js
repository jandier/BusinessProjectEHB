import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'utils/loadable';

const AsyncHome = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home" */ '../home/containers/home-container'),
});
const AsyncContact = Loadable({
  loader: () =>
    import(/* webpackChunkName: "contact" */ '../contact/containers/contact-container'),
});
const AsyncProducts = Loadable({
  loader: () =>
    import(/* webpackChunkName: "contact" */ '../products/components/products'),
});

const App = () => (
  <div>
    <Route exact={true} path="/" component={AsyncHome} />
    <Route path="/contact" component={AsyncContact} />
    <Route path="/products" component={AsyncProducts} />
  </div>
);

export default App;
