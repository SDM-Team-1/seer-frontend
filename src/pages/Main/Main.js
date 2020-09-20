import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import style from './Main.module.scss';
import SearchBar from './components/Searchbar/Searchbar';
import Header from '../../shared-components/Header/Header';
import Footer from '../../shared-components/Footer/Footer';
import MethodFilter from './components/MethodFilter/MethodFilter';
import { Button } from '@material-ui/core';

function Main() {
  const useStyles = makeStyles((theme) => ({
    FilterButton: {
      backgroundColor: '#C2A875',
      width: '20%',
      padding: '0.2em',
    },
  }));
  const classes = useStyles();
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

        <section className={style.FilterSearch}>
          <div>
            <Button
              variant="contained"
              size="small"
              className={classes.FilterButton}
            >
              Filter Search
            </Button>
          </div>
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
