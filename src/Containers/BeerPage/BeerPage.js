import React from 'react';
import './BeerPage.scss';

export const BeerPage = ({ beerDetails }) => {
  const allHops = beerDetails.ingredients.hops.map((hop, index) => {
    return (
      <ul key={index}>
        {hop.name}
        <li>Attribute: {hop.attribute}</li>
        <li>When to add it: {hop.add}</li>
        <ul>
          <li>
            {hop.amount.value} {hop.amount.unit}
          </li>
        </ul>
      </ul>
    );
  });

  const allMalts = beerDetails.ingredients.malt.map((malt, index) => {
    return (
      <ul key={index}>
        {malt.name}
        <ul>
          <li>
            {malt.amount.value} {malt.amount.unit}
          </li>
        </ul>
      </ul>
    );
  });

  const allFoods = beerDetails.food_pairing.map((meal, index) => {
    return <li key={index}>{meal}</li>;
  });

  const mash_temp = beerDetails.method.mash_temp.map((temp, index) => {
    return (
      <li key={index}>
        {temp.temp.value} {temp.temp.unit}{' '}
      </li>
    );
  });

  const checkForBeer = () => {
    return beerDetails.name ? (
      <>
        <section className='BeerPage__section--stats'>
          <ul>
            <li>ABV: {beerDetails.abv}</li>
            <li>Attenuation Level: {beerDetails.attenuation_level}</li>
            <li>
              Boil volume: {beerDetails.boil_volume.value}{' '}
              {beerDetails.boil_volume.unit}
            </li>
            <li>EBC: {beerDetails.ebc}</li>
            <li>IBU: {beerDetails.ibu}</li>
            <li>PH: {beerDetails.ph}</li>
            <li>SRM: {beerDetails.srm}</li>
            <li>Target FG: {beerDetails.target_fg}</li>
            <li>Target OG: {beerDetails.target_og}</li>
          </ul>
        </section>
        <aside className='BeerPage__aside--ingredients'>
          <h4>Ingredients</h4>
          <ul>
            <h3>Hops</h3>
            {allHops}
          </ul>
          <ul>
            <h3>Malts</h3>
            {allMalts}
          </ul>
          <p>{beerDetails.ingredients.yeast}</p>
        </aside>
        <section className='BeerPage__section--header'>
          <h2 className='BeerPage__h2--beerName'>{beerDetails.name}</h2>
          <h3>{beerDetails.tagline}</h3>
        </section>
        <section>
          <div className='BeerPage__div--description'>
            <h5>Description</h5>
            <p>{beerDetails.description}</p>
          </div>
          <div className='BeerPage__div--brewersTips'>
            <h5>Brewer's Tips</h5>
            <p>{beerDetails.brewers_tips}</p>
          </div>
          <div className='BeerPage__div--pairsWith'>
            <h4>Pairs well with:</h4>
            <ul>{allFoods}</ul>
          </div>
        </section>
        <section>
          <h5>
            Total volume this makes: {beerDetails.volume.value}{' '}
            {beerDetails.volume.unit}
          </h5>
          <h5>Mash temperature</h5>
          <ul>{mash_temp}</ul>
          <h5>
            Fermentation: {beerDetails.method.fermentation.temp.value}{' '}
            {beerDetails.method.fermentation.temp.unit}
          </h5>
        </section>
      </>
    ) : (
      <h2>There are no results yet.</h2>
    );
  };

  return (
    <div className='BeerPage' key={beerDetails.id}>
      {checkForBeer}
    </div>
  );
};

export default BeerPage;
