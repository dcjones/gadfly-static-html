function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "152.4mm")
              .attr("height", "152.4mm")
              .attr("viewBox", "0 0 152.4 152.4")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 5 5 L 24.22 5 24.22 135.1 5 135.1 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -134.51)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("13000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 49.59)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("4000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 172.33)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-2000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 213.25)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-4000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -114.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("12000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -32.23)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("8000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 90.51)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 8.68)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 110.96)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 70.05)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -73.14)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("10000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 151.88)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 29.14)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 131.42)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -11.77)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -52.69)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("9000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 254.16)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-6000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 274.62)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-7000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", -93.6)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("11000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 233.7)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-5000");
})
;
    g.append("svg:text")
       .attr("x", 23.22)
       .attr("y", 192.79)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-3000");
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
       .attr("y", 70.05)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 9.28, 70.05)")
    .call(function(text) {
  text.text("brain");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 24.22 135.1 L 147.4 135.1 147.4 147.4 24.22 147.4 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 260.13)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("16000");
})
;
    g.append("svg:text")
       .attr("x", 85.81)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4000");
})
;
    g.append("svg:text")
       .attr("x", -88.51)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-8000");
})
;
    g.append("svg:text")
       .attr("x", -59.46)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-6000");
})
;
    g.append("svg:text")
       .attr("x", 143.91)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("8000");
})
;
    g.append("svg:text")
       .attr("x", 231.07)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("14000");
})
;
    g.append("svg:text")
       .attr("x", 114.86)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6000");
})
;
    g.append("svg:text")
       .attr("x", 172.97)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10000");
})
;
    g.append("svg:text")
       .attr("x", 27.7)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 56.75)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2000");
})
;
    g.append("svg:text")
       .attr("x", 202.02)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("12000");
})
;
    g.append("svg:text")
       .attr("x", -30.4)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-4000");
})
;
    g.append("svg:text")
       .attr("x", -1.35)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-2000");
})
;
    g.append("svg:text")
       .attr("x", -117.56)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-10000");
})
;
    g.append("svg:text")
       .attr("x", 289.18)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("18000");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 85.81)
       .attr("y", 145.4)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("body");
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
          .attr("d", "M 24.22 5 L 147.4 5 147.4 135.1 24.22 135.1 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 24.22 5 L 147.4 5 147.4 135.1 24.22 135.1 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 24.22 -134.51 L 147.4 -134.51");
      g.append("svg:path")
         .attr("d", "M 24.22 49.59 L 147.4 49.59");
      g.append("svg:path")
         .attr("d", "M 24.22 172.33 L 147.4 172.33");
      g.append("svg:path")
         .attr("d", "M 24.22 213.25 L 147.4 213.25");
      g.append("svg:path")
         .attr("d", "M 24.22 -114.06 L 147.4 -114.06");
      g.append("svg:path")
         .attr("d", "M 24.22 -32.23 L 147.4 -32.23");
      g.append("svg:path")
         .attr("d", "M 24.22 90.51 L 147.4 90.51");
      g.append("svg:path")
         .attr("d", "M 24.22 8.68 L 147.4 8.68");
      g.append("svg:path")
         .attr("d", "M 24.22 110.96 L 147.4 110.96");
      g.append("svg:path")
         .attr("d", "M 24.22 70.05 L 147.4 70.05");
      g.append("svg:path")
         .attr("d", "M 24.22 -73.14 L 147.4 -73.14");
      g.append("svg:path")
         .attr("d", "M 24.22 151.88 L 147.4 151.88");
      g.append("svg:path")
         .attr("d", "M 24.22 29.14 L 147.4 29.14");
      g.append("svg:path")
         .attr("d", "M 24.22 131.42 L 147.4 131.42");
      g.append("svg:path")
         .attr("d", "M 24.22 -11.77 L 147.4 -11.77");
      g.append("svg:path")
         .attr("d", "M 24.22 -52.69 L 147.4 -52.69");
      g.append("svg:path")
         .attr("d", "M 24.22 254.16 L 147.4 254.16");
      g.append("svg:path")
         .attr("d", "M 24.22 274.62 L 147.4 274.62");
      g.append("svg:path")
         .attr("d", "M 24.22 -93.6 L 147.4 -93.6");
      g.append("svg:path")
         .attr("d", "M 24.22 233.7 L 147.4 233.7");
      g.append("svg:path")
         .attr("d", "M 24.22 192.79 L 147.4 192.79");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 260.13 5 L 260.13 135.1");
      g.append("svg:path")
         .attr("d", "M 85.81 5 L 85.81 135.1");
      g.append("svg:path")
         .attr("d", "M -88.51 5 L -88.51 135.1");
      g.append("svg:path")
         .attr("d", "M -59.46 5 L -59.46 135.1");
      g.append("svg:path")
         .attr("d", "M 143.91 5 L 143.91 135.1");
      g.append("svg:path")
         .attr("d", "M 231.07 5 L 231.07 135.1");
      g.append("svg:path")
         .attr("d", "M 114.86 5 L 114.86 135.1");
      g.append("svg:path")
         .attr("d", "M 172.97 5 L 172.97 135.1");
      g.append("svg:path")
         .attr("d", "M 27.7 5 L 27.7 135.1");
      g.append("svg:path")
         .attr("d", "M 56.75 5 L 56.75 135.1");
      g.append("svg:path")
         .attr("d", "M 202.02 5 L 202.02 135.1");
      g.append("svg:path")
         .attr("d", "M -30.4 5 L -30.4 135.1");
      g.append("svg:path")
         .attr("d", "M -1.35 5 L -1.35 135.1");
      g.append("svg:path")
         .attr("d", "M -117.56 5 L -117.56 135.1");
      g.append("svg:path")
         .attr("d", "M 289.18 5 L 289.18 135.1");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 24.22 5 L 147.4 5 147.4 135.1 24.22 135.1 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke-width", "0.2");
      (function (g) {
        g.attr("stroke-width", "0.2");
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0] * 0.01 + 27.7; })
.attr("cy", function(d) { return d[1] * -0.02 + 131.42; })
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
  [3.385,0.48,1.35,465.0,36.33,27.66,14.83,1.04,4.19,0.425,0.101,0.92,1.0,0.005,0.06,3.5,2.0,1.7,2547.0,0.023,187.1,521.0,0.785,10.0,3.3,0.2,1.41,529.0,207.0,85.0,0.75,62.0,6654.0,3.5,6.8,35.0,4.05,0.12,0.023,0.01,1.4,250.0,2.5,55.5,100.0,52.16,10.55,0.55,60.0,3.6,4.288,0.28,0.075,0.122,0.048,192.0,3.0,160.0,0.9,1.62,0.104,4.235],
  [44.5,15.5,8.1,423.0,119.5,115.0,98.2,5.5,58.0,6.4,4.0,5.7,6.6,0.14,1.0,10.8,12.3,6.3,4603.0,0.3,419.0,655.0,3.5,115.0,25.6,5.0,17.5,680.0,406.0,325.0,12.3,1320.0,5712.0,3.9,179.0,56.0,17.0,1.0,0.4,0.25,12.5,490.0,12.1,175.0,157.0,440.0,179.5,2.4,81.0,21.0,39.2,1.9,1.2,3.0,0.33,180.0,25.0,169.0,2.6,11.4,2.5,50.4]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
