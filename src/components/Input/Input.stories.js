import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input', // This is mandatory and it's unique in whole project
    component: Input,
}

export const Small = () => <Input size='small' placeholder="Small Size" />

export const Medium = () => <Input size='medium' placeholder="Medium Size" />

export const Large = () => <Input size='large' placeholder="Large Size" />
