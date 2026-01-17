import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
const allProductsCollection = connect("all-products");

export async function GET(request, { params }) {
  const { "product-id": id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "Send correct id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = await allProductsCollection.findOne(query);
  return Response.json({
    ...result,
    success: true,
  });
}
