<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX2602 evaluation kit (EV kit) simplifies the evaluation of the MAX2602 1W RF power transistor for 900MHz band applications. The EV kit demonstrates the MAX2602 in a 3.6V, 836MHz, 1W (30dBm) RF power amplifier for constant-envelope applications.

The EV kit is shipped with a MAX2602, which contains an internal biasing diode. With a simple modification, the MAX2602 EV kit can be used to emulate the MAX2601, which does not have an internal biasing diode.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                  |
|-----------------|-------|--------------------------------------------------------------|
| C1, C2          |     2 | 2pF surface-mount capacitors                                 |
| C3              |     1 | 10pF surface-mount capacitor                                 |
| C4              |     1 | 12pF surface-mount capacitor                                 |
| C5-C8, C11, C12 |     6 | 1000pF surface-mount capacitors                              |
| C9, C11         |     2 | 0.1µF surface-mount capacitors                               |
| L1              |     1 | 100nH surface-mount inductor                                 |
| L2              |     1 | 18.5nH surface-mount spring inductor Coilcraft A05T (Note 1) |
| R1              |     1 | 430 Ω surface-mount resistor                                 |
| R2              |     1 | 24 Ω surface-mount resistor                                  |
| R3              |     1 | 0 Ω resistor                                                 |
| IN, OUT         |     2 | Edge-mount SMA connectors                                    |
| U1              |     1 | MAX2602ESA (8-pin, thermally enhanced SO)                    |
| None            |     1 | MAX2601/MAX2602 data sheet                                   |
| None            |     1 | Printed circuit board                                        |

Note 1: Contact Coilcraft by phone at (800) 322-2645, by fax at (847) 639-1469, or on the World Wide Web at http://www.coilcraft.com.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 1W (30dBm) Output Power at 836MHz
- ' 50 Ω Inputs and Outputs
- ' +2.7V to +5.5V Supply Range
- ' 11dB Gain at 836MHz

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX2602EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The following section provides instructions for setting up the MAX2602 EV kit as a 1W RF power amplifier.

## Test Equipment Required

- RF signal generator capable of at least 20dBm of output power at 836MHz
- Attenuator that can handle at least 30dBm (1W) of RF power (used to protect the test equipment)
- RF spectrum analyzer for use at 836MHz (alternatively, a power meter can be used)
- DC power supply capable of delivering 1A at +2.7V to +5.5V

## Connections and Setup

Follow these steps for connecting the EV kit:

- 1) Connect a 50 Ω RF signal generator capable of supplying at least 20dBm at 836MHz to the RF input SMA connector ('IN'). Set the generator's initial output to a much lower power (-10dBm, for instance). Keep this generator's RF output off at this time.
- 2) Connect a fixed attenuator that can handle 1W of power to the output SMA connector ('OUT'). This attenuator reduces the power to the test equipment and protects it from overload. Connect this attenuator's output to a spectrum analyzer that is set to display 836MHz. It may be possible to set a referencelevel  offset  on  the  analyzer  to  compensate  for  the attenuator. Consult your spectrum analyzer's manual for details.
- 3) Set the power supply to +3.6V with a 1A current limit. Disable the output. Connect the power supply to the VC terminal on the EV kit through an ammeter.

1

## MAX2602 Evaluation Kit

- 4) Connect the same power supply through a separate lead to the EV kit's VB terminal.
- 5) Verify  that  all  the  connections  are  correct  to  avoid damaging the transistor or your test equipment.
- 6) Turn on the 3.6V supply. Note the supply current with the RF generator off. It should be around 100mA.
- 7) Activate the RF signal generator and slowly increase the generator's output power to 20dBm. At this  time,  the  supply current should be about 500mA, and the output power should be 30dBm.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

Figure 1 is the schematic for the MAX2602 EV kit as shipped. The circuit consists of four blocks: power-supply decoupling, a bias network, and both input and output matching networks. The amplifier built on this board is biased for class AB operation at 1W of output power, and provides high efficiency.

## Supply Decoupling Circuitry and Grounding

Capacitors C8 and C10 provide decoupling for VC. The collector has two separate pins: one for the VC input (connected through choke L2), and one for the RF output.

The most important contact for the MAX2602 is not on the top of the board; it is the bottom-side emitter contact  that  is  connected  to  ground.  This  contact  keeps emitter inductance as low as possible, as excessive emitter inductance can degrade the performance of any RF common-emitter amplifier. The bottom-side contact is also the principal path for heat dissipation, and must be connected to a large ground plane.

## Biasing

Capacitors C5, C9, and C11 provide decoupling for the bias supply. The transistor's bias current is set by the internal  biasing  diode's  current.  This  current  is  set  by the following equation:

<!-- formula-not-decoded -->

The collector current is scaled to the bias current: IC = 15IB. R3 is used as a jumper. The transistor's base is biased through R2 and L1 (a choke). For more information on the internal biasing diode's operation, refer to the MAX2601/MAX2602 data sheet.

## Input Matching Network

The transistor's RF input does not present a 50 Ω impedance, so a matching network is required for proper  operation  in  a  50 Ω environment. This network consists  of  capacitor  C1  to  ground,  approximately  1  inch (or  2.5cm) of the 50 Ω transmission line (T1), a DCblocking capacitor (C6), and a shunt capacitor at the transistor base (C4).

Figure 1.  MAX2602 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX2602 EV Kit Schematic Without the Bias Diode

<!-- image -->

## Output Matching Network

The RF output is taken from pin 8 and is not at 50 Ω impedance, so a matching network is required. The matching network consists of a shunt capacitor at the collector (C3), a DC-blocking capacitor (C7), a 50 Ω transmission line (T2), and a shunt capacitor (C2).

## Evaluating the MAX2602 Without the Biasing Diode

To evaluate the MAX2602 without the biasing diode (functionally equivalent to the MAX2601), the 0 Ω resistor  (R3)  must be removed, and the 430 Ω resistor (R1) must be replaced by a 0 Ω resistor (a short) (Figure 2). Now an external bias voltage may be connected to the EV kit's  VB input.  The  biasing  diode is  no  longer  connected, so the EV kit will not work without an external biasing voltage. To avoid damage to the MAX2602 in this mode, be sure to turn the VC supply on before the VB supply. When turning the part off, turn the VB supply off first and then the VC supply. External bias voltages ranging from 0V to 0.85V are typically used.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_Layout Considerations

For best results, use the MAX2602 EV kit as a layout guide. The most critical connection is the emitterground contact on the MAX2602's bottom side. On the EV kit,  this  contact  is  made  through a large (0.1 inch, 2.5mm diameter) plated through-hole in the board, located directly under the part. This contact must be soldered directly to a large ground plane, as it is the principal  path  for  heat  dissipation,  as  well  as  the  lowinductance emitter ground. The MAX2602 EV kit uses its ground plane as the heatsink.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2602 Evaluation Kit

<!-- image -->

Figure 3.  MAX2602 EV Kit Component Placement Guide

Figure 4.  MAX2602 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX2602 EV Kit PC Board Layout-Solder Side (ground plane and heatsink)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600