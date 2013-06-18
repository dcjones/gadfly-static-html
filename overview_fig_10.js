function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "152.4mm")
              .attr("height", "76.2mm")
              .attr("viewBox", "0 0 152.4 76.2")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 81.2 5 L 86.66 5 86.66 58.9 81.2 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 85.66)
       .attr("y", 6.53)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("30");
})
;
    g.append("svg:text")
       .attr("x", 85.66)
       .attr("y", 23.48)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("20");
})
;
    g.append("svg:text")
       .attr("x", 85.66)
       .attr("y", 40.43)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", 85.66)
       .attr("y", 55.68)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 86.66 58.9 L 147.4 58.9 147.4 71.2 86.66 71.2 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 99.84)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2.5");
})
;
    g.append("svg:text")
       .attr("x", 122.76)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("3.5");
})
;
    g.append("svg:text")
       .attr("x", 134.22)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 214.44)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7.5");
})
;
    g.append("svg:text")
       .attr("x", 202.98)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 111.3)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 180.06)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", 168.6)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5.5");
})
;
    g.append("svg:text")
       .attr("x", 157.14)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 65.46)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 42.54)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 19.62)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 31.08)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-0.5");
})
;
    g.append("svg:text")
       .attr("x", 54)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0.5");
})
;
    g.append("svg:text")
       .attr("x", 76.92)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("1.5");
})
;
    g.append("svg:text")
       .attr("x", 88.38)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 191.52)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6.5");
})
;
    g.append("svg:text")
       .attr("x", 145.68)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
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
       .attr("x", 117.03)
       .attr("y", 69.2)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Sepal.Width");
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
          .attr("d", "M 86.66 5 L 147.4 5 147.4 58.9 86.66 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 86.66 5 L 147.4 5 147.4 58.9 86.66 58.9 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 86.66 6.53 L 147.4 6.53");
      g.append("svg:path")
         .attr("d", "M 86.66 23.48 L 147.4 23.48");
      g.append("svg:path")
         .attr("d", "M 86.66 40.43 L 147.4 40.43");
      g.append("svg:path")
         .attr("d", "M 86.66 55.68 L 147.4 55.68");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 99.84 5 L 99.84 58.9");
      g.append("svg:path")
         .attr("d", "M 122.76 5 L 122.76 58.9");
      g.append("svg:path")
         .attr("d", "M 134.22 5 L 134.22 58.9");
      g.append("svg:path")
         .attr("d", "M 214.44 5 L 214.44 58.9");
      g.append("svg:path")
         .attr("d", "M 202.98 5 L 202.98 58.9");
      g.append("svg:path")
         .attr("d", "M 111.3 5 L 111.3 58.9");
      g.append("svg:path")
         .attr("d", "M 180.06 5 L 180.06 58.9");
      g.append("svg:path")
         .attr("d", "M 168.6 5 L 168.6 58.9");
      g.append("svg:path")
         .attr("d", "M 157.14 5 L 157.14 58.9");
      g.append("svg:path")
         .attr("d", "M 65.46 5 L 65.46 58.9");
      g.append("svg:path")
         .attr("d", "M 42.54 5 L 42.54 58.9");
      g.append("svg:path")
         .attr("d", "M 19.62 5 L 19.62 58.9");
      g.append("svg:path")
         .attr("d", "M 31.08 5 L 31.08 58.9");
      g.append("svg:path")
         .attr("d", "M 54 5 L 54 58.9");
      g.append("svg:path")
         .attr("d", "M 76.92 5 L 76.92 58.9");
      g.append("svg:path")
         .attr("d", "M 88.38 5 L 88.38 58.9");
      g.append("svg:path")
         .attr("d", "M 191.52 5 L 191.52 58.9");
      g.append("svg:path")
         .attr("d", "M 145.68 5 L 145.68 58.9");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 86.66 5 L 147.4 5 147.4 58.9 86.66 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke", "none");
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("shape-rendering", "crispEdges");
        (function (g) {
          g.attr("id", "id141")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 139.72 57.38 L 141.56 57.38 141.56 57.38 139.72 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id137")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 136.05 57.38 L 137.89 57.38 137.89 55.68 136.05 55.68 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id133")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 132.39 57.38 L 134.22 57.38 134.22 55.68 132.39 55.68 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id129")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 128.72 57.38 L 130.55 57.38 130.55 47.21 128.72 47.21 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id125")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 125.05 57.38 L 126.89 57.38 126.89 57.38 125.05 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id121")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 121.39 57.38 L 123.22 57.38 123.22 47.21 121.39 47.21 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id117")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 117.72 57.38 L 119.55 57.38 119.55 47.21 117.72 47.21 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id113")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 114.05 57.38 L 115.88 57.38 115.88 35.34 114.05 35.34 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id109")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 110.38 57.38 L 112.22 57.38 112.22 13.31 110.38 13.31 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id105")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 106.72 57.38 L 108.55 57.38 108.55 57.38 106.72 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id101")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 103.05 57.38 L 104.88 57.38 104.88 42.12 103.05 42.12 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id97")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 99.38 57.38 L 101.22 57.38 101.22 43.82 99.38 43.82 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id93")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 95.71 57.38 L 97.55 57.38 97.55 52.29 95.71 52.29 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id89")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 92.05 57.38 L 93.88 57.38 93.88 52.29 92.05 52.29 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id85")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 88.38 57.38 L 90.21 57.38 90.21 55.68 88.38 55.68 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id87")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 90.21 57.38 L 92.05 57.38 92.05 57.38 90.21 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id91")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 93.88 57.38 L 95.71 57.38 95.71 50.6 93.88 50.6 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id95")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 97.55 57.38 L 99.38 57.38 99.38 57.38 97.55 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id99")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 101.22 57.38 L 103.05 57.38 103.05 48.9 101.22 48.9 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id103")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 104.88 57.38 L 106.72 57.38 106.72 33.65 104.88 33.65 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id107")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 108.55 57.38 L 110.38 57.38 110.38 40.43 108.55 40.43 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id111")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 112.22 57.38 L 114.05 57.38 114.05 38.73 112.22 38.73 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id115")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 115.88 57.38 L 117.72 57.38 117.72 57.38 115.88 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id119")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 119.55 57.38 L 121.39 57.38 121.39 37.04 119.55 37.04 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id123")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 123.22 57.38 L 125.05 57.38 125.05 50.6 123.22 50.6 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id127")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 126.89 57.38 L 128.72 57.38 128.72 52.29 126.89 52.29 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id131")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 130.55 57.38 L 132.39 57.38 132.39 53.99 130.55 53.99 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id135")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 134.22 57.38 L 136.05 57.38 136.05 57.38 134.22 57.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id139")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 137.89 57.38 L 139.72 57.38 139.72 55.68 137.89 55.68 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id143")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 141.56 57.38 L 143.39 57.38 143.39 55.68 141.56 55.68 z");
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath4")
        .append("svg:path")
          .attr("d", "M 5 5 L 20.85 5 20.85 58.9 5 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath4)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 47.21)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 26.87)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 16.7)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -54.5)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -44.33)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 37.04)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -23.99)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -13.82)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -3.64)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 77.72)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 98.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 118.4)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 108.23)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 87.89)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 67.55)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 57.38)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -34.16)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("6.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 6.53)
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
       .attr("y", 31.95)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 9.28, 31.95)")
    .call(function(text) {
  text.text("Sepal.Width");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath5")
        .append("svg:path")
          .attr("d", "M 20.85 58.9 L 71.2 58.9 71.2 71.2 20.85 71.2 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath5)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", -1.48)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 22.27)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 10.4)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 105.4)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("11");
})
;
    g.append("svg:text")
       .attr("x", 46.02)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6");
})
;
    g.append("svg:text")
       .attr("x", -13.36)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 117.28)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("12");
})
;
    g.append("svg:text")
       .attr("x", 34.15)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 69.77)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("8");
})
;
    g.append("svg:text")
       .attr("x", -25.23)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", -37.11)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 81.65)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("9");
})
;
    g.append("svg:text")
       .attr("x", 57.9)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 129.15)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("13");
})
;
    g.append("svg:text")
       .attr("x", 93.53)
       .attr("y", 62.64)
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
       .attr("x", 46.02)
       .attr("y", 69.2)
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
        .attr("id", parent_id + "_clippath6")
        .append("svg:path")
          .attr("d", "M 20.85 5 L 71.2 5 71.2 58.9 20.85 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath6)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 20.85 5 L 71.2 5 71.2 58.9 20.85 58.9 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 20.85 47.21 L 71.2 47.21");
      g.append("svg:path")
         .attr("d", "M 20.85 26.87 L 71.2 26.87");
      g.append("svg:path")
         .attr("d", "M 20.85 16.7 L 71.2 16.7");
      g.append("svg:path")
         .attr("d", "M 20.85 -54.5 L 71.2 -54.5");
      g.append("svg:path")
         .attr("d", "M 20.85 -44.33 L 71.2 -44.33");
      g.append("svg:path")
         .attr("d", "M 20.85 37.04 L 71.2 37.04");
      g.append("svg:path")
         .attr("d", "M 20.85 -23.99 L 71.2 -23.99");
      g.append("svg:path")
         .attr("d", "M 20.85 -13.82 L 71.2 -13.82");
      g.append("svg:path")
         .attr("d", "M 20.85 -3.64 L 71.2 -3.64");
      g.append("svg:path")
         .attr("d", "M 20.85 77.72 L 71.2 77.72");
      g.append("svg:path")
         .attr("d", "M 20.85 98.06 L 71.2 98.06");
      g.append("svg:path")
         .attr("d", "M 20.85 118.4 L 71.2 118.4");
      g.append("svg:path")
         .attr("d", "M 20.85 108.23 L 71.2 108.23");
      g.append("svg:path")
         .attr("d", "M 20.85 87.89 L 71.2 87.89");
      g.append("svg:path")
         .attr("d", "M 20.85 67.55 L 71.2 67.55");
      g.append("svg:path")
         .attr("d", "M 20.85 57.38 L 71.2 57.38");
      g.append("svg:path")
         .attr("d", "M 20.85 -34.16 L 71.2 -34.16");
      g.append("svg:path")
         .attr("d", "M 20.85 6.53 L 71.2 6.53");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M -1.48 5 L -1.48 58.9");
      g.append("svg:path")
         .attr("d", "M 22.27 5 L 22.27 58.9");
      g.append("svg:path")
         .attr("d", "M 10.4 5 L 10.4 58.9");
      g.append("svg:path")
         .attr("d", "M 105.4 5 L 105.4 58.9");
      g.append("svg:path")
         .attr("d", "M 46.02 5 L 46.02 58.9");
      g.append("svg:path")
         .attr("d", "M -13.36 5 L -13.36 58.9");
      g.append("svg:path")
         .attr("d", "M 117.28 5 L 117.28 58.9");
      g.append("svg:path")
         .attr("d", "M 34.15 5 L 34.15 58.9");
      g.append("svg:path")
         .attr("d", "M 69.77 5 L 69.77 58.9");
      g.append("svg:path")
         .attr("d", "M -25.23 5 L -25.23 58.9");
      g.append("svg:path")
         .attr("d", "M -37.11 5 L -37.11 58.9");
      g.append("svg:path")
         .attr("d", "M 81.65 5 L 81.65 58.9");
      g.append("svg:path")
         .attr("d", "M 57.9 5 L 57.9 58.9");
      g.append("svg:path")
         .attr("d", "M 129.15 5 L 129.15 58.9");
      g.append("svg:path")
         .attr("d", "M 93.53 5 L 93.53 58.9");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath7")
        .append("svg:path")
          .attr("d", "M 20.85 5 L 71.2 5 71.2 58.9 20.85 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath7)");
    (function (g) {
      g.attr("stroke-width", "0.2");
      (function (g) {
        g.attr("stroke-width", "0.2");
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0] * 11.88 + -25.23; })
.attr("cy", function(d) { return d[1] * -20.34 + 98.06; })
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
