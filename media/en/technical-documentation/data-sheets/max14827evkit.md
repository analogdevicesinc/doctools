<!-- lastmod 2022-08-02 -->
## MAX14827 Evaluation Kit

## General Description

The  MAX14827  evaluation  kit  (EV  kit)  consists  of  a MAX14827 evaluation board is a fully assembled and tested circuit  board  that  evaluates  the  MAX14827  IO-Link ® device transceiver.

The EV kit is designed to operate as a stand-alone board or with an mbed ® board for easy software evaluation.

The MAX14827 EV kit can also be used to evaluate the MAX14827A.

## Features

- IO-Link-Compliant Device Transceiver
- IO and SPI Interface Terminals
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

IO-Link is a registered trademark of ifm electronic GmbH. mbed is a registered trademark of ARM Limited.

Evaluates: MAX14827

MAX14827A

## Quick Start

## Recommended Equipment

- MAX14827 EV kit
- 24V, 500mA DC power supply
- Function generator or logic signal generator
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all the jumpers are in their default positions, as  shown  in Table  1.  Ensure  that  SW1  is  to  the  left (using the internal 5V LDO).
- 2)  Connect the 24V DC power supply on the VCC and GND connectors of the EV kit board.
- 3)  Set  the  function  generator  to  generate  a  0-3V  1kHz square wave. Connect the function generator between the TX and GND test points on the EV kit.
- 4)  Connect the oscilloscope to the C/Q test point.
- 5)  Turn on the power supply.
- 6)  Turn on the function generator.
- 7)  Verify that the C/Q output switches as expected.

<!-- image -->

## Detailed Description of Hardware

The MAX14827 EV kit provides a proven layout for the MAX14827 IO-Link device transceiver.

All  the  power-supply  and  regulator  input  and  output pins  are  connected  to  convenient  connectors  for  easy probing. The device logic input and output pins are also provided with convenient connectors for logic testing.

The transceiver's C/Q, and DO pins are protected by TVS diodes.

See  Table  1  for  a  description  of  all  the  EV  kit  jumper configurations.

## Regulators

The device includes  two  internal  regulators  to  generate 5V (V5) and 3.3V (V33). Use the switch (SW1) to set the configuration for the V5 regulator.

Set  switch  SW1  to  position  1  (far  left)  to  generate  5V using the internal regulator. In this configuration, the V5 regulator is capable of driving external loads up to 30mA total external load current.

Set  SW1  to  position  2  (middle)  to  configure  V5  as  an input.  When  the  internal  5V  regulator  is  not  used,  V5 becomes  the  supply  input  for  the  internal  analog  and digital functions and must be supplied externally so that the device operates normally. Connect an external 5V supply to the V5 test point when SW1 is in position 2. 5V must be present on V5 for normal operation.

To drive larger loads, an external pass transistor can be used to generate the required 5V. For this mode of operation, set SW1 to  position  3  (far  right).  This  switch  setting  connects REG to the base of the transistor to regulate the voltage and connects V5 to the emitter.

Use jumper J4 to set the logic supply voltage. Connect J4 to 1-2 to set VL = V5 (5V). Connect J4 to 2-3 to set VL = V33 (3.3V).

## Mode Selection (Pin-Mode or SPI Mode)

The MAX14827 operates with either pin-mode control or via an SPI interface.

The  mode-selection  switch  (SW2)  sets  the  mode  of operation.  Set  SW2  to  the  on  position  to  operate  the MAX14827 in SPI mode. Set SW2 to off (left) to operate the board in pin-mode.

SW2 can be toggled after power-up.

## Pin-Mode

To operate the device in pin-mode, set the mode-selection switch, SW2, to the off position (left). In pin-mode, J5, J6, and J7 are used to configure the C/Q and DO drivers.

## SPI Mode

The EV kit was designed to operate with an mbed board for fast and easy prototyping. To operate the EV kit in SPI mode, connect the board to the Arduino-headers on the mbed board and set the mode-selection switch, SW2, to the on position. Remove the shunts from all of the jumpers except J4.

