import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>, 
  handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {

      const el = ref.current;
      if (!el || el.contains((event.target as Node))) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
};
