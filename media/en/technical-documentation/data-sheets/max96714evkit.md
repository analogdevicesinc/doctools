<!-- lastmod 2023-06-20 -->
<!-- image -->

## Evaluates: MAX96714,

## MAX96714F, and MAX96714R

Click here to ask an associate for production status of specific part numbers.

## MAX96714 CSI Evaluation Kit

## General Description

The  MAX96714  CSI  evaluation  kit  (EV  kit)  provides  a proven design to evaluate the MAX96714, MAX96714F, MAX96714R  high-bandwidth  gigabit  multimedia  serial link (GMSL) deserializer with CSI and full-duplex control channel with the use of a standard FAKRA coaxial cable. The EV kit also includes Windows ®  7 and Windows 10 softwares that provide a simple graphical user interface (GUI)  for  exercising  features  of  the  device.  The  EV  kit comes with a MAX96714/14F/14R IC installed.

For complete GMSL evaluation using a standard FAKRA coaxial cable, order the MAX96714 CSI EV kit and a companion serializer board (MAX96717 CSI EV kit referenced in this document).

Note: In the following sections, 'serializer'  means MAX96717, and 'deserializer' means MAX96714, MAX96714F, and MAX96714R.

Note: This document applies to both coax HSD-STQ and HMTD-STP evaluation kits. The coax cable is referenced in this document.

## MAX96714 EV Kit Files

| FILE                                | DESCRIPTION                               |
|-------------------------------------|-------------------------------------------|
| MAXSerDesEV-GMSL_ Vxxxx_Install.exe | Installs the EV kit files in the computer |
| MAXSerDesEV-GMSL.exe                | Graphical User Interface (GUI) program    |

Windows is a registered trademark of Microsoft Corporation.

©

## Features

- Serializer EV Kit Sends GMSL Data to a Deserializer which then Converts into MIPI CSI-2
- Proven PCB Layout
- Fully Assembled and Tested
- Accepts GMSL-2 Serial Data through FAKRA Connectors, and Outputs CSI-2 Data
- USB-Controlled Interface (Cable Included)
- USB, 12V Wall, Power-over-Coax (PoC*), or Externally Powered
- 12V Wall-Type Power Supply
- COAX Connector*
- HSD Connector*
- HMTD Connector*
- Windows 7 and Windows 10-Compatible Software

Ordering Information appears at end of data sheet.

## Deserializer Evaluation Board

## Block Diagram

<!-- image -->

319-100817; Rev 1; 6/23

## MAX96714 CSI Evaluation Kit

## Quick Start

This procedure applies to both Coax, HSD and HMTD EV kits. The Coax evaluation kit is referenced in this document. Figure 1 shows a typical application which uses the CSI serializer with the CSI deserializer.

## Required Equipment

- MAX96717 CSI EV Kit
- MAX96714 CSI EV Kit
- 2m FAKRA cable assembly (included in the MAX96714 Coax EV Kit)
- CSI source, such as an image sensor, or CSI signal generator
- Computer with Windows 7 or Windows 10 PC with a spare USB port
- 12V DC, 500mA power supply

## Procedure

Follow the steps below to verify board operation:

- 1) Download and install latest GMSL2 EV kit software from the Analog Devices website: www.analog.com or contact Analog Devices Applications.
- Follow the GMSL GUI User's Guide instructions.
- 2) Configure the Serializer for I 2 C, Coax and 6Gbps (MAX96714), or 3Gbps (MAX96714F/R) operation. Refer to the MAX96717 CSI EV kit data sheet for details.
- 3) Figure 2 shows the default positions of the on-board jumpers on the deserializer board in their default positions, with SW1 in the off position.

## Evaluates: MAX96714,

## MAX96714F, and MAX96714R

- 4) Set up the system as shown in Figure 1.
- Connect FAKRA cable from FAKRA PCB connector (A or B) between serializer and deserializer.
- Connect +12V wall power supply into J12.  Refer to Figure 3 for power supply details and options.
- 5) Turn SW4 to the on position on both serializer and deserializer EV kits.
- 6) Verify that the blue/green Power LEDs are illuminated indicating that the boards are powered and that the red Teensy LED flashes on both serializer and deserializer.
- 7) Verify that LOCK\_LED on both serializer and deserializer EV board lights up, indicating that the link has been successfully established. If the LOCK\_LED is off, then refer to the Troubleshooting section at the end of this document. The ERRB LED is illuminated at the serializer because Line Fault Monitor is enabled by default, however the board is not config -ured to use line fault.
- 8) Start the GMSL2 EVKIT software.
- 9) When the GUI opens, it automatically searches for any active listener in both I 2 C and UART mode and identifies valid GMSL product (assuming proper jumper settings). Once the serializer and deserializer are identified, they are shown as tabs in the GUI.
- 10)  Read registers in both deserializer and serializer to ensure both devices are active.
- 11)  Basic bring-up is now complete. Refer to the GMSL GUI User's Guide for GUI operation, GMSL2 User's Guide for configuration of this device and its available features or Analog Devices Applications for additional details.

Figure 1. GMSL System Board Block Diagram

<!-- image -->

│

## MAX96714 CSI Evaluation Kit

Evaluates: MAX96714,

## MAX96714F, and MAX96714R

Figure 2. Deserializer Default Jumper Settings

<!-- image -->

## Table 1. Jumper Description

