import React, {useState} from "react";
import "./styles/styles.css";
import {Camera} from "./component/Camera";
import {ThreeD} from "./component/ThreeD";
import {Chart} from "./component/Chart";
import NotificationIcon from "./icon/Notification";
import Profile from "./icon/Profile";
import MoreButton from "./icon/More";
import {SearchIcon} from "./icon/SearchIcon";

export default function App() {

    const [activeTab, setActiveTab] = useState("Dashboard");

    const handleTabClick = (tabName : string) => {
        setActiveTab(tabName);
    };


    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="header">
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h1 className="title">BYNAMICS</h1>
                    <div className="header-tab">
                        <button
                            className={activeTab === "Dashboard" ? "active" : ""}
                            onClick={() => handleTabClick("Dashboard")}
                        >
                            Dashboard
                        </button>
                        <button
                            className={activeTab === "Pitching" ? "active" : ""}
                            onClick={() => handleTabClick("Pitching")}
                        >
                            Pitching
                        </button>
                        <button
                            className={activeTab === "Batting" ? "active" : ""}
                            onClick={() => handleTabClick("Batting")}
                        >
                            Batting
                        </button>
                    </div>
                </div>
                <div className="header-info">
                    <Profile/>
                    <NotificationIcon/>
                    <MoreButton/>
                </div>
            </header>

            {/* Main Content */}
            <div className="main-content">
                {/* Sidebar */}
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li style={{
                                display: "flex",
                                flexDirection: "row",
                                gap:"25px",
                                color:"#e2e2e2",
                            }}>
                                <SearchIcon/>
                                Search
                            </li>
                            <li style={{backgroundColor:"#808080"}}>Live Analysis</li>
                            <li>Comparative Analysis</li>
                            <li>AI Agent</li>
                        </ul>
                    </nav>
                </aside>

                {/* Content */}
                <main className="content">
                    {/*카메라 & 3D*/}
                    <div className="media">
                        {/*카메라*/}
                        <div className="camera">
                            <Camera/>
                        </div>
                        {/*3D*/}
                        <div className="threeD">
                            <ThreeD/>
                        </div>
                    </div>
                    {/*차트*/}
                    <div className="chart">
                        <Chart/>
                    </div>
                </main>
            </div>
        </div>
    );
}