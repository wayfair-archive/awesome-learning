import { createMuiTheme } from '@material-ui/core/styles';
import themeData from "./theme.json";

const themeName = 'Awesome Learning Public';
export default createMuiTheme({ ...themeData, themeName });
