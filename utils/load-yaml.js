const path = require(`path`);
const fs = require(`fs`);
const yaml = require(`js-yaml`);

/**
 * Import yaml in server-side code in a way that works when the site
 * is run as a theme.
 *
 * @example
 * ```
 * const docsLinks = loadYaml(`src/data/sidebar/docs-links.yaml`)
 * ```
 */
function loadYaml(yamlPath) {
  return yaml.safeLoad(
    fs.readFileSync(path.resolve(`${__dirname}/../${yamlPath}`))
  );
}

module.exports = { loadYaml };
