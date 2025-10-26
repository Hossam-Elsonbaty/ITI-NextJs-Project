import { users } from "./data";

export async function GET() {
  return Response.json(users)
}
export async function DELETE(req) {
  const body = await req.json();
  const id = body.id;
  const index = users.findIndex((u) => u.id === id);
  users.splice(index, 1);
}
export async function POST(req){
  const data = await req.json()
  const newUser = {
    id:users.length + 1,
    name:data.name,
    email:data.email,
    phone:data.phone
  }
  users.push(newUser)
  return new Response(JSON.stringify(users), { status: 201 })
}