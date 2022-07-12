import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input', // This is mandatory and it's unique in whole project
    component: Input,
}

const Template = args => <Input {...args} />

export const InputArgs = Template.bind({})
InputArgs.args = {
    size: 'medium',
    placeholder: 'Medium Size',
}
