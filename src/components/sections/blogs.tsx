import { useFetch } from "../../hooks/useFetch";
import type { BlogListItem } from "../../types/blog";
import BlogCard from "../blogCard";
import { Loader } from "../loader";
export default function Blogs() {
  const { data: blogs, loading } = useFetch<BlogListItem[]>("/api/blogs");
  return (
    <section id="Blogs" className="px-15 py-28 border-t border-border">
      <div className="">
        <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
          Writing
        </p>
        <h2 className="font-extrabold font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text">
          Thoughts I've
          <br />
          <em className="italic text-text-3">put into words</em>
        </h2>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="exp-grid grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-20 mt-14">
          <div className=" pt-1">
            <p className="text-[0.82rem] text-text-3 leading-relaxed">
              I write about tech and things I learn the hard way.
            </p>
          </div>
          <div>
            {blogs?.map((blog: BlogListItem) => {
              return (
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  preview={blog.preview}
                  updated_at={blog.updated_at}
                  tag={blog.tag}
                />
              );
            })}
            <a href="https://medium.com/@utkarshsahay" className="view-all">
              ↗ &nbsp; view all posts on medium
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
