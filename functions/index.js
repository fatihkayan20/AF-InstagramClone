// API configs

const functions = require("firebase-functions");
const app = require("express")(); // npm i express

const cors = require("cors");
app.use(cors());

const MainMiddleware = require("./util/MainMiddleware");
const { getStories } = require("./routes/StoryRoutes");

app.get("/", (req, res) => {
  return res.json({ aa: "aaaa" });
});

// app.post("/posts/create", createPost);
// app.get("/posts/getAll", getAllPosts);
// app.get("/posts/trending", getTrendingPosts);
// app.get("/posts/:creator/:slug", getPostDetails);

// app.post("/users/signup", signupUser);
// app.post("/users/login", loginUser);

app.get("/stories", getStories);

exports.api = functions.region("europe-west1").https.onRequest(app);
