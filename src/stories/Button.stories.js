import Button, { buttonVariations } from "../components/Button";

export default {
    title: 'Test Components/Button',
    component: Button
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
    backgroundColor: 'red',
    children: 'Press me',
    variation: buttonVariations.SMALL
}

export const Green = Template.bind({});
Green.args = {
    backgroundColor: 'green',
    children: 'Press me',
    variation: buttonVariations.SMALL
}

export const Yellow = Template.bind({});
Yellow.args = {
    backgroundColor: 'yellow',
    children: 'Press me',
    variation: buttonVariations.SMALL
}