## Evaluating the MAX14827 in Pin-Mode

## Configuring the Drivers (C/Q, DO)

C/Q and DO are both configured by setting the J5, J6, and J7 jumpers in pin-mode. See Table 2.

Set J5 to 1-2 (SDI/TX/NPN is high) to set the C/Q and DO drivers in NPN mode. Set J6 to 1-2 ( CS /PP is high) to set C/Q and DO to push-pull mode. C/Q and DO operate in PNP mode when J5 and J6 are both set to 2-3 (SDI/TX/ NPN and CS /PP are low).

The C/Q driver is enabled/disabled by setting the TXEN input.  Set  J8  to  1-2    (TXEN  is  high)  to  enable  the  C/Q driver. Apply  a  signal  at  the  TX  input  (TP19)  to  set  the C/Q output. C/Q is an input when J8 is 2-3 (TXEN is low).

DO cannot be disabled in Pin mode. Apply a signal at the LO input (TP15) to set the DO output.

## Setting the Driver Current (C/Q, DO)

Driver current limit for the C/Q and DO outputs is selectable in pin-mode using the CLK/TXEN/200MA input. Set J7 to 2-3 to set the driver current limit to 100mA (typ). Set J7 to 1-2 to set the driver current limit to 200mA (typ).

## LED Driver (LED1IN)

Close J1 to pull the LED1IN input high and turn on LED1. LED1IN is low and LED1 is off when J1 is open.

## Evaluating the MAX14827 in SPI Mode

The EV kit was designed to operate with an mbed board for fast and easy prototyping. To operate the EV kit in SPI mode connect the MAX14827 EV kit to the Aurdino-headers on the mbed board and configure the board for SPI operation. See the Evaluating the MAX14827 with mbed Quick Start Guide for more details.

## Evaluates: MAX14827 MAX14827A

## MAX14827 Evaluation Kit

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                      |
|----------|-----------------|------------------------------------------------------------------|
| J1       | Closed          | LED1IN is high. LED1 is on.                                      |
| J1       | Open*           | LED1IN is low. LED1 is off.                                      |
| J2       | Closed          | UARTSEL is high                                                  |
| J2       | Open*           | UARTSEL is low                                                   |
| J3       | Closed          | LED2 is bypassed. IRQ is pulled to VL                            |
| J3       | Open*           | IRQ is pulled to VL through LED2. LED2 turns on when IRQ is low. |
| J4       | 1-2             | VL is connected to V5                                            |
| J4       | 2-3*            | VL is connected to V33                                           |
| J5       | 1-2             | SDI/TX/NPN is high                                               |
| J5       | 2-3*            | SDI/TX/NPN is low                                                |
| J6       | 1-2             | CS /PP is high                                                   |
| J6       | 2-3*            | CS /PP is low                                                    |
| J7       | 1-2             | CLK/TXEN/200MA is high                                           |
| J7       | 2-3*            | CLK/TXEN/200MA is low                                            |
| J8       | 1-2             | TXEN is high. C/Q driver is enabled                              |
| J8       | 2-3*            | TXEN is low. C/Q driver is disabled                              |

## Table 2. Configuring and Setting C/Q and DO

| SPI/ PIN   | TXEN   | TX or LO   | CQ_Dis or DO_Dis   | CQ_Q or DO_Q   | NPN MODE   | NPN MODE   | PNP MODE   | PNP MODE   | PP MODE   | PP MODE   |
|------------|--------|------------|--------------------|----------------|------------|------------|------------|------------|-----------|-----------|
| SPI/ PIN   | TXEN   | TX or LO   | CQ_Dis or DO_Dis   | CQ_Q or DO_Q   | C/Q        | DO         | C/Q        | DO         | C/Q       | DO        |
|            | L      | L          | -                  | -              | Z          | Z          | Z          | H          | Z         | H         |
|            |        | H          | -                  | -              | Z          | L          | Z          | Z          | Z         | L         |
|            | H      | L          | -                  | -              | Z          | Z          | H          | H          | H         | H         |
|            |        | H          | -                  | -              | L          | L          | Z          | Z          | L         | L         |
|            | L      | L          | 0                  | 0              | Z          | Z          | Z          | H          | Z         | H         |
|            |        | L          | 0                  | 1              | Z          | Z          | H          | H          | H         | H         |
|            |        | H          | 0                  | 0              | Z          | L          | Z          | Z          | Z         | L         |
|            |        | H          | 0                  | 1              | Z          | Z          | H          | H          | H         | H         |
|            | H      | L          | 0                  | 0              | Z          | Z          | H          | H          | H         | H         |
|            |        | L          | 0                  | 1              | Z          | Z          | H          | H          | H         | H         |
|            |        | H          | 0                  | 0              | L          | L          | Z          | Z          | L         | L         |
|            |        | H          | 0                  | 1              | Z          | Z          | H          | H          | H         | H         |
|            | X      | X          | 1                  | X              | Z          | Z          | Z          | Z          | Z         | Z         |

