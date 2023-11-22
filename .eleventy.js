const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const dateFilterPlugin = require('nunjucks-date-filter');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy assets
  eleventyConfig.addPassthroughCopy("assets/img/**/*")
  eleventyConfig.addPassthroughCopy("assets/js/**/*")
  eleventyConfig.addPassthroughCopy("assets/fonts/**/*")
  
  // Copy favicon stuff
  eleventyConfig.addPassthroughCopy("*.png")
  eleventyConfig.addPassthroughCopy("*.svg")
  eleventyConfig.addPassthroughCopy("*.ico")
  eleventyConfig.addPassthroughCopy("site.webmanifest")
  eleventyConfig.addPassthroughCopy("browserconfig.xml")

  eleventyConfig.addFilter("toISO", (dateObj) => {
    return dateObj.toISOString().substring(0, 10);
  });
};
