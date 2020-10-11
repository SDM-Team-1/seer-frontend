import React from 'react';
import Card from '@material-ui/core/Card';

import style from './Main.module.scss';
import Header from '../../shared-components/Header/Header';
import Footer from '../../shared-components/Footer/Footer';
import DateRange from './components/DateRange/DateRange';
import FilterSearchBar from './components/FilterSearchBar/FilterSearchBar';
import ResultTable from './components/ResultTable/ResultTable';
import QuickDate from './components/QuickDate/QuickDate';

import getArticleData from '../../utils/api-service';

function Main() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [articleResult, setArticleResult] = React.useState([]);
  const performSearch = () => {
    setShowSearch(true);
    getArticleData().then(
      (result) => {
        setArticleResult(result.data);
      },
      (error) => {
        console.error(error);
        window.alert(error);
      }
    );
  };

  return (
    <div className={style.main}>
      {/* 10 vh */}
      <header>
        <Header></Header>
      </header>
      {/* 85vh */}
      <div className={style.pageContent}>
        {/* 5vh */}
        <section>
          <FilterSearchBar showSearch={() => performSearch()}></FilterSearchBar>
        </section>

        <section className={style.Date}>
          <Card>
            {/* 5vh */}
            <section className={style.DateRange}>
              <DateRange />
            </section>

            {/* 5vh */}
            <section className={style.QuickDate}>
              <QuickDate />
            </section>
          </Card>
        </section>

        {/* 75vh */}
        {showSearch && (
          <ResultTable
            className={style.ResultTable}
            tableData={articleResult}
          ></ResultTable>
        )}
      </div>

      {/* 5 vh */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Main;
