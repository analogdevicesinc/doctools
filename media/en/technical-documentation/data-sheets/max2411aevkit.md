<!-- lastmod 2022-08-02 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX2411A evaluation kit (EV kit) simplifies testing of  the  MAX2411A. This EV kit allows evaluation of the MAX2411A's low-noise amplifier (LNA), receive downconverter mixer, transmit upconverter mixer, variablegain power-amplifier (PA) driver, and power-management features.

## \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                        |
|-------------------------------------------------|-------|----------------------------------------------------|
| C1, C2                                          |     2 | 47pF ceramic capacitors, 0603 size                 |
| C3                                              |     1 | 10µF tantalum capacitor AVX TAJC106K016            |
| C4, C5, C6, C8                                  |     4 | 0.1µF ceramic capacitors, 0805 size                |
| C7, C10, C11, C16, C17, C19, C20                |     7 | 220pF ceramic capacitors, 0805 size                |
| C9, C12-C15, C18                                |     6 | 1000pF ceramic capacitors, 0805 size               |
| C21                                             |     1 | 1pF ceramic capacitor, 0603 size                   |
| C22                                             |     0 | Not installed                                      |
| L1                                              |     1 | 18nH inductor, 0805 size Coilcraft 0805CS-180XMBC  |
| L2                                              |     1 | 5.6nH inductor, 0805 size Taiyo Yuden HK16085N6S   |
| L3, L4, L11, L12                                |     4 | 27nH inductors, 0805 size Coilcraft 0805CS-270XMBC |
| L5                                              |     1 | 4:1 balun Toko 617DB-1010 Type B4F                 |
| L8, L13                                         |     2 | 3.9nH inductors, 0805 size Taiyo Yuden HK16083N9S  |
| R1, R2, R3                                      |     3 | 1k Ω resistors, 0805 size                          |
| R4, R6                                          |     0 | Not installed                                      |
| R5, R7                                          |     2 | 0 Ω resistors                                      |
| RXMXIN                                          |     1 | SMA connector (PC mount)                           |
| LNAIN, LNAOUT, IF, LO, PADRIN, PADROUT, TXMXOUT |     7 | SMA connectors (edge mount)                        |
| RXEN, TXEN, VGC                                 |     3 | 3-pin headers                                      |
| VCC, GND                                        |     2 | 2-pin headers                                      |
| U1                                              |     1 | MAX2411AEEI, 28-pin QSOP                           |

- ' +2.7V to +5.5V Single-Supply Operation
- ' 50 Ω SMA Inputs and Outputs on RF and IF Ports
- ' Allows Testing of Shutdown Mode
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART          | TEMP. RANGE    | PIN-PACKAGE   |
|---------------|----------------|---------------|
| MAX2411AEVKIT | -40°C to +85°C | 28 QSOP       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE                              | INTERNET                 |
|-----------------|------------------------------------|--------------------------|
| AVX             | (803) 946-0690/ (803) 626-3123 FAX | http://www.avxcorp.com   |
| Coilcraft       | (847) 639-6400/ (847) 639-1469 FAX | http://www.coilcraft.com |
| Taiyo Yuden USA | (408) 573-4150/ (408) 573-4159 FAX | http://www.t-yuden.com   |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2411A EV kit is fully assembled and factory tested. Follow these instructions for initial evaluation of the MAX2411A.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2411A. It is intended as a guide only, and some substitutions may be possible.

- Two RF signal generators capable of delivering 0dBm of output power at frequencies up to 2GHz (HP8648C, or equivalent).
- An RF spectrum analyzer that covers the operating frequency range of the MAX2411A as well as a few harmonics (HP8561E, for example).
- A power supply that can provide up to 100mA at +2.7V to +5.5V.
- A voltage source (0 to 5V) for adjusting the gain-control (GC) voltage on the PA driver.
- An optional ammeter for measuring the supply current.
- Several 50 Ω SMA cables.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX2411A Evaluation Kit

## Connections and Setup

This section provides a step-by-step guide for operating  the  EV  kit  and  testing  all  four  major  functions:  the LNA, receive mixer, transmit mixer, and PA driver. Do not turn on the DC power or RF signal generators until all connections are made.

## Low-Noise Amplifier

