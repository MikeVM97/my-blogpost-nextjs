import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/app/components/ListItem";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map(post => post.tags).flat());

  return Array.from(tags).map(tag => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Post about ${tag}`
  }
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts) return <p className="mt-10 text-center">Sorry, no post available.</p>

  const tagPosts = posts.filter(post => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">
          Sorry, no posts for that keyword.
        </p>
        <Link href="/">Back to Home</Link>
      </div>
    )
  } 
}