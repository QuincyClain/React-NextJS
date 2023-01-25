import React from 'react';

//not html

const jsxa: JSX.Element = <div tabIndex={0}>{1 + 1}</div>
const jsxb: JSX.Element = React.createElement('div', { tabIndex: 0 }, 1 + 1);

//a equals b but instead of calling react create method using JSX

// after render with react render or something idk