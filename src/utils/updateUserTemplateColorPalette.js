module.exports.updateUserTemplateColorPalette = (colorPalette, cssData) => {
  const parseColorPalette = JSON.parse(colorPalette);

  let updatedCssData = cssData;

  for (const key in parseColorPalette) {
    const regex = new RegExp(
      `--${key}: rgba\\(\\d{1,3}, \\d{1,3}, \\d{1,3}, (0(\\.\\d+)?|1(\\.0+)?)\\);`
    );

    updatedCssData = updatedCssData.replace(
      regex,
      `--${key}: ${parseColorPalette[key]};`
    );
  }

  return updatedCssData;
};
