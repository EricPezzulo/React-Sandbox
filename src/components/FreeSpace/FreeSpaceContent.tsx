import { motion } from 'motion/react';
import { ChangeEvent, useState } from 'react';

const FreeSpaceContent = () => {
  const [xValue, setXValue] = useState<number>(160);
  const [yValue, setYValue] = useState<number>(288);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, prop: string) => {
    const inputValue = Number(e.target.value);
    if (prop === 'x-axis') {
      setXValue(inputValue);
      console.log('X-Axis:', inputValue);
    } else if (prop === 'y-axis') {
      setYValue(inputValue);
      console.log('Y-Axis:', inputValue);
    } else if (prop === 'rotation') {
      setRotation(inputValue);
      console.log('Rotation:', inputValue);
    } else if (prop === 'scale') {
      setScale(inputValue);
      console.log('scale:', inputValue);
    }
  };
  console.log(window.visualViewport?.height);

  return (
    <div>
      <motion.div
        className="flex h-20 w-20 items-center justify-center rounded-sm border border-dotted border-purple-500 bg-white text-center text-sm"
        animate={{ scale, x: xValue, y: yValue, rotate: rotation }}
        transition={{ type: 'spring' }}
        whileInView={{ opacity: 1 }}
        layout
      >
        <p>Hello world</p>
      </motion.div>

      <div className="flex">
        <label htmlFor="x-axis">X-Axies : {xValue}</label>
        <input
          id="x-axis"
          type="range"
          min={160}
          max={
            window.visualViewport?.width && window.visualViewport.width - 400
          }
          onChange={(e) => handleChange(e, 'x-axis')}
        />
        <label htmlFor="y-axis">Y-Axis: {yValue}</label>
        <input
          id="y-axis"
          type="range"
          min={288}
          max={
            window.visualViewport?.height && window.visualViewport.height - 200
          }
          onChange={(e) => handleChange(e, 'y-axis')}
        />
        <label htmlFor="rotation">Rotation: {rotation}</label>
        <input
          id="rotation"
          type="range"
          min={0}
          max={360}
          value={rotation}
          onChange={(e) => handleChange(e, 'rotation')}
        />
        <label htmlFor="scale">Scale: {scale}</label>
        <input
          id="scale"
          type="range"
          step={0.01}
          min={0.25}
          max={5}
          value={scale}
          onChange={(e) => handleChange(e, 'scale')}
        />{' '}
      </div>
    </div>
  );
};

export default FreeSpaceContent;
