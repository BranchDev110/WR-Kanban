import { useEffect } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { useDispatch } from "react-redux";

import {
  KanbanColumnTypes,
  KanbanDataTypes,
  KanbanItemTypes,
} from "../../../types";

import {
  useGetColumns,
  useGetKanbanTasks,
  useGetTasks,
	useGetUser
} from "../../../hooks";

import { fetchTypes } from "../../../store/types";
import { fetchUrgency } from "../../../store/urgency";
import { fetchColumns } from "../../../store/columns";

import { setKanbanData, moveTask, fetchTasks } from "../../../store/tasks";
import { KanbanColumn } from "../../../components";

import { generateKanbanData } from "../../../utils/tasks";

const KanbanBoard = () => {
	const dispatch = useDispatch();

	const tasks: KanbanItemTypes[] = useGetTasks();
  const columns: KanbanColumnTypes[] = useGetColumns();
	const kanbanTasks: KanbanDataTypes = useGetKanbanTasks();
	const user: any = useGetUser();

	useEffect(() => {
    dispatch(fetchTasks(user?.uid));
    dispatch(fetchTypes("types/fetchTypes"));
    dispatch(fetchUrgency("urgency/fetchUrgency"));
    dispatch(fetchColumns("columns/fetchColumns"));
  }, [dispatch, user?.uid]);

	useEffect(() => {
    if (tasks.length && columns.length) {
      dispatch(setKanbanData(generateKanbanData(tasks)));
    }
  }, [tasks, columns, dispatch]);

	const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    const tempDestination = kanbanTasks[destination.droppableId] || [];

    console.log(source, destination, kanbanTasks);

    let destinationBefore: number = 0;
    let destinationNext: number = 0;

    if (source.droppableId === destination.droppableId) {
      destinationBefore =
        destination.index === 0
          ? 0
          : source.index < destination.index
          ? tempDestination[destination.index].order
          : tempDestination[destination.index - 1].order;

      destinationNext =
        destination.index === tempDestination.length - 1
          ? tempDestination[destination.index].order + 1
          : source.index < destination.index
          ? tempDestination[destination.index + 1].order
          : tempDestination[destination.index].order;
    } else {
      destinationBefore =
        destination.index === 0
          ? 0
          : tempDestination[destination.index - 1].order;
      destinationNext =
        destination.index === tempDestination.length
          ? destination.index === 0
            ? 0
            : tempDestination[destination.index - 1].order + 1
          : tempDestination[destination.index].order;
    }

    let destinationArray = Array.from(
      kanbanTasks[destination.droppableId] || []
    );
    let sourceArray = Array.from(kanbanTasks[source.droppableId] || []);
    let newProjectData = { ...kanbanTasks };

    const itemInserted = {
      ...sourceArray[source.index],
      order: (destinationBefore + destinationNext) / 2,
    };

    if (destination.droppableId === source.droppableId) {
      sourceArray.splice(source.index, 1);
      sourceArray.splice(
        destination.index ?? sourceArray.length + 1,
        0,
        itemInserted
      );
      newProjectData = {
        ...newProjectData,
        [source.droppableId]: sourceArray,
      };
    } else {
      sourceArray.splice(source.index, 1);
      destinationArray.splice(
        destination.index ?? destinationArray.length + 1,
        0,
        itemInserted
      );
      newProjectData = {
        ...newProjectData,
        [source.droppableId]: sourceArray,
        [destination.droppableId]: destinationArray,
      };
    }

    dispatch(
      moveTask({
        source: kanbanTasks[source.droppableId][source.index],
        destinationBefore,
        destinationNext,
        destinationStatus: destination.droppableId,
      })
    );

    dispatch(setKanbanData(newProjectData));
  };
	
  return (
    <div className="flex px-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns?.map(({ id, title }, index) => {
          return (
            <KanbanColumn
              text={title}
              lists={kanbanTasks[title] || []}
              key={`kanban-row-${index}`}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
