import { useEffect, useState } from "react";

export default function PopupForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4">
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6">

        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          🎁 Free French Demo Class
        </h2>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf4qgdUkGY-IxOcrpFn9E4GxCkAZzulHXUmn9VbxZShmxGB6w/viewform?embedded=true"
          className="w-full h-[500px] rounded-lg"
          title="Registration Form"
        />
      </div>
    </div>
  );
}
