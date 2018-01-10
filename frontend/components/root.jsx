import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import GoogleAnalytics from 'react-ga';
import App from './app';

GoogleAnalytics.initialize('UA-107335093-1');

const history = createBrowserHistory();
history.listen((location, action) => {
  GoogleAnalytics.set({ page: location.hash.substr(1) });
  GoogleAnalytics.pageview(location.hash.substr(1));
});

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter history={history}>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
