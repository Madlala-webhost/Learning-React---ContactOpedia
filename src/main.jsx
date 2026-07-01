import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';
import ContactIndex from "./components/contactpages/contactIndex.jsx";

const root = createRoot(document.getElementById('root'));

function Homepage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-fill">
        <ContactIndex />
      </div>

      <Footer />
    </div>
  );
}


root.render(
  <Homepage />
);
