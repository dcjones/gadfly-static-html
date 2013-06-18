function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "101.6mm")
              .attr("height", "101.6mm")
              .attr("viewBox", "0 0 101.6 101.6")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 5 5 L 19.02 5 19.02 84.3 5 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 111.98)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -52.61)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("13");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 37.17)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -67.57)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("14");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 7.24)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("9");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 156.87)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 141.91)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 22.21)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("8");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 67.1)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -37.64)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("12");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 126.95)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 52.13)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -22.68)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("11");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 171.84)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-2");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 97.02)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", 82.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -82.53)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", 18.02)
       .attr("y", -7.72)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
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
       .attr("x", 9.28)
       .attr("y", 44.65)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 9.28, 44.65)")
    .call(function(text) {
  text.text("lwage");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 19.02 84.3 L 96.6 84.3 96.6 96.6 19.02 96.6 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 27.34)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 38.42)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 32.88)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", 66.12)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("12");
})
;
    g.append("svg:text")
       .attr("x", 49.5)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("9");
})
;
    g.append("svg:text")
       .attr("x", 60.58)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("11");
})
;
    g.append("svg:text")
       .attr("x", 43.96)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("8");
})
;
    g.append("svg:text")
       .attr("x", 82.75)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", 21.79)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 77.21)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("14");
})
;
    g.append("svg:text")
       .attr("x", 93.83)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("17");
})
;
    g.append("svg:text")
       .attr("x", 55.04)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", 88.29)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("16");
})
;
    g.append("svg:text")
       .attr("x", 71.66)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("13");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 57.81)
       .attr("y", 94.6)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("ed");
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
          .attr("d", "M 19.02 5 L 96.6 5 96.6 84.3 19.02 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 19.02 5 L 96.6 5 96.6 84.3 19.02 84.3 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 19.02 111.98 L 96.6 111.98");
      g.append("svg:path")
         .attr("d", "M 19.02 -52.61 L 96.6 -52.61");
      g.append("svg:path")
         .attr("d", "M 19.02 37.17 L 96.6 37.17");
      g.append("svg:path")
         .attr("d", "M 19.02 -67.57 L 96.6 -67.57");
      g.append("svg:path")
         .attr("d", "M 19.02 7.24 L 96.6 7.24");
      g.append("svg:path")
         .attr("d", "M 19.02 156.87 L 96.6 156.87");
      g.append("svg:path")
         .attr("d", "M 19.02 141.91 L 96.6 141.91");
      g.append("svg:path")
         .attr("d", "M 19.02 22.21 L 96.6 22.21");
      g.append("svg:path")
         .attr("d", "M 19.02 67.1 L 96.6 67.1");
      g.append("svg:path")
         .attr("d", "M 19.02 -37.64 L 96.6 -37.64");
      g.append("svg:path")
         .attr("d", "M 19.02 126.95 L 96.6 126.95");
      g.append("svg:path")
         .attr("d", "M 19.02 52.13 L 96.6 52.13");
      g.append("svg:path")
         .attr("d", "M 19.02 -22.68 L 96.6 -22.68");
      g.append("svg:path")
         .attr("d", "M 19.02 171.84 L 96.6 171.84");
      g.append("svg:path")
         .attr("d", "M 19.02 97.02 L 96.6 97.02");
      g.append("svg:path")
         .attr("d", "M 19.02 82.06 L 96.6 82.06");
      g.append("svg:path")
         .attr("d", "M 19.02 -82.53 L 96.6 -82.53");
      g.append("svg:path")
         .attr("d", "M 19.02 -7.72 L 96.6 -7.72");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 30.11 5 L 30.11 84.3");
      g.append("svg:path")
         .attr("d", "M 79.98 5 L 79.98 84.3");
      g.append("svg:path")
         .attr("d", "M 35.65 5 L 35.65 84.3");
      g.append("svg:path")
         .attr("d", "M 24.57 5 L 24.57 84.3");
      g.append("svg:path")
         .attr("d", "M 68.89 5 L 68.89 84.3");
      g.append("svg:path")
         .attr("d", "M 46.73 5 L 46.73 84.3");
      g.append("svg:path")
         .attr("d", "M 91.06 5 L 91.06 84.3");
      g.append("svg:path")
         .attr("d", "M 85.52 5 L 85.52 84.3");
      g.append("svg:path")
         .attr("d", "M 57.81 5 L 57.81 84.3");
      g.append("svg:path")
         .attr("d", "M 63.35 5 L 63.35 84.3");
      g.append("svg:path")
         .attr("d", "M 52.27 5 L 52.27 84.3");
      g.append("svg:path")
         .attr("d", "M 74.44 5 L 74.44 84.3");
      g.append("svg:path")
         .attr("d", "M 41.19 5 L 41.19 84.3");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 19.02 5 L 96.6 5 96.6 84.3 19.02 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("class", "geometry");
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 37.49 31.06 L 39.34 31.06");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 37.49 64.98 L 39.34 64.98");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 38.42 43.78 L 38.42 31.06");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 38.42 52.26 L 38.42 64.98");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 36.15 52.26 L 40.69 52.26 40.69 43.78 36.15 43.78 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 48.58 23.38 L 50.42 23.38");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 48.58 65.74 L 50.42 65.74");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 49.5 39.27 L 49.5 23.38");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 49.5 49.86 L 49.5 65.74");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 47.23 49.86 L 51.77 49.86 51.77 39.27 47.23 39.27 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 31.95 37.15 L 33.8 37.15");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 31.95 54.39 L 33.8 54.39");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 32.88 43.62 L 32.88 37.15");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 32.88 47.92 L 32.88 54.39");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 30.61 47.92 L 35.15 47.92 35.15 43.62 30.61 43.62 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 43.04 24.41 L 44.88 24.41");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 43.04 66.97 L 44.88 66.97");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 43.96 40.37 L 43.96 24.41");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 43.96 51.01 L 43.96 66.97");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 41.69 51.01 L 46.23 51.01 46.23 40.37 41.69 40.37 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 70.74 26.08 L 72.59 26.08");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 70.74 60.35 L 72.59 60.35");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 71.66 38.93 L 71.66 26.08");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 71.66 47.5 L 71.66 60.35");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 69.39 47.5 L 73.94 47.5 73.94 38.93 69.39 38.93 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 20.87 40.87 L 22.72 40.87");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 20.87 60.33 L 22.72 60.33");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 21.79 48.16 L 21.79 40.87");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 21.79 53.03 L 21.79 60.33");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 19.52 53.03 L 24.07 53.03 24.07 48.16 19.52 48.16 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 76.28 26.01 L 78.13 26.01");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 76.28 56.08 L 78.13 56.08");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 77.21 37.28 L 77.21 26.01");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 77.21 44.8 L 77.21 56.08");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 74.94 44.8 L 79.48 44.8 79.48 37.28 74.94 37.28 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 26.41 19.06 L 28.26 19.06");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 26.41 69.79 L 28.26 69.79");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 27.34 38.08 L 27.34 19.06");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 27.34 50.77 L 27.34 69.79");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 25.07 50.77 L 29.61 50.77 29.61 38.08 25.07 38.08 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 81.82 22.69 L 83.67 22.69");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 81.82 54.51 L 83.67 54.51");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 82.75 34.62 L 82.75 22.69");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 82.75 42.58 L 82.75 54.51");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 80.48 42.58 L 85.02 42.58 85.02 34.62 80.48 34.62 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 59.66 25.87 L 61.51 25.87");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 59.66 62.28 L 61.51 62.28");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 60.58 39.52 L 60.58 25.87");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 60.58 48.63 L 60.58 62.28");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 58.31 48.63 L 62.85 48.63 62.85 39.52 58.31 39.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 87.36 19.77 L 89.21 19.77");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 87.36 57.94 L 89.21 57.94");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 88.29 34.08 L 88.29 19.77");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 88.29 43.63 L 88.29 57.94");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 86.02 43.63 L 90.56 43.63 90.56 34.08 86.02 34.08 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 54.12 26.73 L 55.97 26.73");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 54.12 62.24 L 55.97 62.24");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 55.04 40.04 L 55.04 26.73");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 55.04 48.92 L 55.04 62.24");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 52.77 48.92 L 57.31 48.92 57.31 40.04 52.77 40.04 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 65.2 26.85 L 67.05 26.85");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 65.2 58.82 L 67.05 58.82");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 66.12 38.84 L 66.12 26.85");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 66.12 46.83 L 66.12 58.82");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 63.85 46.83 L 68.39 46.83 68.39 38.84 63.85 38.84 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 92.91 23.43 L 94.75 23.43");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 92.91 51.6 L 94.75 51.6");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 93.83 33.99 L 93.83 23.43");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#0F5D8C");
        g.append("svg:path")
           .attr("d", "M 93.83 41.03 L 93.83 51.6");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("stroke", "#0F5D8C")
         .attr("stroke-width", "0.3");
        g.append("svg:path")
           .attr("d", "M 91.56 41.03 L 96.1 41.03 96.1 33.99 91.56 33.99 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 37.49 48.83 L 39.34 48.83");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 48.58 44.27 L 50.42 44.27");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 31.95 45.82 L 33.8 45.82");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 43.04 44.65 L 44.88 44.65");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 70.74 42.89 L 72.59 42.89");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 20.87 51.11 L 22.72 51.11");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 76.28 40.13 L 78.13 40.13");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 26.41 49.44 L 28.26 49.44");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 81.82 38.9 L 83.67 38.9");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 59.66 43.89 L 61.51 43.89");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 87.36 38.58 L 89.21 38.58");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 54.12 43.71 L 55.97 43.71");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 65.2 42.85 L 67.05 42.85");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke-width", "0.2")
         .attr("stroke", "#B8EFFF");
        g.append("svg:path")
           .attr("d", "M 92.91 38.58 L 94.75 38.58");
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
}

var data = [
];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
