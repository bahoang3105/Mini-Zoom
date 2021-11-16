const getUserMedia = async (cameraId, microId) => {
  try {
    const constraints = (microId !== false && microId !== 'false') ? {
      video: false,
      audio: {
        deviceId: microId,
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
      }
    } : {
      video: {
        deviceId: cameraId,
      },
      audio: false,
    };
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.error(err);
    alert('We need your permission to use the camera and microphone!');
  }
};

export default getUserMedia;