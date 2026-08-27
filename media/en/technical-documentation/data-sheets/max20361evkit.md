<!-- lastmod 2022-08-03 -->
## MAX20361 Evaluation Kit

## General Description

The MAX20361 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX20361  single/ multi-cell  solar  harvester  with  maximum  power  point tracking (MPPT) and harvest counter. The EV kit features a  Pmod™  connector,  allowing  the  USB2PMB2  adapter board to provide I 2 C interface.

The EV kit features an on-board adjustable current source and a monocrystalline solar cell to generate input current to  the  IC.  It  also  features  a  supercapacitor  and  resistor load to evaluate the integrated charger of the MAX20361. The EV kit includes load current monitoring circuitry for convenient sensing of the MAX20361 output current.

The  EV  kit  software  controls  the  USB2PMB2  adapter board  over  the  USB,  which  generates  I 2 C  commands. The EV kit ships with jumpers installed and supply voltages set to typical operating values.

## MAX20361 EV Kit Photo

<!-- image -->

Windows is a registered trademark and service mark of Microsoft Corporation.

Pmod is a trademark of Digilent Inc.

Evaluates: MAX20361

## Features

- USB-Powered Operation
- Proven High-Speed USB PCB Layout
- Pmod I 2 C Interface
- Flexible Configuration
- On-Board Solar Cell and Current Monitoring
- Windows ®  8/Windows 10-Compatible GUI Software
- Fully Assembled and Tested

## Evaluation Kit Contents

- MAX20361 EV kit
- USB2PMB2 adapter board
- USB A to micro-B cable

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20361 Evaluation Kit

## MAX20361 EV Kit Files

| FILE              | DESCRIPTION    |
|-------------------|----------------|
| MAX20361EVKit.exe | PC GUI Program |

## Quick Start

## Required Equipment

- MAX20361 EV kit
- USB2PMB2 adapter board
- USB A to micro-B cable
- Windows PC with USB ports
- DC power supply

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software. Text which is bold and underlined refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operations.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed .

Evaluates: MAX20361

- 1) Visit www.maximintegrated.com to download the latest version of the EV kit software, MAX20361EVKitSetupVxxx.ZIP located on the MAX20361 EV kit web page. Download the EV kit software to a temporary folder and unzip the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX20361EVKitSetupVxxx.EXE program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the USB2PMB2 adapter board to J1 Pmod connector on the EV kit.
- 5) Connect a USB A-to-micro-B cable between the PC and the X1 port on the USB2PMB2. USB driver should be installed automatically.
- 6) Connect the USB A-to-micro-B cable between the PC and the USB1 port on the EV kit.
- 7) Start the MAX20361 EV kit tool. The EV kit software main window appears, as shown in Figure 1.
- 8) Supply 3.8V to the MAX20361 by connecting power to pin 1 of jumper JU11.
- 9) If the connection is successfully established, the status bar on the bottom displays Connected .
- 10)  The EV kit is now ready for additional evaluations.

Figure 1. The Status of the GUI Shows Connected Ready for Further Evaluations

<!-- image -->

│

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the  IC  device  addresses.  The  EV  kit  enters  the  normal operating mode when the connection is established, and addresses are found. If the USB connection is not detected,  the  status  bar  displays Not Connected .  If  the  USB connection is detected but the MAX20361 is not found, the status bar displays MAX20361 Not Found .

The Read All button reads all the registers visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## ToolStrip Menu Bar

The Toolstrip menu bar (Figure 2) is located at the top of the GUI window.

This  bar  comprises File , Device , Options ,  and Help menus; each function is detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV kit to the GUI. If a board is disconnected while the GUI is open the GUI displays Not Connected in  the  lower  right  corner.  If  the  device  is  then  plugged back  in,  the  bottom  right  corner  of  the  GUI  displays Connected .  The I2C  Read/Write in  the Device menu allows the user to read from or write to a selected register with a specified slave address.

## Options Menu

The Options menu provides additional setting to access more features offered by the GUI. The Disable polling option lets  the  user  read  the  registers  manually  instead

## Evaluates: MAX20361

of  getting  automatically  frequent  register  updates  from the IC.

## Help Menu

The Help menu  contains  the About option,  which  displays the GUI splash screen indicative of which GUI version is being used.

## Tab Controls

The MAX20361 EV kit software GUI provides a convenient way to test the features of the MAX20361. Each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write operation to the MAX20361 to update the register contents.

