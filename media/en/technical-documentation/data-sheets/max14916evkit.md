<!-- lastmod 2023-10-27 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX14916, MAX14916A

## General Description

This  evaluation  kit  provides  a  proven  design  to  evaluate  the  MAX14916  and  MAX14916A,  eight-channel high-side  switch  with  extended  diagnostics.  The  EV  kit includes the MAX14916 evaluation board and a graphical user  interface  (GUI)  that  provides  communication  from a  PC  to  the  target  device  through  a  USB  port  and  the USB2GPIO#  interface  board.  The  USB2GPIO#  board should  be  ordered  separately.  The  MAX14916  EV  kit comes with a MAX14916AFM+ in a 48-pin, 6mm x 6mm FC2QFN package, installed as U1. The EV kit can also be used to evaluate the MAX14916AAFM+. The user needs to order the MAX14916AAFM+ samples and replace U1.

The  GUI  is  compatible  with  Windows ®   10  for  exercising  the  features  of  the  MAX14916  IC.  The  EV  kit  connects  the  two  adjacent  channels  of  the  MAX14916 together for quad high-output current operation. The EV kit  software,  however,  gives  access  to  the  full  register map,  allowing  individual  control  of  the  eight  high-side switches. Refer to the MAX14915 EV kit to evaluate the octal output configuration. The software also retrieves all the  diagnostic  information  from  the  MAX14916,  including  open-wire  conditions,  state  of  the  output  channels, multiple  undervoltage  alarms,  global  and  per-channel overtemperature alarms, and other fault alarms.

The MAX14916 EV kit must be powered from an external +24V  power  supply  and  can  consume  more  than  16A when  fully  loaded.  The  USB2GPIO#  interface  board  is powered from the USB port.

A single TVS diode on V DD  protects all output channels against ±1kV/42Ω IEC 61000-4-5 surge transients.

Ordering Information appears at end of data sheet.

## MAX14916 and MAX14916A Evaluation Kit

## Features

- Current Limit in Quad-Channel Configuration
- MAX14916: 2.78A (typ)
- MAX14916A: 4A (typ)
- Robust Operation with Wide Range Of Input Voltages and Load Conditions
- VDDOK Indication
- LED Indication of Channels Status and Fault Conditions
- Fast Inductive Load Demagnetization
- Open-wire, Overload, Undervoltage, Overcurrent, Thermal Shutdown Fault Condition Indication
- Supports Watchdog and SYNCH Features
- Communication Error Indication
- Wide Logic Voltage Range
- Pin Addressable SPI Communication
- -40°C to +125°C Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 10 Compatible Software

## MAX14916 EV Kit Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

319-100443; Rev 1; 7/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. 2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX14916 and MAX14916A Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX14916 EV Kit Files

| FILE                            | DESCRIPTION               |
|---------------------------------|---------------------------|
| MAX14915_6_7EVKITSetupV1.14.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX14916 EV kit
- USB2GPIO interface board (must be ordered separately)
- +24V DC power supply
- PC with installed Windows 10 and a USB port
- USB-A to micro-USB cable (not included)

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  system  software.  Text  in  bold and underline refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit HERE and download the latest version of the EV kit software, MAX14915\_6\_7EVKITSetupV1.14.exe.
- 2) Install  the  EV  kit  software  on  your  computer  by running  the  MAX14915\_6\_7EVKITSetupV1.14.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Verify  that  all  jumpers  are  in  their  default  positions (Table 1).
- 4) Power up the EV kit with +24V from an external power supply through J1 and J2 Banana Plugs.
- 5) Connect the evaluation kit to  the  USB2GPIO# and the USB2GPIO# board to a USB port of a PC. A  micro-USB  cable  is  not  included  and  should  be obtained locally.
- 6) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu. Select the MAX14916EVKIT button  in  the  startup  window.  The  EV  kit  software appears as shown in Figure 1. Verify that  the  lower-right status bar indicates the EV kit hardware is Connected . The GUI automatically detects EV kit is connected to the PC and enables serial communication. Any configuration change can be made on Register Settings tab.

The following steps are used to verify functionality of the MAX14916 or MAX14916A.

