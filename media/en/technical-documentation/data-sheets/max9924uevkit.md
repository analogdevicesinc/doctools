<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9924U evaluation kit (EV kit) is a fully assembled and tested PCB that contains a differential variable reluctance (VR) sensor interface circuit using a MAX9924U IC in a 10-pin µMAX ® package. The singlechannel interface circuit also features a differential amplifier for evaluating differential or single-ended VR sensor (magnetic pickup sensor) signal, and provides a fixed gain of 1V/V. Input power to the EV kit circuit can be  supplied  by  a  4.5V  to  5.5V  DC  source.  The MAX9924U IC temperature range is -40°C to +125°C.

The MAX9924U EV kit circuit can be configured to demonstrate the MAX9924U IC's operation with internal adaptive peak threshold and zero-crossing detection modes. It can also interface to a microcontroller PWM signal for evaluating external thresholds. Additionally, a configurable on-board triangle-wave generator using a MAX9000 IC provides a 5Hz, 55Hz, 2.5kHz, or 24kHz triangle-wave signal if no external VR signal is available for evaluation.

| DESIGNATION        |   QTY | DESCRIPTION                                                         |
|--------------------|-------|---------------------------------------------------------------------|
| C1                 |     1 | 4.7µF ±20%, 25V X7R ceramic capacitor (1206) Murata GCM31CR71E475M  |
| C2, C7, C8         |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GCM188R71C104K |
| C3, C9             |     2 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GCM219R71C105K   |
| C4, C10            |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GCM21BR71H104K |
| C5                 |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0805) Murata GCM216R71H102K |
| C6                 |     1 | 220pF ±5%, 50V C0G ceramic capacitor (0603) Murata GCM1885C1H221J   |
| JU1, JU3, JU7-JU10 |     6 | 2-pin headers                                                       |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Demonstrates MAX9924U MODE A1, A2, B, and C Operation
- ♦ Evaluates Differential and Single-Ended Sensors (VR or Magnetic Pickup)
- ♦ Demonstrates Zero-Crossing and Adaptive Threshold Mechanism
- ♦ Includes Lowpass Sensor Input Filter
- ♦ On-Board 5Hz/24kHz Triangle-Wave Generator
- ♦ Evaluates MAX9925 (IC Replacement Required)
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9924UEVKIT+ | EV Kit |

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                            |
|--------------------------|-------|----------------------------------------------------------------------------------------|
| JU2, JU5                 |     2 | 3-pin headers                                                                          |
| JU4                      |     1 | 4-pin header                                                                           |
| JU6                      |     0 | Not installed, 2-pin header, 0.1in centers                                             |
| R1, R2, R9-R12, R20, R21 |     0 | Not installed, resistors (0805) R1, R2, R9-R12 are open; R20, R21 are short (PC trace) |
| R3, R4                   |     2 | 1k Ω ±1% resistors (0805)                                                              |
| R5-R8                    |     4 | 4.99k Ω ±1% resistors (1206) Panasonic ERJ-8ENF4991V                                   |
| R13                      |     1 | 10k Ω ±1% resistor (0805)                                                              |
| R14                      |     1 | 10k Ω ±5% resistor (0805)                                                              |
| R15                      |     1 | 54.9k Ω ±1% resistor (0805)                                                            |
| R16                      |     1 | 464k Ω ±1% resistor (0805)                                                             |
| R17                      |     1 | 100k Ω ±1% resistor (0805)                                                             |
| R18                      |     1 | 68.1k Ω ±1% resistor (0805)                                                            |
| R19                      |     1 | 39.2k Ω ±1% resistor (0805)                                                            |
| TP1, TP2                 |     2 | PC mini test points, yellow                                                            |

## MAX9924U Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| TP3, TP5      |     2 | PC mini test points, red                                        |
| TP4, TP6      |     2 | PC test points, black                                           |
| U1            |     1 | VR sensor interface (10 µMAX) Maxim MAX9924UAUB+                |
| U2            |     1 | High-speed op amp comparator reference (8 SO) Maxim MAX9000ESA+ |
| -             |     9 | Shunts (JU1-JU5, JU7-JU10)                                      |
| -             |     1 | PCB: MAX9924U Evaluation Kit+                                   |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- One 5V, 100mA power supply
- One voltmeter
- One oscilloscope

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX9924U or MAX9925 when contacting these component suppliers.

## Detailed Description of Hardware

The MAX9924U EV kit features a differential VR sensor interface circuit using a MAX9924U IC in a 10-pin µMAX surface-mount package. The EV kit's singlechannel interface circuit  evaluates  signals  from  both differential  and  single-ended  sensors.  The  interface circuit  provides  a  fixed  gain  of  1V/V  and  evaluates sensor-signal amplitudes of 40mVP-P to 300VP-P with a frequency range of 5Hz to 25kHz. Power for the EV kit  circuit  can  be  supplied  by  a  4.5V  to  5.5V  DC source that provides at least 100mA.

