import React from "react";
import { shallow, mount } from "enzyme";
import setup from "../test/setup";

// Exercise 1
const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test.skip("Title outputs the text given as props", () => {
  // YOUR CODE HERE...
  const wrapper = shallow(<Icon iconType="trash" altText="Delete" />);
  expect(wrapper.props()).toEqual({
    alt: "Delete",
    src: "https://cdn.wayfair.com/static/icons/trash.svg"
  });
  expect(wrapper.type()).toBe("image");
});

// Exercise 2
const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} />
    {children}
  </button>
);

test.skip("IconButton renders an Icon and button text", () => {
  const wrapper = mount(
    <IconButton iconType="trash" altText="Delete">
      Click Me
    </IconButton>
  );
  // YOUR CODE HERE...
  expect(wrapper.find(Icon).exists()).toBe(true);
  expect(wrapper.find(Icon).props()).toEqual({
    altText: "Delete",
    iconType: "trash"
  });
  expect(wrapper.text()).toBe("Click Me");
});

// Exercise 3
const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

test.skip("Dialog renders button text when open and null when not open", () => {
  const wrapper = mount(
    <Dialog isOpen={false}>
      <IconButton iconType="trash" altText="Delete">
        Click Me
      </IconButton>
    </Dialog>
  );
  // YOUR CODE HERE...
  expect(wrapper.find(IconButton).exists()).toBe(false);
  wrapper.setProps({ isOpen: true });
  expect(wrapper.find(IconButton).exists()).toBe(true);
});

// Exercise 4
const SalesDialog = ({ isOpen }) => {
  return (
    <Dialog isOpen={isOpen}>
      <div className="Dialog-contentWrapper">
        <p className="Dialog-salesText" data-enzyme-id="ComplexDialogText">
          If you buy now, get 25% off on our finest widgets!
        </p>
        <IconButton
          iconType="check"
          altText="Check Mark"
          data-enzyme-id="ComplexDialogSuccessButton"
        >
          Buy Now
        </IconButton>
        <IconButton
          iconType="x"
          altText="Dismiss X"
          data-enzyme-id="ComplexDialogDismissButton"
        >
          Dismiss
        </IconButton>
      </div>
    </Dialog>
  );
};

test.skip("SalesDialog renders sales text and a button with the right href", () => {
  const wrapper = mount(<SalesDialog isOpen />);
  expect(wrapper.find(`[data-enzyme-id="ComplexDialogText"]`).text()).toBe(
    "If you buy now, get 25% off on our finest widgets!"
  );
  expect(wrapper.find(IconButton).length).toBe(2);
  expect(
    wrapper.find('[data-enzyme-id="ComplexDialogSuccessButton"]').text()
  ).toBe("Buy Now");
  expect(
    wrapper.find('[data-enzyme-id="ComplexDialogDismissButton"]').text()
  ).toBe("Dismiss");
});
