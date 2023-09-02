import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import { PortfolioItem } from '../../../types';
import { ShowCode } from '../../../library';
import styles from './DetailBody.module.scss';

export const DetailBody: React.FC<PortfolioItem> = ({ name, short_description, cover_image, description_images, description }) => {
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
      <h6>
        <ShowCode tag="h2">{short_description}</ShowCode>
      </h6>
      <Carousel className={styles.CarruselContainer} interval={2000}>
        {carouselItems}
      </Carousel>
      <p>
        <ShowCode tag="p">{description}</ShowCode>
      </p>
    </div>
  );
};