The MAX9924U EV kit circuit can be configured to demonstrate the MAX9924U MODE A1, A2, B, or C operation.  Resistors  R3,  R4  and  capacitor  C10  provide a VCC/2 source for evaluating MODE B or C. For MODE C operation, surface-mount resistor pads (R1, R2) are provided to configure the high- and lowthreshold voltage.  Refer  to  the Mode  Selection section in the MAX9924/MAX9925 IC data sheet for addit i o n a l   i n f o r m a t i o n   o n   t h e   m o d e s   o f   o p e r a t i o n . Lowpass sensor input filtering is provided by resistors R5,  R6  on  the  SENSE+  input,  and  resistors  R7,  R8, and capacitor C5 on the SENSE- input. PCB pads provide access to the MAX9924U square-wave opendrain output signal at COUT.

Additionally, PCB pads are provided for interfacing with a user-supplied microcontroller PWM signal when evaluating MODE B of the MAX9924U, which enables the MAX9924U threshold voltage to be set externally. Resistor R13 and capacitor C4 provide a lowpass filter for the PWM input signal connected to the FILTER PCB pad. Refer to the Adaptive Peak Threshold section in the MAX9924/MAX9925 IC data sheet for additional information.

The MAX9924U EV kit provides a configurable onboard triangle-wave generator using a MAX9000 IC for evaluating the MAX9924U without a sensor. Capacitors C6, C7, resistors R15, R16, and jumpers JU8, JU9 con-

## Procedure

The MAX9924U EV kit is fully assembled and tested. Follow the steps below to verify board operation. See Tables 1-4 for a description of the jumpers detailed in the procedure below. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a voltmeter to TP3 (VCC/2) and TP4 (GND) test points.
- 2) Verify that a shunt is not installed across the pins of jumpers JU1 and JU3.
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumpers JU2, JU4, and JU5 (MODE A1 operation).
- 4) Verify  that  a  shunt  is  installed  across  the  pins  of j umpers JU7 and JU10 and that no shunt is installed  across jumpers JU8 and JU9 (on-board triangle-wave generator, 2.5kHz).
- 5) Connect the V\_PULL PCB pad to the VCC pad to pull the COUT signal up to VCC.
- 6) Connect the 5V power supply to the VCC pad. Connect the power supply's ground to the GND pad.
- 7) Turn on the power supply and verify that the voltmeter reads approximately 2.5V.
- 8) Using an oscilloscope, measure the signal at the COUT and GND pads, which should be a 2.5kHz square waveform with amplitude of 5V.
- 9) The EV kit circuit is ready for further evaluation using a VR or magnetic pickup sensor. See the Jumper Selection section for configuring the EV kit circuit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9924U Evaluation Kit

figure  the  generator  frequency.  The  generator can be configured for a 5Hz, 55Hz, 2.5kHz, or 24kHz trianglewave signal. When configured to the 5Hz signal input mode, the EV kit circuit is used to demonstrate the MAX9924U internal watchdog timer's functionality.

The EV kit also features test points to ease evaluating the  raw  sensor  input  signals.  Test  point  TP1  provides access to the SENSE+ signal after passing through resistors R5 and R6. TP2 provides access to the SENSE- signal after passing through resistors R7 and R8. Test point TP3 provides access to the VCC/2 voltage source, while TP4 provides access to GND.

## Jumper Selection

The MAX9924U EV kit features several jumpers to reconfigure the interface circuit's mode of operation, sensor input type, and the triangle-wave generator frequency.

## Sensor Signal Source (IN+, IN-)

The MAX9924U EV kit features jumpers to select the MAX9924U IC IN+ and IN- pin signal source, either the EV kit's triangle-wave generator (U2) or a user-supplied sensor signal. The sensor signal is applied to the EV kit's SENSE+ and SENSE- PCB pads. For proper operation, the typical sensor signal should have a 40mVP-P to  300VP-P and a frequency range of 5Hz to 25kHz. Table 1 lists the various jumper options for selecting the signal source.

## Triangle-Wave Generator Frequency Selection and Enable

The MAX9924U EV kit features jumpers JU8 and JU9 to set the EV kit's triangle-wave generator frequency. The generator frequency is configurable to 5Hz, 55Hz, 2.5kHz, or 24kHz. Additionally, jumper JU6 is provided to  disable  the  generator active IC (U2) and JU10 is used to disconnect the ramp generator signal from the MAX9924U IN+ pin. See Table 1 for configuring JU10. See Table 2 for the frequency selection options for j umpers JU8 and JU9. Table 3 lists jumper JU6 enable/disable options for U2.

