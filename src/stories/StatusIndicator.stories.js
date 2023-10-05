import StatusIndicator from "../components/status-indicator"
import { taskStatus } from "../utils/enums"

export default {
    title: 'Trustview components/StatusIndicator',
    component: StatusIndicator,
    tags: ['autodocs'],
}

const Template = args => <StatusIndicator {...args} />

export const Blocked = Template.bind({})
Blocked.args = {
    status: taskStatus.BLOCKED,
    count: 1
}

export const Done = Template.bind({})
Done.args = {
    status: taskStatus.DONE,
    count: 1
}

export const BeingAssessed = Template.bind({})
BeingAssessed.args = {
    status: taskStatus.BEINGASSESSED,
    count: 1
}

export const Ongoing = Template.bind({})
Ongoing.args = {
    status: taskStatus.ONGOING,
    count: 1
}
