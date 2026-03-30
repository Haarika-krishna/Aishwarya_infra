const express = require("express");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/contact", async (req, res) => {

const { name, email, phone, message } = req.body;

const doc = new PDFDocument();
const filePath = "contact-details.pdf";

doc.pipe(fs.createWriteStream(filePath));

doc.fontSize(20).text("Customer Contact Details");
doc.moveDown();

doc.text(`Name: ${name}`);
doc.text(`Email: ${email}`);
doc.text(`Phone: ${phone}`);
doc.text(`Message: ${message}`);

doc.end();

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

await transporter.sendMail({
  from: "boiniharika2109@gmail.com",
  to: "boiniharika2109@gmail.com",
  replyTo: email,
  subject: "New Contact Message",

  text: `
New Contact Message

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`,

  attachments: [
    {
      filename: "contact-details.pdf",
      path: filePath
    }
  ]
});

res.send("Message Sent Successfully");

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});