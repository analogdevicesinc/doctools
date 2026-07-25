<!-- lastmod 2022-08-02 -->
## MAX35104EVKIT2 Evaluation Kit

## General Description

The MAX35104EVKIT2 is an Arduino ® -compatible shield that  features  the  MAX35104  time-to-digital  converter. The  board  is  stackable  with  other  MAX35104EVKIT2's to facilitate multi-axis distance and gas flow applications.

The PCB exposes many signals for easy analysis with an oscilloscope.  Hardware  configuration  experimentation  is facilitated by jumpers.

The kit is designed to be used with Arduino-compatible controller  boards,  such  as  the  MAX32625MBED# but can be adapted to use with any host microcontroller architecture.

## MAX35104EVKIT2 and Transducers

<!-- image -->

Arduino is a registered trademark of Arduino, LLC.

Arm is a registered trademark and Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## Features

- Easy Evaluation of the MAX35104 in an Embedded Environment
- Two Audiowell 200kHz Ultrasonic Transducers Included
- Arm ®  Mbed™ Development Environment Supported Through the MAX32625MBED# Board

Ordering Information appears at end of data sheet.

Evaluates: MAX35104

<!-- image -->

## MAX35104EVKIT2 Evaluation Kit

## Detailed Description

The  MAX35104EVKIT2  is  an  ultrasonic  time-to-digital convertor Arduino-compatible shield. The EV kit includes two  200kHz  air/gas  transducers  for  distance  and  flow experimentation.  The  PCB  contains  a  MAX35104  timeto-digital converter, two crystal clock sources, and a highvoltage boost circuit.

## Configuration Options

The  PCB  supports  several  jumpers  to  configure  power and clocking options.

## Evaluates: MAX35104

Figure 1. Audiowell AW9Y0200K02Z-01 200kHz Gas Transducer

<!-- image -->

Figure 2. Configuration Options

<!-- image -->

│

## MAX35104EVKIT2 Evaluation Kit

## Evaluates: MAX35104

<!-- image -->

## J8-Low-Frequency Clock Source

This header selects the clock source for the 32.768kHz input to the MAX35104. This can either be the 32.768kHz crystal  (X1)  or  an  external  clock  source  from  the  host board  or  another  shield.  The  normal  configuration  is  to use the crystal that requires the leftmost and the rightmost positions to be jumpered.

Application  firmware  must  configure  the  MAX35104 according to the signal selected. Refer to the MAX35104 data sheet for details.

## J7-Chip Select

This header selects which signal is used for the MAX35104 SPI chip select. This allows multiple shields to be installed for multi-axis measuring applications.

## Reference Software

Reference software for this evaluation kit used in conjunction with the MAX32625MBED# evaluation kit is available at: https://github.com/maxim-ic-flow/tdc\_test .

A portable MAX3510x API library is available at: https:// github.com/maxim-ic-flow/max3510x .

## Ordering Information

#Denotes RoHS compliant.

| PART            | TYPE   |
|-----------------|--------|
| MAX35104EVKIT2# | EV Kit |

Figure 3. Configuration Example

## J11-Power Select

This header selects which power source is used to create the high-voltage rail applied to the output amplifiers in the MAX35104. The options are: 3.3V, 5V, and VIN. Only one source should be jumpered. Misconfiguration of this header could damage the host board.

In Figure 3, the VIN is used as the voltage source.

## J9-High-Voltage Select

This  header  performs  two  functions.  The  leftmost  two positions select the voltage rail used to power the output transducer amplifiers in the MAX35104. The options are: the voltage source selected by J11, or the on-board highvoltage  boost  circuit  controlled  by  the  MAX35104.  Only one voltage source should be selected. Misconfiguration of this header could damage the host board.

In Figure 3, the output of the boost circuit used to power the transducer amplifiers.

The  rightmost  header  position  allows  for  jumpering between VP and VPR. This selection is independent of the other J9 jumper options. Jumpering VP to VPR effectively  disabled  the  high-voltage  linear  regular  internal  to the MAX35104. The application firmware should disable the regulator if this jumper exists. Refer to the MAX35104 data sheet for details.

## J1-High-Frequency Clock Source

