import { LogLevel } from "./lib/logger/logger";

export const config = {
  site: {
    name: "LensKandy",
    description: "",
    colorScheme: "light",
    themeColor: "#090a0b",
    primaryColor: "neonBlue",
    url: 'https"//localhost:3000',
    // apiBaseUrl: "http://localhost:8080/api/v1/",
    // apiimageBaseUrl: "http://192.168.0.103:8080/api/v1/images/",
    // apiBaseUrl: "http://192.168.0.101:8080/api/v1/",
    // apiimageBaseUrl: "http://localhost:8080/api/v1/images/",
    apiBaseUrl: "https://lenskandy.rohtashtalan.com/api/v1/",
    apiimageBaseUrl: "https://lenskandy.rohtashtalan.com/api/v1/images/",
  },
  dateFormat: "MMMM DD, YYYY hh:mm A",
  logLevel: LogLevel.ALL,
};
