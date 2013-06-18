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
          .attr("d", "M 5 5 L 21.91 5 21.91 133.86 5 133.86 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -137.23)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("10");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 8.65)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("4");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -64.29)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("7");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 154.52)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-2");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 130.21)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-1");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -39.98)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("6");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 81.58)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("1");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 251.77)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-6");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -15.67)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("5");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 178.83)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-3");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -88.6)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("8");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 105.9)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("0");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 227.46)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-5");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", -112.92)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("9");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 32.96)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("3");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 276.08)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-7");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 57.27)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("2");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 20.91)
       .attr("y", 203.15)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-4");
      })
      ;
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
       .attr("y", 69.43)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 9.28, 69.43)")
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
          .attr("d", "M 21.91 133.86 L 147.4 133.86 147.4 147.4 21.91 147.4 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.18")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 25.46)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-4");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 232.64)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("10");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 143.85)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("4");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 291.83)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("14");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 173.45)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("6");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 203.04)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("8");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 262.24)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("12");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", -92.93)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-12");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", -4.14)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-6");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 84.65)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("0");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 55.06)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-2");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", -33.73)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-8");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", 114.25)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("2");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", -63.33)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-10");
      })
      ;
})
;
    g.append("svg:text")
       .attr("x", -122.53)
       .attr("y", 138.84)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.append("tspan").text("10")
      .append("tspan")
        .attr("baseline-shift", "super")
      .call(function(text) {
        text.text("-14");
      })
      ;
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "PT Sans,Helvetica Neue,Helvetica,sans")
     .attr("font-size", "3.88");
    g.append("svg:text")
       .attr("x", 84.65)
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
          .attr("d", "M 21.91 5 L 147.4 5 147.4 133.86 21.91 133.86 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
    (function (g) {
      g.attr("class", "guide background")
       .attr("stroke", "#F4F4F8")
       .attr("fill", "#FCFCFC");
      g.append("svg:path")
         .attr("d", "M 21.91 5 L 147.4 5 147.4 133.86 21.91 133.86 z");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide ygridlines");
      g.append("svg:path")
         .attr("d", "M 21.91 -137.23 L 147.4 -137.23");
      g.append("svg:path")
         .attr("d", "M 21.91 8.65 L 147.4 8.65");
      g.append("svg:path")
         .attr("d", "M 21.91 -64.29 L 147.4 -64.29");
      g.append("svg:path")
         .attr("d", "M 21.91 154.52 L 147.4 154.52");
      g.append("svg:path")
         .attr("d", "M 21.91 130.21 L 147.4 130.21");
      g.append("svg:path")
         .attr("d", "M 21.91 -39.98 L 147.4 -39.98");
      g.append("svg:path")
         .attr("d", "M 21.91 81.58 L 147.4 81.58");
      g.append("svg:path")
         .attr("d", "M 21.91 251.77 L 147.4 251.77");
      g.append("svg:path")
         .attr("d", "M 21.91 -15.67 L 147.4 -15.67");
      g.append("svg:path")
         .attr("d", "M 21.91 178.83 L 147.4 178.83");
      g.append("svg:path")
         .attr("d", "M 21.91 -88.6 L 147.4 -88.6");
      g.append("svg:path")
         .attr("d", "M 21.91 105.9 L 147.4 105.9");
      g.append("svg:path")
         .attr("d", "M 21.91 227.46 L 147.4 227.46");
      g.append("svg:path")
         .attr("d", "M 21.91 -112.92 L 147.4 -112.92");
      g.append("svg:path")
         .attr("d", "M 21.91 32.96 L 147.4 32.96");
      g.append("svg:path")
         .attr("d", "M 21.91 276.08 L 147.4 276.08");
      g.append("svg:path")
         .attr("d", "M 21.91 57.27 L 147.4 57.27");
      g.append("svg:path")
         .attr("d", "M 21.91 203.15 L 147.4 203.15");
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "#F4F4F8")
       .attr("stroke-width", "0.2")
       .attr("class", "guide xgridlines");
      g.append("svg:path")
         .attr("d", "M 25.46 5 L 25.46 133.86");
      g.append("svg:path")
         .attr("d", "M 232.64 5 L 232.64 133.86");
      g.append("svg:path")
         .attr("d", "M 143.85 5 L 143.85 133.86");
      g.append("svg:path")
         .attr("d", "M 291.83 5 L 291.83 133.86");
      g.append("svg:path")
         .attr("d", "M 173.45 5 L 173.45 133.86");
      g.append("svg:path")
         .attr("d", "M 203.04 5 L 203.04 133.86");
      g.append("svg:path")
         .attr("d", "M 262.24 5 L 262.24 133.86");
      g.append("svg:path")
         .attr("d", "M -92.93 5 L -92.93 133.86");
      g.append("svg:path")
         .attr("d", "M -4.14 5 L -4.14 133.86");
      g.append("svg:path")
         .attr("d", "M 84.65 5 L 84.65 133.86");
      g.append("svg:path")
         .attr("d", "M 55.06 5 L 55.06 133.86");
      g.append("svg:path")
         .attr("d", "M -33.73 5 L -33.73 133.86");
      g.append("svg:path")
         .attr("d", "M 114.25 5 L 114.25 133.86");
      g.append("svg:path")
         .attr("d", "M -63.33 5 L -63.33 133.86");
      g.append("svg:path")
         .attr("d", "M -122.53 5 L -122.53 133.86");
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
        d3.select("defs")
      .append("svg:clipPath")
        .attr("id", parent_id + "_clippath3")
        .append("svg:path")
          .attr("d", "M 21.91 5 L 147.4 5 147.4 133.86 21.91 133.86 z");
g.attr("clip-path", "url(#" + parent_id + "_clippath3)");
    (function (g) {
      g.attr("stroke-width", "0.2");
      (function (g) {
        g.attr("stroke-width", "0.2");
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0] * 14.8 + 84.65; })
.attr("cy", function(d) { return d[1] * -24.31 + 105.9; })
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
  [0.5295586730211631,-0.3187587626244128,0.13033376849500614,2.667452952889954,1.5602653978627146,1.4418521757732918,1.171141151028382,0.01703333929878037,0.6222140229662954,-0.37161106994968846,-0.9956786262173574,-0.036212172654444715,0.0,-2.3010299956639813,-1.2218487496163564,0.5440680443502757,0.3010299956639812,0.2304489213782739,3.406028944963615,-1.6382721639824072,2.27207378750001,2.7168377232995247,-0.10513034325474745,1.0,0.5185139398778874,-0.6989700043360187,0.14921911265537988,2.7234556720351857,2.315970345456918,1.9294189257142926,-0.12493873660829995,1.792391689498254,3.8230827965328036,0.5440680443502757,0.8325089127062363,1.5440680443502757,0.6074550232146685,-0.9208187539523752,-1.6382721639824072,-2.0,0.146128035678238,2.3979400086720375,0.3979400086720376,1.7442929831226763,2.0,1.7173375827238637,1.0232524596337116,-0.2596373105057561,1.7781512503836436,0.5563025007672873,0.6322547766847136,-0.5528419686577808,-1.1249387366083,-0.9136401693252518,-1.3187587626244128,2.2833012287035497,0.47712125471966244,2.2041199826559246,-0.045757490560675115,0.20951501454263097,-0.9829666607012196,0.6268534146667257],
  [1.6483600109809315,1.1903316981702914,0.9084850188786497,2.6263403673750423,2.0773679052841563,2.060697840353612,1.9921114877869497,0.7403626894942439,1.7634279935629373,0.8061799739838872,0.6020599913279624,0.7558748556724915,0.8195439355418687,-0.8538719643217619,0.0,1.0334237554869496,1.089905111439398,0.7993405494535817,3.663040974893974,-0.5228787452803376,2.622214022966295,2.816241299991783,0.5440680443502757,2.060697840353612,1.4082399653118496,0.6989700043360189,1.2430380486862944,2.832508912706236,2.6085260335771943,2.5118833609788744,1.089905111439398,3.12057393120585,3.7567881987681178,0.5910646070264992,2.2528530309798933,1.7481880270062005,1.2304489213782739,0.0,-0.3979400086720376,-0.6020599913279624,1.0969100130080565,2.690196080028514,1.08278537031645,2.2430380486862944,2.1958996524092336,2.6434526764861874,2.254064452914338,0.38021124171160603,1.9084850188786497,1.3222192947339193,1.5932860670204574,0.2787536009528289,0.07918124604762482,0.47712125471966244,-0.4814860601221125,2.255272505103306,1.3979400086720377,2.2278867046136734,0.414973347970818,1.0569048513364727,0.3979400086720376,1.7024305364455252]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
