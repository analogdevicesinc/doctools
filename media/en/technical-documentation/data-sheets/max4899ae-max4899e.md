<!-- lastmod 2022-08-05 -->
<!-- image -->

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## General Description

The MAX4899E/MAX4899AE analog multiplexers combine the low on-capacitance (CON) and low on-resistance (RON) necessary for high-performance switching applications. These devices are designed for USB 2.0 high-speed applications at 480Mbps. The MAX4899E/ MAX4899AE also handle all the requirements for USB low- and full-speed signaling.

The MAX4899E is a dual 3:1 multiplexer whereas the MAX4899AE is a dual 4:1 multiplexer. The MAX4899E/ MAX4899AE feature two digital inputs, C0 and C1, to control  the  analog signal path. Typical applications include switching a USB connector between USB and other operations such as serial communications, audio, and video.

An enable input ( EN ) is provided to disable all channels and place the device into a high-impedance (off) state, as well as reducing power consumption.

The MAX4899E/MAX4899AE operate from a 2.7V to 3.6V power-supply voltage and are protected against +5.5V shorts to COMA- and COMA+. In addition, COMA+ and COMA- are normally connected to outside circuitry and feature ±15kV ESD protection. The MAX4899E/MAX4899AE are available in a 3mm x 3mm, 16-pin TQFN package and operate over the -40°C to +85°C temperature range.

## Applications

## Features

- ♦ Single 2.7V to 3.6V Power-Supply Voltage
- ♦ Low 4 Ω (typ) On-Resistance (RON)
- ♦ -3dB Bandwidth: 425MHz
- ♦ Fault Tolerant to Meet Full USB 2.0 Specification
- ♦ COM\_ Protected to ±15kV ESD Protection per Human Body Model (MIL-STD-883; Method 3015)
- ♦ Low Operating Current (200µA), Ultra-Low Quiescent Current (3.0µA max) in Standby Mode
- ♦ Low Threshold Eliminates the Need for Translators in 1.8V Low Voltage Systems
- ♦ Tiny 16-Pin, 3mm x 3mm, Lead-Free TQFN Package

## Eye Diagram

<!-- image -->

## Ordering Information/Selector Guide

Cell Phones

Digital Still Cameras

PDAs

Digital Video Cameras

MPEG-4 Players

Portable GPS

Combination Products

KVM

Pin Configurations appear at end of data sheet.

| PART           | PIN-PACKAGE   | MUX CONFIGURATION   | TOP MARK   | PKG CODE   |
|----------------|---------------|---------------------|------------|------------|
| MAX4899E ETE+  | 16 TQFN-EP*   | DUAL 3:1            | AEY        | T1633-4    |
| MAX4899AE ETE+ | 16 TQFN-EP*   | DUAL 4:1            | AEZ        | T1633-4    |

Note: All devices are specified over the -40°C to +85°C operating temperature range.

+ Denotes lead-free package.

* EP = Exposed paddle.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## ABSOLUTE MAXIMUM RATINGS

| (All Voltages Referenced to GND.)                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------|
| QP , EN , C 0 , C 1 , (Note 1) ..........................................-0.3V to +4V                                 |
| COMA+ , COMA _, USB0+, USB0-, USB1+, USB1-, USB2+, USB2-, USB3+, USB3- ......................................-0.3V to |
| +5.5V                                                                                                                 |
| Continuous Current (COM A _ to USB_)...........................±120mA Current (COM A _ to USB_)                       |
| Peak (pulsed at 1ms, 10% duty cycle).................................±240mA                                           |

| Continuous Power Dissipation (T A = +70°C) 16-Pin TQFN (derate 20.8mW/°C above +70°C) ........1667mW   |
|--------------------------------------------------------------------------------------------------------|
| Operating Temperature Range ...........................-40°C to +85°C                                  |
| Storage Temperature Range.............................-65°C to +150°C                                  |
| Junction Temperature......................................................+150°C                       |
| Lead Temperature (soldering, 10s) .................................+300°C                              |

