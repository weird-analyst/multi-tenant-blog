'use server';
import { ContentBlogType, blogTable } from '@/db/schema';
import { db } from "@/db";

export const createBlog = async (blogData: ContentBlogType) => {
    const result = await db.insert(blogTable).values(blogData);
    return result;
}