import React from 'react';

import { PortfolioItem } from '../../../types';
import { Icons, Icons, ShowCode } from '../../../library';
import styles from './DetailBody.module.css';
import { publicResource } from '../../../utils';
import { Icon } from 'lucide-react';

export const DetailBody: React.FC<PortfolioItem> = ({ name, tech, short_description, cover_image, description_images, description, video }) => {
  const images = [cover_image, ...(description_images ? description_images : [])];

  return (
    <div className={styles.DetailBody}>
      <h1>
        <ShowCode tag="h1">{name}</ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2">{short_description}</ShowCode>
      </h2>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {images.map((img, index) => (
          <div key={index} className={styles.ImageContainer}>
            <img src={publicResource(img)} alt={name} className="cover-image max-w-80 max-h-80 hover:scale-125 transition-all duration-200" />
          </div>
        ))}
      </div>
      {tech && <div className="flex items-center justify-center m-4 gap-2"><span>Build With: {tech.toUpperCase()}</span><Icons icon={tech} size='25px' /></div>}
      {!!description && (
        <p className='my-5'>
          <ShowCode tag="p">{description}</ShowCode>
        </p>
      )}
      {video && (
        <div className="flex flex-col my-4 justify-center gap-3 items-center">
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
