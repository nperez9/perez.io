import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import { PortfolioItem } from '../../../types';
import { ShowCode } from '../../../library';
import styles from './DetailBody.module.scss';
import { publicResource } from '../../../utils';

export const DetailBody: React.FC<PortfolioItem> = ({ name, tech, short_description, cover_image, description_images, description, video }) => {
  const images = [cover_image, ...(description_images ? description_images : [])];
  const carouselItems = images.map((image) => {
    return (
      <CarouselItem key={image}>
        <img src={publicResource(image)} alt={name} className="cover-images" height={400} />
      </CarouselItem>
    );
  });

  return (
    <div className={styles.DetailBody}>
      <h1>
        <ShowCode tag="h1">{name}</ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2">{short_description}</ShowCode>
      </h2>
      <Carousel className={styles.CarruselContainer} interval={2000}>
        {carouselItems}
      </Carousel>
      {tech && <div className={styles.BuildIn}></div>}
      {!!description && (
        <p>
          <ShowCode tag="p">{description}</ShowCode>
        </p>
      )}
      {video && (
        <div>
          <h3>
            <ShowCode tag="h3">{video.title}</ShowCode>
          </h3>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  );
};
