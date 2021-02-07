const validator = require("validator");
const { db } = require("../util/admin");

exports.getStories = (req, res) => {
  db.collection("stories")
    // .where("time", ">", Date.now())
    .orderBy("time", "desc")
    .get()
    .then((data) => {
      var stories = {};

      var usernames = [];
      data.forEach((story) => {
        usernames.push(story.data().username);
      });

      var unique = usernames.filter((v, i, a) => a.indexOf(v) === i);

      data.forEach((story) => {
        var index = unique.indexOf(story.data().username);

        if (stories[index] === undefined) {
          stories[index] = [];
        }

        stories = {
          ...stories,
          [index]: [...stories[index], story.data()],
        };
      });

      return stories;
    })
    .then((stories) => {
      return res.json(stories);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};
