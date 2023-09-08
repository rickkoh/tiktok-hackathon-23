// blogs

import { ComponentRegistry } from "@/types";
import { markDownToAst } from "./helper";

interface BlogDataType {
  title: string;
  reel_id: string;
  component_registry: ComponentRegistry[];
}

const blogData1: BlogDataType = {
  title: "Top 3 Sneakers of 2023",
  reel_id: "787336ef-93e7-4977-8a83-eccbf4a43d77",
  component_registry: [
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "1. Nike Air Max 2023",
                      position: {
                        start: { line: 1, column: 3, offset: 2 },
                        end: { line: 1, column: 23, offset: 22 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 25, offset: 24 },
                  },
                },
                {
                  type: "text",
                  value: " 😍",
                  position: {
                    start: { line: 1, column: 25, offset: 24 },
                    end: { line: 1, column: 28, offset: 27 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 28, offset: 27 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "First up, we have the Nike Air Max 2023. This iconic silhouette gets a futuristic update with improved cushioning and a sleek design. It's not just a sneaker; it's a statement.",
                  position: {
                    start: { line: 3, column: 1, offset: 29 },
                    end: { line: 3, column: 177, offset: 205 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 29 },
                end: { line: 3, column: 177, offset: 205 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 177, offset: 205 },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "aa2e0ab7-3027-4597-ab25-04c045ef25e9",
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "2. Adidas Ultra Boost 6.0",
                      position: {
                        start: { line: 1, column: 3, offset: 2 },
                        end: { line: 1, column: 28, offset: 27 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 30, offset: 29 },
                  },
                },
                {
                  type: "text",
                  value: " 🚀",
                  position: {
                    start: { line: 1, column: 30, offset: 29 },
                    end: { line: 1, column: 33, offset: 32 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 33, offset: 32 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Adidas never disappoints, and the Ultra Boost 6.0 is proof of that. It's all about the boost technology, offering supreme comfort for your daily adventures. Plus, the sleek look pairs well with any outfit.",
                  position: {
                    start: { line: 3, column: 1, offset: 34 },
                    end: { line: 3, column: 206, offset: 239 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 34 },
                end: { line: 3, column: 206, offset: 239 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 206, offset: 239 },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "47858156-f129-4996-8417-130c6aaa480a",
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "3. New Balance 990v6",
                      position: {
                        start: { line: 1, column: 3, offset: 2 },
                        end: { line: 1, column: 23, offset: 22 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 25, offset: 24 },
                  },
                },
                {
                  type: "text",
                  value: " 🏃‍♂️",
                  position: {
                    start: { line: 1, column: 25, offset: 24 },
                    end: { line: 1, column: 31, offset: 30 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 31, offset: 30 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "If you're after both style and support, the New Balance 990v6 is your go-to. It's a classic reborn with modern updates, making it a favorite among sneaker enthusiasts and athletes alike.",
                  position: {
                    start: { line: 3, column: 1, offset: 32 },
                    end: { line: 3, column: 187, offset: 218 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 32 },
                end: { line: 3, column: 187, offset: 218 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 187, offset: 218 },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "2d0c6384-73ee-4647-afa1-6455fff3250b",
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "So, there you have it, folks! The top 3 sneakers of 2023 that are taking the sneaker game to the next level. Which one is your favorite? Drop a comment below and let's chat kicks! Until next time, stay fresh and stay stylish. 👟✨ #SneakerHeads #Top3neakers #2023Trends",
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 269, offset: 268 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 269, offset: 268 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 269, offset: 268 },
          },
        },
      },
    },
  ],
};

const blogData2: BlogDataType = {
  title: "Becoming a Keyboard Enthusiast: Your Journey Starts Here",
  reel_id: "8487cf9c-066d-4d31-8874-6288d8eb700f",
  component_registry: [
    {
      type: "Text",
      package: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Hey there, future keyboard enthusiasts! 👋 Are you ready to embark on a thrilling journey into the captivating world of mechanical keyboards? Today, I'm your guide, and we'll take those first steps together.",
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 208, offset: 207 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 208, offset: 207 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Welcome to the Keyboard World",
                      position: {
                        start: { line: 3, column: 3, offset: 211 },
                        end: { line: 3, column: 32, offset: 240 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 3, column: 1, offset: 209 },
                    end: { line: 3, column: 34, offset: 242 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 209 },
                end: { line: 3, column: 34, offset: 242 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Before we dive into the nitty-gritty, let's understand what makes mechanical keyboards special. Unlike traditional rubber dome keyboards, mechanical keyboards offer individual switches for each key. They provide a tactile, satisfying feel and a distinct sound that's music to our ears.",
                  position: {
                    start: { line: 5, column: 1, offset: 244 },
                    end: { line: 5, column: 286, offset: 529 },
                  },
                },
              ],
              position: {
                start: { line: 5, column: 1, offset: 244 },
                end: { line: 5, column: 286, offset: 529 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Your Beginner's Toolkit",
                      position: {
                        start: { line: 7, column: 3, offset: 533 },
                        end: { line: 7, column: 26, offset: 556 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 7, column: 1, offset: 531 },
                    end: { line: 7, column: 28, offset: 558 },
                  },
                },
              ],
              position: {
                start: { line: 7, column: 1, offset: 531 },
                end: { line: 7, column: 28, offset: 558 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "To get started, you'll need your beginner's toolkit:",
                  position: {
                    start: { line: 9, column: 1, offset: 560 },
                    end: { line: 9, column: 53, offset: 612 },
                  },
                },
              ],
              position: {
                start: { line: 9, column: 1, offset: 560 },
                end: { line: 9, column: 53, offset: 612 },
              },
            },
            {
              type: "list",
              ordered: false,
              start: null,
              spread: false,
              children: [
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Curiosity:",
                              position: {
                                start: { line: 11, column: 5, offset: 618 },
                                end: { line: 11, column: 15, offset: 628 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 11, column: 3, offset: 616 },
                            end: { line: 11, column: 17, offset: 630 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " The desire to learn and explore is your best companion.",
                          position: {
                            start: { line: 11, column: 17, offset: 630 },
                            end: { line: 11, column: 73, offset: 686 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 11, column: 3, offset: 616 },
                        end: { line: 11, column: 73, offset: 686 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 11, column: 1, offset: 614 },
                    end: { line: 11, column: 73, offset: 686 },
                  },
                },
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Passion:",
                              position: {
                                start: { line: 12, column: 5, offset: 691 },
                                end: { line: 12, column: 13, offset: 699 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 12, column: 3, offset: 689 },
                            end: { line: 12, column: 15, offset: 701 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " A love for precision, craftsmanship, and the art of typing.",
                          position: {
                            start: { line: 12, column: 15, offset: 701 },
                            end: { line: 12, column: 75, offset: 761 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 12, column: 3, offset: 689 },
                        end: { line: 12, column: 75, offset: 761 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 12, column: 1, offset: 687 },
                    end: { line: 12, column: 75, offset: 761 },
                  },
                },
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Patience:",
                              position: {
                                start: { line: 13, column: 5, offset: 766 },
                                end: { line: 13, column: 14, offset: 775 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 13, column: 3, offset: 764 },
                            end: { line: 13, column: 16, offset: 777 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " Building your keyboard takes time, but the reward is worth it.",
                          position: {
                            start: { line: 13, column: 16, offset: 777 },
                            end: { line: 13, column: 79, offset: 840 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 13, column: 3, offset: 764 },
                        end: { line: 13, column: 79, offset: 840 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 13, column: 1, offset: 762 },
                    end: { line: 13, column: 79, offset: 840 },
                  },
                },
              ],
              position: {
                start: { line: 11, column: 1, offset: 614 },
                end: { line: 13, column: 79, offset: 840 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 13, column: 79, offset: 840 },
          },
        },
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value:
                        "Meet the NoviceCraft K6: Your First Custom Keyboard",
                      position: {
                        start: { line: 1, column: 3, offset: 2 },
                        end: { line: 1, column: 54, offset: 53 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 56, offset: 55 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 56, offset: 55 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Introducing the NoviceCraft K6, your perfect entry point into the world of custom mechanical keyboards. This beginner-friendly keyboard kit comes with everything you need to build your very own mechanical masterpiece.",
                  position: {
                    start: { line: 3, column: 1, offset: 57 },
                    end: { line: 3, column: 218, offset: 274 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 57 },
                end: { line: 3, column: 218, offset: 274 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Key Features:",
                      position: {
                        start: { line: 5, column: 3, offset: 278 },
                        end: { line: 5, column: 16, offset: 291 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 5, column: 1, offset: 276 },
                    end: { line: 5, column: 18, offset: 293 },
                  },
                },
              ],
              position: {
                start: { line: 5, column: 1, offset: 276 },
                end: { line: 5, column: 18, offset: 293 },
              },
            },
            {
              type: "list",
              ordered: false,
              start: null,
              spread: false,
              children: [
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Hot-Swappable Switches:",
                              position: {
                                start: { line: 6, column: 5, offset: 298 },
                                end: { line: 6, column: 28, offset: 321 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 6, column: 3, offset: 296 },
                            end: { line: 6, column: 30, offset: 323 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " No soldering required! Easily change switches to find your perfect feel.",
                          position: {
                            start: { line: 6, column: 30, offset: 323 },
                            end: { line: 6, column: 103, offset: 396 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 6, column: 3, offset: 296 },
                        end: { line: 6, column: 103, offset: 396 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 6, column: 1, offset: 294 },
                    end: { line: 6, column: 103, offset: 396 },
                  },
                },
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Compact Layout:",
                              position: {
                                start: { line: 7, column: 5, offset: 401 },
                                end: { line: 7, column: 20, offset: 416 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 7, column: 3, offset: 399 },
                            end: { line: 7, column: 22, offset: 418 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " A 65% layout strikes the right balance between functionality and portability.",
                          position: {
                            start: { line: 7, column: 22, offset: 418 },
                            end: { line: 7, column: 100, offset: 496 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 7, column: 3, offset: 399 },
                        end: { line: 7, column: 100, offset: 496 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 7, column: 1, offset: 397 },
                    end: { line: 7, column: 100, offset: 496 },
                  },
                },
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "RGB Backlighting:",
                              position: {
                                start: { line: 8, column: 5, offset: 501 },
                                end: { line: 8, column: 22, offset: 518 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 8, column: 3, offset: 499 },
                            end: { line: 8, column: 24, offset: 520 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " Customize your keyboard's appearance with vibrant RGB lighting.",
                          position: {
                            start: { line: 8, column: 24, offset: 520 },
                            end: { line: 8, column: 88, offset: 584 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 8, column: 3, offset: 499 },
                        end: { line: 8, column: 88, offset: 584 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 8, column: 1, offset: 497 },
                    end: { line: 8, column: 88, offset: 584 },
                  },
                },
                {
                  type: "listItem",
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "strong",
                          children: [
                            {
                              type: "text",
                              value: "Aluminum Frame:",
                              position: {
                                start: { line: 9, column: 5, offset: 589 },
                                end: { line: 9, column: 20, offset: 604 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 9, column: 3, offset: 587 },
                            end: { line: 9, column: 22, offset: 606 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " Durable and stylish, the aluminum frame ensures longevity and aesthetics.",
                          position: {
                            start: { line: 9, column: 22, offset: 606 },
                            end: { line: 9, column: 96, offset: 680 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 9, column: 3, offset: 587 },
                        end: { line: 9, column: 96, offset: 680 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 9, column: 1, offset: 585 },
                    end: { line: 9, column: 96, offset: 680 },
                  },
                },
              ],
              position: {
                start: { line: 6, column: 1, offset: 294 },
                end: { line: 9, column: 96, offset: 680 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 96, offset: 680 },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "897c5eab-8de2-46f4-957c-7bd0430c623b",
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Building Your NoviceCraft K6",
                      position: {
                        start: { line: 1, column: 3, offset: 2 },
                        end: { line: 1, column: 31, offset: 30 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 33, offset: 32 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 33, offset: 32 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Building your NoviceCraft K6 is a rewarding experience that introduces you to the heart of mechanical keyboards. The process is user-friendly and designed for beginners, making it an ideal starting point.",
                  position: {
                    start: { line: 3, column: 1, offset: 34 },
                    end: { line: 3, column: 205, offset: 238 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 34 },
                end: { line: 3, column: 205, offset: 238 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "In Conclusion",
                      position: {
                        start: { line: 5, column: 3, offset: 242 },
                        end: { line: 5, column: 16, offset: 255 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 5, column: 1, offset: 240 },
                    end: { line: 5, column: 18, offset: 257 },
                  },
                },
              ],
              position: {
                start: { line: 5, column: 1, offset: 240 },
                end: { line: 5, column: 18, offset: 257 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Welcome to the wonderful world of keyboard enthusiasts! With your NoviceCraft K6 and a dash of curiosity, you're well on your way to discovering the joys of custom mechanical keyboards.",
                  position: {
                    start: { line: 7, column: 1, offset: 259 },
                    end: { line: 7, column: 186, offset: 444 },
                  },
                },
              ],
              position: {
                start: { line: 7, column: 1, offset: 259 },
                end: { line: 7, column: 186, offset: 444 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Stay tuned for more keyboard adventures, tutorials, and tips on your journey to becoming a true keyboard enthusiast. Remember, every keystroke is a step closer to perfection. 🖋️✨ #KeyboardEnthusiast #NoviceCraftK6 #CustomKeyboards",
                  position: {
                    start: { line: 9, column: 1, offset: 446 },
                    end: { line: 9, column: 232, offset: 677 },
                  },
                },
              ],
              position: {
                start: { line: 9, column: 1, offset: 446 },
                end: { line: 9, column: 232, offset: 677 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 232, offset: 677 },
          },
        },
      },
    },
  ],
};

const blogData3: BlogDataType = {
  title: "Rocking the Gym with Sony XM5s",
  reel_id: "15b976eb-e2df-434a-b74e-07af4de1eb27",
  component_registry: [
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Hey, fitfam! 💪 Today, we're taking our workout game to the next level, and I've got a secret weapon - my Sony XM5s headphones. Let's crush this gym sesh together!",
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 164, offset: 163 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 164, offset: 163 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Unleash the Beast with Sony XM5s",
                      position: {
                        start: { line: 3, column: 3, offset: 167 },
                        end: { line: 3, column: 35, offset: 199 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 3, column: 1, offset: 165 },
                    end: { line: 3, column: 37, offset: 201 },
                  },
                },
                {
                  type: "text",
                  value: " 🎵",
                  position: {
                    start: { line: 3, column: 37, offset: 201 },
                    end: { line: 3, column: 40, offset: 204 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 165 },
                end: { line: 3, column: 40, offset: 204 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 40, offset: 204 },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "64b07c8f-c74c-43bb-95ec-b2c54753780c",
      },
    },
    {
      type: "Text",
      props: {
        ast: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "First things first, let's talk music. Music can be your greatest motivator at the gym, and with the Sony XM5s, it's like having a personal DJ in your ears. The sound quality is off the charts! 🎧🎶",
                  position: {
                    start: { line: 1, column: 1, offset: 0 },
                    end: { line: 1, column: 198, offset: 197 },
                  },
                },
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 198, offset: 197 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Noise-Canceling Magic",
                      position: {
                        start: { line: 3, column: 3, offset: 201 },
                        end: { line: 3, column: 24, offset: 222 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 3, column: 1, offset: 199 },
                    end: { line: 3, column: 26, offset: 224 },
                  },
                },
                {
                  type: "text",
                  value: " 🤫",
                  position: {
                    start: { line: 3, column: 26, offset: 224 },
                    end: { line: 3, column: 29, offset: 227 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 199 },
                end: { line: 3, column: 29, offset: 227 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Gone are the distractions of the outside world. With noise-canceling, I'm in my zone, focused, and ready to tackle those weights. No more gym chit-chat or distractions. It's just me and the iron.",
                  position: {
                    start: { line: 5, column: 1, offset: 229 },
                    end: { line: 5, column: 196, offset: 424 },
                  },
                },
              ],
              position: {
                start: { line: 5, column: 1, offset: 229 },
                end: { line: 5, column: 196, offset: 424 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Wireless Freedom",
                      position: {
                        start: { line: 7, column: 3, offset: 428 },
                        end: { line: 7, column: 19, offset: 444 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 7, column: 1, offset: 426 },
                    end: { line: 7, column: 21, offset: 446 },
                  },
                },
                {
                  type: "text",
                  value: " 🚀",
                  position: {
                    start: { line: 7, column: 21, offset: 446 },
                    end: { line: 7, column: 24, offset: 449 },
                  },
                },
              ],
              position: {
                start: { line: 7, column: 1, offset: 426 },
                end: { line: 7, column: 24, offset: 449 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "No cords, no tangles - just pure freedom. I can move, jump, and run without any limitations. The Sony XM5s stay securely in place, no matter how intense the workout gets.",
                  position: {
                    start: { line: 9, column: 1, offset: 451 },
                    end: { line: 9, column: 171, offset: 621 },
                  },
                },
              ],
              position: {
                start: { line: 9, column: 1, offset: 451 },
                end: { line: 9, column: 171, offset: 621 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "Long Battery Life",
                      position: {
                        start: { line: 11, column: 3, offset: 625 },
                        end: { line: 11, column: 20, offset: 642 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 11, column: 1, offset: 623 },
                    end: { line: 11, column: 22, offset: 644 },
                  },
                },
                {
                  type: "text",
                  value: " ⚡",
                  position: {
                    start: { line: 11, column: 22, offset: 644 },
                    end: { line: 11, column: 24, offset: 646 },
                  },
                },
              ],
              position: {
                start: { line: 11, column: 1, offset: 623 },
                end: { line: 11, column: 24, offset: 646 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "These bad boys last for hours. Whether it's a quick HIIT session or a long cardio grind, the Sony XM5s keep the beats pumping from start to finish.",
                  position: {
                    start: { line: 13, column: 1, offset: 648 },
                    end: { line: 13, column: 148, offset: 795 },
                  },
                },
              ],
              position: {
                start: { line: 13, column: 1, offset: 648 },
                end: { line: 13, column: 148, offset: 795 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "strong",
                  children: [
                    {
                      type: "text",
                      value: "In Conclusion",
                      position: {
                        start: { line: 15, column: 3, offset: 799 },
                        end: { line: 15, column: 16, offset: 812 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 15, column: 1, offset: 797 },
                    end: { line: 15, column: 18, offset: 814 },
                  },
                },
              ],
              position: {
                start: { line: 15, column: 1, offset: 797 },
                end: { line: 15, column: 18, offset: 814 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "The gym is where we sculpt our bodies and minds, and the right gear can make all the difference. With the Sony XM5s, my workouts have gone to a whole new level.",
                  position: {
                    start: { line: 17, column: 1, offset: 816 },
                    end: { line: 17, column: 161, offset: 976 },
                  },
                },
              ],
              position: {
                start: { line: 17, column: 1, offset: 816 },
                end: { line: 17, column: 161, offset: 976 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Stay tuned for more fitness tips, tech reviews, and workout motivation. Keep grinding, stay fit, and keep rocking with your Sony XM5s! 🏋️‍♂️🎧 #FitnessMotivation #SonyXM5s #GymGoal",
                  position: {
                    start: { line: 19, column: 1, offset: 978 },
                    end: { line: 19, column: 182, offset: 1159 },
                  },
                },
              ],
              position: {
                start: { line: 19, column: 1, offset: 978 },
                end: { line: 19, column: 182, offset: 1159 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 19, column: 182, offset: 1159 },
          },
        },
      },
    },
  ],
};
