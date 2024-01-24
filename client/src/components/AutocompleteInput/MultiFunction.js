import React, { useState } from "react";
import PropTypes from "prop-types";

import Multi from "./Multi";

import {
  DndContext, 
  DragOverlay,
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

import {DraggingItem} from './DraggingItem'

export default function MultiFunction(props) {

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragStart(event) {
    const {active} = event;
    const selectedTitle = props.selections.map(selection => {
      if (selection.pk == active.id)
        return selection.title
    })
    setDraggingTitle(selectedTitle)
  }
  const [draggingTitle, setDraggingTitle] = useState('');

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={props.handleDragEnd}
      onDragStart={handleDragStart}
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
      <DragOverlay>
        {draggingTitle ? <DraggingItem title={draggingTitle} /> : null}
      </DragOverlay>
    </DndContext>
  )
}

export const defaultProps = {
  selections: []
};