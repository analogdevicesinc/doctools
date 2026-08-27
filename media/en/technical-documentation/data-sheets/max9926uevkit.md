<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9926U Evaluation Kit

## General Description

## Features

The MAX9926U evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  contains  a  dual-channel differential variable-reluctance (VR or magnetic pickup) sensor interface circuit using a MAX9926U IC in a 16-pin QSOP package. The dual-channel interface circuit also features differential amplifiers for evaluating a pair of differential or single-ended VR sensor signals and provides a gain of 1. Input power to the EV kit circuit can be supplied by a 4.5V to 5.5V DC source. The MAX9926U IC temperature range is -40 N C to +125 N C. The EV kit uses automotive power-train safety-equipment-rated ceramic capacitors with a temperature range of -55 N C to +125 N C.

The  MAX9926U  EV  kit  circuit  can  be  configured  to demonstrate the MAX9926U IC's operation with internal adaptive  peak  threshold  and  zero-crossing  detection modes, as well as to interface to a microcontroller pulsewidth  modulation  (PWM)  signal  for  evaluating  external thresholds. It can interface to both differential as well as single-ended VR sensors. The EV kit can evaluate external VR signals from 5Hz to 25kHz.

- S Demonstrates the Operation of MAX9926U Modes A1, A2, and B
- S Evaluates Dual Differential and Single-Ended Variable-Reluctance (VR or Magnetic Pickup) Sensors
- S Demonstrates Zero Crossing, Peak Detection, Adaptive Threshold Mechanism, and Rotation Direction
- S Includes Lowpass Sensor Input Filters
- S Evaluates 5Hz to 25kHz VR Sensors
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9926UEVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                            |
|------------------|-------|------------------------------------------------------------------------|
| C1, C7           |     0 | Not installed, ceramic capacitors (0805)                               |
| C2               |     1 | 4.7 F F Q 20%, 25V X7R ceramic capacitor (1206) Murata GCM31CR71E475M  |
| C3, C10, C11     |     3 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GCM21BR71H104K |
| C4, C6, C9       |     3 | 1 F F Q 10%, 16V X7R ceramic capacitors (0805) Murata GCM219R71C105K   |
| C8               |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C104K  |
| R1-R4, R14-R17   |     8 | 4.99k I Q 1% resistors (1206) Panasonic ERJ-8ENF4991V                  |
| R5, R6, R18, R19 |     0 | Not installed, resistors (0805)                                        |

| DESIGNATION                  |   QTY | DESCRIPTION                                                       |
|------------------------------|-------|-------------------------------------------------------------------|
| R10, R11                     |     2 | 1k I Q 1% resistors (0805)                                        |
| R23, R28                     |     2 | 10k I Q 1% resistors (0805)                                       |
| R24, R27, R29                |     3 | 10k I Q 5% resistors (0805)                                       |
| JU1, JU4, JU7 JU10           |     4 | 2-pin headers                                                     |
| JU2, JU3, JU5, JU6, JU8, JU9 |     6 | 3-pin headers                                                     |
| TP1, TP2, TP5, TP6           |     4 | Miniature PC test points, yellow                                  |
| TP3, TP4                     |     2 | Miniature PC test points, red                                     |
| TP7, TP8                     |     2 | PC test points, black                                             |
| U1                           |     1 | VR sensor interface (16 QSOP) Maxim MAX9926UAEE+ (Top Mark: +YWW) |
| -                            |    10 | Shunts (JU1-JU10)                                                 |
| -                            |     1 | PCB: MAX9926U EVALUATION KIT+                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9926U Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX9926U when contacting these component suppliers.

## Quick Start

## Required Equipment

## Procedure

The  MAX9926U  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Verify  that  shunts  are  installed  on  their  respective jumper, as shown in Table 1.
- 2)  Connect the 5V power supply to the VCC pad and the power supply's ground to the GND pad.
- 3)  Turn on the power supply.
- 4)  Using  the  oscilloscope,  measure  the  signal  at  the COUT1 or COUT2 and GND pads, which should be a 2.5kHz square waveform with amplitude of 5V.
- 5)  Connect the function generator to the SENSE1+ and SENSE1- PCB pads.
- 6)  Turn on the function generator and set it for an output of  a  DC  offset  of  2.5V  DC,  triangle  wave  with  a  frequency of 2.5kHz, and a 50% duty cycle.
- 7)  The EV kit circuit is ready for further evaluation using two VR or magnetic pickup sensors. See the Jumper Selection section for configuring the EV kit circuit.

