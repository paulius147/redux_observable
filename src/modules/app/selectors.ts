import { MainState } from "../../types";
import { User } from "../../types/app";

export const getAppLoading = (state: MainState): boolean => state.app.loading;
export const getAppNumber = (state: MainState): number => state.app.number;
export const getCurentInputNumber = (state: MainState): string =>
  state.app.currentInputNumber;
export const getAppUsers = (state: MainState): User[] => state.app.users;
