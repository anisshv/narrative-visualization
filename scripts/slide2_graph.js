// // set the dimensions and margins of the graph
// var margin = {top: 20, right: 30, bottom: 40, left: 175},
//     width = 720 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#d3div")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// //Read the data
// d3.csv("../data/avg_emissions_by_country_long.csv",

//     // Now I can use this dataset:
//   function(data) {

//     // List of groups (here I have one group per column)
//     var allGroup = d3.map(data, function(d){return(d.Area)}).keys()

//     // add the options to the button
//     d3.select("#selectButton")
//       .selectAll('myOptions')
//       .data(allGroup)
//       .enter()
//       .append('option')
//       .text(function (d) { return d; }) // text showed in the menu
//       .attr("value", function (d) { return d; }) // corresponding value returned by the button

//     // A color scale: one color for each group
//     var myColor = d3.scaleOrdinal()
//       .domain(allGroup)
//       .range(d3.schemeSet2);

//     // Add X axis --> it is a date format
//     var x = d3.scaleLinear()
//       // .domain(d3.extent(data, function(d) { return d.Emissions; }))
//       .domain([0, 7000])
//       .range([ 0, width ]);
//     svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-45)")
//         .style("text-anchor", "end");

//     // Add Y axis
//     var y = d3.scaleBand()
//       .range([ 0, height ])
//       .domain(data.map(function(d) { return d.Type; }))
//       .padding(.1);
//     svg.append("g")
//       .call(d3.axisLeft(y));
    
//     // var bars = svg.selectAll(".bar")
//     //   .data(data.filter(function(d){return d.Area==allGroup[0]}))
//     //   .enter()
//     //   .append("rect")
//     //   .attr("x", x(0) )
//     //   // .attr("x", function(d) { return x(d.Emissions); })
//     //   // .attr("width", x.bandwidth())
//     //   .attr("y", function(d) { return y(d.Type); })
//     //   .attr("width", function(d) { return x(d.Emissions); })
//     //   .attr("height", y.bandwidth() )
//     //   .attr("fill", "#69b3a2");

//     // A function that update the chart
//     function update(selectedGroup) {

//     //   // Create new data with the selection?
//       var dataFilter = data.filter(function(d){return d.Area==selectedGroup})

//     //   // Give these new data to update line
//       svg.selectAll(".bar")
//         .data(dataFilter)
//         .enter()
//         .append("rect")
//         .attr("x", x(0) )
//         // .attr("x", function(d) { return x(d.Emissions); })
//         // .attr("width", x.bandwidth())
//         .attr("y", function(d) { return y(d.Type); })
//         .attr("width", function(d) { return x(d.Emissions); })
//         .attr("height", y.bandwidth() )
//         .attr("fill", "#69b3a2");
//     //   bars
//     //       .enter()
//     //       .datum(dataFilter)
//     //       .append("rect")
//     //       .merge(bars)
//     //       .transition()
//     //       .duration(1000)
//     //         .attr("x", function(d) { return x(d.Emissions); })
//     //         .attr("y", function(d) { return y(d.Type); })
//     //         .attr("width", function(d) { return x(d.Emissions); })
//     //         .attr("height", y.bandwidth())
//     //         .attr("fill", "#69b3a2")
//     }

//     // // When the button is changed, run the updateChart function
//     d3.select("#selectButton").on("change", function(d) {
//         // recover the option that has been chosen
//         var selectedOption = d3.select(this).property("value");
//         // run the updateChart function with this selected option
//         update(selectedOption);
//     })

//     update("Oman");


// })

// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 175},
    width = 720 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#d3div")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("../data/avg_emissions_by_country_long.csv",

    // Now I can use this dataset:
  function(data) {

    // List of groups (here I have one group per column)
    var allGroup = d3.map(data, function(d){return(d.Area)}).keys()

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
        .data(allGroup)
      .enter()
        .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
    
    // var dataFilter = data.filter(function(d){return d.Area==selectedGroup})

    var x = d3.scaleLinear()
      // .domain(d3.extent(data, function(d) { return d.Emissions; }))
      .domain([0, 7000])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d.Type; }))
      .padding(.1);
    svg.append("g")
      .call(d3.axisLeft(y));
    
    //Bars
    svg.selectAll(".bar")
      .data(data.filter(function(d){return d.Area==allGroup[0]}))
      .enter()
      .append("rect")
      .attr("x", x(0) )
      .attr("y", function(d) { return y(d.Type); })
      .attr("width", function(d) { return x(d.Emissions); })
      .attr("height", y.bandwidth() )
      .attr("fill", "#69b3a2");
    
        // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.filter(function(d){return d.Area==selectedGroup})

      var x = d3.scaleLinear()
        // .domain(d3.extent(data, function(d) { return d.Emissions; }))
        .domain([0, 7000])
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Add Y axis
      var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.Type; }))
        .padding(.1);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Give these new data to update line
      svg.selectAll(".bar")
        .data(dataFilter)
        .enter()
        .append("rect")
        .merge(".bar")
        .transition()
        .duration(1000)
          .attr("x", x(0) )
          .attr("y", function(d) { return y(d.Type); })
          .attr("width", function(d) { return x(d.Emissions); })
          .attr("height", y.bandwidth() )
          .attr("fill", "#69b3a2");
    }

    // // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value");
        // run the updateChart function with this selected option
        update(selectedOption);
    })

})
