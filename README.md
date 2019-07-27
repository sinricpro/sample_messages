# sample_messages

This directory contains sample Sinric Pro messages in JSON. They can be used to test your project to see if you are receiving or responding to the server correctly.

They are grouped by actions. 

Following devices are supported.

**Smart Light Bulb**

*actions*:
 setPowerState
 adjustBrightness
 setBrightness
 setColor
 decreaseColorTemperature
 increaseColorTemperature
 setColorTemperature
 setPowerLevel
 adjustPowerLevel
 
*events* :
 setPowerState
 setPowerLevel 
 setColor
 setColorTemperature

**Smart Switch**

*actions*:
 setPowerState
 
*events* :
 setPowerState

**Smart Switch with Dimmer**

*actions*
    setPowerState
    setPowerLevel
    adjustPowerLevel
    
*events*
    setPowerState
    setPowerLevel

**Doorbell**

*actions*
    setPowerState
    
*events* 
    DoorbellPress
    setPowerState

**Temperature Sensor**

*actions*
    setPowerState
    setTemperature
    
*events*
    setPowerState
    setTemperature
    
**Air Conditioning Unit**

*actions*
    setPowerState
    setTemperature
    setThermostatMode
    setRangeValue
    
*events*
    setPowerState
    setTemperature
    setThermostatMode
    setRangeValue

**Fan**

*actions*
    setPowerState
    setRangeValue
    
*events*
    setPowerState
    setRangeValue

**Motion Sensor**

*actions*
    setPowerState
        
*events*
    setPowerState
    motionDetected
    
**Contact Sensor**

*actions*
    setPowerState
        
*events*
    setPowerState
    setContactState


