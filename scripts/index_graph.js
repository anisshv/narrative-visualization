// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
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
d3.csv("data/total_emissions_by_year.csv",

    // Now I can use this dataset:
  function(data) {

    var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.Year; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([10000000, d3.max(data, function(d) { return +d.total_emission; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // This allows to find the closest X index of the mouse:
    var bisect = d3.bisector(function(d) { return d.Year; }).left;

    // Create the circle that travels along the curve of chart
    var focus = svg
      .append('g')
      .append('circle')
        .style("fill", "none")
        .attr("stroke", "black")
        .attr('r', 8.5)
        .style("opacity", 0)
    
    // Create the text that travels along the curve of chart
    var focusText = svg
      .append('g')
      .append('text')
        .style("opacity", 0)
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
    
    // // Add X axis label:
    // svg.append("text")
    //   .attr("text-anchor", "end")
    //   .attr("x", width-30)
    //   .attr("y", height + margin.top + 20)
    //   .text("Year");

    // // Y axis label:
    // svg.append("text")
    //   .attr("text-anchor", "end")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", -margin.left)
    //   .attr("x", -margin.top)
    //   .text("Total global emissions")

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Year) })
        .y(function(d) { return y(d.total_emission) })
        )

    // Create a rect on top of the svg area: this rectangle recovers mouse position
    svg
      .append('rect')
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseout', mouseout);
    
    // What happens when the mouse move -> show the annotations at the right positions.
    function mouseover() {
      focus.style("opacity", 1)
      focusText.style("opacity",1)
    }

    function mousemove() {
      // recover coordinate we need
      var x0 = x.invert(d3.mouse(this)[0]);
      var i = bisect(data, x0, 1);
      selectedData = data[i]
      focus
        .attr("cx", x(selectedData.Year))
        .attr("cy", y(selectedData.total_emission))
      focusText
        .html(Math.round(selectedData.total_emission) + " kilotons of CO2 in " + selectedData.Year)
        .attr("x", margin.top)
        .attr("y", margin.left)
    }
    
    function mouseout() {
      focus.style("opacity", 0)
      focusText.style("opacity", 0)
    }

})
