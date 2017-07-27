const rootController = {};

rootController.get = (req, res) => {
  res.json({
    message: 'API working'
  });
};

export default rootController;
