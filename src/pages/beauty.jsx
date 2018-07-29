import React from 'react';
import Container from '../components/Beauty/Filters/Container';
import ResultList from '../components/Beauty/FiltersResult/ResultList';
import ResultItems from '../components/Beauty/FiltersResult/ResultItems';
import '../components/Beauty/Filters/BeautyFilters.css';
import '../components/Beauty/FiltersResult/BeautyFiltersResult.css';

const Beauty = () => (
  <div className="beauty-intro">
    <h1>Beauty</h1>
    <p>
      Receive special discounts at the following Beauty Shopping centers for high level cosmetics! By using Your Super
      Card, you can save up to 30% on hundreds of beauty products for hair, face and body from top Brands. Check out
      where the best offers are and learn how you can benefit from using the Card.
    </p>
    <Container />
    <ResultList />
    <ResultItems />
  </div>
);

export default Beauty;
