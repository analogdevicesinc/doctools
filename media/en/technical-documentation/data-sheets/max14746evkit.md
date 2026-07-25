<!-- lastmod 2022-08-03 -->
## MAX14746 Evaluation Kit

## General Description

The MAX14746 evaluation kit (EV kit) is a fully assembled  and  tested  circuit  for  evaluating  the  MAX14746/ MAX14747 charger detectors with a linear battery charger and a smart power selector.

Refer to the MAX14746 IC data sheet for detailed information regarding the operation and features of the devices.

The EV kit comes standard with the MAX14746 installed, but can also be used to evaluate the MAX14747 by replacing the MAX14746 (U1) with the MAX14747. Request a free sample of the MAX14747 when ordering the EV kit.

## Benefits and Features

- RoHS Compliant
- Proven PCB Layout
- Full Assembled and Tested
- I 2 C Serial Interface

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- ● Digital Multimeter (DMM)
- ● One USB -A to micro-B cable
- ● Windows XP®, Windows Vista®, Windows® 7, or Windows 10 PC with one available USB port
- ● Optional: USB Mouse
- ● Optional: I 2 C Controller Device

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify basic board operation:

Caution: Do not turn on the power supply and exter -nal devices until all connections are completed.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation

Evaluates: MAX14746/MAX14747

- 2) Use the USB-A to micro-B cable to connect J1 to the PC.
- 3) Measure the voltage on SYS test point. Confirm that it equals approximately 4.4V.
- 4) Measure the voltage on BAT test point. Confirm that it equals approximately 4.2V.
- 5) Measure the voltage on SFOUT test point. Confirm that it equals approximately 5V.
- 6) Optional: Connect the USB mouse to J3. Confirm that the mouse can control the mouse cursor on the PC after enumeration.
- 7) Optional: To configure the device's registers, connect the I 2 C controller device to GND, SDA (J5 pin 4) and SCL (J5 pin 3), and use it to program the registers.
- 8) The EV kit is ready for additional evaluation.

## Detailed Description of Hardware

## Jumper Descriptions

Table  1  details  the  functions  of  the  configurable  jumper headers on the EV kit board. The headers are standard 0.1in spacing, 0.025in posts.

## Table 1. Jumper Functions and Default Settings)

| JUMPER   | SETTINGS   | DESCRIPTION                                  |
|----------|------------|----------------------------------------------|
| JU1 D1   | Open       | Indicator LED D1 off                         |
| JU1 D1   | Closed*    | Indicator LED D1 on                          |
| JU2 CTYP | Open       | Disconnect CTYP output from indicator LED D2 |
| JU2 CTYP | Closed*    | Connect CTYP output to indicator LED D2      |
| JU3 UOK2 | Open       | Disconnect UOK2 output to indicator LED D3   |
| JU3 UOK2 | Closed*    | Connect UOK2 output to indicator LED D3      |
| JU4 UOK1 | Open       | Disconnect UOK1 output and LED D4            |
| JU4 UOK1 | Closed*    | Connect UOK1 output to indicator LED D4      |
| JU5 IDEF | 1-2        | Connect IDEF to VIO                          |
| JU5 IDEF | 2-3*       | Connect IDEF to GND                          |

<!-- image -->

## MAX14746 Evaluation Kit

Table 1. Jumper Functions and Default Settings) (continued)

| JUMPER       | SETTINGS         | DESCRIPTION                          |
|--------------|------------------|--------------------------------------|
| JU6 FSUS     | 1-2              | Connect FSUS to VIO                  |
| JU6 FSUS     | 2-3*             | Connect FSUS to GND                  |
| JU7 SDA      | Open             | Disconnect SDAfrom R10 (Pullup)      |
| JU7 SDA      | Closed*          | Connect SDAto R10 (Pullup)           |
| JU8 THM      | 1-2              | Connect THM to R14                   |
| JU8 THM      | 2-3              | Connect THM to R16                   |
| JU9 SCL      | Open             | Disconnect SCL from R11 (Pullup)     |
| JU9 SCL      | Closed*          | Connect SCL to R11 (Pullup)          |
| JU10 INT     | Open             | Disconnect INT from R12 (Pullup)     |
| JU10 INT     | Closed*          | Connect INT to R12 (Pullup)          |
| JU11 VMC     | Open             | Disconnect VIO from VMC              |
| JU11 VMC     | Closed*          | Connect VIO to VMC                   |
| JU12 SYS     | Open             | Disconnect SYS from C10              |
| JU12 SYS     | Closed*          | Connect SYS to C10                   |
| JU13 BAT     | Open             | Disconnect BAT from Q2               |
| JU13 BAT     | Closed* 1-2, 3-4 | Connect BAT to Q2                    |
| JU14 SYS     | Open             | Disconnect SYS from Q2               |
| JU14 SYS     | Closed*          | Connect SYS to Q2                    |
| JU15 UOK2EXT | 1-2*             | Connect UOK2EXT to Q2                |
| JU15 UOK2EXT | 3-4              | Connect UOK2EXT to JU3 (UOK2)        |
| JU16 LED     | Open             | Disconnect SYS from indicator D5 LED |
| JU16 LED     | Closed*          | Connect SYS to indicator D5 LED      |
| JU17 EXT     | Open             | Disconnect R15 from JU15 (EXT)       |
| JU17 EXT     | Closed*          | Connect R15 to JU15 (EXT)            |

