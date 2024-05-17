'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas';
import { Form } from '../ui/form';
import { RegisterInputComponent } from '../input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Navbar } from '../navbar';
import { RoyaltyComponent } from '../royalty-component';
import { routes } from '@/constants';
import { AuthWrapper } from '../auth-wrapper';

export const RegisterForm = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            businessName: '',
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof registerSchema>) => {
        console.log(values);
    }

    return (
        <div className="flex w-full relative">
            {/* navbar */}
            <Navbar link={routes.LOGIN} text="Login" />
            {/* royalty */}
            <RoyaltyComponent />

            {/* register form */}
            <AuthWrapper>
                <h1 className="text-[35px] dmsans font-semibold leading-[45.57px]">
                    Get Started with Franchain
                </h1>
                <p className="text-[20px] font-normal leading-[26.04px dmsans] text-[#282828] text-start">
                    Create an account in 5 minutes
                </p>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5 mt-5"
                    >
                        <RegisterInputComponent
                            label="First name"
                            control={form.control}
                            type="text"
                            name="firstName"
                        />

                        <RegisterInputComponent
                            label="Last name"
                            control={form.control}
                            type="text"
                            name="lastName"
                        />

                        <RegisterInputComponent
                            label="Business name and HQ location"
                            control={form.control}
                            type="text"
                            name="businessName"
                        />

                        <RegisterInputComponent
                            label="Work email"
                            control={form.control}
                            type="email"
                            name="email"
                        />

                        <RegisterInputComponent
                            label="Password"
                            control={form.control}
                            type="password"
                            name="password"
                        />

                        <Button
                            type="submit"
                            className="h-[53px] w-[144px] rounded-full bg-[#CED6F7] text-white text-lg"
                        >
                            Sign up
                        </Button>
                    </form>
                </Form>

                <div className="mt-5 w-[530px]">
                    <p className="font-normal text-[14px] dmsans leading-[18.23px] text-[#282828]">
                        By clicking &quot;Start Application&quot;, I agree to Mercury&apos;s
                        <Link href={'#'} className="underline">
                            {' '}
                            Terms of Use, Privacy Policy{' '}
                        </Link>
                        and to receive electronic communication about my accounts and
                        services per
                        <Link href={'#'} className="underline">
                            {' '}
                            Mercury&apos;s Electronic Communications Agreement,{' '}
                        </Link>
                        and acknowledge receipt of
                        <Link href={'#'} className="underline">
                            {' '}
                            Mercury&apos;s USA PATRIOT Act disclosure.
                        </Link>
                    </p>
                </div>
            </AuthWrapper >
        </div>
    );
}