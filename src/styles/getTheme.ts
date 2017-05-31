import { fade, darken, lighten } from "../common/colorManipulator";
import "./fonts/segoe-mdl2-assets";
import prefixAll from "../common/prefixAll";

export default function getTheme(themeName: "Dark" | "Light" = "Dark", accent = "#0078D7"): ReactUWP.ThemeType {
  const isDark = themeName === "Dark";
  const baseHigh = isDark ? "#fff" : "#000";
  const altHigh = isDark ? "#000" : "#fff";

  return {
    themeName,
    fontFamily: "Segoe UI, Microsoft YaHei, Open Sans, sans-serif, Hiragino Sans GB, Arial, Lantinghei SC, STHeiti, WenQuanYi Micro Hei, SimSun",
    iconFontFamily: "Segoe MDL2 Assets",

    accent,
    accentLighter1: lighten(accent, 0.5),
    accentLighter2: lighten(accent, 0.7),
    accentLighter3: lighten(accent, 0.9),
    accentDarker1: darken(accent, 0.5),
    accentDarker2: darken(accent, 0.7),
    accentDarker3: darken(accent, 0.9),

    baseLow: fade(baseHigh, 0.2),
    baseMediumLow: fade(baseHigh, 0.4),
    baseMedium: fade(baseHigh, 0.6),
    baseMediumHigh: fade(baseHigh, 0.8),
    baseHigh,

    altLow: fade(altHigh, 0.2),
    altMediumLow: fade(altHigh, 0.4),
    altMedium: fade(altHigh, 0.6),
    altMediumHigh: fade(altHigh, 0.8),
    altHigh,

    listLow: fade(baseHigh, 0.1),
    listMedium: fade(baseHigh, 0.2),
    listAccentLow: fade(accent, 0.6),
    listAccentMedium: fade(accent, 0.8),
    listAccentHigh: fade(accent, 0.9),

    chromeLow: isDark ? "#171717" : "#f2f2f2",
    chromeMediumLow: isDark ? "#2b2b2b" : "f2f2f2",
    chromeMedium: isDark ? "#1f1f1f" : "#e6e6e6",
    chromeHigh: isDark ? "#767676" : "#ccc",

    chromeAltLow: isDark ? "#f2f2f2" : "#171717",
    chromeDisabledLow: isDark ? "#858585" : "#7a7a7a",
    chromeDisabledHigh: isDark ? "#333" : "#ccc",

    chromeBlackLow: fade("#000", 0.2),
    chromeBlackMediumLow: fade("#000", 0.4),
    chromeBlackMedium: fade("#000", 0.8),
    chromeBlackHigh: "#000",
    chromeWhite: "#fff",

    isDarkTheme: isDark,
    prepareStyles: prefixAll(),

    typography: {
      header: {
        fontWeight: "lighter",
        fontSize: 46,
        lineHeight: "56px"
      },
      subHeader: {
        fontWeight: "lighter",
        fontSize: 34,
        lineHeight: "40px"
      },

      title: {
        fontWeight: "lighter",
        fontSize: 24,
        lineHeight: "28px"
      },
      subTitle: {
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: "24px"
      },
      subTitleAlt: {
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: "20px"
      },

      base: {
        fontWeight: 300,
        fontSize: 15,
        lineHeight: "20px"
      },
      baseAlt: {
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: "20px"
      },
      Body: {
        fontWeight: 200,
        fontSize: 15,
        lineHeight: "20px"
      },

      captionAlt: {
        fontWeight: "lighter",
        fontSize: 13,
        lineHeight: "16px"
      },
      caption: {
        fontWeight: "lighter",
        fontSize: 12,
        lineHeight: "14px"
      }
    },
    zIndex: {
      listView: 10,
      calendarView: 20,
      flyout: 100,
      tooltip: 101,
      dropDownMenu: 102,
      commandBar: 200,
      contentDialog: 300
    }
  };
}
