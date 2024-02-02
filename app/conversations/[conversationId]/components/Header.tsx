'use client';

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import Link from "next/link";
import ProfileDrawer from "./ProfileDrawer";

import { Conversation, User } from "@prisma/client";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
    conversation: Conversation & {
        user: User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.user.length} members`;
        }

        return 'Active';
    }, [conversation]);

    return (
        <>
            <ProfileDrawer 
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div className="bg-white w-full border-b-[1px] sm:px-4 py-3
                px-4 lg:px-6 justify-between items-center shadow-sm"
            >
                <div className="flex gap-3 items-center">
                    <Link 
                        href="/conversations"
                        className="lg:hidden block text-orange-500 hover:text-orange-600 transition cursor-pointer"
                    >
                        <HiChevronLeft size={32}/>
                    </Link>
                    <Avatar user={otherUser}/>
                    <div className="flex flex-col">
                        <div>
                            {conversation.name || otherUser.name}
                        </div>
                        <div className="text-sm font-light text-neutral-500">
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                    className="text-orange-500 cursor-pointer hover:text-orange-600 transition"
                />
            </div>
        </>
    );
}

export default Header;