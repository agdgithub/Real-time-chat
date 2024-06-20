const bcrypt = require('bcryptjs');

const hashPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('1234567', salt);
  console.log(hashedPassword); // Copy this hashed password
};

hashPassword();
