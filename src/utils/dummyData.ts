// blogs

import { ComponentRegistry } from "@/types";
import { markDownToAst } from "./helper";

export const blogData1: {
  title: string;
  component_registry: ComponentRegistry[];
} = {
  title: "Step Up Your Style with New Arrival: Stylish Shoes",
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
                      value: "Introduction:",
                      position: {
                        start: {
                          line: 2,
                          column: 3,
                          offset: 3,
                        },
                        end: {
                          line: 2,
                          column: 16,
                          offset: 16,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 2,
                      column: 1,
                      offset: 1,
                    },
                    end: {
                      line: 2,
                      column: 18,
                      offset: 18,
                    },
                  },
                },
                {
                  type: "break",
                  position: {
                    start: {
                      line: 2,
                      column: 18,
                      offset: 18,
                    },
                    end: {
                      line: 3,
                      column: 1,
                      offset: 21,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    "Your footwear can make or break your outfit, and there's nothing quite like a pair of stylish shoes to elevate your look. In this blog post, we'll explore the latest shoe trends inspired by the reel video \"New Arrival: Stylish Shoes.\"",
                  position: {
                    start: {
                      line: 3,
                      column: 1,
                      offset: 21,
                    },
                    end: {
                      line: 3,
                      column: 235,
                      offset: 255,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 2,
                  column: 1,
                  offset: 1,
                },
                end: {
                  line: 3,
                  column: 235,
                  offset: 255,
                },
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
                      value: "The Power of Stylish Shoes:",
                      position: {
                        start: {
                          line: 5,
                          column: 3,
                          offset: 259,
                        },
                        end: {
                          line: 5,
                          column: 30,
                          offset: 286,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 5,
                      column: 1,
                      offset: 257,
                    },
                    end: {
                      line: 5,
                      column: 32,
                      offset: 288,
                    },
                  },
                },
                {
                  type: "break",
                  position: {
                    start: {
                      line: 5,
                      column: 32,
                      offset: 288,
                    },
                    end: {
                      line: 6,
                      column: 1,
                      offset: 291,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    "Shoes are more than just functional; they are a statement of your style and personality. Whether you're into sneakers, heels, or boots, the right pair of shoes can transform your entire outfit.",
                  position: {
                    start: {
                      line: 6,
                      column: 1,
                      offset: 291,
                    },
                    end: {
                      line: 6,
                      column: 194,
                      offset: 484,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 5,
                  column: 1,
                  offset: 257,
                },
                end: {
                  line: 6,
                  column: 194,
                  offset: 484,
                },
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
                      value:
                        'Reel Video Spotlight: "New Arrival: Stylish Shoes"',
                      position: {
                        start: {
                          line: 8,
                          column: 3,
                          offset: 488,
                        },
                        end: {
                          line: 8,
                          column: 53,
                          offset: 538,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 8,
                      column: 1,
                      offset: 486,
                    },
                    end: {
                      line: 8,
                      column: 55,
                      offset: 540,
                    },
                  },
                },
                {
                  type: "break",
                  position: {
                    start: {
                      line: 8,
                      column: 55,
                      offset: 540,
                    },
                    end: {
                      line: 9,
                      column: 1,
                      offset: 543,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    'The reel video "New Arrival: Stylish Shoes" takes us on a journey through the latest shoe collections. From classic designs to bold and unique styles, this video showcases the diversity of footwear fashion.',
                  position: {
                    start: {
                      line: 9,
                      column: 1,
                      offset: 543,
                    },
                    end: {
                      line: 9,
                      column: 207,
                      offset: 749,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 8,
                  column: 1,
                  offset: 486,
                },
                end: {
                  line: 9,
                  column: 207,
                  offset: 749,
                },
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
                      value: 'Product Highlight: "Nike Stylish Running Shoes"',
                      position: {
                        start: {
                          line: 11,
                          column: 3,
                          offset: 753,
                        },
                        end: {
                          line: 11,
                          column: 50,
                          offset: 800,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 11,
                      column: 1,
                      offset: 751,
                    },
                    end: {
                      line: 11,
                      column: 52,
                      offset: 802,
                    },
                  },
                },
                {
                  type: "break",
                  position: {
                    start: {
                      line: 11,
                      column: 52,
                      offset: 802,
                    },
                    end: {
                      line: 12,
                      column: 1,
                      offset: 805,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    'One of the standout products from the video is the "Nike Stylish Running Shoes." These shoes not only offer comfort and performance but also a touch of style. Priced at $59.99, they are a great addition to your shoe collection.',
                  position: {
                    start: {
                      line: 12,
                      column: 1,
                      offset: 805,
                    },
                    end: {
                      line: 12,
                      column: 228,
                      offset: 1032,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 11,
                  column: 1,
                  offset: 751,
                },
                end: {
                  line: 12,
                  column: 228,
                  offset: 1032,
                },
              },
            },
          ],
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 13,
              column: 1,
              offset: 1033,
            },
          },
        },
      },
    },
    {
      type: "Product",
      props: {
        id: "de7b7143-89f6-422b-9ccd-d57cd0093513",
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
                      value: "Why We Love Them:",
                      position: {
                        start: { line: 2, column: 3, offset: 3 },
                        end: { line: 2, column: 20, offset: 20 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 2, column: 1, offset: 1 },
                    end: { line: 2, column: 22, offset: 22 },
                  },
                },
              ],
              position: {
                start: { line: 2, column: 1, offset: 1 },
                end: { line: 2, column: 24, offset: 24 },
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
                              value: "Nike Quality:",
                              position: {
                                start: { line: 3, column: 5, offset: 29 },
                                end: { line: 3, column: 18, offset: 42 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 3, column: 3, offset: 27 },
                            end: { line: 3, column: 20, offset: 44 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " Known for quality, these shoes are designed to last.",
                          position: {
                            start: { line: 3, column: 20, offset: 44 },
                            end: { line: 3, column: 73, offset: 97 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 3, column: 3, offset: 27 },
                        end: { line: 3, column: 73, offset: 97 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 3, column: 1, offset: 25 },
                    end: { line: 3, column: 73, offset: 97 },
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
                              value: "Versatility:",
                              position: {
                                start: { line: 4, column: 5, offset: 102 },
                                end: { line: 4, column: 17, offset: 114 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 4, column: 3, offset: 100 },
                            end: { line: 4, column: 19, offset: 116 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " Whether you're running or just strolling around, they add a sporty-chic element to your look.",
                          position: {
                            start: { line: 4, column: 19, offset: 116 },
                            end: { line: 4, column: 113, offset: 210 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 4, column: 3, offset: 100 },
                        end: { line: 4, column: 113, offset: 210 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 4, column: 1, offset: 98 },
                    end: { line: 4, column: 113, offset: 210 },
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
                              value: "Affordable Luxury:",
                              position: {
                                start: { line: 5, column: 5, offset: 215 },
                                end: { line: 5, column: 23, offset: 233 },
                              },
                            },
                          ],
                          position: {
                            start: { line: 5, column: 3, offset: 213 },
                            end: { line: 5, column: 25, offset: 235 },
                          },
                        },
                        {
                          type: "text",
                          value:
                            " You don't have to break the bank to enjoy premium footwear.",
                          position: {
                            start: { line: 5, column: 25, offset: 235 },
                            end: { line: 5, column: 85, offset: 295 },
                          },
                        },
                      ],
                      position: {
                        start: { line: 5, column: 3, offset: 213 },
                        end: { line: 5, column: 85, offset: 295 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 5, column: 1, offset: 211 },
                    end: { line: 5, column: 85, offset: 295 },
                  },
                },
              ],
              position: {
                start: { line: 3, column: 1, offset: 25 },
                end: { line: 5, column: 85, offset: 295 },
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
                      value: "Conclusion:",
                      position: {
                        start: { line: 7, column: 3, offset: 299 },
                        end: { line: 7, column: 14, offset: 310 },
                      },
                    },
                  ],
                  position: {
                    start: { line: 7, column: 1, offset: 297 },
                    end: { line: 7, column: 16, offset: 312 },
                  },
                },
                {
                  type: "break",
                  position: {
                    start: { line: 7, column: 16, offset: 312 },
                    end: { line: 8, column: 1, offset: 315 },
                  },
                },
                {
                  type: "text",
                  value:
                    'Stylish shoes are a fashion essential, and the "Nike Stylish Running Shoes" offer the perfect blend of style and functionality. Check out the "New Arrival: Stylish Shoes" reel video for more shoe inspiration and step out in style wherever you go.',
                  position: {
                    start: { line: 8, column: 1, offset: 315 },
                    end: { line: 8, column: 247, offset: 561 },
                  },
                },
              ],
              position: {
                start: { line: 7, column: 1, offset: 297 },
                end: { line: 8, column: 247, offset: 561 },
              },
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Your shoe collection is a reflection of your personality, so make sure it's filled with choices that express your unique style.",
                  position: {
                    start: { line: 10, column: 1, offset: 563 },
                    end: { line: 10, column: 128, offset: 690 },
                  },
                },
              ],
              position: {
                start: { line: 10, column: 1, offset: 563 },
                end: { line: 10, column: 128, offset: 690 },
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 11, column: 1, offset: 691 },
          },
        },
      },
    },
  ],
};
