


// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // POST endpoint for handling form submission
// app.post('/api/profile', async (req, res) => {
//   const { name, email, message, emailType } = req.body;
//   try {
//     // Validate form data
//     if (!name.match(/^[a-zA-Z\s]+$/)) {
//       return res.status(400).json({ error: 'Name should contain alphabets only.' });
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       return res.status(400).json({ error: 'Invalid email format.' });
//     }
//     if (!message.trim()) {
//       return res.status(400).json({ error: 'Message cannot be empty.' });
//     }

//     // Create Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       // Configure your email service provider here
//       service: "gmail",
//     auth: {
//       user: "pallaveechaubey11@gmail.com",
//       pass: "cegsdkncovrouoal",
//     },
      
//     });

//     // Send email
//     await transporter.sendMail({
//       from: "pallaveechaubey11@gmail.com",
//       to: emailType,
//       subject: 'Message from Contact Form',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     });

//     res.status(200).json({ message: 'Email sent successfully.' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