- 7) Select Register Settings tab and press the Read All button twice to clear the initially detected undervoltage global conditions in the GlobalErr register 0x09.
- 8) Enable  the  desirable  diagnostics  in  registers  0x0A through 0x0F. For example, allowing STATUS LEDs and FAULT LEDs to be controlled autonomously by the internal logic, by disabling SLEDSet and FLEDSet bits  in  the  Config1  register  0x0D[1:0]  =  00b.  Select register 0x0D in the Register Map table  on  the  left and choose ' 0: Disabled ' from the pull-down menu of the bit Setting column of the register description table on the right. The font color of the modified register is changed from black to red. Click Write Modified button to write a new configuration into the register.
- 9) Set all OUTPUT switches ON, by typing in 255 decimal number into SetOUT register 0x00. Note, the GUI accepts decimal, hex or binary numbers (e.g., 255, or 0xFF, or 0b11111111). The user can enable Auto Write button to allow auto write the changes instead of  clicking Write  Modified or Write  Selected buttons, that allow individual command to be sent to the MAX14916 or MAX14916A.

Evaluates: MAX14916, MAX14916A

## MAX14916 and MAX14916A Evaluation Kit

Evaluates: MAX14916, MAX14916A

Figure 1. MAX14916 EV Kit GUI System Tab

<!-- image -->

Figure 2. MAX14916 EV Kit GUI Register Settings Tab

<!-- image -->

│

## MAX14916 and MAX14916A Evaluation Kit

## Detailed Description of Hardware

The MAX14916 EV kit in conjunction with the USB2GPIO# adapter board provides easy-to-use and flexible solution for  evaluation of the MAX14916 and MAX14916A, octal high-side switch for industrial applications. It allows SPI communication  between  the  Windows  compatible  GUI installed on a PC, and the MAX14916/MAX14916A. The USB2GPIO#  adapter  board  is  a  plug-and-play  device that is powered from the USB port and does not require any additional configuration, refer to the USB2GPIO data sheet HERE . A USB driver for the USB2GPIO# board is installed automatically with the MAX14916 GUI.

## Evaluates: MAX14916, MAX14916A

SPI address using J4 and J5 jumpers. For full configuration options, refer to Table 1.

Load for each channel should be connected to the J10 terminal block. Each channel (switch) can provide up to 2.4A (min) if the MAX14916 is installed, or up to 3A (min) if  the  MAX14916A  is  installed.  The  outputs  can  handle resistive, capacitive or inductive loads.

The  MAX14916EVKIT#  can  be  used  as  a  standalone board connected to the SPI bus using J3 and/or J7 headers, refer to the MAX14916 EV Kit Schematic . Up to four EV kits can share the same SPI bus by configuring the

On-board diagnostics provide VDD status through VDDOK LED (DS9), communication error via COMERR# LED  (DS18)  and  the  global  fault  condition  via  FAULT# LED (DS19).  Per-channel  output  state  and  per-channel fault  conditions are visible via LED matrix, DS1 through DS4,  and  DS5  through  DS8,  correspondently.  Other diagnostics  are  provided  through  the  SPI  interface  by reading the diagnostic registers 0x03 through 0x09.

Table 1. MAX14916 Board Shunt Positions &amp; Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                                           |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| J9       | 1-2*             | V LED supplied from V DD .                                                                                                                           |
| J9       | Open             | Use an external V LED source. Apply V LED power between V LED test point TP8 and GND (TP9).                                                          |
| J6       | 1-2              | Select 3.3V logic level (V L = V A ).                                                                                                                |
| J6       | Open*            | Logic voltage (V L ) supplied from USB2GPIO board (3.3V). Use an external source between V L (TP6) and GND (TP5) if another host controller is used. |
| J8       | Open*            | Internal 3.3V V A regulator enabled.                                                                                                                 |
| J8       | 1-2              | Internal V A regulator disabled (REGEN = GND). Use an external V A source between V A test point (TP7) and GND (TP4).                                |
| J4       | 1-2              | Set address bit A0 = 1.                                                                                                                              |
| J4       | 2-3*             | Set address bit A0 = 0.                                                                                                                              |
| J5       | 1-2              | Set address bit A1 = 1.                                                                                                                              |
| J5       | 2-3*             | Set address bit A1 = 0.                                                                                                                              |

│

## MAX14916 and MAX14916A Evaluation Kit

## Detailed Description of Software

