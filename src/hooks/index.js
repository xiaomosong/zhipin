import { Children, useMemo } from "react";
export const useSlot = (children) => {
  const slotObject = useMemo(
    () =>
      Children.toArray(children).reduce(
        (p, c) => ((p[c.props.slot || "default"] = c), p),
        {}
      ),
    [children]
  );
  return slotObject;
};
