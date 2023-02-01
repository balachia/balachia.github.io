module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/fonts");
  eleventyConfig.addPassthroughCopy("_src/files");
  eleventyConfig.addPassthroughCopy("_src/CNAME");

  // Return your Object options:
  return {
    dir: {
      input: "_src",
      includes: "_includes",
      output: "docs"
    }
  }
};
