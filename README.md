# Earthquake Visualisation-GeoJson
This is the repository for Assignment 15 which focus on using leaflet as the main coding with GeoJson as the source data for the earthquake. <br/>

In this repository contains three files; <br/>
- html - website code to display the earthquake geojson <br/>
- css - the stylising code, used to display the legend <br/>
- logic.js - main coding, javascript, that holds the code in reading the geojson and creating the circles along with the legend. <br/>

## How does this work?
To ensure that this index.html works, make sure that a folder 'static' contains two folder inside; <br/>
- css - where it will hold the css coding file <br/>
- js - which holds the main javascript file <br/>
- html - where the website coding is made and elements are structured <br/>

## Resource
[https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

<h3>Development process</h3>
In the js, it is broken into three sections. <br/>
The first section contains the connection link to the json datasource that contains all recorded earthquake and details, as well as the canvas display of the world map onto the html website.

```

let myMap = L.map("map", {
  center: [-4.768047,128.568276],
  zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

```
The second part of the module contains a loop system which scan each of the earthquake and categorise them based on the magnitude and the depth of the earthquake. 
the difference in colour is based on the earthquake's depth and are grouped in accordance to a scale, which then a circle Popup is created to display onto the world map.

```
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


```

The third section of the script is the creation of the legend display for viewers to understand the colour's meaning. This was achieved through creating a function that makes the legend seperate from the main script to avoid confusion.
While the function in JavaScript creates the legend, the css script displays the legend onto the map.


### JavaScript
```

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

```
### CSS
```
.legend {
  padding: 10px;
  line-height: 18px;
  color: #555;
  background-color: #fff;
  border-radius: 5px;
}

.legend i {
  float: left;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  opacity: 0.7;
}

```
# Results

With all of the combined coding scripts, the result is a website shows a world map that contains circle Popup, each representing a recorded earthquake with information about the earthquake with Popup description. As well as a legend to help guide the viewers on what each colours represent. <br/>
 <br/>
![image](https://github.com/Nisloen/Assignment-15-GeoJson/assets/134130254/990a1063-d4a0-47c6-aafc-293e79e12b90)
