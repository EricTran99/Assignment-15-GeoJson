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

From there, the index html can be used to open the website to display the map. <br/>
![image](https://github.com/Nisloen/Assignment-15-GeoJson/assets/134130254/990a1063-d4a0-47c6-aafc-293e79e12b90)


<h3>Development process</h3>
In the js, it is broken into three sections. <br/>
1. In the JavaScript, the code contains a section that displays the default image of the map, along with the variable ‘link’ refering to a website that contains the json details of recorded earthquakes.<br/>

![image](https://github.com/EricTran99/Earthquake_Visualisation/assets/134130254/24adc5bd-8ca8-4ef5-8ecb-73602b5d7bc4) <br/>

2. The next bit categorise the earthquake information as it runs through a loop which groups the earthquake and each group are associated with a colour. Afterwards, the code creates circle based on the earthquake’s magnitude and bind onto the map.<br/>
![image](https://github.com/EricTran99/Earthquake_Visualisation/assets/134130254/18537d5f-8fa1-4568-9f76-a1ff868b9d06)

3. The final piece in the code showcase the creation for the legend that shows the colour reference.<br/>
![image](https://github.com/EricTran99/Earthquake_Visualisation/assets/134130254/acbc475e-8f96-4658-9c3e-a0355d3e89e0) <br/>

From there, the index html can be used to open the website to display the map, as well as the result showcasing the map with all of the earthquake popup. <br/>
![image](https://github.com/Nisloen/Assignment-15-GeoJson/assets/134130254/990a1063-d4a0-47c6-aafc-293e79e12b90)
