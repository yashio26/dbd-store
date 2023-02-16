import React from 'react';
import Card from './Card';

const infoCard = [
  {
    id: '1',
    name: 'Half-life',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/70/capsule_616x353.jpg?t=1666824272',
  },
];

const ItemList = () => {
  return (
    <>
      {infoCard.length > 0 ? (
        infoCard.map((card) => <Card key={card.id} info={card} />)
      ) : (
        <p>no hay cards</p>
      )}
    </>
  );
};

export default ItemList;
