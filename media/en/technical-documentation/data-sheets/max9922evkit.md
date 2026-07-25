<!-- lastmod 2022-08-03 -->
## General Description

The MAX9922 evaluation kit (EV kit) is a fully assembled and tested PCB used to evaluate the MAX9922 and MAX9923 ultra-precision, high-side current-sense amplifiers. An ultra-low offset voltage (VOS) of 10µV (max) allows accurate measurement of currents at both extremes of sense voltages (VSENSE), from 10mV to 100mV. The EV kit has a 1.9V to 28V input commonmode sense voltage range that is independent of the 2.85V to 5.5V VDD supply.

The MAX9922 EV kit comes assembled with the MAX9922 IC with adjustable gain, but can also evaluate the  MAX9923  ICs  with  fixed  gains  of  25V/V (MAX9923T),  100V/V  (MAX9923H),  and  250V/V (MAX9923F). The MAX9922/MAX9923 are capable of both unidirectional and bidirectional operation.

| COMPONENT      |   QTY | DESCRIPTION                                                                            |
|----------------|-------|----------------------------------------------------------------------------------------|
| C1             |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R70J475K TDK C1608X5R0J475K |
| C2, C7         |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K Murata GRM188R71E104K |
| C3, C4, C5, C8 |     0 | Not installed, capacitors (0603)                                                       |
| C6             |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM1885C1H102J TDK C1608X7R1H102K |
| JU1, JU2       |     2 | 2-pin headers                                                                          |
| JU3            |     1 | 3-pin header                                                                           |
| R1             |     1 | 0.1 Ω ±1% current-sense resistor (1206) IRC LRC-LR1206LF-01-R100-F                     |

<!-- image -->

<!-- image -->

## Features

- ♦ Bidirectional or Unidirectional Current Sensing
- ♦ Shutdown Logic Input Control
- ♦ Multiple Gains Available Adjustable (MAX9922) 25V/V (MAX9923T) 100V/V (MAX9923H) 250V/V (MAX9923F)
- ♦ 2.85V to 5.5V Supply Range (VDD)
- ♦ 1.9V to 28V Input Common-Mode Range Independent of VDD
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9922EVKIT+ | EV Kit |

## Component List

| COMPONENT   |   QTY | DESCRIPTION                                                      |
|-------------|-------|------------------------------------------------------------------|
| R2          |     1 | 249k Ω ±0.1% resistor (0603)                                     |
| R3          |     1 | 1k Ω ±0.1% resistor (0603)                                       |
| R4          |     1 | 100k Ω ±5% resistor (0603)                                       |
| R5, R6      |     2 | 1k Ω ±5% resistors (0603)                                        |
| R7, R8, R9  |     0 | Not installed, resistors-short PC trace (0603)                   |
| SHDN        |     1 | Test point Keystone 5000                                         |
| U1          |     1 | High-side current-sense amplifier (10 µMAX ® ) Maxim MAX9922EUB+ |
| -           |     3 | Shunts                                                           |
| -           |     1 | PCB: MAX9922/3 Evaluation Kit+                                   |

1

## MAX9922 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Keystone Electronics Corp.             | 209-796-2032 | www.keyelco.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9922 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 12V, 100mA power supply (VSOURCE)
- 3.3V power supply (VDD)
- Electronic load capable of sinking 100mA
- Digital voltmeter (DVM)

## Procedure

The MAX9922 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Verify that all jumpers (JU1, JU2, and JU3) are in their default positions, as shown in Tables 1, 2, and 3.
- 2) Set the input power supply to 12V. Connect the ground of the power supply to the PGND pad, and connect the positive terminal to the VSOURCE pad.
- 3) Set the VDD power supply to 3.3V. Connect the ground of the VDD supply to the GND pad and connect the positive terminal to the VDD pad.
- 4) Set the electronic load to sink 100mA.
- 5) Connect the load's ground to the GND pad. Connect the electronic load's positive terminal to the LOAD pad.
- 6) Connect the DVM across the VOUT pad and the GND pad.
- 7) Turn on the 3.3V power supply.
- 8) Turn on the 12V power supply.
- 9) Adjust the electronic load current (ISENSE) between 0A and 100mA and verify that VOUT is proportional to VSENSE according to the following equation:

<!-- formula-not-decoded -->

