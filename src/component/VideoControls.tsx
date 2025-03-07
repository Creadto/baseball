import {useEffect, useState} from "react";

export function VideoControls() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setProgress((prev)=>(prev < 100 ? prev+1 : 100));
        },1000);

        return ()=> clearInterval(interval);
    },[])
    return (
        <div className="video-controls">
            {/* 타임라인 스크롤 */}
            <input type="range" className="timeline" min="0" max="100" value={progress}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: "20px"}}>
                <div className="video-buttons">
                    <button>⏪</button>
                    {/* 뒤로 감기 */}
                    <button>▶️</button>
                    {/* 재생 / 일시정지 */}
                    <button>⏩</button>
                    {/* 앞으로 감기 */}
                </div>

                {/* 프레임 속도 조절 버튼 */}
                <div className="speed-controls">
                    <button>1/16</button>
                    <button>1/8</button>
                    <button>1/4</button>
                    <button>1/2</button>
                    <button>1</button>
                </div>
            </div>
        </div>
    );
}
