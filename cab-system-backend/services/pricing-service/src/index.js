const app = require('./app');
const connectDB = require('./database/dbConnection');
const { PORT } = require('./config/env');

connectDB();

app.listen(PORT, () => {
  console.log(`Pricing Service running on port ${PORT}`);
});