'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import SignGreater from '../../public/assets/img/sign1.svg'
import SignTilda from '../../public/assets/img/sign2.svg'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from '@nextui-org/react';
import CardCourse from './card';

const CoursePage = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current! as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let columns = Math.floor(width / 20);
        const characters = "abcdefghijklmnopqrstuwxyz123456789!@#$%^^&*()";
        const charArray = characters.split('');
        let drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        let frameRate = 15;
        let lastFrameTime = Date.now();

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "#0f0";

            ctx.font = "15px monospace";
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const animate = () => {
            const currentTime = Date.now();
            const ellapsedTime = currentTime - lastFrameTime;

            if (ellapsedTime > 1000 / frameRate) {
                draw();
                lastFrameTime = currentTime;
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = (canvas.width = window.innerWidth);
            height = (canvas.height = window.innerHeight);
            columns = Math.floor(width / 40);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
        if (!isMobileDevice) {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (!isMobileDevice) {
                window.addEventListener("resize", handleResize);
            }
        };
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [])

    const [lines, setLines] = useState<string[]>([]);
    const fullText = 'cd Embedded Course \n start "Embedded_Course" MD:/Ch/UTM/FCIM\n Date: 6/Nov/2023\n Qr..Code..........DONE';
    const [done, setDone] = useState(false);

    useEffect(() => {
        scrollToBottom();
        const linesArray = fullText.split('\n');
        let currentIndex = 0;

        scrollToBottom();

        const visibilityInterval = setInterval(() => {
            if (currentIndex <= linesArray.length) {
                setLines(linesArray.slice(0, currentIndex));
                currentIndex += 1;
            } else {
                clearInterval(visibilityInterval);
            }
        }, 100);

        scrollToBottom();

        const writingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setLines([fullText.substring(0, currentIndex)]);
                currentIndex += 1;
            } else {
                setDone(true)
                clearInterval(writingInterval);
            }
        }, 50);

        scrollToBottom();

        return () => {
            clearInterval(visibilityInterval);
            clearInterval(writingInterval);
        };
    }, [fullText]);

    useEffect(() => {
        scrollToBottom();
    }, [done])

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='absolute inset-0'>
                <canvas className='fixed top-0 left-0 z-[-1] w-full h-full' ref={canvasRef} />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full pb-5 z-[1]">
                <div className='flex flex-col mt-[20px] w-full items-center'>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"             -====++==:             "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"              -+++++++++:           "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"               -+++++++**:          "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"                :++*******-         "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"                 .+********-        "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"                  .+********=       "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"                    +*******+=      "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"     :++**+++++.     =****##*+=.    "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"    =*******++.       =#####*+++:   "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"   =*******++.         -####+++++:  "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"  +******++=            :##*++++++- "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" +*****+++=              .*++++++++:"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"+*****+++=               .+++++++++:"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"*****+++*-              .+++++++++: "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{":***++++##-            :+++++++++:  "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" :+++++####=          :+++++++++.   "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"  .++++#####=        -+++++++++.    "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"   .=++###***+      -++++++++=.     "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"     =+*******+                     "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"      -********+.                   "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"       -********+.                  "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"        :********+:                 "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"         :+**++++++-                "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"          .+++++++++-               "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"            :=+++++++=              "}</span>
                </div>
                <div className='flex flex-col mt-[20px] w-full items-center'>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"  ____   _______          __  _______ ______ _____ _    _ "}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" |  _ \\ / ____\\ \\        / / |__   __|  ____/ ____| |  | |"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" | |_) | (___  \\ \\  /\\  / /     | |  | |__ | |    | |__| |"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" |  _ < \\___ \\  \\ \\/  \\/ /      | |  |  __|| |    |  __  |"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" | |_) |____) |  \\  /\\  /       | |  | |___| |____| |  | |"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{" |____/|_____/    \\/  \\/        |_|  |______\\_____|_|  |_|"}</span>
                    <span className="whitespace-pre text-[8px] sm:text-xs font-mono font-medium text-gray-300 animate-appearance-in">{"                                                          "}</span>
                </div>
                <div className='flex content-center items-center justify-center text-center'>
                    <pre>
                        {lines.map((line, index) => (
                            <div key={index} className='flex flex-row h-[200px]'>
                                <div className='flex flex-row items-end'>
                                    <Image
                                        alt='signGreater'
                                        src={SignGreater}
                                        height={20}
                                        width={20}
                                        className='mb-2'
                                    />
                                    <Image
                                        alt='signTilda'
                                        src={SignTilda}
                                        height={15}
                                        width={15}
                                    />
                                    <span className='ml-2 text-xs sm:text-xl font-mono font-medium text-gray-300'>{line}</span>
                                </div>
                            </div>
                        ))}
                    </pre>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    {done && <Button className='h-[60px] text-xs sm:text-3xl font-bold font-arial border-1 border-black dark:bg-gray-900 text-gray-500 animate-appearance-in' onClick={onOpen}>Register</Button>}
                </div>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Înregistrați-vă la curs</ModalHeader>
                                <ModalBody>
                                    <p className='text-sm sm:text-xl font-mono font-medium text-gray-300 text-center'>Send your applications request to the email address </p>
                                    <p className='text-sm sm:text-xl font-mono font-medium text-gray-300 text-center'>Requirements(Name/Surname, Email, Group)</p>
                                    <CardCourse />
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>

            </div>
        </div>
    );
}



export default CoursePage;
