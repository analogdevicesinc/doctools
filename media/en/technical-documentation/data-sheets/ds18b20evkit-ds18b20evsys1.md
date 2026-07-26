<!-- lastmod 2022-08-05 -->
## DS18B20 Evaluation System

## General Description

The  DS18B20  evaluation  system  (EV  system)  demonstrates the DS18B20 1-wire thermometer. The DS18B20 EV system consists  of  the  DS18B20  evaluation  kit  (EV kit)  and  the  USB2PMB2  adapter  board.  Windows  XP ® and  Windows ®  7/8/8.1/10  compatible  software  provides a  user-friendly  interface  that  demonstrates  the  features of the DS18B20.

The  DS18B20  EV  system  comes  with  the  8-pin  µSOP DS18B20U+ installed.

## Features

- 6-Pin Pmod™-Compatible Connector
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7/8/8.1/10-Compatible Software

## DS18B20 EV System Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent Inc.

Evaluates: DS18B20

## Quick Start

## Required Equipment

- DS18B20 EV System (includes USB cable)
- Windows PC

Note: In the following sections, software-related items are identified by bolding.Text in bold refers to items directly from the EV system software. Text in bold and underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

<!-- image -->

## DS18B20 Evaluation System

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation:

1. Install  the  DS18B20GUISetup.msi  software  on  your computer.
2. Align  the  X2  connector  (top  row)  of  the  USB2PMB2 with the J1 connector of the DS18B20 EV system.
3. Verify  that  the  shunts  are  in  the  default  position  as shown in Table 1.
4.  Connect the USB cable from the PC to the USB2PMB2 board.
5.  Open the EV system GUI, DS18B20EVKit.exe (Figure 1).
6. Click  the Scan  Adapters button.  Then  select  the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
7. Select the desired SCL clock frequency and click the Set SCL button.
8. Select  an  address  from  the Set Address dropdown list and click the button to the right.
9. Click the Search button and verify appropriate address was found.
10. Start  evaluating  the  DS18B20  by  clicking  on  the Sample Continuously button.

## General Description of Software

The main window of the DS18B20 EV system software contains controls to evaluate the DS18B20 IC.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                               |
|----------|------------------|-------------------------------------------------------------------------------------------|
| J2       | Not installed    | Disconnects J1-4 from SCL of the DS2482. External 1-wire option only.                     |
| J2       | Installed*       | Connects J1-4 to SCL of the DS2482. External I 2 C option only.                           |
| J3       | 1-2*             | Connects J1-3 to SDApin of the DS2482. External I 2 C option only.                        |
| J3       | 1-3              | Connects J1-3 to DQ pin of the DS18B20. External 1-wire option only.                      |
| J4       | Not installed*   | Disconnects IO pin of the DS2482 from DQ pin of the DS18B20. External 1-wire option only. |
| J4       | Installed        | Connects IO pin of the DS2482 to DQ pin of the DS18B20. External I 2 C option only.       |
| J5       | 1-2              | Connects AD0 address pin of the DS2482 to V DD .                                          |
| J5       | 1-3*             | Controls AD0 address pin of the DS2482 through GUI.                                       |
| J5       | 1-4              | Connects AD0 address pin of the DS2482 to GND.                                            |
| J6       | 1-2              | Connects AD1 address pin of the DS2482 to V DD .                                          |
| J6       | 1-3*             | Controls AD1 address pin of the DS2482 through GUI.                                       |
| J6       | 1-4              | Connects AD1 address pin of the DS2482 to GND.                                            |

* Default Position

## Configuration

The configuration dropdown list allows the user to select the conversion resolution. Use the Resolution drop down list  to  select  between  9-,  10-,  11-,  and  12-bits  resolution. With each resolution, the user can set the desired sampling rate using the options in the Conversion Time dropdown list.

## Address

The  DS2482's  I 2 C  slave  address  is  determined  by  the logic states of the AD\_ pins. The GUI allows controlling the  states  of  the  A\_  pins  by  selecting  the  appropriate checkboxes and setting the appropriate bits in the control byte  of  the  I 2 C  command.  Make  sure  the  shunts  are installed in the 1-3 position of jumpers J5 and J6. All other shunt options on jumpers J5 and J6 would set the logic levels to low or high.

## ROM

Within  the ROM  Commands groupbox,  the  controls include Search ROM, read ROM, match ROM, skip ROM, and alarm search.

## Commands

Within  the Command groupbox,  the  controls  include temperature readings, write scratchpad, read scratchpad, copy scratchpad, recall E 2 , and read power supply.

The Read  Scratchpad button will update  the TH (Temperature  High) , TL  (Temperature  Low) , and Configuration fields.  The Copy  Scratchpad button will  transfer  the  current  data  on  the  scratchpad  to  the EEPROM. The Recall E2 button recalls the data stored on  the  EEPROM.  Click Read  Scratchpad to  retrieve EEPROM data and the appropriate fields will update.

Evaluates: DS18B20

│

## DS18B20 Evaluation System

## Temperature

The  hexadecimal  code  and  the  converted  temperature are displayed within the Temperature groupbox.

## General Description of Hardware

