"use client"


import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCartIcon } from 'lucide-react'
import { Separator } from './ui/separator'
import { formarPrice } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {

    const itemCount = 0
    const fee = 1
    const total = 2

  return (
    <Sheet>
        <SheetTrigger className='group -m-2 flex items-center p-2 '>
            <ShoppingCartIcon aria-hidden="true" className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
            <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray=800'>
                0
            </span>
        </SheetTrigger>
        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
            <SheetHeader className='space-y-2.5 pr-6 '>
                <SheetTitle>Cart (0)</SheetTitle>
            </SheetHeader>

                {itemCount > 0 ? (
                    <>
                    <div className='flex w-full flex-col pr-6'>
                        {/* TODO: Cart Logic */}
                        Cart Items
                    </div>
                    <div className='space-y-4 pr-6'>
                        <Separator/>
                        <div className='space-y-1.5 pr-6 '>
                            <div className='flex'>
                                <span className='flex-1'>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Transaction Fee</span>
                                <span>{formarPrice(fee)}</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Total</span>
                                <span>{formarPrice(total)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({className:"w-full", })}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                    </>
                ) : (<>
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image src="/hippo-empty-cart.png" alt="empty cart" fill />
                        </div>
                        <div className='text-sl font-semibold'>Your Cart is Empty</div>
                        <SheetTrigger asChild>
                            <Link href="/products" className={buttonVariants({
                                className:"text-sm text-muted-foreground", 
                            variant:"link", 
                                size:"sm"})}>
                                    Add Items to Your Cart to Checkout
                                </Link>
                        </SheetTrigger>
                    </div>
                </>)}

        </SheetContent>
    </Sheet>
  )
}

export default Cart
