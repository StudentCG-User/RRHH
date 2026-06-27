import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const cwd = process.cwd();

  return NextResponse.json({
    cwd,
    files: fs.readdirSync(cwd),
    prismaExists: fs.existsSync(path.join(cwd, "prisma")),
    dbExists: fs.existsSync(path.join(cwd, "prisma", "dev.db")),
    rootDbExists: fs.existsSync(path.join(cwd, "dev.db")),
    databaseUrl: process.env.DATABASE_URL,
  });
}