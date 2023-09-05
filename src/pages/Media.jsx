import Dashboard from "./Dashboard";
import MediaUploader from "../components/MediaUploader";
import MediaUploaded from "../components/MediaUploaded";
import Navbar from "../components/Navbar";

const Media = () => {
  return (
    <>
      <div className="w-full">
        <div className="">
          <Dashboard />
        </div>
        <div className="container mx-auto">
          <div className="mt-5 ms-48">
            <MediaUploader />
            <MediaUploaded />
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
