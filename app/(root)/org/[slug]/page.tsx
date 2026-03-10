'use client'

import * as React from 'react';
import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from './actions';
import { useOrganization } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs'

export default function OrgLandingPage() {
    const [blogTitle, setBlogTitle] = React.useState("");
    const [blogContent, setBlogContent] = React.useState("");
    const { organization } = useOrganization();
    const { user } = useUser();

    console.log("Organization:", organization);
    console.log("User", user);

    const handleCreateBlog = async () => {
        if (!blogTitle || !blogContent || !organization || !user) {
            alert("Please fill in all fields.");
            return;
        }

        const blogData = {
            title: blogTitle,
            body: blogContent,
            orgId: organization?.id,
            createdBy: user?.fullName
        };

        await createBlog(blogData);
    }

    return <main>
        <Nav />
        <div className="p-10">
            <Input 
                placeholder="Blog Title" 
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
            />
            <Textarea 
                placeholder="What's on your mind?" 
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                className='mt-2'
            />
            <Button className="mt-2" onClick={handleCreateBlog}>
                Create a Blog!
            </Button>
        </div>
    </main>
}