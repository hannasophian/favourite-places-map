

import PlaceEntry from "./PlaceEntry";


function MainContent(): JSX.Element {
    return (
        <>
            <PlaceEntry
                name={"Dovestone Reservoir"} 
                location={"Peak District National Park"} 
                mapLink={"https://goo.gl/maps/oWycnThQSChjxcvt7"} 
                description={"Reservoir surrounded by rivers and hills"} 
                image={"/images/dovestone.jpg"} 
                imageDescription={"Image of reservoir in hills"}
            />
            <PlaceEntry
                name={"Melaka River"} 
                location={"Malacca, Malaysia"} 
                mapLink={"https://goo.gl/maps/NM9yzS4AqayJax8F7"} 
                description={"Reservoir surrounded by rivers and hills"} 
                image={"/images/malaccariver.jpeg"} 
                imageDescription={"Image of Melaka River"}
            />
        </>
    )
}

export default MainContent;