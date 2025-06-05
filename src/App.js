import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import VerticalStipper from './Components/VerticalStipper';
import ListRoutes from './Routes/ListRoutes';

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <VerticalStipper/>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