Note 1: Signals exceeding GND are clamped by internal diodes. Limit forward-diode current to maximum current rating.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(V+ = +2.7V to +3.6V, TA = -40°C to +85°C, QP = low, EN = low, unless otherwise noted. Typical values are at V+ = +3.3V and TA = +25°C.) (Note 2)

| PARAMETER                            | SYMBOL      | CONDITIONS                                                    | CONDITIONS                                           | MIN   | TYP   | MAX   | UNITS   |
|--------------------------------------|-------------|---------------------------------------------------------------|------------------------------------------------------|-------|-------|-------|---------|
| ANALOG SWITCH (COM A _, USB__)       |             |                                                               |                                                      |       |       |       |         |
| On-Resistance                        | R           | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = low      | T A = +25°C                                          |       | 4     | 5     | Ω       |
| On-Resistance                        | R           | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = low      | T A = -40°C to +85°C                                 |       |       | 6     | Ω       |
| On-Resistance                        | R           | V+ = 2.7V, I COMA_ = -10mA, V COM_ = 0V, 1.5V, 2.7V, QP = low | T A = +25°C                                          |       | 4     | 7     | Ω       |
| On-Resistance                        | R           | V+ = 2.7V, I COMA_ = -10mA, V COM_ = 0V, 1.5V, 2.7V, QP = low | T A = -40°C to +85°C                                 |       |       | 8     | Ω       |
| On-Resistance                        | ON          | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = high     | T A = +25°C                                          |       | 8     | 17    | Ω       |
| On-Resistance                        | ON          | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = high     | T A = -40°C to +85°C                                 |       |       | 18    | Ω       |
| On-Resistance                        |             | V+ = 3.0V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = high     | T A = +25°C                                          |       | 4     | 12    | Ω       |
| On-Resistance                        |             | V+ = 3.0V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, QP = high     | T A = -40°C to +85°C                                 |       |       | 13    | Ω       |
| On-Resistance Match Between Channels | ∆ R ON      | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, 2.7V          | T A = +25°C                                          |       | 0.5   | 0.8   | Ω       |
| On-Resistance Match Between Channels | ∆ R ON      | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, 2.7V          | T A = -40°C to +85°C                                 |       |       | 1.0   | Ω       |
| On-Resistance Flatness               | R FLAT (ON) | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, 2.7V          | V+ = 2.7V, I COMA_ = -10mA, V COMA_ = 0V, 1.5V, 2.7V |       | 0.5   | 1.1   | Ω       |
| Off-Leakage Current                  | I L(OFF)    | V+ = 3.6V, V COMA_ = V USB__ = 0.3V, 3.3V                     | V+ = 3.6V, V COMA_ = V USB__ = 0.3V, 3.3V            | -1    |       | +1    | µA      |
| On-Leakage Current                   | I L(ON)     | V+ = 3.6V, V COMA_ = V USB__ = 0.3V, 3.3V                     | V+ = 3.6V, V COMA_ = V USB__ = 0.3V, 3.3V            | -1    |       | +1    | µA      |
| Quiescent Supply Current             | I+          | V+ = 3.6V, C0 = C1 = 0 or V+                                  | QP = low                                             |       | 250   | 600   | µA      |
| Quiescent Supply Current             | I+          | V+ = 3.6V, C0 = C1 = 0 or V+                                  | QP = high                                            |       |       | 3     | µA      |
| Fault-Protection Trip Threshold      | V FP        | V+ = 3.3V                                                     | V+ = 3.3V                                            | 3.6   | 3.9   | 4.2   | V       |
| ESD PROTECTION                       |             |                                                               |                                                      |       |       |       |         |
| COMA+, COMA-                         |             | Human Body Model                                              | Human Body Model                                     | ±15   | ±15   | ±15   | kV      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## ELECTRICAL CHARACTERISTICS (continued)

(V+ = +2.7V to +3.6V, TA = -40°C to +85°C, QP = low, EN = low, unless otherwise noted. Typical values are at V+ = +3.3V and TA = +25°C.) (Note 2)

