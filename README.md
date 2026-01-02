# Replica-Spotify

Replica-Spotify is a front-end project that recreates the look and basic behavior of the Spotify web interface. It is built with React, Vite, and TypeScript and uses a small mock data folder as a fake backend.

## Key Features

- Browse and search music, albums, and artists
- Play tracks (UI-level playback simulation)
- Create and manage playlists
- Navigate between main sections (Home, Playlists, etc.)

## Tech Stack

- Frontend: React, Vite, TypeScript, CSS
- Mock data: JSON files located in the `api-artists` folder

## Getting Started

Prerequisites: Node.js and npm installed.

1. Clone the repository:

```bash
git clone https://github.com/AlbertNewton254/replica-spotify.git
```

2. Change to the project folder:

```bash
cd replica-spotify
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The dev server will start and print the local address (for example `http://localhost:5173`). Open that URL in your browser.

### Build and Preview

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b my-feature`
3. Make changes and commit them.
4. Push the branch and open a pull request.

Please describe your changes and the motivation behind them when opening a PR.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Notes

- Mock data for artists is stored in the `api-artists` folder.
- The project was originally created as part of a front-end immersion course and adapted to React + Vite + TypeScript for improved type safety and development experience.
