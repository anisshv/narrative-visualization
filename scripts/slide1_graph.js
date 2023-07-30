// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 200},
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
d3.csv("../data/avg_emissions_by_type.csv",

    // Now I can use this dataset:
  function(data) {

    var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.Emissions; }))
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
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0) )
      .attr("y", function(d) { return y(d.Type); })
      .attr("width", function(d) { return x(d.Emissions); })
      .attr("height", y.bandwidth() )
      .attr("fill", "#69b3a2");

    // This allows to find the closest X index of the mouse:
    // var bisect = d3.bisector(function(d) { return d.Year; }).left;

    // Create the circle that travels along the curve of chart
    // var focus = svg
    //   .append('g')
    //   .append('circle')
    //     .style("fill", "none")
    //     .attr("stroke", "black")
    //     .attr('r', 8.5)
    //     .style("opacity", 0)
    
    // // Create the text that travels along the curve of chart
    // var focusText = svg
    //   .append('g')
    //   .append('text')
    //     .style("opacity", 0)
    //     .attr("text-anchor", "left")
    //     .attr("alignment-baseline", "middle")
    
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

    // Create a rect on top of the svg area: this rectangle recovers mouse position
    // svg
    //   .append('rect')
    //   .style("fill", "none")
    //   .style("pointer-events", "all")
    //   .attr('width', width)
    //   .attr('height', height)
    //   .on('mouseover', mouseover)
    //   .on('mousemove', mousemove)
    //   .on('mouseout', mouseout);
    
    // // What happens when the mouse move -> show the annotations at the right positions.
    // function mouseover() {
    //   focus.style("opacity", 1)
    //   focusText.style("opacity",1)
    // }

    // function mousemove() {
    //   // recover coordinate we need
    //   var x0 = x.invert(d3.mouse(this)[0]);
    //   var i = bisect(data, x0, 1);
    //   selectedData = data[i]
    //   focus
    //     .attr("cx", x(selectedData.Emissions))
    //     .attr("cy", y(selectedData.Type))
    //   focusText
    //     .html("Year:" + selectedData.Emissions + "  -  " + "Emissions:" + selectedData.Emissions)
    //     .attr("Year", x(selectedData.Emissions)+150)
    //     .attr("Emissions", y(selectedData.Emissions)+150)
    //   }
    
    // function mouseout() {
    //   focus.style("opacity", 0)
    //   focusText.style("opacity", 0)
    // }

})
