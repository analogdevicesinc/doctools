<!-- lastmod 2022-08-03 -->
## [Request Security User Guide and Developer Software ›](https://www.maximintegrated.com/en/app-notes/index.mvp/id/6812)

Click here for production status of specific part numbers.

## DS28C39 Evaluation System

## General Description

The  DS28C39  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  exercise  the features of the DS28C39. The EV system consists of five DS28C39/DS2476  devices  in  a  6-pin  TDFN  package,  a DS9121AQ+ evaluation TDFN socket board, a DS9121BQ+ evaluation  TDFN  socket  board,  and  a  DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation software runs under Windows ®  10, Windows 8, and Windows 7 operating  systems,  both  64-bit  and  32-bit  versions.  It  provides a  handy  user  interface  to  exercise  the  features  of  the DS28C39 and DS2476.

## EV Kit Contents

|   QTY | DESCRIPTION                                     |
|-------|-------------------------------------------------|
|     5 | DS28C39 DeepCover ECDSAAuthenticator (6 TDFN)   |
|     5 | DS2476BQ+ DeepCover Secure Coprocessor (6 TDFN) |
|     1 | DS9121AQ+ Socket Board (6 TDFN)                 |
|     1 | DS9121BQ+ Socket Board (6 TDFN)                 |
|     1 | DS9481P-300# USB to 1W/I 2 CAdapter             |
|     1 | USB Type-A to Micro-USB Type-B Cable            |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: DS28C39 and DS2476

## Features

- Demonstrates the Features of the DS28C39 DeepCover ®  ECDSA Authenticator
- Demonstrates the Features of the DS2476 DeepCover Secure Coprocessor
- I 2 C Communication Is Logged to Aid Firmware Designers Understanding of DS28C39 and DS2476
- I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7 for Both 64-Bit and 32-Bit Versions
- 3.3V ±10% I 2 C Operating Voltage
- Convenient On-Board Test Points, TDFN Socket
- Evaluation Software Available by Request

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28C39 Evaluation System

## DS28C39 EV System

<!-- image -->

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9481P-300# USB to 1-Wire/I 2 C adapter (included)
- DS9121AQ+ TDFN socket board (one included)
- DS9121BQ+ TDFN socket board (one included)
- DS28C39Q+ (five devices included)
- DS2476BQ+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28C39 EV kit software (light version) or  request full DS28C39 EV kit developer software .

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

│

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 7 PC to set up the DS28C39 EV kit hardware/software:

- 1) Obtain and unpack the DS28C39\_Evaluation\_Kit\_Setup\_V1.0.0.zip file, or the latest version.
- 2) In a file viewer ( Figure 1), double click on DS28C39\_ Evaluation\_Kit\_Setup\_V1.0.0.exe to begin the installation.
- 3) Click Browse to select a default folder location, and then click Next to install the EV kit software (Figure 2).

Figure 1. File Viewer

<!-- image -->

Figure 2. Install Folder Location

<!-- image -->

- 4) Click Next to install shortcuts to the default folder (Figure 3).

Figure 3. Program Shortcuts Location

<!-- image -->

- 5) Unplug any Maxim adapter and click on Next , with the default settings checked. This selects and installs the DS9481P-300# driver, which is needed to communicate through the USB via a virtual COM port (Figure 4).

Figure 4. Select to Install the Driver

<!-- image -->

- 6) Next click on Install . A new window pops up to show the installing progression (Figure 5).

Figure 5. Ready to Install

<!-- image -->

- 7) Click on Next when the Device Driver Installation Wizard appears (Figure 6).

Figure 6. Device Driver

<!-- image -->

- 8) Click on Finish to close the final window and confirm the driver is installed correctly ( Figure 7).

Figure 7. Device Driver Installation Finished

<!-- image -->

## DS28C39 Evaluation System

- 9) Plug  the  DS9481P-300#  into  the  PC  with  both DS9121AQ+ and DS9121BQ+ socket boards by doing the following:
- a)  (Optional-Perform  only  if  using  the  coprocessor): Open the DS9121AQ+ socket and insert a DS2476 into the cavity, as shown in Figure 8. Note: The plus (+) on the package must be on the opposite side of the marker in the socket.
- b)  Open the DS9121BQ+  socket and insert a DS28C39 into the cavity, per the same orientation shown in Figure 8.
- c)  Close both burn-in sockets.

## Evaluates: DS28C39 and DS2476

- d)  Connect  the  DS9121AQ+  J2,  6-pin  male  plug, to  the  DS9481P-300#,  6-pin  female  socket,  per Figure 9.
- e)  Connect the DS9121AQ+ J1, 6-pin female socket,  to  the  DS9121BQ+  J2,  6-pin  male  plug  per Figure 9.
- f)  For the DS9121AQ+ boards that contain DS2476, configure jumpers JP1 to use SDA and JB1 to use 3.3V per Figure 9.
- g)  For the DS9121BQ+ board that contain DS28C39, configure  jumpers  JB3  to  use  SCL,  JB4  to  use SDA, and JB1 to use 3.3V per Figure 9.
- h)  Plug the DS9481P-300#, using a USB Type-A to Micro-USB Type-B cable, into the PC.

