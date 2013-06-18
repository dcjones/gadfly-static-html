function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "152.4mm")
              .attr("height", "101.6mm")
              .attr("viewBox", "0 0 152.4 101.6")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 5 5 L 20.85 5 20.85 84.3 5 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 67.1)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 37.17)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 22.21)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -82.53)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -67.57)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 52.13)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -37.64)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -22.68)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -7.72)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 111.98)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 141.91)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 171.84)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 156.87)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 126.95)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 97.02)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 82.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -52.61)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 7.24)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("4.5");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 9.28)
       .attr("y", 44.65)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 9.28, 44.65)")
    .call(function(text) {
  text.text("Sepal.Width");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 20.85 84.3 L 147.4 84.3 147.4 96.6 20.85 96.6 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", -35.27)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 24.43)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", -5.42)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 233.36)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("11");
})
;
    g.append("svg:text")
       .attr("x", 84.12)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", -65.11)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 263.21)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("12");
})
;
    g.append("svg:text")
       .attr("x", 54.28)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 143.82)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("8");
})
;
    g.append("svg:text")
       .attr("x", -94.96)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", -124.81)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 173.67)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("9");
})
;
    g.append("svg:text")
       .attr("x", 113.97)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 293.06)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("13");
})
;
    g.append("svg:text")
       .attr("x", 203.51)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 84.12)
       .attr("y", 94.6)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Sepal.Length");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
  g.on("mouseover", guide_background_mouseover(parent_id, "#CACACD"))
   .on("mouseout", guide_background_mouseout(parent_id, "#F4F4F8"))
   .call(zoom_behavior(parent_id, t));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath2")
        .append("svg:path")
          .attr("d", "M 20.85 5 L 147.4 5 147.4 84.3 20.85 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 20.85 5 L 147.4 5 147.4 84.3 20.85 84.3 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 20.85 67.1 L 147.4 67.1");
      g.append("svg:path")
         .attr("d", "M 20.85 37.17 L 147.4 37.17");
      g.append("svg:path")
         .attr("d", "M 20.85 22.21 L 147.4 22.21");
      g.append("svg:path")
         .attr("d", "M 20.85 -82.53 L 147.4 -82.53");
      g.append("svg:path")
         .attr("d", "M 20.85 -67.57 L 147.4 -67.57");
      g.append("svg:path")
         .attr("d", "M 20.85 52.13 L 147.4 52.13");
      g.append("svg:path")
         .attr("d", "M 20.85 -37.64 L 147.4 -37.64");
      g.append("svg:path")
         .attr("d", "M 20.85 -22.68 L 147.4 -22.68");
      g.append("svg:path")
         .attr("d", "M 20.85 -7.72 L 147.4 -7.72");
      g.append("svg:path")
         .attr("d", "M 20.85 111.98 L 147.4 111.98");
      g.append("svg:path")
         .attr("d", "M 20.85 141.91 L 147.4 141.91");
      g.append("svg:path")
         .attr("d", "M 20.85 171.84 L 147.4 171.84");
      g.append("svg:path")
         .attr("d", "M 20.85 156.87 L 147.4 156.87");
      g.append("svg:path")
         .attr("d", "M 20.85 126.95 L 147.4 126.95");
      g.append("svg:path")
         .attr("d", "M 20.85 97.02 L 147.4 97.02");
      g.append("svg:path")
         .attr("d", "M 20.85 82.06 L 147.4 82.06");
      g.append("svg:path")
         .attr("d", "M 20.85 -52.61 L 147.4 -52.61");
      g.append("svg:path")
         .attr("d", "M 20.85 7.24 L 147.4 7.24");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M -35.27 5 L -35.27 84.3");
      g.append("svg:path")
         .attr("d", "M 24.43 5 L 24.43 84.3");
      g.append("svg:path")
         .attr("d", "M -5.42 5 L -5.42 84.3");
      g.append("svg:path")
         .attr("d", "M 233.36 5 L 233.36 84.3");
      g.append("svg:path")
         .attr("d", "M 84.12 5 L 84.12 84.3");
      g.append("svg:path")
         .attr("d", "M -65.11 5 L -65.11 84.3");
      g.append("svg:path")
         .attr("d", "M 263.21 5 L 263.21 84.3");
      g.append("svg:path")
         .attr("d", "M 54.28 5 L 54.28 84.3");
      g.append("svg:path")
         .attr("d", "M 143.82 5 L 143.82 84.3");
      g.append("svg:path")
         .attr("d", "M -94.96 5 L -94.96 84.3");
      g.append("svg:path")
         .attr("d", "M -124.81 5 L -124.81 84.3");
      g.append("svg:path")
         .attr("d", "M 173.67 5 L 173.67 84.3");
      g.append("svg:path")
         .attr("d", "M 113.97 5 L 113.97 84.3");
      g.append("svg:path")
         .attr("d", "M 293.06 5 L 293.06 84.3");
      g.append("svg:path")
         .attr("d", "M 203.51 5 L 203.51 84.3");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 20.85 5 L 147.4 5 147.4 84.3 20.85 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke-width", "0.2");
      (function (g) {
        g.attr("stroke-width", "0.2");
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0] * 29.85 + -94.96; })
.attr("cy", function(d) { return d[1] * -29.93 + 141.91; })
.attr("r", 0.6)
.attr("class", "geometry color_RGB(0.27450980392156865,0.5098039215686274,0.7058823529411765)")
.on("mouseout", geom_point_mouseover(0.20), false)
.on("mouseover", geom_point_mouseover(2.00), false)
.attr("stroke", "#0F5D8C")
.attr("fill", "#4682B4")
;
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
}

