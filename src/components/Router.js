import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //need this for routing
import StorePicker from "./StorePicker"; //first route
import App from "./App"; //second route
import NotFound from "./NotFound"; //third route

const Router = () => (
  <BrowserRouter>
  {/* the way the switch tag works is it's going to try the first route, if doesnt match, then second route, then the 'not found' */}
    <Switch>
      {/* first route - when matches '/', go to StorePicker component */}
      <Route exact path="/" component={StorePicker} />
      {/* second route - when user enters any store (bc of ':storeId' - a catch all for any store name), render the App component */}
      <Route path="/store/:storeId" component={App} />
      {/* third route - if user goes to anything else not specified, give a 'not found message' by going to NotFound component */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;