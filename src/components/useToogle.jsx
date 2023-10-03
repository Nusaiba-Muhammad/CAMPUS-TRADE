import { useState } from "react";

export default function useToogle() {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!open);
  };
  return { open, toogle };
}
