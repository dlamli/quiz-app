import { ONE_HUNDRED } from "../constants";

export const derivePercentage = (entry: number, total: number) =>
  Math.round((entry / total) * ONE_HUNDRED);
