/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function () {
  let currentButton;

  function displayShape(event) {
    loadWorkspace(event.target);

    let code = Blockly.JavaScript.workspaceToCode(
      Blockly.common.getMainWorkspace()
    );
    code += "ShapeViewer.displayShape();";

    try {
      eval(code);
    } catch (error) {
      console.log(error);
    }
  }

  function save(button) {
    button.blocklySave = Blockly.serialization.workspaces.save(
      Blockly.common.getMainWorkspace()
    );
  }

  function loadWorkspace(button) {
    const workspace = Blockly.common.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }

  function enableBlocklyMode(e) {
    loadWorkspace(currentButton);
  }

  function handleSave() {
    document.body.setAttribute("mode", "edit");
    save(currentButton);
  }

  function enableEditMode() {
    document.body.setAttribute("mode", "edit");
    document.querySelectorAll(".button").forEach((btn) => {
      btn.removeEventListener("click", displayShape);
      btn.addEventListener("click", enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute("mode", "maker");
    document.querySelectorAll(".button").forEach((btn) => {
      btn.addEventListener("click", displayShape);
      btn.removeEventListener("click", enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute("mode", "blockly");
    currentButton = e.target;
  }

  document.querySelector("#edit").addEventListener("click", enableEditMode);
  document.querySelector("#done").addEventListener("click", enableMakerMode);
  document.querySelector("#save").addEventListener("click", handleSave);

  enableMakerMode();

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "display_shape",
      },
    ],
  };

  Blockly.inject("blocklyDiv", {
    toolbox: toolbox,
    scrollbars: false,
  });
})();
