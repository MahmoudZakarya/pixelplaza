"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { User } from '@/payload-types'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const UserAccountNav = ({user}: {user: User}) => {

    const {signOut} = useAuth() 

  return (
    <DropdownMenu>
        <DropdownMenuTrigger 
        asChild 
        className='overflow-visible'>
            <Button 
            variant="ghost"
            size="sm"
            className='relative'>
                My Account
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <div className="flex items-center justify-start gap-2 p-2">
                <div className='flex lex-col space-y-0.5 leading-none'>
                    <p className='font-medium text-sm test-black'>{user.email}</p>
                </div>
            </div>

            <DropdownMenuSeparator/>

            <DropdownMenuItem asChild>
                <Link href="/sell">Seller Dashboard</Link>
            </DropdownMenuItem>

            <DropdownMenuItem className='cursor-pointer text-red-500' onClick={signOut}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
  )  
}

export default UserAccountNav
