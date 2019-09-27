import React from 'react';
import renderer from 'react-test-renderer';
import SectionTitle from './SectionTitle';

describe('Section Title', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SectionTitle>Section Title</SectionTitle>)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        style={
          Object {
            "marginBottom": "0px",
            "marginLeft": "0px",
            "marginRight": "0px",
            "marginTop": "0px",
          }
        }
      >
        <h2
          className="SectionTitle"
        >
           
          Section Title
           
        </h2>
      </div>
    `);
  });
});
