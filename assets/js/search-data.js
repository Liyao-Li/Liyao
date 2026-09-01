// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Liyao/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in Conference and Journal.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Liyao/publications/";
          },
        },{id: "nav-project",
          title: "project",
          description: "Research projects from NEMO Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Liyao/project/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-cyclops-is-accepted-by-nsdi-2024",
          title: 'Cyclops is accepted by NSDI 2024.',
          description: "",
          section: "News",},{id: "news-ohmscanner-is-accepted-by-mobicom-2025",
          title: 'OhmScanner is accepted by MobiCom 2025.',
          description: "",
          section: "News",},{id: "news-i-passed-my-oqe-exam",
          title: 'I passed my OQE exam.',
          description: "",
          section: "News",},{id: "news-our-work-ohmscanner-has-been-awarded-the-artifacts-available-artifacts-evaluated-funtional-reusable-badges",
          title: 'Our work OhmScanner has been awarded the Artifacts Available, Artifacts Evaluated Funtional/Reusable badges....',
          description: "",
          section: "News",},{id: "news-our-work-orbweaver-has-been-accepted-by-mobicom-2026",
          title: 'Our work OrbWeaver has been accepted by MobiCom 2026.',
          description: "",
          section: "News",},{id: "news-i-passed-my-dissertation-proposal-defence",
          title: 'I passed my dissertation proposal defence.',
          description: "",
          section: "News",},{id: "news-our-work-argus-has-been-conditionally-accepted-to-sensys-2027-congrats-to-linghui",
          title: 'Our work Argus has been conditionally accepted to SenSys 2027. Congrats to Linghui!...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/Liyao/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
