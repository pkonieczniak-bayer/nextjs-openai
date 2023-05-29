import { prisma } from "@/lib/prisma";
import bcrypt from 'bcrypt';

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

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

  return new Response(JSON.stringify(userWithoutPassword));
}
