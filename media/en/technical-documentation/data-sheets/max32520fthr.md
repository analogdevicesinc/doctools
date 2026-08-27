<!-- lastmod 2022-08-03 -->
## MAX32520FTHR Evaluation Kit

## General Description

The MAX32520FTHR evaluation kit provides an inexpensive and convenient platform for evaluating the MAX32520  secure  Arm ®   Cortex ® -M4  processor  with FPU  that  incorporates  Maxim's  patented  ChipDNA™ PUF  technology  and  other security features.  The featherwing  form  factor  and  USB  connectivity  enable rapid prototyping and firmware development.

## EV Kit Contents

- MAX32520FHTR circuit board
- MAX326325PICO JTAG debugger/programmer
- USB cable

## MAX32520FTHR EV Kit Board Top View

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere. ChipDNA is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- Featherwing Form Factor for General Hardware Prototyping
- PMOD Connector for Interface with PMOD-Compatible Peripherals
- USB Controller for High-Speed Data Transfer with a PC Host
- SWD Port for Programming and Debugging

Ordering Information appears at end of data sheet.

Evaluates: MAX32520

## MAX32520FTHR EV Block Diagram

<!-- image -->

## Detailed Description

The MAX32520FTHR EV kit is designed to support lowcost  rapid  prototyping  with  the  MAX32520  DeepCover ® ChipDNA™ secure Arm Cortex-M4 processor with FPU. For  a  full-featured evaluation  platform,  refer  to the MAX32520 evaluation kit.

A  quad-SPI  (QSPI)  bus  connects  the  MCU  to  the  host through a high-speed USB-to-QSPI bridge chip, the FTDI DT4222H. This facilitates  easy  experimentation  with  the high-speed QSPI and I 2 C busses on the MAX32520 and support  applications  such  as  secure  boot,  hardwareaccelerated cryptography, and secure dongle applications.

The  kit  also  features  a  10-pin  SWD  Arm  JTAG  header  that  can  be  used  with  the  included  debugger,  the MAX32625PICO, to flash and debug firmware.

Example  firmware  is  available  on  the  design  resources tab of the MAX32520FHTR product page on the Maxim website.  Maxim's  Low-Power  Arm  Micro  Toolchain  is required to develop and flash firmware.

## Ordering Information

| PART          | TYPE           |
|---------------|----------------|
| MAX32520FTHR# | Evaluation Kit |

#Denotes RoHS compliance.

DeepCover is a registered trademark of Maxim Integrated Products, Inc.

│

## MAX32520FTHR EV Kit Bill of Materials

| REFDES                             | MANUFACTURER                     | PART NUMBER             | DESCRIPTION                                 |
|------------------------------------|----------------------------------|-------------------------|---------------------------------------------|
| C1, C3, C12, C17                   | Murata Electronics               | ZRB15XR61A475KE01D      | CAP CER 4.7µF 10V X5R 0402                  |
| C2, C5, C7, C9, C13, C14, C16, C18 | Samsung Electro-Mechanics        | CL05A104KQ5NNNC         | CAP+,0.1µF,10%,6.3V,X5R,0402                |
| C4, C6, C8                         | Samsung Electro-Mechanics        | CL05A105KQ5NNNC         | CAP CER 1µF 6.3V X5R 0402                   |
| C10, C11                           | Murata Electronics               | GRM1555C1H270JA01D      | CAP CER 27PF 50V C0G/NP0 0402               |
| C15                                | TDK Corporation                  | C1005X5R1E474K050BE     | CAP CER 0.47µF 25V X5R 0402                 |
| D1                                 | Lumex Opto/ Components Inc.      | SML-LX0404SIUPGUSB      | LED RGB CLEAR 0404 SMD                      |
| D5                                 | OSRAM Opto Semiconductors        | LS L29K-G1J2-1-Z        | SMD Super Red, 630nm 17mcd, 2mA             |
| FB1                                | Murata Electronics North America | BLM21PG221SN1D          | FERRITE CHIP 220 Ω 0805                     |
| J1                                 | FCI                              | 10118193-0001LF         | CONN USB MICRO B RECPT SMT R/A              |
| J2                                 | Samtec Inc                       | FTSH-105-01-F-DV-K-P    | CONN HEADER 10POS DUAL .05' SMD             |
| J5                                 | Sullins Connector Solutions      | GRPB021VWVN-RC          | CONN HEADER VERT 2POS 1.27MM                |
| P1                                 | Samtec Inc.                      | HLE-106-02-F-DV-BE-K-TR | .100 TIGER BEAM SOCKETASSEMBLY              |
| Q2                                 | Nexperia USAInc.                 | PMZB600UNEYL            | MOSFET N-CH 20V XQFN3                       |
| R1, R3, R4                         | Panasonic Electronic Components  | ERJ-2RKF3301X           | RES SMD 3.3K Ω 1% 1/10W 0402                |
| R2, R5, R7, R10, R11               | Panasonic Electronic Components  | ERJ-2RKF1002X           | RES SMD 10K Ω 1% 1/10W 0402                 |
| R7, R10                            | Stackpole Electronics Inc        | RMCF0402FT4K70          | RES 4.7K Ω 1% 1/16W 0402                    |
| R12                                | TE Connectivity Passive Product  | CRGCQ0402F150K          | RES 150k Ω 1% 0402                          |
| R6                                 | Yageo                            | RC0402FR-0747KL         | RES SMD 47K Ω 1% 1/16W 0402                 |
| R8                                 | Yageo                            | RC0402FR-071ML          | RES SMD 1M Ω 1% 1/16W 0402                  |
| R9                                 | TE Connectivity Passive Product  | CRGCQ0402F12K           | CRGCQ 0402 12K 1%                           |
| R14                                | Yageo                            | RC0402FR-071KL          | RES SMD 1K Ω 1% 1/16W 0402                  |
| U1                                 | Maxim Integrated                 | MAX38902AATA+           | 12µVRMS Low Noise 500mALDO Linear Regulator |
| U2                                 | Maxim Integrated                 | MAX32520-BNJ+           | ChipDNA Secure Arm CortexM4 Microcontroller |
| U3                                 | FTDI                             | FT4222HQ-D-R            | USB to QuadSPI/I2C Bridge                   |
| X1                                 | Diodes Incorporated              | FH1200001               | CRYSTAL 12MHZ 20PF SMD                      |
| R12                                | TE Connectivity Passive Product  | CRGCQ0402F150K          | RES 150k Ω 1% 0402                          |

│

Evaluates: MAX32520

## MAX32520FTHR EV Kit Schematic Diagram

<!-- image -->

│

Evaluates: MAX32520

## MAX32520FTHR EV Kit PCB Layout

MAX32520FTHR PCB Layout-Top View

<!-- image -->

MAX32520FTHR PCB Layout-Board Outline

<!-- image -->

│

## MAX32520FTHR EV Kit PCB Layout (continued)

MAX32520FTHR PCB Layout-Top Silkscreen

<!-- image -->

MAX32520FTHR PCB Layout-Ground Plane

<!-- image -->

│

## MAX32520FTHR EV Kit PCB Layout (continued)

MAX32520FTHR PCB Layout-Power Plane

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reVerveV tKe rigKt to FKange tKe FirFXitry and VpeFifiFationV witKoXt notiFe at any time.

│

Evaluates: MAX32520