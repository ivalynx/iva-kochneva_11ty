import { EleventyI18nPlugin } from "@11ty/eleventy";
import fs from "node:fs"; // Правильный импорт для файловой системы в ESM

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "bg", // Основной язык (в корне)
    errorMode: "allow-fallback",
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        if (fs.existsSync('_site/404.html')) {
          const content_404 = fs.readFileSync('_site/404.html');
          bs.addMiddleware("*", (req, res) => {
            res.write(content_404);
            res.end();
          });
        }
      }
    }
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });
  eleventyConfig.ignores.add("src/assets/scss/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};