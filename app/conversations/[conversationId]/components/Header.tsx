'use client';

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft } from "react-icons/hi2";

interface HeaderProps {
    conversation: Conversation & {
        user: User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.user.length} members`;
        }

        return 'Active';
    }, [conversation]);

    return (
        <div className="bg-white w-full boderde-b-[1px] sm:px-4 py-3
            px-4 lg:px-6 justify-between items-center shadow-sm"
        >
            <div className="flex gap-3 items-center">
                <Link 
                    href="/conversation"
                    className="lg:hidden block text-orange-500 hover:text-orange-600 transition cursor-pointer"
                >
                    <HiChevronLeft size={32}/>
                </ Link>
            </div>    
        </div>
    );
}

export default Header;