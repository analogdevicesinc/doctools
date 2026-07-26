<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: DS28E18

## General Description

The DS28E18 evaluation system (EV system) provides the special hardware and software system to exercise the features of the DS28E18 1-Wire ® -to-I 2 C/SPI bridge with command sequencer IC. The EV system consists of a DS28E18 EV  kit  board,  a  DS7505  peripheral  module  board,  a MAX31722 peripheral module board, and a DS9481P-300# USB-to-1-Wire adapter for  PC  connectivity. The  EV  kit  is compatible with Windows ®  operating systems.

## EV System Contents

- DS28E18 EV kit board (Figure 1)
- DS9481P-300# USB-to-1-Wire adapter
- MAX31722 PMOD board
- DS7505 PMOD board

Figure 1. DS28E18 EV Kit Board

<!-- image -->

Figure 2. DS9481P-300# USB-to-1-Wire Adapter

<!-- image -->

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

Windows is a registered trademark of Microsoft Corporation.

©

Click here to ask an associate for production status of specific part numbers.

## DS28E18 Evaluation System

## Features

- Driver Support for Windows 10/8/7
- Fully Compliant with USB 2.0 Specification
- USB Powered with No External Power Supply Required
- Extended SPI/I 2 C Peripheral Module Connector for Rapid Prototyping of SPI/I 2 C Slaves

Ordering Information appears at end of data sheet.

319-100556; Rev 1; 11/21

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.470      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## DS28E18 Evaluation System

<!-- image -->

Figure 3. MAX31722 PMOD Board

Figure 4. DS7505 PMOD Board

<!-- image -->

Figure 5. Typical Setup

<!-- image -->

## DS28E18 EV Kit Files

| FILE           | DESCRIPTION     |
|----------------|-----------------|
| DS28E18 EV Kit | EV kit software |

## Quick Start

## Required Equipment

- DS28E18 EV kit (included)
- DS9481P-300# USB-to-1-Wire adapter (included)
- PC with a Windows 10/8/7 (32-bit or 64-bit) operating system and a spare USB 2.0 or higher port
- Download and install the latest 1-Wire Drivers
- DS28E18 EV kit software

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install the DS9481P-300# drivers as shown in Figure 7, Figure 8, and Figure 9.
- 2) Attach the DS9481P-300# adapter to the DS28E18 EV kit (Figure 6).
- 3) Obtain the latest version of the DS28E18 EV kit software.
- 4) Unzip and save the EV kit software to a known location.
- 5) Open the DeviceDriver folder.
- 6) Right-click on install.bat and then choose Run as administrator (Figure 7).
- 7) A command window opens with a prompt asking to install the device driver (Figure 8). Click Install .

│

## DS28E18 Evaluation System

- 8) Open the folder where the DS28E18 EV kit software was extracted and double-click the Setup.exe file.
- 9) Plug the USB cable to the DS9481P-300# adapter.
- 10)  Insert the DS9481P-300# into a spare USB port on the PC.
- 11)  The device will automatically search for and install the driver (Figure 9).
- 12)  To start the evaluation software, ensure that the DS9481P-300# has been properly installed and the DS28E18 board and DS9481P-300# adapter are connected.

## Evaluates: DS28E18

Run the DS28E18 EV kit software: Start→ Pro -grams → Maxim Integrated → DS28E18EV Kit

- 13)  If the DS9481P-300# is not detected or connected to the USB port, the software displays an error message (Figure 11). Close the program window, reconnect the DS9481P-300# adapter, and restart the program again.
- 14)  Once properly installed, the initial screen graphical user interface (GUI) should appear (Figure 12).

Figure 6. DS9481P-300 Attached with DS28E18 EV Kit Board

<!-- image -->

Figure 7. Device Driver Installation

<!-- image -->

│

Evaluates: DS28E18

<!-- image -->

Figure 8. Device Driver (Install Device Software)

Figure 9. Device Driver Successfully Installed

<!-- image -->

Figure 10. Opening the DS28E18 Evaluation Program Setup

<!-- image -->

Figure 11. DS9481P-300# Error Message

<!-- image -->

Figure 12. DS28E18 EV Kit Software Initial Screen GUI

<!-- image -->

## DS28E18 Evaluation System

