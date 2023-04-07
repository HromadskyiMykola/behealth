const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
           are specified*/
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};

// if first config dosn't work correctly, try this one:

// const path = require("path");

// const resolvePath = (p) => path.resolve(__dirname, p);

// module.exports = {
//   webpack: {
//     alias: {
//       "@components": resolvePath("./src/components"),
//       "@assets": resolvePath("./src/assets"),
//       "@services": resolvePath("./src/services"),
//       "@pages": resolvePath("./src/pages"),
//       "@atomic": resolvePath("./src/components/atomic"),
//       // add paths
//     },
//   },
// };
