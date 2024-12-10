import app from "./app";
import http from "http";

const PORT = process.env.PORT || 3080;

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
