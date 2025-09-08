interface MotionSensor {
    isDetectingMotion(): boolean;
}

interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion(numberOfSeconds: number = 1) {
        Array.from({length: numberOfSeconds},(_,i) => i).forEach(() => {
            try {
                this.sensor.isDetectingMotion()
                    ? this.recorder.startRecording()
                    : this.recorder.stopRecording()
            }
            catch (error) {
                this.recorder.stopRecording()
            }
        })
    }
}