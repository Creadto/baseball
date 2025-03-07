import {VideoControls} from "./VideoControls";

export function ThreeD(){
    return (
        <div style={{
            width: '100%',
            height: '100%',
            padding: '20px 0',
            display: 'flex',  /* Flexbox 사용 */
            flexDirection: 'column',
            alignItems: 'center', /* 수직 중앙 정렬 */
            boxSizing: 'border-box'  /* padding을 포함한 크기 지정 */
        }}>
            <h4 style={{margin: "0", width:"90%"}}>3D Playback</h4>
            <img
                style={{
                    width: '90%',
                    height: '80%',
                    objectFit: 'cover',  // Ensure the video covers the container
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                }}
                alt="3D Playback"
                src='/motion.gif'
            >
            </img>
        </div>
    );
}