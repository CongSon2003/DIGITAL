const express = require("express");
const router = express.Router();
const sendMail = require("../ultils/sendMail");
router.post("/sendMail", async (req, res) => {
  try {
    const { email, text, phone, name } = req.body;
    if (!email || !text || !phone || !name) {
      res.status(500).json({
        message: "Missing inputs",
        success: false,
        response: null,
      });
    }
    const html = `
    <h1>CONTACT - US</h1>
    <div>
      <span>from : ${email} </span>
      <br/>
      <span>Name : ${name} </span>
      <br/>
      <span>Phone : ${phone} </span>
      <br/>
      <span>Message : ${text} </span>
    </div>
  `;
    const response = await sendMail({ email, html, subject: "CONTACT - US" });
    if (response?.response.includes('250 2.0.0 OK')) {
      res.status(200).json({
        success : true,
        message : 'Mail sent successfully'
      })
    }
  } catch (error) {
    res.status(500).json({
      success : false,
      error
    })
  }
});
module.exports = router;
