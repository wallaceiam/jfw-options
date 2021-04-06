import "./App.css";
import "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import { ProvideAuth } from "./hooks";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Landing, Dashboard } from "./pages";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Route exact path='/' component={Landing} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Router>
    </ProvideAuth>
  );
};

export default App;
