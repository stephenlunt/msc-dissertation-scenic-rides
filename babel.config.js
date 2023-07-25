/**
 * File description: Default babel config file supplied with the project set up,
 * no changes have been made.
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
  };
};
