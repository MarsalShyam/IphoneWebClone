
import { useGSAP } from '@gsap/react';
import ModelView from './ModelView';
import gsap from 'gsap';
import { yellowImg } from "../utils"
import * as THREE from 'three';
import { useState } from 'react';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';


const Model = () => {

    const [size, setSize] = useState('small');
    const [model, setMethod] = useState({
        title: 'iphone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,

    })

    //camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    //model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotatio
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
        gsap.to("#heading", {
            opacity: 1,
            y: 0,
        })
    }, []);

    return (
        <section className='common-padding'>
            <div className='common-padding'>
                <h1 id="heading" className='section-heading'>Take a closer look.
                </h1>

                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                        className='w-full h-full'
                        style={{
                            position:'fixed',
                            top:0,
                            left:0,
                            right:0,
                            overflow:'hidden',
                        }}
                        eventSource={document.getElementById('root')}
                        >
                            <View.Port/>
                        </Canvas>
                    </div>
                    <div className='mx-auto w-full'>
                        <p className="">
                            {model.title}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model
