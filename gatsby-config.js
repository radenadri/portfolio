module.exports = {
  siteMetadata: {
    title: `🤙🏻 Adriana Eka Prayudha`,
    author: {
      name: `Adriana Eka Prayudha`,
      summary: `Full stack developer, blogger and a passionate learner.`,
    },
    description: `I'm a Full Stack Developer who loves tinkering with Laravel, React, and Wordpress. Currently learning to writing something awesome related to tech. I also spend a lot of time surfing on my laptop exploring the UI/UX stuff or racking my brain to solve interesting problems.`,
    siteUrl: `https://radenadri.wtf`,
    social: {
      email: `radenadriep@gmail.com`,
      github: `radenadri`,
      linkedin: `radenadri`,
      twitter: `radenadri`,
    },
    workExperience: [
      {
        'title': 'Full Stack Developer',
        'company': 'Homework',
        'companyDescription': 'Full-stack web development studio based in Bandung, Indonesia',
        'companyUrl': 'https://wearehomework.id',
        'years': 'June 2021 - Present',
        'jobDescription': 'Playing with Laravel, React, and Wordpress to build a full-stack web application for clients',
        'logo': 'homework.png',
      },
      {
        'title': 'Full Stack Developer',
        'company': 'PT. Pentacode Digital',
        'companyDescription': 'Digital agency in Bandung, Indonesia',
        'companyUrl': 'https://pentacode.id',
        'years': 'August 2019 - Present',
        'jobDescription': 'Responsible for providing the solution regarding how the website works or how the website looks. Structuring the data so it can be consumed by mobile apps too. Making sure the website works well as client expected.',
        'logo': 'penta.png',
      }
    ],
    projects: [
      {
        'title': 'CinemaLand',
        'url': 'https://cinemaland.netlify.app',
        'description': 'CinemaLand is a movie listing web apps to showing the usage of OMDB API.',
        'date': '2022-05-19',
      },
      {
        'title': 'Cooktopia',
        'url': 'https://cooktopia.netlify.app',
        'description': 'Cooktopia is a website that allows users to share their recipes with others. Users can also look for recipes based on categories. The website is built with Gatsby and Contentful.',
        'date': '2022-05-09',
      },
      {
        'title': 'Countdown',
        'url': 'https://bns-timer.netlify.app',
        'description': 'Frontend mentor challenge to show the countdown based on user preferred values.',
        'date': '2022-05-10',
      },
      {
        'title': 'Advice Generator',
        'url': 'https://bns-advice-generator.netlify.app',
        'description': 'Frontend mentor challenge to show the advice based on Advice Slip API.',
        'date': '2022-05-11',
      },
      {
        'title': 'Tic Tac Toe',
        'url': 'https://bns-tictactoe.netlify.app',
        'description': 'Frontend mentor challenge to show the tic tac toe game.',
        'date': '2022-05-12',
      },
      {
        'title': 'devprofile',
        'url': 'https://bns-devprofile.netlify.app',
        'description': 'Frontend mentor challenge to fetch the GitHub profile based on username.',
        'date': '2022-05-13',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/content/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/icon.png`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adriana Eka Prayudha Journal`,
        short_name: `Adriana Eka Prayudha`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
}
