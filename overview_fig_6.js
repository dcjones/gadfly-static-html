function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "101.6mm")
              .attr("height", "76.2mm")
              .attr("viewBox", "0 0 101.6 76.2")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var t = {"scale": 1.0};
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath0")
        .append("svg:path")
          .attr("d", "M 5 5 L 12.19 5 12.19 58.9 5 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 57.38)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 26.91)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("300");
})
;
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 16.72)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("400");
})
;
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 37.1)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("200");
})
;
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 6.53)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("500");
})
;
    g.append("svg:text")
       .attr("x", 11.19)
       .attr("y", 47.29)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("100");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 12.19 58.9 L 96.6 58.9 96.6 71.2 12.19 71.2 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 94.21)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", -45.14)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-25");
})
;
    g.append("svg:text")
       .attr("x", -5.33)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-15");
})
;
    g.append("svg:text")
       .attr("x", 34.49)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-5");
})
;
    g.append("svg:text")
       .attr("x", 54.4)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", -25.24)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-20");
})
;
    g.append("svg:text")
       .attr("x", 193.75)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("35");
})
;
    g.append("svg:text")
       .attr("x", 74.3)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 134.03)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("20");
})
;
    g.append("svg:text")
       .attr("x", 173.84)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("30");
})
;
    g.append("svg:text")
       .attr("x", -84.96)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-35");
})
;
    g.append("svg:text")
       .attr("x", -65.05)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-30");
})
;
    g.append("svg:text")
       .attr("x", 153.93)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("25");
})
;
    g.append("svg:text")
       .attr("x", 114.12)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", 14.58)
       .attr("y", 62.64)
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
       .attr("x", 54.4)
       .attr("y", 69.2)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("x");
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
          .attr("d", "M 12.19 5 L 96.6 5 96.6 58.9 12.19 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 12.19 5 L 96.6 5 96.6 58.9 12.19 58.9 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 12.19 57.38 L 96.6 57.38");
      g.append("svg:path")
         .attr("d", "M 12.19 26.91 L 96.6 26.91");
      g.append("svg:path")
         .attr("d", "M 12.19 16.72 L 96.6 16.72");
      g.append("svg:path")
         .attr("d", "M 12.19 37.1 L 96.6 37.1");
      g.append("svg:path")
         .attr("d", "M 12.19 6.53 L 96.6 6.53");
      g.append("svg:path")
         .attr("d", "M 12.19 47.29 L 96.6 47.29");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 94.21 5 L 94.21 58.9");
      g.append("svg:path")
         .attr("d", "M -45.14 5 L -45.14 58.9");
      g.append("svg:path")
         .attr("d", "M -5.33 5 L -5.33 58.9");
      g.append("svg:path")
         .attr("d", "M 34.49 5 L 34.49 58.9");
      g.append("svg:path")
         .attr("d", "M 54.4 5 L 54.4 58.9");
      g.append("svg:path")
         .attr("d", "M -25.24 5 L -25.24 58.9");
      g.append("svg:path")
         .attr("d", "M 193.75 5 L 193.75 58.9");
      g.append("svg:path")
         .attr("d", "M 74.3 5 L 74.3 58.9");
      g.append("svg:path")
         .attr("d", "M 134.03 5 L 134.03 58.9");
      g.append("svg:path")
         .attr("d", "M 173.84 5 L 173.84 58.9");
      g.append("svg:path")
         .attr("d", "M -84.96 5 L -84.96 58.9");
      g.append("svg:path")
         .attr("d", "M -65.05 5 L -65.05 58.9");
      g.append("svg:path")
         .attr("d", "M 153.93 5 L 153.93 58.9");
      g.append("svg:path")
         .attr("d", "M 114.12 5 L 114.12 58.9");
      g.append("svg:path")
         .attr("d", "M 14.58 5 L 14.58 58.9");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 12.19 5 L 96.6 5 96.6 58.9 12.19 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke", "none");
      (function (g) {
        g.attr("fill", "#4682B4")
         .attr("shape-rendering", "crispEdges");
        (function (g) {
          g.attr("id", "id81")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 75.71 57.48 L 76.87 57.48 76.87 56.56 75.71 56.56 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id77")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 73.38 57.48 L 74.55 57.48 74.55 54.93 73.38 54.93 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id73")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 71.06 57.48 L 72.22 57.48 72.22 49.84 71.06 49.84 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id69")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 68.73 57.48 L 69.89 57.48 69.89 44.23 68.73 44.23 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id65")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 66.41 57.48 L 67.57 57.48 67.57 41.17 66.41 41.17 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id61")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 64.08 57.48 L 65.24 57.48 65.24 39.75 64.08 39.75 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id57")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 61.75 57.48 L 62.92 57.48 62.92 45.05 61.75 45.05 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id53")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 59.43 57.48 L 60.59 57.48 60.59 52.18 59.43 52.18 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id49")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 57.1 57.48 L 58.27 57.48 58.27 55.95 57.1 55.95 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id45")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 54.78 57.48 L 55.94 57.48 55.94 56.97 54.78 56.97 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id41")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 52.45 57.48 L 53.61 57.48 53.61 55.64 52.45 55.64 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id37")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 50.13 57.48 L 51.29 57.48 51.29 51.16 50.13 51.16 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id33")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 47.8 57.48 L 48.96 57.48 48.96 43.11 47.8 43.11 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id29")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 45.47 57.48 L 46.64 57.48 46.64 27.93 45.47 27.93 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id25")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 43.15 57.48 L 44.31 57.48 44.31 19.88 43.15 19.88 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id21")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 40.82 57.48 L 41.99 57.48 41.99 16.1 40.82 16.1 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id17")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 38.5 57.48 L 39.66 57.48 39.66 27.72 38.5 27.72 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id13")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 36.17 57.48 L 37.33 57.48 37.33 42.7 36.17 42.7 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id9")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 33.85 57.48 L 35.01 57.48 35.01 51.57 33.85 51.57 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id5")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 31.52 57.48 L 32.68 57.48 32.68 56.46 31.52 56.46 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id1")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 29.19 57.48 L 30.36 57.48 30.36 57.28 29.19 57.28 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id3")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 30.36 57.48 L 31.52 57.48 31.52 56.26 30.36 56.26 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id7")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 32.68 57.48 L 33.85 57.48 33.85 54.73 32.68 54.73 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id11")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 35.01 57.48 L 36.17 57.48 36.17 48.72 35.01 48.72 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id15")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 37.33 57.48 L 38.5 57.48 38.5 35.16 37.33 35.16 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id19")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 39.66 57.48 L 40.82 57.48 40.82 21.61 39.66 21.61 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id23")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 41.99 57.48 L 43.15 57.48 43.15 17.02 41.99 17.02 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id27")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 44.31 57.48 L 45.47 57.48 45.47 21.3 44.31 21.3 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id31")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 46.64 57.48 L 47.8 57.48 47.8 37.91 46.64 37.91 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id35")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 48.96 57.48 L 50.13 57.48 50.13 49.94 48.96 49.94 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id39")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 51.29 57.48 L 52.45 57.48 52.45 54.93 51.29 54.93 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id43")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 53.61 57.48 L 54.78 57.48 54.78 57.17 53.61 57.17 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id47")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 55.94 57.48 L 57.1 57.48 57.1 57.17 55.94 57.17 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id51")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 58.27 57.48 L 59.43 57.48 59.43 54.73 58.27 54.73 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id55")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 60.59 57.48 L 61.75 57.48 61.75 50.24 60.59 50.24 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id59")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 62.92 57.48 L 64.08 57.48 64.08 42.6 62.92 42.6 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id63")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 65.24 57.48 L 66.41 57.48 66.41 42.5 65.24 42.5 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id67")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 67.57 57.48 L 68.73 57.48 68.73 45.05 67.57 45.05 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id71")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 69.89 57.48 L 71.06 57.48 71.06 47.19 69.89 47.19 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id75")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 72.22 57.48 L 73.38 57.48 73.38 52.38 72.22 52.38 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id79")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 74.55 57.48 L 75.71 57.48 75.71 55.34 74.55 55.34 z");
        }(g.append("g")));
        (function (g) {
          g.attr("id", "id83")
           .attr("class", "geometry");
          g.append("svg:path")
             .attr("d", "M 76.87 57.48 L 78.04 57.48 78.04 56.46 76.87 56.46 z");
        }(g.append("g")));
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
