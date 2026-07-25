<!-- lastmod 2022-08-02 -->
## MAX2248 Evaluation Kit

## General Description

The MAX2248 evaluation kit (EV kit) simplifies evaluation of the MAX2248 power amplifier (PA). It enables testing of the device's RF performance and requires no additional support  circuitry.  The  EV  kit's  signal  inputs  and  outputs use  SMA  connectors  to  facilitate  the  connection  of  RF test equipment.

The MAX2248 EV kit is assembled with a MAX2248 and incorporates  output-matching  components  optimized  for 1880Mhz to 1930MHz.

## EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX2248
- +2.7V to +5V Single-Supply Operation
- RF Output Matched for Operation from 1880MHz to 1930MHz
- Jumpers for Digital Power Control and Shutdown
- All Critical Peripheral Components Included

Ordering Information appears at end of data sheet.

Evaluates: MAX2248

## Quick Start

The MAX2248 EV kit is fully assembled and factory tested. Follow  the  instructions  in  the  Connections  and  Setup Section for proper device evaluation.

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX2248. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least +5dBm of output power at the operating fre -quency (HP 8648D, or equivalent)
- One RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP 8482A, or equivalent)
- One RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP 438A, or equivalent)
- An RF spectrum analyzer that covers the MAX2248 operating frequency range, as well as a few harmonics (HP 8562E, for example)
- A power supply capable of up to 0.25A at +2.7V to +5V
- An optional ammeter for measuring the supply current
- Two 50Ω SMA cables
- One SMA 20dB pad
- A network analyzer (HP 8753D, for example) to measure small-signal return loss and gain (optional)

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device's function. Do not turn on the DC power or RF signal generators until all connections are made:

- 1) Connect a DC supply set to +3.2V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.

## Table 1. Control Inputs

| DIGITAL CONTROL INPUTS   | DIGITAL CONTROL INPUTS   | DIGITAL CONTROL INPUTS   | OUTPUT POWERAND SUPPLY CURRENT   | OUTPUT POWERAND SUPPLY CURRENT   | OUTPUT POWERAND SUPPLY CURRENT   | OUTPUT POWERAND SUPPLY CURRENT   |
|--------------------------|--------------------------|--------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| /SHDN                    | D1                       | D0                       | POWER LEVE                       | PIN (dBm)                        | POUT (dBm)                       | ICC (mA)                         |
| 0                        | 0                        | 0                        | PA OFF                           | +3                               | -                                | <1µA                             |
| 1                        | 0                        | 0                        | P1                               | +3                               | +4                               | 73                               |
| 1                        | 0                        | 1                        | P2                               | +3                               | +12                              | 76                               |
| 1                        | 1                        | 0                        | P3                               | +3                               | +18                              | 82                               |
| 1                        | 1                        | 1                        | P4                               | +3                               | +20                              | 105                              |

- 2) Connect one RF signal generator to J1 (RFIN) SMA Connector on the EV Kit; do not turn on the generator's output.

Set the generator for an output frequency of 1900MHz at a power level of +3dBm.

- 3) Connect a 20dB pad to J2 (RFOUT) SMA Connector on the EV Kit. This is to prevent overloading of the power sensor and the power meter.
- 4) Connect a power sensor to the 20dB pad.
- 5) Connect the power sensor to a power meter. Set the power meter offset to 20dB and frequency to 1900MHz.
- 6) Connect jumpers J2, J3, and J4 to short D1, D0, and SHDN to VCC. This sets the MAX2248 to its highest power mode. The MAX2248 EV kit is shipped in this setting.
- 7) Turn on the DC supply.
- 8) Activate the RF generator's output. The power meter should read approximately +20dBm. The supply current should increase to approximately 105mA.
- 9) Another method for determining gain is by using a network analyzer (optional). This has the advantage of displaying gain versus a swept-frequency band, in addition to displaying input return loss. Refer to the network analyzer manufacturer's user manual for setup details.
- 10) The additional MAX2248 power modes are set by the jumper settings of J2 (D1) and J3 (D0). See Table 1 belowin for these power level settings.

## Layout Considerations

A  good  PC  board  is  an  essential  part  of  an  RF  circuit design. The EV kit PC board can serve as a guide for laying out  a  board  using  the  MAX2248.  Keep  traces  carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the IC to another. A star topology for the supply layout, in which each VCC node on the circuit has a separate connection to  a  central  VCC  node,  can  further  minimize  coupling between sections of the IC. See the Layout section of the MAX2248 data sheet for more information.

## Component Suppliers

| SUPPLIER                                          | WEBSITE                   |
|---------------------------------------------------|---------------------------|
| Murata                                            | www.murata.com            |
| TDK                                               | www.tdk.com               |
| Keystone Electronics                              | www.keyelco.com           |
| Johnson Components (Cinch Connectivity Solutions) | www.cinchconnectivity.com |
| Kamaya                                            | www.kamaya.com            |
| Kemet                                             | www.kemet.com             |
| Mill-Max                                          | www.mill-max.com          |
| Sullins Electronics Corps.                        | www.DigiKey.com/Sullins   |
| Toko                                              | www.tokoam.com            |

