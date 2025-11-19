const readJson = require("../utils/readJson");
const topicData = require("../data/topics.json");  


exports.getTopics = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const sortQuery = req.query.sort;

    if (!searchQuery || searchQuery.trim() === "") {
      return res.status(400).json({
        status: 400,
        message: "Invalid query. 'search' parameter is required."
      });
    }

  
    const topics = await readJson("data/topics.json");

    const filtered = topics.filter(topic =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortQuery === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return res.status(200).json({
      status: 200,
      results: filtered.length,
      topics: filtered
    });

  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message
    });
  }
};
