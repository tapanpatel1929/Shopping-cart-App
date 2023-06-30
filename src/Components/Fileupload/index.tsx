
import { useController } from 'react-hook-form';
import NotFound from "../../Items/images.png"

const FileUpload = ({ control }) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name: 'fileInput',
    control,
    defaultValue: null,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };
  const handleImageError = (event) => {
    event.target.src = {NotFound}
  };

  return (
    <>
      <label htmlFor="fileInput" className="block text-gray-700 text-lg font-bold mb-2">
        Choose File
      </label>
      <div className="border-2 border-black rounded-lg">
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          onBlur={onBlur}
          ref={ref}
          className="hidden"
        />
        {value ? (
          <div className="mt-4 ">
            <img
              src={URL.createObjectURL(value)}
              alt="Preview"
              className="h-36 w-40 rounded-lg relative left-28"
              onError={handleImageError}
            />
          </div>
        ) : (
          <div className="mt-4">
            <img
              src={NotFound} 
              alt="Default"
              className="h-36 w-40 rounded-full relative left-28"
            />
          </div>
        )}
        <button
          onClick={() => document.getElementById('fileInput').click()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded relative left-28 m-8"
        >
          Upload File
        </button>
      </div>
    </>
  );
};

export default FileUpload;