## General Tab

The General tab  (Figure  3)  provides  all  important  information  and  options  to  set  up  the  MAX20361  general configurations.  The Device  Information  and  Status panel  provides  statuses  for  several  conditions  such  as the  availability  of  harvester  count,  fault  detection,  SYS overvoltage, etc. Open Circuit Voltage configuration and Thermal Monitoring settings can be found in the middle panel. Configuring the boost regulator and battery charging voltage can be accomplished via settings in the Boost and SYS Regulation panel.

## Register Map Tab

The Register Map tab (Figure 4) provides all names and values of MAX20361 registers. The user can click Read All on the top right corner to perform a burst read of all registers.

The left table shows the register to be read from or written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To set a bit, click the bit label. Bold text represents logic 1  and  regular  text  represents  logic  0.  To  configure  the changes  to  the  device,  click  the Write button  at  the bottom right.

Figure 2. The ToolStrip Menu Items

<!-- image -->

│

Evaluates: MAX20361

Figure 3. General Tab

<!-- image -->

Figure 4. Register Map Tab

<!-- image -->

## Detailed Description of Hardware

The MAX20361 EV kit evaluates the MAX20361 single/ multi-cell solar harvester with MPPT and harvest counter, which communicates over the I 2 C interface. The EV kit demonstrates the IC features such as the boost regulator, integrated charging and protection circuit, open circuit voltage  measurement,  MPPT,  cold-startup,  and  thermal monitoring. The EV kit uses the IC in a 12-bump (1.63mm x 1.23mm) wafer-level package (WLP) on a proven, fourlayer PCB design. The EV kit operates from the USB +5V DC  and  therefore  does  not  require  an  external  power supply. Alternatively, the EV kit can be powered with an external power supply through the SYS test point TP20.

## Table 1. Jumper Table (JU1-JU21)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                  |
|----------|------------------|----------------------------------------------------------------------------------------------|
| JU1      | 1-2              | Connect the on-board solar cell SC1 to the input of U1                                       |
| JU1      | 3-4              | Connect the external solar cell (if installed) to the input of U1                            |
| JU1      | 5-6              | Connect the external source (through TP2) to the input of U1                                 |
| JU1      | 7-8              | Connect the output of the on-board current source to the input of U1                         |
| JU2      | 1-2*             | Connect EN of U1 to LED1                                                                     |
| JU2      | 3-4              | Connect EN of U1 to connector S1                                                             |
| JU3      | 1-2*             | Connect WAKE of U1 to LED2                                                                   |
| JU3      | 3-4              | Connect WAKE of U1 to connector S1                                                           |
| JU4      | 1-2*             | Pullup SCL of U1 to 3.3V                                                                     |
| JU5      | 1-2*             | Connect input circuitry selected in JU1 to SRC and LX of U1                                  |
| JU6      | 1-2*             | Pullup SDAof U1 to 3.3V                                                                      |
| JU7      | 1-2*             | Connect REF of U1 to the voltage divider circuitry                                           |
| JU8      | 1-2*             | Connect THM of U1 to voltage divider formed by pullup resistor R6 and pulldown thermistor R7 |
| JU9      | 1-2              | Connect SYS of U1 to connector S1                                                            |
| JU11     | 1-2              | Connect SYS of U1 to the on-board load circuitry                                             |
| JU12     | 1-2              | Select supercapacitor SC2 as the on-board load                                               |
| JU13     | 1-2              | Select resistor R16 as the on-board load                                                     |
| JU14     | 1-2              | Select resistor R15 as the on-board load                                                     |
| JU15     | 1-2              | Select resistor R17 to adjust the on-board current source                                    |
| JU15     | 3-4              | Select resistor R18 to adjust the on-board current source                                    |
| JU15     | 5-6              | Select resistor R19 to adjust the on-board current source                                    |
| JU15     | 7-8              | Select resistor R20 to adjust the on-board current source                                    |
| JU16     | 1-2              | Connect the output of on-board current source to ground                                      |
| JU17     | 1-2*             | Connect SRC of U1 to the drain of MOSFET Q2                                                  |
| JU18     | 1-2              | Connect INT of U1 to the gate of MOSFET Q2                                                   |
| JU18     | 2-3*             | Connect INT of U1 to LED4                                                                    |
| JU21     | 1-2*             | Connect SYS of U1 to the on-board current monitoring circuitry                               |

* Default position.

Evaluates: MAX20361

