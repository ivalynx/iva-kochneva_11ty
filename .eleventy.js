const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Подключаем плагин интернационализации
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "bg", // Язык по умолчанию
    errorMode: "allow-fallback" // Если перевод отсутствует, можно показать дефолтную страницу
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};