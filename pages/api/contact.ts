import type { NextApiRequest, NextApiResponse } from "next";
const mailjet = require("node-mailjet").connect(
  process.env.API_KEY_EMAIL_1,
  process.env.API_KEY_EMAIL_2
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: body.email,
          Name: body.email,
        },
        To: [
          {
            Email: "mariusz.kaleta@bmgk.tech",
            Name: "Mariusz",
          },
        ],
        Subject: "BMGK.tech contact form",
        TextPart: body.message,
        HTMLPart: body.message,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });

  request
    .then((result) => {
      res.status(200).json({ status: result.Status });
    })
    .catch((err) => {
      res.status(500).json({ status: "fail" });
    });
}
