import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // await sql`DROP TABLE IF EXISTS EVENT`;

    const result = await sql`
              SELECT * FROM EVENT
            
            `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
