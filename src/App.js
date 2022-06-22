import './styles/main.css';
import Header from "./components/Header";
import Home from "./components/Home"
import {
  Route,
  Link,
  Routes,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>

</Router>
  );
}

export default App;


