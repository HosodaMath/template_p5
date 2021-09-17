import * as P5 from "p5";
import "sanitize.css";
import "./main.css";
import NoiseImage from "./assets/noise.png";

const sketch = (p: P5) => {
  let textureImage: P5.Image;
  p.preload = () => {
    textureImage = p.loadImage(NoiseImage);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    p.textureMode(p.NORMAL);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.orbitControl();

    p.push();
    p.translate(0, 0, 0);
    p.texture(textureImage);
    p.box(200, 200, 200, 200, 200);
    p.pop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {
    // Full Screen Mode
    if (p.key === "f") {
      const element = document.body;
      element.requestFullscreen();
    }

    // Save Canvas png
    if (p.key === "s") {
      p.saveCanvas(
        `file${p.year()}_${p.month()}_${p.day()}_${p.hour()}_${p.minute()}`,
        "png"
      );
    }
  };
};

new P5(sketch);
