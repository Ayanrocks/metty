module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ Status: 'working' });
  });

  app.get('/api/v1/getForecast/:location', (req, res) => {

  });
};
