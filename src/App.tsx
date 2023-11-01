import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProductsPage,
  ServicesPage
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
