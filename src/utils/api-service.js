import config from '../config/';
const getArticleData = (searchCriteria) => {
  console.log('Searching for articles satisfying', searchCriteria);

  const header = new Headers();
  header.append('Content-Type', 'application/json');
  header.append('accept', 'application/json');

  const options = {
    method: 'GET',
    headers: header,
    redirect: 'follow',
  };
  const queryParams = new URLSearchParams(searchCriteria).toString();
  console.log(`${config.API_SERVER}/api/article?${queryParams}`);
  return fetch(
    `${config.API_SERVER}/api/article?${queryParams}`,
    options
  ).then((res) => res.json());
};

export default getArticleData;
