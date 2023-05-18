import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import { PortfolioList } from '../../../data';
import { ShowCode } from '../../../library';
import styles from './DetailBody.module.scss';

export const DetailBody: React.FC<PortfolioList> = ({ name, cover_image, description_images, description }) => {
  const images = [cover_image, ...(description_images ? description_images : [])];
  const carouselItems = images.map((image) => {
    return (
      <CarouselItem>
        <img src={image} alt={name} className="cover-images" height={400} />
      </CarouselItem>
    );
  });

  return (
    <div className={styles.DetailBody}>
      <h1>
        <ShowCode tag="h1">{name}</ShowCode>
      </h1>
      <Carousel interval={2000}>{carouselItems}</Carousel>
      <p>
        <ShowCode tag="p">{description}</ShowCode>
      </p>
    </div>
  );
};
