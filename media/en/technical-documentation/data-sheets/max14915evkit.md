<!-- lastmod 2022-08-02 -->
## MAX14915 Evaluation Kit

## General Description

The MAX14915 evaluation kit (EV kit) provides a proven design to evaluate the MAX14915, octal high-side switch with  extended  diagnostics.  The  EV  kit  includes  the MAX14915 evaluation board and a graphical user interface (GUI)  that  provides  communication  from  a  PC  to  the target  device  through  a  USB  port  and  the  USB2GPIO interface board. The USB2GPIO EV kit should be ordered separately.

The  GUI  is  compatible  with  Windows  10  for  exercising the features of the MAX14915 IC. The EV kit GUI allows individually controlling of eight high-side switches through the  high-speed  SPI  interface  and  receive  a  diagnostic information  from  the  MAX14915,  including  open-wire/ open-load  conditions,  state  of  the  output  channels, multiple  undervoltage  alarms,  global  and  per  channel overtemperature alarms, and multiple fault alarms.

The MAX14915 EV kit must be powered from an external +24V  power  supply  and  can  consume  more  than  10A when  fully  loaded.  The  USB2GPIO  interface  board  is powered from the USB port.

The MAX14915 EV kit  board  comes  with  a  MAX14915AFM+ installed in a 48-pin, 6 x 6mm FC2QFN package.

## MAX14915 EV System

<!-- image -->

<!-- image -->

## Features

- Robust Operation with Wide Range Of Input Voltages and Load Conditions
- VDDOK Indication
- LED Indication of Channels Status and Fault Conditions
- Fast Inductive Load Demagnetization
- Open-wire, Overload, Undervoltage, Overcurrent, Thermal Shutdown Fault Conditions Indication
- Supports Watchdog and SYNCH Features
- Communication Error Indication
- Wide Logic Voltage Range
- Pin Addressable SPI Communication
- -40°C to +125°C Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 10 Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX14915

## MAX14915 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX14915 EV kit Files

| FILE                        | DECRIPTION                |
|-----------------------------|---------------------------|
| MAX14915EV kitSetupV1.0.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX14915 EV kit
- USB2GPIO EV kit (must be ordered separately)
- +24V DC power supply
- PC with installed Windows 10 and a USB port
- USB-A to micro-USB cable (not included)

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  system  software.  Text  in  bold and underline refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit HERE and click on Design Resources to download the latest version of the EV kit software, MAX14915EV kit.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX14915EV kitSetupV1.0.exe program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers are in their default positions (Table 1).
- 4) Power up the EV kit with +24V from an external power supply through J1 and J2 Banana Plugs.
- 5) Connect the EV SYS to a USB port of a PC. A micro-USB cable is not included and should be obtained locally.
- 6) Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software appears as shown in Figure 1. Verify that the lowerright status bar indicates the EV kit hardware is Connected .

The GUI automatically detects EV kit is connected to the PC and enables serial communication. Any configuration change can be made on Register Settings tab.

(The following steps are used to verify functionality of the MAX14915)

- 7) Select Register Settings tab and press the Read All button twice to clear the initially detected undervoltage global conditions in the GlobalErr register 0x09.
- 8) Enable the desirable diagnostics in registers 0x0A through 0x0F. For example, allowing STATUS LEDs and FAULT LEDs to be controlled autonomously by the internal logic, by disabling SLEDSet and FLEDSet bits in the Config1 register 0x0D[1:0] = 00b. Select register 0x0D in the Register map table on the left and choose '0: Disabled' from the pulldown menu of the bit Setting column of the register description table on the right. The font color of the modified register is changed from black to red. Click Write Modified button to write a new configuration into the register.
- 9) Set all OUTPUT switches ON, by typing in 255 decimal number into SetOUT register 0x00. Note, the GUI accept decimal, hex or binary numbers (e.g., 255, or 0xFF, or 0b11111111). The user can enable Auto Write button to allow auto write the changes instead of clicking Write Modified or Write Selected buttons, that allow individual command to be sent to the MAX14915.

│

Evaluates: MAX14915

Figure 1. MAX14915 EV Kit GUI System Tab

<!-- image -->

Figure 2. MAX14915 EV Kit GUI Register Settings Tab

