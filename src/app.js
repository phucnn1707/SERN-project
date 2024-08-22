const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db.config');
const { default: configViewEngine } = require('./config/viewEngine.config');
const { default: initWebRoutes } = require('./routes/web');

// Load environment variables from .env file
dotenv.config();

const app = express();

//config viiew engine
configViewEngine(app);

// Middleware
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Database connection
connectDB();

//init web routes
initWebRoutes(app);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
