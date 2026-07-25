<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX98302 Evaluation Kit

## General Description

## Features

The MAX98302 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX98302  stereo 2.4W  Class  D  amplifier.  The  EV  kit  operates  from  a single 2.6V to 5.5V DC power supply. The EV kit accepts a differential  or  single-ended  audio  input  and  provides differential outputs for the speaker. The device outputs can  be  connected  directly  to  a  speaker  load  for  filterless applications; however, a filter can be added to ease evaluation.

- S 2.6V to 5.5V Single-Supply Operation
- S Single-Ended or Differential Audio Input
- S Five Selectable Gains
- S Filterless Operation
- S Optional Class D Output Filters for Ease of Evaluation
- S Low-Power Shutdown Input
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98302EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                             |
|------------------|-------|-------------------------------------------------------------------------|
| C1               |     1 | 10 F F Q 20%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A106K    |
| C2               |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K   |
| C3, C4, C17, C18 |     4 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R61A105K    |
| C5, C6, C20, C21 |     0 | Not Installed, capacitors (0603)                                        |
| C7-C16           |    10 | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K |
| FB1-FB4          |     4 | 0 I Q 5% resistors (0603)                                               |
| JU1, JU4         |     2 | 2-pin headers                                                           |

| DESIGNATION    |   QTY | DESCRIPTION                                                                          |
|----------------|-------|--------------------------------------------------------------------------------------|
| JU2            |     1 | 3-pin header                                                                         |
| JU3            |     1 | 5-pin header                                                                         |
| L1-L4          |     0 | Not installed, 22 F H Q 20%, 1.29A inductors TOKO A916CY-220M (provided with EV kit) |
| OUTL+, OUTR+   |     2 | Red multipurpose test points                                                         |
| OUTL-, OUTR-   |     2 | White multipurpose test points                                                       |
| R1, R2         |     2 | 100k I Q 5% resistors (0603)                                                         |
| R3, R4, R7, R8 |     4 | 22 I Q 5% resistors (0603)                                                           |
| U1             |     1 | 2W Class D amplifier (14 TDFN-EP*) Maxim MAX98302ETD+                                |
| -              |     4 | Shunts                                                                               |
| -              |     1 | PCB: MAX98302 EVALUATION KIT+                                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98302 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98302 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.6V to 5.5V, 2A DC power supply
- Stereo audio input
- Two 8 I speakers

## Detailed Description of Hardware

## Filterless Output

The  MAX98302  EV  kit's  filterless  outputs  (OUTL+, OUTL-, OUTR+, and OUTR-) can be connected directly to a speaker load without any filtering. Use the OUTL+ and  OUTL-  test  points  or  the  OUTR+  and  OUTR-  test points to connect the speaker directly to the MAX98302 output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs.  Therefore,  the  EV  kit  features  optional  lowpass filters  at  the  outputs  to  ease  evaluation.  To  use  the filtering  output  pads  (FOUTL+,  FOUTL-,  FOUTR+,  and FOUTR-),  install  inductors  L1-L4  (provided  separately with  the  EV  kit),  connect  the  loads  to  the  output  pads, and connect the filtered outputs to the audio analyzer. The default lowpass filters at the EV kit output are optimized for an 8Ω speaker.

## Jumper Selection

## Single-Ended/Differential Audio Inputs

The  EV  kit  features  jumpers  JU1  and  JU4  to  select between a differential or single-ended input mode. See Table 1 for shunt positions.

## Table 1. JU1 and JU4 Jumper Selection

| SHUNT POSITION   | IN_- PIN                                                 | DEVICE OPERATION   |
|------------------|----------------------------------------------------------|--------------------|
| Installed*       | AC-grounded                                              | Single-ended input |
| Not installed    | AC-coupled to user- supplied negative differential input | Differential input |

## Procedure

The  MAX98302  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that shunts are installed as follows:

JU1, JU4: Installed (single-ended input)

JU2: Pins 1-2 (device enabled)

JU3: Pins 1-3 (12dB gain)

- 2) Set  the  power-supply  output  to  5V.  Disable  the power supply.
- 3) Connect  the  power-supply  ground  terminal  to  the GND pad and the power-supply positive terminal to the PVDD pad on the EV kit.
- 4) With  the  audio  source  disabled,  connect  the  left channel of the audio source to the INL+ test pad.
- 5) Connect the right channel of the audio source to the INR+ test pad.
- 6) Connect the audio source ground to the GND test pad.
- 7) Connect  the  first  speaker  across  the  OUTL+  and OUTL- test points.
- 8) Connect  the  second  speaker  across  the  OUTR+ and OUTR- test points.
- 9) Enable the power-supply output.
- 10)  Enable the audio source.
- 11)  Verify that the speakers are playing the audio source signal.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98302 Evaluation Kit

## Shutdown Function ( SHDN )

The  EV  kit  features  3-pin  jumper  JU2  to  control  the active-low shutdown input. Drive SHDN high to place the device in normal operation. Drive SHDN low to place the device in the low-power shutdown mode. See Table 2 for shunt positions.

## Table 2. JU2 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN          | DEVICE OPERATION   |
|------------------|-------------------|--------------------|
| 1-2*             | Connected to PVDD | Normal operation   |
| 2-3              | Connected to PGND | Shutdown mode      |

<!-- image -->

## Selectable Gain (GAIN)

The  EV  kit features 5-pin jumper  JU3  to control the  MAX98302's five  programmable  gain  settings.  See Table 3 for gain control configuration.

Table 3. JU3 Jumper Selection (GAIN)

| SHUNT POSITION   | GAIN PIN                                     |   MAxIMUM GAIN (dB) |
|------------------|----------------------------------------------|---------------------|
| 1-2              | Connected to PVDD through 100k I resistor R1 |                   9 |
| 1-3*             | Connected to PVDD                            |                  12 |
| 1-4              | Connected to PGND through 100k I resistor R2 |                  15 |
| 1-5              | Connected to PGND                            |                  18 |
| Not installed    | Unconnected                                  |                   6 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX98302 Evaluation Kit

Figure 1. MAX98302 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX98302 Evaluation Kit

<!-- image -->

Figure 2. MAX98302 EV Kit Component Placement GuideComponent Side

Figure 3. MAX98302 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98302 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX98302 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600