<!-- image -->

## MAX14915 Evaluation Kit

## Detailed Description of Hardware

The MAX14915EV kit in conjunction with the USB2GPIO# adapter board provides easy to use and flexible solution for  evaluation  of  the  MAX14915,  octal  high-side  switch for  industrial  applications.  It  allows  SPI  communication between the Windows compatible GUI installed on a PC, and the MAX14915. The USB2GPIO# adapter board is a plug and play device that is powered from the USB port and  does  not  require  any  additional  configuration,  refer to  the  USB2GPIO  data  sheet HERE .  A  USB  driver  for the USB2GPIO# board is installed automatically with the MAX14915 GUI.

Evaluates: MAX14915

selectable address for each board by appropriate J11 and J12 jumper settings. For full configuration options, refer to Table 1.

Load  for  each  channel  should  be  connected  to  the  J8 and J9 terminal block. Each channel (switch) can provide about 1A of current (typ) and can handle either resistive or inductive load.

The  MAX14915EV  kit#  can  be  used  as  a  standalone board  connected  to  the  SPI  bus  using  J6  or/and  J7 headers, refer to the MAX14915 EV kit schematic. Up to four EV kits can be connected to the same SPI bus with On  board  diagnostics provide  VDD  status  through VDDOK LED (DS9), communication error via COMERR# LED  (DS18)  and  a  global  fault  condition  via  FAULT# LED (DS19). Per channel output state and per channel fault  conditions are visible via LED matrix, DS1 through DS8,  and  DS10  through  DS17,  correspondently.  Other diagnostics  are  provided  through  the  SPI  interface  by reading the diagnostic registers 0x03 through 0x09.

Table 1. MAX14915 Board Shunt Positions &amp; Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                                   |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| J3       | 1-2*             | VLED supplied from VDD.                                                                                                                      |
| J3       | Open             | Use an external VLED source. Apply VLED power between VLED test point and GND (TP4).                                                         |
| J4       | 1-2              | Select 3.3V logic level (VL=VA).                                                                                                             |
| J4       | Open*            | Logic voltage (VL) supplied from USB2GPIO board (3.3V). Use an external source between VL and GND (TP11) if another host controller is used. |
| J5       | Open*            | Internal 3.3V VA regulator enabled.                                                                                                          |
| J5       | 1-2              | Internal VA regulator disabled (REGEN=GND). Use an external VA source between VA test point and GND (TP4).                                   |
| J6       | 1-2              | Set address bit A0 = 1.                                                                                                                      |
| J6       | 2-3*             | Set address bit A0 = 0.                                                                                                                      |
| J7       | 1-2              | Set address bit A1 = 1.                                                                                                                      |
| J7       | 2-3*             | Set address bit A1 = 0.                                                                                                                      |

* Default configuration

│

## MAX14915 Evaluation Kit

## Detailed Description of Software

The MAX14915 GUI provides access to all registers and allows  full  configuration  and  control  of  the  MAX14915. There  are  two  tabs  available  to  control  the  EV  kit.  The System tab provides system-level control of the selected output  pins,  including  static  and  dynamic  control.  The Register Settings tab provides per-channel and enhanced diagnostic configuration.

## System Tab

The System tab allows driving the output pins by configuring each output either on, off, or driving Square wave frequency from pull-down menu, as shown in Figure 3.

Click  Drive  Pins  button  on  the  right-side  of  the  GUI  to drive the outputs. The indicators connected to the OUT\_ pins show the state of each output.

Connect the oscilloscope probe to OUT\_ test points on the EV kit to see the output signal in real-time.

Figure 3. System Tab. Output Configuration

<!-- image -->

│

## Register Settings Tab

The  Register  Settings  tab  allows  detailed  configuration of the device to explore all the available features, refer to Figure 4. The full register map table of the MAX14915 is located on the left-side of the tab, and the bit-by-bit control and description table is located on the right side. When the  register  is  selected  in  the  register  map  table,  the detailed description of each bit is shown on the right table. The register setting can be changed directly in the register map table by double-clicking on the Value cell. Each data entry  should  follow  by  the  'Enter/Return'  button  on  the keyboard.  The  Value  cell  accepts  binary  (0b),  decimal or  hex  (0x)  numbers.  The  modified  register  changes its  color  from  black  to  red  until  the  data  will  be  actually written to the register. The data in the right table can be changed using drop down menus in the Setting cell for each  bit  individually.  Both  tables  are  synchronized  that changes made in one table appear at both tables. There are several write and read options available through the corresponding control buttons located below the register bit-by-bit description table.

