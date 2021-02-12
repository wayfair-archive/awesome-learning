import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const Tag = withStyles((theme) => ({
  root: {
    display: 'inline-block',
    textAlign: 'center',
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(2),
  },
}))(Button);

export default Tag;