| PARAMETER                            | SYMBOL                             | CONDITIONS                                                             | MIN                                | TYP                                | MAX                                | UNITS                              |
|--------------------------------------|------------------------------------|------------------------------------------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| SWITCH AC PERFORMANCE (Note 3)       | SWITCH AC PERFORMANCE (Note 3)     | SWITCH AC PERFORMANCE (Note 3)                                         | SWITCH AC PERFORMANCE (Note 3)     | SWITCH AC PERFORMANCE (Note 3)     | SWITCH AC PERFORMANCE (Note 3)     | SWITCH AC PERFORMANCE (Note 3)     |
| On-Loss                              | ONLOSS                             | f = 10MHz, 0 < V IN < 1V, Figure 1                                     |                                    | 0.5                                |                                    | dB                                 |
| Crosstalk                            | V CT1 , V DCT1                     | f = 50MHz, Figure 1                                                    |                                    | -50                                |                                    | dB                                 |
| Off-Isolation                        | V ISO                              | f = 50MHz, Figure 1                                                    |                                    | -45                                |                                    | dB                                 |
| Charge-Pump Noise                    | V QP                               | COMA_, USB_, R L = R S = 50 Ω (Note 4)                                 |                                    | 100                                |                                    | µV                                 |
| Bandwidth -3dB                       | BW                                 | R S = R L = unbalanced 50 Ω                                            |                                    | 425                                |                                    | MHz                                |
| Off-Capacitance                      | COFF                               | f = 1MHz, COMA_, USB_, Figure 2                                        |                                    | 10.5                               |                                    | pF                                 |
| On-Capacitance                       | CON                                | f = 1MHz, COMA_, USB_, Figure 2                                        |                                    | 15                                 |                                    | pF                                 |
| Propagation Delay                    | t PD                               | R L = R S = 50 Ω , Figure 3                                            |                                    | 200                                |                                    | ps                                 |
| Output Skew Same Switch              | t SK                               | Skew between opposite transitions in same switch, Figure 3             |                                    | 100                                |                                    | ps                                 |
| Fault-Protection Response Time       | t FP                               | V COMA_ = 0V to 5V to V USB__ = 2.5V, R L = 50 Ω , CL = 10pF, Figure 4 |                                    | 1                                  |                                    | µs                                 |
| Fault-Protection Recovery Time       | t FPR                              | V COMA_ = 5V to 3V to V USB__ = 1.5V, R L = 50 Ω , CL = 10pF, Figure 4 |                                    | 1                                  |                                    | µs                                 |
| Charge Injection                     | Q                                  | V GEN = 0, CL = 1000pF, Figure 5                                       |                                    | 25                                 |                                    | pC                                 |
| Enable Turn-On Time                  | t ON                               | V USB0+ = V+, R L = 50 Ω , C L = 10pF, Figure 6                        |                                    | 2.8                                |                                    | µs                                 |
| Enable Turn-Off Time                 | t OFF                              | V USB0+ = V+, R L = 50 Ω , C L = 10pF, Figure 6                        |                                    | 3                                  |                                    | ns                                 |
| Address Transition Time              | t TRANS                            | V USB0+ = V+, R L = 50 Ω , C L = 10pF, Figure 7                        |                                    | 1.2                                |                                    | µs                                 |
| Total Harmonic Distortion Plus Noise | THD+N                              | f = 20Hz to 20kHz, V COMA_ = 1V P-P , R L = 600 Ω                      |                                    | 0.02                               |                                    | %                                  |
| SWITCH LOGIC ( QP , EN , C0 , C1 )   | SWITCH LOGIC ( QP , EN , C0 , C1 ) | SWITCH LOGIC ( QP , EN , C0 , C1 )                                     | SWITCH LOGIC ( QP , EN , C0 , C1 ) | SWITCH LOGIC ( QP , EN , C0 , C1 ) | SWITCH LOGIC ( QP , EN , C0 , C1 ) | SWITCH LOGIC ( QP , EN , C0 , C1 ) |
| Logic-Input Voltage Low              | V IL                               |                                                                        |                                    |                                    | 0.4                                | V                                  |
| Logic-Input Voltage High             | V IH                               |                                                                        | 1.4                                |                                    |                                    | V                                  |
| Input Logic Hysteresis               | V HYST                             |                                                                        |                                    | 100                                |                                    | mV                                 |
| Input Leakage Current                | I LEAK                             | V+ = 3.6V, C0 = 0 or V+, C1 = 0 or V+                                  | -1                                 |                                    | 1                                  | µA                                 |

