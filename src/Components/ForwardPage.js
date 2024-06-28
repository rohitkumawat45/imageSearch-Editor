import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fabric } from "fabric";
import rectangle from '../assests/rectangle.png'
import triangle from '../assests/triangle.jpg'
import circle from '../assests/cercle.png'

const ForwardPage = () => {
  const location = useLocation();
  const userImage = location?.state?.imageurl;
  console.log("userImage", userImage);

  const fabricCanvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (!canvas) {
      const newCanvas = new fabric.Canvas(fabricCanvasRef.current, {
        selection: false, // disable group selection
      });
      setCanvas(newCanvas);
    }
  }, [canvas]);

  const handleAddCircle = (e) => {
    if (canvas) {
      // const { offsetX, offsetY } = e.pointer; // get mouse position relative to canvas
      const circle = new fabric.Circle({
        radius: 50,
        fill: "red",
        left: 100,
        top: 100,
      });
      canvas.add(circle);
    }
  };

  const handleAddRectangle = (e) => {
    if (canvas) {
      // const { offsetX, offsetY } = e.pointer; // get mouse position relative to canvas
      const rect = new fabric.Rect({
        width: 100,
        height: 50,
        fill: "blue",
        left: 100,
        top: 100,
      });
      canvas.add(rect);
    }
  };
  const handleAddTriangle = (e) => {
    if (canvas) {
      // const { offsetX, offsetY } = e.pointer; // get mouse position relative to canvas
      const triangle = new fabric.Triangle({
        width: 100,
        height: 50,
        fill: "blue",
        left: 100,
        top: 100,
      });
      canvas.add(triangle);
    }
  };

  const handleAddText = (e) => {
    if (canvas) {
      //const { offsetX, offsetY } = e.pointer; // get mouse position relative to canvas
      const text = new fabric.Textbox("Text layer", {
        left: 100,
        top: 100,
        fill: "black",
      });
      canvas.add(text);
    }
  };
  const handleExport = () => {
    const link = document.createElement("a");
    link.download = "download.png";
    link.href = canvas.toDataURL({
      format: "png",
      multiplier: 1,
    });
    link.click();
  };

  useEffect(() => {
    if (canvas) {
      const img = new Image();
      img.src = userImage;
      img.onload = function () {
        canvas.setBackgroundImage(userImage, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
          crossOrigin: "*",
        });
      };

    }
  }, [canvas]);

  return (
    <div className="container">
      <div className="icons">
        <div className="col-8">
          <div className="canvas-section">
            <canvas ref={fabricCanvasRef} width="835" height="580" />
          </div>
          
        </div>
        <div >
          
          <div className="iconContainer">
            <div className="icon-image" onClick={handleAddTriangle}>
              <img src={triangle} alt="Triangle" />
            </div>
            <div className="icon-image" onClick={handleAddRectangle}>
              <img src={rectangle} alt="Rectangle" />
            </div>
            <div className="icon-image" onClick={handleAddText}>
              Add Text
            </div>
            <div className="icon-image" onClick={handleAddCircle}>
              <img src={circle} alt="circle" />
            </div>
            
          </div>
          <button className="btn-dwnld" onClick={handleExport}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ForwardPage;
