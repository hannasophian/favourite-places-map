

import PlaceEntry from "./PlaceEntry";


function MainContent(): JSX.Element {
    const places = [{
                    name:"Dovestone Reservoir",
                    location:"Peak District National Park",
                    mapLink:"https://goo.gl/maps/oWycnThQSChjxcvt7",
                    description:"Reservoir surrounded by rivers and hills",
                    image:"/images/dovestone.jpg",
                    imageDescription:"Image of reservoir in hills"
                },
                {
                    name:"Melaka River",
                    location:"Malacca, Malaysia",
                    mapLink:"https://goo.gl/maps/NM9yzS4AqayJax8F7",
                    description:"Reservoir surrounded by rivers and hills",
                    image:"/images/malaccariver.jpeg",
                    imageDescription:"Image of Melaka River"
                }];
        // const placeSection = places.map((place) =>
        //         <PlaceEntry 
        //             name= {place.name}
        //             location={place.location}
        //             mapLink={place.mapLink}
        //             description = {place.description}
        //             image = {place.image}
        //             imageDescription = {place.imageDescription} 
        //         />
        const placeSection = places.map((place) =>
                <PlaceEntry key="placesection"
                    name={place.name}
                    location={place.location}
                    mapLink={place.mapLink}
                    description = {place.description}
                    image = {place.image}
                    imageDescription = {place.imageDescription} 
                />
                );
    return (
        <>
            {placeSection}
        </>
    )
}

export default MainContent;