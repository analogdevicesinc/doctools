<!-- lastmod 2022-08-03 -->
## MAX937 Evaluation Kit

## General Description

The MAX9937 evaluation kit (EV kit) is an assembled and tested PCB used to evaluate the MAX9937 current-sense amplifier,  designed  for  unidirectional  high-side  currentsense  applications.  The  EV  kit  can  be  used  to  demonstrate  the  applicability  of  the  MAX9937  to  withstand transients, such as load-dump protection, reverse-battery protection, and filtering for EMI.

## Features

- Reverse-Battery and Load-Dump Protection · -20V to +40V
- +4V to +28V Input Common-Mode Range
- +2.7V to +5.5V Supply Range
- Flexible EMI Filtering
- Lead(Pb)-Free and RoHS Compliant
- Fully Assembled and Tested

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 12V, 2A power supply (VBAT)
- 5V power supply (VCC)
- Electronic load capable of sinking 2A
- Digital voltmeter (DVM)

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9937EVKIT+ | EV Kit |

## Procedure

The MAX9937 EV kit is fully assembled and tested. Follow the  steps  below  to  verify  board  operation. Caution: Do not turn on power supplies until all connections are completed.

- 1)  Set  the  input  power  supply  to  12V  and  connect  the positive terminal to the VBAT PCB pad. Connect the ground of the power supply to the GND PCB pad.
- 2)  Set  the  VCC  power  supply  to  5V  and  connect  the positive  terminal  to  the  VCC  PCB  pad.  Connect  the ground of the VCC supply to the GND pad.
- 3)  Set the electronic load to sink 2A.
- 4)  Connect the electronic load's positive terminal to the LOAD  pad.  Connect  the  load's  ground  to  the  GND PCB pad.
- 5)  Connect the DVM across the VOUT PCB pad and the GND pad.
- 6)  Turn on the 5V power supply.
- 7)  Turn on the 12V power supply.
- 8)  Adjust the electronic load current (I LOAD ) between 0A and 2A and verify that V OUT  is proportional to V SENSE according to the following equation:

<!-- formula-not-decoded -->

where V SENSE  = I LOAD  x R1.

<!-- image -->

Evaluates: MAX937

## MAX9937 Evaluation Kit

## Detailed Description of Hardware

The MAX9937 EV kit evaluates the MAX9937 unidirectional  high-side  current-sense  amplifier,  which features a 4V to 28V input common-mode voltage range that  is  independent  of  supply  voltage  (VCC  =  2.7V  to 5.5V).  The  MAX9937  monitors  the  current  through  a current-sense resistor by converting the sense voltage to a voltage output (V OUT ). Gain is set by the ratio of an output resistor (R2) and an input resistor (R3). High-side current monitoring with the MAX9937 does not interfere with the ground path of the load, making it useful for a variety of battery/ECU-monitoring applications.

The MAX9937 EV kit produces an output voltage (V OUT ) given by the following equations:

<!-- formula-not-decoded -->

where I LOAD  is the current load applied to the device and RSENSE  is  the  current-sense  resistor  R1  (e.g.,  I LOAD =  2A,  R SENSE =  0.05Ω,  R2  =  20kΩ,  R3  =  1kΩ,  and VOUT = 2V).

## Overvoltage Protection

The MAX9937 EV kit provides a 1kΩ resistor at each of the RSP and RSN inputs to demonstrate the reverse-battery and  load-dump  protection  capabilities  of  the  MAX9937 IC. The normal operating V RSP  and V RSN  range is 4V to 28V,  but  the  robust  input  ESD  structure  allows  the  input common-mode  voltages  to  exceed  this  range  for  short periods of time.

Short-duration  overvoltages  on  the  battery  line  (VBAT  to LOAD) are  isolated  from  the  RSP  and  RSN  pins  of  the MAX9937 by the use of input resistors  R3  and  R4. The input ESD clamp structure is designed so the device can withstand  short-duration  (&lt;  1s)  overvoltages  up  to  40V when using resistors R3 and R4 of 500Ω or greater. The circuit can also withstand a reverse-battery voltage of -20V. During  reverse-battery  conditions,  size  R3  and  R4  input resistors  to  withstand  their  expected  power  dissipations. Refer to the Input Common-Mode Voltages &gt; 28V and &lt; 0V section in the MAX9937 IC data sheet for a more detailed description.

## EMI Filtering

The  MAX9937  EV  kit  provides  two  uninstalled  capacitor pads (C2 and C4), which the user can populate to improve performance in the presence of input commonmode voltage and input differential-voltage  transients.  Refer  to  the Flexible  EMI  Filtering section  in  the  MAX9937  IC  data sheet for a more detailed description.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA TDK C3216X7R1H105K   |
| C2, C4        |     0 | Not installed, capacitors (0603)                                                        |
| C3            |     1 | 0.01µF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K TDK C1608X7R1H103K |
| R1            |     1 | 0.05Ω ± 1%, 0.5W current-sense resistor (1206) IRC LRC-LR1206LF-01-R050-F               |
| R2            |     1 | 20kΩ ± 1% resistor (0603)                                                               |
| R3, R4        |     2 | 1kΩ ± 1% resistor (1206)                                                                |
| U1            |     1 | Current-sense amplifier (5 SC70) Maxim MAX9937AXK+                                      |
| -             |     1 | PCB: MAX9937 EVALUATION KIT+                                                            |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| IRC, Inc.       | 361-992-7900 | www.irctt.com          |
| Murata Americas | 770-436-1300 | www.murataamericas.com |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX9937 when contacting these component suppliers.

│

Evaluates: MAX9937

Figure 1. MAX9937 EV Kit Schematic

<!-- image -->

Figure 2. MAX9937 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9937 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX9937 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX9937 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/09            | Initial release                                                                                                                                     | -               |
|                 1 | 5/15            | Deleted automotive references in General Description , Component List , and Detailed Description of Hardware sections; added Revision History table | 1, 2, 6         |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX9937