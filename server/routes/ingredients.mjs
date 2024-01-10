import express, { json } from "express";
import fs from "fs";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const DEFAULT_PATH = "../../data/ingredients.json";
const JSON_PATH = process.env.JSON_PATH || DEFAULT_PATH;

const router = express.Router();

// Get the ingredients
router.get("/get", async (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Content-Type": "aplication/json",
  });

  try {
    const data = getConfig(JSON_PATH);
    res.send(data).status(200);
  } catch (e) {
    // 501/502 - Bad Request
    res.send(e.message).status(501);
  }
});

// Update all user settings one-shot
router.patch("/set", async (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Content-Type": "aplication/json",
  });

  if (req?.body == null || !Array.isArray(req?.body)) {
    res.send("Invalid Data Type".status(400));
    return;
  }

  const absolutePath = __dirname + "/" + JSON_PATH;

  // If the file does not exis, it will be created
  fs.writeFile(absolutePath, JSON.stringify(req.body), function (err) {
    if (err) res.send(err.message).status(500);

    res.send("Success").status(200);
  });
});

function readJsonFileSync(filepath, encoding) {
  if (typeof encoding == "undefined") {
    encoding = "utf8";
  }

  const file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getConfig(file) {
  const filepath = __dirname + "/" + file;
  return readJsonFileSync(filepath);
}

export default router;
