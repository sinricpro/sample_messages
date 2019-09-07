# sinricpro_sample_messages

This directory contains sample Sinric Pro messages in JSON. They can be used to test your project to see if you are receiving or responding to the server correctly.
 
What is an *action*?

 Act of doing something using voice, app or website will generate an action message in the system. Eg: Alexa, turn on the tv will generate setPowerState action.
 
What is an *event* ?

 Changing the device state physically should raise an event to let the server know about the changes the user made.  Eg: pushing a button to turn on the device should send "setPowerState" event to let the server know.
 
Unix epoch time used in all the messages are in seconds.
 
Any message with the "createdAt" timestamp older than 1 minute from the current time will be discarded to avoid network replay attacks.
 
Message's payload must signed using Hmac sha256 since protocol version 2. Here is an example code how to generate the signature HMAC using nodejs.
 
 ```
function getSignature(message, appsecert) {
   return crypto.createHmac('sha256', appsecert).update(message).digest('base64');
}
```

complete code is available here
https://github.com/sinricpro/sample_messages/blob/master/signature-hmac-example.js

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
       
5. **Temperature Sensor** (Note: Default is -1)
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

7. **Window AC Unit** (Note: Alexa supports only US-English, Default tempreature is -1))
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
       
9. **Motion Sensor** (Note: Default state is "notDetected")
     - *actions*
       - setPowerState
     - *events* :
       - setPowerState
       - motion
    
10. **Contact Sensor**  (Note: Default state is "closed")
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

13. **Smart Doorlock** (Note: Default state is "UNLOCKED")
     - *actions*
       - setLockState
     - *events* :
       - setLockState 
