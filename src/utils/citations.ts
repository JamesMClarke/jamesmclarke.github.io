export async function getCitationCount(doi: string): Promise<number> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/DOI:${doi}?fields=citationCount`,
      { signal: controller.signal }
    );

    clearTimeout(timeout);

    if (!res.ok) return 0;

    const data = await res.json();
    return data.citationCount ?? 0;
  } catch {
    return 0;
  }
}
