<!-- lastmod 2020-07-29 -->
<!-- image -->

Silicon Anomaly

This anomaly list describes the known bugs, anomalies, and workarounds for the ADIS16209.

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improve silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined within this document.

## PERFORMANCE ISSUES

## Table 1. Anomalous Start-Up Behavior [er001]

## Background

The ADIS16209 uses a number of internal functions (accelerometer, A/D, D/A, I/O, clock, reference) to produce highly accurate tilt angles, with respect to gravity. Once the power supply level reaches +2.35 V, the ADIS16209 begins its power-on sequence to start each of these functions.  The ADIS16209 uses an internal processor core and firmware to facilitate this power-on sequence.

## Issue

## Workaround

## Related Issues

On a small percentage of units that have Date Code 1233 (or lower), the start-up process occasionally exhibits behaviors that preclude correct inclinometer function and supply measurements. The observable symptoms include (but are not limited to) the following:

- SUPPLY\_OUT &lt; 1 V (when VCC = +3.0 V to 3.3 V)
- STATUS[0] = 1, indicating the low-supply error condition
- Incorrect XINCL\_OUT, YINCL\_OUT measurements

Investigation of this phenomenon has found that the anomalous start-up behavior depends on external power supply configurations and the source impedance they present to the ADIS16209. When experiencing these behaviors, review the application design for opportunities to lower the source impedance of the power supply (situational improvements in power trace routing and/or bypass have eliminated this behavior). Units that have a Date Code of 1234 (or higher) use firmware revision 1.5, which modifies the power-up sequence in a manner that improves its noise immunity during startup. For units that have a Date Code of 1233 (or lower), all current inventory was updated to firmware revision 1.5, while shipments that came before this update have a firmware revision 1.4, which does not incorporate this modified power-on sequence.

Note that the firmware revision resides in an undocumented register location, at Address 0x46 and uses an 8-bit, 2-digit binary digital code (BCD) format. Reading Address 0x46 returns a 16-bit number, which represents address locations 0x46 and 0x47. Mask off the upper 8-bits to eliminate the contents from Address 0x47 and use the remaining 8-bits to determine the firmware revision on an ADIS16209. The lower nibble represents the tenths digit and the upper nibble represents the ones digit. For example, 0x14 would represent firmware revision 1.4, which indicates that the unit does not employ the updated power-on sequence. If this location contains the hexadecimal number of 0x15, then the unit uses firmware revision 1.5, which employs the modified power-on sequence.

None.

## High Accuracy, Dual-Axis Digital Inclinometer and Accelerometer

[ADIS16209](http://www.analog.com/ADIS16209)

## ADIS16209

## Table 2. Start-Up Behavior [er002]

## Background

The ADIS16209 uses a number of internal functions (accelerometer, A/D, D/A, I/O, clock, reference) to produce highly accurate tilt angles, with respect to gravity. Once the power supply level reaches +2.35 V, the ADIS16209 begins its power-on sequence to start each of these functions. The ADIS16209 uses an internal processor core and firmware to facilitate this power-on sequence.

## Issue

## Workaround

On a small percentage of units that have Date Code 1948 (or lower), the start-up process occasionally exhibits behaviors that preclude correct initialization of the internal ADC. The observable symptoms include (but are not limited to) the following.

- The SUPPLY\_OUT register returns a value ~ 10 mV lower than the supply voltage to the device.
- XINCL\_OUT, YINCL\_OUT return a value ~ 0.3 degrees off from the expected value.
- XACCL\_OUT, YACCL\_OUT return a value ~ 0.7 mG off from the expected value.

Investigation into this phenomenon has found the anomalous start-up behavior only occurs on a very small percentage of the ADIS16209 units.

For those with unused material (not solder-attached to a PCB), use units that have Date Code 1949 or higher. These units have a firmware revision of 1.6, which modifies the power-on initialization sequence in a manner that helps prevent the microcontroller from initializing incorrectly during initial power-on. Note that the firmware revision resides in an undocumented register location, at Address 0x46 and uses and 8-bit, 2-digit binary-coded decimal (BCD) format. Reading Address 0x46 returns a 16-bit number, which represents Address 0x46 and Address 0x47. Mask off the upper 8-bits to eliminate contents from Address 0x47 and use the remaining 8-bits from Address 0x46, to determine the firmware revision of the ADIS16209. The lower nibble represents the ones digit. For example, 0x15 represents firmware Revision 1.5, which indicates that the unit does not employ the updated power-on sequence. If the location contains the hexadecimal number of 0x16, then the unit uses firmware Revision 1.6, which employs the updated power-on sequence. For those observing this issue in existing systems, develop a detection routine that leverages one or more of the five register specific symptoms, depending on the specific application. Systems that start up in the same orientation can leverage historical information on xACCL\_OUT and yACCL\_OUT and can check if the values are within ±0.07 mg, because this behavior causes an angle error of ~ 0.3° on the respective xINCL\_OUT and yINCL\_OUT registers. When that is not practical, checking for negative changes in SUPPLY\_OUT that exceed 10 mV in magnitude offers another opportunity for detecting this condition. When this condition is detected, cycle the power to the device and check for the same conditions after the start-up process completes. While one power cycle is typically enough, some cases may require additional power cycles.

Related Issues None.

## ANOMALY STATUS

| ReferenceNumber   | Description                                   | Status   |   Date Code |
|-------------------|-----------------------------------------------|----------|-------------|
| er001             | Anomalous start-up behavior                   | Fixed    |        1234 |
| er002             | Start-up behavior (fixed Rev 1.6 FWor higher) | Fixed    |        1949 |

## Silicon Anomaly

## Silicon Anomaly

NOTES

<!-- image -->

ADIS16209