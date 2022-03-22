import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Meet = React.lazy(() => import('./ChatVoiceMain/room'));
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path='/' name='Home Page' component={Meet} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
