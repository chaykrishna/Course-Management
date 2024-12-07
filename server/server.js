const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');

const app = express();
const PORT = 5000;
const cors = require('cors');
// Middleware to parse JSON
app.use(express.json());

app.use(cors());


// Connect to MongoDB
mongoose
  .connect('mongodb+srv://user_chay:1234@cluster0.w5zzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use authentication routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
