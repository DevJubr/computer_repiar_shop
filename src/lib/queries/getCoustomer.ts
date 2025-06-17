import { db } from "@/db";
import { coustomers } from "@/db/schema";
import { eq } from "drizzle-orm";

const getCoustomer = async (id: number) => {
  const coustomer = await db
    .select()
    .from(coustomers)
    .where(eq(coustomers.id, id));
    return coustomer[0]
};

export { getCoustomer };
