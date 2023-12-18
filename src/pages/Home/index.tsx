import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import {
  KanbanColumnTypes,
  KanbanDataTypes,
  KanbanItemTypes,
} from "../../types";
import {
  useGetColumns,
  useGetKanbanTasks,
  useGetLoading,
  useGetTasks,
  useGetUser,
} from "../../hooks";

import { generateKanbanData } from "../../utils/tasks";
import { useDispatch } from "react-redux";

import { fetchTasks, setKanbanData, moveTask } from "../../store/tasks";
import { fetchTypes } from "../../store/types";
import { fetchUrgency } from "../../store/urgency";
import { fetchColumns } from "../../store/columns";

import { Header, SideBar, LoadingComponent, AddTaskModal, KanbanColumn } from "../../components";
import { PlusIcon, SearchIcon } from "../../icons";

const initialValues = {
  title: "",
  description: "",
  image: "",
  dueDate: "",
  type: "",
  urgency: "",
  subTasks: [],
  subTaskText: "",
  file: null,
};

const Home = () => {
  const dispatch = useDispatch();

  const [isNewModal, setIsNewModal] = useState(false);

  const user: any = useGetUser();
  const tasks: KanbanItemTypes[] = useGetTasks();
  const columns: KanbanColumnTypes[] = useGetColumns();

  const kanbanTasks: KanbanDataTypes = useGetKanbanTasks();

  const isLoading: boolean = useGetLoading();

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

  const handleNew = () => {
    setIsNewModal(true);
  };

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

  const handleCloseModal = () => {
    setIsNewModal(false);
  };

  return (
    <div className="relative bg-gray-100 w-full h-full min-h-screen flex dark:bg-slate-700">
      <SideBar />
      <div className="content flex-1">
        <Header />
        <div className="flex justify-between p-4">
          <form className="w-96">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500 dark:text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="Search Tasks..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleNew}
          >
            <PlusIcon />
            New Task
          </button>
        </div>

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
      </div>
      {isNewModal && (
        <AddTaskModal
          handleCloseModal={handleCloseModal}
          initialValues={initialValues}
        />
      )}
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default Home;
