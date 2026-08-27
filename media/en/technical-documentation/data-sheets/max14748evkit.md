<!-- lastmod 2022-08-03 -->
## MAX14748 Evaluation Kit

## General Description

The MAX14748 evaluation kit (EV kit) is a fully assembled and  tested  circuit  for  evaluating  the  MAX14748  USB Type-C charger. Refer to the MAX14748 IC data sheet for detailed information regarding the operation and features of the devices.

For additional information, please refer to the MAX14748 user guide.

## Features

- RoHS Compliant
- Proven PCB Layout
- Full Assembled and Tested
- I 2 C Serial Interface

## Quick Start

## Required Equipment

- MAX14748 EV Kit board
- Munich 2 adapter board (USB2PMB2#)
- Windows XP®, Windows Vista®, Windows® 7, or Windows 10 PC with one available USB port
- One USB A to USB Micro-B cable
- USB Type-C charger and Type-C cable
- 2s Li+ battery pack

Windows, Windows Vista, and Windows XP are registered trademarks of Microsoft.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV kit software, MAX14748EVKitSetupVxxx.ZIP located on the MAX14748 EV kit web page. Download the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX20332EVKitSetupVxxx.EXE program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the USBPMB2 adapter board to J5 PMOD connector on the MAX14748 EV Kit.
- 5) Connect the USB A-micro-B cable between the PC and the X1 port on the USB2PMB2. USB driver should be installed automatically.
- 6) Attach a charged battery pack to J6 or connect the USB Type-C charger to J1.
- 7) Run the previously installed MAX14748 EVKit Tool software. The EV kit software main window appears, as shown in Figure 1.
- 8) If connection is successfully established, the status bar at the bottom displays 'Connected'.
- 9) The EV kit is now ready for additional evaluation.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX14748

## Detailed Description of Hardware

## Jumper Descriptions

Table  1  details  the  functions  of  the  configurable  jumper headers on the EV kit board. The headers are standard 0.1in spacing, 0.025in posts. Settings in Table 1 marked with an asterisk ('*') indicate default placements.

## Digital Inputs and Outputs

Evaluates: MAX14748

The CDIR, SYSOK, and INT open-drain outputs use VIO supply for their respective pullup voltages. Jumpers JU1, JU3, JU4 connect the indicator LED1, LED3, and LED4 to these open-drain flags.

Based on the Type-C state machine output, BVCEN pushpull  output  controls  the  external  load  switch  Q2.  When BVCEN is high, Q2 connects VCONN to the external supply source applied at TP19.

The bias for the logic inputs and open-drain indicators is provided from the VMC pin of J4 connector. Install jumper between 2-3 pins of JU5 to use VMC for the VIO supply.

FLTIN and FSUS are digital inputs set by JU7 and JU8. FLTIN is the charger fault input. If pulled low, FLTIN forces the charger into a fault state. FSUS is the force suspend input. If pulled high, it forces the input current limit to 0A.

Table 1. Jumper Functions and Default Settings

| JUMPER    | SETTINGS   | DESCRIPTION                                  |
|-----------|------------|----------------------------------------------|
| JU1 INT   | Open       | Disconnect INT output from indicator LED1    |
| JU1 INT   | Closed*    | Connect INT output to indicator LED1         |
| JU2 CHGIN | Open       | Disconnect CHGIN from Q1 NVP PFET            |
| JU2 CHGIN | 1-2*, 3-4* | Connect CHGIN to Q1 NVP PFET                 |
| JU3 CDIR  | Open       | Disconnect CDIR output from indicator LED3   |
| JU3 CDIR  | Closed*    | Connect CDIR output to indicator LED3        |
| JU4 SYSOK | Open       | Disconnect SYSOK output from indicator LED4. |
| JU4 SYSOK | Closed*    | Connect SYSOK output to indicator LED4       |
| JU5 VIO   | 1-2        | Connect VIO to pin 1 of JU5                  |
| JU5 VIO   | 2-3*       | Connect VIO to VMC of J5                     |
| JU6 SET   | 1-2        | Connect SET to R12 (10k)                     |
| JU6 SET   | 2-3*       | Connect SET to R13 (Potentiometer)           |
| JU7 FLTIN | Open       | Disconnect FLTIN from R11 and PB1            |
| JU7 FLTIN | Closed*    | Connect FLTIN to R11 and PB1                 |
| JU8 FSUS  | Open       | Disconnect FSUS from VIO                     |
| JU8 FSUS  | Closed*    | Connect FSUS to VIO                          |
| JU9 SCL   | Open       | Disconnect SCL from R19 (Pullup)             |
| JU9 SCL   | Closed*    | Connect SCL to R19 (Pullup)                  |
| JU10 VTPU | Open       | Disconnect VTPU from V CCINT                 |
| JU10 VTPU | Closed*    | Connect VTPU to V CCINT                      |
| JU11 TPU  | Open       | Disconnect THM from R15                      |
| JU11 TPU  | Closed*    | Connect THM to TPU through R15               |
| JU12 THM  | Open       | Disconnect THM from R16 (Potentiometer)      |
| JU12 THM  | Closed*    | Connect THM to R16 (Potentiometer)           |
| JU13 SDA  | Open       | Disconnect SDAfrom R18 (Pullup)              |
| JU13 SDA  | Closed*    | Connect SDAto R18 (Pullup)                   |

