<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX2410 evaluation kit (EV kit) simplifies testing of the MAX2410. This EV kit allows evaluation of the MAX2410's low-noise amplifier (LNA), receive downconverter mixer, transmit upconverter mixer, variable-gain poweramplifier (PA) driver, and power-management features.

## \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                              |   QTY | DESCRIPTION                                        |
|----------------------------------------------------------|-------|----------------------------------------------------|
| C1, C2                                                   |     2 | 47pF ceramic capacitors, 0603 size                 |
| C3                                                       |     1 | 10µF tantalum capacitor AVX TAJC106K016            |
| C4, C5, C6, C8                                           |     4 | 0.1µF ceramic capacitors, 0805 size                |
| C7, C10, C11, C16, C17, C19, C20                         |     7 | 220pF ceramic capacitors, 0805 size                |
| C9, C15, C18, C23, C24                                   |     5 | 1000pF ceramic capacitors, 0805 size               |
| C12, C14, C22, C25, C26                                  |     0 | Not installed                                      |
| C21                                                      |     1 | 1pF ceramic capacitor, 0805 size                   |
| L1                                                       |     1 | 18nH inductor, 0805 size Coilcraft 0805CS-180XMBC  |
| L2                                                       |     1 | 5.6nH inductor, 0805 size Taiyo Yuden HK16085N6S   |
| L3, L12                                                  |     2 | 68nH inductors, 0805 size Coilcraft 0805CS-680XKBC |
| L4, L5                                                   |     2 | 0 Ω resistors, 0805 size                           |
| L6, L7, L9                                               |     0 | Not installed                                      |
| L8, L13                                                  |     2 | 3.9nH inductors, 0805 size Taiyo Yuden HK16083N9S  |
| L11                                                      |     1 | 82nH inductor, 0805 size Coilcraft 0805CS-820XKBC  |
| R1, R2, R3                                               |     3 | 1k Ω resistors, 0805 size                          |
| LNAIN, LNAOUT, IFIN, IFOUT, LO, PADRIN, PADROUT, TXMXOUT |     8 | SMA edge-mount connectors                          |
| RXMXIN                                                   |     1 | SMA PC-mount connector                             |
| RXEN, TXEN, VGC                                          |     3 | 3-pin headers                                      |
| VCC, GND                                                 |     2 | 2-pin headers                                      |
| U1                                                       |     1 | MAX2410EEI 28-pin QSOP                             |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +2.7V to +5.5V Single-Supply Operation
- ' 50 Ω SMA Inputs and Outputs on RF and IF Ports
- ' Allows Testing of Shutdown Mode
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC-PACKAGE   |
|--------------|----------------|--------------|
| MAX2410EVKIT | -40°C to +85°C | 28 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE                             | INTERNET                 |
|-----------------|-----------------------------------|--------------------------|
| AVX             | (803) 946-0690 (803) 626-3123 FAX | http://www.avxcorp.com   |
| Coilcraft       | (847) 639-6400 (847) 639-1469 FAX | http://www.coilcraft.com |
| Taiyo Yuden USA | (408) 573-4150 (408) 573-4159 FAX | http://www.t-yuden.com   |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2410 EV kit is fully assembled and factory tested. Follow these instructions for initial evaluation of the MAX2410.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2410. It is intended as a guide only, and some substitutions may be possible.

- Two RF signal generators capable of delivering at least 0dBm of output power up to 2GHz (HP8648C, or equivalent).
- An RF spectrum analyzer that covers the operating frequency range of the MAX2410 as well as a few harmonics (HP8561E, for example).
- A power supply which can provide up to 100mA at +2.7V to +5.5V.
- A voltage source (0V to 5V) for adjusting the gaincontrol (GC) voltage on the PA driver.
- An optional ammeter for measuring the supply current.
- Several 50 Ω SMA cables.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2410 Evaluation Kit

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing all four major functions: the LNA, receive mixer, transmit mixer, and PA driver. Do not turn on the DC power or RF signal generators until all connections are made.