* Default Position

## Evaluates: MAX14746/MAX14747

## Digital Inputs and Outputs

The bias for the logic inputs and the open-drain indicators can be provided from the VMC pin of J4 connector or from the pins 6 and 12 of J5. Install jumper JU11 to use VMC for the VIO supply.

The  UOK1,  UOK2,  INT,  CTYP,  open-drain  outputs  use VIO supply for their respective pullup voltages. Jumpers JU1-JU4  connect  the  indicator  LEDs  D1-D4  to  these open-drain flags.  LED  pin  is  another  open-drain  output, the status of which is reflected by indicator D5 when JU16 is installed.

UOK2/EXT pin is preconfigured by factory as either UOK2 or  EXT.  EXT  is  a  push-pull  output  used  to  control  the external pMOS load switch Q2. When charger is not present, EXT is high and Q2 connects SYS to BAT. Connect JU15 accordingly based on which function UOK2/EXT is preconfigured to.

IDEF and FSUS are digital inputs set by JU5 and JU6. IDEF determines if the current limit is fixed at 100mA or controlled by I 2 C settings (IBusLim, ILimSet, IBusDetSw bits); FSUS, if pulled high, forces the input current limit to 0A

## USB Inferface

The MAX14746 provides an integrated USB2.0 full-speed interface  (12Mbps).  This  interface  is  accessed  through the Micro-USB type-B connector, J1 and type-A connector J3. VBUS of J1 is also the power source for the U1.

## I/O Interface Connector

The  EV  kit  allows  accessing  the  digital  I/O  of  the MAX14746  individually  through  three  different  interface connectors, J2, J4, and J5. Please refer to Table 2 thru Table 4 for the connectors pin description.

## Table 2. Aardvark Connector J2

|   PIN | MAX14746   | DESCRIPTION                    |
|-------|------------|--------------------------------|
|     1 | SCL        | I 2 C Serial Clock Input       |
|     2 | GND        | Ground                         |
|     3 | SDA        | I 2 C Serial Data Input/Output |
|     4 | N.C.       | Not Connected                  |
|     5 | N.C.       | Not Connected                  |
|     6 | N.C.       | Not Connected                  |
|     7 | INT        | Active-Low Interrupt Output    |
|     8 | N.C.       | Not Connected                  |
|     9 | N.C.       | Not Connected                  |
|    10 | GND        | Ground                         |

│

## MAX14746 Evaluation Kit

## Table 3. 40-Pin Connector J4

| PIN            | SIGNAL   | DESCRIPTION                    |
|----------------|----------|--------------------------------|
| 2              | GND      | Ground                         |
| 4              | VMC      | 3.3V Supply Input              |
| 10             | GND      | Ground                         |
| 21             | IDEF     | Current-Limit Setting Input    |
| 22             | FSUS     | Force-Suspend Enable Input     |
| 28             | INT      | Active-low Interrupt Output    |
| 29             | GND      | Ground                         |
| 33             | SDA      | I 2 C Serial Data Input/Output |
| 34             | SCL      | I 2 C Serial Clock Input       |
| 40             | GND      | Ground                         |
| All Other Pins | N.C.     | Not Connected                  |

## Table 4. PMOD Connector J5

|   PIN | MAX14746   | DESCRIPTION                      |
|-------|------------|----------------------------------|
|     1 | FSUS       | Force-Suspend Enable Input       |
|     2 | N.C.       | Not Connected                    |
|     3 | SCL        | I 2 C Serial Clock Input         |
|     4 | SDA        | I 2 C Serial Data Input/Output   |
|     5 | GND        | Ground                           |
|     6 | VIO        | 3.3V Digital Input/Output Supply |
|     7 | IDEF       | Current-Limit Setting Input      |
|     8 | INT        | Active-Low Interrupt Output      |
|     9 | N.C.       | Not Connected                    |
|    10 | N.C.       | Not Connected                    |
|    11 | GND        | Ground                           |
|    12 | VIO        | Digital Interface Supply         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14746EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX14746 EV Kit Bill of Materials

