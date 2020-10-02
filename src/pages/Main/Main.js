import React from 'react';

import style from './Main.module.scss';
import SearchBar from './components/Searchbar/Searchbar';
import Header from '../../shared-components/Header/Header';
import Footer from '../../shared-components/Footer/Footer';
import MethodFilter from './components/MethodFilter/MethodFilter';

function Main() {
  return (
    <div className={style.main}>
      {/* 10 vh */}
      <header>
        <Header></Header>
      </header>
      {/* 85vh */}
      <div className={style.pageContent}>
        {/* 5vh */}
        <section className={style.SearchBar}>
          <SearchBar />
        </section>
      
        {/* 5vh */}
        <section>
          <MethodFilter></MethodFilter>
        </section>
      </div>
      {/* 5 vh */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Main;
