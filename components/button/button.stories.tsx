// Utils
import { Story, Meta } from "@storybook/react"

// Components
import { Button } from "./button.component"

// Types
import { IButtonProps } from "./button.types"

const meta: Meta = {
	title: "Components/Button",
	component: Button,
}

export default meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	children: "Button",
	disabled: false,
	onClick: () => console.log("Button clicked"),
	top: "initial",
	bottom: "initial",
	left: "initial",
	right: "initial",
	width: "initial",
	rounded: false,
}
