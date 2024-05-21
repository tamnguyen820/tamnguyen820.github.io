import { ProjectItem } from "./models";
import techgo from "assets/images/techgo.png";
import vchess from "assets/images/vchess.png";
import translatify from "assets/images/translatify.png";
import threebodyproblem from "assets/images/threebodyproblem.png";
import okweather from "assets/images/okweather.png";
import sudokusolver from "assets/images/sudokusolver.png";
import spaceinvaders from "assets/images/spaceinvaders.png";
import tictactoe from "assets/images/tictactoe.png";

export const projectsData: ProjectItem[] = [
  {
    name: "VChess",
    imageUrl: vchess,
    site: "https://v-chess.netlify.app",
    description: `Online multiplayer chess platform with real-time gameplay, puzzles, engine analysis, and full 
        keyboard accessibility.`,
    tools: [
      "Vue.js",
      "Stockfish",
      "Socket.io",
      "Express.js",
      "Redis",
      "MongoDB",
      "Python",
    ],
  },
  {
    name: "TechGo",
    imageUrl: techgo,
    site: "https://github.com/tamnguyen820/techgo",
    description: `Terminal-based application to aggregate and browse tech news articles from multiple RSS feeds.`,
    tools: ["Go", "Docker", "Bubble Tea"],
  },
  {
    name: "Translatify",
    imageUrl: translatify,
    site: "https://github.com/tamnguyen820/translatify",
    description: `Mobile app that supports quick translation of 70+ languages. Features
      include image recognition, text-to-speech, and language detection.`,
    tools: ["Flutter", "Dart", "AWS", "Google Translate API"],
  },
  {
    name: "Three-body Problem",
    imageUrl: threebodyproblem,
    site: "https://rasadi.github.io/three-body-problem",
    description: `Simulation of the three-body problem with adjustable parameters and
      pre-defined systems. Made in collaboration with 2 other students.`,
    tools: ["TypeScript", "P5.js"],
  },
  {
    name: "OK Weather",
    imageUrl: okweather,
    site: "https://ok-weather.netlify.app",
    description: `Minialistic weather web app that provides current weather, date & time, and
      advanced weather metrics based on location search.`,
    tools: ["Vue.js", "OpenWeatherMap API", "Netlify"],
  },
  {
    name: "Sudoku Solver",
    imageUrl: sudokusolver,
    site: "https://github.com/tamnguyen820/SudokuSolver",
    description: `Sudoku solver that uses a backtracking algorithm to solve any valid sudoku puzzle
      with visualization.`,
    tools: ["Python", "Pygame"],
  },
  {
    name: "Space Invaders",
    imageUrl: spaceinvaders,
    site: "https://github.com/tamnguyen820/SpaceInvaders",
    description: `Endless Space Invaders game with modern graphics and sound effects.`,
    tools: ["Python", "Pygame"],
  },
  {
    name: "Tic-tac-toe",
    imageUrl: tictactoe,
    site: "https://github.com/tamnguyen820/TicTacToe",
    description: `Classic 2-player tic-tac-toe game.`,
    tools: ["Python", "Pygame", "NumPy"],
  },
];
