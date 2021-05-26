// Workaround to solve TypeError: window.matchMedia is not a function is mentioned in Jest Documentation:
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// but solved with other way here
// https://stackoverflow.com/questions/64813447/cannot-read-property-addlistener-of-undefined-react-testing-library

delete window.matchMedia;
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});
