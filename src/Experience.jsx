import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Video from './Video'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} />
        <Video />
    </>
}







