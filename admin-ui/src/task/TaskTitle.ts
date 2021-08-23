import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "tile";

export const TaskTitle = (record: TTask) => {
  return record.tile;
};
