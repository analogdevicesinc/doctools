<!-- lastmod 2018-12-14 -->
<!-- image -->

Data Sheet

## FEATURES

2-axis light angle measurement Linear response to the angle of incident light Integrated visible light blocking optical filter No external lens required Low diode capacitance: 15.4 pF per channel at VR = 0.25 V Low reverse dark current: 786 fA per channel at VR = 0.25 V, TA = 25°C 8-lead, 2 mm × 3 mm, 0.65 mm height LFCSP AEC-Q100 qualified for automotive applications

## APPLICATIONS

Gesture for user interface control Light angle sensing Proximity sensing

## GENERAL DESCRIPTION

The ADPD2140W is an optical sensor that detects and measures the angle of incident infrared light within a wide field of view and can be used in conjunction with an infrared light emitting diode (LED) to detect user hand movements or gestures.

The ADPD2140W has an illuminated, radiant sensitive area of 0.363 mm 2 . The low diode capacitance and low dark current of the ADPD2140W allows optimal integration with the ADPD1080

## Infrared Light Angle Sensor

[ADPD2140W](https://www.analog.com/adpd2140?doc=adpd2140w.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

photometric front end. The ADPD2140W requires four photodiode channels. Therefore it is recommended to use the ADPD1080BCPZ with the ADPD2140W.

Packaged in a small, clear mold, 2 mm × 3 mm, 8-lead LFCSP , the ADPD2140W is specified over the -40°C to +105°C operating temperature range.

## [ADPD2140W](https://www.analog.com/adpd2140?doc=adpd2140w.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 4                      |
| Thermal Resistance ...................................................................... 4                 |
| Soldering Profile ........................................................................... 4             |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |

## REVISION HISTORY

12/2018-Revision 0: Initial Version

| Typical Performance Characteristics ..............................................6            |
|------------------------------------------------------------------------------------------------|
| Theory of Operation .........................................................................7 |
| Angular Response .........................................................................7    |
| Typical Connection Diagram ......................................................7             |
| Applications Information.................................................................8     |
| Gesture Recognition .....................................................................8     |
| Outline Dimensions..........................................................................9  |
| Ordering Guide .......................................................................... 10   |
| Automotive Products................................................................. 10        |

Automotive Products ................................................................. 10

## SPECIFICATIONS

All specifications listed for the sum of all four photodiode channels, unless otherwise noted.

## Table 1.

| Parameter                                              | Symbol   | Test Conditions/Comments                                               |   Min Typ |   Max | Unit   |
|--------------------------------------------------------|----------|------------------------------------------------------------------------|-----------|-------|--------|
| OPTICAL/ELECTRICAL CHARACTERISTICS                     |          |                                                                        |           |       |        |
| Infrared Light Responsivity                            | S 880    | λ = 880 nm, illuminated area (A) = 0.363mm 2 , incident angle (θ) = 0° |      0.40 |       | A/W    |
|                                                        | S 940    | λ = 940 nm, A = 0.363mm 2 , θ = 0°                                     |      0.30 |       | A/W    |
| Visible Light Responsivity                             | S 660    | λ = 660 nm, A = 0.363mm 2 , θ = 0°                                     |     0.025 |       | A/W    |
| Temperature Coefficient of Infrared Light Responsivity | K 880    | λ = 880 nm, -40°C <T A < +105°C                                        |     0.178 |       | %/K    |
| Reverse Dark Current per Channel 1                     | I D      | Reverse voltage (V R ) = 0.25 V, T A = 25°C                            |       786 |       | fA     |
| Diode Capacitance per Channel                          | C D      | V R = 0.25 V, frequency = 100 kHz, test voltage (V TEST )=50mV         |      15.4 |       | pF     |
| Rise Time (20% to 80%)                                 | t R      | V R = 0.25 V, λ = 880 nm, T A = 25°C                                   |       258 |       | ns     |
| Fall Time (20% to 80%)                                 | t F      | V R = 0.25 V, λ = 880 nm, T A = 25°C                                   |       260 |       | ns     |
| ForwardVoltage                                         | V F      | Forward current (I F ) = 2 μA                                          |     0.525 |       | V      |
| OPERATING SPECIFCATIONS                                |          |                                                                        |           |       |        |
| Bias Voltage (Any Channel)                             | V B      |                                                                        |        -1 |  +0.1 | V      |
| Operating Temperature                                  |          |                                                                        |       -40 |  +105 | °C     |

1  See the Typical Connection Diagram section for a description of the reverse voltage on the ADPD2140W.

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                           | Rating   |
|-------------------------------------|----------|
| Voltage (Any Channel)               |          |
| Forward                             | 0.1V     |
| Reverse                             | 8V       |
| Power Dissipation                   | 8mW      |
| Storage Temperature                 | 125°C    |
| Junction Temperature                | 110°C    |
| Solder Reflow Temperature (<10 sec) | 260°C    |
| Electrostatic Discharge (ESD)       |          |
| Human Body Model (HBM)              | 2000V    |
| Charged Device Model (CDM)          | 1250V    |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance 1

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| CP-8-17       |  64.70 |   8.80 | °C/W   |

1  Test condition: the thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD-51.

## SOLDERING PROFILE

Figure 2 and Table 4 provide details about the recommended soldering profile.

Figure 2. Recommended Soldering Profile

<!-- image -->

Table 4. Recommended Soldering Profile Limits 1

| Profile Feature                                     | Condition (Pb Free)   |
|-----------------------------------------------------|-----------------------|
| Average Ramp Rate (T L to T P )                     | 2°C/sec maximum       |
| Preheat                                             |                       |
| MinimumTemperature (T SMIN )                        | 150°C                 |
| MaximumTemperature (T SMAX )                        | 200°C                 |
| Time (T SMIN to T SMAX ) (t S )                     | 60 sec to 120 sec     |
| T SMAX to T L Ramp-Up Rate                          | 2°C/sec maximum       |
| Liquidus Temperature (T L )                         | 217°C                 |
| Time Maintained Above T L (t L )                    | 60 sec to 150 sec     |
| Peak Temperature (T P )                             | 260°C + (0°C/-5°C)    |
| Time Within 5°C of Actual Peak Temperature (t P )   | 20 sec to 30 sec      |
| Ramp Down Rate                                      | 3°C/sec maximum       |
| Time from 25°C to Peak Temperature (t 25°CTO PEAK ) | 8 minutes maximum     |

1  Based on JEDEC Standard J-STD-020D.1.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

16548-003

Figure 3. Pin Configuration

<!-- image -->

## Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic   | Type                     | Description                                                                                                                          |
|-----------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
|         1 | NIC        | Not internally connected | Not Internally Connected. Leave this pin floating.                                                                                   |
|         2 | NIC        | Not internally connected | Not Internally Connected. Leave this pin floating.                                                                                   |
|         3 | NIC        | Not internally connected | Not Internally Connected. Leave this pin floating.                                                                                   |
|         4 | PDC        | Analog input             | PhotodiodeCommon Cathode.                                                                                                            |
|         5 | XR         | Analog output            | Photodiode Anode for X-Axis, Right Channel.                                                                                          |
|         6 | XL         | Analog output            | Photodiode Anode for X-Axis, Left Channel.                                                                                           |
|         7 | YB         | Analog output            | Photodiode Anode for Y-Axis, Bottom Channel.                                                                                         |
|         8 | YT         | Analog output            | Photodiode Anode for Y-Axis, Top Channel.                                                                                            |
|           | EPAD       | Not applicable           | Exposed Pad. Always connect the exposed pad to PDC. Do not connect the exposed pad to ground unless PDC is also connected to ground. |

## TYPICAL PERFORMANCE CHARACTERISTICS

All performance characteristics listed for the sum of all four photodiode channels, unless otherwise noted.

<!-- image -->

Figure 4. Angular Response vs. Incident Light Angle, Off Axis Angle Held at 0°

<!-- image -->

Figure 5. Capacitance per Channel vs. Reverse Bias Voltage

Figure 6. Reverse Dark Current vs. Ambient Temperature over Reverse Voltage (VR)

<!-- image -->

Figure 7. Responsivity vs. Wavelength (Angle = 0°)

<!-- image -->

16548-008

Figure 8. Relative Radiant Sensitivity vs. Angular Displacement

<!-- image -->

Figure 9. Reverse Dark Current vs. Reverse Bias Voltage over Temperature

<!-- image -->

## THEORY OF OPERATION

## ANGULAR RESPONSE

The ADPD2140W consists of arrays of silicon p type, intrinsic, n type (PIN) photodiodes that provide a linear measurement of incident infrared light angle. There are four separate channels on the ADPD2140W, each corresponding to one photodiode.

The ADPD2140W enables a 2-axis light angle measurement, in both the x and y direction. To calculate angles in the x and y direction with respect to the sensor use the four photodiode channels (xL, xR, yT, and yB) and the following equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The resulting quantities (x and y) are ratios related to angles through a constant term. These quantities can be seen as a function of incident light angle in Figure 4. The directionality when using Equation 1 and Equation 2 is shown in Figure 10, which indicates positive angles in the x and y directions.

Figure 10. Directionality Response As Viewed from Top

<!-- image -->

The ADPD2140W is typically used in conjunction with an LED or laser emitter operating at a near infrared wavelength. The ADPD2140W provides light angle measurement without the need for an external lens. An external lens is neither required nor recommended for operation.

An integrated visible light blocking optical filter on the ADPD2140W provides built in rejection of unwanted visible ambient light signals, such as sunlight and indoor lighting. Figure 7 shows the responsivity of the ADPD2140W with its integrated optical filter.

The low diode capacitance and low dark current of the ADPD2140W allows optimal integration with the ADPD1080 photometric front end. This complete solution offers additional ambient light rejection, low power operation, and analog-to-digital conversion of the ADPD2140W analog signals.

## TYPICAL CONNECTION DIAGRAM

Figure 11 shows the ADPD2140W connections with the ADPD1080 photometric front end. With up to eight photodiode input channels, the ADPD1080 is a preferred choice for the analog front end for interfacing with the ADPD2140W . In this configuration, the ADPD2140W and ADPD1080 solution can operate using synchronous LED pulses to detect the angle of light reflected from objects or be used in ambient measurement mode to provide a measure of the incident angle of an ambient or other unsynchronized light source.

The bias voltage, VB, applied across any of the anodes (YT, YB, XL, or XR) and the cathode (PDC) is denoted as positive from an anode to the cathode. The reverse bias voltage, VR, is denoted as positive from the cathode to an anode. For reference, the optimal choice of reverse bias for typical operation with the ADPD2140W is VR = 0.25 V .

Figure 11. Typical Connection Diagram for the ADPD2140W and the ADPD1080

<!-- image -->

## APPLICATIONS INFORMATION

## GESTURE RECOGNITION

The unique angular response of the ADPD2140W coupled with the high performance ambient light rejection of the ADPD1080 enables a robust and effective implementation of gesture recognition. The following algorithm demonstrates recognition of up, down, left, right, and click hand gestures based on data from the four channels of the ADPD2140W:

1. Prior to operation of the ADPD2140W and the ADPD1080 for gesture recognition, calibrate the ADPD1080 clocks. See the ADPD1080 data sheet for more information on how to calibrate the 32 kHz and 32 MHz clocks.
2. Set the ADPD1080 mode of operation to sample mode by writing 0x2 to Register 0x10, Bits[1:0].
3. Collect the data measured by the device. See the ADPD1080 data sheet for instructions on how to read data from registers using the first in, first out (FIFO) and interrupts. Data is available directly from data registers or from the 128-byte FIFO in Register 0x60, Bits [15:0].
4. The data in the four output channels of the ADPD1080 calculates the angle of incident light. After the xL, xR, yT, and yB data are collected, calculate the angles and intensity with the following equations:

Horizontal angle: x = (xL - xR)/(xL + xR)

Vertical angle: y = (yT - yB)/(yT + yB)

Intensity: L = xL + xR + yT + yB

5. Prior to gesture event detection, offsets of the ADPD1080 must be digitally subtracted from each channel. These offsets are not due to photodiode dark current and are set by the ADPD1080 on-chip analog-to-digital converter (ADC). Register 0x18, Register 0x19, Register 0x1A, and Register 0x1B contain the ADC offsets for Timeslot A, while Register 0x1A, Register 0x1B, Register 0x1E, and Register 0x1F contain the ADC offsets for Timeslot B. The nominal value for all offsets is 0x2000. To modify these offsets, measure the 16-bit output of each channel, in ADC codes, and add it to the existing 16-bit number in the ADC offset register, SLOTx\_CHx\_OFFSET (nominally 0x2000). Then, write to the ADC offset register with this result. When the offsets are correctly subtracted, the intensity reading L is close to zero codes with no objects in the sensor field of view.
6. The start of a gesture event can be defined as occurring when intensity data crosses a preset threshold. Nominally, this threshold must be set to 1000 codes. However, the threshold can be adjusted to suit the application.
7. The end of a gesture event can then be defined as the number of samples after which the intensity drops back below the preset threshold, past a certain minimum number of samples (nominally five samples).
8. Use the start and stop points of the gesture event to determine whether the gesture was up, right, left, down, or a click. For more detail on this process, see the following pseudocode:

```
event = False intensityThreshold = 1000 (should be adjustable by the user) clickThreshold = 0.07 (should be adjustable by the user) if event = True: i += 1 if i >= 5 and L < intensityThreshold : event = False gestureStopX = x gestureStopY = y m = ( gestureStartY -gestureStopY )/( gestureStartX -gestureStopX + 1e-6) d = sqrt(( gestureStartX -gestureStopX )^2 + ( gestureStartY -gestureStopY )^2) if d < clickThreshold : gesture = 'CLICK' else: if abs( m ) > 1: if gestureStartY > gestureStopY : gesture = 'UP' else: gesture = 'DOWN' elif abs( m ) < 1: if gestureStartX > gestureStopX : gesture = 'LEFT' else: gesture = 'RIGHT' else: if L > intensityThreshold : i = 0 event = True gestureStartX = x gestureStartY = y
```

## OUTLINE DIMENSIONS

PKG-004139

<!-- image -->

08-17-2018-B

Figure 12. 8-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 3 mm Body and 0.65 mm Package Height

(CP-8-17)

Dimensions shown in millimeters

Table 6. Marking Code Format, Line 1 (See Figure 13)

| Description   | Position       | FontType                     |   Height (mm) |   Width (mm) |   Space (mm) |   Maximum Width (mm) | Maximum Characters   |
|---------------|----------------|------------------------------|---------------|--------------|--------------|----------------------|----------------------|
| Binary        | Not applicable | Bar font (Symbol 1/Symbol 2) |         0.075 |         0.05 |         0.08 |                 1.61 | 13 (6 + 7)           |

16548-116

Figure 13. ADPD2140W Marking Codes As Viewed from Bottom

<!-- image -->

## [ADPD2140W](https://www.analog.com/adpd2140?doc=adpd2140w.pdf)

## ORDERING GUIDE

| Model 1, 2        | Temperature Range   | Package Description                          | Package Option   |
|-------------------|---------------------|----------------------------------------------|------------------|
| ADPD2140WBCPZN-R7 | -40°C to +105°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | CP-8-17          |
| ADPD2140WBCPZN-RL | -40°C to +105°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | CP-8-17          |
| EVAL-ADPD2140Z    |                     | ADPD2140W Evaluation Board                   |                  |

## AUTOMOTIVE PRODUCTS

The ADPD2140W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

<!-- image -->