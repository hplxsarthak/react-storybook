import React from "react";
import Button from "./Button";

export default {
    title: 'Button', // This is mandatory and it's unique in whole project
    component: Button,
}

// Every named exports define a story

export const Primary = () => <Button variant='primary'>Primary</Button>

export const Secondary = () => <Button variant='secondary'>Secondary</Button>

export const Success = () => <Button variant='success'>Success</Button>

export const Danger = () => <Button variant='danger'>Danger</Button>