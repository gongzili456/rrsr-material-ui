import {
  grey700,
  grey900,
  blueGrey100,
  blueGrey500,
  darkBlack,
  grey300,
  lightBlack,
  purpleA200,
  white
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'

export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 50, // 64
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 14,
    desktopLeftNavMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: grey700,
    primary2Color: darkBlack,
    primary3Color: lightBlack,
    accent1Color: purpleA200,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: blueGrey500,
    alternateTextColor: grey300,
    canvasColor: white,
    borderColor: grey700,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: grey700
  },
  avatar: {
    borderColor: white
  },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'
}
