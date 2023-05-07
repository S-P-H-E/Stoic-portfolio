import nodemailer from 'nodemailer';
import { message as msg } from 'antd';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "stoic.newsletter@outlook.com", // your email address
      pass: "SpheC-137", // your email password or app password if you have 2FA enabled
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: "sphe.g.personal@gmail.com", // list of receivers
    subject: `"${name}'s message from Stoic Portfolio Website"`, // Subject line
    text: message, // plain text body
    html: `<p>${message}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).json({ message: "Email sent successfully" });
  msg.success("Sent");
}