When the Auto Write button is selected, any data typed in,  or  selected  through  the  Setting  pull-down  menu  will be  automatically  written  into  the  corresponding  writable register. The button renamed to Stop Auto Write and autowrite function can be canceled by clicking on this button second time.

When the Auto Read button is selected, the write function is disabled, and the GUI is constantly monitoring the status and fault conditions of the device. Clicking a second time on  the  button,  which  becomes  Stop  Auto  Read,  allows canceling this operation.

The Read All button performs a read operation of all registers after each click.

When the fault conditions occur, they will set the bit(s) in the corresponding read-only registers 0x03 to 0x09. The fault condition should be carefully evaluated and removed externally (over/under voltage, overload, open wire, etc.). It  is  recommended  to  read  Interrupt  (0x03)  and  Global Error  (0x09)  registers  first  to  identify  what  kind  of  fault conditions  happened,  then  read  per-channel  diagnostic registers 0x04 to 0x08 twice to make sure that condition is gone and to clear interrupts.

The Write Selected button allows to write to the selected register  only,  while  the  Write  Modified  button  performs write operation to all modified registers after each click.

There are an I/O pins control and status box and per-bit diagnostic  result  provided  by  the  MAX14915  after  each SPI  write  or  read  operation  below  the  buttons.  The  EN slider  allows  enable  or  disable  OUTs,  CRCEN  enables or disables error-detecting code to be added to each SPI transaction and SYNCH slider allows manual synchronization of multiple settings.

A user must match the A0 and A1 jumper position EV kit with the SPI address selected from the Address pulldown menu, located below the register map table. The default address is 00.

Each SPI transaction is displayed in the Device Mode Info box for user convenience.

Figure 4. Register Settings Tab

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART            | TYPE   |
|-----------------|--------|
| MAX14915EV kit# | EV kit |

## MAX14915 EV Kit Bill of Materials

|   ITEM | REF_DES                           |   QTY | MFG PART #                                               | MANUFACTURER                 | VALUE            | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|-----------------------------------|-------|----------------------------------------------------------|------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C10-C16                       |     8 | CGA3EANP02A103J080AC                                     | TDK                          | 0.01UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO               |            |
|      2 | C5                                |     1 | C3225X7S1H106K250AB                                      | TDK                          | 10UF             | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                |            |
|      3 | C6, C9                            |     2 | GRM188R72A104KA35; CC0603KRX7R0BB104                     | MURATA;TDK                   | 0.1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
|      4 | C7, C17                           |     2 | GMK212B7105KG                                            | TAIYO YUDEN                  | 1.0UF            | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |            |
|      5 | C8                                |     1 | CGA4J1X7S1C106K125; GCM21BC71C106KE35                    | TDK;MURATA                   | 10UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                          |            |
|      6 | D1                                |     1 | SMBJ36A-E3                                               | VISHAY GENERAL SEMICONDUCTOR | 36V              | DIODE; TVS; SMB (DO-214AA); VRM=36V; IPP=10.3A                                                                           |            |
|      7 | DS1-DS8                           |     8 | LGL29K-G2J1-24-Z                                         | OSRAM                        | LGL29K-G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                     |            |
|      8 | DS9                               |     1 | LTST-C171GKT                                             | LITE-ON ELECTRONICS INC.     | LTST-C171GKT     | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=5.0V; IF=0.12A; -55 DEGC TO +85 DEGC                                        |            |
|      9 | DS10-DS19                         |    10 | LS L29K-G1J2-1-Z                                         | OSRAM                        | LS L29K-G1J2-1-Z | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; - 40 DEGC TO +100 DEGC                                           |            |
|     10 | J1, J2                            |     2 | 3267                                                     | POMONA ELECTRONICS           | 3267             | CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                            |            |
|     11 | J3-J5                             |     3 | PCC02SAAN                                                | SULLINS                      | PCC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |            |
|     12 | J6, J7                            |     2 | PCC03SAAN                                                | SULLINS                      | PCC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |            |
|     13 | J8, J9                            |     2 | OSTTE080104                                              | ON-SHORE TECHNOLOGY INC.     | OSTTE080104      | CONNECTOR; MALE; THROUGH HOLE; TERMINAL BLOCKS-WIRE TO BOARD; STRAIGHT; 8PINS                                            |            |
|     14 | J10                               |     1 | 68021-220HLF                                             | AMPHENOL ICC                 | 68021-220HLF     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BERGSTIK II BREAKAWAY HEADER; RIGHT ANGLE; 20PINS;                             |            |
|     15 | J11                               |     1 | PBC08DAAN                                                | SULLINS ELECTRONICS CORP.    | PBC08DAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                        |            |
|     16 | J17-J20                           |     4 | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901 | GENERIC PART                 | N/A              | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                          |            |
|     17 | J17-J20                           |     4 | MCH_SO_F_HEX_4-40X1/2                                    | GENERIC PART                 | N/A              | STANDOFF; FEMALE- THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                   |            |
|     18 | OUT1-OUT8                         |     8 | 5013 KEYSTONE                                            | 5013 KEYSTONE                | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     19 | R1                                |     1 | CRCW060324K9FK                                           | VISHAY DALE                  | 24.9K            | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |            |
|     20 | R2, R3, R5-R8, R16, R17, R20, R21 |    10 | CRCW06031K00FK; ERJ-3EKF1001V                            | VISHAY DALE;PANASONIC        | 1K               | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                        |            |

