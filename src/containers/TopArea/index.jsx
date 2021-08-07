import React from 'react';
import RateCard from '../../components/RateCard';

const rates = [
  {
    stars: 5,
    text: 'Rated 5 Stars in Reviews',
  },
  {
    stars: 5,
    text: 'Rated 5 Stars in Report Guru',
  },
  {
    stars: 5,
    text: 'Rated 5 Stars in BestTech',
  },
]

const TopArea = () => (
  <div className='top-area'>
    <div className='text-container'>
      <h1 className='title'>10,000+ of our users love our products.</h1>
      <p className='legend'>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
    </div>
    <div className='rate-container'>
      {
        rates.map((rate, i) => (
          <RateCard stars={rate.stars} text={rate.text} i={i} key={i} />
        ))
      }
    </div>
  </div>
);

export default TopArea;
