// src/lib/blog.js

import fs from "fs";
import path from "path";
import frontMatter from "front-matter";

export function getArticleMarkdown(slug) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { body } = frontMatter(fileContent);

  return body;
}