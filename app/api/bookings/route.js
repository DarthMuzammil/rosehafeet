import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const body = await req.json();

    const result = await db.collection("bookings").insertOne(body);
    console.log(result)
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(JSON.stringify({ error: "Failed to add booking" }), {
      status: 500,
    });
  }
}