const urls = [
  {
    label: "Homepage",
    url: "https://www.internetsociety.org/",
  },
];

module.exports = {
  defaults: {
    standard: "WCAG2AA",
    runners: ["vnu"],
  },

  urls: urls.map(({ url }) => url),
};