where RSENSE = R1 and VREF = VDD/2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX9922 EV kit is a current-sense amplifier that measures the load current and provides an analog voltage output. The EV kit comes assembled with the MAX9922 IC, which allows adjustable gain with a pair of external resistors (R2 and R3) between OUT, FB, and REF. The EV kit is configured for bidirectional current sensing. The output voltage (VOUT) is given by the following equation:

<!-- formula-not-decoded -->

where RSENSE = 0.1 Ω , I SENSE = load current, and VREF = VDD/2. For unidirectional operation, the output voltage (VOUT) is given by the following equation:

<!-- formula-not-decoded -->

## Shutdown Input Control

The MAX9922 EV kit features 2-pin jumper JU1 to control  the  logic  shutdown input. For normal operation, remove the shunt from jumper JU1 to drive SHDN high. To place the device in shutdown mode, drive SHDN low by placing a shunt across the JU1 pins. Table 1 summarizes jumper JU1's function.

## Table 1. Jumper JU1 Function ( SHDN )

| SHUNT POSITION   | SHDN PIN                                    | MODE             |
|------------------|---------------------------------------------|------------------|
| Installed        | Connected to GND                            | Shutdown mode    |
| Not installed*   | Connected to VDD through pullup resistor R4 | Normal operation |

<!-- image -->

Table 2. Jumper JU2 Function (REF)

| SHUNT POSITION   | REF PIN          | OPERATION      |
|------------------|------------------|----------------|
| Installed        | Connected to GND | Unidirectional |
| Not installed*   | Set to V DD /2   | Bidirectional  |

Table 3. Jumper JU3 Function (RSB)

| SHUNT POSITION   | RSB PIN              | HIGH SIDE   |
|------------------|----------------------|-------------|
| 1-2*             | Connected to VSOURCE | VSOURCE     |
| 2-3              | Connected to LOAD    | LOAD        |

## External Reference

The MAX9922 EV kit features 2-pin jumper JU2 to support both unidirectional and bidirectional operation. For unidirectional current-sense applications, connect the REF input to GND by placing a shunt across JU2. For bidirectional operation, connect REF to a reference voltage. By default, the EV kit provides a VDD/2 voltagedivider  when the shunt on JU2 is not installed. In this mode, VOUT equals VREF when VSENSE equals 0mV. Table 2 summarizes jumper JU2's function.

## Current-Sense Amplifier Supply Input

The MAX9922 EV kit features 3-pin jumper JU3 to select the current-sense amplifier voltage supply (VRSB) input. The VRSB pad can be connected to either side of the current-sense resistor by changing the shunt position of JU3. Place a shunt across pins 1-2 if the VSOURCE pad is being used to power VRSB. Place a shunt across pins 2-3 if  the  LOAD pad is being used to power VRSB. Table 3 summarizes jumper JU3's function.

<!-- image -->

## MAX9922 Evaluation Kit

## Input Differential Signal Range

The MAX9922/MAX9923 feature a proprietary input structure optimized for small differential signals as low as 10mV full scale for high efficiency or 100mV full scale for high dynamic range. For best linearity and accuracy, do not exceed VSENSE of ±150mV. With a 0.1 Ω sense resistor installed, the EV kit is optimized for a 100mA full-scale load current and a 10mV full-scale sense voltage. For other load-current applications, choose the appropriate sense resistor according to the following equation:

<!-- formula-not-decoded -->

In  applications  monitoring a high current, ensure that RSENSE is able to dissipate its own I 2 R loss. If the resistor's power dissipation is exceeded, its value may drift, or fail altogether.

## Evaluating the MAX9923T/MAX9923H/ MAX9923F

The MAX9922 EV kit can also be used to evaluate the MAX9923T/MAX9923H/MAX9923F ultra-precision, fixed-gain, high-side current-sense amplifiers. Leave the FB pin unconnected by uninstalling feedback resistors R2 and R3. Replace U1 with the MAX9923T, MAX9923H, or the MAX9923F. For bidirectional mode, the output voltage (VOUT) is given by the following equation:

<!-- formula-not-decoded -->

where RSENSE = 0.1 Ω ,  I SENSE = load current, VREF = VDD/2, and AV is the gain of the device. For unidirectional  operation, the output voltage (VOUT) is given by the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9922 Evaluation Kit

Figure 1. MAX9922 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9922 Evaluation Kit

<!-- image -->

Figure 2. MAX9922 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9922 Evaluation Kit

Figure 3. MAX9922 EV Kit Component PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9922 Evaluation Kit

Figure 4. MAX9922 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

7