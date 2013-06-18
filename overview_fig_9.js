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
          .attr("d", "M 5 5 L 20.85 5 20.85 58.9 5 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 70.09)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 95.52)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-2.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 120.94)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-3.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 19.24)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 44.66)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-0.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 57.38)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 6.53)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 108.23)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-3");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 31.95)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", 82.8)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-2");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -44.33)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -6.19)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -18.9)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -57.04)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("3.5");
})
;
    g.append("svg:text")
       .attr("x", 19.85)
       .attr("y", -31.61)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("2.5");
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
  text.text("f(x)");
})
;
  }(g.append("g")));
}(g.append("g")));
(function (g) {
      d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath1")
        .append("svg:path")
          .attr("d", "M 20.85 58.9 L 136.63 58.9 136.63 71.2 20.85 71.2 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 67.82)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
    g.append("svg:text")
       .attr("x", 89.66)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("15");
})
;
    g.append("svg:text")
       .attr("x", 198.9)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("40");
})
;
    g.append("svg:text")
       .attr("x", -41.42)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-15");
})
;
    g.append("svg:text")
       .attr("x", 220.74)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("45");
})
;
    g.append("svg:text")
       .attr("x", 24.12)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    g.append("svg:text")
       .attr("x", 264.44)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("55");
})
;
    g.append("svg:text")
       .attr("x", 111.51)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("20");
})
;
    g.append("svg:text")
       .attr("x", 45.97)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 177.05)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("35");
})
;
    g.append("svg:text")
       .attr("x", -63.26)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-20");
})
;
    g.append("svg:text")
       .attr("x", 155.2)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("30");
})
;
    g.append("svg:text")
       .attr("x", 2.28)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-5");
})
;
    g.append("svg:text")
       .attr("x", -106.96)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-30");
})
;
    g.append("svg:text")
       .attr("x", 133.36)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("25");
})
;
    g.append("svg:text")
       .attr("x", -85.11)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("-25");
})
;
    g.append("svg:text")
       .attr("x", 242.59)
       .attr("y", 62.64)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("50");
})
;
    g.append("svg:text")
       .attr("x", -19.57)
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
       .attr("x", 78.74)
       .attr("y", 69.2)
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
     .attr("x", 142.02)
     .attr("y", 28.92)
     .attr("text-anchor", "middle")
  .call(function(text) {
  text.text("f");
})
;
}(g.append("g")));
(function (g) {
  g.attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
   .attr("font-size", "3.18");
  (function (g) {
    g.attr("class", "guide color_f1")
     .on("click", guide_toggle_color(parent_id, "color_f1"));
    (function (g) {
      g.attr("fill", "#00BFFF")
       .attr("stroke", "#0096DD")
       .attr("stroke-width", "0.3");
      g.append("svg:path")
         .attr("d", "M 138.63 30.92 L 143.95 30.92 143.95 36.23 138.63 36.23 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#4C404B");
      g.append("svg:text")
         .attr("x", 144.95)
         .attr("y", 33.58)
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.append("tspan").text("f")
      .append("tspan")
        .attr("baseline-shift", "sub")
      .call(function(text) {
        text.text("1");
      })
      ;
})
;
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
    g.attr("class", "guide color_f2")
     .on("click", guide_toggle_color(parent_id, "color_f2"));
    (function (g) {
      g.attr("fill", "#F6D15F")
       .attr("stroke", "#C9A836")
       .attr("stroke-width", "0.3");
      g.append("svg:path")
         .attr("d", "M 138.63 37.23 L 143.95 37.23 143.95 42.54 138.63 42.54 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#4C404B");
      g.append("svg:text")
         .attr("x", 144.95)
         .attr("y", 39.89)
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.append("tspan").text("f")
      .append("tspan")
        .attr("baseline-shift", "sub")
      .call(function(text) {
        text.text("2");
      })
      ;
})
;
    }(g.append("g")));
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
          .attr("d", "M 20.85 5 L 136.63 5 136.63 58.9 20.85 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 20.85 5 L 136.63 5 136.63 58.9 20.85 58.9 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 20.85 70.09 L 136.63 70.09");
      g.append("svg:path")
         .attr("d", "M 20.85 95.52 L 136.63 95.52");
      g.append("svg:path")
         .attr("d", "M 20.85 120.94 L 136.63 120.94");
      g.append("svg:path")
         .attr("d", "M 20.85 19.24 L 136.63 19.24");
      g.append("svg:path")
         .attr("d", "M 20.85 44.66 L 136.63 44.66");
      g.append("svg:path")
         .attr("d", "M 20.85 57.38 L 136.63 57.38");
      g.append("svg:path")
         .attr("d", "M 20.85 6.53 L 136.63 6.53");
      g.append("svg:path")
         .attr("d", "M 20.85 108.23 L 136.63 108.23");
      g.append("svg:path")
         .attr("d", "M 20.85 31.95 L 136.63 31.95");
      g.append("svg:path")
         .attr("d", "M 20.85 82.8 L 136.63 82.8");
      g.append("svg:path")
         .attr("d", "M 20.85 -44.33 L 136.63 -44.33");
      g.append("svg:path")
         .attr("d", "M 20.85 -6.19 L 136.63 -6.19");
      g.append("svg:path")
         .attr("d", "M 20.85 -18.9 L 136.63 -18.9");
      g.append("svg:path")
         .attr("d", "M 20.85 -57.04 L 136.63 -57.04");
      g.append("svg:path")
         .attr("d", "M 20.85 -31.61 L 136.63 -31.61");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 67.82 5 L 67.82 58.9");
      g.append("svg:path")
         .attr("d", "M 89.66 5 L 89.66 58.9");
      g.append("svg:path")
         .attr("d", "M 198.9 5 L 198.9 58.9");
      g.append("svg:path")
         .attr("d", "M -41.42 5 L -41.42 58.9");
      g.append("svg:path")
         .attr("d", "M 220.74 5 L 220.74 58.9");
      g.append("svg:path")
         .attr("d", "M 24.12 5 L 24.12 58.9");
      g.append("svg:path")
         .attr("d", "M 264.44 5 L 264.44 58.9");
      g.append("svg:path")
         .attr("d", "M 111.51 5 L 111.51 58.9");
      g.append("svg:path")
         .attr("d", "M 45.97 5 L 45.97 58.9");
      g.append("svg:path")
         .attr("d", "M 177.05 5 L 177.05 58.9");
      g.append("svg:path")
         .attr("d", "M -63.26 5 L -63.26 58.9");
      g.append("svg:path")
         .attr("d", "M 155.2 5 L 155.2 58.9");
      g.append("svg:path")
         .attr("d", "M 2.28 5 L 2.28 58.9");
      g.append("svg:path")
         .attr("d", "M -106.96 5 L -106.96 58.9");
      g.append("svg:path")
         .attr("d", "M 133.36 5 L 133.36 58.9");
      g.append("svg:path")
         .attr("d", "M -85.11 5 L -85.11 58.9");
      g.append("svg:path")
         .attr("d", "M 242.59 5 L 242.59 58.9");
      g.append("svg:path")
         .attr("d", "M -19.57 5 L -19.57 58.9");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 20.85 5 L 136.63 5 136.63 58.9 20.85 58.9 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("fill", "none")
       .attr("stroke-width", "0.2");
      (function (g) {
        g.attr("stroke", "#00BFFF")
         .attr("class", "geometry color_f1");
        g.append("svg:path")
           .attr("d", "M 24.12 31.95 L 24.56 29.41 25 26.9 25.43 24.44 25.87 22.05 26.31 19.76 26.75 17.59 27.18 15.57 27.62 13.71 28.06 12.03 28.49 10.56 28.93 9.29 29.37 8.25 29.8 7.45 30.24 6.9 30.68 6.59 31.11 6.54 31.55 6.74 31.99 7.19 32.43 7.89 32.86 8.83 33.3 10 33.74 11.39 34.17 12.99 34.61 14.78 35.05 16.73 35.48 18.84 35.92 21.08 36.36 23.43 36.79 25.87 37.23 28.36 37.67 30.89 38.11 33.44 38.54 35.96 38.98 38.45 39.42 40.87 39.85 43.2 40.29 45.42 40.73 47.51 41.16 49.44 41.6 51.19 42.04 52.76 42.48 54.11 42.91 55.25 43.35 56.15 43.79 56.81 44.22 57.22 44.66 57.38 45.1 57.28 45.53 56.93 45.97 56.33 46.41 55.49 46.84 54.41 47.28 53.11 47.72 51.6 48.16 49.89 48.59 48 49.03 45.95 49.47 43.76 49.9 41.46 50.34 39.06 50.78 36.58 51.21 34.06 51.65 31.52 52.09 28.99 52.52 26.48 52.96 24.03 53.4 21.66 53.84 19.39 54.27 17.24 54.71 15.25 55.15 13.42 55.58 11.77 56.02 10.33 56.46 9.1 56.89 8.1 57.33 7.34 57.77 6.83 58.2 6.56 58.64 6.55 59.08 6.8 59.52 7.29 59.95 8.03 60.39 9.01 60.83 10.22 61.26 11.65 61.7 13.28 62.14 15.09 62.57 17.08 63.01 19.21 63.45 21.47 63.88 23.84 64.32 26.28 64.76 28.79 65.2 31.32 65.63 33.86 66.07 36.38 66.51 38.86 66.94 41.27 67.38 43.58 67.82 45.78 68.25 47.84 68.69 49.75 69.13 51.47 69.57 53 70 54.32 70.44 55.41 70.88 56.27 71.31 56.89 71.75 57.26 72.19 57.38 72.62 57.24 73.06 56.85 73.5 56.21 73.93 55.33 74.37 54.21 74.81 52.87 75.25 51.33 75.68 49.58 76.12 47.67 76.56 45.59 76.99 43.38 77.43 41.06 77.87 38.64 78.3 36.16 78.74 33.64 79.18 31.1 79.61 28.56 80.05 26.07 80.49 23.63 80.93 21.27 81.36 19.02 81.8 16.9 82.24 14.93 82.67 13.13 83.11 11.51 83.55 10.11 83.98 8.92 84.42 7.96 84.86 7.24 85.29 6.76 85.73 6.54 86.17 6.58 86.61 6.86 87.04 7.4 87.48 8.18 87.92 9.2 88.35 10.45 88.79 11.91 89.23 13.57 89.66 15.42 90.1 17.43 90.54 19.58 90.97 21.86 91.41 24.24 91.85 26.7 92.29 29.21 92.72 31.75 93.16 34.29 93.6 36.8 94.03 39.27 94.47 41.67 94.91 43.96 95.34 46.14 95.78 48.18 96.22 50.05 96.66 51.74 97.09 53.24 97.53 54.52 97.97 55.58 98.4 56.4 98.84 56.97 99.28 57.3 99.71 57.37 100.15 57.19 100.59 56.76 101.02 56.08 101.46 55.15 101.9 54 102.34 52.63 102.77 51.05 103.21 49.27 103.65 47.33 104.08 45.23 104.52 43 104.96 40.66 105.39 38.23 105.83 35.74 106.27 33.21 106.7 30.67 107.14 28.14 107.58 25.65 108.02 23.22 108.45 20.88 108.89 18.65 109.33 16.56 109.76 14.61 110.2 12.84 110.64 11.26 111.07 9.89 111.51 8.74 111.95 7.82 112.38 7.14 112.82 6.71 113.26 6.53 113.7 6.61 114.13 6.93 114.57 7.51 115.01 8.34 115.44 9.39 115.88 10.68 116.32 12.18 116.75 13.87 117.19 15.74 117.63 17.78 118.06 19.96 118.5 22.26 118.94 24.65 119.38 27.12 119.81 29.64 120.25 32.18 120.69 34.71 121.12 37.22 121.56 39.68 122 42.06 122.43 44.34 122.87 46.49 123.31 48.5 123.75 50.35 124.18 52.01 124.62 53.47 125.06 54.71 125.49 55.73 125.93 56.51 126.37 57.04 126.8 57.33 127.24 57.36 127.68 57.14 128.11 56.66 128.55 55.94 128.99 54.98 129.43 53.78 129.86 52.37 130.3 50.76 130.74 48.96 131.17 46.99 131.61 44.87 132.05 42.61 132.48 40.26 132.92 37.82 133.36 35.32");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F6D15F")
         .attr("class", "geometry color_f2");
        g.append("svg:path")
           .attr("d", "M 24.12 6.53 L 24.56 6.65 25 7.03 25.43 7.66 25.87 8.53 26.31 9.64 26.75 10.97 27.18 12.5 27.62 14.24 28.06 16.15 28.49 18.21 28.93 20.42 29.37 22.74 29.8 25.15 30.24 27.63 30.68 30.15 31.11 32.69 31.55 35.23 31.99 37.73 32.43 40.17 32.86 42.53 33.3 44.79 33.74 46.91 34.17 48.89 34.61 50.7 35.05 52.32 35.48 53.74 35.92 54.94 36.36 55.91 36.79 56.64 37.23 57.12 37.67 57.36 38.11 57.33 38.54 57.06 38.98 56.53 39.42 55.76 39.85 54.75 40.29 53.52 40.73 52.06 41.16 50.41 41.6 48.57 42.04 46.57 42.48 44.42 42.91 42.14 43.35 39.77 43.79 37.31 44.22 34.8 44.66 32.27 45.1 29.73 45.53 27.21 45.97 24.74 46.41 22.34 46.84 20.04 47.28 17.86 47.72 15.81 48.16 13.93 48.59 12.23 49.03 10.73 49.47 9.44 49.9 8.37 50.34 7.54 50.78 6.95 51.21 6.61 51.65 6.53 52.09 6.7 52.52 7.12 52.96 7.79 53.4 8.7 53.84 9.85 54.27 11.21 54.71 12.78 55.15 14.55 55.58 16.48 56.02 18.58 56.46 20.8 56.89 23.14 57.33 25.56 57.77 28.05 58.2 30.58 58.64 33.12 59.08 35.65 59.52 38.14 59.95 40.57 60.39 42.92 60.83 45.15 61.26 47.26 61.7 49.21 62.14 50.99 62.57 52.57 63.01 53.96 63.45 55.12 63.88 56.05 64.32 56.74 64.76 57.18 65.2 57.37 65.63 57.31 66.07 56.99 66.51 56.42 66.94 55.61 67.38 54.56 67.82 53.29 68.25 51.8 68.69 50.11 69.13 48.24 69.57 46.21 70 44.04 70.44 41.75 70.88 39.36 71.31 36.89 71.75 34.38 72.19 31.84 72.62 29.3 73.06 26.79 73.5 24.33 73.93 21.95 74.37 19.66 74.81 17.5 75.25 15.49 75.68 13.63 76.12 11.96 76.56 10.5 76.99 9.24 77.43 8.21 77.87 7.42 78.3 6.88 78.74 6.58 79.18 6.54 79.61 6.75 80.05 7.22 80.49 7.93 80.93 8.88 81.36 10.06 81.8 11.46 82.24 13.07 82.67 14.86 83.11 16.83 83.55 18.94 83.98 21.19 84.42 23.54 84.86 25.98 85.29 28.47 85.73 31.01 86.17 33.55 86.61 36.07 87.04 38.56 87.48 40.98 87.92 43.3 88.35 45.52 88.79 47.6 89.23 49.52 89.66 51.27 90.1 52.82 90.54 54.17 90.97 55.29 91.41 56.18 91.85 56.83 92.29 57.23 92.72 57.38 93.16 57.27 93.6 56.91 94.03 56.3 94.47 55.45 94.91 54.36 95.34 53.05 95.78 51.53 96.22 49.81 96.66 47.91 97.09 45.86 97.53 43.66 97.97 41.35 98.4 38.95 98.84 36.47 99.28 33.95 99.71 31.41 100.15 28.88 100.59 26.37 101.02 23.92 101.46 21.55 101.9 19.29 102.34 17.15 102.77 15.16 103.21 13.34 103.65 11.7 104.08 10.27 104.52 9.05 104.96 8.06 105.39 7.31 105.83 6.81 106.27 6.56 106.7 6.56 107.14 6.81 107.58 7.32 108.02 8.07 108.45 9.06 108.89 10.28 109.33 11.72 109.76 13.36 110.2 15.18 110.64 17.17 111.07 19.31 111.51 21.58 111.95 23.94 112.38 26.39 112.82 28.9 113.26 31.43 113.7 33.97 114.13 36.49 114.57 38.97 115.01 41.37 115.44 43.68 115.88 45.88 116.32 47.93 116.75 49.83 117.19 51.54 117.63 53.06 118.06 54.37 118.5 55.46 118.94 56.31 119.38 56.91 119.81 57.27 120.25 57.38 120.69 57.23 121.12 56.82 121.56 56.17 122 55.28 122.43 54.16 122.87 52.81 123.31 51.25 123.75 49.5 124.18 47.58 124.62 45.5 125.06 43.28 125.49 40.95 125.93 38.54 126.37 36.05 126.8 33.53 127.24 30.98 127.68 28.45 128.11 25.96 128.55 23.52 128.99 21.17 129.43 18.92 129.86 16.81 130.3 14.84 130.74 13.05 131.17 11.45 131.61 10.05 132.05 8.87 132.48 7.92 132.92 7.21 133.36 6.75");
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
