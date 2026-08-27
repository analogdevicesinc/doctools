<!-- lastmod 2022-08-02 -->
## MAX14828 Evaluation Kit

## General Description

The  MAX14828  evaluation  kit  (EV  kit)  consists  of  a MAX14828 evaluation board is a fully assembled and tested circuit  board  that  evaluates  the  MAX14828  IO-Link ® device transceiver.

## Features

- IO-Link-Compliant Device Transceiver
- IO and SPI™ Interface Terminals
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Recommended Equipment

- MAX14828 EV kit
- USB A-to-micro B cable
- User supplied Windows 7/Windows 10 PC with spare USB port
- 24V, 500mA DC power supply
- Multimeter
- Function generator
- Oscilloscope

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 14827\_8EVKITSetupVxxx.EXE. Save the EV kit software to the PC.

Ordering Information appears at end of data sheet.

IO-Link is a registered trademark of ifm electronic GmbH. mbed is a registered trademark of ARM Limited.

Evaluates: MAX14828

- 2)  Install  the  EV  kit  software  by clicking on the file. The  GUI files  are  created  in  the  Windows Start |  Programs | Maxim Integrated menu. During  software  installation,  some versions  of  Windows  may show  a  warning  message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with installation.
- 3)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2)  Ensure that SW1 is set to position 1 (to the far left).
- 3)  Ensure that all switches on SW2 and SW3 are on (to the right).
- 4)  Connect the 24V DC power supply on the VCC and GND connectors of the EV kit board.
- 5)  Connect the oscilloscope to the C/Q test point (TP8).
- 6)  Connect the multimeter to the VL testpoint (TP3)
- 7)  Turn on the power supply.
- 8) Verify that the voltage on the multimeter is 3.3V.
- 9)  Connect  the  USB  cable  from  the  PC  to  the  EV kit  board.
- 10)  Start  the  EV  kit  software  by  opening  the  MAX14828 EV Kit  software  icon  on  the  desktop  or  in  the Start |  Programs  |  Maxim  Integrated menu.  The  EV  kit software  splash  screen  appears  and  then  the  main window appears, as shown in Figure 1.
- 11)  Verify that Connected is displayed on the status bar at the bottom of the main window (Figure 1).
13. 12)Set  the  function  generator  to  generate  a  0  to  3.3V square wave at 10kHz.
14. 13)Connect  the  oscilloscope  to  the  TX  (TP19)  and  CQ (TP8) test points.
15. 13)Disable the TX switch on SW3 by setting it to the right. Connect  the  function  generator  to  the  TX  test  point (TP19).
16. 14)Enable the function generator.
17. 15)Check the Auto-write to MAX14828 box on the GUI.
18. 16)Enable the CQ driver by setting the CQDis bit B[0] in the CQConfig register to 0. See Figure 2.
- 17) Verify that the CQ output switches with the TX input.

<!-- image -->

## Detailed Description of Hardware

The MAX14828 EV kit provides a proven layout for the MAX14828 IO-Link device transceiver.

All  the  power-supply  and  regulator  input  and  output pins  are  connected  to  convenient  connectors  for  easy probing. The device logic input and output pins are also provided with convenient connectors for logic testing.

The C/Q pin are protected by TVS diodes.

See  Table  1  for  a  description  of  all  the  EV  kit  jumper configurations.

## Regulators

The  MAX14828  includes  two  regulators  V5  for  5V  and V33 for 3.3V. Use the on-board switch (SW1) to set the configuration  for  the  V5  regulator:  setting  the  switch  to position 1 connects the REG pin to V5 and the internal 5V regulator is enabled. In this configuration, the V5 regulator is capable of driving external loads up to 30mA total external load current.

Set SW1 to position 2 to configure V5 as an input. When the  internal  5V  regulator  is  not  used,  V5  becomes  the supply input for the internal analog and digital functions and must be supplied externally so that the device operates normally.  Connect  an  external  5V  supply  to  the  V5  test point when SW1 is in position 2. 5V must be present on V5 for normal operation.

To drive larger loads, an external pass transistor can be used to generate the required 5V. For this mode of operation, set SW1 to position 3. This switch setting connects REG to the base of the transistor to regulate the voltage and connects V5 to the emitter.

Use jumper J4 to set the logic supply voltage. Connect J4 to 1-2 to set VL = V5 (5V). Connect J4 to 2-3 to set VL = V33 (3.3V).

