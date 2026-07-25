<!-- lastmod 2022-04-22 -->
<!-- image -->

## Micropower, 3-Axis, ±2 g/±4 g/±8 g, Digital Output MEMS Accelerometer

## FEATURES

- Ultralow power
- Power can be derived from coin cell battery
- 1.8 µA at 100 Hz ODR, 2.0 V supply
- 3.0 µA at 400 Hz ODR, 2.0 V supply
- 270 nA, motion activated, wake-up mode
- 10 nA standby supply current, 2.0 V supply
- High resolution, sensitivity at X OUT , Y OUT , Z OUT : 1 m g /LSB
- Built in features for system level power savings
- Adjustable threshold sleep/wake modes for motion activation
- Autonomous interrupt processing, without need for microcontroller intervention, to allow the rest of the system to be turned off completely
- Deep embedded FIFO minimizes host processor load
- Awake state output enables implementation of standalone, motion activated switch
- Low noise down to 175 µ g /√Hz
- Wide operating voltage range: 1.6 V to 3.5 V
- Operates off 1.6 V to 3.3 V batteries
- Special, high reliability manufacturing flow
- Acceleration sample synchronization via external trigger
- On-chip temperature sensor
- SPI digital interface
- Measurement ranges selectable via SPI command
- Small and thin 3 mm × 3.25 mm × 1.06 mm package

## APPLICATIONS

- Medical implantable
- Clinical and home healthcare devices
- Hearing aids
- Motion enabled power save switches and metering devices
- Wireless sensors

## GENERAL DESCRIPTION

The ADXL362-MI is an ultralow power, 3-axis MEMS accelerometer that consumes less than 2 µA at a 100 Hz output data rate (ODR) and 270 nA when in motion triggered wake-up mode. Unlike accelerometers that use power duty cycling to achieve low power consumption, the ADXL362-MI does not alias input signals by undersampling; it samples the full bandwidth of the sensor at all data rates.

The ADXL362-MI always provides 12-bit output resolution; 8 -bit formatted data is also provided for more efficient single-byte transfers when a lower resolution is sufficient. Measurement ranges of ±2 g , ±4 g , and ±8 g are available, with a resolution of 1 m g /LSB on the ±2 g range. For applications where a noise level lower than the normal 550 µ g /√Hz of the ADXL362-MI is desired, either of two lower noise modes (down to 175 µ g /√Hz typical) can be selected at minimal increase in supply current.

In addition to its ultralow power consumption, the ADXL362-MI has many features to enable true system level power reduction. It includes a deep multimode output, first in, first out (FIFO), a built in micropower temperature sensor, and several activity detection modes including adjustable threshold sleep and wake-up operation that can run as low as 270 nA at a 6 Hz (approximate) measurement rate. A pin output is provided to directly control an external switch when activity is detected, if desired. In addition, the ADXL362-MI has provisions for external control of sampling time and/or an external clock.

The ADXL362-MI operates on a wide 1.6 V to 3.5 V supply range, and can interface, if necessary, to a host operating on a separate, lower supply voltage. The ADXL362-MI is processed through a special, high reliability manufacturing flow involving additional process, test, and quality controls to meet a higher quality and reliability standard that gives more robustness to Class II medical devices and Class III medical devices. Further details are available with Analog Devices, Inc., consultation. The ADXL362-MI is available in a 3 mm × 3.25 mm × 1.06 mm LGA package.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

For more information on the ADXL362-MI, contact Analog Devices, Inc., at healthcare-support@analog.com.

Rev. SpD

[DOCUMENT FEEDBACK](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADXL362-MI.pdf&product=ADXL362-MI&rev=SpD)

## NOTES

<!-- image -->