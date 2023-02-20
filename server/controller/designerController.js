import designerModel from "../models/designerModel.js";

const getAllDesigners = async (req, response) => {
  console.log("all route");

  if (req.query.born) {
    try {
      const designers = await designerModel.find({
        born: { $lte: req.query.born },
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
  // console.log("req", req);
  //when we fetch http://localhost:5002/api/designers/singleDesigner/:alvar  , "alvar" will arrive in the field req.params.name

  // console.log("req.query.birth>>>>", req.query.birth);
  console.log("req.query", req.query);
  console.log("req.params", req.params);
  const designerName = req.params.name;
  console.log("designerName", designerName);

  if (req.query.birth) {
    console.log("req.query.born", req.query.born);
    try {
      const designers = await designerModel.find({
        born: { $lte: req.query.born },
      });
      console.log("designer with birth", designers);
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
      // console.log("designerName before try", designerName);
      const designer = await designerModel.findOne({ name: req.params.name });
      console.log("designer", designer);
      if (designer.length === 0) {
        res.status(200).json({
          msg: "no designer with this name in the DB",
        });
      } else {
        res.status(200).json({
          designer,
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "server error",
        error: error,
      });
    }
  }
};

export { getAllDesigners, getDesignersByName };
