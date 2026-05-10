export type BlogListItem = {
  id: number;
  tag: string;
  title: string;
  preview: string;
  updated_at: string;
};

export type BlogContents = {
  id: number;
  blog_list_id: number;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  blog: string;
};
