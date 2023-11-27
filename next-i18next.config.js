/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["he", "ru", "en", "ar"],
        localeExtension: "yml",
        localeDetection: false,
    },
    localePath: require("path").resolve("./public/locales") || "/locales",
    // localePath:
    //     typeof window !== "undefined"
    //         ? require("path").resolve("./public/locales")
    //         : "./public/locales",
    reloadOnPrerender: process.env.NODE_ENV === "development",
};