Note 4: Charge-pump noise is specified as a peak-to-peak value.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX4899E/MAX4899AE

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Typical Operating Characteristics

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Pin Description

| PIN      | PIN       | NAME   | FUNCTION                                                                                                                                                                                           |
|----------|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX4899E | MAX4899AE | NAME   | FUNCTION                                                                                                                                                                                           |
| 1        | 1         | GND    | Ground                                                                                                                                                                                             |
| 2        | 2         | COMA+  | Analog Switch Common D+ Terminal                                                                                                                                                                   |
| 3        | 3         | COMA-  | Analog Switch Common D- Terminal                                                                                                                                                                   |
| 4        | 4         | V+     | Positive Supply-Voltage Input. Connect V+ to a 2.7V to 3.6V supply voltage. Bypass V+ to GND with a 0.1µF capacitor placed as close as possible to the device.                                     |
| 5        | 5         | C1     | Digital Control Input 1. C1 and C0 control the analog signal path as shown in the Functional Diagrams section .                                                                                    |
| 6        | 6         | C0     | Digital Control Input 0. C1 and C0 control the analog signal path as shown in the Functional Diagrams section .                                                                                    |
| 7, 8     | -         | N.C.   | No Connection. Not internally connected.                                                                                                                                                           |
| -        | 7         | USB3-  | Analog Switch 3 D- Terminal                                                                                                                                                                        |
| -        | 8         | USB3+  | Analog Switch 3 D+ Terminal                                                                                                                                                                        |
| 9        | 9         | USB2-  | Analog Switch 2 D- Terminal                                                                                                                                                                        |
| 10       | 10        | USB2+  | Analog Switch 2 D+ Terminal                                                                                                                                                                        |
| 11       | 11        | USB1+  | Analog Switch 1 D+ Terminal                                                                                                                                                                        |
| 12       | 12        | USB1-  | Analog Switch 1 D- Terminal                                                                                                                                                                        |
| 13       | 13        | USB0+  | Analog Switch 0 D+ Terminal                                                                                                                                                                        |
| 14       | 14        | USB0-  | Analog Switch 0 D- Terminal                                                                                                                                                                        |
| 15       | 15        | EN     | Active-Low Enable Input. For normal operation, drive EN low. Drive EN high to place all channels in a high-impedance state. The internal charge pump is turned off when EN is a logic-high.        |
| 16       | 16        | QP     | Active-Low Charge-Pump Enable Input. Drive QP low for normal operation. Drive QP high to disable the charge pump with the switches still active at a reduced analog signal range and higher R ON . |
| -        | -         | EP     | Exposed Paddle. Connect EP to GND.                                                                                                                                                                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Test Circuits/Timing Diagrams

Figure 1. Off-Isolation, On-Loss, and Crosstalk

<!-- image -->

Figure 2. Channel Off-/On-Capacitance

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Test Circuits/Timing Diagrams (continued)

<!-- image -->

Figure 3. Propagation Delay and Output Skew

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Test Circuits/Timing Diagrams (continued)

Figure 4. Fault-Protection Response/Recovery Time

<!-- image -->

Figure 5. Charge Injection

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Test Circuits/Timing Diagrams (continued)

<!-- image -->

Figure 6. Enable Switching Times

<!-- image -->

Figure 7. Address Transition Time

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Detailed Description

The MAX4899E/MAX4899AE analog multiplexers combine the low on-capacitance (CON) and low on-resistance (RON) necessary for high-performance switching applications. These devices are designed for USB 2.0 high-speed applications at 480Mbps. The MAX4899E/ MAX4899AE also handle all the requirements for USB low- and full-speed signaling. In the case of USB low/ full speed, these devices can function normally even if the supply voltage is 2.7V, even though the USB signal may be higher than the supply voltage.

