import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EntryList from './EntryList';
import Login from './Login';
import NewEntryPage from './NewEntryPage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="notebook front">
          <Route path="/" component={Login} exact={true} />
          <Route path="/yournotebook/" component={EntryList} />
          <Route path="/newEntry/" component={NewEntryPage} />
        </div>
      </Router>
    );
  }

}

export default App;
