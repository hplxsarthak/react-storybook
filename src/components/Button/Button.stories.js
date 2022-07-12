import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: 'Form/Button', // This is mandatory and it's unique in whole project
    component: Button,
    decorators: [
        story => <Center>{story()}</Center>
    ],
    argTypes: {
        variant: {control: 'text'},
        children: {control: 'text'},
        onClick: {action: 'clicked'}
    }

}

// Args approach to write stories
const Template = args => <Button {...args} />

export const ButtonArgs = Template.bind({})
ButtonArgs.args = {
    variant: 'primary',
    children: 'Primary Args',
}
