import { useState } from "react";

import {
  useGetLoading,
} from "../../hooks";

import { Header, SideBar, LoadingComponent, AddTaskModal } from "../../components";
import { PlusIcon, SearchIcon } from "../../icons";
import { KanbanBoard } from "../../components/KanbanBoard";

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

  const [isNewModal, setIsNewModal] = useState(false);

  const isLoading: boolean = useGetLoading();

  const handleNew = () => {
    setIsNewModal(true);
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
        
        <KanbanBoard />

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
