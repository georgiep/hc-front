import { array } from "prop-types"
import CommonsAmenities from "../components/body/amenities/template1/Template1"


export default {
    title: "Components/Amenities",
    component: CommonsAmenities,
}

const Template = args => <CommonsAmenities data={args} />

export const Template1 = Template.bind()
Template1.args = {
    items: ["abc", "efg"],
    icon: "test",
    css: {
        "element": "div",
        "class": "title-case-hero text-uppercase",
        "color": "primary-white"
    },
}