## Detailed Description of Software

The DS28E18 evaluation program user interface (Figure 12) has two tabs: 1-Wire to I2C/SPI and Settings . The 1-Wire to I2C/SPI tab is the main tool to evaluate specific functions of the DS28E18. The Settings tab (Figure 13) provides control over the device's general and GPIO configurations.

Figure 13. DS28E18 EV Kit Software, Settings Tab

<!-- image -->

## DS28E18 Evaluation System

## 1-Wire to I2C/SPI Tab

The DS28E18 EV kit board provides a peripheral module connector  designed  for  attaching  either  an  I 2 C  or  SPI slave. To help communicate with attached slave devices, the 1-Wire to I2C/SPI tab provides the following controls: Find  Devices , Sequencer  Commands , Sequencer Memory  List , Device  Function  Commands ,  and Get Temp . See Table 1 for more details on each control.

## Table 1. 1-Wire to I 2 C/SPI Controls

| ELEMENT NAME (TYPE)                       | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Find Devices (Action button)              | Triggers the Search ROM command and powers up all discovered devices after adding them to the Device List box. See the log for a detailed flow of the power-up sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Get Temp (Action button)                  | Example flow for getting temperature from either the DS7505 or MAX31722 peripheral module boards included with the kit using the DS28E18. Only available after clicking Find Devices . To select between modules, configure the device Protocol under the Settings tab. See the DS7505 or MAX31722 data sheet for product specific details and sequences.                                                                                                                                                                                                                                                                                                 |
| Sequencer Commands (Action buttons)       | Controls used in conjunction with the Sequencer Memory List to build I 2 C/SPI sequences. Only available after clicking Find Devices . To avoid mixing sequences, only one tab can can be used between I 2 C and SPI controls. To select between I² C and SPI controls, configure the device Protocol under the Settings tab.                                                                                                                                                                                                                                                                                                                             |
| Sequencer Memory List (Data Grid)         | Table used in conjunction with the Sequencer Commands controls to build I 2 C/SPI sequences. Each sequencer command populates and updates this table with its respective command structure recognized by the DS28E18. Data displayed in this list does not reflect the actual data found in the DS28E18 memory and is just a tool used to help manipulate data with the device function commands.                                                                                                                                                                                                                                                         |
| Device Function Commands (Action buttons) | Controls used in conjunction with the Sequencer Memory List to manipulate the DS28E18 memory. Click the Select All button, or manually enter the desired address in Address Range box, to specify the location in memory to Write to or Read/Run from. Select between three different device function commands: Write Sequencer (11h) - Writes the data from the highlighted address into the actual memory address. Read Sequencer (22h) - Reads the actual data that resides in memory address highlighted. Run Sequencer: (33h) - Runs the actual data that resides in memory address highlighted. Must click the Execute button to perform an action. |

## Table 2. Settings Controls

