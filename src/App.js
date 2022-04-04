import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from './CreatBlog';
import BlogDetail from './BlogDetail';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;