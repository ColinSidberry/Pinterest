"use client"
import React from 'react';
import {SessionProvider} from "next-auth/react";

interface ProviderTypes {
    children: React.ReactNode;
}

function Provider({children}: ProviderTypes) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default Provider;