import { BlogPostClient } from "./blog-post-client"
import { blogPosts } from "./blog-data"

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id: id.toString(),
  }))
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
