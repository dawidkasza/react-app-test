import Hero from "../Hero/Hero";
import List from '../List/List.js';
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
    return (
      <>
         <Hero />
         <SearchForm />
         <List />
      </>
    );
  };

  export default Home;