| ELEMENT NAME   | DESCRIPTION                                                                                                                               |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Device         | options to specify action. Customize the desired configuration with                                                                       |
|                | GPIO Function Commands and register options to specify an action. available drop-down boxes (only available when Write GPIO Configuration |

│

## Settings Tab

The Settings tab  provides  the  necessary  controls  for configuring the devices' general and GPIO settings. See Table 2 for more details on each control.

Evaluates: DS28E18

## DS28E18 Evaluation System

## Detailed Description of Hardware

For more information on jumper configurations, see Table 3.

## Table 3. Jumper Settings

| JUMPER   | SETTING      | DETAILS                                                       |
|----------|--------------|---------------------------------------------------------------|
| JB1      | Open         | Enable LED, D1 toggle control through GPIOA                   |
| JB1      | Closed       | Disable LED, D1 toggle control                                |
| JB2      | Open         | Enable LED, D2 toggle control through GPIOB                   |
| JB2      | Closed       | Disable LED, D2 toggle control                                |
| JB3      | Open         | DS28E18 powered through DS9481P-300 3.3V supply               |
| JB3      | Closed       | DS28E18 powered parasitically through DS9481P-300 1-Wire      |
| JP4      | Open         | No power being supplied through 12-pin female connector       |
| JP4      | 3.3V and VDD | 3.3V power being supplied through 12-pin female connector     |
| JP4      | SENS and VDD | SENS_VDD power being supplied through 12-pin female connector |

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| DS28E18EVKIT# | EV system |

# Denotes RoHS compliant.

## DS28E18 Evaluation System

## DS28E18 EV Kit Bill of Materials

| DS28E18EVKITBoard   |               |                                                          |               |                   |                                 |                       |          |                    |                                                                                                                                 |
|---------------------|---------------|----------------------------------------------------------|---------------|-------------------|---------------------------------|-----------------------|----------|--------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Quantity            | Comment       | Description                                              | Designator    | Part Number       | Manufacture Name                | Notes                 | Vendor   | Vendor Part Number | Datasheet URL                                                                                                                   |
| 1 1                 | PCB PMOD MALE | DS28E18EVKIT PCB CONN HEADER .100 SINGL R/A 6POS         | J1            | ??? PBC36SBAN     | Sullins Connector Solutions     | 0.100" Tail           | Digi-Key | S1111E-36-ND       | http://www.sullinscorp.com/catalogs/77_PAGE108-109_.100_MALE_HDR.pdf                                                            |
| 3                   | JUMPBLOCK 1   | CONN HEADER VERT 2POS 2.54MM                             | JB1, JB2, JB3 | PEC02SAAN         | Sullins Connector Solutions     |                       | Digikey  | S1012E-02-ND       | https://www.digikey.com/product-detail/en/sullins-connector-solutions/PEC02SAAN/S1012E-02-ND/859155                             |
| 2                   | 10K           | RES SMD 1K OHM 1% 1/10W 0603                             | R5, R7        | ERJ-3EKF1002V     | Panasonic Electronic Components | Spool 1017            | Digikey  | P10.0KHTR-ND       | http://industrial.panasonic.com/www-cgi/jvcr13pz.cgi?E+PZ+3+AOA0002+ERJ3EKF1002V+7+WW                                           |
| 4                   | 4.7K          | RES SMD 4.7K OHM 1% 1/10W 0603                           | R2, R3, R4,   | R6 ERJ-3EKF4701V  | Panasonic Electronic Components |                       | Digikey  | P4.70KHCT-ND       | http://industrial.panasonic.com/www-cgi/jvcr13pz.cgi?E+PZ+3+AOA0002+ERJ3EKF1002V+7+WW                                           |
| 2                   | 1M            | RES SMD 1M OHM 1% 1/10W 0603                             | R8, R9        | ERJ-3EKF1004V     | Panasonic Electronic Components |                       | Digikey  | P1.00MHCT-ND       | http://industrial.panasonic.com/www-cgi/jvcr13pz.cgi?E+PZ+3+AOA0002+ERJ3EKF1002V+7+WW                                           |
| 2                   | BSS138LT1G    | MOSFET N-CH 50V 200MA SOT-23                             | Q1, Q2        | BSS138LT1G        | ON SEMICONDUCTOR                | Vgs(th)(Max) 1.5V@1mA | Digikey  | BSS138LT1GOSCT-ND  | http://www.onsemi.com/pub_link/Collateral/BSS138LT1-D.PDF                                                                       |
| 1                   | 0.47uF        | 0.47µF ±10% 16V Ceramic Capacitor X7R 0603 (1608 Metric) | C1            | C0603C474K4RACTU  | Kemet                           |                       | Digikey  | 399-4922-2-ND      | http://www.kemet.com/datasheets&C0603C104K8RACTU                                                                                |
| 2                   | GREEN LED     | LED INGAN GREEN CLEAR 0603 SMD                           | D1, D2        | 598-8081-107F     | Dialight                        | LED A, LED B          | Digikey  | 350-2036-1-ND      | http://media.digikey.com/pdf/Data%20Sheets/Dialight%20PDFs/598_Series_0603_Pkg.pdf                                              |
| 1                   | DS28E18       | 1-Wire® Slave-to-I2C/SPI Master Bridge                   | U1            |                   | Maxim Integrated                |                       |          |                    |                                                                                                                                 |
| 1                   | JUMPER        | HDR,BRKWAY,.100 3POS VERT,0.318"                         | JP4           | 9-146276-0        | Tyco Electronics                | Cut to 1x3 sections   |          |                    | http://documents.tycoelectronics.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=102972&DocType=CD&DocLang=EN |
| 1                   | PMOD FEMALE   | CONN RCPT 12POS 0.1 TIN PCB R/A                          | J2            | SSW-106-02-T-D-RA | Samtec Inc.                     |                       |          |                    | http://suddendocs.samtec.com/prints/ssw-1xx-xx-xxx-x-xx-xxx-xx-mkt.pdf                                                          |

|   DS7505 Module Board Quantity | Comment     | Description                        | Designator   | Part Number         | Manufacture Name            | Vendor   | Vendor Part Number   |                                                                        |
|--------------------------------|-------------|------------------------------------|--------------|---------------------|-----------------------------|----------|----------------------|------------------------------------------------------------------------|
|                              1 | PCB         | DS7505 Module Board PCB            |              | ???                 |                             |          |                      |                                                                        |
|                              1 | 0.1uF       | CAP CER 0.1UF 25V X7R 0603         | C1           | C1608X7R1E104K080AA | TDK Corporation             | Digi-Key | 445-1316-1-ND        | http://www.tdk.com/pdf/general_B11.pdf                                 |
|                              1 | PMOD FEMALE | CONN RCPT 12POS 0.1 TIN PCB R/A    | J1           | SSW-106-02-T-D-RA   | Samtec Inc.                 | Digi-Key | SAM10026-ND          | http://suddendocs.samtec.com/prints/ssw-1xx-xx-xxx-x-xx-xxx-xx-mkt.pdf |
|                              1 | PMOD MALE   | CONN RCPT 12POS 0.1 TIN PCB R/A    | J2           | PRPC006DBAN-M71RC   | Sullins Connector Solutions | Digi-Key | S2111EC-06-ND        | https://drawings-pdf.s3.amazonaws.com/11639.pdf                        |
|                              1 | DS7505      | Digital Thermometer and Thermostat | U1           | DS7505U+            | Maxim Integrated            |          |                      | https://datasheets.maximintegrated.com/en/ds/DS7505.pdf                |

|   MAX31722 Module Board Quantity | Comment     | Description                                                    | Designator   | Part Number         | Manufacture Name                              |          | Vendor Vendor Part Number   | Datasheet URL                                                                                 |
|----------------------------------|-------------|----------------------------------------------------------------|--------------|---------------------|-----------------------------------------------|----------|-----------------------------|-----------------------------------------------------------------------------------------------|
|                                1 | PCB         | MAX31723 Module Board PCB                                      |              | ???                 |                                               |          |                             |                                                                                               |
|                                1 | 0.1uF       | CAP CER 0.1UF 25V X7R 0603                                     | C1           | C1608X7R1E104K080AA | TDK Corporation                               | Digi-Key | 445-1316-1-ND               | http://www.tdk.com/pdf/general_B11.pdf                                                        |
|                                1 | PMOD FEMALE | CONN RCPT 12POS 0.1 TIN PCB R/A                                | J1           |                     | SSW-106-02-T-D-RA Samtec Inc.                 | Digi-Key | SAM10026-ND                 | http://suddendocs.samtec.com/prints/ssw-1xx-xx-xxx-x-xx-xxx-xx-mkt.pdf                        |
|                                1 | PMOD MALE   | CONN RCPT 12POS 0.1 TIN PCB R/A                                | J2           |                     | PRPC006DBAN-M71RC Sullins Connector Solutions | Digi-Key | S2111EC-06-ND               | https://drawings-pdf.s3.amazonaws.com/11639.pdf                                               |
|                                1 | MAX31722    | Digital Thermometers and Thermostats with SPI/3-Wire Interface | U1           | MAX31722MUA+        | Maxim Integrated                              |          |                             | https://www.maximintegrated.com/en/products/analog/sensors-and-sensor-interface/MAX31723.html |

## DS28E18 EV Kit Schematic

<!-- image -->

│

## Evaluates: DS28E18

## DS28E18 Evaluation System

## DS9481P-300 EV Kit Schematic

<!-- image -->

│

Evaluates: DS28E18

## DS28E18 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION         | PAGES CHANGED   |
|-------------------|-----------------|---------------------|-----------------|
|                 0 | 6/20            | Initial release     | -               |
|                 1 | 11/21           | Updated Quick Start | 2               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: DS28E18