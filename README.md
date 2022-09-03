# BFF Demo - Express

## Client

Run: `node start` (automatically proxies to the server)

Example component file structure:
- `TodoList.tsx` react component
- `TodoList.model.ts` view model used by react props and served by the server
- `TodoList.query.ts` axios request boilerplate
- `TodoList.backend.ts` BFF itself

## Server

Run: `cd server && node run dev`

It also serves static client bundle.

## Notes

- TODO Hide internal-api nicer: `import {fetchCommentStatistics, fetchTodos} from "../server/src/internal-api"`
- ☝ It would be great to avoid axios boilerplate without need to duplicate HTTP URL and method
- ☝ Internal API errors are not handled in the current implementation
- 👍 PyCharm Endpoints tool shows all endpoints. "Find usages" shows both client and server side.
