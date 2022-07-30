# shape-viewer-blockly
A mini shape viewer application made using Blockly. When any of the 9 shape buttons are clicked its respsctive shape is displayed in the left window.

#Custom block
I have built a custom block "display_shape" which has an options dropdown to select the name of the shape to be displayed.

<code>
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
</code>

