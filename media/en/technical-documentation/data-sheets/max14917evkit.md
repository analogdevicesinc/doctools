<!-- lastmod 2022-08-02 -->
## MAX14917 Evaluation Kit

## General Description

The MAX14917 evaluation kit (EV kit) provides a proven design to evaluate the MAX14917 octal high-side switch. The  EV  kit  includes  the  MAX14917  evaluation  board and  a  graphical  user  interface  (GUI)  that  provides communication  from  a  PC  to  the  target  device  through a  USB  port  and  the  USB2GPIO  interface  board.  The USB2GPIO EV kit should be ordered separately.

The  GUI  is  compatible  with  Windows  10  for  exercising the features of the MAX14917 IC. The EV kit GUI allows individual  control  of  eight  high-side  switches  through the  high-speed  SPI  interface  and  receives  diagnostic information  from  the  MAX14917  per  channel  overload diagnostics, communication errors, and thermal shutdown diagnostics.

The MAX14917 EV kit must be powered from an external +24V  power  supply  and  can  consume  more  than  10A when  fully  loaded.  The  USB2GPIO  interface  board  is powered from the USB port.

The MAX14917 EV kit  board  comes  with  a  MAX14917AFM+ installed in a 48-pin, 6mm x 6mm FC2QFN package.

## MAX14917 EV Kit Board

<!-- image -->

Windows is a registered trademark of Microsoft Corporation.

## Features

- Robust Operation with Wide Range of Input Voltages and Load Conditions
- VDDOK Indication
- LED Indication of Channel Status and Fault Conditions
- Fast Inductive-Load Demagnetization
- SYNCH Input for Simultaneous Update of Switches
- Supports SPI and SYNCH Watchdogs
- Global FAULT and Communication Error Indication
- Wide Logic-Voltage Range
- Daisy-Chainable SPI Communication
- -40°C to +125°C Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested
- Windows* 10-Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX14917

<!-- image -->

## MAX14917 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX14917 EV Kit Files

| FILE                            | DECRIPTION                |
|---------------------------------|---------------------------|
| MAX14915_6_7EVKITSetupV1.15.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX14917 EV kit
- USB2GPIO EV kit (must be ordered separately)
- +24V DC power supply
- PC with installed Windows 10 and a USB port
- USB-A to micro-USB cable (not included)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  system  software. Text  in bold and underline refers  to  items  from  the  Windows  operating system.

- 1) Visit https://www.maximintegrated.com/en/design/tools/applications/evkit-software/index.mvp to download the latest version of the EV kit software, MAX14915\_6\_7EVKITSetupV1.14.exe. Save the EV kit software to a temporary folder.
- 2) Install the EV kit software on your computer by running the MAX14915\_6\_7EVKITSetupV1.14.exe program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers are in their default positions (Table 1).
- 4) Power up the EV kit with +24V from an external power supply through J1 and J2 banana plugs.
- 5) Connect the EV kit to a USB port of a PC. A microUSB cable is not included and should be obtained locally.
- 6) Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software appears as shown in Figure 1. Verify that the lowerright status bar indicates the EV kit hardware is Connected .

The  GUI  automatically  detects  EV  kit  is  connected to  the  PC  and  enables  serial  communication.  Any configuration  change  can  be  made  at  the  Register Settings tab.

The following steps are used to verify functionality of the MAX14917:

- 7) Set all OUTPUT switches On by typing in 255 decimal number into SetOUT register 0x00. Note, the GUI accepts decimal, hex, or binary numbers, e.g., 255, 0xFF, or 0b11111111, respectively. The user can enable the Auto Write button to allow auto write of the changes instead of clicking Write Modified or Write Selected buttons that allow individual commands to be sent to the MAX14917. When the data is sent out, the Status LEDs, DS1…DS8, light on indicating that all OUTPUTs are ON.

│

Evaluates: MAX14917

Figure 1. MAX14917 EV Kit GUI System Tab

<!-- image -->

Figure 2. MAX14917 EV Kit GUI Register Settings Tab

<!-- image -->

## MAX14917 Evaluation Kit

## Detailed Description of Hardware

