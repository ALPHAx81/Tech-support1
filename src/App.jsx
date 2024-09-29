import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app_container">
      {/* Video Background */}
      <video autoPlay muted loop className="videoBackground">
        <source src="/18069166-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <Navigation />
        <main className="main_container">
          <ContactHeader />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}

export default App;
