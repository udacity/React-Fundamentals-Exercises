import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const readFileAsDataURL = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });

const resizeImage = (imageURL, canvas, maxHeight) =>
  new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const context = canvas.getContext("2d");

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height;
        image.height = maxHeight;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0, image.width, image.height);

      resolve(canvas.toDataURL("image/jpeg"));
    };

    image.src = imageURL;
  });

/**
 * A custom <input> that dynamically reads and resizes image files before
 * submitting them to the server as data URLs. Also, shows a preview of the image.
 */

const ImageInput = ({ maxHeight, className, name }) => {
  let fileInput;

  const [value, setValue] = useState("");
  const [canvas, setCanvas] = useState("");

  const style = {
    position: "relative",
  };

  const handleFormReset = () => {
    setValue("");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file).then((originalURL) => {
        resizeImage(originalURL, canvas, maxHeight).then((url) => {
          setValue(url);
        });
      });
    } else {
      setValue("");
    }
  };

  useEffect(() => {
    setCanvas(document.createElement("canvas"));
    fileInput.form.addEventListener("reset", handleFormReset);

    return () => {
      if (fileInput) {
        fileInput.form.removeEventListener("reset", handleFormReset);
      }
    };
  }, [fileInput]);

  if (value) {
    style.backgroundImage = `url("${value}")`;
    style.backgroundRepeat = "no-repeat";
    style.backgroundPosition = "center";
    style.backgroundSize = "cover";
  }

  return (
    <div className={className} style={style}>
      <input type="hidden" name={name} value={value} />
      <input
        ref={(node) => (fileInput = node)}
        type="file"
        onChange={handleFileChange}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }}
      />
    </div>
  );
};

ImageInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  maxHeight: PropTypes.number,
};

export default ImageInput;
