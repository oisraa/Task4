import React from 'react';
import DynamicCard from './DynamicCard'; // Adjust path as needed
import { FaHeartbeat, FaPills, FaMicroscope } from 'react-icons/fa';
import { RiHourglass2Fill } from 'react-icons/ri';
const CardContainer = () => {
    // Array of card data
    const cards = [
      {
        icon: FaHeartbeat,

        title: 'Card title 1',
        text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      },
      {
        icon: FaPills,
       
        title: 'Card title 2',
        text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      },
      {
        icon: FaMicroscope,
       
        title: 'Card title 3',
        text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
      },
      {
        icon: RiHourglass2Fill,

        title: 'Card title 4',
        text: 'Magni Dolores: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      },
    ];
  
    return (
        <div className="container mt-5"> {/* Adds distance from the top */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-3"> {/* Adjusts gap and columns */}
        <div className="col d-flex justify-content-center">
          <DynamicCard icon={FaHeartbeat} text="Lorem Ipsum: Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />
        </div>
        <div className="col d-flex justify-content-center">
          <DynamicCard icon={FaPills} text="Sed ut perspici: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
        </div>
        <div className="col d-flex justify-content-center">
          <DynamicCard icon={FaMicroscope} text="Magni Dolores: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />
        </div>
        <div className="col d-flex justify-content-center">
          <DynamicCard icon={RiHourglass2Fill} text="Magni Dolores: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />
        </div>
      </div>
    </div>

  );
};

  export default CardContainer;
  
 

