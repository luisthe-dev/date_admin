import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const MyTable = ({
  data,
  title,
  keys,
  spacing,
  actionButton,
  tableFilters = [],
  onTableFilter,
  activeFilter,
  isSearchable,
}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-starp-5 w-full">
        <span className="px-1 text-2xl font-semibold"> {title} </span>
        {actionButton}
        <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-center py-3 w-full">
          <div className="flex flex-row items-center justify-start w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center">
              {tableFilters.length > 0 && (
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="font-semibold text-xl pr-4">Filter By:</span>
                  {tableFilters.map((tableFilter, tableFilterKey) => (
                    <span
                      className={`flex items-center justify-center text-md font-normal px-5 py-2 border-b hover:border-teal-600 cursor-pointer ${
                        activeFilter == tableFilter.value && "border-teal-700"
                      }`}
                      key={tableFilterKey}
                      onClick={() => onTableFilter(tableFilter.value)}
                    >
                      {tableFilter.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center justify-end w-full lg:w-1/2">
            <div className="flex flex-row items-stretch justify-end w-full">
              {isSearchable && (
                <div className="flex flex-row items-stretch justify-center border border-solid border-cyan-900 rounded-md w-full lg:w-5/12">
                  <input
                    type="search"
                    className="p-2 text-xl font-normal w-10/12 rounded-l-md"
                  />
                  <button className="font-bold text-xl bg-cyan-900 text-white rounded-r-sm w-2/12 items-center flex justify-center">
                    <IoSearchOutline />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row flex-wrap items-start justify-start w-full p-8 border-b pb-2 pr-2">
            <span className={`${spacing} my-2 text-md font-bold`}>S/N</span>
            {keys.map((singleKey, singleKeyKey) => (
              <span
                className={`${spacing} my-2 text-md font-bold`}
                key={singleKeyKey}
              >
                {singleKey}
              </span>
            ))}
          </div>
          {data && data.length > 0 ? (
            data?.map((tableItems, tableItemKey) => (
              <div
                className="flex flex-row flex-wrap items-start justify-start w-full border-b p-3 px-8 pr-2"
                key={tableItemKey}
              >
                <span
                  className={`${spacing} my-2 text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                >
                  {tableItemKey + 1}
                </span>
                {tableItems.map((item, itemKey) => (
                  <span
                    className={`${spacing} my-2 text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                    key={itemKey}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full border-b p-3 text-lg font-light">
              No Results Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyTable;
