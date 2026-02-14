import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, name } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "your-app-password", // NOT your Gmail password
    },
  });

  await transporter.sendMail({
    from: "Your Service Team <yourgmail@gmail.com>",
    to: to,
    subject: "Your Provider Account Registration",
    html: `
      <h2>Hello ${name},</h2>
      <p>Your provider account has been received.</p>
      <p>It will be activated within <b>24 hours</b>.</p>
      <br>
      <p>Thank you,<br>Support Team</p>
    `,
  });

  res.send({ status: "Email Sent" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