## Supply Voltage Selection

This section covers the procedure to power the MAX20361 EV kit either from power supply at SYS or cold-startup.

## Supply Voltage from SYS

Follow these steps to power the MAX20361 EV kit with an external power supply voltage:

- 1) Connect default jumpers according to Table 1 and the setup Procedure above.
- 2) Connect a DC power supply (3.8V) to SYS through pin 1 of JU11 or pin 2 of JU9.
- 3) If connection is successfully established, the status bar on the bottom displays Connected .

## MAX20361 Evaluation Kit

## Cold-Startup

The cold start feature of the MAX20361 allows the device to start up even if VSYS is below the wake threshold or absent. Refer to the Cold-Startup section of the IC datasheet for a complete description.

- 1) Connect default jumpers according to Table 1 and the setup Procedure above. Do not connect any power to SYS, pin 1 of JU11 or pin 2 of JU9.
- 2) Connect pin 1 and 2 of jumper JU1 to use the on-board solar cell SC1.
- 3) Put a light source above the solar cell for a few minutes. Mobile phone's flashlight or desk lamp may be used.
- 4) If connection is successfully established, the status bar on the bottom displays Connected .

## On-Board Current Source

This  section  covers  the  procedure  to  use  the  on-board current source of MAX20361 EV kit.

## Hardware setting

- 1) Follow the default jumper settings from Table 1 and the setup Procedure above.
- 2) Connect pin 7 and 8 of jumper JU1 to use the on-board current source.
- 3) Connect pin 3 and 4 of jumper JU15 to select R18 301Ω.
- 4) Use the potentiometer R21 to adjust the input current to SRC. R21 is used to set the voltage at TP14. Refer to the following formula for the input current:

Evaluates: MAX20361

<!-- formula-not-decoded -->

The input current in this example is approximately 4.13mA.

- 5) Connect pin 1 and 2 of jumper JU11 to use the on-board load circuitry.
- 6) Connect pin 1 and 2 of jumper JU13 to select load resistor R16.

## GUI Program

Follow these steps (see Figure 5) to set up the regulated voltage at SRC (the input side):

- 1) Toggle to disable the Periodic OCV Measurements .
- 2) Enter 0.91V to the Open Circuit Voltage type box and click Set . The voltage at SRC should be approximately 0.7V.

Figure 5. On-Board Current Source GUI Setup

<!-- image -->

│

## MAX20361 Evaluation Kit

## Charging Supercapacitor and Source Clamping

This section covers the procedure to charge the on-board supercapacitor along with source clamping feature.

## Hardware setting

- 1) Follow the default jumper settings from Table 1 and the setup Procedure above.
- 2) Connect a DC power supply (3.8V) to SYS via pin 2 of JU9.
- 3) Follow hardware setting of the On-Board Current Source above with one exception: connect pin 1 and 2 of JU15.
- 4) Disconnect pin 1 and 2 of jumper JU13. Connect pin 1 and 2 of jumper JU12 to select the supercapacitor SC2.

Evaluates: MAX20361

- 5) Connect pin 1 and 2 of jumper JU18 for source clamp circuity.

## GUI Program

Follow these steps (see Figure 6) to set up source clamp circuitry while charging the on-board supercapacitor:

- 1) Toggle the button to enable Use INTb Output to Drive SRC Clamp . Remove the DC power supply (3.8V) at SYS via pin 2 of JU9.
- 2) Toggle to disable the Periodic OCV Measurements .
- 3) Enter 0.91V to the Open Circuit Voltage type box and click Set .  The voltage at SRC should be approximately 0.7V. The voltage at SYS is slowly rising to the SYS Regulation Voltage (default at 4.35V).

Figure 6. Charging Supercapacitor and Source Clamp GUI Setup

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20361EVKIT# | EV Kit |

# Denotes RoHS compliance.

│

## MAX20361 EV Kit Bill of Materials

