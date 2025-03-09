import '../styles/chart.css';

export function Chart() {
    return (
        <div className="chart-container">
            <div className="chart-left">
                <h4>Shoulder Rotation</h4>
                <img
                    className="chart-img"
                    alt="linechart"
                    src='/linechart.gif'
                />
            </div>
            <div className="chart-middle">
                <h4>Pelvis Rotation</h4>
                <img
                    className="chart-img"
                    alt="linechart"
                    src='/linechart.gif'
                />
            </div>
            <div className="chart-right">
                <h4>Kinetic Sequence</h4>
                <img
                    className="chart-img"
                    alt="linechart"
                    src='/linechart.gif'
                />
            </div>
        </div>
    );
}
