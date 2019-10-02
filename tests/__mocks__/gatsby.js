const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: 'Link',
  StaticQuery: 'StaticQuery'
};
