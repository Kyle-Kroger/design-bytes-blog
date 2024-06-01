"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { motion, LayoutGroup } from "framer-motion";

import { range } from "@/utils";
import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";

import styles from "./SlidingWindow.module.css";

const defaultArray = range(8);

function SlidingWindowDemo({
  array = defaultArray,
  initialStartIndex = 0,
  initialWindowLength = 3,
  isVariableLength = false,
}) {
  const id = React.useId();
  const [startIndex, setStartIndex] = useState(initialStartIndex);
  const [windowLength, setWindowLength] = useState(initialWindowLength);

  const endIndex = startIndex + windowLength - 1;
  return (
    <Card as="section" className={styles.wrapper}>
      <SliderControl
        label="Starting Pointer Index"
        className={styles.slider}
        step={1}
        min={0}
        max={array.length - windowLength}
        value={startIndex}
        onChange={(ev) => setStartIndex(Number(ev.target.value))}
      />
      <ul className={styles.windowWrapper}>
        {array.map((num, i) => {
          return (
            <li className={styles.itemWrapper} key={num}>
              {i === startIndex && (
                <motion.div
                  layoutId={`${id}-selected-index`}
                  className={styles.slidingWindow}
                />
              )}
              <div className={styles.item}>{num}</div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default SlidingWindowDemo;
