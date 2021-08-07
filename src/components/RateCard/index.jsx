import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const RateCard = ({stars, text, i}) => {
  return (
    <div className={`rate-card-${i} rate-card`}>
      <div className='stars'>
        {
          [...Array(stars)].map((e, i) => (
            <StarIcon style={{ color: '#ffc100', margin: '0 3px' }} key={i} />
          ))
        }
      </div>
      <div className='rate-text'>{text}</div>
    </div>
  );
}

export default RateCard;
