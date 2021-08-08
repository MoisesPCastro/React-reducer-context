import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContext } from './components/AppContext';


import { Home } from './Home/index';
 export default function Routes(){
     return(
         <BrowserRouter>
            <Switch>
              <AppContext>
                <Route exact path='/' component= {Home} />
              </AppContext>
            </Switch>
         </BrowserRouter>
     );
 }
