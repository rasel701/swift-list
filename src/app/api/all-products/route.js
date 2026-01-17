import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
const allProducts = connect("all-products");

export async function GET() {
  const result = await allProducts.find().toArray();
  return Response.json(result);
}

export async function POST(req) {
  const message = await req.json();

  if (!message) {
    return Response.json({
      status: 400,
      message: "Please send a message",
    });
  }
  const newProduct = { message, date: new Date().toISOString() };
  const result = await allProducts.insertOne(newProduct);
  revalidatePath("/all-products");

  return Response.json(result);
}
