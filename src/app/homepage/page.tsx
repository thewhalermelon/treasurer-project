import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <p>This is homepage</p>
      <Footer />
    </>
  );
};

export default HomePage;
