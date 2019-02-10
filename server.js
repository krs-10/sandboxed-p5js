const path = require("path"),
  express = require("express"),
  middlewareProxy = require("http-proxy-middleware"),
  cors = require("cors"),
  http = require("http"),
  host = process.env.HOST || "0.0.0.0",
  port = process.env.PORT || 8080;



const app = express(),
  DIST_DIR = path.resolve(__dirname, "build"),
  HTML_FILE = path.resolve(DIST_DIR, "index.html");

const proxyOptions = {
  target: "https://krs10-cors.herokuapp.com/",
  // target: "www.google.com", // target host
  changeOrigin: true, // needed for virtual hosted sites
  secure: false,
  allowRedirect: true,
  xfwd: true,
  toProxy: true,
  logLevel: "debug",
  pathRewrite: { "^/proxied/": "" },
};

app.use(express.static(DIST_DIR));
const proxyMiddleware = middlewareProxy(proxyOptions);
app.use("/proxied", proxyMiddleware);
// app.use(cors());
// app.use("/proxied", proxyMiddleware, (req, res, next) => {
//   console.log('server.js -  next: ', next);
//   next()
// });



// send the user to index html page inspite of the url
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

app.listen(process.env.PORT || 8080, () => {
  console.log(
    "Express server listening on port %d in %s mode",
    process.env.PORT || 8080,
    app.settings.env
  );
});

