import nodemailer from "nodemailer";
export const sendEmail = async (to: string, subject: string, body: string) => {
  let hostname = "tender.universalbridge.rw";
  let username = "noreply@tender.universalbridge.rw";
  let password = "v)7~]7LP(f_.";

  let transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true,
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tender" <Universal>',
    to: to,
    subject: subject,
    html: `<strong>${body}</strong>`,
    headers: { rwanda: "standard" },
  });

  console.log("Message sent: %s", info.response);
};
