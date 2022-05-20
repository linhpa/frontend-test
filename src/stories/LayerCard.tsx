import React from 'react';
import './layerCard.css';

interface LayerCardProps {
  /**
   * Is this selected?
   */
  selected?: boolean;
  /**
   * Layer card content
   */
  label: String;
  /**
   * What background color to use
   */
  color?: string;
  /**
   * Image source
   */
  imgSrc: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LayerCard = ({
  label,
  selected,
  color,
  imgSrc,
  ...props
}: LayerCardProps) => {
  const [selectedState, setSelectedState] = React.useState(selected)
  const mode = React.useMemo(() => {
    return selectedState ? 'storybook-layerCard--selected' : 'storybook-layerCard';
  }, [selectedState]);

  const toggleSelected = () => setSelectedState(!selectedState);

  const image = require(`./assets/${imgSrc}`);

  return (
    <div
      className={[mode].join(' ')}
      style={{
        '--hover-color': color
      } as React.CSSProperties}
      {...props}
      onClick={toggleSelected}
    >
      <img
        src={image}
        className='storybook-layerCard-img'
      />
      <div
        className='storybook-layerCard-labelContainer'
      >
        <input
          type='checkbox'
          checked={selectedState}
          className='storybook-layerCard-checkbox'
          style={{ accentColor: color }}
          onClick={toggleSelected}
        />
        <p className='storybook-layerCard-label'>{ label }</p>
      </div>
    </div>
  );
};
