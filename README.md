# Jonathan Lu portfolio

Static personal portfolio. Serve locally with python -m http.server 4173. Deploy repository root to Vercel with the Other framework preset and no build command.

Portrait and personal content belong to Jonathan Lu. Full CV intentionally excluded.

## Search and AI discovery

- Production canonical URL: https://www.drjonlu.com/ (the apex domain redirects to www in Vercel).
- index.html contains canonical, social-sharing metadata, and a JSON-LD graph connecting the website, profile page, and Jonathan Lu. Keep structured facts consistent with the visible biography; expected degrees must not be marked as completed.
- robots.txt preserves unrestricted public crawling, including search/retrieval crawlers. It does not introduce a new model-training opt-out or opt-in.
- sitemap.xml lists the single indexable page. Section anchors are not separate pages. Add future public pages only when they exist and have self-consistent canonical URLs.
- Keep metadata, structured facts, and social image URLs up to date when the biography changes. No special AI file or ranking guarantee is required.
- CSS, images, visible body content, and interactive scripts were preserved by the SEO update.

## Owner setup

1. Add drjonlu.com as a Domain property in Google Search Console. Complete its GoDaddy verification flow, or add Google's exact TXT record at @ in the authoritative DNS provider and verify. Keep the verification record.
2. Submit https://www.drjonlu.com/sitemap.xml in Search Console. Inspect https://www.drjonlu.com/ and request indexing.
3. In Bing Webmaster Tools, import the verified property from Google Search Console. Confirm the sitemap above is listed; submit it if missing.
4. Review indexing, query impressions, and clicks after crawlers revisit. Indexing and AI citations are not guaranteed.

Account verification values must come from the owner's Search Console/Bing account; do not invent placeholder verification tags.
