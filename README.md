# Electron.Net template

## Repo structure
- `front` is a folder for frontend-related files
- `back` is a folder for backend-related files

## Development
To run the backend:
- `cd ./back`
- `dotnet restore`
- `dotnet run` or run it in your favorite IDE

To run the frontend:
- `cd ./front`
- `npm i`
- `npm start`

The `*.env` files in the `front` folder defines the BASE_URL to the backend API. Update `development.env` if your backend is hosted not on default address: `http://localhost:5000/`
The backend has a CORS rule to allow incoming requests from `http://localhost:3000`. If you need something else, edit `Startup.cs`.

## Production build (usually should be done by CD system)
Build front:
- `cd ./front`
- `npm i`
- `npm start`

Build back:
- Copy files from `./front/build` to `./back/wwwroot` so frontend package become a part of desktop app.
- `dotnet tool install ElectronNET.CLI -g` to install global library on build agent
- `electronize start` to compile and run the desktop app locally or `electronize build` to build the desktop app installer.
