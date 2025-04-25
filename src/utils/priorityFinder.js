import { PRIORITIES } from "../data/priorities";

const priorityFinder = (priorityName) =>
  PRIORITIES.find((obj) => obj.priority === priorityName);

export default priorityFinder;
