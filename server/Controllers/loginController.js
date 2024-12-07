const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User'); // Ensure this points to the correct path

// Controller for handling login
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Email and password sent from frontend

  try {
    // Step 1: Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // If no user is found with the provided email
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Step 2: Compare the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // If password doesn't match
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Step 3: Create a JWT token if login is successful
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role }, // Payload: user details
      'your-secret-key', // Replace with a proper secret key
      { expiresIn: '1h' } // Token expiry duration
    );

    // Step 4: Send the token and role back to the frontend
    res.json({
      token,
      role: user.role,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginUser };
