Blockly.common.defineBlocksWithJsonArray([
  {
    type: "display_shape",
    message0: "Print %1",
    args0: [
      {
        type: "field_dropdown",
        name: "VALUE",
        options: [
          ["Circle", "circle"],
          ["Square", "square"],
          ["Rectangle", "rectangle"],
          ["Triangle", "triangle"],
          ["Semi-circle", "semi-circle"],
          ["Quarter-circle", "quarter-circle"],
          ["Crescent", "crescent"],
          ["Oval", "oval"],
          ["Parallelogram", "parallelogram"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 355,
  },
]);

Blockly.JavaScript["display_shape"] = function (block) {
  let value = "'" + block.getFieldValue("VALUE") + "'";
  return "ShapeViewer.addShape(" + value + ");\n";
};
