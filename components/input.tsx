import React, { FC } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Control } from 'react-hook-form';
import { Input } from './ui/input';

type RegisterInputProp = {
    label: string;
    control: Control<{
        firstName: string;
        lastName: string;
        businessName: string;
        email: string;
        password: string;
    }>
    name: "firstName" | "lastName" | "businessName" | "email" | "password";
    type: string;
}

type LoginInputProp = {
    label: string;
    control: Control<{
        email: string;
        password: string;
    }>
    name: "email" | "password";
    type: string;
}

export const RegisterInputComponent: FC<RegisterInputProp> = ({ name, control, label, type }) => {
    return (
        <div className='mt-3'>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-[16px] font-normal dmsans leading-[20.83px] text-[#282828]'>{label}</FormLabel>
                        <FormControl>
                            <Input {...field}
                                type={type}
                                className='text-black bg-[#FDFDFF] outline-none rounded-lg w-[530px] h-[56px] border border-[#A6AECF] focus:ring-0'
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}


export const LoginInputComponent: FC<LoginInputProp> = ({ name, control, label, type }) => {
    return (
        <div className='mt-3'>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-[16px] font-normal dmsans leading-[20.83px] text-[#282828]'>{label}</FormLabel>
                        <FormControl>
                            <Input {...field}
                                type={type}
                                className='text-black bg-[#FDFDFF] outline-none rounded-lg w-[530px] h-[56px] border border-[#A6AECF] focus:ring-0'
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}