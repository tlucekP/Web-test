import { stat } from "node:fs/promises";
import { join } from "node:path";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://web-test-two-lovat.vercel.app";

async function getLastModified(relativePath: string): Promise<Date> {
  try {
    const filePath = join(process.cwd(), relativePath);
    const fileStat = await stat(filePath);
    return fileStat.mtime;
  } catch {
    return new Date("2026-02-25T00:00:00.000Z");
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [homeLastModified, aboutLastModified, projectsLastModified] =
    await Promise.all([
      getLastModified("app/page.tsx"),
      getLastModified("app/o-mne/page.tsx"),
      getLastModified("app/projekty/page.tsx"),
    ]);

  return [
    {
      url: `${siteUrl}/`,
      lastModified: homeLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/o-mne`,
      lastModified: aboutLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projekty`,
      lastModified: projectsLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
