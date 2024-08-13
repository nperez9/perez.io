import React from 'react';
import { ShowCode } from '../../library';
import { publicResource } from '../../utils';

const style = {
  '.tec-group-title': {
    marginBottom: '15px',
    fontSize: '18px',
  },
  '.tecs-container': {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    '.tec-item': {
      width: '170px',
      padding: '15px',
      '> img': {
        maxWidth: '130px',
        height: '130px',
        margin: 'auto',
        display: 'block',
        borderRadius: 5,
      },
      '> span': {
        marginTop: '5px',
        display: 'inline-block',
        fontSize: '1.25em'
      },
    },
  },
};

const TecnologiesGroup = ({ tecGroup }) => {
  return (
    <div className="tec-group" css={style}>
      <h5 className="tec-group-title">
        <ShowCode tag="td">{tecGroup.groupName}:</ShowCode>
      </h5>
      <div className="tecs-container">
        {tecGroup.tecs.map((t) => {
          return (
            <div className="tec-item" key={t.name}>
              <img src={publicResource(`/images/techlogos/${t.logo}`)} alt={t.name} />
              <span>{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TecnologiesGroup;
