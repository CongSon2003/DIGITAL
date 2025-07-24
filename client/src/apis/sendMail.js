import axios from "../axios";
export const apiSendMail = (data) => {
  try {
    return axios({
      url: "/mail/sendMail",
      method: "POST",
      data,
    });
  } catch (error) {
    throw error;
  }
};
