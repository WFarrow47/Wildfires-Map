import Icon from "@iconify/react";
import loadingIcon from "@iconify/icons-mdi/loading";

const Loader = () =>
{
    return (
        <div className="loading-screen">
            <Icon icon={loadingIcon} className="loading-icon" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;