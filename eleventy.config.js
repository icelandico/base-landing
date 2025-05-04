import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async filename => {
    const metadata = await Image(`./src/assets/icons/${filename}`, {
      formats: ["svg"],
      dryRun: true,
    })
    return metadata.svg[0].buffer.toString()
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    },
  };
};