| ITEM   | QTY   | REF DES                              | MAXINV                        | MFG PART #                                                                                 | MANUFACTURER                                  | VALUE                                               | DESCRIPTION                                                                                                                                                  |
|--------|-------|--------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | 7     | C1, C3, C5-C8, C10                   | 20-0001U-19A                  | CL05B105KQ5NQNC; GRM155R70J105KA12                                                         | SAMSUNG ELECTRONICS; MURATA                   | 1UF                                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                    |
| 2      | 2     | C2, C11                              | 20-0010U-B65                  | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC  | MURATA;MURATA; TDK;SAMSUNG ELECTRONICS; KEMET | 10UF                                                | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                    |
| 3      | 4     | C4, C13, C15, C16                    | 20-000U1-19A                  | GRM155R70J104KA01                                                                          | MURATA                                        | 0.1UF                                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  |
| 4      | 1     | C9                                   | 20-004U7-S6                   | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC                                    | MURATA; TAIYO YUDEN; TDK                      | 4.7UF                                               | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                   |
| 5      | 1     | C12                                  | EC111000002734                | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC | SAMSUNG; TAIYO YUDEN; KEMET;MURATA; TDK       | 10UF                                                | CAP; SMT (0805); 10UF; 10%; 10V; X7R;CERAMIC CHIP                                                                                                            |
| 6      | 1     | C14                                  | 20-004U7-Z52                  | C1005X5R1A475K050                                                                          | TDK                                           | 4.7UF                                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                    |
| 7      | 1     | C17                                  | 20-000U1-B8                   | GRM155R71A104KA01; C1005X7R1A104K050BB; C0402C104K8RAC                                     | MURATA; TDK;KEMET                             | 0.1UF                                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FORNEW DESIGN-USE 20-000u1-04A |
| 8      | 4     | D1-D4                                | 30-1N4148W7F-00               | 1N4148W-7-F                                                                                | DIODES INCORPORATED                           | 1N4148W-7-F                                         | DIODE; SWT; SMT (SOD-123); PIV=100V; IF=0.3A; -65 DEGC TO +150 DEGC                                                                                          |
| 9      | 1     | J1                                   | 01-PEC06DBAN12P-19            | PEC06DBAN                                                                                  | SULLINS ELECTRONICS CORP.                     | PEC06DBAN                                           | CONNECTOR; MALE; THROUGH HOLE; .1IN CONTACT CENTER; BREAKAWAY HEADER; RIGHT ANGLE; 12PINS; NOTE: ALTERNATE PIN NUMBERING                                     |
| 10     | 2     | JU1, JU15                            | EH111000002472                | TSW-104-07-F-D                                                                             | SAMTEC                                        | TSW-104-07-F-D                                      | CONNECTOR; MALE; SMT; 0.025 IN SQ POST HEADER; STRAIGHT; 8PINS; 2X4                                                                                          |
| 11     | 2     | JU2, JU3                             | 01-67996104HLF4P-19           | 67996-104HLF                                                                               | FCI CONNECT                                   | 67996-104HLF                                        | CONNECTOR; MALE; SMT; FCI BERGSTIK UNSHROUDED BREAKAWAY HEADER; STRAIGHT; 4PINS                                                                              |
| 12     | 13    | JU4-JU9, JU11-JU14, JU16, JU17, JU21 | 01-PCC02SAAN2P-21             | PCC02SAAN                                                                                  | SULLINS                                       | PCC02SAAN                                           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                     |
| 13     | 1     | JU18                                 | 01-PBC03SABN3P-21             | PBC03SABN                                                                                  | SULLINS                                       | PBC03SABN                                           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                    |
| 14     | 1     | L1 LED1                              | EL111000002015                | DFE201612E-4R7M                                                                            | MURATA                                        | 4.7UH                                               | INDUCTOR; SMT (0806); METAL; 4.7UH; 20%; 1.20A                                                                                                               |
| 15 16  | 1 2   | LED2, LED3                           | ED111000004434 ED111000004432 | KS DELPS1.22-TIVH-68-H3Q4 KP DELPS1.FP-UGVI-34-Z555                                        | OSRAM OSRAM                                   | KS DELPS1.22-TIVH-68-H3Q4 KP DELPS1.FP-UGVI-34-Z555 | DIODE; LED; SUPER RED; SMT; VF=2.2V; IF=0.02A DIODE; LED; PURE GREEN; SMT; VF=2.9V; IF=0.01A                                                                 |
| 17     | 1     | LED4                                 | 30-LSL29KG1J21Z-00            | LS L29K-G1J2-1-Z                                                                           | OSRAM                                         | LS L29K-G1J2-1-Z                                    | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                                                                |
| 18     | 4     | MH1-MH4                              | 02-SOM35016H-00               |                                                                                            | 9032 KEYSTONE                                 | 9032 SPACER;                                        | MACHINE FABRICATED; ROUND-THRU HOLE NO THREAD; M3.5; 5/8IN; NYLON                                                                                            |
| 19     | 1     | Q1                                   | 90-MMBT2907A-16               | MMBT2907A                                                                                  | FAIRCHILD SEMICONDUCTOR                       | MMBT2907A                                           | TRAN; SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.35W); IC-(-0.6A); VCEO-(-60V)                                                                              |
| 20     | 1     | Q2                                   | EQ111000004398                | DMN2230U                                                                                   | DIODES INCORPORATED                           | DMN2230U                                            | TRAN; NCH; ENHANCEMENT MODEMOSFET; SOT-23; PD-(0.6W); I-(2A); V-(20V)                                                                                        |
| 21     | 3     | R1, R2, R9                           | 80-0001K-23                   | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001                                              | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI         | 1K                                                  | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                          |
| 22     | 2     | R4, R5                               | 80-004K7-23                   | CRCW04024K70FK; MCR01MZPF4701                                                              | VISHAY DALE; ROHM SEMICONDUCTOR               | 4.7K                                                | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                    |
| 23     | 1     | R6                                   | 80-0022K-23                   | CRCW040222K0FK                                                                             | VISHAY DALE                                   | 22K                                                 | RESISTOR, 0402, 22K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                     |
| 24     | 1     | R7                                   | ER111000004407                | 64WR200KLF                                                                                 | TT ELECTRONICS                                | 200K                                                | RES; THROUGH HOLE; 200K; 10%; +/-100PPM/DEGC; 0.25W                                                                                                          |
| 25     | 1     | R8                                   | 80-002K2-23                   | CRCW04022K20FK; RC0402FR-072K2L                                                            | VISHAY DALE; YAGEO PHICOMP                    | 2.2K                                                | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                    |
| 26     | 3     | R11, R12, R22                        | 80-0100K-BA37                 | ERJ-PA2F1003                                                                               | PANASONIC                                     | 100K                                                | RESISTOR; 0402; 100K OHM; 1%; 100PPM; 0.2W; THICK FILM                                                                                                       |
| 27     | 1     | R13                                  | 80-063K4-AA18                 | CRCW040263K4FK                                                                             | VISHAY DALE                                   | 63.4K                                               | RESISTOR; 0402; 63.4K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                    |
| 28     | 1     | R14                                  | 80-049K9-18                   | CRCW040249K9FK; 9C04021A4992FLHF3                                                          | VISHAY DALE; YAGEO                            | 49.9K                                               | RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                       |
| 29     | 2     | R15, R24                             | 80-0010K-23                   | CRCW040210K0FK; RC0402FR-0710KL                                                            | VISHAY DALE; YAGEO PHICOMP                    | 10K                                                 | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                         |
| 30     | 1     | R16                                  | 80-049R9-S3                   | RCL122549R9FK                                                                              | VISHAY DRALORIC                               |                                                     | 49.9 RESISTOR; 1225; 49.9 OHM; 1%; 100PPM; 2.0W; THICK FILM                                                                                                  |
| 31     | 1     | R17                                  | 80-030R1-24                   | CRCW060330R1FK                                                                             | VISHAY DALE                                   | 30.1                                                | RESISTOR; 0603; 30.1 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                      |

