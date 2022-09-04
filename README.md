# BFF Demo - [TSOA](https://tsoa-community.github.io/docs/) + [Orval](https://orval.dev/)

## Client

Run: `node start` (automatically proxies to the server)

Example component file structure:
- `TodoList.tsx` react component
- `TodoList.model.ts` view model used by react props and served by the server

## Server

Run: `cd server && node run dev`

It also serves static client bundle.

## Notes

- TODO deduplicate TodoListItem
- It would be great to write backend code closer to component itself, for example `TodoList.backend.js`
- Internal API errors are not handled in the current implementation
- PyCharm Endpoints are empty, because know nothing about tsoa. It can show generated openapi spec, but Find usages functionality is limited and doesn't show tsoa controllers. 
- 👍 React-query code is generated with orval