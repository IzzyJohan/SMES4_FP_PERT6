import AddMovieForm from "../components/AddMovieForm/AddMovieForm.module";
import Footer from "../components/Footer/Footer.module";
import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";
import Navbar from "../components/Navbar/Navbar.module";

function Main(){
  return(
    <main>
        <Hero />
        <Movies />
        <AddMovieForm />
    </main>
  );
}

function Home() {
  return(
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;