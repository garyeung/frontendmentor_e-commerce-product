import { useEffect, RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};
