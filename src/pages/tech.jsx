import React from 'react';
import Camera from '../components/Tech/Categories/cameras';
import Compurer from '../components/Tech/Categories/computers';
import Mobile from '../components/Tech/Categories/mobile';
import Photo from '../components/Tech/Categories/photo';
import Tv from '../components/Tech/Categories/tv';

const Tech = () => (
  <div>
    <h2>Take your discount now! -10%</h2>
    <div className="categoies-cantainer">
      <h4>Categories</h4>
      <hr />
      <Camera />
      <hr />
      <Compurer />
      <hr />
      <Mobile />
      <hr />
      <Photo />
      <hr />
      <Tv />
    </div>
  </div>
);

export default Tech;
