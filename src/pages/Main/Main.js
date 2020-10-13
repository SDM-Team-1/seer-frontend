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
  const initialDateRange = {
    from: new Date('1950'),
    to: new Date(),
  };
  const dateFiveYearAgo = new Date((new Date().getFullYear() - 5).toString());
  const dateTenYearAgo = new Date((new Date().getFullYear() - 10).toString());

  const [dateRange, setDateRange] = React.useState(initialDateRange);
  const [quickYearRange, setQuickYearRange] = React.useState('all');
  const [practice, setPractice] = React.useState();
  const [benefit, setBenefit] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const [articleResult, setArticleResult] = React.useState([]);

  const handleUpdateDate = (selectedDate) => {
    setDateRange({ from: selectedDate.from, to: selectedDate.to });
    const toCurrentTime =
      selectedDate.to.getFullYear() === new Date().getFullYear();
    if (!toCurrentTime) {
      setQuickYearRange(null);
    } else if (
      selectedDate.from.getFullYear() === dateFiveYearAgo.getFullYear() &&
      toCurrentTime
    ) {
      setQuickYearRange('5');
    } else if (
      selectedDate.from.getFullYear() === dateTenYearAgo.getFullYear() &&
      toCurrentTime
    ) {
      setQuickYearRange('10');
    } else if (
      selectedDate.from.getFullYear() === initialDateRange.from.getFullYear() &&
      toCurrentTime
    ) {
      setQuickYearRange('all');
    } else {
      setQuickYearRange(null);
    }
  };

  const handleYearToggle = (e, toggleVal) => {
    e.preventDefault();
    if (toggleVal !== null) setQuickYearRange(toggleVal);
    switch (toggleVal) {
      case 'all':
        setDateRange(initialDateRange);
        console.log('All dates selected');
        break;
      case '5':
        setDateRange({
          from: dateFiveYearAgo,
          to: new Date(),
        });
        console.log('Last 5 years selected');
        break;
      case '10':
        setDateRange({
          from: dateTenYearAgo,
          to: new Date(),
        });
        console.log('Last 10 years selected');
        break;
      default:
        console.log('Null value, no change');
        break;
    }
    console.log(toggleVal);
  };

  const performSearch = () => {
    setShowResults(true);
    getArticleData({
      from: dateRange.from.getFullYear(),
      to: dateRange.to.getFullYear(),
      practice,
      benefit,
    }).then(
      (result) => {
        setArticleResult(result.data);
      },
      (error) => {
        console.error(error);
        window.alert(error);
      }
    );
  };

  const handlePracticeChange = (_, practice) => {
    setPractice(practice.name);
    console.log(practice);
  };
  const handleBenefitChange = (_, benefits) => {
    setBenefit(benefits.map((benefit) => benefit.name));
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
          <FilterSearchBar
            showSearch={() => performSearch()}
            updatePractice={handlePracticeChange}
            updateBenefit={handleBenefitChange}
          ></FilterSearchBar>
        </section>

        <section className={style.Date}>
          <Card>
            {/* 5vh */}
            <section className={style.DateRange}>
              <DateRange
                from={dateRange.from}
                to={dateRange.to}
                updateDate={handleUpdateDate}
              />
            </section>

            {/* 5vh */}
            <section className={style.QuickDate}>
              <QuickDate
                yearRange={quickYearRange}
                onToggle={handleYearToggle}
              />
            </section>
          </Card>
        </section>

        {/* 75vh */}
        {showResults && (
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
