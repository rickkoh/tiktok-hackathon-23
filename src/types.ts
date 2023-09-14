// Supabase Db types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          component_registry: Json | null;
          created_at: string;
          id: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          component_registry?: Json | null;
          created_at?: string;
          id?: string;
          title?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          component_registry?: Json | null;
          created_at?: string;
          id?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blogs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "reels";
            referencedColumns: ["id"];
          }
        ];
      };
      comments: {
        Row: {
          blog_id: string;
          content: string;
          created_at: string;
          id: string;
          updated_at: string;
        };
        Insert: {
          blog_id: string;
          content: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Update: {
          blog_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "comments_blog_id_fkey";
            columns: ["blog_id"];
            referencedRelation: "blogs";
            referencedColumns: ["id"];
          }
        ];
      };
      followers: {
        Row: {
          created_at: string;
          follower_id: string;
          id: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          follower_id: string;
          id?: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          follower_id?: string;
          id?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "followers_follower_id_fkey";
            columns: ["follower_id"];
            referencedRelation: "user_profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "followers_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "user_profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      following: {
        Row: {
          created_at: string;
          following_id: string;
          id: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          following_id: string;
          id?: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          following_id?: string;
          id?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "following_following_id_fkey";
            columns: ["following_id"];
            referencedRelation: "user_profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "following_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "user_profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      products: {
        Row: {
          created_at: string;
          id: string;
          image_id: string | null;
          price: number;
          ratings: number | null;
          sold: number;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_id?: string | null;
          price: number;
          ratings?: number | null;
          sold?: number;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_id?: string | null;
          price?: number;
          ratings?: number | null;
          sold?: number;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      reels: {
        Row: {
          caption: string;
          created_at: string;
          id: string;
          updated_at: string;
          user_id: string | null;
          video_id: string;
        };
        Insert: {
          caption: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id?: string | null;
          video_id: string;
        };
        Update: {
          caption?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id?: string | null;
          video_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reels_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "user_profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      replies: {
        Row: {
          comment_id: string;
          content: string;
          created_at: string;
          id: string;
          updated_at: string;
        };
        Insert: {
          comment_id: string;
          content: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Update: {
          comment_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "replies_comment_id_fkey";
            columns: ["comment_id"];
            referencedRelation: "comments";
            referencedColumns: ["id"];
          }
        ];
      };
      user_profiles: {
        Row: {
          avatar_id: string | null;
          bio: string | null;
          created_at: string;
          email: string | null;
          id: string;
          name: string | null;
          updated_at: string;
          username: string;
        };
        Insert: {
          avatar_id?: string | null;
          bio?: string | null;
          created_at?: string;
          email?: string | null;
          id: string;
          name?: string | null;
          updated_at?: string;
          username?: string;
        };
        Update: {
          avatar_id?: string | null;
          bio?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          name?: string | null;
          updated_at?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export interface ComponentRegistry {}

export interface ReelType extends Tables<"reels"> {
  videoUrl?: string;
  blogs: Tables<"blogs">[];
  user_profiles: Tables<"user_profiles">;
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