The MAX14916 GUI provides access to all registers and allows  full  configuration  and  control  of  the  MAX14916. There  are  two  tabs  available  to  control  the  EV  kit.  The System tab  provides  system-level  control  of  the  selected  output  pins,  including  static  and  dynamic  control. The Register  Settings tab  provides  per-channel  and enhanced diagnostic configuration.

## Evaluates: MAX14916, MAX14916A

## System Tab

The System tab allows driving the output pins by configuring each output either on, off, or selecting Square wave frequency from pull-down menu, as shown in Figure 3.

Click Drive  Pins button  on  the  right-side  of  the  GUI  to drive the outputs. The indicators connected to the OUT\_ pins show the state of each output.

Connect the oscilloscope probe to OUT\_ test points on the EV kit to see the output signal in real-time.

Figure 3. System Tab Output Configuration

<!-- image -->

│

## MAX14916 and MAX14916A Evaluation Kit

## Register Settings Tab

The Register Settings tab allows detailed configuration of the device to explore all the available features, refer to Figure  4. The  full  register  map  table  of  the  MAX14916/ MAX14916A is located on the left-side of the tab, and the bit-by-bit  control  and  description  table  is  located  on  the right  side.  When  the  register  is  selected  in  the  register map table, the detailed description of each bit is shown on  the  right  table.  The  register  setting  can  be  changed directly in the register map table by double-clicking on the Value cell.  Each  data entry should follow by the 'Enter/ Return' button on the keyboard. The Value cell  accepts binary (0b), decimal or hex (0x) numbers. The modified register changes its color from black to red until the data will  be  actually  written  to  the  register.  The  data  in  the right table can be changed using drop down menus in the Setting cell for each bit individually. Both tables are synchronized that changes made in one table appear at both tables. There are several write and read options available through the corresponding control buttons located below the register bit-by-bit description table.

When the Auto Write button is selected, any data typed in,  or  selected  through  the Setting pull-down  menu  will be  automatically  written  into  the  corresponding  writable register. The button is renamed to Stop Auto Write and auto-write  function  can  be  canceled  by  clicking  on  this button second time.

When the Auto Read button is selected, the write function is disabled, and the GUI is constantly monitoring the status and fault conditions of the device. Clicking a second time

## Evaluates: MAX14916, MAX14916A

on  the  button,  which  becomes Stop Auto  Read ,  allows canceling this operation.

The Read All button performs a read operation of all registers after each click.

When the fault conditions occur, they set the bit(s) in the corresponding read-only registers 0x03 to 0x09. The fault condition  should  be  carefully  evaluated  and  removed externally (over/under voltage, overload, open-wire, etc.). It  is  recommended  to  read  Interrupt  (0x03)  and  Global Error  (0x09)  registers  first  to  identify  what  kind  of  fault conditions  happened,  then  read  per-channel  diagnostic registers 0x04 to 0x08 twice to make sure that condition is gone and to clear interrupts.

The Write Selected button allows to write to the selected register  only,  while  the Write  Modified button  performs write operation to all modified registers after each click.

There  is  an  I/O  pins  control  box  and  diagnostic  result box in the GUI. SDO diagnostic result is provided by the MAX14916 after each SPI write or read operation. The EN  slider  allows  enabling  or  disabling  OUTs,  CRCEN slider  enables  or  disables  error-detecting  code  to  be added to each SPI transaction and SYNCH slider allows manual synchronization of multiple devices.

User must match the A0 and A1 jumper position on the EV kit with the SPI address selected from the Address pulldown menu, located below the register map table. The default address is 00.

Each  SPI  transaction  is  displayed  in  the Device  Mode Info box for user convenience.

## MAX14916 and MAX14916A Evaluation Kit

Evaluates: MAX14916, MAX14916A

Figure 4. Register Settings Tab

<!-- image -->

## Ordering Information

<!-- image -->

| PART           | TYPE   |
|----------------|--------|
| MAX14916EVKIT# | EV Kit |
| USB2GPIO#      | EV Kit |

#Denotes RoHS compliance.

Note: MAX14916EVKIT# comes with MAX14916AFM+. In order to evaluate the MAX14916AAFM+, request samples separate to the EV kit.

│

## MAX14916 and MAX14916A Evaluation Kit

