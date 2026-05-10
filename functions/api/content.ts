interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  // Extract the ID from the URL (e.g., /api/content?id=1)
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get("id");

  if (!blogId) {
    return new Response(JSON.stringify({ error: "Missing blog ID" }), {
      status: 400,
    });
  }

  try {
    // Fetch the detailed content using the foreign key relationship[cite: 1]
    const result = await env.DB.prepare(
      "SELECT * FROM blogs_contents WHERE blog_list_id = ?",
    )
      .bind(blogId)
      .first();

    if (!result) {
      return new Response(JSON.stringify({ error: "Blog content not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
