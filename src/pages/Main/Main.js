import React from 'react';

import style from './Main.module.scss';
import SearchBar from './components/Searchbar/Searchbar';
// import Header from '../../shared-components/Header/Header';
// import Footer from '../../shared-components/Footer/Footer';

function Main() {
  return (
    <div>
      {/* <header>
        <Header></Header>
      </header> */}
      <section className={style.main}>
        <SearchBar />
      </section>
      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </div>
  );
}

export default Main;
