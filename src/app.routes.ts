import { Route } from "@/astronautaking-api/types";

import { UsersRoutes } from "./users/users.routes";
import { NotesRoutes } from "./notes/notes.routes";

export const routes: Route[] = [
  {
    path: "users",
    route: UsersRoutes,
  },
  {
    path: "notes",
    route: NotesRoutes,
  },
];
