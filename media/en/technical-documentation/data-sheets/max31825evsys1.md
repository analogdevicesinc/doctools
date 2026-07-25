<!-- lastmod 2022-08-05 -->
## MAX31825 Evaluation System

## General Description

The MAX31825 evaluation system (EV system) demonstrates the MAX31825 1-Wire ®  temperature sensor with hardware-selectable address and alarm. The MAX31825 EV system includes the MAX31825 evaluation kit (EV kit) and the USB2PMB2 module. Windows ®  7/8/8.1/10-compatible  software  provides  a  user-friendly  interface  that demonstrates the features of the MAX31825.

The  MAX31825  EV  kit  contains  an  on-board  DS2482 I 2 C  to  1-Wire  converter  and  comes  with  the  6-pin  WLP MAX31825ANT+ installed.

## Features

- On-Board I 2 C to 1-Wire Converter (DS2482)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7/8/8.1/10-Compatible Software

## MAX31825 EV System Photo

<!-- image -->

Ordering Information appears at end of data sheet.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

Windows is a registered trademark of Microsoft Corporation.

Evaluates: MAX31825

## Quick Start

## Required Equipment

- MAX31825 EV system (USB cable included)
- Windows PC
- MAX31825GUISetup.msi file

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install the MAX31825GUISetup.msi software on a computer.
- 2) Align the X2 connector (top row) of the USB2PMB2 with the J1 connector of the MAX31825 EV kit. Figure 1 shows the side view of how the two boards are connected. The USB2PMB2 is on the left and the MAX31825 EV kit is on the right.

<!-- image -->

## MAX31825 Evaluation System

- 3) Verify that the shunts are in the default position as shown in Table 1.
- 4) Connect the USB cable from the PC to the USB2PMB2 board.
- 5) Open the EV kit GUI, MAX31825EVKit.exe (Figure 2).
- 6) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
- 7) Click the Detect Address button, and the 0b111110 bits appear in the A5-A0 edit box.
- 8) Adjust the Conversion to 111-125ms within the Configuration Register group box.
- 9) Click the Write Scratchpad button.
- 10) Verify the configuration register is set by clicking the Read Scratchpad button.
- 11)  Start evaluating the MAX31825 by clicking the Sample Continuously button. Figure 3 shows the MAX31825 measuring temperature.

Figure 1. MAX31825 Side View

<!-- image -->

Figure 2. MAX31825 Main Window

<!-- image -->

## Evaluates: MAX31825

│

Figure 3. Measuring Temperature on the MAX31825

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                       |
|----------|------------------|---------------------------------------------------------------------------------------------------|
| J2       | 1-2*             | Connects VDD to the pullup resistors for DQ and ALARM.                                            |
| J2       | 2-3              | User-supplied VPU. Connects VPU to the pullup resistors for DQ and ALARM.                         |
| J4       | 1-2*             | ConnectsALARM signal from the USB2PMB2 to the MAX31825 (U1).                                      |
| J4       | 2-3              | ConnectsALARM signal from the USB2PMB2 to the IC (U2).                                            |
| J5       | 1-2*             | Connects DQ signal from the DS2482 to the MAX31825 (U1).                                          |
| J5       | 2-3              | Connects DQ signal from the DS2482 to the IC (U2).                                                |
| J6       | 1-2*             | Connects VDD to power the MAX31825 (U1).                                                          |
| J6       | 2-3              | Connects VPU to power the MAX31825 (U1).                                                          |
| J6       | Not installed    | User-supplied VDD. Connect power to VCC0 test point.                                              |
| J7       | 1-2*             | Not in Use                                                                                        |
| J7       | 1-3              | Not in Use.                                                                                       |
| J8       | 1-2*             | Connects ADD1 to PU pullup voltage for address selection for the MAX31825 (U1).                   |
| J8       | 1-3              | Parasite Power Mode Only. Connects ADD1 to DQ signal for address selection for the MAX31825 (U1). |
| J8       | 1-4              | Connects ADD1 to ground for address selection for the MAX31825 (U1).                              |
| J9       | 1-2*             | Connects ADD1 to PU pullup voltage for address selection for the IC (U2).                         |
| J9       | 1-3              | Connects ADD1 to DQ signal for address selection for the IC (U2).                                 |
| J9       | 1-4              | Connects ADD1 to ground for address selection for the IC (U2).                                    |

## General Description of Software

The main window of the MAX31825 EV kit software contains controls to evaluate the MAX31825 IC.

## Configuration Register

