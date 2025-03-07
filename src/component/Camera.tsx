import { VideoControls } from "./VideoControls";

export function Camera() {
    const cameras = [
        { id: 1, name: "Camera1", src: "/baseball.gif" },
        { id: 2, name: "Camera2", src: "/baseball.gif" },
        { id: 3, name: "Camera3", src: "/baseball.gif" },
        { id: 4, name: "Camera4", src: "/baseball.gif" },
    ];

    return (
        <div style={{
            width: '100%',
            height: '100vh',  // 뷰포트 높이 기준
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            padding: '20px',
        }}>
            {/* 카메라 그리드 영역 */}
            <div style={{
                flex: 1,  // 남은 공간 모두 사용
                display: 'flex',
                flexWrap: 'wrap',  // 자동 줄바꿈
                gap: '10px',
                justifyContent: 'space-between',
            }}>
                {cameras.map((camera) => (
                    <div key={camera.id} style={{
                        width: '48%',   // 2개씩 한 행에 배치 (gap 고려)
                        height: '48%',  // 2행으로 균등 분할
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #ccc',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        padding: '10px',
                    }}>
                        <h4 style={{ margin: "0", width:"90%", fontSize: '14px' }}>{camera.name}</h4>
                        <img
                            style={{
                                width: '90%',
                                height: '80%',
                                objectFit: 'cover',
                                borderRadius: "8px",
                            }}
                            alt={camera.name}
                            src={camera.src}
                        />
                    </div>
                ))}
            </div>
            {/* VideoControls 영역 */}
            <div style={{
                marginTop: '10px',
            }}>
                <VideoControls />
            </div>
        </div>
    );
}