│

Evaluates: MAX14827

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX14827 EV BOM
- MAX14827 EV PCB Layout
- MAX14827 EV Schematic

Evaluates: MAX14827

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14827EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14827 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/15           | Initial release | -               |
|                 1 | 7/16            | Added MAX14827A | 1-5             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14827

MAX14827A

| TITLE: Bill of Materials   | TITLE: Bill of Materials   | TITLE: Bill of Materials                                           | TITLE: Bill of Materials      | TITLE: Bill of Materials   | TITLE: Bill of Materials                                                                         | TITLE: Bill of Materials   |
|----------------------------|----------------------------|--------------------------------------------------------------------|-------------------------------|----------------------------|--------------------------------------------------------------------------------------------------|----------------------------|
| DATE: 07/17/2015           | DATE: 07/17/2015           | DATE: 07/17/2015                                                   | DATE: 07/17/2015              | DATE: 07/17/2015           | DATE: 07/17/2015                                                                                 | DATE: 07/17/2015           |
| DESIGN: max14827_evkit_a   | DESIGN: max14827_evkit_a   | DESIGN: max14827_evkit_a                                           | DESIGN: max14827_evkit_a      | DESIGN: max14827_evkit_a   | DESIGN: max14827_evkit_a                                                                         | DESIGN: max14827_evkit_a   |
|                            | REF_DES                    | QTY MFG PART #                                                     | MANUFACTURER                  | VALUE                      | DESCRIPTION                                                                                      |                            |
| 1                          | C1, C2                     | 2 C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA | KEMET/MURATA/TDK /TAIYO YUDEN | 1UF                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R |                            |
| 2 C3, C4                   | 2 C3, C4                   | 2 GRM188R72A104KA35                                                | MURATA                        | 0.1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R      |                            |
| 3 D1, D8                   | 3 D1, D8                   | 2 SPT02-236DDB                                                     | ST MICROELECTRONICS           | SPT02- 236DDB              | DIODE; TVS; UQFN-2L; PIV=38V; IF=0.3A                                                            |                            |
| 4 D2                       | 4 D2                       | 1 SPT01-335DEE                                                     | ST MICROELECTRONICS           | SPT01- 335DEE              | DIODE; TVS; QFN6; PIV=38V; IF=0.3A                                                               |                            |
| 5 D3, D4, D6, D7, D9       | 5 D3, D4, D6, D7, D9       | 5 SMBJ33A                                                          | ST MICROELECTRONICS           | 33V                        | DIODE; TVS; SMB (DO-214AA); VRM=33V; IPP=11.8A                                                   |                            |
| 6 D5                       | 6 D5                       | 1 ZHCS506TA                                                        | DIODES INCORPORATED           | ZHCS506T A                 | DIODE; SCH; SMT (SOT-23); PIV=60V; IF=0.5A                                                       |                            |
| 7 J1-J3                    | 7 J1-J3                    | 3 PCC02SAAN                                                        | SULLINS                       | PCC02SAA N                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC         |                            |
| 8 J4-J8                    | 8 J4-J8                    | 5 PCC03SAAN                                                        | SULLINS                       | PCC03SAA N                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC         |                            |
| 9 LED1                     | 9 LED1                     | 1 LTST-C193KGKT-5A                                                 | LITE-ON ELECTRONICS; INC.     | LTST- C193KGKT- 5A         | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC        |                            |

