module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "next",
        "turbo",
        "prettier",
    ],
    plugins: ["@typescript-eslint"],

    settings: {
        react: {
            version: "detect",
        },
    },

    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
