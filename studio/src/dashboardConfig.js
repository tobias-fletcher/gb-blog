export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620d99eb7d332d0084a12ee9",
                  title: "Sanity Studio",
                  name: "gb-blog-studio",
                  apiId: "f51bd1a3-da0c-4793-9d98-6a8347d5396a",
                },
                {
                  buildHookId: "620d99eb08c09ccf3bf0653e",
                  title: "Blog Website",
                  name: "gb-blog-web",
                  apiId: "943873cd-0890-4e17-b56b-b50f9965c3e0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tobias-fletcher/gb-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://gb-blog-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