This header selects the clock source for the 4MHz input to the MAX35104. This can either be the 4MHz crystal (X2) or an external clock source from the host board or another shield. The normal configuration is to use the crystal that requires the two leftmost positions be jumpered.

Application  firmware  must  configure  the  MAX35104 according to the signal selected. Refer to the MAX35104 data sheet for details.

In Figure 3, the crystal is selected as the source for the 4MHz clock.

│

## MAX35104EVKIT2 Evaluation Kit

## MAX35104EV2 Kit Bill of Materials

| DESIGNATION                       | MANUFACTURER                      | PART NUMBER            | DESCRIPTION                       |
|-----------------------------------|-----------------------------------|------------------------|-----------------------------------|
| C1, C7, C8, C14                   | Samsung Electro-Mechanics America | CL10C120JB8NNNC        | CAP CER 12PF 50V C0G/NP0 0603     |
| C2, C3, C4, C5, C11, C13          | Samsung Electro-Mechanics America | CL10B104KO8NNNC        | CAP CER 0.1µF 16V 10% X7R 0603    |
| C6                                | Yageo                             | CC0603KRX5R5BB225      | CAP CER 2.2µF 6.3V 10% X5R 0603   |
| C9                                | Samsung Electro-Mechanics America | CL10C471JB8NNNC        | CAP CER 470PF 50V C0G/NP0 0603    |
| C10                               | Samsung Electro-Mechanics America | CL10B103KB8NCNC        | CAP CER 10000PF 50V 10% X7R 0603  |
| C12, C17                          | Taiyo Yuden                       | LMK107B7105KA-T        | CAP CER 1µF 10V 10% X7R 0603      |
| C15, C18                          | Samsung Electro-Mechanics America | CL31B106KBHNNNE        | CAP CER 10µF 50V X7R 1206         |
| C16                               | Samsung Electro-Mechanics America | CL10C101JB8NNWC        | CAP CER 100PF 50V C0G/NP0 0603    |
| D1                                | Micro Commercial Co               | SMD18PL-TP             | DIODE SCHOTTKY 80V 1A SOD123FL    |
| J1, J7, J8, J9, J11               | Harwin Inc.                       | M20-8760342            | 2X3POS DIL VERTICAL SMT HEADER    |
| J2                                | Phoenix Contact                   | 1814676                | TERM BLOCK 6POS                   |
| J3, J6                            | Global Connector Technology       | SP-140520-08-001       | Stackable Header 8-pin connector  |
| J4                                | Global Connector Technology       | SP-140520-06-001       | Stackable Header 6-pin connector  |
| J5                                | Global Connector Technology       | SP-140520-10-001       | Stackable Header 10-pin connector |
| J10, J12, J13, J14, J15, J16, J17 | Harwin Inc.                       | M22-2510205            | 2-pin Connector 2mm vertical      |
| L1                                | Laird-Signal Integrity Products   | TYS5040470M-10         | FIXED IND 47µH 1A 272 MOHM SMD    |
| Q1                                | Infineon Technologies             | IRLML0060TRPBF         | MOSFET N-CH 60V 2.7A SOT-23-3     |
| R1, R3                            | Samsung Electro-Mechanics America | RC1608F101CS           | RES SMD 100Ω 1% 1/10W 0603        |
| R2                                | Yageo                             | RC0603FR-0722KL        | RES SMD 22KΩ 1% 1/10W 0603        |
| R4                                | Stackpole Electronics Inc.        | CSR0603FKR500          | RES SMD 0.5Ω 1% 1/8W 0603         |
| R5                                | Yageo                             | RC0603FR-071KL         | RES SMD 1KΩ 1% 1/10W 0603         |
| U1                                | Maxim Integrated                  | MAX35104ETL+           | MAX35104 Gas Flow Meter SoC       |
| X1                                | ECS Inc.                          | ECS-.327-12.5-17X-C-TR | CRYSTAL 32.7680KHZ 12.5PF SMD     |
| X2                                | Abracon LLC                       | ABLS-4.000MHZ-B2-T     | CRYSTAL 4.0000MHZ 18PF SMD        |

│

Evaluates: MAX35104

## MAX35104EV2 Kit Schematic

<!-- image -->

## MAX35104EV2 PCB Layouts

Assembly

<!-- image -->

PCB Top

<!-- image -->

PCB Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX35104