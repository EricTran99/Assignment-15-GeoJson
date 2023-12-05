# Earthquake-Visualisation-GeoJson
This is the repository for Assignment 15 which focus on using leaflet as the main coding with GeoJson as the source data for the earthquake. <br/>

In this repository contains three files; <br/>
- html - website code to display the earthquake geojson <br/>
- css - the stylising code, used to display the legend <br/>
- logic.js - main coding, javascript, that holds the code in reading the geojson and creating the circles along with the legend. <br/>

## How does this work?
To ensure that this index.html works, make sure that a folder 'static' contains two folder inside; <br/>
- css - where it will hold the css coding file <br/>
- js - which holds the main javascript file <br/>

From there, the index html can be used to open the website to display the map. <br/>
![image](https://github.com/Nisloen/Assignment-15-GeoJson/assets/134130254/990a1063-d4a0-47c6-aafc-293e79e12b90)


<h3>Whats in the js code? </h3>
In the js, it is broken into three sections. <br/>
1. the first is creating the base map of the world and creating the link from the earthquake and have it set as a string. <br/>
2. the second is taking the coordinate from the geojson and creating the circle based on the location through coordinates 
size of the cirlce through the magnitude and the color of the circle (which the 3rd coordinate is used to determine the color).
In addition, each of the circle have a bindPopup which displays additional info back the selected earthquake. <br/>
3. the third is creating the legend that display what each of the color represent. <br/>
