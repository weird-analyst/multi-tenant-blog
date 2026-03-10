'use client';

import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";

const Nav: React.FC = () => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <div>
                <h1 className="font-semibold text-2xl">Blog Application</h1>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <OrganizationSwitcher afterCreateOrganizationUrl="/org/:slug" afterSelectOrganizationUrl="/org/:slug" />
                <UserButton appearance={{
                    elements: {
                        userButtonAvatarBox: {
                            width: "32px",
                            height: "32px"
                        }
                    }
                }} />
            </div>
        </nav>
    )
}

export default Nav;