import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedToId?: SortOrder;
  createdAt?: SortOrder;
  estimationDays?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  tile?: SortOrder;
  updatedAt?: SortOrder;
};
