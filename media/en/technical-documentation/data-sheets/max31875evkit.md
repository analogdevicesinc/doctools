<!-- lastmod 2022-08-03 -->
## MAX31875 Evaluation Kit

## General Description

The MAX31875 evaluation kit (EV kit) demonstrates the MAX31875 ±2°C-accurate local temperature sensor with I 2 C/SMBus interface. The EV kit includes a graphical user interface (GUI) that provides communication over I 2 C with an on-board master IC.

The MAX31875 EV kit comes with the MAX31875ROTZS+ installed.

## Features

Windows is a registered trademark and registered service mark of Microsoft Corporation.

- Windows ® 7, Windows 8/8.1, and Windows 10 Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX31875

## Quick Start

## Required Equipment

- MAX31875 EV kit (includes Micro-USB cable)
- USB2PMB2 USB to I 2 C interface board
- Windows PC

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit http://www.maximintegrated.com/en/ design/tools/applications/evkit-software/ to download the latest version of the EV kit software, MAX31875EVKitSetupV1.0.zip. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Connect the MAX31875PMB1 board to the USB2PMB2 board.
- 3) Connect the USB cable from the PC to the USB2PMB2 board. Windows may require some time to install its device driver.
- 4) Open the EV kit GUI, MAX31875EVKit.exe and select Device→MAX31875PMB option (or MAX31875PMB ).
- 5) Click the Scan Adapters button, then click the Connect button. See Figure 1.
- 6) Click the Sample Continuously button to begin plotting temperature data.

<!-- image -->

## MAX31875 Evaluation Kit

## General Description of Software

The  main  window  of  the  MAX31875  EV  kit  software contains controls to evaluate the MAX31875 temperature sensor.

## USB2PMB Adapter

The  controls  within  the USB2PMB https://datasheets. maximintegrated.com/en/ds/USB2PMB2.pdf Adapter groupbox  allow  the  user to select the appropriate USB2PMB  devices.  When Scan  Adapters button  is pressed, it updates the drop-down list with all USB2PMB devices.  With  the  EV  kit  connected  to  the  PC,  either PMOD031875 or  a  similar  serial  number appears within the drop-down list. Make the appropriate selection respective of the IC and press the Connect button.

Evaluates: MAX31875

The Attached  Device  Search scans  the  I 2 C  bus  for supported devices. The software GUI supports all eight varieties  of  the  MAX31875,  which  differ  only  in  the  I 2 C slave device address.

Along the right side of the window, there are drop-down boxes for each of the fields of the configuration register. Additionally, the raw register values can be read and written by the Temperature , Configuration , THyst , and TOS controls in the upper right corner of the window.

Sample  rate  is  determined  by  the 0x006  Conversion Rate[1:0] drop-down  box.  Click Sample  Continuously to read temperature register and plot on graph at the configured sample rate.

The One-Shot Read button triggers a single temperature reading. The MAX31875 must be in Shutdown mode to enable One-Shot Read.

Figure 1. MAX31875 EV Kit Main Window

<!-- image -->

│

## General Description of Hardware

The  MAX31875  EV  kit  demonstrates  the  MAX31875 ±2°C-accurate local temperature sensor with I 2 C/SMBus interface. The EV kit includes the USB2PMB2 master for all I 2 C and I/O communication.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31875EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX31875 EV Kit Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #          | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                | COMMENTS   |
|--------|-----------|-----------|-------|---------------------|---------------------------|-------------------|--------------------------------------------------------------------------------------------|------------|
| 1      | C1        |           |     1 | C1608X8R1E104K080AA | TDK                       | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +150 DEGC; TC=X8R |            |
| 2      | J1        |           |     1 | PEC06SAAN           | SULLINS ELECTRONICS CORP. | PEC06SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                  |            |
| 3      | JU4       |           |     1 | TSW-106-08-S-D-RA   | SAMTEC                    | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                  |            |
| 4      | U1        |           |     1 | MAX31875            | MAXIM                     | MAX31875          | EVKIT PART-IC; MAX31875; PACKAGE OUTLINE: 21-100151A; PACKAGE CODE: Z40A0+1; WLP4;         |            |
| 5      | J2        | DNI       |     1 | PEC06SABN           | SULLINS ELECTRONICS CORP. | PEC06SABN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; HEAD=0.230IN; TAIL=0.230IN      |            |
| 6      | PCB       | -         |     1 | MAX31875PMB         | MAXIM                     | PCB               | PCB Board:MAX31875PMB1 EVALUATION KIT                                                      |            |
| TOTAL  |           |           |     6 |                     |                           |                   |                                                                                            |            |

## Extension Cable

If using a 6-pin extension cable between the USB2PMB2 and MAX31875PMB1 board, only the top row (pins 1-6) need to be connected.

Evaluates: MAX31875

## MAX31875 Evaluation Kit

## MAX31875 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX31875

## MAX31875 EV Kit PCB Layout Diagrams

MAX31875 EV Kit-Top Silkscreen

<!-- image -->

MAX31875 EV Kit-Top

<!-- image -->

MAX31875 EV Kit-Layer 2

<!-- image -->

│

## MAX31875 EV Kit PCB Layout Diagrams (continued)

MAX31875 EV Kit-Layer 3

<!-- image -->

MAX31875 EV Kit-Bottom

<!-- image -->

## MAX31875 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUe LPSlLeG. 0D[LP IQWeJUDWeG UeVeUYeV WKe ULJKW WR FKDQJe WKe FLUFXLWU\ DQG VSeFLfiFDWLRQV ZLWKR

<!-- image -->

│

Evaluates: MAX31875