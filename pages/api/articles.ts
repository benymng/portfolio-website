import { connectToDatabase } from "../../util/mongodb";
import { NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  const movies:string[] = await db.collection("newarticles").find({}).toArray();

  res.json(movies);
};
