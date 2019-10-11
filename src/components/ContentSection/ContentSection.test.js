import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentSection from './ContentSection';


describe('ContentSection', () => {
  const props = {
    className: 'className',
    title: 'title',
    subTitle: 'subTitle',
    isLight: true,
    contentAlignment: 'left',
    titleAlignment: 'left',
  }

  it('renders basic version with just required children', () => {
    const {container, getByText} = render(
      <ContentSection>
        <section>children</section>
      </ContentSection>
    );

    expect(container.children).toHaveLength(1);
    expect(container.firstChild.tagName).toBe('DIV');
    expect(container.firstChild).toHaveClass('ContentSection');
    expect(container.firstChild.children).toHaveLength(1);
    expect(container.firstChild.firstChild.tagName).toBe('DIV');
    expect(container.firstChild.firstChild).toHaveClass('ContentSection-content');
    expect(container.firstChild.firstChild.firstChild.tagName).toBe('SECTION');
    expect(getByText('children')).toBeTruthy();
  });

  it('renders correctly with a given title', () => {
    const {container, getByText} = render(
      <ContentSection title={props.title}>
        <section></section>
      </ContentSection>
    );
    
    expect(container.firstChild.firstChild.tagName).toBe('HEADER');
    expect(container.firstChild.firstChild).toHaveClass('ContentSection-title');
    expect(container.firstChild.firstChild).not.toHaveClass('ContentSection-title--textLight');
    expect(container.firstChild.firstChild.children).toHaveLength(1);
    expect(container.firstChild.firstChild).toContainElement(getByText(props.title));
    expect(getByText(props.title)).toBeTruthy();
    expect(getByText(props.title).tagName).toBe('H1');
  });

  it('renders correctly with given title and subtitle', () => {
    const {container, getByText} = render(
      <ContentSection title={props.title} subTitle={props.subTitle}>
        <section></section>
      </ContentSection>
    );
    
    expect(container.firstChild.firstChild.tagName).toBe('HEADER');
    expect(container.firstChild.firstChild).toHaveClass('ContentSection-title');
    expect(container.firstChild.firstChild).not.toHaveClass('ContentSection-title--textLight')
    expect(container.firstChild.firstChild.children).toHaveLength(2);
    expect(container.firstChild.firstChild).toContainElement(getByText(props.title));
    expect(container.firstChild.firstChild).toContainElement(getByText(props.subTitle));
    expect(getByText(props.title)).toBeTruthy();
    expect(getByText(props.title).tagName).toBe('H1');
    expect(getByText(props.subTitle)).toBeTruthy();
    expect(getByText(props.subTitle).tagName).toBe('H2');
  });

  it('adds classes if respective props are given', () => {
    let {container} = render(<ContentSection {...props}><section></section></ContentSection>);

    // isLight & titleAlignment props
    expect(container.firstChild.children[0].tagName).toBe('HEADER');
    expect(container.firstChild.children[0]).toHaveClass('ContentSection-title');
    expect(container.firstChild.children[0]).toHaveClass('ContentSection-title--textLight')
    expect(container.firstChild.children[0]).toHaveClass('ContentSection-title--alignLeft');
    expect(container.firstChild.children[0]).not.toHaveClass('ContentSection-title--alignCenter');

    // className & contentAlignment props
    expect(container.firstChild.children[1].tagName).toBe('DIV');
    expect(container.firstChild.children[1]).toHaveClass('ContentSection-content');
    expect(container.firstChild.children[1]).toHaveClass(props.className);
    expect(container.firstChild.children[1]).toHaveClass('ContentSection-content--alignLeft');
    expect(container.firstChild.children[1]).not.toHaveClass('ContentSection-content--alignCenter');

    props.className = undefined;
    props.isLight = false;
    props.titleAlignment = 'center';
    props.contentAlignment = 'center';

    ({container} = render(<ContentSection {...props}><section></section></ContentSection>));

    // isLight & titleAlignment props
    expect(container.firstChild.children[0].tagName).toBe('HEADER');
    expect(container.firstChild.children[0]).toHaveClass('ContentSection-title');
    expect(container.firstChild.children[0]).not.toHaveClass('ContentSection-title--textLight')
    expect(container.firstChild.children[0]).not.toHaveClass('ContentSection-title--alignLeft');
    expect(container.firstChild.children[0]).toHaveClass('ContentSection-title--alignCenter');

    // className & contentAlignment props
    expect(container.firstChild.children[1].tagName).toBe('DIV');
    expect(container.firstChild.children[1]).toHaveClass('ContentSection-content');
    expect(container.firstChild.children[1]).not.toHaveClass('className');
    expect(container.firstChild.children[1]).not.toHaveClass('ContentSection-content--alignLeft');
    expect(container.firstChild.children[1]).toHaveClass('ContentSection-content--alignCenter');
  });

  it('adds multiple children correctly', () => {
    const {container, getAllByText} = render(
      <ContentSection>
        <section>child</section>
        <section>child</section>
        <section>child</section>
      </ContentSection>
    );

    expect(getAllByText('child')).toHaveLength(3);
    expect(container.children).toHaveLength(1);
    expect(container.firstChild.tagName).toBe('DIV');
    expect(container.firstChild).toHaveClass('ContentSection');
    expect(container.firstChild.children).toHaveLength(1);
    expect(container.firstChild.firstChild.tagName).toBe('DIV');
    expect(container.firstChild.firstChild).toHaveClass('ContentSection-content');
    expect(container.firstChild.firstChild.children).toHaveLength(3);
    expect(container.firstChild.firstChild.children[0].tagName).toBe('SECTION');
    expect(container.firstChild.firstChild.children[1].tagName).toBe('SECTION');
    expect(container.firstChild.firstChild.children[2].tagName).toBe('SECTION');
  });
});
