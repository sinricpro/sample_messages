# sample_messages

This directory contains sample Sinric Pro messages in JSON. They can be used to test your project to see if you are receiving or responding to the server correctly.

They are grouped by actions. 

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

6. **Window AC Unit** (Note: Alexa supports only US-English)
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
    
7. **Fan** (Note: from 1 to 3)
     - *actions*
       - setPowerState
       - setRangeValue
     - *events* :
       - setPowerState
       - setRangeValue
       
8. **Motion Sensor**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - motionDetected
    
9. **Contact Sensor**
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - setContactState 
       