| JUMPER   | SIGNAL        | DEFAULT POSITION   | FUNCTION                                                          |
|----------|---------------|--------------------|-------------------------------------------------------------------|
| J1       | VEXT          | -                  | External DC input header                                          |
| J3       | USB           | -                  | USB connector                                                     |
| J4       | -             | -                  | External I 2 C header                                             |
| J5       | SCL_TX        | SCL                | I 2 C or UART connection to serializer                            |
| J6       | SDA_RX        | SDA                | I 2 C or UART connection to serializer                            |
| J8       | SIOP/N, 12V   | -                  | STP input. Optionally sources/provides power                      |
| J9       | RX/SDA TX/SCL | -                  | Internal I 2 C header (connected directly to IC)                  |
| J10      | GND           | -                  | Ground input                                                      |
| J12      | 12V           | -                  | 12V DC input jack                                                 |
| J13      | 12V           | -                  | 12V DC input header                                               |
| J16      | CSI           | -                  | CSI output. Optionally sources/provides power, GPIO, I 2 C/UART   |
| J17      | MFP           | -                  | MFP pin header                                                    |
| JAP      | SIO           | -                  | Coax input                                                        |
| JCOAX    | COAX power    | VPOC1              | Select between VSUP input and VPOC1 output for the COAX connector |
| JHSD     | HSD power     | -                  | Select between VSUP input and VPOC2 output for the HSD connector  |
| JPOC     | VSUP          | Closed             | Provides power for PoC protector IC                               |

│

## MAX96714 CSI Evaluation Kit

## Table 1. Jumper Description (continued)

| JUMPER      | SIGNAL         | DEFAULT POSITION   | FUNCTION                                                 |
|-------------|----------------|--------------------|----------------------------------------------------------|
| JV18D       | VDD18          | DNI                | Cuttable trace to measure VDD18                          |
| JVIO        | VDDIO          | 3.3V               | Select between 1.8V and 3.3V                             |
| JVIOD       | VDDIO          | DNI                | Cuttable trace to measure device VDDIO                   |
| JVDD        | VDD            | 1.2V               | Select between 1.0V and 1.2V                             |
| JVREF       | 3.3V           | Closed             | External SDA/SCL level shifter IOVDD set to 3.3V         |
| JVTD        | VTERM          | DNI                | Cuttable Trace to measure VTERM                          |
| C63/C64/C71 | SION/SIO       | -                  | Select between FAKRAHSD and HMTD connector               |
| C65/C66/C70 | SIONP          | -                  | Select between 50ΩAC termination HSD and HMTD connector  |
| R14/R8      | LOCK LED       | R14 (MFP5)         | Select between LOCK and LOCK_ERRB for LOCK LED           |
| R24/25      | CFG0           | R24 (Digipot)      | Select between resistor divider and digital pot for CFG0 |
| R27/28      | CFG1           | R28 (Digipot)      | Select between resistor divider and digital pot for CFG1 |
| R30         | ALT_SDA        | DNI                | Connect alternate SDAto MFP1                             |
| R31         | ALT_SCL        | DNI                | Connect alternate SCL to MFP2                            |
| R33/R34     | FSYNC          | R33 (MFP0)         | Select between MFP0 and MFP2 for FSYNC                   |
| R74/R93     | SW_AD0         | R74 (high)         | Selects I 2 C address for MFP analog                     |
| R96/R108    | SW_AD1         | R96 (high)         | Selects I 2 C address for MFP analog                     |
| R82/R83     | POC_ADDR       | R83 (0x50)         | Selects I 2 C address for PoC Protector                  |
| R87/88      | POC_SCL        | R88 (ALT I 2 C)    | Select between I 2 C and ALT I 2 C for PoC protector     |
| R89/90      | POC_SDA        | R89 (ALT I 2 C)    | Select between I 2 C and ALT I 2 C for PoC protector     |
| R91         | ERRB           | DNI                | Connects ERRB to CSI connector                           |
| R92         | LOCK           | DNI                | Connects LOCK to CSI connector                           |
| R94         | VDDIO          | DNI                | Connects VDDIO to CSI connector                          |
| R95         | PWDNB          | DNI                | Connects PWDNB to CSI connector                          |
| R97         | USB_5V         | DNI                | Connects USB_5V to CSI connector                         |
| R99         | FSYNC          | DNI                | Connects FSYNC to CSI connector                          |
| R98         | 12V            | 0Ω (closed)        | Connects 12V to CSI connector                            |
| R100        | LFLT           | DNI                | Connects GMSL line with LMN0 input                       |
| R101/R103   | Power over HSD | R101 (power)       | Selects between power an GND for unused HSD pin 4        |
| R102/R104   | Power over HSD | R104 (GND)         | Selects between power an GND for unused HSD pin 2        |
| SW5         | EXT_SDA/TX     | Closed             | Connects EXT_SDA/TX to CSI connector                     |
| SW5         | EXT_SCL/RX     | Closed             | Connects EXT_SCL/RX to CSI connector                     |
| TP1         | 1V             | -                  | 1V power test point                                      |
| TP12        | +12V           | -                  | +12V input power test point                              |
| TP1V2       | 1V2            | -                  | 1.2V power test point                                    |
| TP1V8       | 1V8            | -                  | 1.8V power test point                                    |
| TP_2V8      | 2V8            | -                  | 2.8V power test point                                    |
| TP3V3       | 3V3            | -                  | 3.3V power test point                                    |

Evaluates: MAX96714,

## MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## Table 2. Items included in the Evaluation Kit Package

| ITEM DESCRIPTION                                 |   QTY |
|--------------------------------------------------|-------|
| MAX96714, MAX96714F, or MAX96714R Variant EV Kit |     1 |
| USB Cable                                        |     1 |
| +12V Wall Supply                                 |     1 |
| COAX Cable for COAX EV Kits                      |     1 |
| STP Cable for HMTD EV Kits                       |     1 |
| STQ Cable for HSD EV Kits                        |     1 |

## Troubleshooting

Possible causes of board test failure:

