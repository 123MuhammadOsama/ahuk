import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    console.log("post running");
    const {
      academicLevel,
      docType,
      topic,
      instructions,
      ppt,
      posters,
      pages,
      deadline,
      subject,
      citationFormat,
      name,
      email,
      phoneNumber,
      country,
      proposedPrice
    } = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with the actual recipient email
    const login = process.env.LOGIN; // Replace with the actual recipient email
    const password = process.env.SMTPPASSWORD; // Replace with the actual recipient email
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: login,
        pass: password,
      },
    });

    const mailOptions = {
      from: toEmail,
      to: toEmail,
      subject: `AssignmentsHELP.UK | ORDER FORM:`,
      text: `
         Academic Level of Student: ${academicLevel},
          Type of Document: ${docType},
          Topic: ${topic},
          Additional Instructions:  ${instructions},
          No. of ppt slides:  ${ppt},
          No. of Posters:  ${posters},
          Pages:  ${pages},
          Deadline:  ${deadline},
          Subject:  ${subject},
          Citation Format:  ${citationFormat},
          Name:  ${name},
          Email:  ${email},
          Phone Number:  ${phoneNumber},
          Country:  ${country},
          Proposed Price (on order form): ${proposedPrice}
        
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Request Submitted", { status: 200 });
  } catch (error) {
    console.error("Error handling form data:", error);
    return new Response("Failed to submit form", { status: 500 });
  }
};
