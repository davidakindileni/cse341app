const davidRoute = (req, res) => {
  res.send("David Akindileni");
};

const tomiRoute = (req, res) => {
  res.send("Tomisin Akindileni");
};

const toluRoute = (req, res) => {
  res.send("Toluwalase Akindileni");
};

module.exports = {
  davidRoute,
  tomiRoute,
  toluRoute
};