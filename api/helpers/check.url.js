const checkUrl = (req, res, next) => {
  const url = req.url;
  const query = req.query;
  const queryLength = Object.keys(query).length;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const last_name = req.query.last_name;
  const clicks = req.query.clicks;
  const page_views = req.query.page_views;

  if(!url.includes('?')) {
    return next();
  } else if((queryLength === 2) && page && limit ) {
    return next();
  } else if ((queryLength === 3) && page && limit && last_name) {
    if(last_name === "ascending" || last_name === "descending") return next()
    else return res.status(404).json('SmartBin: Invalid URL, Check API');
  } else if ((queryLength === 3) && page && limit && clicks) {
    if(clicks === "ascending" || clicks === "descending") return next()
    else return res.status(404).json('SmartBin: Invalid URL, Check API');
  } else if ((queryLength === 3) && page && limit && page_views) {
    if(page_views === "ascending" || page_views === "descending") return next()
    return res.status(404).json('SmartBin: Invalid URL, Check API');
  } else {
    return res.status(404).json('SmartBin: Invalid URL, Check API');
  }
}

module.exports = checkUrl;