Evaluates: MAX20361

## MAX20361 EV Kit Bill of Materials (continued)

| ITEM                                                                              | QTY                                                                               | REF DES                                                                           | MAXINV                                                                            | MFG PART #                                                                        | MANUFACTURER                                                                      | VALUE                                                                             | DESCRIPTION                                                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 32                                                                                | 1                                                                                 | R18                                                                               | 80-0301R-19                                                                       | CRCW0603301RFK                                                                    | VISHAY DALE                                                                       |                                                                                   | 301 RESISTOR; 0603; 301 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                    |
| 33                                                                                | 1                                                                                 | R19                                                                               | 80-03K01-23                                                                       | CRCW04023K01FK                                                                    | VISHAY DALE                                                                       | 3.01K                                                                             | RESISTOR; 0402; 3.01 K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                                    |
| 34                                                                                | 1                                                                                 | R20                                                                               | 80-09K09-AA23                                                                     | ERJ-2RKF9091                                                                      | PANASONIC                                                                         | 9.09K                                                                             | RESISTOR; 0402; 9.09K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                       |
| 35                                                                                | 1                                                                                 | R21                                                                               | ER0531                                                                            | 64WR50KLF                                                                         | TT ELECTRONICS                                                                    | 50K                                                                               | RES; THROUGH HOLE; 50K; 10%; +/-100PPM/DEGC;                                                                                                                                                                                  |
| 36                                                                                | 1                                                                                 | R23                                                                               | 80-022R1-AA23                                                                     | ERJ-2RKF22R1                                                                      | PANASONIC                                                                         |                                                                                   | 0.25W 22.1 RES; SMT (0402); 22.1; 1%; +/-100PPM/DEGC; 0.10W                                                                                                                                                                   |
| 37                                                                                | 1                                                                                 | R25                                                                               | 80-006R8-CA55                                                                     | CRCW20106R80FKEFHP                                                                | VISHAY DRALORIC                                                                   |                                                                                   | 6.8 RESISTOR; 2010; 6.8 OHM; 1%; 100PPM; 1W; THICK FILM                                                                                                                                                                       |
| 38                                                                                | 1                                                                                 | R26                                                                               | 80-008M2-23                                                                       | CR0402-16W-825JT                                                                  | VENKEL LTD.                                                                       | 8.2M                                                                              | RESISTOR, 0402, 8.2M OHM, 5%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                     |
| 39                                                                                | 1                                                                                 | R29                                                                               | 80-0001R-U27                                                                      | CRT0805-CY-001RELF                                                                | BOURNS                                                                            |                                                                                   | 1 RESISTOR, 0805, 1OHM, 0.25%, 25PPM, 0.10W, THICK FILM                                                                                                                                                                       |
| 40                                                                                | 1                                                                                 | R30                                                                               | ER111000004703                                                                    | CRCW04024R99FN                                                                    | VISHAY                                                                            |                                                                                   | 4.99 RES; SMT (0402); 4.99; 1%; +/-200PPM/DEGK; 0.063W                                                                                                                                                                        |
| 41                                                                                | 1                                                                                 | S1                                                                                | EH111000002454                                                                    | PPTC041LGBN-RC                                                                    | SULLINS ELECTRONICS                                                               | PPTC041LGBN-RC                                                                    | CONNECTOR; FEMALE; THROUGH HOLE; RIGHT ANGLE; 4PINS                                                                                                                                                                           |
| 42                                                                                | 1                                                                                 | SC1                                                                               | EQ111000004410                                                                    | KXOB25-14X1F                                                                      | CORP IXYS CORPORATION                                                             | KXOB25-14X1F                                                                      | IC; SNSR; IXOLAR HIGH EFFICIENCY SOLARBIT; SMT                                                                                                                                                                                |
| 43                                                                                | 1                                                                                 | SC2                                                                               | EC111000004409                                                                    | KR-5R5V224-R                                                                      | EATON POWERING BUSINESS WORLDWIDE                                                 | 0.22F                                                                             | CAP; THROUGH HOLE-RADIAL LEAD; 0.22F; -20% TO +80%; 5.5V; ELECTRIC DOUBLE LAYER CAPACITOR                                                                                                                                     |
| 44                                                                                | 20                                                                                | SU1-SU20                                                                          | 01-929953302P-24                                                                  | 929953-30                                                                         | 3M ELECTRONIC SOLUTIONS DIVISION                                                  | 929953-30                                                                         | CONNECTOR; FEMALE; THROUGH HOLE; 929 SERIES; SHUNT CONNECTOR; STRAIGHT; 2PINS                                                                                                                                                 |
| 45                                                                                | 3                                                                                 | TP1, TP5, TP7                                                                     | 02-TPMINI5001-00                                                                  | 5001                                                                              | KEYSTONE                                                                          | N/A                                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                 |
| 46                                                                                | 4                                                                                 | TP2, TP3, TP6, TP19                                                               | 02-TPMINI5000-00                                                                  | 5000                                                                              | KEYSTONE                                                                          | N/A                                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                   |
| 47                                                                                | 3                                                                                 | TP4, TP14, TP16                                                                   | 02-TPMINI5003-00                                                                  |                                                                                   | 5003 KEYSTONE                                                                     | N/A                                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                |
| 48                                                                                | 2                                                                                 | TP8, TP13                                                                         | 02-TPMINI5116-00                                                                  | 5116                                                                              | KEYSTONE                                                                          | N/A                                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR                                                                                            |
| 49                                                                                | 4                                                                                 | TP9-TP12                                                                          | 02-TPMINI5011-00                                                                  | 5011                                                                              | KEYSTONE                                                                          | N/A                                                                               | BOARD THICKNESS=0.062IN; NOT FOR COLD TEST TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 50                                                                                | 1                                                                                 | TP15                                                                              | 02-TPMINI5119-00                                                                  | 5119                                                                              | KEYSTONE                                                                          | N/A                                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; PURPLE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR                                                                                           |
| 51                                                                                | 3                                                                                 | TP18, TP20, VCC                                                                   | 02-TPMINI5002-00                                                                  | 5002                                                                              | KEYSTONE                                                                          | N/A                                                                               | BOARD THICKNESS=0.062IN; NOT FOR COLD TEST TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE                                                                                           |
| 52                                                                                | 1                                                                                 | U1                                                                                | 00-SAMPLE-01                                                                      | MAX20361AEWC+                                                                     | MAXIM                                                                             | MAX20361AEWC+                                                                     | WIRE SILVER; NOT FOR COLD TEST EVKIT PART - IC; MAX20361; SINGLE CELL SOLAR HARVESTER; WLP12                                                                                                                                  |
| 53                                                                                | 1                                                                                 | U2                                                                                | 10-NC7WZ16P6X-X                                                                   | NC7WZ16P6X                                                                        | FAIRCHILD SEMICONDUCTOR                                                           | NC7WZ16P6X                                                                        | IC; BUF; TINY LOGIC; UHS DUAL BUFFER; SC70-6                                                                                                                                                                                  |
| 54                                                                                | 1                                                                                 | U3                                                                                | 10-MAX8880EUT-U                                                                   | MAX8880EUT+                                                                       | MAXIM                                                                             | MAX8880EUT+                                                                       | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                                                                                         |
| 55                                                                                | 1                                                                                 | U4                                                                                | 10-MAX4245AXT-X                                                                   | MAX4245AXT+                                                                       | MAXIM                                                                             | MAX4245AXT+                                                                       | IC; OPAMP; ULTRA-SMALL; RAIL-TO-RAIL I/O WITH DISABLE; SINGLE SUPPLY; LOW-POWER OP AMP; GAIN=110DB; SC70-6                                                                                                                    |
| 56                                                                                | 1                                                                                 | U5                                                                                | 10-MAX4372HEUK-U                                                                  | MAX4372HEUK+                                                                      | MAXIM                                                                             | MAX4372HEUK+                                                                      | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; SOT23-5                                                                                                                                 |
| 57                                                                                | 1                                                                                 | U6                                                                                | 10-MAX11613EUA-U                                                                  | MAX11613EUA+                                                                      | MAXIM                                                                             | MAX11613EUA+                                                                      | IC; ADC; LOW-POWER; 4-CHANNEL; I2C; 12-BIT UMAX8                                                                                                                                                                              |
| 58                                                                                | 1                                                                                 | PCB                                                                               | EPCB20361                                                                         | MAX20361                                                                          | MAXIM                                                                             | PCB                                                                               | ADC; PCB:MAX20361                                                                                                                                                                                                             |
| TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                         | TOTAL 127                                                                                                                                                                                                                     |
| ITEM DO NOT                                                                       | QTY PURCHASE(DNP)                                                                 | REF DES                                                                           | MAXINV                                                                            | MFG PART #                                                                        | MANUFACTURER                                                                      | VALUE                                                                             | DESCRIPTION                                                                                                                                                                                                                   |
| (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB) | (These are purchased parts but not assembled on PCB and will be shipped with PCB)                                                                                                                                             |
| ITEM PACKOUT                                                                      | QTY                                                                               | REF DES                                                                           | MAXINV                                                                            | MFG PART #                                                                        | MANUFACTURER                                                                      | VALUE                                                                             | DESCRIPTION                                                                                                                                                                                                                   |

Evaluates: MAX20361

## MAX20361 EV Kit Schematics

<!-- image -->

## MAX20361 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX20361

## MAX20361 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX20361

## MAX20361 EV Kit PCB Layouts

MAX20361 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20361 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX20361

MAX20361 EV Kit PCB Layout-Internal Layer2

<!-- image -->

MAX20361 EV Kit PCB Layout-Internal Layer3

<!-- image -->

│

## MAX20361 EV Kit PCB Layouts (continued)

MAX20361 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20361 EV Kit PCB Layout-Bottom Components

<!-- image -->

│

## MAX20361 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to Fhange the FirFuitry and speFifiFations without notiFe at any time.

│

Evaluates: MAX20361