## Low-Noise Amplifier

- 1) Set the RXEN jumper on the EV kit to the 'Logic 1' position and the TXEN jumper to the 'Logic 0' position. This enables the MAX2410's receive mode.
- 2) Connect a DC supply set to 3V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.
- 3) Connect one RF signal generator to the LNAIN SMA connector; do not turn on the generator's output. Set the generator for an output frequency of 1.9GHz at a power level of -40dBm.
- 4) Connect a spectrum analyzer to the LNAOUT SMA connector on the EV kit. Set it to a center frequency of 1.9GHz, a total span of 200MHz, and a reference level of 0dBm.
- 5) Turn on the DC supply. The supply current should read approximately 20mA (if using an ammeter).
- 6) Activate the RF generator's output. A signal on the spectrum analyzer's display should indicate a typical gain of 16.2dB after accounting for cable losses.
- 7) If  desired,  the  shutdown  feature  can  be  tested  by moving the RXEN jumper into the 'Logic 0' position. The supply current should drop to less than 10µA.

## Receive Downconverter Mixer

- 1) Remove the RF signal generator and spectrum analyzer  from  the  LNAIN and LNAOUT connections if necessary. The DC supply connections needed for testing the downconverter mixer are the same as in the LNA section. Turn off the DC supply while making connections.
- 2) Set the RXEN jumper on the EV kit to the 'Logic 1' position and the TXEN jumper to the 'Logic 0' position. This enables the MAX2410's receive mode.
- 3) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 1.5GHz and the output power to -10dBm. This is the LO signal.
- 4) Connect the other RF signal generator to the RXMXIN SMA connector (with the output disabled). Set the frequency to 1.9GHz and the output power to -30dBm. This is the RF input signal.
- 5) Connect the spectrum analyzer to the IFOUT SMA connector. Set the spectrum analyzer to a 400MHz center frequency, a 200MHz total span, and a 0dBm reference level.
- 6) Turn on the DC supply, LO signal generator, and RF input signal generator.
- 7) The downconverted output signal at 400MHz is visible on the spectrum analyzer, indicating a mixer conversion gain of typically 8.3dB after accounting for cable losses.

## Power-Amplifier Driver

- 1) Remove any RF signal connections made in the above tests. The VCC and GND connections should remain as before. Turn off the VCC supply while making connections.
- 2) Set the RXEN jumper to the 'Logic 0' position and the TXEN jumper to the 'Logic 1' position. This enables the MAX2410's transmit mode.
- 3) Set the voltage source to be used for the gain-control voltage to 2.15V, and turn it off. Connect it to the middle pin of the VGC jumper on the EV kit.
- 4) Connect an RF signal generator set to 1.9GHz, at a power level of -10dBm with the output disabled, to the PADRIN SMA connector.
- 5) Connect the PADROUT SMA connector to the spectrum analyzer. Configure the analyzer to a center frequency of 1.9GHz, a reference level of +10dBm, and 200MHz total span.
- 6) Turn on the DC supply, VGC voltage source, and RF signal generator.
- 7) The supply current should read typically 30mA. A 1.9GHz signal should be visible on the spectrum analyzer's display indicating a typical gain of 15dB after accounting for cable losses.
- 8) Lowering the voltage on the VGC voltage source to 0V should reduce the gain by typically 35dB.

## Transmit Upconverter Mixer

