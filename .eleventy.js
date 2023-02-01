module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "_src",
      includes: "_includes",
      output: "docs"
    }
  }
};