* Default position.

│

## MAX14748 Evaluation Kit

## USB Interface

The MAX14748 provides an integrated USB2.0 full-speed interface  (12Mbps).  This  interface  is  accessed  through the USB Type-C connector J1 and USB Type-A connector J3\_USB\_A. VBUS\_C of J1 is also a power source for U1.

## Table 2. PMOD Connector J5

|   PIN | MAX14748   | DESCRIPTION                      |
|-------|------------|----------------------------------|
|     1 | N.C.       | Not Connected                    |
|     2 | N.C.       | Not Connected                    |
|     3 | SCL        | I 2 C Serial Clock Input         |
|     4 | SDA        | I 2 C Serial Data Input/Output   |
|     5 | GND        | Ground                           |
|     6 | VMC        | 3.3V Digital Input/Output Supply |
|     7 | N.C.       | Not Connected                    |
|     8 | N.C.       | Not Connected                    |
|     9 | N.C.       | Not Connected                    |
|    10 | N.C.       | Not Connected                    |
|    11 | GND        | Ground                           |
|    12 | VMC        | 3.3V Digital Input/Output Supply |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14748EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14748

## I/O Interface Connector

The  EV  kit  allows  accessing  the  I 2 C  interface  of  the MAX14748 through the J5 PMOD connector. Please refer to Table 2 for the connectors' pin description.

│

## MAX14748 EV Kit Bill of Materials

|   ITEM | REF_DES                     |   QTY | MFG PART #                                              | MANUFACTURER                | VALUE             | DESCRIPTION                                                                                                |
|--------|-----------------------------|-------|---------------------------------------------------------|-----------------------------|-------------------|------------------------------------------------------------------------------------------------------------|
|      1 | C1, C15-C19                 |     6 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA; TDK                 | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO           |
|      2 | C2                          |     1 | C1608C0G1H392K080AA                                     | TDK                         | 3900PF            | CAP;SMT (0603);3900PF;10%;50V;C0G;CERAMIC CHIP                                                             |
|      3 | C3, C9, C11, C12            |     4 | CL10B105KP8NFN                                          | SAMSUNG ELECTRONICS         | 1UF               | CAPACITOR; SMT (0603); CERAMIC; 1UF; 10V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                       |
|      4 | C4-C7                       |     4 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW       | MURATA; SAMSUNG ELECTRONICS | 22UF              | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |
|      5 | C10, C13                    |     2 | CGA4J3X7R1H105K125AB                                    | TDK                         | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO             |
|      6 | J1                          |     1 | DX07S024JJ3                                             | JAE ELECTRONIC INDUSTRY     | DX07S024JJ3       | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHT ANGLE; 24PINS                  |
|      7 | J3                          |     1 | 1903814-1                                               | TE CONNECTIVITY             | 1903814-1         | CONNECTOR; FEMALE; THROUGH HOLE; INDUSTRIAL USB RECEPTACLE ASSEMBLY; RIGHT ANGLE; 1 ROW; STRAIGHT; 4PINS;  |
|      8 | J5                          |     1 | TSW-106-08-S-D-RA                                       | SAMTEC                      | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                  |
|      9 | J6, JU1, JU3, JU4, JU7-JU13 |    11 | PBC02SAAN                                               | SULLINS ELECTRONICS CORP.   | PBC02SAAN         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;               |
|     10 | JU2                         |     1 | PBC02DAAN                                               | SULLINS ELECTRONIC CORP.    | PBC02DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                  |
|     11 | JU5, JU6                    |     2 | PEC03SAAN                                               | SULLINS ELECTRONICS CORP.   | PEC03SAAN         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;               |
|     12 | L1                          |     1 | XFL4020-222ME                                           | COILCRAFT                   | 2.2UH             | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2UH; TOL=+/- 20%; 8A; -40 DEGC TO +125 DEGC                         |
|     13 | LED1-LED5                   |     5 | LG L29K-G2J1-24                                         | OSRAM                       | LG L29K-G2J1-24   | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                    |
|     14 | PB1                         |     1 | 1825910-6                                               | TE CONNECTIVITY             | 1825910-6         | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY |
|     15 | Q1                          |     1 | RRL035P03                                               | ROHM                        | RRL035P03         | TRAN; POWER MOSFET; PCH; TUMT6; PD-(1.0W); I-(-3.5V); V-(- 30V)                                            |
|     16 | Q2                          |     1 | NX5P2924BUK                                             | NXP                         | NX5P2924BUK       | IC; SWTC; LOGIC CONTROLLED HIGH-SIDE POWER SWITCH; WLCSP6                                                  |