## MAX14916 EV Kit Bill of Materials

|   ITEM | REF_DES                      |   QTY | MFG PART #                                                                          | MANUFACTURER                                        | VALUE                                                                              | DESCRIPTION                                                                                                              | COMMENTS                                                                           |
|--------|------------------------------|-------|-------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
|      1 | C1                           |     1 | GRM32EC72A106KE05                                                                   | MURATA                                              | 10UF                                                                               | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                           |                                                                                    |
|      2 | C2, C6                       |     2 | GMK212B7105KG; GRM219R7YA105KA12                                                    | TAIYO YUDEN;MURATA                                  | 1.0UF                                                                              | CAP; SMT (0805); 1.0UF; 10%; 35V; X7R; CERAMIC                                                                           |                                                                                    |
|      3 | C3                           |     1 | CGA4J1X7S1C106K125; GCM21BC71C106KE35                                               | TDK;MURATA                                          | 10UF                                                                               | CAP; SMT (0805); 10UF; 10%; 16V; X7S; CERAMIC                                                                            |                                                                                    |
|      4 | C4, C5                       |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO;MURATA;TAIYO YUDEN; AVX;MURATA                | 0.1UF                                                                              | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                          |                                                                                    |
|      5 | C7-C10                       |     4 | CGA3EANP02A103J080AC                                                                | TDK                                                 | 0.01UF                                                                             | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                                                          |                                                                                    |
|      6 | D1                           |     1 | SMCJ36A                                                                             | LITTEL FUSE                                         | 36V                                                                                | DIODE; TVS; SMC (DO-214AB); VRM=36V; IPP=25.9A                                                                           |                                                                                    |
|      7 | D2-D5                        |     4 | MURA205T3G                                                                          | ON SEMICONDUCTOR                                    | MURA205T3G                                                                         | DIODE; RECT; SMA (DO-214AC); PIV=50V; IF=2A                                                                              |                                                                                    |
|      8 | D6                           |     1 | SM30T15AY                                                                           | ST MICROELECTRONICS                                 | 15V                                                                                | DIODE; TVS; SMC (DO-214AB); VRM=15V; IPP=140A                                                                            |                                                                                    |
|      9 | DS1-DS4                      |     4 | LGL29K-G2J1-24-Z                                                                    | OSRAM                                               | LGL29K-G2J1-24-Z                                                                   | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                     |                                                                                    |
|     10 | DS5-DS8, DS18, DS19          |     6 | LS L29K-G1J2-1-Z                                                                    | OSRAM                                               | LS L29K-G1J2-1-Z                                                                   | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                            |                                                                                    |
|     11 | DS9                          |     1 | LTST-C171GKT                                                                        | LITE-ON ELECTRONICS INC.                            | LTST-C171GKT                                                                       | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=5.0V; IF=0.12A; -55 DEGC TO +85 DEGC                                        |                                                                                    |
|     12 | J1, J2                       |     2 | 3267                                                                                | POMONA ELECTRONICS                                  | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                       | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN |
|     13 | J3                           |     1 | 68021-220HLF                                                                        | AMPHENOL ICC                                        | 68021-220HLF                                                                       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BERGSTIK II BREAKAWAY HEADER; RIGHT ANGLE; 20PINS;                             |                                                                                    |
|     14 | J4, J5                       |     2 | PCC03SAAN                                                                           | SULLINS                                             | PCC03SAAN                                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |                                                                                    |
|     15 | J6, J8, J9                   |     3 | PCC02SAAN                                                                           | SULLINS                                             | PCC02SAAN                                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |                                                                                    |
|     16 | J7                           |     1 | PBC08DAAN                                                                           | SULLINS ELECTRONICS CORP.                           | PBC08DAAN                                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                        |                                                                                    |
|     17 | J10                          |     1 | OSTTE080104                                                                         | ON-SHORE TECHNOLOGY INC.                            | OSTTE080104                                                                        | CONNECTOR; MALE; THROUGH HOLE; TERMINAL BLOCKS- WIRE TO BOARD; STRAIGHT; 8PINS                                           |                                                                                    |
|     18 | J11-J14                      |     4 | 9032                                                                                | KEYSTONE                                            | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON     | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                           |                                                                                    |
|     19 | OUT1-OUT4                    |     4 | 5013                                                                                | KEYSTONE                                            | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                                                                                    |
|     20 | R1, R3, R5-R9, R14, R16, R17 |    10 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF; RMCF0603FT1K00                     | VISHAY;PANASONIC;BOURNS; STACKPOLE ELECTRONICS INC. | 1K                                                                                 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |                                                                                    |
|     21 | R2                           |     1 | ERJ-3EKF28R0                                                                        | PANASONIC                                           | 28 RES; SMT (0603); 28; 1%; +/-100PPM/DEGC;                                        | 0.1000W                                                                                                                  |                                                                                    |
|     22 | R4                           |     1 | CRCW0603162KFK                                                                      | VISHAY DALE                                         | 162K                                                                               | RES; SMT (0603); 162K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |                                                                                    |
|     23 | R10, R11, R13, R15           |     4 | CRCW06035K60FK                                                                      | VISHAY DALE                                         | 5.6K                                                                               | RES; SMT (0603); 5.6K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |                                                                                    |
|     24 | R12                          |     1 | CRCW060324K9FK; ERJ-3EKF2492                                                        | VISHAY DALE;PANASONIC                               | 24.9K                                                                              | RES; SMT (0603); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |                                                                                    |
|     25 | R18, R19                     |     2 | 301-10K-RC                                                                          | XICON                                               | 10K                                                                                | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGC; 0.0630W                                                                        |                                                                                    |
|     26 | R20-R23                      |     4 | CRCW0603499KFK; ERJ-3EKF4993; RC0603FR-07499KL                                      | VISHAY DALE;PANASONIC;YAGEO                         | 499K                                                                               | RES; SMT (0603); 499K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |                                                                                    |
|     27 | SU1-SU5                      |     5 | S1100-B;SX1100-B; STC02SYAN                                                         | KYCON;KYCON;SULLINS ELECTRONICS CORP.               | SX1100-B                                                                           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |                                                                                    |
|     28 | TP1, TP5, TP9-TP11           |     5 | 5011                                                                                | KEYSTONE                                            | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |                                                                                    |
|     29 | TP2, TP6-TP8                 |     4 | 5010                                                                                | KEYSTONE                                            | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |                                                                                    |
|     30 | TP3, TP4                     |     2 | 5009                                                                                | KEYSTONE                                            | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |                                                                                    |
|     31 | U1                           |     1 | MAX14916AFM+                                                                        | MAXIM                                               | MAX14916AFM+                                                                       | IC; HSSWTCH; COMPACT INDUSTRIAL OCTAL 1A/QUAD 2A; HIGH-SIDE SWITCH WITH DIAGNOSTICS; FCQFN48-EP                          |                                                                                    |
|     32 | PCB                          |     1 | MAX14916                                                                            | MAXIM                                               | PCB                                                                                | PCB:MAX14916 -                                                                                                           |                                                                                    |