- 1) Set the RXEN jumper on the EV kit to the 'Logic 1' position and the TXEN jumper to the 'Logic 0' position. This enables the MAX2411A's receive mode.
- 2) Connect a DC supply set to 3V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.
- 3) Connect one RF signal generator with the output disabled to the LNAIN SMA connector. Set the generator for an output frequency of 1.9GHz at a power level of -40dBm.
- 4) Connect a spectrum analyzer to the LNAOUT SMA connector on the EV kit. Set it to a center frequency of 1.9GHz, a total span of 200MHz, and a reference level of 0dBm.
- 5) Turn on the DC supply. The supply current should read approximately 20mA (if using an ammeter).
- 6) Enable the RF generator's output. A signal on the spectrum analyzer's display should indicate a typical gain of 16.2dB after accounting for cable losses.
- 7) If  desired,  the  shutdown  feature  can  be  tested  by moving the RXEN jumper into the 'Logic 0' position. The supply current should drop to less than 10µA.

## Receive Downconverter Mixer

- 1) Disable the output of the RF signal generator. Turn off  the  DC  supply. Remove the RF signal generator and spectrum analyzer from the LNAIN and LNAOUT connectors. The DC supply connections needed for testing the downconverter mixer are the same as in the LNA section.
- 2) Set the RXEN jumper on the EV kit to the 'Logic 1' position and the TXEN jumper to the 'Logic 0' position. This enables the MAX2411A's receive mode.
- 3) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 1.5GHz and the output power to -10dBm. This is the LO signal.
- 4) Connect the other RF signal generator (with the output disabled) to the RXMXIN SMA connector. Set the frequency to 1.9GHz and the output power to -30dBm. This is the RF input signal.
- 5) Connect the spectrum analyzer to the IF SMA connector.  Set  the  spectrum  analyzer  to  a  400MHz center frequency, a 200MHz total span, and a 0dBm reference level.
- 6) Turn on the DC supply, LO signal generator, and RF input signal generator.
- 7) The downconverted output signal at 400MHz is visible on the spectrum analyzer, indicating a mixer conversion gain of typically 9.4dB after accounting for  cable  and  balun  losses.  The  balun  loss  is  typically 1dB at 400MHz.

## Power-Amplifier Driver

- 1) Disable the outputs of the signal generators. Turn off  the  DC supply. Remove any RF signal connections made in the above tests.
- 2) Set the RXEN jumper to the "Logic 0" position, and the TXEN jumper to the "Logic 1" position. This puts the MAX2411A in transmit mode.
- 3) Set the voltage source to be used for the gain-control (GC) voltage to 2.15V and turn it off. Connect it to the middle pin of the VGC jumper on the EV kit.
- 4) Connect to the PADRIN SMA Connector an RF signal generator with the output disabled. Set the frequency to 1.9GHz and the output power to -10dBm.
- 5) Connect the PADROUT SMA connector to the spectrum analyzer. Configure the analyzer to a center frequency of 1.9GHz, a reference level of +10dBm, and 200MHz total span.
- 6) Turn on the DC supply, VGC voltage source, and RF signal generator.
- 7) The supply current should read typically 30mA. A 1.9GHz signal should be visible on the spectrum analyzer display, indicating a typical gain of 15dB after accounting for cable losses.
- 8) Lowering the voltage on the VGC voltage source to 0 should reduce the gain typically by 35dB.

## Transmit Upconverter Mixer

- 1) Disable the outputs of the signal generators. Disconnect the VGC voltage source. Turn off the DC supply. Remove any RF signal connections made in the above tests.
- 2) Set the RXEN jumper to the "Logic 0" position, and the TXEN jumper to the "Logic 1" position. This puts the MAX2411A in transmit mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2411A Evaluation Kit