## Detailed Description of Hardware

The  MAX9926U  EV  kit  features  a  dual-channel  differential VR sensor interface circuit using a MAX9926U IC in a 16-pin QSOP surface-mount package. The EV kit's dual-channel interface circuit can evaluate signals from differential or single-ended sensors. The interface circuit provides a gain of 1 and can evaluate differential sensor signal amplitudes of 50mVP-P to 300VP-P with a 5Hz to 25kHz frequency range. Power for the EV kit circuit can be supplied by a 4.5V to 5.5V DC source, which provides at least 100mA.

The MAX9926U EV kit circuit can be configured to demonstrate the MAX9926U Modes A1, A2, or B operation. Resistor-capacitor  networks  R10,  R11,  C4  provide  a VCC/2 source to the BIAS1 and BIAS2 inputs, respectively, for evaluating Mode B. Refer to the Mode Selection section  in  the  MAX9926U  IC  data  sheet  for  additional

## Table 1. Default Jumper Configuration (JU1-JU10)

| JUMPER   | SHUNT POSITION   | JUMPER CONFIGURATION                 |
|----------|------------------|--------------------------------------|
| JU1      | Installed        | Channel 1, single-ended sensor       |
| JU2      | 1-2              | Channel 1, Mode A1 mode of operation |
| JU3      | 1-2              | Channel 2, Mode A1 mode of operation |
| JU4      | Installed        | Channel 2, single-ended sensor       |
| JU5      | 1-2              | Channel 1, Mode A1 mode of operation |
| JU6      | 1-2              | Channel 1, Mode A1 mode of operation |
| JU7      | Not installed    | Mode A1 mode of operation            |
| JU8      | 1-2              | Channel 2, Mode A1 mode of operation |
| JU9      | 1-2              | Channel 2, Mode A1 mode of operation |
| JU10     | Installed        | V_PULL VCC powered                   |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX9926U EV kit
- 5V, 100mA power supply
- Oscilloscope
- Function generator

## MAX9926U Evaluation Kit

information on the modes of operation. Lowpass sensor input filtering for channel 1 SENSE1 Q inputs is provided by resistors-capacitor network R1-R4, C1 and channel 2 SENSE2 Q inputs are provided by R14-R17, C7. PCB pads  provide  access  to  the  MAX9926U  square-wave open-drain  output  signals  at  COUT1  and  COUT2  and the direction signals. These outputs are pulled up to the V\_PULL voltage and are configurable by jumper JU10.

Additionally, PCB pads FILTER1 and FILTER2 are provided  for  interfacing  with  user-supplied  microcontroller PWM signals when evaluating Mode B of the MAX9926U, which enables the threshold voltage to be set externally. For  FILTER1,  resistor-capacitor  network  R23,  C10  and for  FILTER2,  R28,  C11  provide  a  lowpass  filter  for  the PWM input signals, respectively. Refer to the Adaptive Peak Threshold section in the MAX9926U IC data sheet for additional information.

When fed a 5Hz signal, the EV kit circuit can be used to demonstrate the MAX9926U's internal watchdog timer's functionality.

The  EV  kit  also  features  test  points  to  ease  evaluating the raw sensor input signals. Tests points TP1 and TP2 provide access to the SENSE1+/SENSE1- input signals after  passing  through  resistors  R1-R4.  TP5  and  TP6 provide access to the SENSE2+/SENSE2- input signals after  passing  through  resistors  R14-R17.  TP3  and  TP4 provide  access  to  the  BIAS1  and  BIAS2  reference, respectively, while TP7 and TP8 provide access to GND.

## Jumper Selection

The MAX9926U EV kit features several jumpers to reconfigure  the  sensor  input  type,  pullup  voltage,  and  the interface circuit's mode of operation.

## Sensor Signal Sources (SENSE1+/SENSE1-, SENSE2+/SENSE2-)

The sensor signals are applied to the EV kit's channel 1 SENSE1+/SENSE1-  and  channel  2  SENSE2+/SENSE2PCB pads. For proper operation, the typical differential sensor  signal  should  have  50mVP-P  to  300VP-P  and a  5Hz  to  25kHz  frequency  range.  When  evaluating single-ended  sensors,  resistors  R1-R4  and  R14-R17 require replacement for operation at higher voltages and power. Table 2 lists SENSE1+/SENSE1- various jumper options for selecting the signal source and Table 3 lists SENSE2+/SENSE2- jumper options.

