"use client";

import React from "react";
import { useForm } from "react-hook-form";

const AddPhonePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="flex justify-center items-center  border">
      <div className="mx-auto mt-8 p-6 bg-white w-[900px]">
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
            <div className="mb-4 mb-4 w-full">
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
          {/* 2nd 3 fields */}
          <div className="">
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div>
              <div className="mb-4">
                <label
                  htmlFor="flashSale"
                  className="block text-sm font-medium text-gray-700"
                >
                  Flash Sale:
                </label>
                <input
                  id="flashSale"
                  type="checkbox"
                  {...register("flashSale")}
                  className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="isNew"
                  className="block text-sm font-medium text-gray-700"
                >
                  Is New:
                </label>
                <input
                  id="isNew"
                  type="checkbox"
                  {...register("isNew")}
                  className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price:
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

          <div className="mb-4">
            <label
              htmlFor="descriptionMini"
              className="block text-sm font-medium text-gray-700"
            >
              Mini Description:
            </label>
            <input
              id="descriptionMini"
              type="text"
              {...register("descriptionMini", { required: true })}
              className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <input
              id="description"
              type="text"
              {...register("description", { required: true })}
              className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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

          {/* <div className="mb-4 hidden">
            <label
              htmlFor="isDeleted"
              className="block text-sm font-medium text-gray-700"
            >
              Is Deleted:
            </label>
            <input
              id="isDeleted"
              type="checkbox"
              defaultValue={false}
              {...register("isDeleted")}
              className="mt-1 h-[40px] p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div> */}
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
