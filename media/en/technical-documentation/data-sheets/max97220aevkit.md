<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX97220A Evaluation Kit

## General Description

## Features

The MAX97220A evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX97220A differential  input  DirectDrive ®   line  driver/headphone amplifier. The device is capable of driving 125mW into 32 I , or 3VRMS into 600 I load, with a 5V supply.

The EV kit provides an externally set gain, is powered  from  a  2.5V  to  5.5V  single  power  supply, and  includes  a  shutdown  input.  The  EV  kit  also  evaluates  the  MAX97220B,  MAX97220C,  and  MAX97220D devices. Request a free MAX97220B, MAX97220C, and/ or MAX97220D IC sample from the factory when ordering the EV kit.

- S 2.5V to 5.5V Single-Supply Operation
- S 3VRMS Output Drive Into 600 ω Load
- S 125mW Headphone Amplifier
- S Fully Differential Inputs
- S Externally Adjustable Gain
- S Low-Power Shutdown Input
- S Evaluates the MAX97220B, MAX97220C, and MAX97220D (with IC Replacement)
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX97220AEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2, C7    |     3 | 0.1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K  |
| C3-C6         |     4 | 0.47 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E474K TDK C1608X5R1E474K |
| C8, C9        |     2 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K    |
| C10           |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M TDK C1608X5R0J106M   |

| DESIGNATION     |   QTY | DESCRIPTION                                                          |
|-----------------|-------|----------------------------------------------------------------------|
| C11-C16         |     0 | Not installed, ceramic capacitors (0603)                             |
| HP_OUT          |     1 | 3.5mm stereo headphone jack                                          |
| JU1             |     1 | 2-pin header                                                         |
| OUTL, OUTR, GND |     3 | Test points                                                          |
| OUTL            |     1 | White headphone jack                                                 |
| OUTR            |     1 | Red headphone jack                                                   |
| R1-R8           |     8 | 10k I Q 1% resistors (0603)                                          |
| R9              |     1 | 100k I Q 5% resistor (0603)                                          |
| U1              |     1 | Differential input headphone amplifier (16 TQFN) Maxim MAX97220AETE+ |
| -               |     1 | Shunts                                                               |
| -               |     1 | PCB MAX97220A EVALUATION KIT+                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX97220\_ when contacting these component suppliers.

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX97220A Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX97220A EV kit
- 2.5V to 5.5V DC supply
- Stereo audio signal source
- Pair of stereo headphones
- 9) Connect the right output of the audio source to the INR- pad.
- 10) Connect the ground of the audio source to the INR+ pad.
- 11) Enable the stereo audio source.
- 12) Enable the power-supply output.
- 13) Verify  that  the  headphones  are  playing  the  audio source signal.

## Detailed Description

The MAX97220A EV kit features the MAX97220A differential stereo headphone driver with DirectDrive, designed to directly drive a 125mW into a 32 I stereo headphone. The EV kit  operates  from  a  DC  power  supply  that  can provide 2.5V to 5.5V and accepts two sets of differential audio inputs.

## Headphone Amplifier Shutdown

Jumper JU1 enables or disables the headphone amplifier. See Table 1 for jumper JU1 configuration.

## MAX97220C/MAX97220D Usage

When replacing the MAX97220A with either the MAX97220C  or  MAX97220D,  several  external  components must be changed. R1-R4 should be replaced with 0ω resistors. R5-R8 should be removed from the PCB. C11-C16 should be left uninstalled (same as the default EV kit setting).

## Table 1. Shutdown Input (JU1)

| SHUNT POSITION   | SHDN PIN                    | AMPLIFIER   |
|------------------|-----------------------------|-------------|
| Installed*       | Connected to VDD            | Enabled     |
| Not installed    | Connected to GND through R9 | Disabled    |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (device enabled).
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the GND pad and  the  power-supply  positive  output  to  the  VDD pad on the EV kit.
- 5) Connect headphones to the stereo headphone jack (HP\_OUT) provided on the EV kit.
- 6) Verify that the audio source output is disabled.
- 7) Connect the left output of the audio source to the INL- pad.
- 8) Connect the ground of the audio source to the INL+ pad.

<!-- image -->

## MAX97220A Evaluation Kit

Figure 1. MAX97220A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX97220A Evaluation Kit

<!-- image -->

Figure 2. MAX97220A EV Kit Component Placement GuideComponent Side

Figure 3. MAX97220A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX97220A EV Kit PCB Layout-Solder Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX97220A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.