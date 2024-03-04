import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Study Materials!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/GMAT-focus.jpg.webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Gmat Past questions'
              path='/services'
            />
            <CardItem
              src='images/math.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Maths questions'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/secp.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Service Procedures'
              path='/services'
            />
            <CardItem
              src='images/current-affairs.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Nigerian Current Affairs'
              path='/products'
            />
            <CardItem
              src='images/bank-logo.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='History of FBN'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;