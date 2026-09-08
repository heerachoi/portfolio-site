import { project as kotiAutozone } from "./koti-autozone.js";
import { project as maeilHomepage } from "./maeil-homepage.js";
import { project as ykTimetracking } from "./yk-timetracking.js";
import { project as swivee } from "./swivee.js";
import { project as popcorn } from "./popcorn.js";
import { project as saveduck } from "./saveduck.js";
import { project as inclusiveHealth } from "./inclusive-health.js";
import { project as todoReduxTs } from "./todo-redux-ts.js";
import { project as todoTs } from "./todo-ts.js";
import { project as websocketChatting } from "./websocket-chatting.js";
import { project as baekjoonJs } from "./baekjoon-js.js";

/** Filter tabs: 전체 + each ProjectCategory */
export const categories = ["전체", "프로젝트", "React", "Algorithm"];

/** @type {import('./types.js').Project[]} */
export const projects = [
  kotiAutozone,
  maeilHomepage,
  ykTimetracking,
  swivee,
  popcorn,
  saveduck,
  inclusiveHealth,
  todoReduxTs,
  todoTs,
  websocketChatting,
  baekjoonJs,
];

/** @param {string} id */
export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}
