<!-- lastmod 2022-08-04 -->
<!-- image -->

<!-- image -->

## Description

The STM1E-SFPxx is a Small Form-factor Pluggable (SFP) module compatible with the Multi Source Agreement (MSA) for SFP transceivers.  The module utilizes the latest generation of Line Interface Units (LIUs) for 155 Mbit/s electrical  interfaces  (STM-1e,  ES1)  from  Teridian  Semiconductor  Corporation  (TSC).    It  also  includes  all  the necessary components for interfacing to 75 Ω telecommunications coaxial cable.

The  Teridian  78P2351R  physical  layer  IC  includes  Clock  &amp;  Data  Recovery  in  both  directions  and  a  CMI encoder/decoder for transparent NRZ to CMI line code conversion.  It provides Receive Loss of Signal (LOS) detection  for  electrical  CMI  interfaces  and  the  option  to  disable  (and  tri-state)  the  transmit  driver.    A  serial interface provides access to an on board EEPROM for identification information.

Figure 1:  Transceiver Functional Diagram

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## Features

- Compatible with the Multi-Source Agreement (MSA) for SFP transceivers
- 75 Ω media interface compliant with ITU-T G.703 and Telcordia GR-253 for CMI coded 155Mbps electrical interfaces
- ITU-T G.783 compatible loss of signal detect
- Transmit power down and tri-state control
- Handles over 12.7dB of cable loss
- Extended Temperature operation: -20 C to 85 C
- 75 Ω DIN 1.0/2.3 female coaxial media interface supports Type A and Type D coupling
- Low power dissipation (0.6 W typical)
- Compliant with RoHS 6/6 (lead-free)

## Benefits

- Compatible with existing OC3/STM1o line cards using the pluggable SFP form factor
- Provides end user flexibility on a per port basis
- Reduces cost to system developers for offering STM-1 electrical interfaces
- Eliminates risk of laser wear out for central office interconnects

<!-- image -->

## Data and Control Interface

The  STM1E-SFPxx  data  I/Os  accept  and  provide  differential  signals  at  155.52Mbit/s.    AC-coupling  for  both transmit and receive traces is handled internally and is thus not required on the host board.

The receive  data  outputs  (RD+/-)  provide  the  recovered  STM1/STS3  data  to  the  host  in  NRZ  coding. During Rx LOS of signal conditions, the receive outputs are squelched.  The RD+/- traces on the host card should be of equal length and differentially terminated with 100 Ω at the user SerDes.

The transmit data inputs (TD+/-) accept STM1/STS3 NRZ data at CML or LVPECL levels.   The transmit timing  is  recovered  inside  the  78P2351R  LIU  and  used  for  the  CMI  line  encoding  and  transmit  pulse driver.  The TD+/- traces on the host card should be of equal length.

The  physical  layer  IC  used  in  the  STM1E-SFPxx  does  not  require  reset  or  software  configuration.    Only  an optional Transmit Disable control pin is available for enabling or powering down the transmit driver.

For  status  monitoring,  a  Receive  Loss  of  Signal  indicator  is  provided.    Loss  of  Signal  detection  for  STM-1e (electrical)  interfaces  is  inherently  different  from  optical  LOS  detection.  Reference Receiver  Loss  of  Signal Condition section for more info on LOS detection criteria for STM-1e (ES1) interfaces.

Figure 2:  Typical Application Configuration

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## Serial ID Interface

The STM1E-SFPxx supports the 2-wire serial EEPROM protocol for the ATMEL AT24C01 as defined by the MSA. The serial interface provides access to identification information.  The memory is organized as byte wide data words that can be addresses individually or sequentially at device address 1010000X (A0h).

## Special Design Considerations for Using STM1E-SFPxx Transceivers

