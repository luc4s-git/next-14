export interface TaskType {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
}

export type State = {
  message: string | null;
};
