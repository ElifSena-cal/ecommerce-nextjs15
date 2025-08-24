import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuSub,
    DropdownMenuGroup
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown, User, Settings } from 'lucide-react'

const AllCategories = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex flex-row items-center gap-3 text-white bg-sky-500 px-8 rounded-2xl py-3 cursor-pointer'>
                        <Menu />
                        All Categories
                        <ChevronDown></ChevronDown>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <User />
                                Profile
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className='w-60 text-slate-600 ml-1'>
                                <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                                <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                                <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default AllCategories