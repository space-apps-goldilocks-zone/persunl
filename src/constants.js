import tipSunscreenIcon from "./images/tip-sunscreen.png";
import tipWarningIcon from "./images/tip-warning.png";
import tipShirtIcon from "./images/tip-shirt.png";
import tipSunIcon from "./images/tip-sun.png";
import tipGoodIcon from "./images/tip-good.png";
import tipUnderIcon from "./images/tip-under.png";

export const DAYS = {
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
  SUN: 7
};

export const WEATHER_COND = {
  SUNNY: "Sunny",
  PARTLY_CLOUDY: "Partly Cloudy",
  CLOUDY: "Fully Cloudy"
};

export const TIPS = {

  COVER_UP: {
    icon: tipShirtIcon,
    message: "Try to cover up and avoid more than 30 mins in direct sunlight.",
    title: "Important!"
  },
  SUNSCREEN: {
    icon: tipSunscreenIcon,
    message: "Today you should be applying sunscreen every 2 hours.",
    title: "Important!"
  },
  WARNING: {
    icon: tipWarningIcon,
    message: "You are apporaching your daily exposure limit. Avoid the sun.",
    title: "WARNING!"
  },
  VITAMIN_D_GOOD: {
    icon: tipGoodIcon,
    message: "You boosted your Vitamin D.",
    title: "Woohoo!"
  },
  VITAMIN_D_UNDER: {
    icon: tipUnderIcon,
    message: "You didn't get enough sunlight to boost your Vitamin D.",
    title: "Important!"
  },
  VITAMIN_D: {
    icon: tipSunIcon,
    message: "Get your daily Vitamin D fix. Get outside for 30 mins.",
    title: "Find sunshine!"
  }
};