| REF_DES            | DNI/ DNP   | QTY MFG PART #                                                           | MFTR                                           | VALUE                    | DESCRIPTION                                                                                                                          |
|--------------------|------------|--------------------------------------------------------------------------|------------------------------------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| 1 BAT, THM         | -          | 2 5013                                                                   | KEYSTONE                                       | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;             |
| 2 BAT_MON, SYS_MON | -          | 2 5012                                                                   | KEYSTONE                                       | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |
| 3 C1, C6-C8        | -          | 4 C0603X5R160-105KNP; EMK107BJ105KA; C1608X5R1C105K; GRM188R61C105K      | VENKEL LTD./TAIYO YUDEN/TDK/M URATA            | 1UF                      | CAPACITOR; SMT; 0603; CERAMIC; 1uF; 16V; 10%; X5R; - 55degC to + 85degC; 0 +/-15% degC MAX.USE 20-0001u-63 FOR NEW DESIGN            |
| 4 C2-C5            | -          | 4 CL31B106KOHNNN                                                         | SAMSUNG ELECTRONIC S                           | 10UF                     | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                            |
| 5 C9               | -          | 1 GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG | MURATA; SAMSUNG ELECTRONIC S; TDK; TAIYO YUDEN | 1UF                      | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                             |
| 6 C10              | -          | 1 T494D476K016AT                                                         | KEMET                                          | 47UF                     | CAPACITOR; SMT (7343); TANTALUM CHIP; 47UF; 16V; TOL=10%; MODEL=T494 SERIES                                                          |
| 7 C11              | -          | 1 CL31B225KBHNNN                                                         | SAMSUNG ELECTRONIC S                           | 2.2UF                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                           |
| 8 VB, CAP, SYS     | -          | 3 5010 KEYSTONE                                                          | 3 5010 KEYSTONE                                | N/A                      | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                   |
| 9 D1-D4, D6        | -          | 5 PG1101W                                                                | STANLEY ELECTRIC CO                            | PG1101W                  | DIODE; LED; 1101W SERIES; GREEN; SMT (1206); VF=2.1V; IF=0.03A                                                                       |
| 10 D5              | -          | 1 SML-LX1206IW                                                           | LUMEX OPTOCOMPO NENTS INC                      | SML-LX1206IW             | DIODE; LED; 635NM RED LED; MILKY WHITE DIFFUSED LENS; RED; SMT (1206); VF=2V; IF=0.1A                                                |
| 11 J1              | -          | 1 ZX62-B-5PA                                                             | HIROSE ELECTRIC CO LTD.                        | ZX62-B-5PA               | CONNECTOR; FEMALE; SMT; USB MICRO B-TYPE; BOTTOM MOUNT; RIGHT ANGLE; 5PINS; -30 DEGC TO +85 DEGC; WITH OPTION TO CONNECT SHIELD PINS |
| 12 J2              | -          | 1 5104338-1                                                              | TE CONNECTIVIT Y                               | 5104338-1                | CONNECTOR; MALE; THROUGH HOLE; AMP LATCH LOW PROFILE HEADER; STRAIGHT; 10PINS                                                        |
| 13 J3              | -          | 1 896-43-004-90-000000                                                   | MILL-MAX                                       | 896-43-004-90- 000000    | CONNECTOR; FEMALE; THROUGH HOLE; USB RECEPTACLE; 896 SERIES; RIGHT ANGLE; 4PINS                                                      |
| 14 J4              | -          | 1 SBH11-PBPC-D20-ST-BK                                                   | SULLINS ELECTRONIC S CORP.                     | SBH11-PBPC- D20-ST-BK    | CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 40PINS                                                                    |
| 15 J5              | -          | 1 TSW-106-08-S-D-RA                                                      | SAMTEC                                         | TSW-106-08-S- D-RA       | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                            |
| 16 J6-J9           | -          | 4 EVKIT_STANDOFF_4- 40_1/2                                               | ?                                              | EVKIT_STAND OFF_4-40_1/2 | KIT; ASSY-STANDOFF1/2IN; 1PC. STANDOFF/FEM/HEX/4- 40/(1/2IN)/ALUMINUM; 1PC. SCREW/PHL/PAN/4-40/(3/8IN)/18-8 STAINLESS STEEL          |

## MAX14746 EV Kit Schematics

<!-- image -->

## MAX14746 Evaluation Kit

## MAX14746 EV Kit Schematics (continued)

<!-- image -->

│

## Evaluates: MAX14746/MAX14747

## MAX14746 EV Kit PCB Layouts

MAX14746 EV Kit-Top Silkscreen

<!-- image -->

MAX14746 EV Kit-Top

<!-- image -->

MAX14746 EV Kit-Internal 2

<!-- image -->

│

## MAX14746 EV Kit PCB Layouts (continued)

MAX14746 EV Kit-Bottom Silkscreen

<!-- image -->

MAX14746 EV Kit-Bottom

<!-- image -->

MAX14746 EV Kit-Internal 1

<!-- image -->

│

## MAX14746 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 12/16           | Initial release           | -               |
|                 1 | 2/19            | Added Quick Start section | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14746/MAX14747