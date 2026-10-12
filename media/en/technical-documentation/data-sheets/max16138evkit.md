<!-- lastmod 2022-08-04 -->
## MAX16138 Evaluation Kit

## General Description

The  MAX16138  evaluation  kit  (EV  kit)  is  designed  to evaluate the MAX1613800/VY, a 0.7% accuracy, windowdetector supervisory reset IC with BIST (Built-In Self-Test) capability and overvoltage fault output in an 8-pin TDFN package. A number of test points are provided to facilitate device evaluation. The EV kit is fully assembled and tested over the automotive temperature range of -40°C to +125°C and is available with the MAX1613800/VY+ installed.

## Features

- 1.71V to 5.5V Supply Voltage Range
- Push-Button Switch to Clear OV Latch
- Proven 2-Layer 2oz Copper PCB Layout
- Automotive Temperature Range: -40°C to +125°C
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX16138 EV Kit Files

| FILE                                 | DESCRIPTION                      |
|--------------------------------------|----------------------------------|
| max16138_evkit_p1_Schematic.pdf      | EVKIT schematic                  |
| MAX16138_EVKIT_P1_MARKETING _PCB.PDF | EVKIT schematic EVKIT PCB LAYOUT |
| build_bom_max16138_evkit_p1.csv      | EVKIT Bill of Materials          |
| max16138_evkit_p1_odb.tgz            | EVKIT ODB                        |

EVKIT

ODB

Ordering Information appears at end of data sheet .

## EV Kit Photo

<!-- image -->

## Evaluates: MAX16138

## Quick Start

## Required Equipment

- MAX16138 EV kit
- Two 5V DC power supplies
- One Digital Multimeter (DMM)
- 4-Channel Scope Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution:  Do  not turn on  power  supply  until all connections are completed.

1. Verify  that  the  shunt  is  installed  onto  its  respective default position for jumper J1 ( Table 1 ).
2.  Connect one of the 5V power supply between the VDD and GND terminal posts.
3.  Connect  the  other  5V  power  supply  between  the VMON and GND terminal posts.
4.  Connect the DMM between VMON and GND posts.
5.  Connect channel 1 probe of the oscilloscope to RST, channel 2 of the oscilloscope to OV ,  channel 3 of the oscilloscope to CLR/BIST , and channel 4 of the oscilloscope to BIST of the EV kit.
6.  Turn on the power supply.
7.  Manually  increase  the  power  supply  connected  from VDD to GND to 5V.
8.  Manually  increase  the  power  supply  connected  from VMON to GND to 0.85V. Verify RST , OV and CLR/BIST trace on the scope pulled up to 5V.
9.  Slowly  Increase  VMON  voltage  while  monitoring  the voltage on the DMM. When VMON reading on DMM is past 0.884V, RST, OV, should assert low while CLR/BIST and BIST are pulled up to 5V pull-up supply.
10.  Slowly  bring  VMON  voltage  below  the  0.884V  and verify that RST deasserts while OV is latched low.
11.  Push the PB switch momentarily to ground and verify OV latched is cleared. The EV kit is ready to for further evaluation. Refer to device datasheet for specification and functional detail.

## Table 1. Jumper J1 Connection Guide

| JUMPER   | SHUNT POSITION   | FEATURE                                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | V NR = VDD (through pull-up resistor R1). BIST is completed without the device pulling RST low when performing BIST during normal operation. |
| J1       | 2-3              | V NR = GND (through pull-down resistor R2). BIST is completed with the device pulling RST low when performing BIST during normal operation.  |

## Detailed Description

The MAX16138 evaluation kit (EV kit) evaluates the MAX1613800/VY, a 0.7% accuracy, window-detector supervisory reset IC with BIST (Built-In Self Test) capability and overvoltage fault output. OV , RST and BIST are open-drain outputs and are pulled up to VDD with external resistors. An optional capacitor (C2) provides additional filtering capability at IN and a jumper (J1) facilitates configuration of BIST during normal operation.

## CLR/BIST Push-Button Switch

The EV kit includes a push button switch to clear overvoltage latched output when the input exceeds the overvoltage threshold. The overvoltage fault clears on the falling edge of the CLR/BIST . In addition, the push-button switch allows the MAX16138 to perform BIST operation during normal operation when CLR/BIST is pulled low for more than 150µs (min). See Table 1 and refer to the device datasheet for more detail.

## NR Jumper (J1)

Jumper (J1) allows the MAX16138 to perform BIST either with pulling RST low or without pulling RST low during normal operation after power-up. See Table 1 for jumper settings.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16138EVKIT# | EV Kit |

#Denotes RoHS-compliant.

## MAX16138 EV Kit Bill of Materials

| PART                                       |   QTY | DESCRIPTION                                                                                                      |
|--------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| C1                                         |     1 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata: GRM188R71E104KA01 TDK: C1608X7R1E104K080AA; C0603C104K3RAC |
| C2                                         |     1 | Not installed, capacitor (0603)                                                                                  |
| VDD, VMON, GND                             |     3 | 20G tinned copper bus wire from / into 'U' shaped loops (0.25in off the PCB)                                     |
| VDD, OV , RST , BIST , CLR/BIST , GND (X2) |     7 | Test points Vero Technologies                                                                                    |
| J1                                         |     1 | 3-pin headers, 0.1in centers                                                                                     |
| PB                                         |     1 | 15V, 20mA 100Ω SPST push-button switch Panasonic: EVQ-Q2K03W                                                     |
| R1-R3                                      |     1 | 10kΩ ±5% (0603)                                                                                                  |
| U1                                         |     1 | MAX1613800/VY+                                                                                                   |
| -                                          |     1 | Shunts                                                                                                           |
| -                                          |     1 | PCB: MAX16138 EVALUATION KIT                                                                                     |

## Evaluates: MAX16138

## MAX16138 EV Kit Schematic

<!-- image -->

## MAX16138 Evaluation Kit

## Evaluates: MAX16138

## MAX16138 EV Kit PCB Layout

MAX16138 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX16138 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## MAX16138 Evaluation Kit

MAX16138 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX16138 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## Evaluates: MAX16138

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION        | PAGES CHANGED   |
|-------------------|-----------------|--------------------|-----------------|
|                 0 | 3/22            | Initial release    | -               |
|                 1 | 4/22            | Added EV kit photo | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX16138 Evaluation Kit