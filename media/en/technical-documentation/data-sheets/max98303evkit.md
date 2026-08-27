<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX98303 Evaluation Kit

## General Description

## Features

The MAX98303 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX98303  stereo 3.1W  Class  D  amplifier  in  a  16-bump,  0.4mm  pitch wafer-level  package  (WLP).  The  EV  kit  operates  from a single 2.6V to 5.5V DC power supply and is capable of  delivering  3.1W  into  a  4 I load.  The  EV  kit  accepts a differential  or  single-ended  audio  input  and  provides differential outputs for the speaker. The device outputs can be connected directly to a speaker load for filterless applications;  however,  a  filter  can  be  added  to  ease evaluation.

- S 2.6V to 5.5V Single-Supply Operation
- S Delivers 3.1W Into a 4 I Load
- S Single-Ended or Differential Audio Input
- S Five Selectable Gains
- S Filterless Operation
- S Optional Class D Output Filters for Ease of Evaluation
- S Low-Power Shutdown Input
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98303EVKIT+ | EV Kit |

## Component List

| DESIGNATION                              |   QTY | DESCRIPTION                                                                                |
|------------------------------------------|-------|--------------------------------------------------------------------------------------------|
| C1                                       |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K   |
| C2                                       |     1 | 10 F F Q 10%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K   |
| C3, C4, C17, C18                         |     4 | 1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K Murata GRM188R71E105M |
| C5-C16, C19, C20                         |     0 | Not installed, capacitors (0603)                                                           |
| FB1-FB4                                  |     4 | 0 I resistors (0603)                                                                       |
| FOUTL+, FOUTL-, FOUTR+, FOUTR-, GND, VDD |     6 | Binding posts                                                                              |
| INL                                      |     1 | White phono jack (side-entry PCB mount)                                                    |
| INR                                      |     1 | Red phono jack (side-entry PCB mount)                                                      |
| JU1, JU4                                 |     2 | 2-pin headers                                                                              |

| DESIGNATION                | QTY                 | DESCRIPTION                                                                                |
|----------------------------|---------------------|--------------------------------------------------------------------------------------------|
| JU2                        | 1                   | 3-pin header                                                                               |
| JU3                        | 1                   | 5-pin header                                                                               |
| L1-L4                      | 0                   | Not installed, inductors-PCB short                                                         |
| OUTL+, OUTL-, OUTR+, OUTR- | 4                   | Test points                                                                                |
| R1, R2                     | 2                   | 100k I Q 5% resistors (0603)                                                               |
| R3-R6                      | 0                   | Not installed, resistors (0603)                                                            |
| U1                         | 1                   | 2.6W Class D amplifier (16 WLP) Maxim MAX98303EWE+                                         |
| -                          | 4                   | Shunts (JU1-JU4)                                                                           |
| -                          | 1                   | PCB: MAX98303 EVALUATION KIT+                                                              |
| OPTIONAL COMPONENTS        | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                                                        |
| C7-C16                     | 10                  | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K TDK C1608X7R1E224K |
| L1-L4                      | 4                   | 22 F H Q 20%, 1A inductors TOKO A916CY-220M                                                |
| R3-R6                      | 4                   | 22 I Q 5% resistors (0603)                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98303 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note:

Indicate that you are using the MAX98303EWE+when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX98303 EV kit
- 2.6V to 5.5V, 2A DC power supply
- Stereo audio input
- Two 4 I speakers

## Detailed Description of Hardware

## Filterless Output

The  MAX98303  EV  kit's  filterless  outputs  (OUTL+, OUTL-, OUTR+, and OUTR-) can be connected directly to a speaker load without any filtering. Use the OUTL+ and  OUTL-  test  points  or  the  OUTR+  and  OUTR-  test points  to  connect  the  speaker  directly  to  the  device output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs.  Therefore,  the  EV  kit  features  optional  lowpass filters at the outputs to ease evaluation. As shipped, the EV kit's lowpass filter RC components are unpopulated and inductors L1-L4 are shorted on the PCB.

To  use  the  filtered  output  posts  (FOUTL+,  FOUTL-, FOUTR+,  and  FOUTR-),  remove  the  shorts  on  L1-L4 and  install  components  L1-L4,  C7-C16,  and  R3-R6 (provided  separately  with  the  EV  kit).  Use  the  output posts  to  connect  the  filtered  outputs  to  the  audio analyzer. The default lowpass filters at the EV kit output are optimized for an 8 I speaker.

## Jumper Selection

## Single-Ended/Differential Audio Inputs

The  EV  kit  features  jumpers  JU1  and  JU4  to  select between a differential or single-ended input mode. See Table 1 for JU1 and JU4 configuration.

## Table 1. JU1 and JU4 Jumper Selection

| SHUNT POSITION   | IN_- PIN                                                  | DEVICE OPERATION   |
|------------------|-----------------------------------------------------------|--------------------|
| Installed*       | AC-grounded                                               | Single-ended input |
| Not installed    | AC-coupled to a user-supplied negative differential input | Differential input |

## Procedures

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify that shunts are installed as follows:
- 2) Set  the  power-supply  output  to  5V.  Disable  the power supply.
- 3) Connect  the  power-supply  ground  terminal  to  the GND pad and the power-supply positive terminal to the VDD pad of the EV kit.
- 4) With  the  audio  source  disabled,  connect  the  left channel of the audio source to the INL+ pad.
- 5) Connect the right channel of the audio source to the INR+ pad.
- 6) Connect the audio source ground to the GND test pad.
- 7) Connect  the  first  speaker  across  the  OUTL+  and OUTL- test points.
- 8) Connect  the  second  speaker  across  the  OUTR+ and OUTR- test points.
- 9) Enable the power-supply output.
- 10)  Enable the audio source.
- 11)  Verify  that  the  speakers  are  playing  the  audio source signal.

JU1, JU4:  Installed (single-ended input)

JU2:

Pins 1-2 (device enabled)

JU3:

Pins 1-3 (12dB gain)

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98303 Evaluation Kit

## Shutdown Input ( SHDN )

Table 3. JU3 Jumper Selection (GAIN)

The  EV  kit  features  3-pin  jumper  JU2  to  control  the active-low shutdown input. Drive SHDN high to place the device in normal operation; drive SHDN low to place the device in the low-power shutdown mode. See Table 2 for shunt positions.

## Selectable Gain (GAIN)

The  EV  kit  features  5-pin  jumper  JU3  to  control  the device's five programmable gain settings. See Table 3 for gain-control configuration.

## Table 2. JU2 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN          | DEVICE OPERATION   |
|------------------|-------------------|--------------------|
| 1-2*             | Connected to PVDD | Normal operation   |
| 2-3              | Connected to GND  | Shutdown mode      |

<!-- image -->

| SHUNT POSITION   | GAIN PIN                                     |   MAXIMUM GAIN (dB) |
|------------------|----------------------------------------------|---------------------|
| 1-2              | Connected to PVDD through 100k I resistor R1 |                   9 |
| 1-3*             | Connected to PVDD                            |                  12 |
| 1-4              | Connected to GND through 100k I resistor R2  |                  15 |
| 1-5              | Connected to GND                             |                  18 |
| Not installed    | Unconnected                                  |                   6 |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX98303 Evaluation Kit

Figure 1. MAX98303 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX98303 Evaluation Kit

<!-- image -->

Figure 2. MAX98303 EV Kit Component Placement GuideComponent Side

Figure 3. MAX98303 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98303 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX98303 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->