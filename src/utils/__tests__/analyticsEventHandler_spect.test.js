import analyticsEventHandler from "../analyticsEventHandler";

describe("Google analytics event dispatch handler", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("dispatches an event if the gtag is present", () => {
    const gtag = jest.fn();
    window.gtag = gtag;
    analyticsEventHandler("outboundLink", "forEach exercises");
    expect(gtag).toBeCalledWith("event", "click", {
      event_category: "outboundLink",
      event_label: "forEach exercises"
    });
  });
  it("doesn't dispatch an event if gtag is not present on the window object", () => {
    delete window.gtag;
    expect(() =>
      analyticsEventHandler("outboundLink", "forEach exercises")
    ).toThrowError("there is no gtag here");
  });
});