var data = [
  [5.1,4.9,4.7,4.6,5.0,5.4,4.6,5.0,4.4,4.9,5.4,4.8,4.8,4.3,5.8,5.7,5.4,5.1,5.7,5.1,5.4,5.1,4.6,5.1,4.8,5.0,5.0,5.2,5.2,4.7,4.8,5.4,5.2,5.5,4.9,5.0,5.5,4.9,4.4,5.1,5.0,4.5,4.4,5.0,5.1,4.8,5.1,4.6,5.3,5.0,7.0,6.4,6.9,5.5,6.5,5.7,6.3,4.9,6.6,5.2,5.0,5.9,6.0,6.1,5.6,6.7,5.6,5.8,6.2,5.6,5.9,6.1,6.3,6.1,6.4,6.6,6.8,6.7,6.0,5.7,5.5,5.5,5.8,6.0,5.4,6.0,6.7,6.3,5.6,5.5,5.5,6.1,5.8,5.0,5.6,5.7,5.7,6.2,5.1,5.7,6.3,5.8,7.1,6.3,6.5,7.6,4.9,7.3,6.7,7.2,6.5,6.4,6.8,5.7,5.8,6.4,6.5,7.7,7.7,6.0,6.9,5.6,7.7,6.3,6.7,7.2,6.2,6.1,6.4,7.2,7.4,7.9,6.4,6.3,6.1,7.7,6.3,6.4,6.0,6.9,6.7,6.9,5.8,6.8,6.7,6.7,6.3,6.5,6.2,5.9],
  [3.5,3.0,3.2,3.1,3.6,3.9,3.4,3.4,2.9,3.1,3.7,3.4,3.0,3.0,4.0,4.4,3.9,3.5,3.8,3.8,3.4,3.7,3.6,3.3,3.4,3.0,3.4,3.5,3.4,3.2,3.1,3.4,4.1,4.2,3.1,3.2,3.5,3.6,3.0,3.4,3.5,2.3,3.2,3.5,3.8,3.0,3.8,3.2,3.7,3.3,3.2,3.2,3.1,2.3,2.8,2.8,3.3,2.4,2.9,2.7,2.0,3.0,2.2,2.9,2.9,3.1,3.0,2.7,2.2,2.5,3.2,2.8,2.5,2.8,2.9,3.0,2.8,3.0,2.9,2.6,2.4,2.4,2.7,2.7,3.0,3.4,3.1,2.3,3.0,2.5,2.6,3.0,2.6,2.3,2.7,3.0,2.9,2.9,2.5,2.8,3.3,2.7,3.0,2.9,3.0,3.0,2.5,2.9,2.5,3.6,3.2,2.7,3.0,2.5,2.8,3.2,3.0,3.8,2.6,2.2,3.2,2.8,2.8,2.7,3.3,3.2,2.8,3.0,2.8,3.0,2.8,3.8,2.8,2.8,2.6,3.0,3.4,3.1,3.0,3.1,3.1,3.1,2.7,3.2,3.3,3.0,2.5,3.0,3.4,3.0]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
