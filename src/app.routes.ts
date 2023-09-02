import { Route } from "@/lib/types";

import { UsersRoutes } from "./modules/users/users.routes";
import { NotesRoutes } from "./modules/notes/notes.routes";

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
