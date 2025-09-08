import {SurveillanceController} from '../core/SurveillanceController'

interface MotionSensor {
    isDetectingMotion(): boolean;
}

interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

export class StubSensorDetectingNoMotion implements MotionSensor {
    isDetectingMotion(): boolean { return false;}
}

export class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean { return false;}
}

export class FakeRecorder implements VideoRecorder {
    startRecording() {console.log('Start recording...');}
    stopRecording() {console.log('Stop recording...');}
}

describe('The Surveillance Controller', () => {
    let sensor: MotionSensor;
    let recorder: VideoRecorder;
    let controller: SurveillanceController;
    beforeEach(() => {
        sensor = new FakeSensor();
        recorder = new FakeRecorder();
        controller = new SurveillanceController(sensor, recorder);
    })

    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        const spyRecorder = jest.spyOn(recorder, 'stopRecording')
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => {
         throw new Error('Unexpected error');
        })
        const spyRecorder = jest.spyOn(recorder, 'stopRecording')
        controller.recordMotion();
        expect(spyRecorder).toHaveBeenCalled();
    })

    it('checks the sensor status once per second', () => {
        const spySensor = jest.spyOn(sensor, 'isDetectingMotion');
        const numberOfSeconds = 3;
        controller.recordMotion(numberOfSeconds);
        expect(spySensor).toHaveBeenCalledTimes(numberOfSeconds);
    });
});