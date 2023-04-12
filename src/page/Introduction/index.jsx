import { 
    CoreFunc, 
    Data, 
    Describe, 
    ProductDesign, 
    Showcase, 
    Thinking } from "../../component";

import {SectionsContainer,Section} from 'react-fullpage';

const Introduction = () =>{
    let options = {
        sectionClassName:     'section',
        anchors:              ["Describe","Data","thinking","coreFunc","ProductDesign","Showcase"],
        scrollBar:            false,
        navigation:           true,
        verticalAlign:        false,
        arrowNavigation:      true
    };

    return(
        <SectionsContainer {...options}>
            <Section><Describe /></Section>
            <Section><Data /></Section>
            <Section><Thinking /></Section>
            <Section><CoreFunc /></Section>
            <Section><ProductDesign /></Section>
            <Section><Showcase /></Section>
        </SectionsContainer>
    )
}

export default Introduction;