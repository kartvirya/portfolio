import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DATA.url;
  const currentYear = new Date().getFullYear();

  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(`${currentYear}-01-01`),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(`${currentYear}-01-01`),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}