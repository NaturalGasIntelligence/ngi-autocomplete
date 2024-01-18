import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import { nc } from ".";
import { RemoveIcon } from "./Icons";

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: '10px;'
  };
  
  return (
    <span ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </span>
  );
}