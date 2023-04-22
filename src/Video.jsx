import { Suspense } from "react";
import { DoubleSide } from "three";
import { useVideoTexture } from "@react-three/drei"

export default function Video() {
    const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

    const video = document.createElement('video');
    video.src = url;
    video.loop = true;
    video.muted = true;

    const texture = useVideoTexture(video.src, { start: true })

    return (
        <>
            <group rotation-y={-Math.PI/4} >
                <mesh>
                    <planeBufferGeometry args={[3, 2]} />
                    <Suspense fallback={<meshStandardMaterial side={DoubleSide} />}>
                        <meshStandardMaterial side={DoubleSide} map={texture} toneMapped={false} />
                    </Suspense>
                </mesh>
            </group>
        </>
    )
}