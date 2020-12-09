exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-imports',
    options: {
      '@material-ui/core': {
        /* eslint-disable-next-line */
        transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/icons': {
        /* eslint-disable-next-line */
        transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/lab': {
        /* eslint-disable-next-line */
        transform: '@material-ui/lab/esm/${member}',
        preventFullImport: true,
      },
    },
  });
};
