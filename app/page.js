'use client';
import React, { useEffect, useRef, useState } from 'react';
import './page.css';

export default function Home() {
  const [width, setWidth] = useState(1680); // Default value
  const [height, setHeight] = useState(1920); // Default value
  const [bgColor, setBgColor] = useState('lightBlue'); // Default value

  //state declaration for new rectangle
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [newRectWidth, setNewReactWidth] = useState(0);
  const [newRectHeight, setNewReactHeight] = useState(0);
  const [newReactBgColor, setNewRectBgColor] = useState('');
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState('black');

  // State declaration for text that is being displayed in banner
  const [text, setText] = useState(''); // displaying any text in banner
  const [textXpos, setTextXpos] = useState(0);
  const [textYpos, setTextYpos] = useState(0);
  const [textSize, setTextSize] = useState(12);
  const [textColor, setTextColor] = useState('black');
  const [textStyle, setTextStyle] = useState('normal'); // 'normal', 'italic', 'bold'

  // State declaration for image
  const [imageUrl, setImageUrl] = useState('');
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);









  const canvas = useRef(null);

  useEffect(() => {

    const ctx = canvas.current.getContext('2d');

    // Set canvas background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

    // Other canvas drawing operations can be performed here




    // another rectangle in banner
    ctx.fillStyle = newReactBgColor;
    ctx.fillRect(xPos, yPos, newRectWidth, newRectHeight)

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.fillStyle = 'transparent'; // Set to transparent so border doesn't overwrite rectangle fill
    ctx.beginPath();
    ctx.rect(xPos, yPos, newRectWidth, newRectHeight);
    ctx.stroke();


    // showing text in banner
    ctx.font = `${textStyle} ${textSize}px sans-serif`;
    ctx.fillStyle = textColor;
    ctx.fillText(text, textXpos, textYpos);


    // Load and draw the image
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      ctx.drawImage(img, imageX, imageY, imageWidth, imageHeight);
    }


  }, [width, height, bgColor, xPos, yPos, newReactBgColor, newRectWidth, newRectHeight, text, textXpos, textYpos, textSize, textColor, textStyle, borderRadius, borderWidth, borderColor, imageUrl, imageX, imageY, imageWidth, imageHeight]);


  // This function change the width and height of canvas.
  const handleOptionChange = (optionWidth, optionHeight) => {
    setWidth(optionWidth);
    setHeight(optionHeight);
  };


  // This function change the background color of canvs.
  const handleSetBGColor = (bgColor) => {
    setBgColor(bgColor);
  }





  return (
    <main className='main'>

      <section className='bottom-section'>
        <section className='measurement'>

          {/* form to take background size */}
          <form className='left-20'>
            <p><b>Choose banner size:</b></p>
            {/* Option 1600 x 900 */}
            <label>
              <input
                type="radio"
                name="bannerOption"
                value="1600x900"
                checked={width === 1600 && height === 900}
                onChange={() => handleOptionChange(1600, 900)}
              />
              1600 x 900
            </label>
            <br />
            {/* Option 1080 x 1080 */}
            <label>
              <input
                type="radio"
                name="bannerOption"
                value="1080x1080"
                checked={width === 1080 && height === 1080}
                onChange={() => handleOptionChange(1080, 1080)}
              />
              1080 x 1080
            </label>
            <br />
            {/* Option 1080 x 1920 */}
            <label>
              <input
                type="radio"
                name="bannerOption"
                value="1080x1920"
                checked={width === 1080 && height === 1920}
                onChange={() => handleOptionChange(1080, 1920)}
              />
              1080 x 1920
            </label>
          </form>




          {/* form to take background color */}
          <form className='left-20 mb-5'>
            <label for="favcolor">Select background color of the banner:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={e => handleSetBGColor(e.target.value)} />
          </form>




          {/* make a rectngle  */}
          <form className='left-20 mb-5'>
            <p> <b> Create box shape:</b></p>
            <label>x coordinate:</label>
            <input type='number' onChange={e => setXPos(e.target.value)} />

            <br />
            <label>y coordinate:</label>
            <input type='number' onChange={e => setYPos(e.target.value)} />

            <br />
            <label>width:</label>
            <input type='number' onChange={e => setNewReactWidth(e.target.value)} />


            <br />
            <label>Height:</label>
            <input type='number' onChange={e => setNewReactHeight(e.target.value)} />

            <br />
            <label for="favcolor">Select background color for the box:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={e => setNewRectBgColor(e.target.value)} />

            {/* Border radius input */}
            <br />
            <label>Border radius:</label>
            <input
              type='number'
              onChange={e => setBorderRadius(e.target.value)}
            />

            {/* Border width input */}
            <br />
            <label>Border width:</label>
            <input
              type='number'
              onChange={e => setBorderWidth(e.target.value)}
            />

            {/* Border color input */}
            <br />
            <label>Select border color:</label>
            <input
              type="color"
              id="borderColor"
              name="borderColor"
              value={borderColor}
              onChange={e => setBorderColor(e.target.value)}
            />



          </form>



          {/*Show text in banner  */}
          <form className='left-20'>

            <h1>Add some text to banner:</h1>
            <input className='text-input' placeholder='write something here to show in banner' type='text' onChange={e => setText(e.target.value)} />

            <br />

            <label>x coordinate of text:</label>
            <input type='number' onChange={e => setTextXpos(e.target.value)} />

            <br />
            <label>y coordinate of text:</label>
            <input type='number' onChange={e => setTextYpos(e.target.value)} />

            <br />
            <label>Font size: </label>
            <input type='number' onChange={e => setTextSize(e.target.value)} />


            <br />
            {/* Text color input */}
            <label>Select text color:</label>
            <input
              type="color"
              id="textColor"
              name="textColor"
              value={textColor}
              onChange={e => setTextColor(e.target.value)}
            />

            <br />
            {/* Text style input */}
            <label>Select text style:</label>
            <select
              value={textStyle}
              onChange={e => setTextStyle(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
              <option value="bold">Bold</option>
            </select>

          </form>




          {/* Taking image url, x-coordinate, y-coordinate, width, height */}
          {/* Taking image properties */}
          <form className='left-20'>
            <h1>Add Image</h1>
            <label>Image URL:</label>
            <input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

            <br />
            <label>x-coordinate of image:</label>
            <input type='number' onChange={e => setImageX(e.target.value)} />

            <br />
            <label>y-coordinate of image:</label>
            <input type='number' onChange={e => setImageY(e.target.value)} />

            <br />
            <label>Width of image:</label>
            <input type='number' onChange={e => setImageWidth(e.target.value)} />

            <br />
            <label>Height of image:</label>
            <input type='number' onChange={e => setImageHeight(e.target.value)} />
            
          

          </form>

          

        </section>



        <section className='banner-showing-section'>
          <h1 className='text-center text-lg'>Your Banner</h1>
          <div className='banner-container'>
            <canvas width={width} height={height} ref={canvas} id='canvas'></canvas>
          </div>
        </section>
      </section>
    </main>
  );
}
