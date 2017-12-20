import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
 


function RouterConfig({ history,app }) {

const IndexPage = dynamic({
	app,
      models: () => [
                 import('./models/head'),
      ],
	component: ()=> import('./routes/IndexPage')
})

 const user = dynamic({
      app,
      models: () => [
            import('./models/user'),
      ],
      component: () => import('./routes/user')
 });

const images = dynamic({
      app,
      models: () => [
             import('./models/image'),
      ],
      component: () => import('./routes/images')	
});
  return (
      <Router history={history}>
	      <Switch>
	        <Route exact path="/" component={IndexPage} />
	        <Route exact path="/user" component={user} />
	        <Route exact path="/images" component={images} />
	      </Switch>
    </Router>
  );
}

export default RouterConfig;
