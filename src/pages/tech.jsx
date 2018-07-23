import React from 'react';
import Camera from '../components/Tech/Categories/cameras';
import Compurer from '../components/Tech/Categories/computers';
import Mobile from '../components/Tech/Categories/mobile';
import Photo from '../components/Tech/Categories/photo';
import Tv from '../components/Tech/Categories/tv';

const Tech = () => (
  <div className="categoies-cantainer">
    <Camera />
    <Compurer />
    <Mobile />
    <Photo />
    <Tv />
  </div>
);

export default Tech;
