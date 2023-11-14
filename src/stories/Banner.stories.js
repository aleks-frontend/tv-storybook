import { FaExclamationTriangle } from 'react-icons/fa';
import Banner from '../components/banner';
import Colors from '../utils/colors';

export default {
  title: "Trustview components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["left", "right", "top", "bottom"],
    },
  },
};

const Template = (args) => <Banner {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  children: <div>Regular warning banner</div>,
};

export const Centered = Template.bind({});
Centered.args = {
  children: <div>Centered warning banner</div>,
  textAlignment: 'center'
};

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
    children: <div>Red error banner with some critical info and erro icon</div>,
    backgroundColor: Colors.errorBanner,
    iconColor: Colors.red4,
    FaIcon: FaExclamationTriangle
};

export const ErrorBannerCentered = Template.bind({});
ErrorBannerCentered.args = {
    children: <div>Red error banner with some critical info and error icon and centered</div>,
    backgroundColor: Colors.errorBanner,
    iconColor: Colors.red4,
    FaIcon: FaExclamationTriangle,
    textAlignment: 'center',
};

export const ErrorBannerLimitedWidth = Template.bind({});
ErrorBannerLimitedWidth.args = {
    children: <div>Red error banner with some critical info and error icon and centered</div>,
    backgroundColor: Colors.errorBanner,
    iconColor: Colors.red4,
    FaIcon: FaExclamationTriangle,
    textAlignment: 'center',
    maxWidth: '300px'
};