## Mode Selection (Pin-Mode or SPI Mode)

The MAX14828 operates with either pin-mode control or through an SPI interface. The GUI can be used to evaluate the device in either mode.

Use  the  mode-selection  jumper,  J1,  or  set  the  SPI/PIN switch on the GUI to set the mode of operation.

## Evaluates: MAX14828

## Pin-Mode (Standalone Operation)

To operate the MAX14828 EV kit in stand-alone pin-mode, leave the J1 jumper open. In this configuration, the J5, J6, and J7 jumpers are used to configure C/Q (Table 2).

## Pin-Mode (With the GUI)

To use the GUI to operate the MAX14828 EV kit in pinmode,  leave  the  J1  jumper  open  and  set  the  SPI/PIN button  on  the  GUI  to  the  left. All  of  the  registers  in  the Register Table will be greyed out in this mode. Click on the  associated  button  for  each  of  the CS /PP,  SDI/TX/ NPN, and CLK/TXEN inputs to configure C/Q (Table 2).

## SPI-Mode

To operate the MAX14828 EV kit in SPI-mode, close the J1 jumper and ensure that all SW2 and SW3 switches are ON. Set the SPI/PIN button on the GUI to the right. Use the registers to configure the MAX14828.

## Evaluating the MAX14828 in Pin-Mode

## Configuring the C/Q Driver

In standalone pin mode, C/Q is configured by setting the J5, J6, and J7 (see Table 2).

Set J5 to 1-2 (SDI/TX/NPN is high) to set the C/Q driver in NPN mode. Set J6 to 1-2 ( CS /PP is high) to set C/Q in push-pull mode. C/Q operates in  PNP mode when J5 and J6 are both set to 2-3 (SDI/TX/NPN and CS /PP are low).

The C/Q driver is enabled/disabled by setting the TXEN input.  Set  J3  to  1-2    (TXEN  is  high)  to  enable  the  C/Q driver. Apply  a  signal  at  the  TX  input  (TP19)  to  set  the C/Q output. C/Q is an input when J3 is 2-3 (TXEN is low).

The GUI can also be used to configure C/Q in pin-mode. Click on the SPI/PIN button on the GUI so that Pin-mode is selected (register table is greyed out). Set the switches next to the CSB/PP and SDI/TX/NPN lines to configure C/Q. C/Q is PP when CSB/PP is set to the right.  C/Q is NPN when SDI/TX/NPN is set to the right (and CSB/PP is set to the left). C/Q is PNP when both CSB/PP and SDI/ TX/NPN are set to the left.

## Setting the C/Q Driver Current

In stand-alone pin mode, the C/Q driver current limit is set with the CLK/TXEN/200MA input. Set J7 to 2-3 to set the driver current limit to 100mA (typ). Set J7 to 1-2 to set the driver current limit to 200mA (typ).

## MAX14828 Evaluation Kit

## LED Driver (LED1IN)

Close J2 to pull the LED1IN input high and turn on LED1. LED1IN is low and LED1 is off when J2 is open.

LED1 can also be turned on/off in the GUI. Click on the LED1IN switch on the GUI to set it to the left (LED1 is off) or right (LED1 is on).

## Evaluating the MAX14828 in SPI-Mode

Set the bits in the register table in the GUI to configure the MAX14828 through the SPI interface.  Click on a register in the upper table and set the bits to the desired value by using the pull-down menu for each bit in the lower table. Click on the Write Modified button to write the changes to the MAX14828.

Alternatively,  check  the  Auto-Write  box  to  automatically send the changes to the device after a bit has been changed.

Evaluates: MAX14828

## Configuring the C/Q Driver

Click on the CQConfig\_Register in the upper table to see the available bits and bit settings in the lower table. Use this  register  to  enable/disable  the  C/Q  driver,  configure the C/Q driver, and enable/disable the RX glitch filter.

## Setting the C/Q Driver Current

Click on the CURRLIM\_Reigster to set the current limit and associated current limit timing parameters for C/Q.

## Interrupt and Status Information

The IRQ LED ( LED2) turns on when a bit in the Interrupt register  is  set.  Check  the  Include  Interrupt  Register  to read  the  Interrupt  register  when  the  Read All  button  is pressed. Click on the INTERRUPT\_Register in the upper table to see which bit was set in the lower table, after an interrupt has occurred.

