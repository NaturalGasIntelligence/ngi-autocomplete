import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Multi from "./Multi";

import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export default function MultiFunction(props) {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={props.handleDragEnd}
    >
      <SortableContext 
        items={props.suggestions}
        strategy={verticalListSortingStrategy}
      >
        <Multi
          input={props.input}
          suggestions={props.suggestions}
          selections={props.selections}
          labelId={props.labelId}
          canCreate={props.canCreate}
          onCreate={props.onCreate}
          onChange={props.onChange}
          onClick={props.onClick}
        />
      </SortableContext>
    </DndContext>
  )
}

