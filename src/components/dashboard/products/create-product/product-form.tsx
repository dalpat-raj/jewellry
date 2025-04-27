"use client";
import React, { useTransition } from "react";
import { FormProvider, SubmitHandler } from "react-hook-form";
import { useProductForm } from "@/hooks/useProductForm";
import { Product } from "@/types/product.types";
import Form_Header from "./Form-Header";
import ChildComponents from "./ChildComponents";
import { CreateProduct } from "@/actions/productAction";
import { cn } from "@/lib/utils";

const ProductForm = () => {
  const [isLoading, startTransition] = useTransition();
  const methods = useProductForm();

  const onSubmit = (data: Product) => {
    startTransition(() => {
      CreateProduct(data)
        .then((res) => {
          if (res?.success) console.log(res?.success);
          if (res?.error) console.log(res?.error);
        })
        .catch(() => {
          console.log("catch error");
        })
        .finally(() => {
          methods.reset();
        });
    });
  };

  return (
    <div className={cn("w-full mx-auto")}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form_Header isLoading={isLoading} />
          <ChildComponents />
        </form>
      </FormProvider>
    </div>
  );
};

export default ProductForm;
