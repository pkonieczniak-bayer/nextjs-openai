import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt"
import bcrypt from 'bcrypt';
import { NextRequest } from "next/server";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username
    }
  })

  if (!user) {
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(body.password, user.password);

  if (!isPasswordCorrect) {
    return null;
  }

  const { password, ...userWithoutPassword } = user

  const token = await getToken({ req })
  console.log(token, 'token')

  return new Response(JSON.stringify(userWithoutPassword));
}
