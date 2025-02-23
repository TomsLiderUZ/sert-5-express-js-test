import { useId } from 'react';

function useUniqueId() {
  const id = useId();
  return id;
}

export default useUniqueId;
