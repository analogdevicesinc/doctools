<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX97200A Evaluation Kit

## General Description

## Features

The  MAX97200A  evaluation  kit  (EV  kit) is a fully assembled and tested circuit  board  that  evaluates  the MAX97200A. The MAX97200A is a 20mW Class G headphone amplifier that employs Maxim's second-generation DirectDrive M technology.

The MAX97200A EV kit provides 3dB gain, is powered from a 1.8V single power supply, and includes a shutdown input. The MAX97200A EV kit also evaluates the MAX97200B.  Request  a  free  MAX97200B  IC  sample from the factory when ordering the MAX97200B EV kit.

- S 1.8V Single-Supply Operation
- S 20mW Class G Headphone Amplifier
- S 3dB Gain
- S Low-Quiescent Current, 1.15mA at PVIN = 1.8V
- S Low-Power Shutdown Input
- S Evaluates the MAX97200B (with IC Replacement)
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX97200AEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M TDK C1608X5R0J106M |
| C2            |     1 | 0.1 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K TDK C1608X7R1E104K |
| C3-C7         |     5 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K  |

| DESIGNATION                 |   QTY | DESCRIPTION                                               |
|-----------------------------|-------|-----------------------------------------------------------|
| GND, OUTL, OUTR, PVDD, PVSS |     5 | Test points                                               |
| J1                          |     1 | 3.5mm stereo headphone jack                               |
| JU1                         |     1 | 2-pin header                                              |
| R1                          |     1 | 10k I Q 5% resistor (0603)                                |
| U1                          |     1 | Class G headphone amplifier (12 WLP) Maxim MAX97200AEWC+T |
| -                           |     1 | Shunt                                                     |
| -                           |     1 | PCB MAX97200A EVALUATION KIT+                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX97200A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

## MAX97200A Evaluation Kit

## Quick Start

## Recommended Equipment

- 1.8V	DC	supply
- Stereo	audio	signal	source
- Pair	of	stereo	headphones
- 7) Connect the left channel of the stereo audio source to INL.
- 8) Connect  the  right  channel  of  the  stereo  audio source to INR.
- 9) Connect the ground of the stereo audio source to GND.
- 10)  Enable the stereo audio source.
- 11)  Enable the power-supply output.
- 12)  Verify  that  the  headphones  are  playing  the  audio source signal.

## Jumper Configuration

## Headphone Amplifier Shutdown

Jumper JU1 enables or disables the headphone amplifier. See Table 1 for jumper JU1 configuration.

## Table 1. Shutdown Input (JU1)

| SHUNT POSITION   | SHDN PIN         | AMPLIFIER   |
|------------------|------------------|-------------|
| Installed*       | Connected to VIN | Enabled     |
| Not installed    | Connected to GND | Disabled    |

## Procedure

The  MAX97200A  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that shunts are installed as follows:
2. JU1: Installed (device enabled)
- 2) Set the power-supply output to 1.8V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the GND pad and the power-supply positive output to the VIN pad on the EV kit.
- 5) Connect the headphones to the stereo headphone jack (J1) provided on the EV kit.
- 6) Verify that the audio source output is disabled.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX97200A Evaluation Kit

Figure 1. MAX97200A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX97200A Evaluation Kit

<!-- image -->

Figure 2. MAX97200A EV Kit Component Placement Guide-Component Side

Figure 3. MAX97200A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX97200A EV Kit PCB Layout-Layer 2

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX97200A Evaluation Kit

Figure 5. MAX97200A EV Kit PCB Layout-Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX97200A EV Kit PCB Layout-Solder Side

5