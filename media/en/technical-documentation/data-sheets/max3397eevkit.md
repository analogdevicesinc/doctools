<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3397E evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the capabilities of the MAX3397E ESDprotected, dual bidirectional low-level translator. The MAX3397E allows data translation in either direction (VL ↔ VCC) on any single data line. The MAX3397E EV kit accepts VL from +1.2V to +5.5V and VCC from +1.65V to +5.5V. The EV kit comes with the MAX3397EELA+ installed.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C3            |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K    |
| JU1           |     1 | 3-pin header                                                        |
| R1            |     1 | 10k Ω ±5% resistor (0603)                                           |
| U1            |     1 | MAX3397EELA+ (8-pin µDFN, 2mm x 2mm)                                |
| -             |     1 | PCB: MAX3397E Evaluation Kit+                                       |

## Component Supplier

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX3397E when contact- ing this component supplier.

## Features

- ♦ Jumper-Selectable Enable/Shutdown Configuration
- ♦ +1.2V to +5.5V Supply Range for VL
- ♦ +1.65V to +5.5V Supply Range for VCC
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX3397EEVKIT+ | EV Kit |

## MAX3397E Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One +5V DC power supply
- One +3.3V DC power supply
- One function generator
- One oscilloscope

## Detailed Description of Hardware

The MAX3397E is an ESD-protected, dual bidirectional low-level translator.  The  MAX3397E EV kit board provides a proven layout for evaluating the MAX3397E. The EV kit comes with a MAX3397EELA+ installed.

## Enable/Shutdown Control

Place the shunt on pin 1-2 of JU1 (as shown in Table 1) to drive the EN pin of the MAX3397E high and to enable the device. Place the shunt on pin 2-3 of JU1 to drive the EN pin of the MAX3397E low and to put the device in shutdown state.

## Table 1. Jumper JU1 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU1      | 1-2*             | Enable        |
| JU1      | 2-3              | Shutdown      |

## Procedure

The MAX3397E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Turn off the +5V DC and +3.3V DC power supplies.
- 2) Turn off the function generator.
- 3) Make sure the shunt is on pin 1-2 of JU1.
- 4) Connect the positive (+) terminal of the +5V DC power supply to the VCC pad and connect the negative (-) terminal to the adjacent GND pad.
- 5) Connect the positive (+) terminal of the +3.3V DC power supply to the VL pad and connect the negative (-) terminal to the adjacent GND pad.
- 6) Connect the positive (+) terminal of the function generator to I/OVCC1 pad of the MAX3397E EV kit. Connect the negative (-) terminal of the DC signal source to the GND pad.
- 7) Turn on the +5V DC and +3.3V DC power supplies.
- 8) Turn on the function generator.
- 9) Set the function generator to a 5VP-P, 1MHz, 2.5V DC offset square wave.
- 10) Use the oscilloscope to measure the I/O VL1 output at pin 5. Verify that the waveform is a 1MHz square wave and is approximately 3.3 VP-P with 1.625V DC offset.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power Supply

The MAX3397E accepts VL from +1.2V to +5.5V and VCC from +1.65V to +5.5V. The voltage on VL must be less than or equal to the voltage on VCC.

When VL is connected and VCC is disconnected or connected to ground, the device enters shutdown mode. In this mode, I/O VL can still be driven without damage to the device; however, data does not translate from I/O VL to I/O VCC. If VCC falls more than +0.8V (typ) below VL, the device disconnects the pullup resistors at I/O VL and I/O VCC. To achieve the lowest possible supply current from VL when VCC is disconnected, it  is  recommended that the voltage at the VCC supply input be approximately equal to GND.

<!-- image -->

## MAX3397E Evaluation Kit

<!-- image -->

Figure 1. MAX3397E EV Kit Schematic

Figure 2. MAX3397E EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX3397E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3397E Evaluation Kit

Figure 4. MAX3397E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600