import { DraggableProvided, DroppableProvided } from "react-beautiful-dnd";

export interface LoginFormState {
  email: string;
  password: string;
}

export interface RegisterFormState {
  email: string;
  name: string;
  password: string;
  confirm: string;
}

export interface FormBaseProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  handleChange?: any;
  error?: any;
  required?: boolean;
  showLabel?: boolean;
}

export interface FormInputProps extends FormBaseProps {
  type: string;
}

export interface FormTextAreaProps extends FormBaseProps {
  rows: number;
}

export interface FormDateSelectProps extends FormBaseProps {}

export interface FormSelectItemProps {
  value: string;
  label: string;
}

export interface FormSelectProps extends FormBaseProps{
  lists: FormSelectItemProps[];
}

export interface FormImageUploaderProps {
  label: string;
  name: string;
  id: string;
  handleChange: any;
  src: string;
  fileName: string;
}

export interface KanbanSubTaskItemTypes {
  content: string;
  isDone: boolean;
}

export interface KanbanSubTaskRecordTypes extends KanbanSubTaskItemTypes {
  id: string;
  parentId: string;
}

export interface KanbanItemTypes {
  id: string;
  title: string;
  description: string;
  subTasks: KanbanSubTaskRecordTypes[];
  image: string;
  fileName:string;
  urgency: string;
  user: string;
  status: number;
  isDeleted: boolean;
  type: string;
  order: number;
  dueDate: string;
}

export interface KanbanTypeTypes {
  value: string;
  label: string;
}

export interface KanbanUrgencyTypes {
  value: string;
  label: string;
}

export interface KanbanRowProps {
  text: string;
  lists: KanbanItemTypes[];
}

export interface KanbanItemProps {
  data: KanbanItemTypes;
  index: number;
}

export interface KanbanRowHeaderProps {
  text: string;
}

export interface KanbanDataTypes {
  [key: string]: KanbanItemTypes[];
}

export interface KanbanColumnTypes {
  id: number;
  title: string;
}

export interface KanbanUserTypes {
  uid: string;
  email: string;
}

export interface AddTaskModalProps {
  handleCloseModal: () => {}
}