- 3) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 1.5GHz and the output power to -10dBm. This is the LO signal.
- 4) Connect the other RF signal generator (with the output disabled) to the IF SMA connector. Set the generator to a frequency of 400MHz and a power level of -32dBm. This is the IF input signal.
- 5) Connect the TXMXOUT SMA connector to the spectrum analyzer. Configure the analyzer for a center frequency of 1.9GHz, a reference level of 0dBm, and 200MHz total span.
- 6) Turn on the DC supply, LO signal generator, and IF input signal generator.
- 7) The supply current should typically read 30mA. The spectrum analyzer should show a 1.9GHz signal, indicating a conversion gain of typically 8.5dB after accounting for cable and balun losses. The balun loss is typically 1dB at 400MHz.
- 8) To observe the remainder of the TX mixer output spectrum, increase the span on the spectrum analyzer from 200MHz to 2GHz.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX2411A EV kit circuitry is described in this section. For more detailed information about the operation of the device itself, please consult the MAX2411A data sheet.

## Bidirectional IF Port

The MAX2411A has a unique differential, bidirectional IF port, allowing the sharing of TX and RX IF filters. To evaluate the part with the EV kit, a balun is used to convert the single-ended IF input or output at the SMA connector to a differential signal across the IF and IF pins. In  a  typical  application,  a  differential  filter  would  be used, and the filter would connect to a compatible IF part, such as the MAX2511 or MAX2510.

At  the  IF  and IF pins,  inductors  L3,  L4,  L11,  and  L12 provide a matching network for TX and RX mode, as well as providing DC bias in RX mode. Capacitors C12 and C13 provide DC blocking to the balun. An extra component footprint, R4, is provided to resistively terminate this IF port. R4 can also be used for other experimentation. The balun, L5, provides 4:1 impedance transformation and differential to single-ended conversion. The other side of the balun is connected to the IF SMA connector. Component footprints R5, R6, and R7 are provided for experimentation.

<!-- image -->

## Receiver

This section describes the LNA and receive mixer sections of the MAX2411A EV kit.

## Low-Noise Amplifier (LNA)

The LNA circuitry consists of two DC blocking capacitors, one at the input (C7) and one at the output (C17). A shunt capacitor, C21, is used as a simple input matching network.

## RX Mixer Input

The receive mixer's input, RXMXIN, requires a simple matching network. C16 provides DC blocking, and L8 is used to match the input pin to 50 W . Component footprint  C22  is  available  for  additional  matching  network prototyping. The output of the receive mixer appears at the bidirectional IF port in receive mode.

## Transmitter

This section describes the PA driver and transmit mixer sections of the MAX2411A EV kit.

## PA Driver Amplifier

The PA driver amplifier input is internally matched to 50 W for 1.9GHz operation; capacitor C11 is necessary for DC blocking. The gain of the PA driver is adjustable by applying a voltage on the middle pin of the VGC jumper, which is connected through a 1k W resistor (R3) to  the  GC pin on the MAX2411A. Alternatively, by inserting a shunt, it is possible to set this voltage to ground or VCC. The position labeled "Logic 0" is connected to ground, and the "Logic 1" position is connected to VCC.

## TX Mixer Output

The transmit mixer output appears on the TXMXOUT pin, which requires a pull-up inductor to VCC (L2) and a matching network to a 50 W load impedance consisting of inductors L2 and L13. C19 provides DC blocking.

## Local Oscillator (LO)

The EV kit's LO input has a DC blocking capacitor (C20). No other circuitry is required. For more information on the LO port, including the optional use of a differential LO source, consult the MAX2411A data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX2411A EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2411A Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Power Management

The RXEN and TXEN jumpers on the EV kit control the operating modes of the MAX2411A. Refer to the MAX2411A data sheet for operating modes. Series resistors R1 and R2, included on the RXEN and TXEN inputs, provide isolation between logic and RF circuitry.

Each VCC node on the PC board should have its own bypass capacitor. This minimizes supply coupling from one section of the MAX2411A to another. A star topology for the supply layout, in which each VCC node on the MAX2411A circuit has a separate connection to a central  VCC node, can further minimize coupling between sections of the MAX2411A.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Layout

A good PC board layout is an essential part of an RF circuit  design.  The  EV  kit  PC  board  can  serve  as  a guide for laying out a board using the MAX2411A.

Figure 2.  MAX2411A EV Kit Component Placement Guide

<!-- image -->

<!-- image -->

Figure 3.  MAX2411A EV Kit PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2411A Evaluation Kit

Figure 4.  MAX2411A EV Kit PC Board Layout-Ground Plane

<!-- image -->

1.0"

Figure 5.  MAX2411A EV Kit PC Board Layout-Solder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products

?