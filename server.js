const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (request, response) =>
  response.json({ message: 'A API está funcionando!' }),
);

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3335;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
