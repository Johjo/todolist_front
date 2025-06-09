"use client"
import {useEffect} from "react";
import {provide} from "@/injection.client";
import {PAGE_SOURCE} from "@/app/injectionKeys";
import {PageSource} from "@/secondary/pageSource";



export function DependencyInjection() {
    useEffect(() => {
        provide(PAGE_SOURCE, new PageSource());
    })

    return null;
}