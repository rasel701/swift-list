import { connect } from "@/app/lib/dbConnect";

const allLatestProducts = connect("all-products");

export async function GET() {
  const result = await allLatestProducts
    .find()
    .sort({ date: -1 })
    .limit(4)
    .toArray();
  return Response.json(result);
}