The MAX14917 EV kit in conjunction with the USB2GPIO# adapter board provides an easy-to-use and flexible solution for  evaluating  the  MAX14917  octal  high-side  switch for  industrial  applications.  It  allows  SPI  communication between the Windows-compatible GUI installed on a PC and the  MAX14917. The USB2GPIO# adapter board is a  plug-and-play  device  that  is  powered  from  the  USB port  and  does  not  require  any  additional  configuration. Refer to the USB2GPIO data sheet https://datasheets. maximintegrated.com/en/ds/USB2GPIO.pdf for  mor information. A  USB  driver  for  the  USB2GPIO#  board  is installed automatically with the MAX14917 GUI.

Evaluates: MAX14917

ers.  Refer  to  the MAX14917 EV Kit Schematic .  For  full configuration options refer to Table 1.

Load for each channel should be connected to the J9 and J10  terminal  block.  Each  channel  (switch)  can  provide about 1A of current (typ) and can handle either resistive or inductive load.

The  MAX14917EVKIT#  can  be  used  as  a  standalone board connected to the SPI bus using J5 and/or J6 head- On board diagnostics provide V DD  status through VDDOK LED  (DS9),  communication  error  through  COMERR# LED (DS18) and a global fault condition through FAULT# LED (DS19). Per channel output state and per channel fault conditions are visible through the LED matrix, DS1 through  DS8,  and  DS10  through  DS17,  respectively. Other diagnostics are provided through SDO data of SPI interface, refer to the MAX14917 datasheet for details.

Table 1. MAX14917 Board Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                                      |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| J8       | 1-2*             | V LED supplied from V DD .                                                                                                                      |
| J8       | Open             | Use an external V LED source. Apply V LED power between V LED (TP11) test point and GND (TP12).                                                 |
| J4       | 1-2              | Select 3.3V logic level (V L = V A ). USB2GPIO board should be replaced by user host controller.                                                |
| J4       | Open*            | Logic voltage (V L ) supplied from USB2GPIO board (3.3V). Use an external source between V L and GND (TP12) if another host controller is used. |
| J7       | Open*            | Internal 3.3V V A regulator enabled.                                                                                                            |
| J7       | 1-2              | Internal V A regulator disabled (REGEN = GND). Use an external V A source between V A test point and GND (TP7).                                 |

* Default configuration

│

## MAX14917 Evaluation Kit

## Detailed Description of Software

The MAX14917 GUI provides access to all registers and allows  full  configuration  and  control  of  the  MAX14917. There  are  two  tabs  available  to  control  the  EV  kit.  The System tab provides system-level control of the selected output  pins,  including  static  and  dynamic  control.  The Register Settings tab control of special features, such as Cycle  Redundancy  Check  (CRC)  and  enabling  SYNCH and/or SPI watchdogs, as well as SDO Diagnostic result.

## System Tab

The System tab  allows  driving  the  output  pins  by configuring each output either On, Off, or driving squarewave  frequency  from  the  pull-down  menu  as  shown  in Figure 3.

Click the Drive Pins button on the right side of the GUI to drive the outputs. The indicators connected to the OUT\_ pins show the state of each output.

Connect the oscilloscope probe to OUT\_ test points on the EV kit to see the output signal in real-time.

Figure 3. System Tab. Output Configuration

<!-- image -->

## MAX14917 Evaluation Kit

## Register Settings Tab

The Register Settings tab allows detailed configuration of the device to explore all the available features (refer to Figure 4). The full  register  map  table  of  the  MAX14917 is  located  on  the  left  side  of  the  tab,  and  the  bit-by-bit control and description table is located on the right side. When the register is selected in the register map table, the  detailed  description  of  each  bit  is  shown  on  the right  table. The  register  setting  can  be  changed  directly in  the  register  map  table  by  double  clicking  the  Value cell.  Each  data  entry  should  be  followed  by  the  'Enter/ Return' button on the keyboard. The Value cell accepts binary (0b), decimal, or hex (0x) numbers. The modified register changes its color from black to red until the data is actually written to the register. The data in the right table can be changed using drop-down menus in the Setting cell for each bit individually. Both tables are synchronized so that changes made in one table appear in both tables. There  are  several  write  and  read  options  available through the corresponding control buttons located below the register bit-by-bit description table.

