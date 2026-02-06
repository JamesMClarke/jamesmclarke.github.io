import fs from "node:fs";
import path from "node:path";
import bibtexParse from "bibtex-parse";

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  doi?: string;
  abstract?: string;
  url?: string;
  pdf?: string;
  html?: string;
  video?: string;
  poster?: string;
  googleScholarId?: string;
  citationCount?: number;
}

export function getPublications(): Publication[] {
  const bibPath = path.resolve("src/content/publications.bib");
  let raw = fs.readFileSync(bibPath, "utf-8");

  // Strip YAML frontmatter if present
  raw = raw.replace(/^---[\s\S]*?---\s*/, "");

  const entries = bibtexParse.entries(raw);

  return entries.map((entry: Record<string, any>) => ({
    key: entry.key,
    type: entry.type,
    title: String(entry.TITLE ?? ""),
    authors: String(entry.AUTHOR ?? "")
      .split(" and ")
      .map((a: string) => a.trim())
      .filter(Boolean),
    year: Number(entry.YEAR),
    journal: entry.JOURNAL ? String(entry.JOURNAL) : undefined,
    doi: entry.DOI ? String(entry.DOI) : undefined,
    abstract: entry.ABSTRACT ? String(entry.ABSTRACT) : undefined,
    url: entry.URL ? String(entry.URL) : undefined,
    pdf: entry.PDF ? String(entry.PDF) : undefined,
    html: entry.HTML ? String(entry.HTML) : undefined,
    video: entry.VIDEO ? String(entry.VIDEO) : undefined,
    poster: entry.POSTER ? String(entry.POSTER) : undefined,
    googleScholarId: entry.GOOGLE_SCHOLAR_ID
      ? String(entry.GOOGLE_SCHOLAR_ID)
      : undefined,
  }));
}