Host enclosures that use SFP devices should provide appropriate clearances between the SFP transceivers to allow  room  for  the  larger  width  of  the  1.0/2.3  mini-coax  front  end.    For  most  systems  a  nominal  centerline-tocenterline spacing of 16.25mm (0.640') is sufficient, but preferred coax cable types and routing clearances may require additional spacing.

NOTE:  To accommodate the preferred Type D coax coupling and cable types, the width of the nosepiece or front end was designed to exceed the MSA requirements of 13.7mm (+/- 0.1).

- o Reference INF-8074 [Appendix A, Table 1, Designator A] for MSA recommendations
- o Reference Mechanical Drawings section for STM1E-SFPxx transceiver dimensions.

The SFP transceiver insertion slot should be clear of nearby moldings and covers that might block convenient access to the unique latching mechanism used in the STM1E-SFPxx.  A bail-style de-latch was not feasible with a coaxial network interface so a simple push button actuator was employed.  Detaching the coax cable from the STM1E-SFPxx is not required for de-latching the transceiver from the host card.

## NOTES:

1. In  order  to  secure  the  larger  push  button  de-latch  mechanism,  the  length  of  the  bottom  of  the transceiver exceeds the maximum MSA requirements of 2.0mm.
2. o Reference INF-8074 [Appendix A, Table 1, Designator Y] for MSA recommendations
3. o Reference Mechanical Drawings section for STM1E-SFPxx transceiver dimensions.
2. Note: Double-sided board mounting is generally not recommended due to the limited clearance for de-latching the STM1E-SFPxx transceiver.

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## Mating the STM1E-SFPxx PCB to Host Connector

The SFP utilizes a printed circuit board (PCB) to mate with a host card equipped an SFP electrical connector. The pads are designed for sequenced mating as follows:

1. Ground contacts first
2. Power contacts second
3. Data &amp; Control contacts third

The design of the mating portion of the transceiver printed circuit board is illustrated below. Reference INF-8074 for generic SFP guidelines for the host board.

Top of Board

<!-- image -->

Bottom of Board (as viewed thru top of board)

<!-- image -->

<!-- image -->

## Host Interface Pinout

|   Pin | Name        | Description                                                                                                                                                                                                                             | Notes   |
|-------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
|     1 | VeeT        | Transmitter ground.                                                                                                                                                                                                                     | Note 1  |
|     2 | Tx Fault    | Not supported in STM1E-SFPxx. Grounded internally.                                                                                                                                                                                      |         |
|     3 | Tx Disable  | Transmit Disable. When pin is high or open, the transmitter is powered down and tri-stated.                                                                                                                                             |         |
|     4 | MOD-DEF2    | Module Definition 2. Bi-directional data pin of two wire serial ID interface. This pin is open-drain and may be wired-ORed with other open-drain or open-collector devices.                                                             |         |
|     5 | MOD-DEF1    | Module Definition 1. Clock pin of two wire serial ID interface. Data is clocked into EEPROM device on the positive edge and clocked out on the negative edge.                                                                           |         |
|     6 | MOD-DEF0    | Module Definition 0. Grounded internally. Used to notify host system that an SFP is present.                                                                                                                                            |         |
|     7 | Rate Select | Not supported in STM1E-SFPxx. Floating internally.                                                                                                                                                                                      |         |
|     8 | RLOS        | Receive Loss of Signal. Asserted when the received signal is less than approximately 19dB below nominal for 110 UI. The RLOS condition is cleared when the received signal is greater than approximately 18dB below nominal for 110 UI. | Note 2  |
|     9 | VeeR        | Receiver ground.                                                                                                                                                                                                                        | Note 1  |
|    10 | VeeR        | Receiver ground.                                                                                                                                                                                                                        | Note 1  |
|    11 | VeeR        | Receiver ground.                                                                                                                                                                                                                        | Note 1  |
|    12 | RD-         | Recovered receive NRZdata output (inverted).                                                                                                                                                                                            |         |
|    13 | RD+         | Recovered receive NRZdata output.                                                                                                                                                                                                       |         |
|    14 | VeeR        | Receiver ground.                                                                                                                                                                                                                        | Note 1  |
|    15 | VccR        | Receiver power supply (+3.3V).                                                                                                                                                                                                          | Note 3  |
|    16 | VccT        | Transmitter power supply (+3.3V).                                                                                                                                                                                                       | Note 3  |
|    17 | VeeT        | Transmitter ground.                                                                                                                                                                                                                     | Note 1  |
|    18 | TD+         | Transmit NRZ data input.                                                                                                                                                                                                                |         |
|    19 | TD-         | Transmit NRZ data input (inverted).                                                                                                                                                                                                     |         |
|    20 | VeeT        | Transmitter ground.                                                                                                                                                                                                                     | Note 1  |

## Notes:

1. Transmit and Receive grounds are connected directly together internally.  For STM1E-SFP08 version, circuit grounds are also connected to frame/chassis ground.
2. During Rx LOS conditions, the receive data outputs RD+/- are squelched.  See Receiver Loss of Signal Condition section for more information on LOS detection for STM-1e interfaces.
3. Transmit and Receive power supplies are connected together internally.

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## ABSOLUTE MAXIMUM RATINGS

Operation beyond these limits may permanently damage the device.

| PARAMETER                   | RATING          |
|-----------------------------|-----------------|
| Supply Voltage (VccT, VccR) | -0.5 to 3.6 VDC |
| Storage Temperature         | -65 to 150 °C   |

## RECOMMENDED OPERATING CONDITIONS

Unless otherwise noted all specifications are valid over these temperatures and supply voltage ranges.

| PARAMETER                      | RATING           |
|--------------------------------|------------------|
| DC Voltage Supply (VccT, VccR) | 3.15 to 3.45 VDC |
| Ambient Operating Temperature  | -20 to 85°C      |

## DC CHARACTERISTICS:

| PARAMETER                   | SYMBOL   | CONDITIONS           | MIN   |   NOM |   MAX | UNIT   |
|-----------------------------|----------|----------------------|-------|-------|-------|--------|
| Supply Current              | Idd      | Max cable length     |       |   170 |   190 | mA     |
| Receive-only Supply Current | Iddr     | Transmitter disabled |       |   100 |       | mA     |

## DIGITAL I/O CHARACTERISTICS:

Tx Disable input:

| PARAMETER          | SYMBOL   | CONDITIONS   |   MIN | NOM   |   MAX | UNIT   |
|--------------------|----------|--------------|-------|-------|-------|--------|
| Input Voltage Low  | Vil      |              |       |       |   0.8 | V      |
| Input Voltage High | Vih      |              |   2.0 |       |       | V      |

## TD+/- data inputs:

| PARAMETER                 | SYMBOL   | CONDITIONS   |   MIN | NOM   |   MAX | UNIT   |
|---------------------------|----------|--------------|-------|-------|-------|--------|
| Single-ended Signal Swing | Vpki     |              |   0.3 |       |   1.2 | V      |

## RD+/- data outputs:

| PARAMETER                 | SYMBOL   | CONDITIONS                          |   MIN |   NOM |   MAX | UNIT   |
|---------------------------|----------|-------------------------------------|-------|-------|-------|--------|
| Single-ended Signal Swing | Vpk      | Differentially terminated with100 Ω |   0.5 |   0.7 |   1.0 | V      |
| Rise & Fall Time          | Tf       | 10-90%                              |       |   0.8 |   1.2 | ns     |

## RxLOS output:

| PARAMETER          | SYMBOL   | CONDITIONS   | MIN   |   NOM |   MAX | UNIT   |
|--------------------|----------|--------------|-------|-------|-------|--------|
| Output Voltage Low | Vol      | Iol = 8mA    |       |       |   0.4 | V      |
| Pull-up Resistor   | Rpu      |              |       |   4.7 |       | k Ω    |

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## TRANSMITTER SPECIFICATIONS FOR CMI (COAX) INTERFACE

Bit Rate:  155.52Mbits/s ± 20ppm

Line Code: Coded Mark Inversion (CMI)

Relevant Specification: ITU-T G.703, ANSI T1.102, Telcordia GR-253-CORE

With the coaxial output port driving a 75 Ω load, the output pulses conform to the templates in ITU-T G.703 and G.783. These specifications are tested during production test.

| PARAMETER                   | CONDITION                                   |   MIN | NOM   |   MAX | UNIT   |
|-----------------------------|---------------------------------------------|-------|-------|-------|--------|
| Peak-to-peak Output Voltage | Template, steady state                      |   0.9 |       |   1.1 | V      |
| Rise/ Fall Time             | 10-90%                                      |       |       |     2 | ns     |
| Transition Timing Tolerance | Negative Transitions                        |  -0.1 |       |   0.1 | Ns     |
| Transition Timing Tolerance | Positive Transitions at Interval Boundaries |  -0.5 |       |   0.5 | Ns     |
| Transition Timing Tolerance | Positive Transitions at mid- interval       | -0.35 |       |  0.35 | Ns     |
| Return Loss                 | 7MHz to 240MHz                              |    15 |       |       | dB     |

## TRANSMITTER OUTPUT JITTER

The  transmit  jitter  specification  ensures  compliance  with  ITU-T  G.813,  G.823,  G.825,  G.958  and  Telcordia GR-253-CORE for STS-3/STM-1. Transmit output jitter is not tested during production test.

<!-- image -->

| PARAMETER                 | CONDITION                                                 | MIN   |   NOM |   MAX | UNIT   |
|---------------------------|-----------------------------------------------------------|-------|-------|-------|--------|
| Transmitter Output Jitter | 200 Hz to 3.5 MHz, measured with respect to CKREF for 60s |       | 0.055 | 0.075 | UIpp   |

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## RECEIVER SPECIFICATIONS FOR CMI (COAX) INTERFACE

The input signal is assumed compliant with ITU-T G.703 and can be attenuated by the dispersive loss of a cable. The minimum cable loss is 0dB and the maximum is -12.7dB at 78MHz.

| PARAMETER           | CONDITION                            |   MIN |   TYP |   MAX | UNIT   |
|---------------------|--------------------------------------|-------|-------|-------|--------|
| Flat-loss Tolerance | 0 to 12.7dB cable (loss) attenuation |    -2 |       |     4 | dB     |
| Latency             |                                      |       |     5 |    10 | UI     |
| DLL Lock Time       |                                      |       |     1 |    10 | µ s    |
| Return Loss         | 7MHz to 240MHz                       |    15 |       |       | dB     |

## RECEIVER JITTER TOLERANCE

The  STM1E-SFPxx  exceeds  all  relevant  jitter  tolerance  specifications  shown  in  Figure  10.  Receive  jitter tolerance is not tested during production test.

<!-- image -->

Jitter Frequency

Figure 10: Jitter Tolerance - electrical (CMI) interfaces

| PARAMETER               | CONDITION       |   MIN | NOM      | MAX   | UNIT   |
|-------------------------|-----------------|-------|----------|-------|--------|
| STM-1e Jitter Tolerance | 10Hz to 19.3Hz  |  38.9 |          |       | UIpp   |
| STM-1e Jitter Tolerance | 19.3Hz to 500Hz |       | 750 f-1  |       | µ s    |
| STM-1e Jitter Tolerance | 500Hz to 6.5kHz |   1.5 |          |       | UIpp   |
| STM-1e Jitter Tolerance | 6.5kHz to 65kHz |       | 9800 f-1 |       | µ s    |
| STM-1e Jitter Tolerance | 65kHz to 1.3MHz |  0.15 | 0.30     |       | UIpp   |

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## RECEIVER JITTER TRANSFER FUNCTION

The receiver clock recovery loop filter characteristics such that the receiver has the following transfer function. The corner frequency of the DLL is approximately 120 kHz. Receiver jitter transfer function is not tested during production test.

<!-- image -->

Figure 11: Jitter Transfer

| PARAMETER                         | CONDITION     | MIN   |   NOM |   MAX | UNIT          |
|-----------------------------------|---------------|-------|-------|-------|---------------|
| Receiver Jitter transfer function | below 120 kHz |       |       |   0.1 | dB            |
| Jitter transfer function roll-off |               |       |    20 |       | dB per decade |

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## Receiver Loss of Signal Condition

| PARAMETER     | CONDITION   |   MIN |   TYP |   MAX | UNIT   |
|---------------|-------------|-------|-------|-------|--------|
| LOS threshold |             |   -35 |   -19 |   -15 | dB     |
| LOS timing    |             |    10 |   110 |   255 | UI     |

<!-- image -->

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

## ENVIRONMENTAL &amp; REGULATORY COMPLIANCE

| Description                        | Test Method                               | STM1E-SFPxx Result      |
|------------------------------------|-------------------------------------------|-------------------------|
| ESD threshold (at electrical pins) | Human Body Model MIL-STD-883              | Class 2 ( ≥ 2000 Volts) |
| *ESD Immunity at faceplate         | IEC-61000-4-2 Contact Discharge           | A/B                     |
| *ESD Immunity at faceplate         | IEC-61000-4-2 Air Discharge               | A                       |
| Surge Immunity, 1.0kV              | ITU-T K.41 IEC-61000-4-5                  | B                       |
| Radiated Emission                  | FCC Part 15 Class B EN55022 CISPR 22      | Pass > 6dB Margin       |
| Radiated Immunity                  | IEC-801-3 EN55082-1 IEC-61000-4-3 GR-1089 | A                       |
| Component Recognition              | CSA C22.2 UL 60950-1                      | Pass / UL File# E143101 |

<!-- image -->

## MECHANICAL DRAWINGS

The STM1E-SFPxx is assembled in a Nickel plated Zinc die cast housing.  The coaxial connectors feature  a Brass body with Gold over Nickel plating and an inner contact made of Beryllium Copper.

The STM1E-SFPxx complies with RoHS directive 2002/95/EC (RoHS-6) and is UL94-V0 compliant.

1.655 [42.04]

1.362 [34.59]

1.127 [28.63]

<!-- image -->

0.104 [2.64]

0.363 [9.22]

0.098 [2.49]

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

0.334 [8.48]

<!-- image -->

## MECHANICAL DRAWINGS

<!-- image -->

## NOTES:

- HOUSINGS NICHEL PLATED ZINC DIE CAST BODIES.
- ACTUATOR UL94 YO POLYCARBONATE
- GROUNDINGTAB --TIN OR NICHELF PLATED BRASS
- I\_OI2.3 CONNECTORS -- EULKHEAD STYLE JACKS WITH THREADED COUPLING INTERFACE
- 5 REFERENCE SFP MULTISOURCE AGREENENT FOR DIMENSIONAL REGUIREMENTS

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## EEPROM CONTENTS

The MOD-DEF interface of the STM1E-SFPxx provides access to serial ID information per MSA guidelines.  The data is stored in a write-protected EEPROM at device address A0h.  Contact Teridian for availability of custom EEPROM maps.

|   Address | Hex   | ASCII   |   Address | Hex    | ASCII   |   Address | Hex    | ASCII   |   Address |   Hex | ASCII   |
|-----------|-------|---------|-----------|--------|---------|-----------|--------|---------|-----------|-------|---------|
|         0 | 03    |         |        39 | 39     |         |        78 |        |         |       117 |    00 |         |
|         1 | 04    |         |        40 | 53     | S       |        79 |        |         |       118 |    00 |         |
|         2 | FE    |         |        41 | 54     | T       |        80 |        |         |       119 |    00 |         |
|         3 | 00    |         |        42 | 4D     | M       |        81 | Note 3 |         |       120 |    00 |         |
|         4 | 00    |         |        43 | 31     | 1       |        82 |        |         |       121 |    00 |         |
|         5 | 00    |         |        44 | 45     | E       |        83 |        |         |       122 |    00 |         |
|         6 | 00    |         |        45 | 2D     | -       |        84 |        |         |       123 |    00 |         |
|         7 | 00    |         |        46 | 53     | S       |        85 | Note 4 |         |       124 |    00 |         |
|         8 | 00    |         |        47 | 46     | F       |        86 |        |         |       125 |    00 |         |
|         9 | 00    |         |        48 | 50     | P       |        87 |        |         |       126 |    00 |         |
|        10 | 00    |         |        49 | 30     | 0       |        88 | 20     |         |       127 |    00 |         |
|        11 | 05    |         |        50 | Note 1 |         |        89 | 20     |         |           |       |         |
|        12 | 02    |         |        51 | 20     |         |        90 | 20     |         |           |       |         |
|        13 | 00    |         |        52 | 20     |         |        91 | 20     |         |           |       |         |
|        14 | 00    |         |        53 | 20     |         |        92 | 00     |         |           |       |         |
|        15 | 00    |         |        54 | 20     |         |        93 | 00     |         |           |       |         |
|        16 | 00    |         |        55 | 20     |         |        94 | 00     |         |           |       |         |
|        17 | 00    |         |        56 |        |         |        95 | Note 5 |         |           |       |         |
|        18 | 78    |         |        57 | Note 2 |         |        96 | 00     |         |           |       |         |
|        19 | 00    |         |        58 | 20     |         |        97 | 00     |         |           |       |         |
|        20 | 54    | T       |        59 | 20     |         |        98 | 00     |         |           |       |         |
|        21 | 45    | E       |        60 | 00     |         |        99 | 00     |         |           |       |         |
|        22 | 52    | R       |        61 | 00     |         |       100 | 00     |         |           |       |         |
|        23 | 49    | I       |        62 | 00     |         |       101 | 00     |         |           |       |         |
|        24 | 44    | D       |        63 | Note 5 |         |       102 | 00     |         |           |       |         |
|        25 | 49    | I       |        64 | 00     |         |       103 | 00     |         |           |       |         |
|        26 | 41    | A       |        65 | 12     |         |       104 | 00     |         |           |       |         |
|        27 | 4E    | N       |        66 | 00     |         |       105 | 00     |         |           |       |         |
|        28 | 20    |         |        67 | 00     |         |       106 | 00     |         |           |       |         |
|        29 | 20    |         |        68 |        |         |       107 | 00     |         |           |       |         |
|        30 | 20    |         |        69 |        |         |       108 | 00     |         |           |       |         |
|        31 | 20    |         |        70 |        |         |       109 | 00     |         |           |       |         |
|        32 | 20    |         |        71 |        |         |       110 | 00     |         |           |       |         |
|        33 | 20    |         |        72 |        |         |       111 | 00     |         |           |       |         |
|        34 | 20    |         |        73 | Note 3 |         |       112 | 00     |         |           |       |         |
|        35 | 20    |         |        74 |        |         |       113 | 00     |         |           |       |         |
|        36 | 00    |         |        75 |        |         |       114 | 00     |         |           |       |         |
|        37 | 00    |         |        76 |        |         |       115 | 00     |         |           |       |         |
|        38 | C0    |         |        77 |        |         |       116 | 00     |         |           |       |         |

## Notes:

1. Address 50 specified the unique model.
2.  32h used for STM1E-SFP02 and 38h used for STM1E-SFP08.
2. Address 56-57 specifies the product revision code.
3. Address 68-83 specifies a unique serial number
4. Address 84-87 specifies the date code in format YYWW
5. Address 63 and 95 are check sums for bytes 0-62 and bytes 64-94 respectively.

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## PRODUCT VERSIONS

Two versions  of  the  STM1E-SFPxx  are  available  to  match  the  grounding  implementation  of  the  host  system. Schematic design and materials are otherwise identical between the two versions.

STM1E-SFP02 :  Frame (left) and supply (right) grounds isolated at transformer.

<!-- image -->

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

## ORDERING INFORMATION

| PART DESCRIPTION                                           | ORDER NUMBER   | LABEL MARKING   |
|------------------------------------------------------------|----------------|-----------------|
| STM-1e (ES1) SFP Transceiver; Grounds Isolated; Lead-free  | STM1E-SFP02    |                 |
| STM-1e (ES1) SFP Transceiver; Grounds Connected; Lead-free | STM1E-SFP08    |                 |

## REVISION HISTORY

| v2-0   | February 22, 2006: Final Datasheet Initial Release              |
|--------|-----------------------------------------------------------------|
| v2-1   | February 7, 2007  Added 6/6 RoHS compliant feature (lead-free) |
| v2-2   | August 2008  Updated the product label with UL logo            |

This product is sold subject to the terms and conditions of sale supplied at the time of order acknowledgment, including those pertaining to warranty, patent infringement and limitation of liability.   Teridian Semiconductor Corporation (TSC) reserves the right to make changes in specifications at any time without notice. Accordingly, the reader is cautioned to verify that a data sheet is current before placing orders. TSC assumes no liability for applications assistance.

© 2008 Teridian Semiconductor Corp. 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.Teridian.com

## STM1E-SFPxx 155Mbps Copper Transceiver Final Datasheet

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->