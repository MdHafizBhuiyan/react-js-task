import "./App.css";
import addImg from "/images/add-images.png";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    {
      src: "/images/image-11.jpeg",
      id: "img-11",
    },
    {
      src: "/images/image-3.webp",
      id: "img-3",
    },
    {
      src: "/images/image-2.webp",
      id: "img-2",
    },
    {
      src: "/images/image-7.webp",
      id: "img-7",
    },
    {
      src: "/images/image-5.webp",
      id: "img-5",
    },
    {
      src: "/images/image-9.webp",
      id: "img-9",
    },
    {
      src: "/images/image-10.jpeg",
      id: "img-10",
    },
    {
      src: "/images/image-4.webp",
      id: "img-4",
    },
    {
      src: "/images/image-8.webp",
      id: "img-8",
    },
    {
      src: "/images/image-1.webp",
      id: "img-1",
    },
    {
      src: "/images/image-3.webp",
      id: "img-3.1",
    },
  ]);
  const [toDelete, setToDelete] = useState([]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5">
      {/* Main Container */}
      <div className="w-full lg:w-[110vh] lg:min-h-[50vh] bg-white rounded-md shadow-sm">
        <div className="grid grid-cols-2 p-5 px-8 border-b">
          <div className="flex items-center">
            {toDelete?.length > 0 ? (
              <>
                <input className="mr-2 scale-125" type="checkbox" checked />
                <span className="text-xl font-semibold text-black">
                  {toDelete?.length} Files Selected
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold text-black">Gallery</span>
            )}
          </div>
          <div
            className={
              toDelete?.length > 0 ? "flex justify-end" : "justify-end hidden"
            }
          >
            <button
              className="font-semibold text-red-500"
              onClick={() => {
                setImages(
                  images.filter(function (img) {
                    if (toDelete.find((id) => id === img.id) === undefined) {
                      return img;
                    }
                  })
                );
                setToDelete([]);
              }}
            >
              Delete Files
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="gallery w-full p-8 grid grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Image iteration start */}
          {images?.map((img) => (
            <button
              key={img.id}
              className={
                toDelete.find((id) => id === img.id) === undefined
                  ? "border-2 rounded-lg hover:brightness-75 hover:bg-gray-300 relative"
                  : "border-2 rounded-lg brightness-90 hover:brightness-75 hover:bg-gray-300 relative"
              }
              onClick={() => {
                // Add/Remove id to delete
                if (toDelete.find((id) => id === img.id) === undefined) {
                  setToDelete([...toDelete, img.id]);
                  document.getElementById(img.id).checked = true;
                } else {
                  setToDelete(
                    toDelete.filter(function (id) {
                      return id !== img.id;
                    })
                  );
                  document.getElementById(img.id).checked = false;
                }
              }}
            >
              <input
                className={
                  toDelete.find((id) => id === img.id) === undefined
                    ? "mr-2 scale-125 absolute top-3 left-3 invisible"
                    : "mr-2 scale-125 absolute top-3 left-3"
                }
                type="checkbox"
                id={img.id}
              />
              <img src={img.src} alt="" className="w-full rounded-md" />
            </button>
          ))}
          {/* Image iteration end */}

          <button
            className="relative"
            onClick={() => {
              document.getElementById("img-picker").click();
            }}
          >
            <img
              src={addImg}
              alt=""
              className="w-full border-2 border-dashed border-gray-300 rounded-md"
            />
            <input
              id="img-picker"
              type="file"
              className="invisible absolute top-0 left-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
