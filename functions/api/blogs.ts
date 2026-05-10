import { BlogListItem } from "../../src/types/blog";
interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;

  try {
    // Selects metadata from the blogs_list table for the feed
    const { results } = await env.DB.prepare(
      "SELECT id, tag, title, preview, updated_at FROM blogs_list ORDER BY updated_at DESC",
    ).all<BlogListItem>();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
