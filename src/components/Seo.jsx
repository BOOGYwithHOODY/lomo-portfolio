import { useEffect } from 'react';

const BASE_TITLE = 'LOMO — Graphic Design Studio';

// Lightweight per-route <head> management: title + meta description.
// No dependency needed for an SPA of this size.
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} · LOMO` : BASE_TITLE;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }

    return () => {
      document.title = BASE_TITLE;
    };
  }, [title, description]);

  return null;
}
