"use client";

import { useAddDataMutation } from "@/redux/api/baseApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddPhonePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addData, { isLoading, isError }] = useAddDataMutation();
  //   const [status, setStatus] = useState(null);

  const onSubmit = async (data: any) => {
    try {
      await addData(data);
      //   setStatus("success");
      console.log("Data added successfully!");
      console.log(data);
    } catch (error) {
      //   setStatus("error");
      console.error("Error adding data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto mt-8 p-6 bg-white w-[700px]">
        <h1 className="text-2xl font-bold mb-4">Add a Phone</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* first 2 */}
          <div className="flex gap-4 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 "
              >
                Image:
              </label>
              <input
                id="image"
                type="text"
                {...register("image", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.image && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4  w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* 2nd 4 fields */}
          <div className="flex  gap-4 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand:
              </label>
              <input
                id="brand"
                type="text"
                {...register("brand", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.brand && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="categories"
                className="block text-sm font-medium text-gray-700"
              >
                Categories:
              </label>
              <input
                id="categories"
                type="text"
                {...register("categories", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.categories && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating:
              </label>
              <input
                id="rating"
                type="number"
                {...register("rating", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.rating && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* inside two boolean value */}
            <div className="flex gap-10 items-center">
              <div className="mb-4 w-full ">
                <label
                  htmlFor="flashSale"
                  className="block text-xs font-medium text-gray-700"
                >
                  Flash:
                </label>
                <input
                  id="flashSale"
                  type="checkbox"
                  {...register("flashSale")}
                  className="mt-1 h-[20px] p-2 border block w-full border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="isNew"
                  className="block text-sm font-medium text-gray-700"
                >
                  New:
                </label>
                <input
                  id="isNew"
                  type="checkbox"
                  {...register("isNew")}
                  className="mt-1 h-[20px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* 3rd prices 3 fields */}

          <div className="flex gap-4 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Main Price:
              </label>
              <input
                id="price"
                type="number"
                {...register("price", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="priceV1"
                className="block text-sm font-medium text-gray-700"
              >
                Price V1:
              </label>
              <input
                id="priceV1"
                type="text"
                {...register("priceV1", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.priceV1 && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="priceV2"
                className="block text-sm font-medium text-gray-700"
              >
                Price V2:
              </label>
              <input
                id="priceV2"
                type="text"
                {...register("priceV2", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.priceV2 && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* 4th with 4 fields */}

          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Review:
              </label>
              <input
                id="review"
                type="number"
                {...register("review", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.review && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="ramV1"
                className="block text-sm font-medium text-gray-700"
              >
                RAM V1:
              </label>
              <input
                id="ramV1"
                type="text"
                {...register("ramV1", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.ramV1 && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="ramV2"
                className="block text-sm font-medium text-gray-700"
              >
                RAM V2:
              </label>
              <input
                id="ramV2"
                type="text"
                {...register("ramV2", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.ramV2 && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700"
              >
                Tag:
              </label>
              <input
                id="tag"
                type="text"
                {...register("tag", { required: true })}
                className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.tag && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="descriptionMini"
              className="block text-sm font-medium text-gray-700"
            >
              Mini Description:
            </label>
            <textarea
              id="descriptionMini"
              {...register("descriptionMini", { required: true })}
              className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-y"
              rows={3} // Adjust the number of rows as needed
            />
            {errors.descriptionMini && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Full Description:
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-y"
              rows={6} // Adjust the number of rows as needed
            />
            {errors.descriptionMini && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="isDeleted"
              className="block text-sm font-medium text-gray-700"
            >
              Is Deleted:
            </label>
            <input
              id="isDeleted"
              type="checkbox"
              {...register("isDeleted")}
              className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPhonePage;
