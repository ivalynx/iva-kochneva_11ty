const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "bg",
    errorMode: "allow-fallback" // Если перевод отсутствует, можно показать дефолтную страницу
  });
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = require('fs').readFileSync('_site/404.html');
        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      }
    }
  });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};