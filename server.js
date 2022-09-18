const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './app/config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on post ${port}...`);
});
