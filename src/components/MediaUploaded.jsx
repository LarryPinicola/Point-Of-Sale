import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiGrid } from "react-icons/fi";
import UploadedPics from "./UploadedPics";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MediaUploaded = () => {
  const [list, setList] = useState(false);

  const pics = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/77/1d/bd/771dbdb52f7b3b035711b9fd392c5269.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/eb/58/09/eb58095d9d4ffd7c41f39ce50951634d.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/51/52/99/5152995016e4653beb6b6b6a9ddb0cc1.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/2c/0d/70/2c0d70ff3d9c69daa11713236ba1bd65.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/55/b4/87/55b487609107bacbe3693ec6dc5ff36d.jpg",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
    },
  ];

  const lists = [
    {
      id: 1,
      no: 1,
      name: 29324,
      account: "joji",
      date: "12/7/2023",
      time: "12 AM",
      file: "2 MB",
    },
    {
      id: 2,
      no: 2,
      name: 29324,
      account: "joji",
      date: "12/7/2023",
      time: "12 AM",
      file: "2 MB",
    },
    {
      id: 3,
      no: 3,
      name: 29324,
      account: "joji",
      date: "12/7/2023",
      time: "12 AM",
      file: "2 MB",
    },
  ];

  const rows = lists.map((list) => {
    return (
      <tr className="" key={list.id}>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.no}
        </td>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.name}
        </td>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.account}
        </td>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.date}
        </td>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.time}
        </td>
        <td className="px-3 py-3 text-sm font-medium whitespace-nowrap border border-gray-600">
          {list.file}
        </td>
      </tr>
    );
  });

  return (
    <div className="">
      {/* links */}
      <div className="text-white mb-5 flex justify-between items-center">
        <p className="text-gray-400 text-sm">Media / Uploaded Photo</p>
        <div className="flex items-center gap-2 border rounded p-1 text-gray-400 border-gray-600">
          <div className="cursor-pointer" onClick={() => setList(true)}>
            <TfiMenuAlt className="" />
          </div>
          <div className="cursor-pointer" onClick={() => setList(false)}>
            <FiGrid className="" />
          </div>
        </div>
      </div>

      {/* ************************************************************************************************** */}

      {list ? (
        <div className="flex gap-5 justify-center">
          {pics.map((pic) => (
            <UploadedPics key={pic.id} pic={pic} />
          ))}
        </div>
      ) : (
        <div className="w-full mt-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
                >
                  NO
                </th>

                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right "
                >
                  NAME
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                >
                  ACCOUNT
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                >
                  DATE
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                >
                  TIME{" "}
                </th>

                <th scope="col" className="relative py-3.5 px-4">
                  FILE SIZE
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      )}

      {/* pagination sketch */}
      <div className="flex gap-5 items-center border w-36 border-gray-600 mt-5 ml-[85%]">
        <IoIosArrowBack />
        <p className="">1</p>
        <p className="">2</p>
        <p className="">3</p>
        <IoIosArrowForward />
      </div>

      {/* ************************************************************************************************** */}
      {/* table list */}
    </div>
  );
};

export default MediaUploaded;
