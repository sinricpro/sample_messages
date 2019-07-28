# sample_messages

This directory contains sample Sinric Pro messages in JSON. They can be used to test your project to see if you are receiving or responding to the server correctly.

They are grouped by actions. 

What is an action?
  Act of doing something using voice, app or the website

What is an event ?
  Interacting with a device physically would raise an evet.  eg: pushing a button to turn on/off a device will raise an setPowerState event to let
  the server know.

Following devices are supported.

1. **Smart Switch**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       
2. **Smart Light Bulb**
     - *actions*
       - setPowerState
       - adjustBrightness
       - setBrightness
       - setColor
       - decreaseColorTemperature
       - increaseColorTemperature
       - setColorTemperature
       - setPowerLevel
       - adjustPowerLevel 
     - *events* :
       - setPowerState
       - setPowerLevel 
       - setColor
       - setColorTemperature

3. **Smart Switch with Dimmer**
     - *actions*
       - setPowerState
       - setPowerLevel
       - adjustPowerLevel
     - *events* :
       - setPowerState
       - setPowerLevel

4. **Doorbell**
     - *actions*
       - setPowerState
     - *events* :
       - DoorbellPress
       - setPowerState
       
5. **Temperature Sensor**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - currentTemperature

6. **Thermostat**
     - *actions*
       - setPowerState
       - targetTemperature
       - setThermostatMode       
     - *events* :
       - setPowerState
       - targetTemperature
       - setThermostatMode
       - currentTemperature

7. **Window AC Unit** (Note: Alexa supports only US-English)
     - *actions*
       - setPowerState
       - targetTemperature
       - setThermostatMode
       - setRangeValue
       - adjustRangeValue
     - *events* :
       - setPowerState
       - targetTemperature
       - setThermostatMode
       - setRangeValue
       - currentTemperature
    
8. **Fan** (Note: from 1 to 3)
     - *actions*
       - setPowerState
       - setRangeValue
     - *events* :
       - setPowerState
       - setRangeValue
       
9. **Motion Sensor**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - motionDetected
    
10. **Contact Sensor**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - setContactState 
       
11. **TV**
     - *actions*
       - setPowerState
       - setVolume
       - adjustVolume
       - setMute
       - mediaControl
       - selectInput
       - changeChannel
       - skipChannels
     - *events* :
       - setPowerState
       - setVolume 
       - setMute
       - mediaControl
       - selectInput
       - changeChannel
       - skipChannels

12. **Smart Speaker**
     - *actions*
       - setPowerState
       - setVolume
       - adjustVolume
       - setMute
       - mediaControl
       - setBands
       - adjustBands
       - resetBands
       - setMode
     - *events* :
       - setPowerState
       - setVolume
       - setMute
       - mediaControl
       - setBands
       - resetBands
       - setMode

13. **Contact Sensor**
     - *actions*
       - setLockState
     - *events* :
       - setLockState 