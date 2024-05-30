"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { motion, LayoutGroup } from "framer-motion";

import { range } from "@/utils";
import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";

import styles from "./SlidingWindow.module.css";

const defaultArray = range(10);

function SlidingWindowDemo({
  array = defaultArray,
  initialStartIndex = 0,
  initialWindowLength = 3,
  isVariableLength = false,
}) {
  const [startIndex, setStartIndex] = useState(initialStartIndex);
  const [windowLength, setWindowLength] = useState(initialWindowLength);
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
      <div className={styles.windowWrapper}>
        {array.map((num, i) => {
          const isSelected =
            i >= startIndex && i < startIndex + windowLength ? true : false;
          console.log(isSelected);
          return (
            <div
              key={num}
              className={clsx(styles.item, isSelected && styles.selectedItem)}
            >
              {num}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default SlidingWindowDemo;
