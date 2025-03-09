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
            display:"flex",
            width: '100%',
            height: '100%',  // 뷰포트 높이 기준
            flexDirection: 'column',
            boxSizing: 'border-box',
            padding: '20px',
        }}>
            {/* 카메라 그리드 영역 */}
            <div style={{
                maxHeight: '80%',  // 부모 요소에 맞게 100% 크기 조정
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',  // 2개의 열로 그리드 생성
                gridTemplateRows: 'repeat(2, 1fr)',  // 2개의 행으로 그리드 생성
                gridGap: '10px',  // 그리드 사이 간격
                boxSizing: 'border-box',
            }}>
                {cameras.map((camera) => (
                    <div key={camera.id} style={{
                        minWidth: '48%',
                        minHeight: '48%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #ccc',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                    }}>
                        <h4 style={{ margin: "0", width:"90%", fontSize: '10px' }}>{camera.name}</h4>
                        <img
                            style={{
                                width: '90%',
                                height: '80%',
                                objectFit: 'contain',
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
                height: '20%',
                boxSizing: 'border-box',
            }}>
                <VideoControls />
            </div>
        </div>
    );
}
