'use client'


import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import React from 'react'

const Page = () => {
  return (
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
            <div className="flex flex-col text-center items-center space-y-2">
                <Icons.logo className='h-20 w-20' />
                <h1 className='text-2xl font-bold'>Create an account</h1>
                <Link className={buttonVariants({variant:'link',})} href='/sign-in'>Already have an account? Sign In</Link>
            </div>

            <div className="grid gap-6">
                <form >
                    <div className="grid gap-2">
                        <div className="grid gap-2 py-2">
                            <Label htmlFor='email'>Email</Label>
                            <Input className={cn({
                                "focus-visible:ring-violet-500": true
                            })} 
                            placeholder='you@example.com' />
                        </div>

                        <div className="grid gap-2 py-2">
                            <Label htmlFor='password'>Password</Label>
                            <Input className={cn({
                                "focus-visible:ring-violet-500": true
                            })} 
                            placeholder='Password' />
                        </div>
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )  
}

export default Page
