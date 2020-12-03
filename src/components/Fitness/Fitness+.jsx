import React from 'react';
import ProductSmall from '../ProductSmall';
import './styles.css';
import {SiApple} from 'react-icons/si';
import FitnessImg from '../../Images/apple_fitness.jpg';

const Fitness = () => {
  return <ProductSmall icon={<SiApple/>} title='Fitness+'  model="Coming late 2020" content="A new fitness experience powered by Apple Watch." id="Fitness" imgURL0={FitnessImg} link0URL='https://www.apple.com/uk/apple-fitness-plus/' link1URL='https://www.apple.com/uk/#notify-me-modal' link0Text='Learn more' link1Text='Notify me'/>
}

export default Fitness;