The MAX4899E is a dual 3:1 multiplexer, whereas the MAX4899AE is a dual 4:1 multiplexer. The MAX4899E/ MAX4899AE feature two digital inputs, C0 and C1, to control  the  analog signal path. Typical applications include switching a USB connector between USB and other operations such as serial communications, audio, and video.

An enable input ( EN ) is provided to disable all channels and place the device into a high-impedance (off) state, as well as shutting off the charge pump for minimum power consumption. The MAX4899E/MAX4899AE feature  an  additional  charge-pump enable input ( QP )  to disable the charge pump. The switches remain active at a lower analog signal range and higher RON.

The MAX4899E/MAX4899AE operate from a 2.7V to 3.6V power-supply voltage and are current-limit protected against +5.5V shorts to COMA- and COMA+.

## Digital Control Inputs (C0, C1)

The MAX4899E/MAX4899AE provide two digital control i nputs (C0, C1) to select the analog signal path between the COMA\_ and USB\_\_ channels. The truth tables for the MAX4899E/MAX4899AE are shown in the Functional Diagrams. Since the MAX4899E only has three USB\_\_ channels, the code C1:C0 = 1:1 can be used to place all channels into a high-impedance state. This is particularly useful for eliminating the extra control  line  to  the EN input that is  normally  used for disabling all channels. Driving C0 and C1 rail-to-rail minimizes power consumption.

## Enable Input ( EN )

The MAX4899E/MAX4899AE feature an enable input ( EN )  that  when driven high places all channels into a high-impedance state, as an all-off feature. The internal charge pump is also disabled when EN is  high,  thus minimizing the quiescent supply current. For normal operation, drive EN low.

## Charge-Pump Enable Input ( QP )

The charge-pump input ( QP ) disables and enables the internal  charge pump. Drive QP high to disable the charge pump and reduce the quiescent supply current.

With the charge pump disabled, the MAX4899E/ MAX4899AE still function normally; however, the analog signal range is reduced and the switch on-resistance (RON) is increased. The analog signal range with the charge pump disabled is 0V to 1.5V. For normal operation, drive QP low.

## Analog Signal Levels

Signals applied to COMA+ are routed to the USB\_+ terminals, and signals applied to COMA- are routed to the USB\_- terminals. These multiplexers are bidirectional, allowing COMA\_ and USB\_ to be configured as either inputs or outputs. The D+ and D- notation in the Pin Description table is arbitrary and can be interchanged. For example, USB D+ signals can be applied to COMAand are routed to the USB\_- terminals. Additionally, these multiplexers can be used for non-USB signals. COMA+ and COMA- are normally connected to outside circuitry and are ±15kV ESD protected.

The MAX4899E is a dual 3:1 multiplexer, allowing COMA+ to be routed to one of three USB\_+ channels, and COMA- to be routed to one of three USB\_- channels. The MAX4899AE is a dual 4:1 multiplexer, allowing COMA+ to be routed to one of four USB\_+ channels, and COMA- to be routed to one of four USB\_- channels.

## Overvoltage Fault Protection

The MAX4899E/MAX4899AE feature +5.5V fault protection to COMA+ and COMA-. When a fault occurs between 4.5V to 5.5V, the switch automatically goes into  a  current-limiting  mode  that  limits  current  to  less than 2mA. Fault protection prevents these switches and downstream devices from being damaged due to shorts to the USB bus voltage rail.

## Applications Information

## USB Switching

The MAX4899E/MAX4899AE analog multiplexers are fully compliant with the USB 2.0 specification. The low on-resistance and low on-capacitance of these multiplexers make them ideal for high-performance switching applications. The MAX4899E/MAX4899AE are ideal for  routing  USB data lines and for applications that require switching between different data types (see Figure 8).

## Board Layout

High-speed switches require proper layout and design procedures for optimum performance. Keep designcontrolled impedance PC board traces as short as possible.  Ensure that bypass capacitors are placed as close to the device as possible and use large ground planes where possible.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