Figure 8. Orientation of the DS28C39 and DS2476 in the Burn-In Socket

<!-- image -->

Figure 9. DS9481QA-300#, DS9121AQ, and DS9121BQ

<!-- image -->

│

- 10)  Click on Finish to close the final window and confirm the software is installed correctly ( Figure 10).

Figure 10. Software Installation Finished

<!-- image -->

## DS28C39 Evaluation System

- 11) The DS28C39 EV kit program opens and automatically connects to the COM port. This can be verified in the lower right corner of the window, as shown in Figure 11.

Figure 11. DS28C39 EV Kit Program (Default View Upon Opening)

<!-- image -->

## DS28C39 Evaluation System

## EV Kit Supported Functions

## Evaluates: DS28C39 and DS2476

## Detailed Hardware Description

The  DS28C39  EV  kit  program  is  designed  as  a  usage example. It  includes  the  ability  to  either  use  the  built-in software ECDSA engine or the DS2476BQ+ coprocessor as the host compute engine. The default is to use the software ECDSA engine. To use the coprocessor, go under the Settings menu,  then ECDSA  Engine ,  and  select DS2476 . The GUI displays all the I 2 C sequences for each step performed to assist the firmware engineer. See Table 1 for descriptions of the functions in the GUI.

The DS28C39 EV kit hardware includes the MAXQ1010 microcontroller  with  USB  and  two  socket  adapters, DS9121AQ and DS9121BQ, which are made to contain the DS2476 device or DS28C39 device. The MAXQ1010 is  loaded  with  firmware  to  function  as  a  virtual  COM port  that  bridges  UART  signaling  to  I 2 C  and  1-Wire. Optionally, the DS2476 functions to off load the ECDSA I 2 C  computations  to  perform  signature.  The  DS28C39 slave functions to perform ECDSA Public-Key signatures during authentication and contains memory space for the necessary elements.

## Table 1. GUI Setup and Usage Flows Supported

| FLOW*                     | DS2476 SUPPORT   | DESCRIPTION                                                                                                                                                                        |
|---------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Set Up System             |                  | This is an example to perform at a provisioning authority. This contains the operations needed to set up the system Authority Key pair, Write Key pair, and the Write Certificate. |
| Set Up Device             |                  | At a provisioning authority (e.g., a secure server at an equipment manufacturer), this contains the operations needed to set up the DS28C39 device.                                |
| Authenticate Device       | X                | This is an example to be used to authenticate with ECDSAfor a read page of memory of the DS28C39 device.                                                                           |
| Write with Authentication |                  | This is an example to change a page of memory to the DS28C39 device with authentication using ECDSA.                                                                               |
| Read RNG                  |                  | Performs the operations to generate a random number from the DS28C39 device. This is a FIPS/NIST compliant true random number generator (TRNG).                                    |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28C39EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## DS28C39 EV Kit Bill of Materials

| COMPONENT       | DESCRIPTION                        |   QTY | DESIGNATOR                              |
|-----------------|------------------------------------|-------|-----------------------------------------|
| DS28C39Q+U      | DS28C39Q+U                         |     5 | PACK-OUT                                |
| DS2476BQ+U      | DS2476BQ+                          |     5 | PACK-OUT                                |
| EH0802          | CABLE,USB A-TO-MICRO-B CABLE (1M)  |     1 | PACK-OUT                                |
| DS9121BQ#_T1    | DS9121BQ#_T1                       |     1 | PACK-OUT                                |
| 89-9121A+Q00_T1 | 89-9121A+Q00_T1                    |     1 | PACK-OUT                                |
| 89-9481P#300_T1 | 89-9481P#300_T1                    |     1 | PACK-OUT                                |
| EPCBDS9121AQ    | PCB+,90-9121A+Q00 (DS9121Q+)       |     1 | PCB                                     |
| EH1056          | CONN+,HEADER,50PS,.100 SGL,R/A,AU  |     6 | J2 -6P                                  |
| EH1499          | CONN+,FEMALE,6POS,.100",R/A,GOLD   |     1 | J1                                      |
| EH0400          | PC MOUNT TEST POINTS, BLACK        |     6 | VCC/CEXTSDA/IO, GND, SCL, PIOA, PIOB    |
| EH1104+         | SOCKET+,IC TDFN,3MM,3x2,CLAMSHELL  |     1 | U1                                      |
| ECM0581         | CAP+,0.47uF,10%,16V,X7R,0603       |     1 | C1                                      |
| ED0950          | LED+,GREEN CLEAR,3.2V,20mA,0603    |     2 | D1, D2                                  |
| EH1108          | CONN+,HDR,BRKWAY,40POS VERT,0.318" |     3 | JP1 -3P                                 |
| EH0072          | HEADER 36-40 PINS (CUT TO FIT)     |     2 | JB1 -2P                                 |
| EH1106+         | SHUNT+,LP W/HANDLE 2 POS 30AU      |     2 | PACK-OUT                                |
| EQ0745          | MOSFET+,N-CH ENHANCEMENT           |     2 | Q1, Q2                                  |
| ER0106033301    | RES#,3.3K OHM,1%,0603              |     2 | R3, R4                                  |
| ER0106031002    | RES,10K OHM,1%,0603                |     4 | R1, R2, R5, R6                          |
| EPCBDS9121BQ    | PCB+, DS9121BQ#                    |     1 |                                         |
| EH1056          | CONN+,HEADER,50PS,.100 SGL,R/A,AU  |     6 | J2 -6P                                  |
| EH1499          | CONN+,FEMALE,6POS,.100",R/A,GOLD   |     1 | J1                                      |
| EH0400          | PC MOUNT TEST POINTS, BLACK        |     6 | TP1-TP6                                 |
| EH1104+         | SOCKET+,IC TDFN,3MM,3x2,CLAMSHELL  |     1 | U1                                      |
| ECM0581         | CAP+,0.47uF,10%,16V,X7R,0603       |     1 | C1                                      |
| ED0950          | LED+,GREEN CLEAR,3.2V,20mA,0603    |     1 | D1                                      |
|                 | HEADER 36-40 PINS (CUT TO FIT)     |    10 | JB1 -2P, JB2 -2P, JB3 -2P, BJ4 -2P, JB5 |
| EQ0745          | MOSFET+,N-CH ENHANCEMENT           |     1 |                                         |
| EH0072          |                                    |       | Q1                                      |
| ER0106031002    | RES,10K OHM,1%,0603                |     2 | R1,R3                                   |
| EPCBDS9481P-300 | PCB+,DS9481P-300#                  |     1 |                                         |

