import {
    Statement,
    Goals, 
    Research,
    Persona,
    EmpathyMap,
    UserFlow,
    UserJourney,
    Prototype,
    Showcase,
    EndingPage
} from "../../component";

import {SectionsContainer,Section} from 'react-fullpage';

const Case = () =>{
    const component =[
        "Statement",
        "Goals",
        "Research",
        "Persona",
        "EmpathyMap",
        "UserFlow",
        "UserJourney",
        "Prototype",
        "Showcase",
        "EndingPage"
    ]
    let options = {
        sectionClassName:     'section',
        anchors:              component,
        scrollBar:            false,
        navigation:           true,
        verticalAlign:        false,
        arrowNavigation:      true
    };

    return(
        <SectionsContainer {...options}>
            <Section><Statement /></Section>
            <Section><Goals /></Section>
            <Section><Research /></Section>
            <Section><Persona /></Section>
            <Section><EmpathyMap /></Section>
            <Section><UserFlow /></Section>
            <Section><UserJourney /></Section>
            <Section><Prototype /></Section>
            <Section><Showcase page="case"/></Section>
            <Section><EndingPage/></Section>
        </SectionsContainer>
    )
}

export default Case;