import Header from '../components/Header';
import Footer from '../components/Footer';
import MotivationalCloud from '../components/MotivationalCloud';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="clouds">
        <MotivationalCloud />
        <MotivationalCloud />
        <MotivationalCloud />
      </div>
      <p className="highlight">Un camino nuevo se construye juntos.</p>
      <Footer />
    </div>
  );
}
