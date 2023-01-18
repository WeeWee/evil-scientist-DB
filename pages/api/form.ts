import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const data = JSON.parse(localStorage.getItem("form") as string);
  localStorage.setItem("form", { ...data, body });

  res.status(200).json({ body });
}
