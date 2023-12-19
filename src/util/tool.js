export function resizeAndConvertToWebP(file, maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const image = new Image();
  
        image.onload = function () {
          const canvas = document.createElement('canvas');
          let width = image.width;
          let height = image.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, height);
  
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            'image/webp',
            quality
          );
        };
  
        image.src = event.target.result;
      };
  
      reader.readAsDataURL(file);
    });
  }
  

  // Example usage:
  // Assume you have an event in your component containing the uploaded file
  // For instance, in your onChange handler for file input:
  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   const resizedImage = await resizeAndConvertToWebP(file, 300, 300, 0.8);
  //   // Use the resizedImage blob as needed (e.g., upload it or display it)
  // };
  

  export const bytesToMB = (size) => {
    let result;
    if(size < (1024 * 1024)) {
      result = size / 1024;
      return `${result.toFixed(2)} KB`;
    } else {
      result = size / (1024 * 1024);
      return `${result.toFixed(2)} MB`
    }
  }
