"use client";
import {
  Ref,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { loadTextComponent } from "./TextComponentRegistry";
import { loadProductComponent } from "./ProductComponentRegistry";
import { loadTitleComponent } from "./TitleComponentRegistry";
import { loadImageComponent } from "./ImageComponentRegistry";
import { BsShare, BsChat, BsBookmark, BsHeart } from "react-icons/bs";
import {
  ComponentRegistry,
  FactoryComponentContext,
  FactoryComponents,
  FactoryComponentProvider,
} from "../ComponentFactory/ComponentFactory";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database, Tables } from "@/types";
import BlogProfile from "../Profile/BlogProfile";

// Backend to retrieve the data here

// database
// fake data here for now
// make changes to the fake data to see how componentregistry works
// data here will eventually be fetched from live database

const fakeComponents: ComponentRegistry[] = [
  {
    type: "Text",
    props: {
      text: "Rubber duckies have been a beloved bathtub companion for generations, bringing joy and laughter to bath time routines. These timeless toys come in a variety of shapes and sizes, but in this article, we're diving into the world of rubber duckies to uncover the top three must-have rubber duckies. Among them, you'll find one that's sure to make waves – the Donald Duck, a rubber ducky inspired by the iconic Donald Trump.",
    },
  },
  {
    type: "Title",
    props: {
      text: "1. Donald Duck: A Presidential Quack-tastic Addition",
    },
  },
  {
    type: "Product",
    props: {
      title: "Donald Duck",
      src: "/donald_duck.jpg",
      description: "12,000 sold",
      productUrl:
        "https://www.tiktok.com/view/product/1729414184343667837?checksum=04560ef5ccc8ebad56ae17af9dc91355f9df2d7b0f8f405681a2d30a4084871d&sec_user_id=MS4wLjABAAAAvUuIrkazMyfod1E6pr9dmXlNr7Aq4B1Ud7rdi4rKGiZsbKdK-yxONPvqnDdhmBeG&share_app_id=1180&share_link_id=95FDFF8B-5EC3-476E-8757-4D1FC1C77C42&social_share_type=15&timestamp=1694263941&trackParams=%7B%22source_page_type%22%3A%22product_share%22%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22traffic_source_list%22%3A%5B%5D%7D&tt_from=copy&u_code=DG9F1MBMBKI%3A04&ug_btm=b6880%2Cb6661&unique_id=r1ckkoh&user_id=6912306946356659206&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
      rating: 5,
    },
  },
  {
    type: "Text",
    props: {
      text: "The Donald Duck rubber ducky is not your ordinary bath toy. Modeled after the former President of the United States, Donald Trump, this whimsical creation adds a unique twist to the classic rubber ducky. With meticulous attention to detail, it features the signature hairstyle, suit, and even a tiny red tie.",
    },
  },
  {
    type: "Image",
    props: {
      src: "/donald_duck2.png",
      alt: "Rubber Ducky held by Jesus' hand",
    },
  },
  {
    type: "Title",
    props: {
      text: "Features:",
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
  {
    type: "Text",
    props: {
      text: "Whether you're a fan of Donald Trump or simply appreciate the novelty of this one-of-a-kind rubber duck, the Donald Duck is sure to be a conversation starter.",
    },
  },
  {
    type: "Title",
    props: {
      text: "2. Classic Yellow Rubber Ducky: Timeless Charm",
    },
  },
  {
    type: "Product",
    props: {
      title: "Title",
      src: "/donald_duck.jpg",
      description: "Proin vehicula dui at odio commodo uix phoinex.",
      productUrl:
        "https://www.tiktok.com/view/product/1729414184343667837?checksum=04560ef5ccc8ebad56ae17af9dc91355f9df2d7b0f8f405681a2d30a4084871d&sec_user_id=MS4wLjABAAAAvUuIrkazMyfod1E6pr9dmXlNr7Aq4B1Ud7rdi4rKGiZsbKdK-yxONPvqnDdhmBeG&share_app_id=1180&share_link_id=95FDFF8B-5EC3-476E-8757-4D1FC1C77C42&social_share_type=15&timestamp=1694263941&trackParams=%7B%22source_page_type%22%3A%22product_share%22%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22traffic_source_list%22%3A%5B%5D%7D&tt_from=copy&u_code=DG9F1MBMBKI%3A04&ug_btm=b6880%2Cb6661&unique_id=r1ckkoh&user_id=6912306946356659206&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
      rating: 5,
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
];

interface BlogDataType extends Omit<Tables<"blogs">, "component_registry"> {
  component_registry: ComponentRegistry[];
  user_profile: Tables<"user_profiles">;
}

interface BlogProps {
  reel_id?: string;
  title?: string;
  componentRegistry?: ComponentRegistry[];
}

export interface BlogRef {
  open: () => void;
}

function Blog(props: BlogProps, ref: Ref<BlogRef>) {
  const supabase = createClientComponentClient<Database>();

  const [showModal, setShowModal] = useState(false);

  const [fullscreenModal, setFullscreenModal] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  function handleScroll(e: any) {
    if (e.target.scrollTop >= 50) {
      setFullscreenModal(true);
    } else if (e.target.scrollTop <= -50) {
      handleClose();
    } else {
      setFullscreenModal(false);
    }
  }

  function handleClose() {
    setShowModal(false);
    setFullscreenModal(false);
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: "instant" });
      }
      setShowModal(true);
    },
  }));

  // Blog data state
  const [blogData, setBlogData] = useState<BlogDataType>();

  const getBlogData = async () => {
    if (props.reel_id == null) {
      return;
    }

    const { data, error } = await supabase
      .from("blogs")
      .select("*, user_profiles(*)")
      .eq("reel_id", props.reel_id);

    if (error) {
      console.error(error);
      return;
    }

    // get blog registry
    const componentRegistry = data[0]
      .component_registry as unknown[] as ComponentRegistry[];

    const blogData: BlogDataType = {
      component_registry: componentRegistry,
      id: data[0].id,
      title: data[0].title,
      created_at: data[0].created_at,
      updated_at: data[0].updated_at,
      user_id: data[0].user_id,
      user_profile: data[0].user_profiles as unknown as Tables<"user_profiles">, // supabase has a current bug
    };

    setBlogData(blogData);
  };

  // Get blog data
  useEffect(() => {
    getBlogData();
  }, []);

  // Get component registry from either blogData, props, or fakeComponents
  const componentRegistry = useMemo(() => {
    if (blogData !== undefined) {
      return blogData?.component_registry;
    } else if (props.componentRegistry !== undefined) {
      return props.componentRegistry;
    } else {
      return fakeComponents;
    }
  }, [blogData, props.componentRegistry]);

  return componentRegistry == undefined ? (
    <></>
  ) : (
    <>
      {showModal && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-[100dvh] opacity-0"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
          <nav
            id="toolbar"
            className="fixed flex flex-row justify-between items-center px-16 py-4 pb-8 bottom-0 left-0 h-fit w-full bg-white z-50"
          >
            <BsShare className="w-6 h-6" />
            <BsBookmark className="w-6 h-6" />
            <BsChat className="w-6 h-6" />
            <BsHeart className="w-6 h-6" />
          </nav>
        </>
      )}
      <div
        ref={mainRef}
        className={`fixed transition-all duration-500 w-full h-[100dvh] rounded-t-xl shadow-xl flex flex-col gap-4 bg-background overflow-scroll top-0 z-10 overscroll-y-contain overscroll-x-none
    ${
      showModal
        ? fullscreenModal
          ? " rounded-none translate-y-0 "
          : " translate-y-1/4 rounded-t-xl "
        : " translate-y-full "
    }
    `}
        onScroll={handleScroll}
      >
        <section id="nav" className="sticky top-0 left-0">
          <div className="w-full h-12 p-3 flex flex-row justify-end bg-white items-center">
            <button
              className="absolute left-1/2 -translate-x-1/2"
              onClick={() => {
                setFullscreenModal(!fullscreenModal);
              }}
            >
              <div className="w-32 h-1 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-600" />
            </button>
            <button className="absolute right-5" onClick={handleClose}>
              <AiOutlineClose className="w-6 h-6 transition-all duration-300 hover:text-red-500" />
            </button>
          </div>
        </section>
        <section className="p-6 pt-0 py-3 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">
            {blogData?.title ?? props.title ?? "Top 3 Rubber Duckies"}
          </h1>
          <BlogProfile
            user={blogData?.user_profile as unknown as Tables<"user_profiles">}
            minRead={
              props.componentRegistry
                ? Math.round(props.componentRegistry.length / 3)
                : 5
            }
            date={new Date(blogData?.created_at ?? Date.now())}
          />
          <FactoryComponentProvider>
            <BlogFactoryComponents components={componentRegistry} />
          </FactoryComponentProvider>
          <section id="comment-section" className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold my-1 mt-4">Comments</h1>
            <p>Comment 1</p>
            <p>Comment 2</p>
            <p>Comment 3</p>
            <p>Comment 4</p>
            <p>Componentize Comment</p>
          </section>
          <div className="mb-20"></div>
        </section>
      </div>
    </>
  );
}

interface BlogFactoryComponentsProps {
  components: ComponentRegistry[];
}

function BlogFactoryComponents(props: BlogFactoryComponentsProps) {
  const { loadComponents } = useContext(FactoryComponentContext);

  useEffect(() => {
    loadTextComponent();
    loadTitleComponent();
    loadProductComponent();
    loadImageComponent();
  }, []);

  useEffect(() => {
    loadComponents(props.components);
  }, [props.components]);

  return <FactoryComponents />;
}

export default forwardRef(Blog);
