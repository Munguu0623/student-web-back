module.exports = {
  routes: [
    {
      method: "GET",
      path: "/profession-card-names/:slug",
      handler: "profession-card-name.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