## MAX14915 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                   |   QTY | MFG PART #                   | MANUFACTURER          | VALUE    | DESCRIPTION                                                                                                                           | COMMENTS   |
|--------|---------------------------|-------|------------------------------|-----------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | R4                        |     1 | CRCW0603162KFK               | VISHAY DALE           | 162K     | RESISTOR; 0603; 162K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                |            |
| 22     | R10                       |     1 | ERJ-3EKF28R0V                | PANASONIC             |          | 28 RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                              |            |
| 23     | R12-R15                   |     4 | CRCW06035K60FK               | VISHAY DALE           | 5.6K     | RESISTOR, 0603, 5.6K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                               |            |
| 24     | R18, R19                  |     2 | CRCW060310K0FK; ERJ-3EKF1002 | VISHAY DALE;PANASONIC | 10K      | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |            |
| 25     | SU1, SU2, SU4-SU6         |     5 | S1100-B;SX1100-B             | KYCON;KYCON           | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                               |            |
| 26     | VA, VL, TP1, VLED         |     4 | 5010                         | KEYSTONE              | N/A      | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                    |            |
| 27     | TP2, TP4, TP11, TP20-TP22 |     6 | 5011                         | KEYSTONE              | N/A      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;               |            |
| 28     | TP6, TP9                  |     2 | 5009                         | KEYSTONE              | N/A      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;               |            |
| 29     | TP12-TP15                 |     4 | 5004                         | KEYSTONE              | N/A      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |            |
| 30     | U1                        |     1 | MAX14915                     | MAXIM                 | MAX14915 | EVKIT PART-IC; SWTC; OCTAL HIGH-SIDE SWITCH WITH DIAGNOSTIC; FCQFN48-EP; PACKAGE OUTLINE: 21-100232; PACKAGE LAND PATTERN: 90- 100077 |            |
| 31     | PCB                       |     1 | MAX                          | MAXIM                 | PCB      | PCB:MAX                                                                                                                               |            |
| TOTAL  |                           |   103 |                              |                       |          |                                                                                                                                       |            |

## MAX14915 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX14915

## MAX14915 EV Kit PCB Layout Diagrams

MAX14915 EV Kit-Silk Top

<!-- image -->

MAX14915 EV Kit-Top

<!-- image -->

Evaluates: MAX14915

MAX14915 EV Kit-Internal 2

<!-- image -->

MAX14915 EV Kit-Internal 3

<!-- image -->

│

## MAX14915 EV Kit PCB Layout Diagrams (continued)

MAX14915 EV Kit-Bottom

<!-- image -->

MAX14915 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14915 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14915