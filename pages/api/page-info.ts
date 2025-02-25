const PAGES = {
  items: [
    {
      title: "patata",
      slug: "potato",
      content: [
        {
          type: "zigzag",
          left: {
            src:
              "https://static.turbosquid.com/Preview/2019/08/05__03_59_25/Potato_05_Game_Ready_Thumbnail0001.jpg77E3196D-E8E8-4888-AEAC-797D98C28914Zoom.jpg",
            alt: "patata image",
          },
          right: {
            title: "Habemus patata",
            description: "Esto es una patata",
          },
        },
      ],
    },
    {
      title: "limon",
      slug: "lemon",
      content: [
        {
          type: "zigzag",
          left: {
            src:
              "https://i5.walmartimages.ca/images/Enlarge/094/504/6000200094504.jpg",
            alt: "lemon image",
          },
          right: {
            title: "Habemus lemonade",
            description: "Esto es un limon",
          },
        },
      ],
    },
    {
      title: "platano",
      slug: "banana",
    },
  ],
};

export default (req, res) => {
  res.statusCode = 200;
  const pageSlug = req.query.slug;
  if (pageSlug) {
    const page = PAGES.items.find((page) => page.slug === pageSlug);
    if (page) {
      res.json({ items: [page] });
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.json(PAGES);
  }
};
