export interface AppInitialState {
  number: number;
  loading: boolean;
  currentInputNumber: string;
  users: User[];
  fetching: boolean;
}

export interface User {
  name: string;
  username: string;
  email: string;
}
