const LocationInfoBox = ({ info }) =>
{
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
                <li>LAT: <strong>{info.lat}</strong> / LNG: <strong>{info.lng}</strong></li>
            </ul>
        </div>
    );
};

export default LocationInfoBox;
