# Contacts

This repo is a code-along with the in-course project in the React Nanodegree program.

Most of the commits in this repository correspond to videos in the program.

## Project Setup

1. Clone the project.

2. Install the dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Open your browser and navigate to the development server URL (e.g., `http://localhost:5173`).

5. Ensure that the [Contacts app server](https://github.com/udacity/reactnd-contacts-server2) is running to support the app's API calls.

### Production Build

To create a production-ready build of the project:

1. Run the build command:
   ```bash
   npm run build
   ```
2. Serve the build locally to test:
   ```bash
   npm run preview
   ```
3. The app will be served at a local preview URL (e.g., `http://localhost:4173`).

## Branch Information

- **Starter Code**: To access the starter code, checkout the `starter` branch:
  ```bash
  git checkout starter
  ```
  Then start the application:
  ```bash
  npm run dev
  ```

- **Finished Project**: Simply start the application:
  ```bash
  npm run dev
  ```

## Environment Variables

This project uses environment variables to configure the API URL. Create a `.env` file in the project root with the following content:

```env
VITE_CONTACTS_API_URL=http://localhost:5001
```

Update the URL as needed for your API setup.

## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program, we will not be accepting pull requests.

If you believe that a major problem exists in the code, please open an issue to discuss the problem and potential resolution.

## License

MIT
