import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CardData } from './CardData';
import './Card.scss';
const Card = () => {
  const renderContent = () =>
    CardData.map(({ emoji, color }, i) => {
      return (
        <div key={i} className="card">
          <div
            onClick={() => (document.body.style.backgroundColor = color)}
            className="em_oji"
            style={{ backgroundColor: color }}
          >
            <p className="emo_ji_effect">{emoji}</p>
            <p>Click Me</p>
          </div>

          <div>
            <CopyToClipboard text={color}>
              <p className="texxt" style={{ color }}>
                {color}
              </p>
            </CopyToClipboard>
          </div>
        </div>
      );
    });
  return <div className="card-wrapper">{renderContent()}</div>;
};

Card.defaultProps = {
  emoji: 'Emoji',
  color: '#a46060',
};

export default Card;
