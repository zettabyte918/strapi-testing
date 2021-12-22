module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b47c48d325d4d3bdc5067eb243240c5'),
  },
});