<!-- image -->

Figure 8. MAX4899AE Multiplexing Four Data Types

<!-- image -->

Figure 9a. Human Body ESD Test Model

<!-- image -->

## ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. The COMA+ and COMA- lines have extra protection against static electricity. Maxim's engineers have developed state-of-the-art structures to protect these pins against ESD of ±15kV without damage. The ESD structures withstand high ESD in all states: normal operation, tri-state output mode, and powered down. After an ESD event, Maxim's E-versions keep working without latchup, whereas competing products can latch and must be powered down to remove latch-up.

## Human Body Model

The MAX4899E/MAX4899AE COMA+ and COMA- pins are characterized for ±15kV ESD protection using the Human Body Model (MIL-STD-883, Method 3015). Figure 9a shows the Human Body Model and Figure 9b shows the current waveform it generates when discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest, which is then discharged into the device through a 1.5k Ω resistor.

Figure 9b. Human Body Model Current Waveform

<!-- image -->

Chip Information

PROCESS: BiCMOS

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Functional Diagrams

| MAX4899AE   | MAX4899AE   | MAX4899AE   | MAX4899AE   | MAX4899AE                   | MAX4899AE        |
|-------------|-------------|-------------|-------------|-----------------------------|------------------|
| QP          | EN          | C1          | C0          | FUNCTION                    | COMMENT          |
| 0           | 0           | 0           | 0           | COMA+ → USB0+ COMA- → USB0- | NORMAL OPERATION |
| 0           | 0           | 0           | 1           | COMA+ → USB1+ COMA- → USB1- | NORMAL OPERATION |
| 0           | 0           | 1           | 0           | COMA+ → USB2+ COMA- → USB2- | NORMAL OPERATION |
| 0           | 0           | 1           | 1           | COMA+ → USB3+ COMA- → USB3- | NORMAL OPERATION |
| 0           | 1           | X           | X           | HIGH-Z                      | ALL OFF          |
| 1           | 1           | X           | X           | HIGH-Z                      | ALL OFF          |
| 1           | 0           | 0           | 0           | COMA+ → USB0+ COMA- → USB0- | LARGER RON       |
| 1           | 0           | 0           | 1           | COMA+ → USB1+ COMA- → USB1- | LARGER RON       |
| 1           | 0           | 1           | 0           | COMA+ → USB2+ COMA- → USB2- | LARGER RON       |
| 1           | 0           | 1           | 1           | COMA+ → USB3+ COMA- → USB3- | LARGER RON       |

<!-- image -->

| MAX4899E   | MAX4899E   | MAX4899E   | MAX4899E   | MAX4899E                    | MAX4899E         |
|------------|------------|------------|------------|-----------------------------|------------------|
| QP         | EN         | C1         | C0         | FUNCTION                    | COMMENT          |
| 0          | 0          | 0          | 0          | COMA+ → USB0+ COMA- → USB0- | NORMAL OPERATION |
| 0          | 0          | 0          | 1          | COMA+ → USB1+ COMA- → USB1- | NORMAL OPERATION |
| 0          | 0          | 1          | 0          | COMA+ → USB2+ COMA- → USB2- | NORMAL OPERATION |
| 0          | 0          | 1          | 1          | HIGH-Z                      | ALL OFF          |
| 0          | 1          | X          | X          | HIGH-Z                      | ALL OFF          |
| 1          | 1          | X          | X          | HIGH-Z                      | ALL OFF          |
| 1          | 0          | 0          | 0          | COMA+ → USB0+ COMA- → USB0- | LARGER R ON      |
| 1          | 0          | 0          | 1          | COMA+ → USB1+ COMA- → USB1- | LARGER R ON      |
| 1          | 0          | 1          | 0          | COMA+ → USB2+ COMA- → USB2- | LARGER R ON      |
| 1          | 0          | 1          | 1          | HIGH-Z                      | ALL OFF          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Pin Configurations

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 High-Speed, Fault-Tolerant 3:1, 4:1 Multiplexers

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

12x16L QFN THIN.EPS

<!-- image -->

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet