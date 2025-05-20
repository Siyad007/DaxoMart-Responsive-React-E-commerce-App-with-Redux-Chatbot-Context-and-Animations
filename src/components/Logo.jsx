
import React, { useEffect } from 'react';
import { animate } from 'animejs';

const Logo = () => {
  useEffect(() => {
    animate(['feTurbulence', 'feDisplacementMap'], {
      baseFrequency: 0.05,
      scale: 15,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });

    animate('polygon', {
      points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000,
    });
  }, []);

  return (
    <div className="large centered row">
      <svg width="50" height="50" viewBox="0 0 128 128">
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            numOctaves="2"
            baseFrequency="0"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="1"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <polygon
          points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"
          fill="currentColor"
          style={{ filter: 'url(#displacementFilter)' }}
        />
      </svg>
    </div>
  );
};

export default Logo;
