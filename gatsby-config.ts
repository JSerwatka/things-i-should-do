import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Things I Should Do`,
        siteUrl: `https://www.things-isd.tld`,
    },
    plugins: [
        "gatsby-plugin-mantine",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            // __key: "images" as PluginRef,
        },
    ],
};

export default config;
