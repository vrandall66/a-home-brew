import React from 'react';
import Accordion from '../Accordion/Accordion';
import ParentAccordion from '../ParentAccordion/ParentAccordion';
import { PropTypes } from 'prop-types';
import './BeerPage.scss';

export const BeerPage = ({ beerDetails }) => {
  const newHopStructure = beerDetails.ingredients.hops.map(hop => ({
    title: hop.name,
    listItems: [
      `Attribute: ${hop.attribute}`,
      `When to add it: ${hop.add}`,
      `${hop.amount.value} ${hop.amount.unit}`
    ]
  }));

  const hopAccordions = newHopStructure.map((hop, index) => {
    return <Accordion title={hop.title} items={hop.listItems} key={index} />;
  });

  const newMaltStructure = beerDetails.ingredients.malt.map(malt => ({
    title: malt.name,
    listItems: [`${malt.amount.value} ${malt.amount.unit}`]
  }));

  const maltAccordions = newMaltStructure.map((malt, index) => {
    return <Accordion title={malt.title} items={malt.listItems} key={index} />;
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

  return (
    <div className='BeerPage' key={beerDetails.id}>
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
          <li>
            Fermentation: {beerDetails.method.fermentation.temp.value}{' '}
            {beerDetails.method.fermentation.temp.unit}
          </li>
          <li>
            Total volume this makes: {beerDetails.volume.value}{' '}
            {beerDetails.volume.unit}
          </li>
          <li>Mash temperature:</li>
          <ul>{mash_temp}</ul>
        </ul>
      </section>
      <aside className='BeerPage__aside--ingredients'>
        <h4>Ingredients</h4>
        <ParentAccordion
          title={'Hops'}
          accordions={hopAccordions}
          key={'hops'}
          className='BeerPage__ParentAccordion--ingredients'
        />
        <ParentAccordion
          title={'Malts'}
          accordions={maltAccordions}
          key={'malts'}
          className='BeerPage__ParentAccordion--ingredients'
        />
        <p>{beerDetails.ingredients.yeast}</p>
      </aside>
      <section className='BeerPage__section--header'>
        <h2 className='BeerPage__h2--beerName'>{beerDetails.name}</h2>
        <h3>{beerDetails.tagline}</h3>
      </section>
      <section className='BeerPage__section--description'>
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
    </div>
  );
};

export default BeerPage;

BeerPage.propTypes = {
  beerDetails: PropTypes.object
};
