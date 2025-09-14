import { useClipboard } from "../hooks/useClipboard";

const CopyText = () => {
  const { copied, copy } = useClipboard();

  return (
    <div className="p-4 m-4 bg-blue-100 rounded-2xl shadow-lg text-center">
      <button onClick={() => copy("Hello Clipboard!")} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Copy Text
      </button>
      {copied && <p className="mt-2 text-green-500">Copied!</p>}
    </div>
  );
};

export default CopyText;