Evaluates: MAX14748

## MAX14748 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                   |   QTY | MFG PART #                                                | MANUFACTURER                    | VALUE      | DESCRIPTION                                                                                                             |
|--------|---------------------------|-------|-----------------------------------------------------------|---------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------|
| 17     | R1-R4, R11, R18, R19      |     7 | TNPW06033K92BE                                            | VISHAY DALE                     | 3.92K      | RESISTOR, 0603, 3.92K OHM, 0.1%, 25PPM, 0.10W, THICK FILM                                                               |
| 18     | R5-R8, R17                |     5 | CRCW0603499RFK; RK73H1J4990FT; ERJ-3EKF4990V; RC1608F4990 | KOA; VISHAY; PANASONIC; SAMSUNG | 499        | RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
| 19     | R9, R20                   |     2 | TNPW06031K00BE; RG1608P-102-B- T5                         | VISHAY DALE/SUSUMU CO LTD.      | 1K         | RESISTOR; 0603; 1K OHM; 0.1%; 25PPM; 0.10W; THICK FILM                                                                  |
| 20     | R12, R15                  |     2 | CRCW060310K0JN; ERJ-3GEYJ103V                             | VISHAY DALE; PANASONIC          | 10K        | RESISTOR; 0603; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                  |
| 21     | R13                       |     1 | 64WR500KLF                                                | TT ELECTRONICS                  | 500K       | RESISTOR; THROUGH HOLE; 64 SERIES; 500K OHM; 10%; 100PPM; 0.25W                                                         |
| 22     | R14                       |     1 | CRCW06031003FK; ERJ-3EKF1003                              | VISHAY DALE/PANASONIC           | 100K       | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                     |
| 23     | R16                       |     1 | PV37W104C01B00                                            | BOURNS                          | 100K       | RESISTOR; THROUGH HOLE; PV37 SERIES; 100K OHM; 10%; 150PPM; 0.25W                                                       |
| 24     | SU1, SU3-SU13, SU2A, SU2B |    14 | SX1100-B                                                  | KYCON                           | SX1100-B   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |
| 25     | TP1-TP4, TP6              |     5 | 5010                                                      | KEYSTONE                        | N/A        | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| 26     | TP5, TP7, TP8, TP18-TP20  |     6 | 5003                                                      | KEYSTONE                        | N/A        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| 27     | TP9-TP15                  |     7 | 5011                                                      | KEYSTONE                        | N/A        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 28     | TP16, TP17                |     2 | 5004                                                      | KEYSTONE                        | N/A        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| 29     | U1                        |     1 | MAX14748B                                                 | MAXIM                           | MAX14748B  | EVKIT PART-IC; USB TYPE-C CHARGER; WLP54; PKG CODE: W542C3+1; PKG OUTLINE NO.: 21-100122                                |
| 30     | U2, U3                    |     2 | NC7WZ07P6X                                                | FAIRCHILD SEMICONDUCTOR         | NC7WZ07P6X | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                |
| 31     | PCB                       |     1 | MAX                                                       | MAXIM                           | PCB        | PCB:MAX                                                                                                                 |
| TOTAL  |                           |   100 |                                                           |                                 |            |                                                                                                                         |

Evaluates: MAX14748

## MAX14748 EV Kit Schematics

<!-- image -->

│

## MAX14748 EV Kit Schematics (continued)

<!-- image -->

## MAX14748 EV Kit PCB Layout Diagrams

MAX14748 EV Kit-Mask Top

<!-- image -->

MAX14748 EV Kit-Level 2 GND

<!-- image -->

MAX14748 EV Kit-Top

<!-- image -->

MAX14748 EV Kit-Level 3 SIGS

<!-- image -->

│

## MAX14748 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14748 EV Kit-Bottom

<!-- image -->

MAX14748 EV Kit-Paste Top

MAX14748 EV Kit-Mask Bottom

<!-- image -->

MAX14748 EV Kit-Paste Bottom

<!-- image -->

│

## MAX14748 EV Kit PCB Layout Diagrams (continued)

MAX14748 EV Kit-Silk Top

<!-- image -->

MAX14748 EV Kit-Silk Bottom

<!-- image -->

│

## MAX14748 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 9/17            | Initial release                                             | -               |
|                 1 | 2/19            | Added Quick Start section and updated the Bill of Materials | 1, 5            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUe LPSlLeG. 0D[LP IQWeJUDWeG UeVeUYeV WKe ULJKW WR FKDQJe WKe FLUFXLWU\ DQG VSeFLfiFDWLRQV ZLWKR

│

Evaluates: MAX14748