## Table 2. Channel 1 SENSE1+/SENSE1- Source (JU1 Configuration)

| SHUNT POSITION   | IN1+ PIN                                                 | IN1- PIN                                                 | SENSE1+/SENSE1- SOURCE          |
|------------------|----------------------------------------------------------|----------------------------------------------------------|---------------------------------|
| Not installed    | Connected to SENSE1+ PCB pad through resistors R1 and R2 | Connected to SENSE1- PCB pad through resistors R3 and R4 | External differential VR sensor |
| Installed        | Connected to SENSE1+ PCB pad through resistors R1 and R2 | Connects SENSE1- PCB pad to GND pad                      | External single-ended VR sensor |

## Table 3. Channel 2 SENSE2+/SENSE2- Source (JU4 Configuration)

| SHUNT POSITION   | IN2+ PIN                                                   | IN2- PIN                                                | SENSE2+/SENSE2- SOURCE          |
|------------------|------------------------------------------------------------|---------------------------------------------------------|---------------------------------|
| Not installed    | Connected to SENSE2+ PCB pad through resistors R14 and R15 | Connected to SENSE2- PCB pad through resistors R16, R17 | External differential VR sensor |
| Installed        | Connected to SENSE2+ PCB pad through resistors R14 and R15 | Connects SENSE2- PCB pad to GND pad                     | External single-ended VR sensor |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9926U Evaluation Kit

## MAX9926U Mode A1, A2, and B Operation

The MAX9926U EV kit features jumpers to configure the respective channel 1 and channel 2 VR sensor interface circuit mode of operation. The circuit can be configured for Mode A1, A2, or B operation. For channel 1, Table 4 lists the various jumper options for configuring the circuit. Table 5 lists channel 2 options;

Mode B Operation: Supply a digital PWM signal to the respective channel FILTER\_ and GND pads. The signal must provide a 5V logic-high frequency in the 25kHz to 100kHz range.

Refer to the Mode Selection section in the MAX9926U IC data sheet for additional information on selecting a mode of operation.

## Table 4. Channel 1 Mode A1, A2, and B (JU1, JU2, JU5, JU6, JU7 Configuration)

|      | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   |
|------|------------------|------------------|------------------|------------------|------------------|
| MODE | JU1 SENSOR       | JU2 BIAS1        | JU5 INT_THRS1    | JU6 EXT1         | JU7 ZERO_EN      |
| A1   | See Table 2      | 1-2              | 1-2              | 1-2              | Not installed    |
| A2   | See Table 2      | 2-3              | 2-3              | 1-2              | Installed        |
| B    | See Table 2      | 1-2              | 2-3              | 1-3              | Not installed    |

## Table 5. Channel 2 Mode A1, A2, and B (JU3, JU4, JU7, JU8, JU9 Configuration)

|      | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   |
|------|------------------|------------------|------------------|------------------|------------------|
| MODE | JU4 SENSOR       | JU3 BIAS2        | JU8 INT_THRS2    | JU9 EXT2         | JU7 ZERO_EN      |
| A1   | See Table 3      | 1-2              | 1-2              | 1-2              | Not installed    |
| A2   | See Table 3      | 2-3              | 2-3              | 1-2              | Installed        |
| B    | See Table 3      | 1-2              | 2-3              | 1-3              | Not installed    |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## COUT1, COUT2, DIRN Outputs and V\_PULL

The  MAX9926U  open-drain  comparator  outputs  are available at the COUT1, COUT2, and DIRN PCB pads. The V\_PULL PCB pad is provided to pull up the COUT1, COUT2, and DIRN signals (R24, R29, and R27, respectively) to the voltage connected to the V\_PULL PCB pad. V\_PULL can accept voltages up to 5.5V after removing jumper  JU10.  When  installed,  jumper  JU10  pulls  the V\_PULL pads up to VCC.

## MAX9926U Evaluation Kit

Figure 1. MAX9926U EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9926U Evaluation Kit

<!-- image -->

Figure 2. MAX9926U EV Kit Component Placement GuideComponent Side

Figure 3. MAX9926U EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9926U EV Kit PCB Layout-VCC Layer 2

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9926U Evaluation Kit

Figure 5. MAX9926U EV Kit PCB Layout-GND Layer 3

<!-- image -->

Figure 6. MAX9926U EV Kit PCB Layout-Solder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

7