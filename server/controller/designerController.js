import designerModel from "../models/designerModel.js";

//NOTE if you prefer you can rename the parameters of the controller function as (request, response) , instead of (req, res)
const getAllDesigners = async (req, response) => {
  console.log("all route");
  console.log("req.query", req.query);

  if (req.query.birth) {
    try {
      const designers = await designerModel.find({
        birth: { $lte: req.query.birth },
      });

      console.log("designers", designers);
      response.status(200).json({
        number: designers.length,
        designers,
      });
    } catch (error) {
      response.status(500).json({
        msg: "error finding designers",
      });
    }
  } else {
    try {
      const allDesigners = await designerModel.find({});
      console.log("allDesigners", allDesigners);
      response.status(200).json({
        number: allDesigners.length,
        allDesigners,
      });
    } catch (error) {
      response.status(500).json({
        msg: "server error",
        error: error,
      });
    }
  }
};

const getDesignersByName = async (req, res) => {
  console.log("req", req);
  console.log("req.query.birth>>>>", req.query.birth);
  const designerName = req.params.name;

  if (req.query.birth) {
    try {
      const designers = await designerModel.find({
        birth: { $lte: req.query.birth },
      });
      res.status(200).json({
        number: designers.length,
        designers,
      });
    } catch (error) {
      res.status(500).json({
        msg: "error finding designers",
      });
    }
  } else {
    try {
      const designer = await designerModel.find({ name: designerName });

      if (designer.length === 0) {
        res.status(200).json({
          msg: "no designer with this name in the DB",
        });
      }
      res.status(200).json({
        designer,
      });
    } catch (error) {
      res.status(500).json({
        msg: "server error",
        error: error,
      });
    }
  }
};

export { getAllDesigners, getDesignersByName };
