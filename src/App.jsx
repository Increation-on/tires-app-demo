import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