- 1) The cable is not properly connected between serializer and deserializer.
- 2) Incorrect jumper setting on the deserializer board: reverify.
- 3) Incorrect jumper setting on the serializer board: reverify.
- 4) Incorrect CFG pin voltage setting on the deserializer board: reverify.
- 5) Check and verify that the USB cable has been properly connected.
- 6) The USB port is locked.
- 7) Exit Application, GUI.
- 8) Relaunch GUI.
- 9) Exit Application, GUI.
- 10)  Remove the USB cable from the board and re-insert.
- 11)  Relaunch GUI.
- 12) Deserializer board is faulty: try a different board (if available).
- 13) Serializer board is faulty: try a different board (if available).

## Detailed Description of Hardware (or Software)

The power configuration of the EV kit hardware may be reconfigured to allow external supply connections. Figure 3 shows the power connection options.

Figure 3. Serializer Evaluation Board Power Connection Diagram

<!-- image -->

Evaluates: MAX96714,

## MAX96714F, and MAX96714R

│

## MAX96714 CSI Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE             | WEBSITE                     |
|----------------------------------------|-------------------|-----------------------------|
| Amphenol RF                            | 800-627-7100      | www.amphenolrf.com          |
| Hong Kong X'tals Ltd.                  | 852-35112388      | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300      | www.murata-northamerica.com |
| ON Semiconductor                       | 602-244-6600      | www.onsemi.com              |
| Rosenberger Hochfrequenztechnik GmbH   | 011-49-86 84-18-0 | www.rosenberger.de          |
| TDK Corp.                              | 847-803-6100      | www.component.tdk.com       |

Note:

Indicate that you are using the MAX96751 or MAX96753 when contacting these component suppliers.

## Ordering Information

| PART               | TYPE                                                       |
|--------------------|------------------------------------------------------------|
| MAX96714-BAK-EVK#  | Full Speed CSI-2 to GMSL2 Deserializer w/ COAX             |
| MAX96714F-BAK-EVK# | Speed Limited CSI-2 to GMSL2 Deserializer w/ COAX          |
| MAX96714R-BAK-EVK# | Non-ASIL Speed Limited CSI-2 to GMSL2 Deserializer w/ COAX |
| MAX96714-BBK-EVK#  | Full Speed CSI-2 to GMSL2 Deserializer w/ HSD              |
| MAX96714F-BBK-EVK# | Speed Limited CSI-2 to GMSL2 Deserializer w/ HSD           |
| MAX96714R-BBK-EVK# | Non-ASIL Speed Limited CSI-2 to GMSL2 Deserializer w/ HSD  |
| MAX96714-BCK-EVK#  | Full Speed CSI-2 to GMSL2 Deserializer w/ HMTD             |
| MAX96714F-BCK-EVK# | Speed Limited CSI-2 to GMSL2 Deserializer w/ HMTD          |
| MAX96714R-BCK-EVK# | Non-ASIL Speed Limited CSI-2 to GMSL2 Deserializer w/ HMTD |

Note: The MAX96714, MAX96714F, and MAX96714R EV kits are normally ordered with a companion deserializer board:

- The MAX96717 EV kit

Evaluates: MAX96714,

MAX96714F, and MAX96714R

│

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Bill of Materials

