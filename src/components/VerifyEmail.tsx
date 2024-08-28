"use client"

import { trpc } from '@/trpc/client'
import { XCircle } from 'lucide-react'
import React from 'react'

interface VerifyEmailProps {
    token: string
}
const VerifyEmail = ({token}:VerifyEmailProps) => {

    const {data, isLoading, isError} = trpc.auth.verifyEmail.useQuery({
        token
    })

    if(isError){
        return (
            <div className='flex flex-col items-center gap-2'>
                <XCircle className='h-8 w-8 text-red-800' />
                <h3 className='font-semibold text-xl'>There was a problem</h3>
                <p className='text-muted-foreground text-sm'>This token is not vaild or might be expired. Please try again</p>
            </div>
        )
        
    }



    if(data?.success){
        return (
            <div></div>
        )
    }
}

export default VerifyEmail