- When the Auto Write button is selected, any data typed in, or selected through the Setting pulldown menu is automatically written into the corresponding writable register. The button renamed to Stop Auto Write and auto write function can be canceled by clicking on this button a second time.

The Write Selected button allows a write to the selected register  only,  while  the Write  Modified button  performs write operations to all modified registers after each click.

The  GUI  provides    I/O  pin  controls  and  status  box  of per-bit  diagnostic  results    after  each  SPI  write  or  read operation below the buttons. The EN slider allows enable or  disable  OUTs,  CRCEN  enables  or  disables  errordetecting code to be added to each SPI transaction, and the SYNCH slider allows manual synchronization of multiple settings. The SYNCHWD and SPIWD sliders allow to enable respective watchdog timer.

Each  SPI  transaction  is  displayed  in  the Device  Mode Info box for user convenience.

Figure 4. Register Settings Tab

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14917EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX14917 EV Kit Bill of Materials

|   ITEM | REF_DES                   | DNI/DNP   |   QTY | MFG PART #                                                                                           | MANUFACTURER                                | VALUE                                                                              | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|---------------------------|-----------|-------|------------------------------------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1                        | -         |     1 | C3225X7S1H106K250AB; CGA6P3X7S1H106K250AB; GCM32EC71H106K                                            | TDK;TDK;MURATA                              | 10UF                                                                               | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                |            |
|      2 | C2, C6                    | -         |     2 | GMK212B7105KG; GRM219R7YA105KA12                                                                     | TAIYO YUDEN;MURATA                          | 1.0UF                                                                              | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R                   |            |
|      3 | C3                        | -         |     1 | CGA4J1X7S1C106K125; GCM21BC71C106KE35                                                                | TDK;MURATA                                  | 10UF                                                                               | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                          |            |
|      4 | C4, C5                    | -         |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA; 06031C104KAT2A;GRM188R72A104K | YAGEO;MURATA;MURATA; TAIYO YUDEN;AVX;MURATA | 0.1UF                                                                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
|      5 | C7-C14                    | -         |     8 | CGA3EANP02A103J080AC                                                                                 | TDK                                         | 0.01UF                                                                             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO               |            |
|      6 | D1                        | -         |     1 | SMBJ36A-E3                                                                                           | VISHAY GENERAL SEMICONDUCTOR                | 36V                                                                                | DIODE; TVS; SMB (DO-214AA); VRM=36V; IPP=10.3A                                                                           |            |
|      7 | DS1-DS8                   | -         |     8 | LGL29K-G2J1-24-Z                                                                                     | OSRAM                                       | LGL29K-G2J1-24-Z                                                                   | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                     |            |
|      8 | DS9                       | -         |     1 | LTST-C171GKT                                                                                         | LITE-ON ELECTRONICS INC.                    | LTST-C171GKT                                                                       | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=5.0V; IF=0.12A; -55 DEGC TO +85 DEGC                                        |            |
|      9 | DS10-DS19                 | -         |    10 | LS L29K-G1J2-1-Z                                                                                     | OSRAM                                       | LS L29K-G1J2-1-Z                                                                   | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                            |            |
|     10 | J1, J2                    | -         |     2 |                                                                                                      | 3267 POMONA ELECTRONICS                     | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                       |            |
|     11 | J4, J7, J8                | -         |     3 | PCC02SAAN                                                                                            | SULLINS                                     | PCC02SAAN                                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |            |
|     12 | J5                        | -         |     1 | 68021-220HLF                                                                                         | AMPHENOL ICC                                | 68021-220HLF                                                                       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BERGSTIK II BREAKAWAY HEADER; RIGHT ANGLE; 20PINS;                             |            |
|     13 | J6                        | -         |     1 | PBC08DAAN                                                                                            | SULLINS ELECTRONICS CORP.                   | PBC08DAAN                                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                        |            |
|     14 | J9, J10                   | -         |     2 | OSTTE080104                                                                                          | ON-SHORE TECHNOLOGY INC.                    | OSTTE080104                                                                        | CONNECTOR; MALE; THROUGH HOLE; TERMINAL BLOCKS-WIRE TO BOARD; STRAIGHT; 8PINS                                            |            |
|     15 | R1, R5                    | -         |     2 | CRCW060310K0FK;ERJ-3EKF1002                                                                          | VISHAY DALE;PANASONIC                       | 10K                                                                                | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                       |            |
|     16 | R3, R4, R15, R17, R18     | -         |     5 | CRCW06031K00FK;ERJ-3EKF1001                                                                          | VISHAY DALE;PANASONIC                       | 1K                                                                                 | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                        |            |
|     17 | R6                        | -         |     1 | ERJ-3EKF28R0                                                                                         | PANASONIC                                   |                                                                                    | 28 RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |            |
|     18 | R11, R12, R14, R16        | -         |     4 | CRCW06035K60FK                                                                                       | VISHAY DALE                                 | 5.6K                                                                               | RESISTOR, 0603, 5.6K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                  |            |
|     19 | R13                       | -         |     1 | CRCW060324K9FK;ERJ-3EKF2492                                                                          | VISHAY DALE;PANASONIC                       | 24.9K                                                                              | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |            |
|     20 | SPACER1-SPACER4           | -         |     4 |                                                                                                      | 9032 KEYSTONE                               | 9032 HOLE                                                                          | MACHINE FABRICATED; ROUND-THRU SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                     |            |
|     21 | SU2                       | -         |     1 | S1100-B;SX1100-B;STC02SYAN                                                                           | KYCON;KYCON;SULLINS ELECTRONICS CORP.       | SX1100-B                                                                           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |            |
|     22 | TP1                       | -         |     1 |                                                                                                      | 5010 KEYSTONE                               | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |            |
|     23 | TP2, TP7, TP12, TP21-TP23 | -         |     6 |                                                                                                      | 5011 KEYSTONE                               | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
|     24 | TP4-TP6, TP8              | -         |     4 |                                                                                                      | 5004 KEYSTONE                               | N/A                                                                                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |
|     25 | TP9-TP11                  | -         |     3 |                                                                                                      | 5005 KEYSTONE                               | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
|     26 | TP13-TP20                 | -         |     8 |                                                                                                      | 5013 KEYSTONE                               | N/A                                                                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     27 | U1                        | -         |     1 | MAX14917AFM+                                                                                         | MAXIM                                       | MAX14917AFM+                                                                       | EVKIT PART - IC; SWTC; SPI CONTROLLED OCTAL HIGH-SIDE SWITCH;                                                            |            |
|     28 | PCB                       | -         |     1 | MAX14917                                                                                             | MAXIM                                       | PCB                                                                                | PCB:MAX14917                                                                                                             | -          |
|     29 | SU3, SU5                  | DNI       |     2 | S1100-B;SX1100-B;STC02SYAN                                                                           | KYCON;KYCON; SULLINS ELECTRONICS CORP.      | SX1100-B                                                                           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |            |
|     30 | R7-R10, R19-R22           | DNP       |     0 | CRCW0603499KFK;ERJ-3EKF4993                                                                          | VISHAY DALE;PANASONIC                       | 499K                                                                               | RESISTOR; 0603; 499K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                   |            |

Evaluates: MAX14917

## MAX14917 EV Kit Schematic

<!-- image -->

## MAX14917 EV Kit PCB Layout Diagrams

MAX14917 EV Kit-Top Silkscreen

<!-- image -->

MAX14917 EV Kit-Layer 2

<!-- image -->

MAX14917 EV Kit-Top Layer

<!-- image -->

MAX14917 EV Kit-Layer 3

<!-- image -->

│

## MAX14917 EV Kit PCB Layout Diagrams (continued)

MAX14917 EV Kit-Bottom Layer

<!-- image -->

MAX14917 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14917 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied  0a[iP ,nteJrated reserYes tKe riJKt to cKanJe tKe circuitry and specifications ZitKout notice at any tiPe

│

Evaluates: MAX14917