# BFF Demo - Express

## Client

Run: `node start` (automatically proxies to the server)

Example component file structure:
- `TodoList.tsx` react component
- `TodoList.model.ts` view model used by react props and served by the server
- `TodoList.query.ts` axios request boilerplate

## Server

Run: `cd server && node dev`

It also serves static client bundle.

## Notes

- It would be great to avoid axios boilerplate without need to duplicate HTTP URL and method
- It would be great to write backend code closer to component itself, for example `TodoList.backend.js`
- Internal API errors are not handled in the current implementation
