// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';

describe('Menu', () => {
  const props = {
    menu: [
      {
        label: 'Item 0',
        path: '/#0/',
        target: 'internal'
      },
      {
        label: 'Item 1',
        path: '/#1/',
        target: 'external'
      },
      {
        label: 'Item 2',
        path: '/#2/',
        target: 'internal'
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Menu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
