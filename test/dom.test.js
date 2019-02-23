import React from 'react';
import { shallow, mount, render } from './enzyme';

import PhotoModule from '../client/src/components/PhotoModule.jsx';
import PhotoGrid from '../client/src/components/PhotoGrid.jsx';

const samplePics = [ 
  { imgId: 1,
    imgUrl: 'http://lorempixel.com/640/480/city',
    listingId: 1000,
    imgOrder: 1,
    description: 'Crest bluetooth Personal Loan Account' },
  { imgId: 2,
    imgUrl: 'http://lorempixel.com/640/480/nightlife',
    listingId: 1000,
    imgOrder: 2,
    description: 'value-added Gloves auxiliary' },
  { imgId: 3,
    imgUrl: 'http://lorempixel.com/640/480/sports',
    listingId: 1000,
    imgOrder: 3,
    description: 'Human' },
  { imgId: 4,
    imgUrl: 'http://lorempixel.com/640/480/cats',
    listingId: 1000,
    imgOrder: 4,
    description: 'Forward' },
  { imgId: 5,
    imgUrl: 'http://lorempixel.com/640/480/sports',
    listingId: 1000,
    imgOrder: 5,
    description: 'matrix' },
  { imgId: 6,
    imgUrl: 'http://lorempixel.com/640/480/fashion',
    listingId: 1000,
    imgOrder: 6,
    description: 'Highway' },
  { imgId: 7,
    imgUrl: 'http://lorempixel.com/640/480/technics',
    listingId: 1000,
    imgOrder: 7,
    description: 'Direct' },
  { imgId: 8,
    imgUrl: 'http://lorempixel.com/640/480/cats',
    listingId: 1000,
    imgOrder: 8,
    description: 'HTTP Practical Shirt' },
  { imgId: 9,
    imgUrl: 'http://lorempixel.com/640/480/food',
    listingId: 1000,
    imgOrder: 9,
    description: 'Gorgeous North Dakota backing up' },
  { imgId: 10,
    imgUrl: 'http://lorempixel.com/640/480/transport',
    listingId: 1000,
    imgOrder: 10,
    description: 'Books Convertible Marks' },
  { imgId: 11,
    imgUrl: 'http://lorempixel.com/640/480/nature',
    listingId: 1000,
    imgOrder: 11,
    description: 'alarm French Southern Territories Personal Loan Account' },
  { imgId: 12,
    imgUrl: 'http://lorempixel.com/640/480/abstract',
    listingId: 1000,
    imgOrder: 12,
    description: 'Handcrafted Granite Shirt intranet Checking Account' },
  { imgId: 13,
    imgUrl: 'http://lorempixel.com/640/480/nightlife',
    listingId: 1000,
    imgOrder: 13,
    description: 'Underpass Gorgeous Metal Chicken Bacon' },
  { imgId: 14,
    imgUrl: 'http://lorempixel.com/640/480/abstract',
    listingId: 1000,
    imgOrder: 14,
    description: 'back-end De-engineered' },
  { imgId: 15,
    imgUrl: 'http://lorempixel.com/640/480/animals',
    listingId: 1000,
    imgOrder: 15,
    description: 'scalable Product' },
  { imgId: 16,
    imgUrl: 'http://lorempixel.com/640/480/technics',
    listingId: 1000,
    imgOrder: 16,
    description: 'Ukraine' },
  { imgId: 17,
    imgUrl: 'http://lorempixel.com/640/480/technics',
    listingId: 1000,
    imgOrder: 17,
    description: 'Frozen program SDD' },
  { imgId: 18,
    imgUrl: 'http://lorempixel.com/640/480/transport',
    listingId: 1000,
    imgOrder: 18,
    description: 'Mandatory generate exploit' } 
];

describe('<PhotoGrid />', () => {
  const wrapper = shallow(<PhotoGrid images={samplePics} />);

  it('renders images', () => {
    expect(wrapper.find('#image1')).toBeDefined();
    expect(wrapper.find('#image5')).toBeDefined();
  });

  it('renders modals', () => {
    expect(wrapper.find('.share-modal')).toBeDefined();
    expect(wrapper.find('.save-modal')).toBeDefined();
  });

});