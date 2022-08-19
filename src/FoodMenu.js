import React from 'react';
import './FoodMenu.css';
import Food from './Food';
import tungol from './images/food-friedtungol.png';
import data from './data';

function FoodMenu() {
  const cards = data.map((item) => {
    return (
      <Food
        key={item.id}
        img={require(`${item.coverImg}`)}
        // reviewCount={item.stats.reviewCount}
        // title={item.title}
        // price={item.price}
      />
    );
  });

  return (
    <div className='foodmenu'>
      <h1>Night Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind
        <br /> hosts—etc insert here more description.
      </p>
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default FoodMenu;
