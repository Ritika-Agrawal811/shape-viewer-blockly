# shape-viewer-blockly
A mini shape viewer application made using Blockly. When any of the 9 shape buttons are clicked its respsctive shape is displayed in the left window.

# custom block
I have built a custom block "display_shape" which has an options dropdown to select the name of the shape to be displayed.

<code>
Blockly.common.defineBlocksWithJsonArray([ <br/>
  {
    type: "display_shape", 
    message0: "Print %1", <br/>
    args0: [
      { 
        type: "field_dropdown",
        name: "VALUE", <br>
        options: [ <br>
          ["Circle", "circle"], <br>
          ["Square", "square"], <br>
          ["Rectangle", "rectangle"], <br>
          ["Triangle", "triangle"], <br>
          ["Semi-circle", "semi-circle"], <br>
          ["Quarter-circle", "quarter-circle"], <br>
          ["Crescent", "crescent"], <br>
          ["Oval", "oval"], <br>
          ["Parallelogram", "parallelogram"], <br>
        ], <br>
      }, <br>
    ], <br>
    previousStatement: null, <br>
    nextStatement: null, <br>
    colour: 355, <br>
  }, <br>
]); <br>

Blockly.JavaScript["display_shape"] = function (block) { <br>
  let value = "'" + block.getFieldValue("VALUE") + "'"; <br>
  return "ShapeViewer.addShape(" + value + ");\n"; <br>
}; <br>
</code>