| 10 LED2                  | 1 LTST-C193KRKT-2A                              | LITE-ON ELECTRONICS; INC.           | LTST- C193KRKT- 2A   | DIODE; LED; STANDARD; RED; SMT (0603); PIV=2.2V; IF=0.002A; -55 DEGC TO +85 DEGC                                        |
|--------------------------|-------------------------------------------------|-------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| 11 P1                    | 1 SSQ-110-23-G-S                                | SAMTEC                              | SSQ-110- 23-G-S      | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; STRAIGHT; 10PINS                                                           |
| 12 P2, P3                | 2 SSQ-108-23-G-S                                | SAMTEC                              | SSQ-108- 23-G-S      | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; STRAIGHT; 8PINS                                                            |
| 13 P4                    | 1 SSQ-106-03-T-S                                | SAMTEC                              | SSQ-106- 03-T-S      | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; STRAIGHT; 6PINS                                                            |
| 14 Q1                    | 1 BCP56TA                                       | DIODES INCORPORATED                 | BCP56TA              | TRAN; NPN SILICON PLANAR MEDUIM POWER TRANSISTOR; NPN; SOT-223 ; PD-(2.0W); I-(1A); V- (80V)                            |
| 15 R1, R2, R4, R7, R8    | 5 CR0603-FX-1001ELF                             | BOURNS                              | 1K                   | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |
| 16 R3, R5, R12, R15- R17 | 6 CRCW060310K0FK; 9C06031A1002FK; ERJ- 3EKF1002 | VISHAY DALE/YAGEO PHICOMP/PANASONIC | 10K                  | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |
| 17 R6                    | 1 CRCW0603500RFK                                | VISHAY DALE                         | 500                  | RESISTOR, 0603, 500 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                  |
| 18 R9-R11                | 3 CRCW0603100RFK; ERJ- 3EKF1000                 | VISHAY DALE/PANASONIC               | 100                  | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
| 19 R13, R14              | 0 N/A                                           | ?                                   | DNI                  | DO NOT INSTALL, RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                        |
| 20 R18                   | 1 N/A                                           | ?                                   | 10K                  | RESISTOR; 0402; 10K; 1%; 100PPM; 1/16W; THICK FILM; FORMFACTOR                                                          |
| 21 SU1-SU7               | 7 STC02SYAN                                     | SULLINS ELECTRONICS CORP.           | STC02SYA N           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |

<!-- image -->

| 22 SW1                              | 1 MHS231       | COPAL ELECTRONICS INC   | MHS231        | SWITCH; DP3T; THROUGH HOLE; STRAIGHT; 12V; 0.2A; MHS SERIES; HYPER-MINIATURE SLIDE SWITCH; RCOIL=0 OHM; RINSULATION=100MOHM                                                        |
|-------------------------------------|----------------|-------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 23 SW2                              | 1 A6T-1104     | OMRON                   | A6T-1104      | SWITCH; SPST; THROUGH HOLE; STRAIGHT; 24V; 0.025A; A6T DIP SWITCH; SLIDE TYPE; WIDE ASSORTMENT OF POLE CONFIGURATIONS; RCOIL=0.2 OHM; RINSULATION=100M OHM; OMRON                  |
| 24 TP1, TP3- TP5                    | 4              | 5010 KEYSTONE           | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   |
| 25 TP2, TP12, TP18, TP24, TP26      | 5              | 5011 KEYSTONE           | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 26 TP6-TP11, TP13- TP17, TP19- TP23 | 16             | 5014 KEYSTONE           | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                           |
| 25 U1                               | 1 MAX14827ATG+ | MAXIM                   | MAX1482 7ATG+ | IC; TXRX; IO-LINK DEVICE TRANSCEIVER; TQFN24-EP 4X4                                                                                                                                |
| TOTAL                               | 81             |                         |               |                                                                                                                                                                                    |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

GND