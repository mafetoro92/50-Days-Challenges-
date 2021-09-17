import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {AppProvider} from '../src/components/context/AppContext'
import Carts from './components/Carts/Carts';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Carts/>
        <Footer/>
      </div>
    </AppProvider>
  );
}

export default App;