Note:

Indicate that you are using the MAX2248 when contacting these component suppliers.

## Ordering Information

| PART          | TYPE                    |
|---------------|-------------------------|
| MAX2248EVKIT# | EV Kit, 1880MHz-1980MHz |

#Denotes RoHS compliant.

Evaluates: MAX2248

## MAX2248 EV Kit Bill of Materials

|   Item | Reference   |   Quantity | Value        | Tolerance   | Description                                 | Number Part                                           | Manufacturer              |
|--------|-------------|------------|--------------|-------------|---------------------------------------------|-------------------------------------------------------|---------------------------|
|      1 | C1          |          1 | 1UF          | ±10%        | 0805 Ceramic Capacitor, SMT                 | GRM21BR71C105KA01                                     | MURATA                    |
|      2 | C2          |          1 | 0.01UF       | ±10%        | 0402 Ceramic Capacitor, SMT                 | C0402C103K3RAC; GRM155R71E103KA01D; C1005X7R1E103K    | KEMET; MURATA; TDK        |
|      3 | C3, C6, C7  |          3 | 470PF        | ±5%         | 0402 Ceramic Capacitor, SMT                 | GCM1555C1H471JA16; GRM1555C1H471JA01                  | MURATA                    |
|      4 | C4, C9, C12 |          3 | 1000PF       | ±5%         | 0402 Ceramic Capacitor, SMT                 | GRM1555C1H102JA01; C1005C0G1H102J050                  | MURATA; TDK               |
|      5 | C5, C11     |          2 | 220PF        | ±5%         | 0402 Ceramic Capacitor, SMT                 | GRM1555C1H221JA01                                     | MURATA                    |
|      6 | C8          |          1 | 18PF         | ±5%         | 0402 Ceramic Capacitor, SMT                 | C0402C180J5GAC; GRM1555C1H180JA01J;C100 5C0G1H180J050 | KEMET/MURATA/T DK         |
|      7 | C10         |          1 | 8PF          | ±0.25pF     | 0402 Ceramic Capacitor, SMT                 | GRM1555C1H8R0CZ01D                                    | MURATA                    |
|      8 | C13         |          1 | 1PF          | ±0.05pF     | 0402 Ceramic Capacitor, SMT                 | GJM1555C1H1R0WB01                                     | MURATA                    |
|      9 | C14         |          1 | 1PF          |             | SMT Capacitor, Ceramic 0201                 | GRM0334C1H1R0WA01                                     | MURATA                    |
|     12 | L1          |          1 | 22NH         | ±10%        | 0603 Ceramic Inductor, SMT                  | LQG18HN22NJ00                                         | MURATA                    |
|     13 | L2          |          1 | 1.5NH        | ±0.2nH      | 0402 Wirewound Inductor, SMT                | LQW15AN1N5C00                                         | MURATA                    |
|     14 | R1-R3       |          3 | 8.2          | ±5%         | 0402 Thick Film Resistor                    | RMC1/16S-8R2J                                         | KAMAYA                    |
|     10 | J1, J5      |          2 | 142-0701-851 |             | 2 pin Connector, End Launch Jack Receptacle | 142-0701-851                                          | JOHNSON COMPONENTS        |
|     11 | J2-J4       |          3 | HEADER_3P    |             | 3 pin Connector, Male, Through Hole         | 800-10-003-10-001000                                  | MILLMAX                   |
|     15 | SU2-SU4     |          3 | STC02SYAN    |             | 2 (1 x 2) Position Shunt Connector Black    | STC02SYAN                                             | SULLINS ELECTRONICS CORP. |
|     16 | TP1         |          1 | N/A          |             | Red Point, Test                             | 5000                                                  | KEYSTONE                  |
|     17 | TP2         |          1 | N/A          |             | Black Point, Test                           | 5001                                                  | KEYSTONE                  |
|     18 | U1          |          1 | MAX2248      |             | MAX2248, 16 TQFN-EP; PACKAGE CODE T1633+5   | MAX2248                                               | MAXIM                     |

Evaluates: MAX2248

## MAX2248 EV Kit Schematic

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams

MAX2248 EV Kit-Gerber Top Silkscreen

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Gerber Top

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Gerber Level 2 GND

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Gerber Level 3 Power

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Gerber Bottom

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Gerber Bottom Silkscreen

<!-- image -->

Evaluates: MAX2248

## MAX2248 EV Kit PCB Layout Diagrams (continued)

MAX2248 EV Kit-Assembly Top

<!-- image -->

Evaluates: MAX2248

## MAX2248 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 6/17            | Initial release                    | -               |
|                 1 | 7/17            | Updated Ordering Information table | 3               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2248