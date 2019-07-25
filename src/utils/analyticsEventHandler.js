const analyticsEventHandler = (eventCategory = "exercise click", eventLabel) => {
  if (window.gtag) {
    window.gtag("event", "click", {
      event_category: eventCategory,
      event_label: eventLabel
    });
  } else {
    throw new Error('there is no gtag here')
  }
};

export default analyticsEventHandler;