To monitor or check the status of the device during operation, click on the STATUS\_Register and click the Read All button to see the status bits.

Figure 1. MAX14828 EV Kit Software-EV Kit Connected

<!-- image -->

│

Figure 2. MAX14828 EV Kit Software-Setting a Bit

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                               |
|----------|-----------------|-----------------------------------------------------------|
| J1       | Closed*         | SPI/ PIN is connected to VL. The MAX14828 is in SPI-mode. |
| J1       | Open            | SPI/ PIN is connected GND. The MAX14828A is in pin-mode.  |
| J2       | Closed          | LED1IN is connected to VL. LED1 turns on.                 |
| J2       | Open*           | LED1IN is connected to GND. LED1 turns off.               |
| J3       | Closed          | TXEN is high. C/Q driver is enabled.                      |
| J3       | Open*           | TXEN is low. C/Q driver is disabled.                      |
| J4       | 1-2             | VL is connected to V5                                     |
| J4       | 2-3*            | VL is connected to V33                                    |
| J5       | 1-2             | SDI/TX/NPN is high (connected to VL).                     |
| J5       | 2-3*            | SDI/TX/NPN is low (connected to GND).                     |
| J6       | 1-2             | CS /PP is high (connected to VL).                         |
| J6       | 2-3*            | CS /PP is low (connected to GND).                         |
| J7       | 1-2             | CLK/TXEN/200MA is high (connected to VL).                 |
| J7       | 2-3*            | CLK/TXEN/200MA is low (connected to GND).                 |

## Table 2. Configuring and Setting C/Q

| SPI/ PIN   | TXEN   | TX   | CQ_Dis   | CQ_Q   | C/Q OUTPUT   | C/Q OUTPUT   | C/Q OUTPUT   |
|------------|--------|------|----------|--------|--------------|--------------|--------------|
| SPI/ PIN   | TXEN   | TX   | CQ_Dis   | CQ_Q   | NPN MODE     | PNP MODE     | PP MODE      |
| L          | L      | X    | -        | -      | Z            | Z            | Z            |
| L          | H      | L    | -        | -      | Z            | H            | H            |
| L          | H      | H    | -        | -      | L            | Z            | L            |
| H          | L      | X    | 0        | 0      | Z            | Z            | Z            |
| H          | L      | X    | 0        | 1      | Z            | H            | H            |
| H          | H      | L    | 0        | X      | Z            | H            | H            |
| H          | H      | H    | 0        | 0      | L            | Z            | L            |
| H          | H      | H    | 0        | 1      | Z            | H            | H            |
| H          | X      | X    | 1        | X      | Z            | Z            | Z            |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14828EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14828

│

## MAX14828 EV Kit Bill of Materials

