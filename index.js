'use strict';

let bbox = JSON.parse(process.argv[2]);

let bboxToGeoJSON = (bbox) => {
  let sw = bbox.slice(0, 2);
  let ne = bbox.slice(2, 4);
  let se = calcSE(sw, ne);
  let nw = calcNW(sw, ne);

  let geojson = `{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [${sw}],
              [${se}],
              [${ne}],
              [${nw}],
              [${sw}]
            ]
          ]
        }
      }
    ]
  }`

  return geojson;
};

let calcSE = (sw, ne) => {
  let result = [ne[0], sw[1]];
  return result;
}

let calcNW = (sw, ne) => {
  let result = [sw[0], ne[1]];
  return result;
}

console.log(bboxToGeoJSON(bbox));

// TODO: write the output of bboxToGeoJSON() to a geojson file
// TODO: open new geojson file in geojson.io
