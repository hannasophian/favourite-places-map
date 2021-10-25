
interface PlaceEntryProps {
    name: string;
    location: string;
    mapLink: string;
    description: string;
    image: string;
    imageDescription: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
    return (
        <section>
            <img src ={props.image} alt={props.imageDescription} />
            <h2>{props.name}</h2>
            <h3>{props.location} (<a href={props.mapLink}>map link</a>)</h3>
            <p>{props.description}</p>
        </section>
    )
}

export default PlaceEntry;