|   ITEM | REF_DES          | DNI/DNP   |   QTY | MFG PART #                                                                          | MANUFACTURER                                 | VALUE                                                      | DESCRIPTION                                                                                      | COMMENTS                                                   |
|--------|------------------|-----------|-------|-------------------------------------------------------------------------------------|----------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------|
|      1 | C1, C2           | -         |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA                    | KEMET/MURATA/TDK/TAIYO YUDEN                 | 1UF                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R |                                                            |
|      2 | C3, C4           | -         |     2 | GRM188R72A104KA35; CC0603KRX7R0BB104                                                | MURATA; TDK                                  | 0.1UF                                                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R      |                                                            |
|      3 | C5               | -         |     1 | C1005X7R1V103K050BB                                                                 | TDK                                          | 0.01UF                                                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R      |                                                            |
|      4 | C6, C8, C12      | -         |     3 | C0603C475K8PAC; LMK107BJ475KA-T; CGB3B1X5R1A475K;C160 8X5R1A475K080; CL10A475KP8NNN | KEMET; TAIYO YUDEN; TDK; SAMSUNG ELECTRONICS | 4.7UF                                                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R        |                                                            |
|      5 | C7, C11, C13-C20 | -         |    10 | C0402C104J4RAC                                                                      | KEMET                                        | 0.1UF                                                      | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.     |                                                            |
|      6 | C9, C10          | -         |     2 | C0402C180J5GAC; GRM1555C1H180JA01J; C1005C0G1H180J050                               | KEMET/MURATA/TDK                             | 18PF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G         |                                                            |
|      7 | C21              | -         |     1 | C0402C105K8PAC                                                                      | KEMET                                        | 1UF                                                        | CAPACITOR; SMT; 0402; CERAMIC;1uF; 10V; 10%; X7R; - 55degC to + 125degC                          |                                                            |
|      8 | C22              | -         |     1 | C1608X5R1A106K                                                                      | TDK                                          | 10UF                                                       | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R |                                                            |
|      9 | D1               | -         |     1 | SPT02-236DDB                                                                        | ST MICROELECTRONICS                          | SPT02-236DDB                                               | DIODE; TVS; UQFN-2L; PIV=38V; IF=0.3A                                                            |                                                            |
|     10 | D2               | -         |     1 | SPT01-335DEE                                                                        | ST MICROELECTRONICS                          | SPT01-335DEE                                               | DIODE; TVS; QFN6; PIV=38V; IF=0.3A                                                               |                                                            |
|     11 | D5               | -         |     1 | ZHCS506TA                                                                           | DIODES INCORPORATED                          | ZHCS506TA                                                  | DIODE; SCH; SMT (SOT-23); PIV=60V; IF=0.5A                                                       |                                                            |
|     12 | DS1              | -         |     1 | LG L29K-G2J1-24                                                                     | OSRAM                                        | LG L29K-G2J1-24                                            | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                          |                                                            |
|     13 | J1, J2           | -         |     2 | PCC02SAAN                                                                           | SULLINS                                      | PCC02SAAN                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC        |                                                            |
|     14 | J3-J7            | -         |     5 | PCC03SAAN                                                                           | SULLINS                                      | PCC03SAAN                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC        |                                                            |
|     15 | J10              | -         |     1 | 105017-0001                                                                         | MOLEX                                        | 105017-0001                                                | CONNECTOR; FEMALE; SMT; MICRO-USB B RECEPTACLE; RIGHT ANGLE; 5PINS                               |                                                            |
|     16 | L1               | -         |     1 | BLM21AG601SN1D                                                                      | MURATA                                       | 600                                                        | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                        |                                                            |
|     17 | LED1             | -         |     1 | LTST-C193KGKT-5A                                                                    | LITE-ON ELECTRONICS; INC.                    | LTST-C193KGKT-5A                                           | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC        |                                                            |
|     18 | LED2             | -         |     1 | LTST-C193KRKT-2A                                                                    | LITE-ON ELECTRONICS; INC.                    | LTST-C193KRKT-2A                                           | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                        |                                                            |
|     19 | Q1               | -         |     1 | BCP56TA                                                                             | DIODES INCORPORATED                          | BCP56TA                                                    | TRAN; NPN SILICON PLANAR MEDUIM POWER TRANSISTOR; NPN; SOT-223 ; PD-(2.0W); I-(1A); V-(80V)      |                                                            |
|     20 | R1               | -         |     1 | CRCW0603680RFK                                                                      | VISHAY DALE                                  | 680 RESISTOR, 0603, 680 OHM, 1%, 100PPM, 0.10W, THICK FILM | 680 RESISTOR, 0603, 680 OHM, 1%, 100PPM, 0.10W, THICK FILM                                       | 680 RESISTOR, 0603, 680 OHM, 1%, 100PPM, 0.10W, THICK FILM |