| ITEM     | REF_DES                                                                                                                | DNI/DNP   | QTY              | MFGPART #                                                                                                                                                              | MANUFACTURER                                                                                                                | VALUE                     | DESCRIPTION                                                                                                            | COMMENTS   |
|----------|------------------------------------------------------------------------------------------------------------------------|-----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------|------------|
| 1        |                                                                                                                        | 12 -      | 1                | PJ-002AH                                                                                                                                                               | CUI INC.                                                                                                                    | PJ-002AH                  | CONNECTOR; MALE; THROUGHHOLE; DCPOWERJACK; RIGHT ANGLE; 3PINS                                                          |            |
| 2        | C1-C3, C9, C11, C13, C16, C19-C22, C24- C32, C37, C45, C50, C52, C53, C56, C60                                         | -         | 27               | C1005X7R1C104K050BC; ATC530L104KT16;0402YC104KAT2A; C0402X7R160-104KNE;CL05B104KO5NNNC; GRM155R71C104KA88;C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV;CL05B104KO5 | TDK;AMERICANTECHNICAL CERAMICS;AVK;VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK;YAGEO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF                     | CAP; SMT(0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                                          |            |
| 3        | C4                                                                                                                     | -         | 1                | C1005C0G1H220G050                                                                                                                                                      | TDK                                                                                                                         | 22PF                      | CAP; SMT(0402); 22PF; 2%; 50V; C0G; CERAMIC                                                                            |            |
| 4        | C5, C10, C12, C15                                                                                                      | -         | 4                | C0402C103K5RAC;GRM155R71H103KA88; C1005X7R1H103K050BE;CL05B103KB5NNN;                                                                                                  | KEMET;MURATA;TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN                                                                             | 0.01UF                    | CAP; SMT(0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                         |            |
| 5        | C6                                                                                                                     | -         | 1                | UMK105B7103KV TAJC476K020RNJ                                                                                                                                           | AVX                                                                                                                         | 47UF                      | CAP; SMT(6032); 47UF; 10%; 20V; TANTALUM                                                                               |            |
| 6        | C7, C14, C17, C35, C43, C46, C49, C51, C55, C57, C58, C67-C69                                                          | -         | 14               | GRT188R61C106KE13                                                                                                                                                      | MURATA                                                                                                                      | 10UF                      | CAP; SMT(0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                           |            |
| 7        | C8                                                                                                                     | -         | 1                | C0402C0G500270JNP; GRM1555C1H270JA01                                                                                                                                   | VENKEL LTD.;MURATA                                                                                                          | 27PF                      | CAP; SMT(0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 8 9      | C18, C23, C38                                                                                                          | -         | 3                | GRM188Z71C225KE43                                                                                                                                                      | MURATA                                                                                                                      | 2.2UF                     | CAP; SMT(0603); 2.2UF; 10%; 16V; X7R; CERAMIC                                                                          |            |
| 10       | C33, C40 C34                                                                                                           | - -       | 2 1              | GRM31CR71A226KE15;GCM31CR71A226KE01 GMK107BJ105KA; C1608X5R1V105K080AB                                                                                                 | MURATA;MURATA TAIYO YUDEN;TDK                                                                                               | 22UF 1.0UF                | CAP; SMT(1206); 22UF; 10%; 10V; X7R; CERAMIC CAP; SMT(0603); 1.0UF; 10%; 35V; X5R; CERAMIC                             |            |
| 11       | C36, C39                                                                                                               | -         | 2                | 0805YC475MAT2A                                                                                                                                                         | AVX                                                                                                                         | 4.7UF                     | CAP; SMT(0805); 4.7UF; 20%; 16V; X7R; CERAMIC                                                                          |            |
| 12       | C41, C42, C44                                                                                                          | -         | 3                | C1608X5R1E225K;TMK107ABJ225KA; TMK107BJ225KA;GRM188R61E225KA12 GRM155R71E104KE14;C1005X7R1E104K050BB;                                                                  | TDK;TAIYO YUDEN;TAIYO YUDEN;MURATA                                                                                          | 2.2UF                     | CAP; SMT(0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                          |            |
| 13       | C47, C48                                                                                                               | -         | 2                | TMK105B7104KVH;CGJ2B3X7R1E104K050BB                                                                                                                                    | MURATA;TDK;TAIYO YUDEN;TDK                                                                                                  | 0.1UF                     | CAP; SMT(0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
| 14       | C54                                                                                                                    | -         | 1                | GRM155R71H103JA88                                                                                                                                                      | MURATA                                                                                                                      | 0.01UF                    | CAP; SMT(0402); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                          |            |
| 15       | C59, C61                                                                                                               | -         | 2                | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA                                                                                                                  | TDK;MURATA;TAIYO YUDEN                                                                                                      | 4.7UF                     | CAP; SMT(0603); 4.7UF; 20%; 6.3V; X5R; CERAMIC                                                                         |            |
| 16       | C62                                                                                                                    | -         | 1                | T491X107K025A                                                                                                                                                          | KEMET                                                                                                                       | 100UF                     | CAP; SMT(7343-43); 100UF; 10%; 25V; TANTALUM                                                                           |            |
| 17 18    | C64, C65                                                                                                               | -         | 2                | UMK105BJ224KV ES1D                                                                                                                                                     | TAIYO YUDEN                                                                                                                 | 0.22UF                    | CAP; SMT(0402); 0.22UF; 10%; 50V; X5R; CERAMIC                                                                         |            |
| 19       | D1 D2                                                                                                                  | -         | 1 1              | B360B-13-F                                                                                                                                                             | FAIRCHILDSEMICONDUCTOR DIODES INCORPORATED                                                                                  | ES1D B360B-13-F           | DIODE; RECT; SMA (DO-214AC); PIV=200V; IF=1A DIODE; SCH; SCHOTTKY BARRIERDIODE; SMB; PIV=60V; Io=3A; -                 |            |
| 20       | DS3V3, DS12V, DSLK, DSUSB                                                                                              | - -       | 4                |                                                                                                                                                                        | ROHM                                                                                                                        |                           | 55 DEGCTO+125 DEGC DIODE; LED; SMT; PIV=5V; IF=0.02A                                                                   |            |
| 21       | DSER, DSTZ                                                                                                             | -         | 2                | SML-P11MTT86 SML-P11UTT86                                                                                                                                              | ROHM                                                                                                                        | SML-P11MTT86 SML-P11UTT86 | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                    |            |
| 22       | J1, J10                                                                                                                | -         | 2                | 9020 BUSS                                                                                                                                                              | WEICO WIRE                                                                                                                  | MAXIMPAD                  | EVK KIT PARTS; MAXIMPAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFTDRAWNBUS TYPE-S; 20AWG                                  |            |
| 23       | J3                                                                                                                     | -         | 1                | 1981568-1                                                                                                                                                              | TECONNECTIVITY                                                                                                              | 1981568-1                 | CONNECTOR; FEMALE; SMT; MICRO USB STANDARDTYPEB ASSY; RIGHT ANGLE; 5PINS                                               |            |
| 24       | J4                                                                                                                     | -         | 1                | PBC04SAAN                                                                                                                                                              | SULLINS ELECTRONICS CORP.                                                                                                   | PBC04SAAN                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGCTO+125 DEGC                                          |            |
| 25       | J5, J6, JHSD, JVDD, JVIO                                                                                               | -         | 5                | PBC03SAAN                                                                                                                                                              | SULLINS                                                                                                                     | PBC03SAAN                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGCTO+125 DEGC                                          |            |
| 26       | J8                                                                                                                     | -         | 1 D4S20L-40MA5-Z | PBC02SAAN                                                                                                                                                              | ROSENBERGER                                                                                                                 | D4S20L-40MA5-Z            | EVKIT -CONNECTOR; MALE; THROUGHHOLE; D4S20L-40MA5 SERIES; RIGHT ANGLE; 4PINS; CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; |            |
| 27       | J9, JPOC, JV18D, JVIOD, JVREF, JVTD                                                                                    | -         | 6                |                                                                                                                                                                        | SULLINS ELECTRONICS CORP.                                                                                                   | PBC02SAAN                 | STRAIGHT; 2PINS                                                                                                        |            |
| 28       | J13                                                                                                                    | -         | 1                |                                                                                                                                                                        | 393570002 MOLEX                                                                                                             | 393570002                 | CONNECTOR; FEMALE; THROUGHHOLE; 0.3MMPITCHBEAU EUROSTYLEFIXEDMOUNTPCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS               |            |
| 29       | J16                                                                                                                    | -         | 1                | QSH-030-01-L-D-A                                                                                                                                                       | SAMTEC                                                                                                                      | QSH-030-01-L-D-A          | CONNECTOR; MALE; SMT; HI-SPEEDGROUNDPLANESOCKETS; STRAIGHT THROUGH; 60PINS; -55 DEGCTO+125DEGC                         |            |
| 30       | J17                                                                                                                    | -         | 1                | PBC12SAAN                                                                                                                                                              | SULLINS ELECTRONICS CORP.                                                                                                   | PBC12SAAN                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGCTO+125 DEGC                                         |            |
| 31       | JMP1                                                                                                                   | -         | PEC04SAAN        | 1                                                                                                                                                                      | SULLINS ELECTRONICS CORP.                                                                                                   | PEC04SAAN                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT;                                                                     |            |
| 32       | L1, L2                                                                                                                 | -         | 2                | PFL1609-471ME                                                                                                                                                          | COILCRAFT                                                                                                                   | 0.47UH                    | 4PINS INDUCTOR; SMT; SHIELDED; 0.47UH; 20%; 1.3A                                                                       |            |
| 33       | L3                                                                                                                     | -         | 1                | 1210POC-682MR                                                                                                                                                          | COILCRAFT                                                                                                                   | 6.8UH                     | EVKIT PART-INDUCTOR; SMT; FERRITE; CHOKE; TOL=+/-20%; 1A                                                               |            |
| 34       | L4                                                                                                                     | -         | 1                | MSS6132T-223ML                                                                                                                                                         | COILCRAFT                                                                                                                   | 22UH                      | INDUCTOR; SMT; SHIELDED; 22UH; 20%; 1.9A                                                                               |            |
| 35       | L5                                                                                                                     | -         | 1                | MSS7341T-104ML                                                                                                                                                         | COILCRAFT                                                                                                                   | 100UH                     | INDUCTOR; SMT; FERRITE; 100UH; 20%; 1.15A 600 INDUCTOR; SMT(0603); FERRITE-BEAD; 600;                                  |            |
| 36 37 L7 | L6, L8-L11                                                                                                             | - -       | 5 1              | BLM18KG601SN1 RFCMF1220100M3                                                                                                                                           | MURATA WALSINTECHNOLOGY CORPORATION                                                                                         | RFCMF1220100M3            | TOL=+/-25%; 1.3A INDUCTOR; SMT; CERAMICCHIP; CHOKE; 0.3A                                                               |            |
| 38       | L12                                                                                                                    | -         | 1                | TFM201610ALMA2R2MTAA                                                                                                                                                   | TDK                                                                                                                         | 2.2UH                     | INDUCTOR; SMT(2016); THIN FILM; 2.2UH; TOL=+/-20%; 2.1A 3.3UH;                                                         |            |
| 39       | L13, L14                                                                                                               | -         | 2                | TFM252012ALMA-3R3MTAA                                                                                                                                                  | TDK                                                                                                                         | 3.3UH                     | EVKIT PART-INDUCTOR; SMT; ORIGINAL FINECOPPER; TOL=+/-20%; 2.2A                                                        |            |
| 40       | L15                                                                                                                    | -         | 1                |                                                                                                                                                                        | MURATA                                                                                                                      | 4.7UH                     | INDUCTOR; SMT(2520); FERRITECORE; 4.7UH; TOL=+/-20%; 1.7A                                                              |            |
| 41       | L16                                                                                                                    | -         | 1                | DFE252012P-4R7M=P2 BLM18SG121TN1                                                                                                                                       | MURATA                                                                                                                      |                           | 120 INDUCTOR; SMT(0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                             |            |
| 42       | R1, R2, R9, R15, R30-R32, R35, R44, R47, R51-R55, R57, R58, R60, R63, R65, R66, R74, R84, R96                          | -         | 24               | ERJ-2GEJ103                                                                                                                                                            | PANASONIC                                                                                                                   | 10K                       | RES; SMT(0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                                       |            |
| 43       | R3, R4, R6, R10-R14, R24, R28, R33, R37, R42, R43, R45, R46, R48-R50, R56, R59, R61, R62, R64, R77-R80, R83, R88, R89, | -         | 33               | ERJ-2GE0R00                                                                                                                                                            | PANASONIC                                                                                                                   |                           | 0 RES; SMT(0402); 0; JUMPER; JUMPER; 0.1000W                                                                           |            |
| 44       | R101, R104 R16                                                                                                         | -         | 1                | ERJ-2RKF8062                                                                                                                                                           | PANASONIC PANASONIC                                                                                                         | 80.6K                     | RES; SMT(0402); 80.6K; 1%; +/-100PPM/DEGK; 0.1000W                                                                     |            |
| 45 46    | R17-R20                                                                                                                | -         | 4                |                                                                                                                                                                        |                                                                                                                             |                           |                                                                                                                        |            |
| 47       | R21                                                                                                                    | -         | 1                | ERJ-2RKF4991 CRCW040268K1FK                                                                                                                                            | VISHAY DALE                                                                                                                 | 4.99K 68.1K               | RES; SMT(0402); 4.99K; 1%; +/-100PPM/DEGC; 0.1000W RES; SMT(0402); 68.1K; 1%; +/-100PPM/DEGC; 0.0630W                  |            |
| 48       | R22, R23, R41, R75 R26                                                                                                 | -         | 4 ERJ-2RKF1001 1 |                                                                                                                                                                        | PANASONIC VISHAY DALE                                                                                                       | 1K 20.5K                  | RES; SMT(0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W RES; SMT(0402); 20.5K; 1%; +/-100PPM/DEGC; 0.0630W                     |            |
| 49 50    | R29                                                                                                                    | - -       | CRCW040220K5FK 1 | CRCW040232K4FK CRCW0603402RFK                                                                                                                                          | VISHAY DALE VISHAY DALE                                                                                                     | 32.4K                     | RES; SMT(0402); 32.4K; 1%; +/-100PPM/DEGK; 0.0630W                                                                     |            |
| 51       | R36 R38, R39                                                                                                           | - -       | 1                |                                                                                                                                                                        | VISHAY DALE                                                                                                                 |                           | 402 RES; SMT(0603); 402; 1%; +/-100PPM/DEGC; 0.1000W 33 RES; SMT(0402); 33; 1%; +/-100PPM/DEGC; 0.0630W                |            |
| 52       | R40                                                                                                                    | -         | 2 1              | CRCW040233R0FK ERJ-2RKF4700 CRCW06030000ZS;MCR03EZPJ000;ERJ-                                                                                                           | PANASONIC VISHAY;ROHM                                                                                                       |                           | 470 RES; SMT(0402); 470; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |            |
| 53       | R67-R71, R73, R98                                                                                                      | -         | 7                | 3GEY0R00;CR0603AJ/-000ELF                                                                                                                                              |                                                                                                                             |                           | 0 RES; SMT(0603); 0; JUMPER; JUMPER; 0.1000W                                                                           |            |
| 54 55    | R76 R81                                                                                                                | - -       | 1 1              | CRCW04022K20FK;RC0402FR-072K2L ERJ-2GEJ104                                                                                                                             | SEMICONDUCTOR;PANASONIC;BOURNS VISHAY DALE;YAGEO PHICOMP PANASONIC                                                          | 2.2K 100K                 | RES; SMT(0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT(0402); 100K; 5%; +/-200PPM/DEGC;                            |            |
|          |                                                                                                                        |           |                  |                                                                                                                                                                        |                                                                                                                             |                           | 0.1000W                                                                                                                |            |

## Evaluates: MAX96714, MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                           | DNI/DNP   | QTY                  | MFGPART #                                                                                          | MANUFACTURER                       | VALUE                     | DESCRIPTION                                                                                                                                                                             | COMMENTS   |
|--------|---------------------------------------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|------------------------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 56     | R86                                               | -         | 1                    | CRCW04021K00FK; RC0402FR-                                                                          | VISHAY DALE;YAGEO PHICOMP;ROHMSEMI | 1K                        | RES; SMT(0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                         |            |
| 57     | R105                                              | -         | 1                    | 071KL;MCR01MZPF1001 ERJ-2RKF4872                                                                   | PANASONIC                          | 48.7K                     | RES; SMT(0402); 48.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                      |            |
| 58     | R106                                              | -         | 1                    | CRCW040242K2FK;RC0402FR-0742K2L                                                                    | VISHAY DALE;YAGEO                  | 42.2K                     | RES; SMT(0402); 42.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                      |            |
| 59 60  | R107 R203-R205                                    | -         | 1                    | CRCW060349R9FK                                                                                     | VISHAY DALE                        |                           | 49.9 RES; SMT(0603); 49.9; 1%; +/-100PPM/DEGC; 0.1000W RES; SMT(0603); 5.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |            |
| 61     |                                                   | -         | 3                    | ERJ-3EKF5101                                                                                       | PANASONIC                          | 5.1K                      | SWITCH; SPDT; THROUGHHOLE; RIGHT ANGLE; 120V; 6A; 1000                                                                                                                                  |            |
|        | SW4                                               | -         | 1                    | 1101-M2-S3-A-Q-E-2                                                                                 | C&K COMPONENTS                     | 1101-M2-S3-A-Q-E-2        | SERIES; RCOIL=0.1 OHM; RINSULATION=100GOHM SWITCH; SPST; SMT; 24V; 0.025A; UNSEALEDHALF-PITCHDIP                                                                                        |            |
| 62     | SW5                                               | - -       | 1 97C02 2            |                                                                                                    | GRAYHILL                           | 97C02                     | SWITCH; RCOIL= 0.1 OHM; RINSULATION=100MOHM; GRAYHILL; - 40 DEGCTO+85 DEGC SWITCH; SPST; SMT; STRAIGHT; 32V; 0.05A; MICROMINIATURE                                                      |            |
| 63     | SWPD, SWTZ TP_CFG0, TP_CFG1                       | -         | KMR421G 2            | LFS 5000                                                                                           | C&K COMPONENTS KEYSTONE            | KMR421G LFS N/A           | SMTTOPACTUATED; RCOIL=0.1 OHMOHM; RINSULATION=1G OHMOHM TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHORBRONZEWIRESILVERPLATE                            |            |
| 64 65  | U1                                                | -         | 1                    | MAX96714GTJ/V+;MAX96714FGTJ/V+;MAX96714RGTJ /V+;MAX96714GTJ/VY+;MAX96714FGTJ/VY+;MAX967 14RGTJ/VY+ | MAXIM                              | MAX96714                  | FINISH; EVKIT PART- IC; MAX96714; PACKAGEOUTLINEDRAWING: 21- 0140; LANDPATTERN: 90-0013                                                                                                 |            |
| 66     | U2                                                | -         | 1                    | MAX5419LETA+                                                                                       | MAXIM                              | MAX5419LETA+              | IC; DPOT; 200K OHM; 256-TAPNONVOLATILEI2C-INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                                                                     |            |
| 67     | U3                                                | -         | 1                    | MAX5419META+                                                                                       | MAXIM                              | MAX5419META+              | IC; DPOT; 200K OHM; 256-TAPNONVOLATILEI2C-INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                                                                     |            |
| 68 69  | U4, U5 U6                                         | - -       | 2 1                  | 74LVC1G86GV MK20DX256VLH7                                                                          | NXP FREESCALE                      | 74LVC1G86GV MK20DX256VLH7 | IC; XOR; 2-INPUT EXCLUSIVE-ORGATE; SOT753 IC; UCON; KINETIS K2X MCUFAMILY; LQFP64                                                                                                       |            |
| 70     | U7                                                | -         | 1                    | IC_MKL02Z32_QFN16                                                                                  | PJRC                               | IC_MKL02Z32_QFN16         | IC; UCON; KINETIS KL02 32 KB FLASH; 48 MHZ CORTEX-M0+ BASEDMICROCONTROLLER; MKL02 CHIPWITHPRE- PROGRAMMEDTEENSY LCAND3.2 BOOTLOADER; QFN16-EP                                           |            |
| 71     | U8                                                | -         | 1                    | MAX3378EETD+                                                                                       | MAXIM                              | MAX3378EETD+              | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUADLOW- VOLTAGELEVEL TRANSLATOR; TDFN14-EP3X3                                                                                           |            |
| 72     | U9, U10                                           | -         | 2                    | MAX3373EEKA+                                                                                       | MAXIM                              | MAX3373EEKA+              | TRANS; +/-15KV ESD-PROTECTED; 16MPBS; DUAL LOW- VOLTAGELEVEL TRANSLATOR; SOT23-8                                                                                                        |            |
| 73     |                                                   | -         | 1                    |                                                                                                    |                                    |                           | IC;                                                                                                                                                                                     |            |
|        | U11                                               |           |                      | MAX14662ETI+                                                                                       | MAXIM                              | MAX14662ETI+              | IC; SPST; BEYOND-THE-RAILS 8 X SPST; TQFN28-EP4X4 IC; CONV; FLEXIBLE; COMPACTQUADPOWERSUPPLY WITH                                                                                       |            |
| 75     | U13                                               | -         | 1                    | MAX20019ATBI/V+                                                                                    | MAXIM                              | MAX20019ATBI/V+           | EVKIT PART-IC; VCON; 3.2MHZ; 500MILLIAMPEREDUAL STEP- DOWNCONVERTERFORAUTOMOTIVECAMERA; PACKAGE OUTLINE: 21-100125; LANDPATTERNDRAWING NO.: 90-100079; PACKAGECODE: T1032+2C; TDFN10-EP |            |
| 76     | U14                                               | -         | 1                    | MAX20087ATPA/VY+                                                                                   | MAXIM                              | MAX20087ATPA/VY+          | EVKIT PART- IC; MAX20087; QUADCAMERA POWERPROTECTOR; TQFN20-EP; PACKAGEOUTLINEDRAWING: 21-0139; LAND PATTERNDRAWING: 90-0409; PACKAGECODE: T2044+4C                                     |            |
| 77     | Y1                                                | -         | 1                    | ECS-250-18-33Q-DS                                                                                  | ECS INC                            | 25MHZ                     | CRYSTAL; SMT3.2X2.5; 18PF; 25MHZ; +/-30PPM; +/-100PPM                                                                                                                                   |            |
|        |                                                   | -         | 1                    |                                                                                                    |                                    | 16MHZ                     | CRYSTAL; SMT2.0 MMX1.6 MM; 8PF; 16MHZ; +/-25PPM;                                                                                                                                        |            |
| 78     | Y2                                                |           |                      | CX2016DB16000D0WZRC1                                                                               | KYOCERA                            |                           | +/-40PPM                                                                                                                                                                                |            |
| 79     | PCB EV_KIT_BOX2                                   | - -       | 1 MAX96714CSI 1      |                                                                                                    | MAXIM GEEKIFY                      | PCB N/A                   | PCB:MAX96714CSI EVKIT PART-ACCESSORY; PLASTICCOVER; TOPPLASTICCOVER WITHMAXIMLOGO                                                                                                       | -          |
| 80     | EV_KIT_BOX2                                       | -         | 1                    | GKFYACRYL-001                                                                                      | GEEKIFY                            | N/A                       | EVKIT PART-ACCESSORY; PLASTICCOVER; BOTTOMPLASTIC                                                                                                                                       |            |
| 81     |                                                   |           | GKFYACRYL-002        | BS34CL06X25AP                                                                                      | BUMPERSPECIALTIES                  | N/A                       | COVERWITHOUTMAXIMLOGO BUMPER; CLEAR-CYLINDRICAL SHAPE; 0.375D/0.125H; POLYURETHANE                                                                                                      |            |
| 82 83  | EV_KIT_BOX2 EV_KIT_BOX2                           | - -       | 4 4                  |                                                                                                    | INC. 4802 KEYSTONE                 | N/A                       | STANDOFF; MALE_FEMALE-THREADED; HEX; 4-40IN; 0.50IN; NYLON                                                                                                                              |            |
| 84     | EV_KIT_BOX2                                       | 4         |                      | 1902D                                                                                              | KEYSTONE                           | N/A                       | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/4IN; NYLON                                                                                                                                    |            |
| 85     |                                                   | - -       |                      | NY PMS 440 0025 PH                                                                                 | B&F FASTENERSUPPLY                 | N/A                       | MACHINESCREW; PHILLIPS; PAN; 4-40; 1/4IN; NYLON                                                                                                                                         |            |
| 86     | EV_KIT_BOX2 EV_KIT_BOX1                           | 8         | 2                    |                                                                                                    | 24480 KEYSTONE                     | N/A                       | STANDOFF; FEMALE-THREADED; HEX; M3; 5MM; STEEL                                                                                                                                          |            |
|        | EV_KIT_BOX1                                       | -         | 4                    | RM3X4MM2701                                                                                        |                                    |                           |                                                                                                                                                                                         |            |
| 87     |                                                   | -         | 10                   |                                                                                                    | APMHEXSEAL                         | N/A                       | MACHINESCREW; PHILLIPS; PAN; M3; 4MM; STAINLESS STEEL CONNECTOR; FEMALE; MINISHUNT; 0.100IN CC; OPENTOP;                                                                                |            |
| 88 89  | EV_KIT_BOX5 PACKOUT_BOX                           | - DNI     | 1 AK67421-0.5        | NPC02SXON-RC                                                                                       | SULLINS ELECTRONICS CORP. ASSMANN  | N/A N/A                   | JUMPER; STRAIGHT; 2PINS CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-4PINS;                                                                                                          |            |
| 90     |                                                   |           | 1                    |                                                                                                    |                                    | N/A                       | ACCESSORY; WALL ADAPTER; VI-(90-264VAC); VO-(12VDC);                                                                                                                                    |            |
|        | PACKOUT_BOX                                       | DNI       |                      | WSU120-2000                                                                                        | TRIADMAGNETICS                     |                           | 6FT                                                                                                                                                                                     |            |
| 91 92  | PACKOUT_BOX C63, C66, C70, C71                    | DNI DNP   | 1 LD5-101-2000-Z-Z 0 | UMK105BJ224KV                                                                                      | ROSENBERGER TAIYO YUDEN            | N/A 0.22UF                | CONNECTOR; HSDCABLE; MALE-MALE; WIREMOUNT; 4PINS- 4PINS; 2000MM; CAP; SMT(0402); 0.22UF; 10%; 50V; X5R; CERAMIC                                                                         |            |
| 93     | J2                                                | DNP       | 0                    | E6S201-40MT5-Z                                                                                     | ROSENBERGER                        | E6S201-40MT5-Z            | EVKIT PART- CONNECTOR; MALE; THROUGHHOLE; PLUG PCB; RIGHT ANGLE; 2PINS;                                                                                                                 |            |
|        |                                                   |           |                      |                                                                                                    |                                    |                           | CONNECTOR; MALE; THROUGHHOLE; FAKRA-HFRIGHTANGLE PLUG PCB WITHHOUSING; RIGHT ANGLE; 5PINS                                                                                               |            |
| 94     | JAP                                               | DNP       | 0                    | 59S2AQ-40MT5-Z_1                                                                                   | ROSENBERGER                        | 59S2AQ-40MT5-Z_1          | STRAIGHT;                                                                                                                                                                               |            |
| 95 96  | JCOAX R5, R7, R8, R25, R27, R34, R82, R85, R87,   | DNP DNP   | 0 PBC03SAAN 0        | ERJ-2GE0R00                                                                                        | SULLINS PANASONIC                  | PBC03SAAN                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; 3PINS; -65 DEGCTO+125 DEGC                                                                                                                     |            |
|        | R90, R102, R103 R72, R91, R92, R94, R95, R97, R99 | DNP       | 0                    | CRCW06030000ZS;MCR03EZPJ000;ERJ-                                                                   | VISHAY;ROHM                        |                           | 0 RES; SMT(0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                            |            |
| 97     |                                                   |           |                      | 3GEY0R00;CR0603AJ/-000ELF                                                                          | SEMICONDUCTOR;PANASONIC;BOURNS     |                           | 0 RES; SMT(0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                            |            |
| 98 99  | R93, R108                                         | DNP       | 0 0                  | ERJ-2GEJ103 ERJ-2RKF4872                                                                           | PANASONIC                          | 10K 48.7K                 | RES; SMT(0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W RES; SMT(0402); 48.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                     |            |
| 100    | R100 TP_ALT_SCL,                                  | DNP DNP   | 0                    |                                                                                                    | PANASONIC KEYSTONE                 |                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED;                                                                                                                  |            |
|        | TP_ALT_SDA                                        |           |                      |                                                                                                    |                                    | N/A                       | FINISH;                                                                                                                                                                                 |            |
|        |                                                   |           |                      |                                                                                                    | 5000                               |                           | PHOSPHORBRONZEWIRESILVERPLATE                                                                                                                                                           |            |
| TOTAL  |                                                   |           | 265                  |                                                                                                    |                                    |                           |                                                                                                                                                                                         |            |

## Evaluates: MAX96714, MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX96714,

## MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Schematics (continued)

<!-- image -->

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Schematics (continued)

<!-- image -->

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX96714,

MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX96714,

## MAX96714F, and MAX96714R

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit PCB Layout

Silk Top

<!-- image -->

Top

<!-- image -->

## Evaluates: MAX96714,

## MAX96714F, and MAX96714R

Layer 2

<!-- image -->

Layer 3

<!-- image -->

│

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit PCB Layout

Layer 4

<!-- image -->

Layer 5

<!-- image -->

## Evaluates: MAX96714,

## MAX96714F, and MAX96714R

Layer 6

<!-- image -->

Layer 7

<!-- image -->

│

## MAX96714 CSI Evaluation Kit

## MAX96714 EV Kit PCB Layout

Bottom

<!-- image -->

## Evaluates: MAX96714,

## MAX96714F, and MAX96714R

Silk Bottom

<!-- image -->

│

## MAX96714 CSI Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------|-----------------|
|                 0 | 9/21            | Initial release                            | -               |
|                 1 | 6/23            | Replaced MAX9295A reference with MAX96717. | 1, 2, 6         |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX96714,

MAX96714F, and MAX96714R