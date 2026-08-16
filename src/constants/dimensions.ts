import {RFValue} from "react-native-responsive-fontsize"
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CARD_WIDTH = width * 0.78;
export const CARD_SPACING = 8;


// export const SPACING = {
//   xs: 2,
//   xs2: 3,
//   sm: 4,
//   sm2: 5,
//   md: 8,
//   md2: 10,
//   lg: 12,
//   lg2: 13,
//   xl: 15,
//   xl2: 16,
//   xxl: 20,
//   xxxl: 24,
// };

export const FONT_SIZES = {
  xxs: RFValue(9),
  xs: RFValue(10),
  xs2: RFValue(11),
  sm: RFValue(12),
  sm2: RFValue(13),
  md: RFValue(14),
  md2: RFValue(15),
  lg: RFValue(16),
  lg2: RFValue(18),
  xl: RFValue(20),
  xl2: RFValue(22),
  xxl: RFValue(24),
};

export const FONT_WEIGHT = {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
};

export const BORDER_RADIUS = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  round: "50%" as const,
};

// export const HEIGHTS = {
//   tabBar: 65,
//   header: 50,
//   inputSmall: 40,
//   inputMedium: 50,
//   inputLarge: 55,
//   carouselCard: 200,
//   reviewCardImage: 108,
//   cardMedium: 90,
//   closeButton: 30,
// };