Table 1. Sensor Source Configuration (JU7, JU10)

| JU7       | JU10      | MAX9924U IN+ PIN                                     | MAX9924U IN- PIN                                    | SENSOR SOURCE                   |
|-----------|-----------|------------------------------------------------------|-----------------------------------------------------|---------------------------------|
| Installed | Installed | Connected to triangle-wave generator                 | Connected to VCC/2                                  | EV kit triangle-wave generator* |
| Open      | Open      | Connected to SENSE+ PCB pad through resistors R5, R6 | Connected to SENSE- PC pad through resistors R7, R8 | External differential VR sensor |
| Installed | Open      | Connected to SENSE+ PCB pad through resistors R5, R6 | Connected to VCC/2                                  | External single-ended VR sensor |

Table 2. Triangle-Wave Generator Frequency Configuration (JU8, JU9)

| JU8       | JU9       | FREQUENCY   |
|-----------|-----------|-------------|
| Installed | Open      | 5Hz         |
| Installed | Installed | 55Hz        |
| Open      | Open      | 2.5kHz      |
| Open      | Installed | 24kHz       |

<!-- image -->

Table 3. Triangle-Wave Generator Enable Configuration (JU6)

| JU6 PC TRACE SHORT   | U2, PIN 8        | GENERATOR OPERATION   |
|----------------------|------------------|-----------------------|
| Installed            | Connected to VCC | Enabled               |
| Cut open             | Open             | Disabled, not powered |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9924U Evaluation Kit

## Table 4. MODE A1, A2, B, and C Configuration (JU1-JU5, JU7)

| MODE   | JU1 (R1, R2)   | JU2 (BIAS)   | JU3 (ZERO_EN)   | JU4 (EXT)   | JU5 (INT_THRS)   | JU7 (SENSOR)   | MODE   |
|--------|----------------|--------------|-----------------|-------------|------------------|----------------|--------|
| A1     | Open           | 1&2          | Open            | 1-2         | 1-2              | Installed*     | A1     |
| A2     | Open           | 2&3          | Installed       | 1-2         | 2-3              | Installed*     | A2     |
| B      | Open           | 1&2          | Open            | 1-3         | 2-3              | Installed*     | B      |
| C      | Installed      | 1&2          | Installed       | 1-4         | 2-3              | Installed*     | C      |

## MAX9924U MODE A1, A2, B, and C Operation

The MAX9924U EV kit features jumpers JU1-JU5 and JU7 to configure the VR sensor interface circuit mode of  operation.  The  circuit  can  be  configured  for  MODE A1, A2, B, or C operation. Table 4 lists the various jumper options for configuring the circuit.

MODE B Operation: Supply a digital PWM signal to the FILTER and GND pads. The signal must provide a 5V logic-high frequency in the range of 25kHz to 100kHz.

MODE C Operation: Threshold voltage resistors R1 and R2 must be selected using the following equation. Refer to the Comparator section and Figure 5 in the MAX9924/MAX9925 IC data sheet for additional information on selecting threshold voltages.

<!-- formula-not-decoded -->

where R2 is typically in the range of 50k Ω to  500k Ω , R14 is 10k Ω ,  V BIAS is  the  voltage  at  the  MAX9924U BIAS pin, and V\_PULL is the voltage connected to the V\_PULL pad. Refer to the Mode Selection section in the MAX9924/MAX9925 IC data sheet for additional information on selecting a mode of operation and the Comparator section for additional information on selecting threshold voltages.

## COUT and V\_PULL

The MAX9924U open-drain comparator output is available at the COUT PCB pad. The V\_PULL PCB pad is provided to pull up the COUT signal through R14 to the voltage connected to the V\_PULL PCB pad. V\_PULL accepts voltages from 0 to 5.5V.

## Evaluating a MAX9925

The MAX9924U EV kit can also be used to evaluate the MAX9925 IC with externally set gain (IC replacement of U1 required). Contact the factory to request a free sample of the MAX9925. Cut open the shorting trace across R20 and R21 pads before populating the resistors on these pads. To set the gain to 1V/V, install 100k Ω resistors at R20 and R9 for the IN+ input and 100k Ω resistors at R21 and R10 for the IN- input. Test point TP5 is provided for probing the pin 3 signal of the MAX9925 IC during evaluation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9924U Evaluation Kit

Figure 1. MAX9924U EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9924U Evaluation Kit

Figure 2. MAX9924U EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9924U Evaluation Kit

<!-- image -->

Figure 3. MAX9924U EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9924U Evaluation Kit

Figure 4. MAX9924U EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8