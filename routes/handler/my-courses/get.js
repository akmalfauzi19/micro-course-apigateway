const apiAdapter = require("../../apiAdapter");

const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    //   user.data itu mengambil dari jwt di api gateway
    const userId = req.user.data.id;
    const myCourse = await api.get("/api/my-courses", {
      params: {
        user_id: userId,
      },
    });
    return res.json(myCourse.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
      });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
