
import './App.css';
import Header from './Component/Header';
import SimpleBottomNavigation from './Component/MainNav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from '@material-ui/core';
import Trending from './Component/Trending'
import Movies from './Component/Movies'
import Series from './Component/Series'
import Search from './Component/Search'

function App() {
  return (
    <>
   <BrowserRouter>
      <Header />
      <div className="app">  
      <Container>
      <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
      </Container>   
      </div>
      
      <SimpleBottomNavigation />
    </BrowserRouter>
    </>
  );
}

export default App;
