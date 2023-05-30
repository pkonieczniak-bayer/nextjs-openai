import { prisma } from "@/lib/prisma";
import bcrypt from 'bcrypt';

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      name: body.name
    }
  })

  const { password, ...userWithoutPassword } = user;

  return new Response(JSON.stringify(userWithoutPassword));
}
