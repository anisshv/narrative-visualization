---
layout: default
title: Second
navigable: false
---

<style>

.node {
  stroke: #fff;
  stroke-width: 1.5px;
}

.link {
  stroke: #999;
  stroke-opacity: .6;
}

.bar { fill: steelblue; }

</style>



<div id='d3div'></div>

<script src="//d3js.org/d3.v4.min.js"></script>


# Agricultural Carbon Dioxide Emissions - by Type


Here, we take a closer look at the distribution of Carbox Dioxide emissions across various agricultural factors. In particular, this graph shows the average **global** emission across these factors. The factors are as follows:

- Savanna fires: Emissions from fires in savanna ecosystems.
- Forest fires: Emissions from fires in forested areas.
- Crop Residues: Emissions from burning or decomposing leftover plant material after crop harvesting.
- Rice Cultivation: Emissions from methane released during rice cultivation.
- Drained organic soils (CO2): Emissions from carbon dioxide released when draining organic soils.
- Pesticides Manufacturing: Emissions from the production of pesticides.
- Food Transport: Emissions from transporting food products.
- Food Household Consumption: Emissions from food consumption at the household level.
- Food Retail: Emissions from the operation of retail establishments selling food.
- On-farm Electricity Use: Electricity consumption on farms.
- Food Packaging: Emissions from the production and disposal of food packaging materials.
- Agrifood Systems Waste Disposal: Emissions from waste disposal in the agrifood system.
- Food Processing: Emissions from processing food products.
- Fertilizers Manufacturing: Emissions from the production of fertilizers.



Looking at this graph, does it surprise you that Food Systems Waste Disposal has the highest average CO2 emission value? 



Generally, we see that the top drivers of agricultural emissions stem from Waste Disposal, Food Consumption and interestingly, Rice Cultivation. The first two should be intuitive - media has taught us that waste (be it personal or industrial) generates large quantities of CO2 emissions, and it is no different in the agricultural sector. The consumption of food ranking highly should also make sense - after all, with the world population being as large as it is, it would make sense that food consumption would, on average across countries, be so high. After all, every country has a sizable population to feed. This brings us to our third highest factor - Rice Cultivation. Does it surprise you that this value is so high? Intuitively, it makes sense that rice cultivation would generate a large amount of CO2 emissions. However, there are only a few countries in the world where rice paddies are cultivated regularly. Do these countries combined make up the third largest chunk of agricultural emissions?



In truth, the relationships here are slightly cherry picked. A country with a large savanna would obviously have a higher "Savanna Fires" value than a nation without a savanna. Similarly, the scale of industry in a country that primarily exports rice would obviously skew the value of "Rice Cultivation" compared to a country that doesn't have rice paddies. Thus, while this graph is useful as an overview, it may be more interesting to break down the relative differences by country, rather than aggregating them and allowing large countries (such as China or India) to skew the overall quantities.


<script src="../scripts/slide1_graph.js"></script>



[Previous Slide](../index.md)



[Next Slide](slide2.md)