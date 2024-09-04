import React, { useState, useEffect } from "react";
import styles from "./priceslider.module.scss";

export const PriceSlider = ({ priceFilter, handleCheckboxChange }) => {
  const { min_price, max_price, current_min, current_max, url } = priceFilter;

  const [minValue, setMinValue] = useState(current_min || min_price);
  const [maxValue, setMaxValue] = useState(current_max || max_price);
  const [minInput, setMinInput] = useState(current_min || min_price);
  const [maxInput, setMaxInput] = useState(current_max || max_price);

  const handleMinInputChange = (e) => {
    setMinInput(Number(e.target.value));
  };

  const handleMaxInputChange = (e) => {
    setMaxInput(Number(e.target.value));
  };

  const handleMinBlur = () => {
    let updatedMinValue = minInput;

    if (minInput < min_price) {
      updatedMinValue = min_price;
    } else if (minInput > maxInput) {
      updatedMinValue = maxInput;
    }

    setMinValue(updatedMinValue);
    setMinInput(updatedMinValue);

    applyPriceFilter(updatedMinValue, maxValue);
  };

  const handleMaxBlur = () => {
    let updatedMaxValue = maxInput;

    if (maxInput > max_price) {
      updatedMaxValue = max_price;
    } else if (maxInput < minInput) {
      updatedMaxValue = minInput;
    }

    setMaxValue(updatedMaxValue);
    setMaxInput(updatedMaxValue);

    applyPriceFilter(minValue, updatedMaxValue);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    setMinInput(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    setMaxInput(value);
  };

  const handleSliderChangeEnd = () => {
    applyPriceFilter(minValue, maxValue);
  };

  const applyPriceFilter = (min, max) => {
    const updatedUrl = url
      .replace("@%7Bprice_min%7D", min)
      .replace("@%7Bprice_max%7D", max);

    handleCheckboxChange(null, null, updatedUrl);
  };

  useEffect(() => {
    setMinValue(current_min || min_price);
    setMaxValue(current_max || max_price);
    setMinInput(current_min || min_price);
    setMaxInput(current_max || max_price);
  }, [min_price, max_price, current_min, current_max]);

  const calculatePosition = (value) =>
    ((value - min_price) / (max_price - min_price)) * 100;

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          className={styles.sliderRange}
          style={{
            left: `${calculatePosition(minValue)}%`,
            width: `${
              calculatePosition(maxValue) - calculatePosition(minValue)
            }%`,
          }}
        ></div>
        <input
          type="range"
          min={min_price}
          max={max_price}
          value={minValue}
          onChange={handleMinChange}
          onMouseUp={handleSliderChangeEnd}
          className={`${styles.thumb} ${styles.thumbLeft}`}
        />
        <input
          type="range"
          min={min_price}
          max={max_price}
          value={maxValue}
          onChange={handleMaxChange}
          onMouseUp={handleSliderChangeEnd}
          className={`${styles.thumb} ${styles.thumbRight}`}
        />
        <div className={styles.sliderTrack}></div>
      </div>
      <div className={styles.inputsContainer}>
        <div className={styles.inputField}>
          <input
            type="number"
            value={minInput}
            onChange={handleMinInputChange}
            onBlur={handleMinBlur}
            min={min_price}
            max={max_price}
          />
          <span className={styles.currency}>Kč</span>
        </div>
        -
        <div className={styles.inputField}>
          <input
            type="number"
            value={maxInput}
            onChange={handleMaxInputChange}
            onBlur={handleMaxBlur}
            min={min_price}
            max={max_price}
          />
          <span className={styles.currency}>Kč</span>
        </div>
      </div>
    </div>
  );
};
