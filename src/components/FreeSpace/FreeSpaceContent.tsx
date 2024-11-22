import { motion } from 'motion/react';
import { ChangeEvent, useState } from 'react';

const FreeSpaceContent = () => {
  const [xValue, setXValue] = useState<number>(125);
  const [yValue, setYValue] = useState<number>(125);
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

  return (
    <div>
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-sky-500 text-sm"
        animate={{ scale, x: xValue, y: yValue, rotate: rotation }}
        transition={{ type: 'spring' }}
        whileInView={{ opacity: 1 }}
        layout
      >
        <p>Hello world</p>
      </motion.div>
      <div>
        <label htmlFor="x-axis">X axies</label>
        <input
          id="x-axis"
          type="range"
          min={125}
          max={500}
          onChange={(e) => handleChange(e, 'x-axis')}
        />
        <label htmlFor="y-axis">y axies</label>
        <input
          id="y-axis"
          type="range"
          min={125}
          max={500}
          onChange={(e) => handleChange(e, 'y-axis')}
        />
        <label htmlFor="rotation">rotation</label>
        <input
          id="rotation"
          type="range"
          min={0}
          max={360}
          value={rotation}
          onChange={(e) => handleChange(e, 'rotation')}
        />
        <label htmlFor="scale">scale</label>
        <input
          id="scale"
          type="range"
          step={0.01}
          min={0.25}
          max={5}
          value={scale}
          onChange={(e) => handleChange(e, 'scale')}
        />
      </div>
      <div className="flex gap-3">
        <p>X-Axis: {xValue}</p>
        <p>Y-Axis: {yValue}</p>
        <p>Rotation: {rotation}</p>
        <p>Scale: {scale}</p>
      </div>
    </div>
  );
};

export default FreeSpaceContent;