## MAX14916 and MAX14916A Evaluation Kit

## MAX14916 EV Kit Schematic

Evaluates: MAX14916, MAX14916A

<!-- image -->

## MAX14916 and MAX14916A Evaluation Kit

## MAX14916 EV Kit PCB Layout Diagrams

MAX14916 EV Kit PCB Layout-Silk Top

<!-- image -->

Evaluates: MAX14916, MAX14916A

MAX14916 EV Kit PCB Layout-Top View

<!-- image -->

MAX14916 EV Kit PCB Layout-Internal 2

<!-- image -->

│

## MAX14916 and MAX14916A Evaluation Kit

## Evaluates: MAX14916, MAX14916A

## MAX14916 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14916 EV Kit PCB Layout-Internal 3

MAX14916 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX14916 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX14916 and MAX14916A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/19            | Initial release                                                                                                                                                                                                                                                                                                                                                                               | -               |
|                 1 | 7/23            | Updated EV kit title , General Description , Features , MAX14916 EV Kit Photo , System Block Diagram , MAX14916 EV Kit Files , Quick Start , Figure 1 , Figure 2 , Detailed Description of Hardware , Table 1 , Detailed Description of Software , Figure 3 , Ordering Information , MAX14916 EV Kit Bill of Materials , MAX14916 EV Kit Schematic , and MAX14916 EV Kit PCB Layout Diagrams. | 1-13            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX14916, MAX14916A