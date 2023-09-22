let myMap = L.map("map", {
  center: [-4.768047,128.568276],
  zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// All earthquake in the last 7 days
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// d3.json(link).then(function(data) {
//   L.geoJson(data) .addTo(myMap);
  
//   console.log(data);
// });


d3.json(link).then(function(data) {
  let features = data.features;
  
  

  for (let i = 0; i < features.length; i++) {
        let location = features[i].geometry;
        let property_earthquake = features[i].properties;
        let depth_value = location.coordinates[2];
        let color_type = ""

          if (depth_value > 90) {
            color_type = "#581845";
          }
          else if (depth_value > 70 && depth_value < 90) {
            color_type = "#900C3F";
          }
          else if (depth_value > 50 && depth_value < 70) {
            color_type = "#C70039";
          }
          else if (depth_value > 30 && depth_value < 50) {
            color_type = "#FF5733";
          }
          else if (depth_value > 10 && depth_value < 30) {
            color_type = "#FFC300";
          }
          else {color_type = "#DAF7A6"};

        let circle = L.circle([location.coordinates[1], location.coordinates[0]], {
          color: color_type,
          fillOpacity: 1,
          radius: 25000 * property_earthquake.mag
        });
    
        circle.bindPopup(`<p>Magnitude: ${property_earthquake.mag}<br/>
          Coordinates: ${location.coordinates[1]},${location.coordinates[0]}<br/>
          Depth: ${location.coordinates[2]}</p>`);
        circle.addTo(myMap);
      }
  });

function createLegendControl() {
  let legend = L.control({
    position: "bottomright"
  });
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    let grades = [-10, 10, 30, 50, 70, 90];
    let colors = [
      "#DAF7A6",
      "#FFC300",
      "#FF5733",
      "#C70039",
      "#900C3F",
      "#581845"
    ];

    for (let i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> " +
        grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  return legend;
}

// Create the legend control
let legend = createLegendControl();

// Add the legend to your map
legend.addTo(myMap);