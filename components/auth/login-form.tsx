'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas';
import { Form } from '../ui/form';
import { LoginInputComponent } from '../input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Navbar } from '../navbar';
import { RoyaltyComponent } from '../royalty-component';
import { routes } from '@/constants';
import { AuthWrapper } from '../auth-wrapper';

export const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        console.log(values);
    }

    return (
        <div className="flex w-full relative">
            {/* navbar */}
            <Navbar link={routes.REGISTER} text="Create account" />
            {/* royalty */}
            <RoyaltyComponent />

            {/* login form */}
            <AuthWrapper>
                <h1 className="text-[35px] dmsans font-semibold leading-[45.57px]">
                    Login to Franchain
                </h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5 mt-5"
                    >
                        <LoginInputComponent
                            label="Email"
                            control={form.control}
                            type="email"
                            name="email"
                        />

                        <LoginInputComponent
                            label="Password"
                            control={form.control}
                            type="password"
                            name="password"
                        />

                        <p className='font-normal text-[16px] dmsans leading-[20.83px]'>Forgot your password? <Link href={routes.FORGOT} className='underline'>click here to reset</Link></p>
                        <Button
                            type="submit"
                            className="h-[53px] w-[144px] rounded-full bg-[#CED6F7] text-white text-lg"
                        >
                            Log in
                        </Button>
                    </form>
                </Form>
            </AuthWrapper>
        </div>
    );
}