import { useState } from "react";

export function useCollapse() {
    const [open, setOpen] = useState(false);
    return { open, setOpen };
}