## MAX14828 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                           | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER                        | VALUE                                                      | DESCRIPTION                                                                                                                   | COMMENTS                                                   |
|--------|-----------------------------------|-----------|-------|-----------------------------------------------------------|-------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| 21     | R2                                | -         |     1 | CRCW0603665RFK                                            | VISHAY DALE                         | 665 RESISTOR; 0603; 665 OHM; 1%; 100PPM; 0.10W; THICK FILM | 665 RESISTOR; 0603; 665 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    | 665 RESISTOR; 0603; 665 OHM; 1%; 100PPM; 0.10W; THICK FILM |
| 22     | R3, R5, R8, R12, R15-R17, R33-R35 | -         |    10 | CRCW060310K0FK; ERJ-3EKF1002                              | VISHAY DALE; PANASONIC              | 10K                                                        | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                            |                                                            |
| 23     | R6                                | -         |     1 | CRCW0603499RFK; RK73H1J4990FT; ERJ-3EKF4990V; RC1608F4990 | KOA; VISHAY; PANASONIC; SAMSUNG     |                                                            | 499 RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    |                                                            |
| 24     | R7                                | -         |     1 | CRCW060315K0FK                                            | VISHAY DALE                         | 15K                                                        | RESISTOR, 0603, 15K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                        |                                                            |
| 25     | R9                                | -         |     1 | CRCW040210K0FK; RC0402FR-0710K                            | VISHAY DALE; YAGEO PHICOMP          | 10K                                                        | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                          |                                                            |
| 26     | R10                               | -         |     1 | CRCW04022K20FK; RC0402FR-072K2L                           | VISHAY DALE/YAGEO PHICOMP           | 2.2K                                                       | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |                                                            |
| 27     | R11, R13, R18-R23                 | -         |     8 | CRCW040210R0FK; 9C04021A10R0FL                            | VISHAY DALE                         |                                                            | 10 RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                    |                                                            |
| 28     | R14                               | -         |     1 | CRCW060312K0FK                                            | VISHAY DALE                         | 12K                                                        | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                        |                                                            |
| 29     | SW1                               | -         |     1 | MHS231                                                    | COPAL ELECTRONICS INC               | MHS231                                                     | SWITCH; DP3T; THROUGH HOLE; STRAIGHT; 12V; 0.2A; MHS SERIES; HYPER- MINIATURE SLIDE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM |                                                            |
| 30     | SW2, SW3                          | -         |     2 | 219-7MST                                                  | CTS                                 | 219-7MST                                                   | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                        |                                                            |
| 31     | TP1, TP3-TP5                      | -         |     4 | 5010                                                      | KEYSTONE                            | N/A                                                        | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                            |                                                            |
| 32     | TP2, TP12, TP18, TP24             | -         |     4 | 5011                                                      | KEYSTONE                            | N/A                                                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |                                                            |
| 33     | TP7-TP9, TP13, TP17, TP19-TP21    | -         |     8 | 5014                                                      | KEYSTONE                            | N/A                                                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |                                                            |
| 34     | U1                                | -         |     1 | MAX14828ATG+                                              | MAXIM                               | MAX14828ATG+                                               | EVKIT PART-IC; TXRX; IO-LINK DEVICE TRANSCEIVER; TQFN24-EP 4X4                                                                |                                                            |
| 35     | U2                                | -         |     1 | 93LC66BT-I/OT                                             | MICROCHIP                           | 93LC66BT-I/OT                                              | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                |                                                            |
| 36     | U3                                | -         |     1 | FT2232HL                                                  | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL                                                   | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                               |                                                            |
| 37     | U4                                | -         |     1 | MAX15006AATT+                                             | MAXIM                               | MAX15006AATT+                                              | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                          |                                                            |
| 38     | Y1                                | -         |     1 | ABM7-12.000MHZ-D2Y-T                                      | ABRACON                             | 12MHZ                                                      | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                                |                                                            |
| 39     | PCB                               | -         |     1 | MAX14828                                                  | MAXIM                               | PCB                                                        | PCB:MAX14828                                                                                                                  | -                                                          |
| 40     | D4, D7-D9                         | DNP       |     0 | SMBJ33A                                                   | ST MICROELECTRONICS                 | 33V                                                        | DIODE; TVS; SMB (DO-214AA); VRM=33V; IPP=11.8A                                                                                |                                                            |
| 41     | J8                                | DNP       |     0 | PBC08SAAN                                                 | SULLINS ELECTRONICS CORP.           | PBC08SAAN                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                              |                                                            |
| TOTAL  |                                   |           |    88 |                                                           |                                     |                                                            |                                                                                                                               |                                                            |

Evaluates: MAX14828

## MAX14828 EV Kit Schematic

<!-- image -->

Evaluates: MAX14828

## MAX14828 EV Kit Schematic (continued)

<!-- image -->

## MAX14828 EV Kit PCB Layout Diagrams

MAX14828 EV Kit-Top Silkscreen

<!-- image -->

MAX14828 EV Kit-Top

<!-- image -->

│

## MAX14828 EV Kit PCB Layout Diagrams (continued)

MAX14828 EV Kit-Internal 2

<!-- image -->

MAX14828 EV Kit-Internal 3

<!-- image -->

│

## MAX14828 EV Kit PCB Layout Diagrams (continued)

MAX14828 EV Kit-Bottom

<!-- image -->

MAX14828 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14828 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14828