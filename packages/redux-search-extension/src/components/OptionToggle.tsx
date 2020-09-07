import React, { FC } from 'react';
import { DisplaySection } from '../constants';

export interface OptionToggleProps {
  display: DisplaySection;
  setDisplay: (display: DisplaySection) => void;
}

export const OptionToggle: FC<OptionToggleProps> = ({
  display,
  setDisplay,
}) => {
  const active = display === DisplaySection.options;

  return (
    <button
      className={`option-toggle ${active ? 'active' : ''}`}
      onClick={() => {
        const updateDisplay = active
          ? DisplaySection.results
          : DisplaySection.options;
        setDisplay(updateDisplay);
      }}
    >
      {active && (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />
          </g>
        </svg>
      )}
      {!active && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M50,28.794v-7.69l-7.343-1.199c-0.382-1.325-0.91-2.599-1.575-3.802l4.278-6.098l-5.438-5.436l-6.021,4.328 c-1.213-0.675-2.497-1.209-3.83-1.593l-1.28-7.306h-7.69L19.914,7.28c-1.344,0.381-2.629,0.909-3.837,1.576l-6.005-4.29L4.636,10 l4.223,6.038c-0.68,1.222-1.218,2.516-1.605,3.861L0,21.107v7.686l7.242,1.283c0.385,1.344,0.923,2.638,1.605,3.86l-4.28,5.986 L10,45.362l6.047-4.235c1.218,0.674,2.506,1.206,3.845,1.588l1.213,7.287h7.685l1.297-7.307c1.338-0.39,2.62-0.927,3.827-1.603 l6.085,4.27l5.438-5.441l-4.347-6.035c0.666-1.205,1.192-2.48,1.571-3.805L50,28.794z M25,32c-3.86,0-7-3.141-7-7c0-3.86,3.14-7,7-7 c3.859,0,7,3.14,7,7C32,28.859,28.859,32,25,32z" />
        </svg>
      )}
    </button>
  );
};