The  DS18B20  EV  system  demonstrates  the  DS18B20, high-precision  digital  thermometer  and  thermostat.  The USB2PMB2  module  and  the  EV  system  complete  the system. The DS2482 acts as the 1-Wire master for the DS18B20 and as an I 2 C slave for the USB2PMB2.

## User-Supplied I 2 C and I/O

To evaluate the EV system with a user-supplied I 2 C bus, the connector J1 is a Pmod-compatible connector. If the master does not have a Pmod-compatible connector, then make connection directly to the SCL, SDA, AD0, and AD1

Evaluates: DS18B20

test points. Make sure the return ground is the same as the DS2482. Please refer to Table 1 for jumper position.

## User-Supplied 1-Wire

To  evaluate  the  EV  system  with  a  user-supplied  1-wire bus, the connector J1 is a Pmod-compatible connector. If the master does not have a Pmod-compatible connector, then make connection directly to the DQ test points. Make sure  the  return  ground  is  the  same  as  the  DS18B20. Please refer to Table 1 for jumper position.

## User-Supplied VDD

The  DS18B20  and  DS2482  are  powered  through  USB by  default  when  a  Pmod  -compatible  master  module  is connected  to  the  J1  connector  of  the  EV  system.  If  a user-supplied V DD  is used, a Pmod master module is not allowed on the J1 connector. In this case, apply a voltage between +2.7V and +5.5V at the V DD  test point.

Figure 1. DS18B20 EV System Main Window

<!-- image -->

## Ordering Information

| PART           | TYPE          |
|----------------|---------------|
| DS18B20EVSYS1# | EV System     |
| DS18B20EVKIT#  | EV Kit        |
| USB2PMB2#      | Adapter Board |

│

## DS18B20 EV System Bill of Materials

| ITEM   |   QTY | REF DES                | MFG PART #                                              | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                                                                                                       |
|--------|-------|------------------------|---------------------------------------------------------|---------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     5 | DQ, AD0, AD1, SCL, SDA | 5007 KEYSTONE                                           | 5007 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 2      |     2 | C1, C2                 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AE | MURATA; TDK               | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                  |
| 3      |     1 | GND                    | 5006 KEYSTONE                                           | 5006 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 4      |     1 | J1                     | TSW-106-08-S-S-RA                                       | SAMTEC                    | TSW-106-08-S-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025 INCH SQUARE POST HEADER; RIGHT ANGLE; 6PINS                                                                                                  |
| 5      |     2 | J2, J4                 | PCC02SAAN                                               | SULLINS                   | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                          |
| 6      |     1 | J3                     | PCC03SAAN                                               | SULLINS                   | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                          |
| 7      |     2 | J5, J6                 | PEC04SAAN                                               | SULLINS ELECTRONICS CORP. | PEC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                         |
| 8      |     3 | R1-R3                  | CRCW06034K70FK                                          | VISHAY DALE               | 4.7K              | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                               |
| 9      |     5 | SU1-SU5                | STC02SYAN                                               | SULLINS ELECTRONICS CORP. | STC02SYAN         | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                           |
| 10     |     1 | U1                     | DS18B20U                                                | MAXIM                     | DS18B20U          | IC; DTHM; PROGRAMMABLE RESOLUTION 1-WIRE DIGITAL THERMOMETER; USOP8                                                                                                               |
| 11     |     1 | U2                     | DS2482S-100+                                            | MAXIM                     | DS2482S-100+      | IC; INFC; SINGLE-CHANNEL 1-WIRE MASTER; NSOIC8                                                                                                                                    |
| 12     |     1 | VDD                    | 5005 KEYSTONE                                           | 5005 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                      |
| 13     |     1 |                        | EPCBDS18B20                                             | MAXDS18B20                | MAXIM             | PCB                                                                                                                                                                               |
| TOTAL  |    26 |                        |                                                         |                           |                   |                                                                                                                                                                                   |

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

| ITEM   |   QTY | REF DES   | MFG PART #    | MANUFACTURER   | VALUE   | DESCRIPTION                                                |
|--------|-------|-----------|---------------|----------------|---------|------------------------------------------------------------|
| 1      |     1 | PACKOUT   | 88-00711-SML  | N/A            | ?       | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                   |
| 2      |     1 | PACKOUT   | 87-02162-00   | N/A            | ?       | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT |
| 3      |     1 | PACKOUT   | 85-MAXKIT-PNK | N/A            | ?       | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT      |
| 4      |     1 | PACKOUT   | EVINSERT      | N/A            | ?       | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                      |
| 5      |     1 | PACKOUT   | 85-84003-006  | N/A            | ?       | LABEL(EV KIT BOX) - PACKOUT                                |
| TOTAL  |     5 |           |               |                |         |                                                            |

Evaluates: DS18B20

## DS18B20 EV System Schematic

<!-- image -->

## DS18B20 Evaluation System

## DS18B20 EV System PCB Layout

DS18B20 EV System-Top Silkscreen

<!-- image -->

DS18B20 EV System-Bottom

<!-- image -->

Evaluates: DS18B20

DS18B20 EV System-Top

<!-- image -->

DS18B20 EV System-Bottom Silkscreen

<!-- image -->

│

## DS18B20 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: DS18B20