function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "127mm")
              .attr("height", "101.6mm")
              .attr("viewBox", "0 0 127 101.6")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 5 5 L 20.17 5 20.17 84.3 5 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", -67.57)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", -30.16)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 82.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-5");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 156.87)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-15");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 44.65)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 7.24)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 194.28)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-20");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", 119.47)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-10");
})
;
    g.append("svg:text")
       .attr("x", 19.17)
       .attr("y", -104.98)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("20");
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
  text.text("y");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 20.17 84.3 L 109.17 84.3 109.17 96.6 20.17 96.6 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 106.66)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", -89.27)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-25");
})
;
    g.append("svg:text")
       .attr("x", -33.29)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-15");
})
;
    g.append("svg:text")
       .attr("x", 50.68)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", -61.28)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-20");
})
;
    g.append("svg:text")
       .attr("x", 78.67)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 162.63)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("20");
})
;
    g.append("svg:text")
       .attr("x", 218.61)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("30");
})
;
    g.append("svg:text")
       .attr("x", 22.69)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-5");
})
;
    g.append("svg:text")
       .attr("x", 190.62)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("25");
})
;
    g.append("svg:text")
       .attr("x", 134.65)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", -5.3)
       .attr("y", 88.04)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-10");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 64.67)
       .attr("y", 94.6)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("x");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
  g.attr("stroke", "none")
   .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
   .attr("font-size", "3.88")
   .attr("fill", "#362A35");
  g.append("svg:text")
     .attr("x", 115.59)
     .attr("y", 41.33)
     .attr("text-anchor", "middle")
  .call(function(text) {
  text.text("Count");
})
;
}(g.append("g")));
(function (g) {
  g.attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
   .attr("font-size", "3.18")
   .attr("stroke", "none");
  (function (g) {
    g.attr("fill", "#0065A5")
     .attr("stroke-width", "0.3");
    g.append("svg:path")
       .attr("d", "M 111.17 51.8 L 114.91 51.8 114.91 52.9 111.17 52.9 z");
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#74CDFF")
     .attr("stroke-width", "0.3");
    g.append("svg:path")
       .attr("d", "M 111.17 47.07 L 114.91 47.07 114.91 48.17 111.17 48.17 z");
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#4C404B");
    g.append("svg:text")
       .attr("x", 115.91)
       .attr("y", 45.2)
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("100");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#B3FFFF")
     .attr("stroke-width", "0.3");
    g.append("svg:path")
       .attr("d", "M 111.17 43.33 L 114.91 43.33 114.91 47.17 111.17 47.17 z");
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#4C404B");
    g.append("svg:text")
       .attr("x", 115.91)
       .attr("y", 49.93)
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("50");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#2A97DC")
     .attr("stroke-width", "0.3");
    g.append("svg:path")
       .attr("d", "M 111.17 48.07 L 114.91 48.07 114.91 51.9 111.17 51.9 z");
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#4C404B");
    g.append("svg:text")
       .attr("x", 115.91)
       .attr("y", 54.67)
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("fill", "#003771")
     .attr("stroke-width", "0.3");
    g.append("svg:path")
       .attr("d", "M 111.17 52.8 L 114.91 52.8 114.91 56.63 111.17 56.63 z");
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
          .attr("d", "M 20.17 5 L 109.17 5 109.17 84.3 20.17 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 20.17 5 L 109.17 5 109.17 84.3 20.17 84.3 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 20.17 -67.57 L 109.17 -67.57");
      g.append("svg:path")
         .attr("d", "M 20.17 -30.16 L 109.17 -30.16");
      g.append("svg:path")
         .attr("d", "M 20.17 82.06 L 109.17 82.06");
      g.append("svg:path")
         .attr("d", "M 20.17 156.87 L 109.17 156.87");
      g.append("svg:path")
         .attr("d", "M 20.17 44.65 L 109.17 44.65");
      g.append("svg:path")
         .attr("d", "M 20.17 7.24 L 109.17 7.24");
      g.append("svg:path")
         .attr("d", "M 20.17 194.28 L 109.17 194.28");
      g.append("svg:path")
         .attr("d", "M 20.17 119.47 L 109.17 119.47");
      g.append("svg:path")
         .attr("d", "M 20.17 -104.98 L 109.17 -104.98");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 106.66 5 L 106.66 84.3");
      g.append("svg:path")
         .attr("d", "M -89.27 5 L -89.27 84.3");
      g.append("svg:path")
         .attr("d", "M -33.29 5 L -33.29 84.3");
      g.append("svg:path")
         .attr("d", "M 50.68 5 L 50.68 84.3");
      g.append("svg:path")
         .attr("d", "M -61.28 5 L -61.28 84.3");
      g.append("svg:path")
         .attr("d", "M 78.67 5 L 78.67 84.3");
      g.append("svg:path")
         .attr("d", "M 162.63 5 L 162.63 84.3");
      g.append("svg:path")
         .attr("d", "M 218.61 5 L 218.61 84.3");
      g.append("svg:path")
         .attr("d", "M 22.69 5 L 22.69 84.3");
      g.append("svg:path")
         .attr("d", "M 190.62 5 L 190.62 84.3");
      g.append("svg:path")
         .attr("d", "M 134.65 5 L 134.65 84.3");
      g.append("svg:path")
         .attr("d", "M -5.3 5 L -5.3 84.3");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 20.17 5 L 109.17 5 109.17 84.3 20.17 84.3 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke", "none")
       .attr("shape-rendering", "crispEdges");
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 72.8 L 40.02 72.8 40.02 70.76 37.96 70.76 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 72.8 L 42.07 72.8 42.07 70.76 40.02 70.76 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 70.76 L 46.19 70.76 46.19 68.72 44.13 68.72 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 68.72 L 35.9 68.72 35.9 66.68 33.84 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 68.72 L 42.07 68.72 42.07 66.68 40.02 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 68.72 L 44.13 68.72 44.13 66.68 42.07 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 68.72 L 46.19 68.72 46.19 66.68 44.13 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 68.72 L 48.24 68.72 48.24 66.68 46.19 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 68.72 L 50.3 68.72 50.3 66.68 48.24 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 68.72 L 52.36 68.72 52.36 66.68 50.3 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 68.72 L 54.41 68.72 54.41 66.68 52.36 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 68.72 L 56.47 68.72 56.47 66.68 54.41 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 68.72 L 58.53 68.72 58.53 66.68 56.47 66.68 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 29.73 66.68 L 31.79 66.68 31.79 64.64 29.73 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 66.68 L 42.07 66.68 42.07 64.64 40.02 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 66.68 L 44.13 66.68 44.13 64.64 42.07 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 66.68 L 46.19 66.68 46.19 64.64 44.13 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 66.68 L 48.24 66.68 48.24 64.64 46.19 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 66.68 L 50.3 66.68 50.3 64.64 48.24 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 66.68 L 52.36 66.68 52.36 64.64 50.3 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 66.68 L 54.41 66.68 54.41 64.64 52.36 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 66.68 L 58.53 66.68 58.53 64.64 56.47 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 66.68 L 60.58 66.68 60.58 64.64 58.53 64.64 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 29.73 64.64 L 31.79 64.64 31.79 62.6 29.73 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 64.64 L 35.9 64.64 35.9 62.6 33.84 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 64.64 L 40.02 64.64 40.02 62.6 37.96 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 64.64 L 42.07 64.64 42.07 62.6 40.02 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 64.64 L 44.13 64.64 44.13 62.6 42.07 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 64.64 L 46.19 64.64 46.19 62.6 44.13 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 64.64 L 48.24 64.64 48.24 62.6 46.19 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 64.64 L 50.3 64.64 50.3 62.6 48.24 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00518E")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 64.64 L 52.36 64.64 52.36 62.6 50.3 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 64.64 L 54.41 64.64 54.41 62.6 52.36 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 64.64 L 56.47 64.64 56.47 62.6 54.41 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 64.64 L 58.53 64.64 58.53 62.6 56.47 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 64.64 L 60.58 64.64 60.58 62.6 58.53 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 64.64 L 62.64 64.64 62.64 62.6 60.58 62.6 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 62.6 L 35.9 62.6 35.9 60.56 33.84 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 35.9 62.6 L 37.96 62.6 37.96 60.56 35.9 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 62.6 L 40.02 62.6 40.02 60.56 37.96 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 62.6 L 42.07 62.6 42.07 60.56 40.02 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 62.6 L 44.13 62.6 44.13 60.56 42.07 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 62.6 L 46.19 62.6 46.19 60.56 44.13 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005290")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 62.6 L 48.24 62.6 48.24 60.56 46.19 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005493")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 62.6 L 50.3 62.6 50.3 60.56 48.24 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0066A6")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 62.6 L 52.36 62.6 52.36 60.56 50.3 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005290")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 62.6 L 54.41 62.6 54.41 60.56 52.36 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004F8C")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 62.6 L 56.47 62.6 56.47 60.56 54.41 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004D8A")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 62.6 L 58.53 62.6 58.53 60.56 56.47 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 62.6 L 60.58 62.6 60.58 60.56 58.53 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 62.6 L 62.64 62.6 62.64 60.56 60.58 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 62.6 L 64.7 62.6 64.7 60.56 62.64 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 62.6 L 66.75 62.6 66.75 60.56 64.7 60.56 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 35.9 60.56 L 37.96 60.56 37.96 58.52 35.9 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 60.56 L 40.02 60.56 40.02 58.52 37.96 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 60.56 L 42.07 60.56 42.07 58.52 40.02 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 60.56 L 44.13 60.56 44.13 58.52 42.07 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0068A8")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 60.56 L 46.19 60.56 46.19 58.52 44.13 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0062A2")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 60.56 L 48.24 60.56 48.24 58.52 46.19 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0066A6")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 60.56 L 50.3 60.56 50.3 58.52 48.24 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#006AAA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 60.56 L 52.36 60.56 52.36 58.52 50.3 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#158ED3")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 60.56 L 54.41 60.56 54.41 58.52 52.36 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007ABC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 60.56 L 56.47 60.56 56.47 58.52 54.41 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0064A4")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 60.56 L 58.53 60.56 58.53 58.52 56.47 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 60.56 L 60.58 60.56 60.58 58.52 58.53 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005897")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 60.56 L 62.64 60.56 62.64 58.52 60.58 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004F8C")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 60.56 L 64.7 60.56 64.7 58.52 62.64 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 60.56 L 66.75 60.56 66.75 58.52 64.7 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 60.56 L 68.81 60.56 68.81 58.52 66.75 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 60.56 L 70.87 60.56 70.87 58.52 68.81 58.52 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 58.52 L 35.9 58.52 35.9 56.48 33.84 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 35.9 58.52 L 37.96 58.52 37.96 56.48 35.9 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 58.52 L 40.02 58.52 40.02 56.48 37.96 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004582")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 58.52 L 42.07 58.52 42.07 56.48 40.02 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005A99")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 58.52 L 44.13 58.52 44.13 56.48 42.07 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005E9D")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 58.52 L 46.19 58.52 46.19 56.48 44.13 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0066A6")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 58.52 L 48.24 58.52 48.24 56.48 46.19 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0082C5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 58.52 L 50.3 58.52 50.3 56.48 48.24 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#2E99DE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 58.52 L 52.36 58.52 52.36 56.48 50.3 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#49AAF1")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 58.52 L 54.41 58.52 54.41 56.48 52.36 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#2595DA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 58.52 L 56.47 58.52 56.47 56.48 54.41 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#2192D7")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 58.52 L 58.53 58.52 58.53 56.48 56.47 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007CBE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 58.52 L 60.58 58.52 60.58 56.48 58.53 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007ABC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 58.52 L 62.64 58.52 62.64 56.48 60.58 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 58.52 L 64.7 58.52 64.7 56.48 62.64 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 58.52 L 66.75 58.52 66.75 56.48 64.7 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 58.52 L 68.81 58.52 68.81 56.48 66.75 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 58.52 L 70.87 58.52 70.87 56.48 68.81 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 58.52 L 72.93 58.52 72.93 56.48 70.87 56.48 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 56.48 L 35.9 56.48 35.9 54.44 33.84 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 35.9 56.48 L 37.96 56.48 37.96 54.44 35.9 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 56.48 L 40.02 56.48 40.02 54.44 37.96 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 56.48 L 42.07 56.48 42.07 54.44 40.02 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 56.48 L 44.13 56.48 44.13 54.44 42.07 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004D8A")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 56.48 L 46.19 56.48 46.19 54.44 44.13 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0078BA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 56.48 L 48.24 56.48 48.24 54.44 46.19 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0074B5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 56.48 L 50.3 56.48 50.3 54.44 48.24 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#359DE3")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 56.48 L 52.36 56.48 52.36 54.44 50.3 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4FAEF5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 56.48 L 54.41 56.48 54.41 54.44 52.36 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#89DFFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 56.48 L 56.47 56.48 56.47 54.44 54.41 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4FAEF5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 56.48 L 58.53 56.48 58.53 54.44 56.47 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#65C0FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 56.48 L 60.58 56.48 60.58 54.44 58.53 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#2595DA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 56.48 L 62.64 56.48 62.64 54.44 60.58 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#006EAF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 56.48 L 64.7 56.48 64.7 54.44 62.64 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0062A2")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 56.48 L 66.75 56.48 66.75 54.44 64.7 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 56.48 L 68.81 56.48 68.81 54.44 66.75 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 56.48 L 70.87 56.48 70.87 54.44 68.81 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 56.48 L 72.93 56.48 72.93 54.44 70.87 54.44 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 33.84 54.44 L 35.9 54.44 35.9 52.4 33.84 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 35.9 54.44 L 37.96 54.44 37.96 52.4 35.9 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 37.96 54.44 L 40.02 54.44 40.02 52.4 37.96 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00427D")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 54.44 L 44.13 54.44 44.13 52.4 42.07 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004F8C")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 54.44 L 46.19 54.44 46.19 52.4 44.13 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#038ACE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 54.44 L 48.24 54.44 48.24 52.4 46.19 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0E8CD0")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 54.44 L 50.3 54.44 50.3 52.4 48.24 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#5FBBFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 54.44 L 52.36 54.44 52.36 52.4 50.3 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#65C0FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 54.44 L 54.41 54.44 54.41 52.4 52.36 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#90E6FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 54.44 L 56.47 54.44 56.47 52.4 54.41 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#95EBFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 54.44 L 58.53 54.44 58.53 52.4 56.47 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#ACFFFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 54.44 L 60.58 54.44 60.58 52.4 58.53 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#49AAF1")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 54.44 L 62.64 54.44 62.64 52.4 60.58 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#038ACE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 54.44 L 64.7 54.44 64.7 52.4 62.64 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007EC1")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 54.44 L 66.75 54.44 66.75 52.4 64.7 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#006AAA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 54.44 L 68.81 54.44 68.81 52.4 66.75 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 54.44 L 70.87 54.44 70.87 52.4 68.81 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 54.44 L 72.93 54.44 72.93 52.4 70.87 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 54.44 L 74.98 54.44 74.98 52.4 72.93 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 54.44 L 77.04 54.44 77.04 52.4 74.98 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 54.44 L 79.1 54.44 79.1 52.4 77.04 52.4 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 40.02 52.4 L 42.07 52.4 42.07 50.36 40.02 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 52.4 L 44.13 52.4 44.13 50.36 42.07 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004582")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 52.4 L 46.19 52.4 46.19 50.36 44.13 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005897")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 52.4 L 48.24 52.4 48.24 50.36 46.19 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007ABC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 52.4 L 50.3 52.4 50.3 50.36 48.24 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#2192D7")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 52.4 L 52.36 52.4 52.36 50.36 50.3 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4CACF3")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 52.4 L 54.41 52.4 54.41 50.36 52.36 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#74CDFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 52.4 L 56.47 52.4 56.47 50.36 54.41 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#9FF4FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 52.4 L 58.53 52.4 58.53 50.36 56.47 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#A9FDFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 52.4 L 60.58 52.4 60.58 50.36 58.53 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#9FF4FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 52.4 L 62.64 52.4 62.64 50.36 60.58 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#51B0F8")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 52.4 L 64.7 52.4 64.7 50.36 62.64 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#62BEFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 52.4 L 66.75 52.4 66.75 50.36 64.7 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0076B8")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 52.4 L 68.81 52.4 68.81 50.36 66.75 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0062A2")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 52.4 L 70.87 52.4 70.87 50.36 68.81 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004F8C")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 52.4 L 72.93 52.4 72.93 50.36 70.87 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 52.4 L 74.98 52.4 74.98 50.36 72.93 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 52.4 L 81.15 52.4 81.15 50.36 79.1 50.36 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 50.36 L 44.13 50.36 44.13 48.33 42.07 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 50.36 L 46.19 50.36 46.19 48.33 44.13 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005493")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 50.36 L 48.24 50.36 48.24 48.33 46.19 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00609F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 50.36 L 50.3 50.36 50.3 48.33 48.24 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#1C90D5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 50.36 L 52.36 50.36 52.36 48.33 50.3 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#038ACE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 50.36 L 54.41 50.36 54.41 48.33 52.36 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#57B5FC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 50.36 L 56.47 50.36 56.47 48.33 54.41 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#ACFFFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 50.36 L 58.53 50.36 58.53 48.33 56.47 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#9AEFFF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 50.36 L 60.58 50.36 60.58 48.33 58.53 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#6FC9FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 50.36 L 62.64 50.36 62.64 48.33 60.58 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#79D2FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 50.36 L 64.7 50.36 64.7 48.33 62.64 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#359DE3")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 50.36 L 66.75 50.36 66.75 48.33 64.7 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0082C5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 50.36 L 68.81 50.36 68.81 48.33 66.75 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0066A6")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 50.36 L 70.87 50.36 70.87 48.33 68.81 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00518E")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 50.36 L 72.93 50.36 72.93 48.33 70.87 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 50.36 L 74.98 50.36 74.98 48.33 72.93 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 50.36 L 77.04 50.36 77.04 48.33 74.98 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 50.36 L 79.1 50.36 79.1 48.33 77.04 48.33 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 42.07 48.33 L 44.13 48.33 44.13 46.29 42.07 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 48.33 L 46.19 48.33 46.19 46.29 44.13 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 48.33 L 48.24 48.33 48.24 46.29 46.19 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004986")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 48.33 L 50.3 48.33 50.3 46.29 48.24 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 48.33 L 52.36 48.33 52.36 46.29 50.3 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007ABC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 48.33 L 54.41 48.33 54.41 46.29 52.36 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0088CC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 48.33 L 56.47 48.33 56.47 46.29 54.41 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#42A6EC")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 48.33 L 58.53 48.33 58.53 46.29 56.47 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#3CA1E7")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 48.33 L 60.58 48.33 60.58 46.29 58.53 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#5DB9FF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 48.33 L 62.64 48.33 62.64 46.29 60.58 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#4CACF3")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 48.33 L 64.7 48.33 64.7 46.29 62.64 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0E8CD0")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 48.33 L 66.75 48.33 66.75 46.29 64.7 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0070B1")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 48.33 L 68.81 48.33 68.81 46.29 66.75 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005A99")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 48.33 L 70.87 48.33 70.87 46.29 68.81 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005290")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 48.33 L 72.93 48.33 72.93 46.29 70.87 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 48.33 L 74.98 48.33 74.98 46.29 72.93 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 48.33 L 77.04 48.33 77.04 46.29 74.98 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 48.33 L 79.1 48.33 79.1 46.29 77.04 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 48.33 L 81.15 48.33 81.15 46.29 79.1 46.29 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 46.29 L 48.24 46.29 48.24 44.25 46.19 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 46.29 L 50.3 46.29 50.3 44.25 48.24 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 46.29 L 52.36 46.29 52.36 44.25 50.3 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 46.29 L 54.41 46.29 54.41 44.25 52.36 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 46.29 L 56.47 46.29 56.47 44.25 54.41 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0074B5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 46.29 L 58.53 46.29 58.53 44.25 56.47 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#007CBE")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 46.29 L 60.58 46.29 60.58 44.25 58.53 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0082C5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 46.29 L 62.64 46.29 62.64 44.25 60.58 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#1C90D5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 46.29 L 64.7 46.29 64.7 44.25 62.64 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0074B5")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 46.29 L 66.75 46.29 66.75 44.25 64.7 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#006EAF")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 46.29 L 68.81 46.29 68.81 44.25 66.75 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0064A4")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 46.29 L 70.87 46.29 70.87 44.25 68.81 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005695")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 46.29 L 72.93 46.29 72.93 44.25 70.87 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004F8C")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 46.29 L 74.98 46.29 74.98 44.25 72.93 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00407B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 46.29 L 77.04 46.29 77.04 44.25 74.98 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 46.29 L 79.1 46.29 79.1 44.25 77.04 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 46.29 L 81.15 46.29 81.15 44.25 79.1 44.25 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 44.13 44.25 L 46.19 44.25 46.19 42.21 44.13 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 46.19 44.25 L 48.24 44.25 48.24 42.21 46.19 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 44.25 L 50.3 44.25 50.3 42.21 48.24 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 44.25 L 52.36 44.25 52.36 42.21 50.3 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 44.25 L 54.41 44.25 54.41 42.21 52.36 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00518E")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 44.25 L 56.47 44.25 56.47 42.21 54.41 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00518E")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 44.25 L 58.53 44.25 58.53 42.21 56.47 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00609F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 44.25 L 60.58 44.25 60.58 42.21 58.53 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005C9B")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 44.25 L 62.64 44.25 62.64 42.21 60.58 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#006AAA")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 44.25 L 64.7 44.25 64.7 42.21 62.64 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#0068A8")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 44.25 L 66.75 44.25 66.75 42.21 64.7 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005A99")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 44.25 L 68.81 44.25 68.81 42.21 66.75 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00518E")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 44.25 L 70.87 44.25 70.87 42.21 68.81 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 44.25 L 72.93 44.25 72.93 42.21 70.87 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004784")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 44.25 L 74.98 44.25 74.98 42.21 72.93 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 44.25 L 77.04 44.25 77.04 42.21 74.98 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 44.25 L 79.1 44.25 79.1 42.21 77.04 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 44.25 L 81.15 44.25 81.15 42.21 79.1 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 85.27 44.25 L 87.32 44.25 87.32 42.21 85.27 42.21 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 48.24 42.21 L 50.3 42.21 50.3 40.17 48.24 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 50.3 42.21 L 52.36 42.21 52.36 40.17 50.3 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00447F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 42.21 L 54.41 42.21 54.41 40.17 52.36 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00427D")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 42.21 L 56.47 42.21 56.47 40.17 54.41 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00447F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 42.21 L 58.53 42.21 58.53 40.17 56.47 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 42.21 L 60.58 42.21 60.58 40.17 58.53 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004582")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 42.21 L 62.64 42.21 62.64 40.17 60.58 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00447F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 42.21 L 64.7 42.21 64.7 40.17 62.64 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004B88")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 42.21 L 66.75 42.21 66.75 40.17 64.7 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#005897")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 42.21 L 68.81 42.21 68.81 40.17 66.75 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#004D8A")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 42.21 L 70.87 42.21 70.87 40.17 68.81 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 42.21 L 72.93 42.21 72.93 40.17 70.87 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 42.21 L 74.98 42.21 74.98 40.17 72.93 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003E79")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 42.21 L 77.04 42.21 77.04 40.17 74.98 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 42.21 L 79.1 42.21 79.1 40.17 77.04 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 42.21 L 81.15 42.21 81.15 40.17 79.1 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 87.32 42.21 L 89.38 42.21 89.38 40.17 87.32 40.17 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 54.41 40.17 L 56.47 40.17 56.47 38.13 54.41 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 40.17 L 58.53 40.17 58.53 38.13 56.47 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 58.53 40.17 L 60.58 40.17 60.58 38.13 58.53 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 40.17 L 62.64 40.17 62.64 38.13 60.58 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 40.17 L 64.7 40.17 64.7 38.13 62.64 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00447F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 40.17 L 66.75 40.17 66.75 38.13 64.7 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#00447F")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 40.17 L 68.81 40.17 68.81 38.13 66.75 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 40.17 L 70.87 40.17 70.87 38.13 68.81 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 40.17 L 72.93 40.17 72.93 38.13 70.87 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 40.17 L 74.98 40.17 74.98 38.13 72.93 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 40.17 L 77.04 40.17 77.04 38.13 74.98 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 40.17 L 79.1 40.17 79.1 38.13 77.04 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 81.15 40.17 L 83.21 40.17 83.21 38.13 81.15 38.13 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 38.13 L 58.53 38.13 58.53 36.09 56.47 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 38.13 L 62.64 38.13 62.64 36.09 60.58 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 38.13 L 64.7 38.13 64.7 36.09 62.64 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003C77")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 38.13 L 66.75 38.13 66.75 36.09 64.7 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 66.75 38.13 L 68.81 38.13 68.81 36.09 66.75 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 68.81 38.13 L 70.87 38.13 70.87 36.09 68.81 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 38.13 L 72.93 38.13 72.93 36.09 70.87 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003B75")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 38.13 L 74.98 38.13 74.98 36.09 72.93 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 38.13 L 77.04 38.13 77.04 36.09 74.98 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 38.13 L 79.1 38.13 79.1 36.09 77.04 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 79.1 38.13 L 81.15 38.13 81.15 36.09 79.1 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 81.15 38.13 L 83.21 38.13 83.21 36.09 81.15 36.09 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 56.47 36.09 L 58.53 36.09 58.53 34.05 56.47 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 60.58 36.09 L 62.64 36.09 62.64 34.05 60.58 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 62.64 36.09 L 64.7 36.09 64.7 34.05 62.64 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 64.7 36.09 L 66.75 36.09 66.75 34.05 64.7 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003973")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 70.87 36.09 L 72.93 36.09 72.93 34.05 70.87 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 74.98 36.09 L 77.04 36.09 77.04 34.05 74.98 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 36.09 L 79.1 36.09 79.1 34.05 77.04 34.05 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 52.36 34.05 L 54.41 34.05 54.41 32.01 52.36 32.01 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 72.93 34.05 L 74.98 34.05 74.98 32.01 72.93 32.01 z");
      }(g.append("g")));
      (function (g) {
        g.attr("fill", "#003771")
         .attr("class", "geometry");
        g.append("svg:path")
           .attr("d", "M 77.04 34.05 L 79.1 34.05 79.1 32.01 77.04 32.01 z");
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
