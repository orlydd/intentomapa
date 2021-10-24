import "../App.css"; 

function dashboardFunction(){
    return{
        __html: "<style>.embed-container {position: relative; padding-bottom: 58%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class=\"embed-container\"><iframe width=\"500\" height=\"400\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" title=\"intento v.1\" src=\"https://www.arcgis.com/apps/dashboards/a1d25a23500c48b8a2f3339aeb314fad\"></iframe></div>"
    }
};

const Dashboard = () => {
    return(
        <div className="containerDash">
            <div className="dashboardDiv" dangerouslySetInnerHTML= {dashboardFunction()}></div>
        </div>
    )
}

export default Dashboard;
