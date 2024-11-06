import express from 'express';
import mysql from 'mysql2/promise'; // Use mysql2/promise for async/await
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

// Middleware
<<<<<<< HEAD
app.use(express.json());
=======
app.use(express.json()); 
// app.use(cors());
>>>>>>> 53ef7a6560591c3ac74eaac1d1b024e13a61e8b5
app.use(cors({
  origin: "http://localhost:3000", // Allow only specific frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true // Enable cookies and other credentials
}));
app.use(cookieParser());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'vrms', // Replace with your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check Database Connection
pool.getConnection()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

// Customer Login Route
app.post('/customer_login', async (req, res) => {
  const { c_no, c_password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ? AND c_password = ?', [c_no, c_password]);
    const user = rows[0];
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Login successful', user: { name: user.c_name } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Customer Register Route
app.post('/customer_register', async (req, res) => {
  const { c_no, c_name, c_aadhar, c_lic_no, c_DOB, c_state, c_city, c_street, c_pin, c_email, c_gender, c_password } = req.body;

  try {
    console.log("Received data:", req.body); // Log the received data for debugging

    const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ? AND c_password = ?', [c_no, c_password]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert new customer
    await pool.query(
      'INSERT INTO customer (c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Owner Login Route
app.post('/owner_login', async (req, res) => {
  const { number, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ? AND o_password = ?', [number, password]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Owner Register Route
app.post('/owner_register', async (req, res) => {
  const { o_no, o_name, o_aadhar, o_DOB, o_state, o_city, o_street, o_pin, o_email, o_gender, o_password } = req.body;

  try {
    console.log("Received data:", req.body); // Log received data for debugging

    const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ? AND o_password = ?', [o_no, o_password]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert new owner
    await pool.query(
      'INSERT INTO owner (o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// import express from 'express';
// import mysql from 'mysql2/promise'; // Use mysql2, not mysql2/promise
// import cors from 'cors';
// // import bcrypt from 'bcrypt';
// import cookieParser from 'cookie-parser';
// // import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables

// const app = express();
// const port = 5000;


// // Middleware
// app.use(express.json());
// // app.use(cors());
// app.use(cors({
//   origin: "http://localhost:3000", // Allow only specific frontend origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
//   credentials: true // Enable cookies and other credentials
// }));
// app.use(cookieParser());

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });


// // Example route

// //customer Login route
// app.post('/customer_login', async (req, res) => {
//   const { c_no, c_password } = req.body;

//   try {
//     const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ? AND c_password = ?', [c_no,c_password]);
//     console.log(rows[0])
//     const user = rows[0];
//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'Login successful', user: { name: user.c_name } });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// //customer register route
// app.post('/customer_register', async (req, res) => {
//   const {c_no, c_name, c_aadhar, c_lic_no, c_DOB,  c_state, c_city, c_street, c_pin,c_email, c_gender, c_password } = req.body;

//   try {
//     const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ? AND c_password = ?', [c_no,c_password]);

//     if (rows.length > 0) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // const hashedPassword = await bcrypt.hash(c_password, 10);

//     await pool.query('INSERT INTO customer (c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender,c_password]);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// //Owner login route
// app.post('/owner_login', async (req, res) => {
//   const { number, password } = req.body;

//   try {
//     const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ? AND o_password = ?', [number,password]);

//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// //Owner register route
// app.post('/owner_register', async (req, res) => {
//   const {o_no, o_name, o_aadhar,  o_DOB, o_state, o_city, o_street, o_pin, o_email,o_gender, o_password } = req.body;

//   try {
//     const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ? AND o_password = ?', [o_no,o_password]);

//     if (rows.length > 0) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // const hashedPassword = await bcrypt.hash(o_password, 10);

//     await pool.query('INSERT INTO owner (o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password]);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });