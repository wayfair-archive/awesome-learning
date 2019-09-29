/**
 * Block spec
 *
 * @author Evan Cooper <evcooper@wayfair.com>
 * @copyright 2019 Wayfair LLC - All rights reserved
 */
import React from 'react';
import {render} from '@testing-library/react';
import Block from './Block';

describe('Block element', () => {
  it('Renders a div if no element type is passed', () => {
    const {getByText} = render(<Block>hey</Block>);
    expect(getByText('hey').tagName).toBe('DIV');
  });
  it("Renders a p tag if 'p' is passed to the is prop", () => {
    const {getByText} = render(<Block is="p">hey</Block>);
    expect(getByText('hey').tagName).toBe('P');
  });
});
