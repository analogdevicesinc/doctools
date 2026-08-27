<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX2406 evaluation kit (EV kit) simplifies testing of the  MAX2406. This EV kit allows the evaluation of the low-noise amplifier (LNA) as well as the receive downconverter mixer.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                   |   QTY | DESCRIPTION                             |
|-------------------------------|-------|-----------------------------------------|
| C1, C2                        |     2 | 47pF ceramic capacitors                 |
| C3, C7, C8, C13               |     4 | 220pF ceramic capacitors                |
| C4, C5, C11, C12              |     4 | 1000pF ceramic capacitors               |
| C6, C15                       |     2 | 1pF ceramic capacitors                  |
| C9                            |     1 | 10µF tantalum capacitor AVX TAJC106K016 |
| C10, C14                      |     2 | 0.1µF ceramic capacitors                |
| IF, LNAIN, LO, LNAOUT, RXMXIN |     5 | SMA connectors (PC edge mount)          |
| JU1                           |     1 | 3-pin header                            |
| L1, L2, L6, L7                |     4 | 27nH inductors Coilcraft 1008CS-270XMBC |
| L3                            |     1 | 4:1 balun Toko 617DB-1010 type B4F      |
| L4                            |     0 | Not installed                           |
| L5                            |     1 | 4.7nH inductor Toko LL2012-F4N7S        |
| R1                            |     1 | 1k Ω resistor                           |
| R2, R3                        |     2 | 0 Ω resistors                           |
| R4                            |     0 | Not installed                           |
| U1                            |     1 | MAX2406EEP (20 QSOP)                    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE/ FAX                     | INTERNET                 |
|------------|--------------------------------|--------------------------|
| Coilcraft  | (847) 639-6400/ (847) 639-1469 | http://www.coilcraft.com |
| AVX        | (803) 946-0690/ (803) 626-3123 | http://www.avxcorp.com   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +2.7V to +5.5V Single-Supply Operation
- ' 50 Ω SMA Inputs and Outputs on RF, IF, and LO Ports
- ' Allows Testing of Shutdown Mode
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2406EVKIT | -40°C to +85°C | 20 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2406 is fully assembled and factory tested. Follow these instructions for initial evaluation of the MAX2406.

## Test Equipment Required

This section lists the test equipment recommended for verifying operation of the MAX2406. It is intended as a guide only; some substitutions may be possible.

- Two RF signal generators capable of delivering at least  0dBm of output power at frequencies up to 2GHz (HP8648C or equivalent). One generator is required for the local oscillator (LO) source; the other is required for the mixer input. Only one generator is required to operate the LNA.
- An RF spectrum analyzer that covers the MAX2406's operating frequency range (HP8561E, for example).
- A power supply that can provide up to 100mA at 2.7V to 5.5V.
- An ammeter for measuring the supply current (optional).
- Several 50 Ω SMA cables.

## Connections and Setup

This section provides a step-by-step guide to getting the EV kit operational and testing both the LNA and the receive mixer. Do not turn on the DC power or RF signal generators until all connections have been made.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX2406 Evaluation Kit

## Low-Noise Amplifier

- 1) Set the RXEN jumper (JU1) on the EV kit to the 'logic 1' position. This enables the MAX2406.
- 2) Connect a DC supply set to 3V (through an ammeter, if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.
- 3) Connect one RF signal generator to the LNAIN SMA connector. Do not turn on the generator's output. Set the generator for an output frequency of 1.9GHz and a power level of -40dBm.
- 4) Connect a spectrum analyzer to the LNAOUT SMA connector on the EV kit. Set the spectrum analyzer to  a  center  frequency of 1.9GHz, a total span of 200MHz, and a reference level of 0dBm.
- 5) Turn on the DC supply; the supply current should read approximately 20mA (if using an ammeter).
- 6) Activate the RF generator's output. A 1.9GHz signal shown on the spectrum analyzer's display should indicate a typical gain of 16dB after accounting for cable losses.
- 7) If  desired,  the  shutdown  feature  can  be  tested  by moving the RXEN jumper (JU1) into the 'logic 0' position. This disables the part and reduces the supply current to typically 0.1µA.

## Receive Downconverter Mixer

- 1) Remove the RF signal generator and spectrum analyzer  from  the  LNAIN  and  LNAOUT connections, if necessary. The DC supply connections needed for testing the downconverter mixer are the same as in the LNA section.
- 2) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 1.5GHz and the output power to -10dBm. This is the LO signal.
- 3) Connect the other RF signal generator (with the output disabled) to the RXMXIN SMA connector. Set the frequency to 1.9GHz and the amplitude to -30dBm.
- 4) Connect the spectrum analyzer to the IF SMA connector. Set the spectrum analyzer to a 400MHz center  frequency, a 200MHz total span, and a 0dBm reference level.
- 5) Turn on the LO signal generator and the RF signal generator.
- 6) The downconverted output signal at 400MHz is visible on the spectrum analyzer, indicating a mixer conversion gain of 8.4dB after accounting for cable and balun losses. The balun loss is typically 1dB at 400MHz.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

This section describes the MAX2406 EV kit circuitry. For more detailed information about the operation of the device itself, please consult the MAX2406 data sheet.

## Low-Noise Amplifier

The LNA circuitry consists of two DC-blocking capacitors: one at the input (C13) and one at the output (C8). A shunt capacitor (C15) provides a simple matching network to improve the input return loss.

## Local Oscillator

The MAX2406 EV kit's LO input requires only a DC blocking capacitor (C3). No other circuitry is needed. For more information on the LO port, including the optional use of a differential LO source, consult the MAX2406 data sheet.

## Mixer Input

The receiver mixer's input (RXMXIN) requires a simple matching network. Capacitor C6 and inductor L5 are used to match the input pin to 50 Ω ,  while  C7  provides DC blocking.

## IF Output

The MAX2406 has a differential IF output port (IF and IF ) that can be used either in a differential or single-ended configuration. The EV kit uses a differential configuration. The balun (L3) converts the MAX2406's differential output signal into a single-ended signal compatible with 50 Ω test equipment. The balun is not required in a typical application. Inductors L1, L2, L6, and L7 provide DC bias and an impedance-matching network. Please note that the matching network is frequency selective and must be changed for operation at other IF frequencies. Consult the MAX2406 data sheet for a plot of IF output impedance versus frequency. Capacitors C4 and C5 provide DC blocking. The balun (L3) provides the differential to single-ended conversion with about 1dB of loss at 400MHz. The IF output signal is then connected to the IF SMA connector. Resistors R2 and R3 (0 Ω ) and inductor L4 (not installed) are provided as pads on the EV kit's PC board layout for experimentation, if desired.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Layout

A good PC board layout is an essential part of an RF circuit  design.  The  EV  kit's  PC  board  can  serve  as  a guide for laying out a board using the MAX2406.

Each VCC node on the PC board has its own decoupling capacitor. This minimizes supply coupling from one section of the MAX2406 to another. A star topology for  the  supply  layout,  in  which  each  VCC node on the MAX2406 circuit has a separate connection to a central VCC node, can further minimize coupling between the LNA and mixer sections of the MAX2406.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX2406 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2406 Evaluation Kit

<!-- image -->

Figure 2.  MAX2406 EV Kit Layout-Top Silk Screen and Pad Placement

<!-- image -->

Figure 4.  MAX2406 EV Kit Layout-Ground Plane (layer 2)

Figure 3.  MAX2406 EV Kit Layout-Component Side

<!-- image -->

Figure 5.  MAX2406 EV Kit Layout-Bottom Side (solder side) (layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1997 Maxim Integrated Products