"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef(null);

  const handlePickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputCHange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the User"
              fill
            />
          ) : (
            <p>No image picked yet</p>
          )}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png image/jpg"
          name={name}
          required
          onChange={handleInputCHange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
