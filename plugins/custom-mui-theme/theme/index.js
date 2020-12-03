import { createMuiTheme } from '@material-ui/core/styles';
import themeData from "./theme.json";

const themeName = 'Awesome Learning';
export default createMuiTheme({ ...themeData, themeName });
