import { useEffect, useState } from 'react';

function useTitle(newTitle) {
  const [currentTitle, setCurrentTitle] = useState(document.title);

  useEffect(() => {
    if (newTitle) {
      document.title = newTitle;
      setCurrentTitle(newTitle);
    }
  }, [newTitle]);

  return currentTitle;
}

export default useTitle;
