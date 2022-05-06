const views = {
  choose(url, games) {
    return games.find((obj) => obj.name === url);
  },
};

module.exports = views;
