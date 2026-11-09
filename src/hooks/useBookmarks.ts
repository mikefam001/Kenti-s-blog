import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'kentis_corner_bookmarks';
const EVENT_NAME = 'kentis_corner_bookmarks_changed';

function getStoredBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => getStoredBookmarks());

  useEffect(() => {
    const handler = () => {
      setBookmarks(getStoredBookmarks());
    };

    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  const toggleBookmark = useCallback((slug: string): boolean => {
    try {
      const current = getStoredBookmarks();
      let updated: string[];
      let added = false;

      if (current.includes(slug)) {
        updated = current.filter((s) => s !== slug);
        added = false;
      } else {
        updated = [...current, slug];
        added = true;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setBookmarks(updated);
      window.dispatchEvent(new Event(EVENT_NAME));
      return added;
    } catch {
      return false;
    }
  }, []);

  const removeBookmark = useCallback((slug: string) => {
    try {
      const current = getStoredBookmarks();
      const updated = current.filter((s) => s !== slug);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setBookmarks(updated);
      window.dispatchEvent(new Event(EVENT_NAME));
    } catch {
      // Ignore storage errors safely
    }
  }, []);

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
    removeBookmark,
    count: bookmarks.length,
  };
}