## DS28C39 EV Kit Bill of Materials (continued)

| COMPONENT     | DESCRIPTION                         |   QTY | DESIGNATOR                  |
|---------------|-------------------------------------|-------|-----------------------------|
| EC1065        | CAP+,1uF,20%,6.3V,X5R,0402          |     7 | C1, C2, C4, C7 C9, C11, C12 |
| EC1458B       | CAP+,0.1uF,10%,6.3V,X5R,0402        |     3 | C3, C8, C13                 |
| EC0976        | CAP+,10pF,5%,50V,C0G,0603           |     2 | C5, C6                      |
| ECM0081       | CAP+,10pF,5%,50V,C0G,0402           |     1 | C10                         |
| EH1498        | CONN+,RCPT STD MICRO USB TYPE B     |     1 | CN1                         |
| ED1021        | LED+,ORANGE,1.9V,5mA,0603           |     1 | D1                          |
| EL1804        | FER BEAD+,220 OHM,2.2A,0603         |     2 | FB1, FB2                    |
| EH1716        | SOCKET+,0.1",6 POS,FEMALE,R/A,TH    |     1 | J1                          |
| EQ0219        | 2N7002 MOSFET, SOT-23               |     1 | Q1                          |
| EQ1054        | MOSFET+,P-CHANNEL,20V,3.9A,SOT-23   |     1 | Q2                          |
| ER05060310R0  | RES#,10 OHM,5%,0603                 |     1 | R1                          |
| ER0504021501  | RES#,1.5K OHM,5%,0402               |     1 | R2                          |
| ER0104021003  | RES#,100K OHM,1%,0402               |     3 | R3, R6, R7                  |
| ER0104023242  | RES#,32.4K OHM,1%,0402              |     1 | R4                          |
| ER0504024701  | RES#,4.7K OHM,5%,0402               |     1 | R5                          |
| ER0504021001  | RES#,1K OHM,5%,0402                 |     1 | R8                          |
| ER0504022201  | RES#,2.2K OHM,5%,0402               |     1 | R9                          |
| ER0104024990  | RES#,499 OHM,1%,0402                |     1 | R10                         |
| ER0108054R99  | RES#,4.99 OHM,1%,0805               |     1 | R11                         |
| ER0504026800  | RES#,680 OHM,5%,0402                |     1 | R12                         |
| ER0104021741  | RES#,1.74K OHM,1%,0402              |     2 | R13, R14                    |
| EH1032        | FUSE+,PTC,RESETTABLE,0.12A,30V,1206 |     1 | RT1                         |
| EH1359        | SWITCH#,TACTILE,SPST-NO,.05A,,SMD   |     1 | S1                          |
| MAXQ1010-A01+ | MAXQ1010-A01+                       |     1 | U1                          |
| MAX8891EXK33+ | MAX8891EXK33+                       |     1 | U2                          |
| MAX3207EAUT+  | MAX3207EAUT+                        |     1 | U3                          |
| MAX9140AAXK+  | MAX9140AAXK+                        |     1 | U4                          |
| MAX13204EALT+ | MAX13204EALT+                       |     1 | U5                          |
| EX0586        | XTAL+,12MHz,50ppm,10pF,4-SMD        |     1 | X1                          |

## DS28C39 Evaluation System

## DS28C39 EV Kit Schematic

<!-- image -->

## DS28C39 EV Kit Schematic (continued)

<!-- image -->

## DS28C39 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS28C39 and DS2476