import React, {forwardRef} from 'react';

import { nc } from ".";
export const DraggingItem = forwardRef(({id, ...props}, ref) => {
  return (
    // <div {...props} ref={ref}>{id}</div>
    <div ref={ref} className={nc("selection")}>
      <span className={nc("selection__label")}>{props.title}</span>
    </div>
  )
});