- 1) Remove any RF signal connections made in the above tests. The VCC and GND connections should remain as before. Turn off the VCC supply. The VGC voltage source is not needed for this test.
- 2) Set the RXEN jumper to the 'Logic 0' position and the TXEN jumper to the 'Logic 1' position. This enables the MAX2410's transmit mode.
- 3) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 1.5GHz and the output power to -10dBm. This is the LO signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Connect the other RF signal generator (with the output disabled) to the IFIN SMA connector. Set the generator to a frequency of 400MHz and a power level of -32dBm. This is the IF signal.
- 5) Connect the TXMXOUT SMA connector to the spectrum analyzer. Configure the analyzer for a center frequency of 1.9GHz, a reference level of 0dBm, and 200MHz total span.
- 6) Turn on the DC supply, LO signal generator, and IF signal generator.
- 7) The supply current should typically read 30mA. The spectrum analyzer should show a 1.9GHz signal indicating a conversion gain of typically 10dB after accounting for cable losses.
- 8) To observe the remainder of the TX mixer output spectrum, increase the span on the spectrum analyzer from 200MHz to 2GHz.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX2410 EV kit circuitry is described in this section. For more detailed information about the operation of  the  device  itself,  please  consult  the  MAX2410  data sheet.

## Receiver

This section describes the LNA and receive mixer sections of the MAX2410 EV kit.

## Low-Noise Amplifier

The LNA circuitry consists of two DC blocking capacitors, one at the input (C7) and one at the output (C17). A shunt capacitor (C21) is used as a simple input matching network.

## IF Output

The IFOUT pin of the MAX2410 is an open-collector output that is  externally  biased  to  VCC by inductor L3 and matched with inductors L3 and L12. C24 provides DC blocking. There are additional component footprints available on the EV kit layout for designing a more complex matching network: C12, C26, L5, and L9.

## RX Mixer Input

The receive mixer's input, RXMXIN, requires a simple matching network. Capacitor C16 provides DC blocking,  and L8 is used to match the input pin to 50 Ω . Component footprint (C22) is available for additional matching network prototyping.

## Transmitter

This section describes the PA driver and transmit mixer sections of the MAX2410 EV kit.

<!-- image -->

## MAX2410 Evaluation Kit

## PA Driver Amplifier

The PA driver amplifier input is internally matched to 50 Ω for 1.9GHz operation. Capacitor C11 is necessary for DC blocking. The gain of the PA driver is adjustable by applying a voltage on the middle pin of the VGC jumper, which is connected through a 1k Ω resistor (R3) to the GC pin of the MAX2410. C8 and R3 form a filter to reduce any noise from the VGC supply. Alternatively, by inserting a shunt, it is possible to set this voltage to ground or VCC. The position labeled 'Logic 0' is connected to ground, and the 'Logic 1' position is set to VCC.

## IF Input

The IFIN pin of the MAX2410 is a high-impedance input that is internally biased. Inductor L11 provides a simple matching network. C23 is used for DC blocking. As with the  IFOUT pin above, additional component footprints have been placed to allow further experimentation: C14, C25, L4, L6, and L7.

## TX Mixer Output

The transmit mixer output appears on the TXMXOUT pin,  which requires a pull-up inductor (L2) to VCC as well as a matching network to a 50 Ω load impedance consisting of inductors L2 and L13. C19 serves as a DC block.

## Local Oscillator

The MAX2410 EV kit's LO input only requires a DC blocking capacitor (C20). No other circuitry is required. For more information on the LO port, including the optional use of a differential LO source, consult the MAX2410 data sheet.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Power Management

The RXEN and TXEN jumpers on the EV kit control the operating modes of the MAX2410. Refer to the MAX2410 data sheet for a table of operating modes. Series resistors R1 and R2 and capacitors C5 and C6 are included on the RXEN and TXEN inputs to provide filtering between logic and RF circuitry.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Layout

A good PC board is an essential part of an RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2410.

Each VCC node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the MAX2410 to another. A star topology for the supply layout, in which each VCC node on the MAX2410 circuit has a separate connection to a central VCC node, can further minimize coupling between sections of the MAX2410 (Figure 5).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX2410 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2410 Evaluation Kit

Figure 2.  MAX2410 EV Kit Component Placement Guide

<!-- image -->

Figure 3.  MAX2410 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2410 Evaluation Kit

Figure 4.  MAX2410 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5.  MAX2410 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2410 Evaluation Kit

## NOTES

7

## MAX2410 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600