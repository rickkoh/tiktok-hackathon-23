import Image from "next/image";
import { registerComponent } from "../ComponentFactory/ComponentFactory";
import Link from "next/link";
import Stars from "../Product/Stars";
import { Database, Tables } from "@/types";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Props {
  id?: number;
  product_id?: string;
  title?: string;
  src?: string;
  description?: string;
  productUrl?: string;
  rating?: number;
}

interface ProductDataType extends Tables<"products"> {
  avatar_url: string;
}

export default function ProductComponent(props: Props) {
  const supabase = createClientComponentClient<Database>();

  const [productData, setProductData] = useState<ProductDataType>();

  const getProductData = async () => {
    if (!props.product_id) {
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", props.product_id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    const productData = data as ProductDataType;

    productData.avatar_url = supabase.storage
      .from("products")
      .getPublicUrl(productData.image_id!).data.publicUrl;

    setProductData(productData);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Link
      className="w-full h-fit px-3 py-2 items-center rounded-lg flex flex-row bg-gray-100 gap-4 my-1"
      href={"/product"}
    >
      <div className="flex flex-col gap-4 w-full h-fit">
        <div className="flex flex-row gap-4 w-full h-fit">
          <Image
            src={
              (productData ? productData.avatar_url : props.src) ??
              "/product_placeholder.png"
            }
            width={128}
            height={128}
            className="w-24 h-24 rounded-lg aspect-square"
            objectFit="contain"
            blurDataURL="/donald_duck.jpg"
            alt=""
          />
          <div className="flex flex-col gap-1 leading-none">
            <h1 className="font-bold text-xl">
              {(productData ? productData.title : props.title) ??
                "Test Product"}
            </h1>
            <p>
              <s className="text-gray-400">
                {productData ? productData.price.toFixed(2) : "29.00"}
              </s>{" "}
              {productData ? productData.price.toFixed(2) : "$20.00"}
            </p>
            <div className="flex flex-row">
              <p className="text-xs">
                <Stars
                  rating={
                    (productData ? productData.ratings : props.rating) ?? 5
                  }
                />
                {productData ? productData.description : props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <h1 className="font-bold">Author rating:</h1>
          <Stars rating={5} width={16} height={16} />
        </div>
      </div>
    </Link>
  );
}

export const loadProductComponent = () => {
  registerComponent("Product", ProductComponent);
};