The Configuration  Register groupbox  allows  the  user to  select  the  resolution,  conversion  rate,  format,  and fault queue. Use the Resolution drop-down list to select between  9-,  10-,  11-,  and  12-bits  resolution.  With  each resolution,  the  user  can  set  the  desired  sampling  rate using the options in the Conversion drop-down list. The temperature can be adjusted between normal and extended format. In addition, users can set the fault queue from 1 or 4 consecutive faults. When the desired configuration is set, click the Write Scratchpad button to apply.

## High and Low Fault

Adjust the TH (Temperature High) and TL (Temperature Low) edit  boxes  to  the  desired  temperature  threshold.  When  the  desired  setting  is  set,  click  the Write Scratchpad button to apply.

When the ALARM output asserts in comparator mode, the TH or TL fault status bits displays red until the temperature returns within the threshold range.

When the ALARM output  asserts  in  interrupt  mode,  the TH or TL fault  status  bits  displays  red  until  the  read  is performed on any registers.

The ALARM also appears at the ALARM pin of the IC. To check if the signal is high or low, use the Check button for the alarm status.

## Address

The address is determined by the resistor/connection on ADD0 and ADD1 pins of the MAX31825. Detect Address loads bits to status register. Refer to the IC data sheet for the list  of  addresses. When multiple devices are on the 1-Wire  bus,  check  the Multi  Devices checkbox  before clicking  the Detect Address button. Addresses are displayed  on  the A5-A0 drop-down  list.  Once  the  desired address is selected, click the Set Address button before sending  function  commands  ( Write  Scratchpad , Read Scratchpad , and Convert T ).

## ROM

Within the ROM Command groupbox, the controls include Read ROM , Match ROM , Skip ROM , and Search ROM .

## MAX31825 Commands

Within  the MAX31825  Command groupbox,  the  controls include Read Scratchpad , Write Scratchpad ,  and Convert T .

## Temperature

The temperature is displayed in the graph, hexadecimal code,  and  converted  temperature  by  clicking  on  the Sample Continuously or Read Once button.

## Logging Data

The  temperature  and  raw  code  can  be  saved  to  a  file. Click the Export to *.CSV button before collecting data.

## General Description of Hardware

The MAX31825 EV system demonstrates the MAX31825, 1-Wire temperature sensor with address and alarm. The USB2PMB2 module and the EV kit complete the system. The DS2482 acts as the 1-Wire master for the MAX31825 and as an I 2 C slave for the USBPMBP2.

## User-Supplied I 2 C and I/O

To evaluate the EV kit with a user-supplied I 2 C bus, the connector  J1  is  a  PMod™-compatible  connector.  If  the master does not have a PMod-compatible connector, then make  connection  directly  to  the  SCL,  SDA  test  points. Make sure the return ground is the same as the DS2482. See Table 1 for jumper position.

## User-Supplied 1-Wire

To evaluate the EV kit with a user-supplied 1-Wire bus, See Table 1 for jumper position.

## User-Supplied VDD

The MAX31825 is powered through USB by default when a PMod-compatible master module is connected to the J1 connector of the EV kit. If the user-supplied VDD is used, a PMod master module is not allowed on the J1 connector.  In  this  case,  remove  the  shunt  from  J6  jumper  and apply a voltage between +1.6V and +3.6V at the VCC0 test point and ground is connected at the GND1 test point.

## User-Supplied VPU

The J2 jumper allows the user to apply their own pullup voltage. When a shunt is on the 2-3 position, apply a voltage between +2.3V and +3.6V at the VPU test point and verify the return path is connected at the GND test point.

Pmod is a trademark of Digilent Inc.

## Ordering Information

| PART            | TYPE                              |
|-----------------|-----------------------------------|
| MAX31825EVSYS1# | EV system (EV kit + Master Board) |
| MAX31825EVKIT#  | EV kit                            |
| USB2PMB2#       | Master Board                      |

#Denotes RoHS compliance.

## MAX31825 EV System Bill of Materials

