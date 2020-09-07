import React, { FC } from 'react';

interface VisualizeProps {
  items: {
    accessor: (string | number)[];
    depth: number;
    type: string;
    value: string | number | boolean | any[];
  }[];
}

export const Visualize: FC<VisualizeProps> = ({ items }) => {
  return (
    <div className="rs-visualize-wrapper">
      {!items ||
        (!items.length && <div className="rs-visualize-item">No results</div>)}
      {items &&
        !!items.length &&
        items.map(({ accessor, depth, type, value }) => (
          <div className="rs-visualize-item">
            <div className="item-accessor">
              {accessor.map((v: string) => (
                <span>
                  {typeof v === 'number' ? `[${v}]` : v}
                  <em>{'>'}</em>
                </span>
              ))}
            </div>
            <div className="item-value">{value}</div>
          </div>
        ))}
    </div>
  );
};
