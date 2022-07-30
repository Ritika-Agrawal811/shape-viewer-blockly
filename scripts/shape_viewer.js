/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ShapeViewer = {
  queue_: [],
  viewer: document.getElementById("viewer"),
  addShape: function (shape) {
    this.queue_.push(shape);
  },
  displayShape: function () {
    let next = this.queue_.shift();
    if (next) {
      this.viewer.innerHTML = "";
      let shape = document.createElement("div");
      shape.classList.add(next);
      this.viewer.append(shape);
      console.log(shape);
    }
  },
};

// ShapeViewer.addEventListener(
//   "ended",
//   ShapeViewer.play.bind(MusicMaker)
// );