| ITEM   |   QTY | REF DES                                             | VAR STATUS   | MAXINV               | MFG PART #                                              | MANUFACTURER                          | VALUE             | DESCRIPTION                                                                                                                                                                                                                                   | COMMENTS   |
|--------|-------|-----------------------------------------------------|--------------|----------------------|---------------------------------------------------------|---------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      |     9 | ALARM0, ALARM1, DQ0, DQ1, SCL, SDA, VCC0, VCC1, VPU | Pref         | 02-TPCOMP5007-00     | 5007 KEYSTONE                                           | 5007 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR |            |
| 2      |     3 | C1-C3                                               | Pref         | 20-000U1-BA63        | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA;MURATA;TDK                     | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                                                              |            |
| 3      |     2 | GND, GND1                                           | Pref         | 02-TPCOMP5006-00     | 5006 KEYSTONE                                           | 5006 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR |            |
| 4      |     1 | J1                                                  | Pref         | 01-TSW10608SSRA6P-19 | TSW-106-08-S-S-RA                                       | SAMTEC                                | TSW-106-08-S-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025 INCH SQUARE POST HEADER; RIGHT ANGLE; 6PINS                                                                                                                                                              |            |
| 5      |     5 | J2, J4-J7                                           | Pref         | 01-TSW10307TS3P-17   | TSW-103-07-T-S                                          | SAMTEC                                | TSW-103-07-T-S    | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                                                                                                              |            |
| 6      |     2 | J8, J9                                              | Pref         | 01-PEC04SAAN4P-21    | PEC04SAAN                                               | SULLINS ELECTRONICS CORP.             | PEC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                                                                     |            |
| 7      |     4 | R1-R4                                               | Pref         | 80-004K7-19          | CRCW06034K70FK                                          | VISHAY DALE                           | 4.7K              | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                           |            |
| 8      |     2 | R5, R6                                              | Pref         | 80-04K99-CA18        | RNCP0603FTD4K99                                         | STACKPOLE ELECTRONICS INC             | 4.99K             | RESISTOR; 0603; 4.99K OHM; 1%; 100PPM; 0.125W; THIN FILM                                                                                                                                                                                      |            |
| 9      |     8 | SU1-SU8                                             | Pref         | 02-JMPFS1100B-00     | S1100-B;SX1100-B;STC02SYAN                              | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                                                       |            |
| 10     |     1 | U1                                                  | Pref         | 00-SAMPLE-03         | MAX31825ANT+                                            | MAXIM                                 | MAX31825ANT+      | EVKIT PART - IC; 1-WIRE TEMPERATURE SENSOR WITH ADDRESS AND ALARM; +/- 1 DEGREE CELCIUS ACCURACY; PACKAGE OUTLINE: 21-100395; PACKAGE CODE: N61A1+1; WLP6                                                                                     |            |
| 11     |     1 | U3                                                  | Pref         | 10-DS2482S100-S      | DS2482S-100+                                            | MAXIM                                 | DS2482S-100+      | IC; INFC; SINGLE-CHANNEL 1-WIRE MASTER; NSOIC8; NOTE: SET TO OBSOLETE TO UPDATE TO MAXIM STANDARD FOOTPRINT. KINDLY USE PART WITH JEDEC TYPE MAXIM_90-0096                                                                                    |            |
| 12     |     1 | VDD                                                 | Pref         | 02-TPCOMP5005-00     |                                                         | 5005 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN ;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR                     |            |
| 13     |     1 | PCB                                                 | -            | EPCB31825            | MAX31825                                                | MAXIM                                 | PCB               | PCB:MAX31825                                                                                                                                                                                                                                  |            |
| TOTAL  |    40 |                                                     |              |                      |                                                         |                                       |                   |                                                                                                                                                                                                                                               |            |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                                                                                                                      | DO NOT PURCHASE(DNP)   |
|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| ITEM                   | QTY                    | REF DES                | VAR STATUS             | MAXINV                 | MFG PART #             | MANUFACTURER           | VALUE                  | DESCRIPTION                                                                                                                                               | COMMENTS               |
| 1                      | 1                      | Q1                     | DNP                    | EQ111000002627         | BSS84Q-7-F             | DIODES INCORPORATED    | BSS84Q-7-F             | TRAN; PCH; MOSFET; SOT-23; PD-(0.3W); I-(-0.13A); V-(-50V)                                                                                                | DNI                    |
| 2                      | 1                      | U2                     | DNP                    | N/A                    | MAX31825ALT+           | MAXIM                  | MAX31825ALT+           | EVKIT PART - IC; 1-WIRE TEMPERATURE SENSOR WITH ADDRESS AND ALARM; +/- 1 DEGREE CELCIUS ACCURACY; PACKAGE OUTLINE: 21-0164; PACKAGE CODE: LC622+1C; UDFN6 |                        |
| TOTAL                  | 2                      |                        |                        |                        |                        |                        |                        |                                                                                                                                                           |                        |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | VAR STATUS                                                                                  | MAXINV                                                                                      | MFG PART #                                                                                  | MANUFACTURER                                                                                | DESCRIPTION                                                                                 | COMMENTS                                                                                    |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

Evaluates: MAX31825

## MAX31825 EV System Schematic

<!-- image -->

## MAX31825 Evaluation System

## MAX31825 EV System PCB Layouts

MAX31825 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX31825 EV System PCB Layout-Top

<!-- image -->

MAX31825 EV System PCB Layout-Bottom

<!-- image -->

MAX31825 EV System PCB Layout-Silk Bottom

<!-- image -->

│

## MAX31825 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX31825