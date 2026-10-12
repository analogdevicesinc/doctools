<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX20345

## General Description

The MAX20345 evaluation system (EV system) is a fully assembled and tested circuit board that demonstrates the MAX20345 ultra low-power wearable power management integrated circuit (PMIC).

The MAX20345 is a battery-charge-management solution ideal  for  low-power  wearable  applications.  The  device includes voltage regulators such as bucks, boost, buckboost, and linear regulators, as well as a battery management solution with battery seal, linear battery charger, and smart power path selector.

The MAX20345 EV system comes with the MAX20345\_ SYS\_EVKIT\_B board, the  PICO2PMB# board,  and  two micro-B cables.  The EV system has the MAX20345AEWN+ installed. The device is configurable through an I 2 C interface  that  allows  for  programming  various  functions  and reading  the  device  status.  The  application  sends  commands to the MAXPICO2PMB USB-to-I 2 C adapter board to configure the MAX20345.

## Features

- USB-Power Option
- Flexible Configuration
- On-Board Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Windows® 8/Windows 10-Compatible Graphical User Interface (GUI) Software
- Fully Assembled and Tested

## EV Kit Contents

- MAX20345\_SYS\_EVKIT\_B System
- MAXPICO2PMB# board
- Two USB A to USB micro-B cables

Windows is a registered trademark of Microsoft Corporation.

## MAX20345 Evaluation System

## PICO2PMB Adapter Board Photo

Figure 1. MAX20345\_SYS\_EVKIT\_B

<!-- image -->

## MAX20345 EV KIT Files

| FILE                       | DECRIPTION     |
|----------------------------|----------------|
| MAX20345EVKitSetupVxxx.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

## MAX20345 Evaluation System

## Quick Start

## Required Equipment

- MAX20345 EV System
- Windows PC with USB ports
- One USB A-to-USB micro-B cable and a PICO2PMB adapter board with the latest firmware
- One USB A-to-USB micro-B cable or a power supply (for battery simulation or battery voltage)
- (Optional) One USB A-to-USB Micro-B Cable or power supply (for charger input CHGIN)
- One voltmeter

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from  the  EV  system  software.  Text  which  is bold  and underlined refers  to  items  from  the  Windows  operating system.

## Procedure

The EV system is fully assembled and tested. Follow the steps to verify board operation.

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV system software, MAX20345EVKitSetupVxxx.zip, located on the MAX20345 EV system web page. Download the EV system software to a temporary folder and unzip the zip file.
- 2) Install the EV System software on your computer by running the MAX20345EVKitSetupVxxx.exe program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1 .
- 4) Connect the USB type-A end of the cable to the PC and the micro-USB end of the cable to the MAXPICO2PMB# board, then connect the MAXPICO2PMB# to J3 located on lower left of the EV kit board.
- 5) Connect the USB A to micro-B cable from the computer to J4 on the upper right corner of the EV kit board to use VBUS to power the battery simulation circuits on the board, or power the battery simulation circuits from the VHC test point. (Use a Li-ion battery or power source to evaluate the device if not using the battery simulation circuits. Connect the battery or power source to J2 on the EV kit board. Skip step 7 if not using the battery simulation.)
- 6) Use a voltmeter to check that VHC is approximately 5V and that the BATSIM test point is approximately 3.7V. To adjust the BATSIM voltage, turn the R58 BATSIM potentiometer. Place shunt on JP16, then confirm that TP1

## Evaluates: MAX20345

BAT is the set BATSIM voltage.

- 7) On the computer, open the MAX20345 Evaluation Kit Tool GUI. The status bar on the bottom of the EV Kit Took software shows 'Not Connected' as seen in Figure 2 .
- 8) In order to use the MAXPICO2PMB with the MAX20345 EV Kit Tool, click on Device on the GUI toolbar, choose the Advance option, and finally select Use MAXPICO2PMB ( Figure 2 ).
- 9) The status of the EV Kit Tool now shows 'Connected'. Upon successful connection, the device info populates in the EV kit software ( Figure 3 ).

Evaluates: MAX20345

Figure 2. Configuring the EV Kit Tool with MAXPICO2PMB Adapter Board

<!-- image -->

Figure 3. General Tab, MAX20345\_SYS\_EVKIT\_B is Connected to EV Kit Tool

<!-- image -->

## MAX20345 Evaluation System

## Detailed Description of Software

## Software Startup

After opening the application, make sure that 'Connected' is shown in the status strip at the bottom of the window. If any other message is displayed, check all connections, and verify that the steps in the Procedure section were followed in the correct order.

At startup, the user is presented with the General tab. This tab shows some basic information about the MAX20345 and provides access to general configuration options.

The Read All button reads all the configuration registers that are visible on the current tab page.

All configuration tabs have an Interrupt and Status section that shows the user the state of the status registers and their corresponding interrupts. By checking or unchecking the Mask option,  the  user  can  control  which  interrupts cause  the  INT  output  to  be  pulled  low  when  asserted. Clicking the Read Interrupts button reads and clears the interrupts  visible  in  the  current  tab.  Asserted  interrupts are denoted by bold text in the Interrupt Name field. All statuses are polled every 500ms. The polling feature can be disabled in the Options section  of  the  menu  bar  by selecting Disable Polling .

Evaluates: MAX20345

In the general tab, the user can adjust the input current limit,  adjust  the  minimum  SYS  voltage,  configure  the MON Mux, see the MPC/PFN input states, and more.

The  tabs  along  the  top  provide  access  to  configurations and status information for the Li+ charger and the five  voltage  regulators.  The Register Map tab  provides access to all I 2 C configuration registers, some of which are not available in other tabs.

Detailed descriptions of all configuration registers can be found in the MAX20345 datasheet.

## Charger Tab

The Charger tab  contains  configuration  options  for  the Li+ battery charger. The Charger configuration tab layout is shown in Figure 4 .

The Charger tab is much like all other tabs; the write command is sent immediately when the state of the toggle, dropdown, or button changes. From the Charger tab, the user can enable/disable the charger and adjust any of the charger settings like the battery regulation threshold, the precharge voltage threshold, etc.

Detailed descriptions of all registers in the Charger configuration tab can be found in the MAX20345 datasheet.

Figure 4. Charger Tab

<!-- image -->

│

## MAX20345 Evaluation System

## Regulator Tabs

The Buck 1-3 , Buck-Boost , LDOs , and Load Switches tabs contain configuration options for the voltage regulators and load switches. All regulator tabs share the same basic  layout.  The Buck 1 configuration  tab  is  shown  in Figure 5 .

From the regulator tabs, the user can enable/disable the regulator, adjust the regulator voltage, adjust the inductor peak current, and configure the various operation modes of the regulator.

Evaluates: MAX20345

Changing  a  register  setting  is  as  easy  as  clicking  the corresponding toggle or radio button. The I 2 C write command is sent immediately when the state of the toggle, dropdown, or button changes.

The  output  voltage  and  peak  current  settings  can  be changed by adjusting the slider  or  by  simply  typing  the voltage or current in the text box. The I 2 C write command is sent when the user clicks the Set button.

Detailed descriptions of all regulator configuration registers can be found in the MAX20345 data sheet.

Figure 5. Buck 1 Tab

<!-- image -->

│

## MAX20345 Evaluation System

## Register Map Tab

The Register Map tab allows for the configuration of all I 2 C  registers,  including  those  not  configurable  in  other tabs. This tab can be resized or maximized to make reading the register descriptions easier. The Register Map tab layout is shown in Figure 6 .

The register to be read from or written to can be selected in  the I 2 C  Registers table.  The  right  table  contains descriptions  for  each  bit  of  the  selected  8-bit  register. At the bottom of the page, all register bits are displayed along with their field names. To set a bit, click the bit label. Bold text represents logic 1 and regular text represents Evaluates: MAX20345

logic  0.  To  commit  the  changes  to  the  device,  click  the Write button in the bottom right of the tab page.

To read or write I 2 C registers that are not included in the register map, select Device from the menu bar at the top of  the  application.  Navigate  to Advanced &gt; I 2 C  Read/ Write to  open  the  generic  I 2 C  Read/Write  window.  To write to a register, enter the 8-bit slave address (including a LSB of zero for the write bit) and the register address in hex then click Write . To read from a register, enter the 8-bit slave address (including a LSB of zero even though it  is  a  read)  and  the  register  address  in  hex  and  click Read .

Figure 6. Register Map Tab

<!-- image -->

│

## MAX20345 Evaluation System

## Detailed Description of Hardware

To use the EV kit with the EV kit software, connect the MAXPICO2PMB#  to  the  PMOD  connector  in  the  bottom left corner of the board. The MAXPICO2PMB# also provides 3.3V to the logic voltage VIO of the EV kit when shunting JP2. Use the JP2 USB VBUS to power the battery simulation circuits on the EV kit to supply BAT of the IC. Turning the R58 (BATSIM) potentiometer can change the BATSIM voltage. Connect BATSIM to BAT of the IC with shunt on JP16. Alternatively, instead of using battery simulation  circuits  on  the  board,  connect  a  Li-ion  battery on J2 connector. Use the J1 USB VBUS as CHGIN source and place shunt on JP3.

## PFNs and MPCs States

The  PFNs  and  MPCs  can  be  pulled  up  to  VIO  or  connected to ground through a 100kΩ resistor.

## Regulators and Peripherals

All  regulator  outputs  are  made  available  on  test  points. The inputs to the LDO1, LDO2, LDO3, Load Switch 1, and Load Switch 2 must be supplied externally through test points. Bucks, buck-boost, and boost output have sense test points which provide easy voltage measurement.

Evaluates: MAX20345

## Thermistor and SET Adjustment

When the JP13 shunt  is  installed,  THM  is  pulled  up  to TPU  through  a  10kΩ  resistor.  Header  JP14  is  used  to select  the  pull-down  resistor  for  THM.  When  pin  1  and 2  are  shunted,  potentiometer  R14  is  used  to  simulate a  thermistor  at  THM.  When  pins  2  and  3  are  shunted, a  fixed  10kΩ  resistor  is  connected  between  THM  and ground.

Header  JP12  is  used  to  select  the  resistor  for  RISET which sets the fast-charge current IFCHG. Shunting pins 1  and  2  selects  potentiometer  R63.  Change  RISET  to change  IFCHG.  Shunting  pins  2  and  3  selects  a  fixed 10kΩ resistor, which sets fast-charge current to 0.2A.

The charge current value is determined as:

I FCHG = K SET  x V SET/RSET

Where KSET has a typical value of  2000A/A  and  V SET has a typical value of +1V.

## INT and RST LED Indicators

Shunts can be installed on JP10 and JP11 to show the status of INT and RST as LED indicators DS2 and DS3. When the corresponding LED illuminates, it verifies that the active-low output is pulled low.

Figure 7. MAX20345\_SYS\_EVKIT\_B

<!-- image -->

│

## MAX20345 Evaluation System

## Table 1. Jumper Table (J1-J3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                     |
|----------|------------------|-------------------------------------------------|
| JP1      | 1-2              | SDA connect to ground                           |
| JP1      | 2-3              | SCL connect to ground                           |
| JP2      | 1-2*             | VIO connect to 3.3V from PMOD                   |
| JP3      | 1-2              | CHGIN connect to USB VBUS from J1               |
| JP4      | 1-2              | MPC3 pull up to VIO                             |
| JP4      | 2-3              | MPC3 pull down to ground                        |
| JP5      | 1-2              | MPC2 pull up to VIO                             |
| JP5      | 2-3              | MPC2 pull down to ground                        |
| JP6      | 1-2              | MPC1 pull down to ground                        |
| JP6      | 1-3              | MPC1 connect to GPIO4                           |
| JP6      | 1-4              | MPC1 pull up to VIO                             |
| JP7      | 1-2              | MPC0 pull down to ground                        |
| JP7      | 1-3              | MPC0 connect to GPIO3                           |
| JP7      | 1-4              | MPC0 pull up to VIO                             |
| JP8      | 1-2              | PFN2 pull down to ground                        |
| JP8      | 1-3              | PFN2 connect to GPIO2                           |
| JP8      | 1-4              | PFN2 pull up to VIO                             |
| JP9      | 1-2              | PFN1 pull down to ground                        |
| JP9      | 1-3              | PFN1 connect to GPIO1                           |
| JP9      | 1-4              | PFN1 pull up to VIO                             |
| JP10     | 1-2*             | INT connect to pull up VIO and DS2              |
| JP11     | 1-2*             | RST connect to pull up VIO and DS3              |
| JP12     | 1-2              | ISET connect to potentiometer                   |
| JP12     | 2-3*             | ISET connect to 10kΩ (fast-charge current 0.2A) |
| JP13     | 1-2*             | THM connect to TPU for thermistor monitoring    |
| JP14     | 1-2              | THM connect to potentiometer                    |
| JP14     | 2-3*             | THM connect to 10kΩ (50%/room zone)             |
| JP15     | 1-2*             | VHC connect to USB VBUS2 from JP3               |
| JP16     | 1-2*             | BATSIM connect to BAT                           |

*Default position.

## Table 2. Connectors Description

| CONNECTOR   | DESCRIPTION                                     |
|-------------|-------------------------------------------------|
| J1          | Connect to USB cable for CHGIN voltage          |
| J2          | Connect to battery                              |
| J3          | Connect to MAXPICO2PMB#                         |
| J4          | Connect to the USB cable for battery simulation |

Evaluates: MAX20345

│

## MAX20345 Evaluation System

## MAXPICO2PMB Firmware Update

This section covers the procedure to update the PICO2PMB Adapter  Board  with  the  latest  firmware  by programming  a  firmware  image  file (.bin) onto  the onboard MAX32625PICO microcontroller.

- 1) Put the board in maintenance mode by holding the button while the board is connecting to the computer. It might be easier to hold the button while inserting the USB cable at the computer end rather than the micro USB connector end (see Figure 8 ).
- 2) If the board enters bootloader mode successfully, the LED on the board turns red and the board appears to the computer as a USB drive named MAINTENANCE .
- 3) Drag and drop the firmware image file (.bin) into the MAINTENANCE drive and the board then installs the new firmware.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20345EVSYS# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX20345

Figure 8. Enter Maintenance Mode on the MAX32625PICO

<!-- image -->

│

## MAX20345 Evaluation System

## MAX20345 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                | DNI/DNP   |   QTY | MFG PART #                                                                                  | MANUFACTURER                             | VALUE                | DESCRIPTION                                                                                                         | COMMENTS   |
|--------|------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------|------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BATSIM, TP1, TP2, TP4-TP6, TP8, TP10-TP13, TP18-TP21, TP34, TP36, TP37 |           |    18 | 5003                                                                                        | KEYSTONE                                 | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | BBOUT_S, BK1OUT_S- BK3OUT_S, TP14, TP15                                |           |     6 | 5002                                                                                        | KEYSTONE                                 | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |            |
|      3 | C1, C4, C13                                                            |           |     3 | C1005X5R0J225K050BC; CL05A225KQ5NSN                                                         | TDK;SAMSUNG                              | 2.2UF                | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X5R; CERAMIC                                                                     |            |
|      4 | C2                                                                     |           |     1 | C1005X5R1V225K050BC                                                                         | TDK                                      | 2.2UF                | CAP; SMT (0402); 2.2UF; 10%; 35V; X5R; CERAMIC                                                                      |            |
|      5 | C5                                                                     |           |     1 | C1005X7S1A225K050BC                                                                         | TDK                                      | 2.2UF                | CAP; SMT (0402); 2.2UF; 10%; 10V; X7S; CERAMIC                                                                      |            |
|      6 | C6-C9, C11, C18, C20, C40                                              |           |     8 | GRM155R60J226ME11                                                                           | MURATA                                   | 22UF                 | CAP; SMT (0402); 22UF; 20%; 6.3V; X5R; CERAMIC;                                                                     |            |
|      7 | C10, C12, C15, C16                                                     |           |     4 | C1005X5R0J475K050BC                                                                         | TDK                                      | 4.7UF                | CAP; SMT (0402); 4.7UF; 10%; 6.3V; X5R; CERAMIC                                                                     |            |
|      8 | C23, C27                                                               |           |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L | MURATA;MURATA;MURATA; TAIYO YUDEN;MURATA | 4.7UF                | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                      |            |
|      9 | C24                                                                    |           |     1 | C1608X5R1H104K080AA                                                                         | TDK                                      | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                      |            |
|     10 | C26                                                                    |           |     1 | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB                                      | KEMET;MURATA;TDK                         | 2.2UF                | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                                    |            |
|     11 | C28                                                                    |           |     1 | C0603C475K9PAC                                                                              | KEMET                                    | 4.7UF                | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                                    |            |
|     12 | C29                                                                    |           |     1 | C0402X7R500-222KNE; GRM155R71H222KA01; C1005X7R1H222K050BA                                  | VENKEL LTD.;MURATA;TDK                   | 2200PF               | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                     |            |
|     13 | C30                                                                    |           |     1 | C0603C104K8RAC                                                                              | KEMET                                    | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                      |            |
|     14 | C31                                                                    |           |     1 | C3216X5R1C476M160AB; GRM31CR61C476ME44                                                      | TDK;MURATA                               | 47UF                 | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                       |            |
|     15 | C32                                                                    |           |     1 | C3216X5R1H106K160AB; GRM31CR61H106KA12                                                      | TDK;MURATA                               | 10UF                 | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC                                                                       |            |
|     16 | C34                                                                    |           |     1 | GRM188R60J105KA01                                                                           | MURATA                                   | 1UF                  | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                                      |            |
|     17 | DS1-DS3, DS10                                                          |           |     4 | LG L29K-G2J1-24                                                                             | OSRAM                                    | LG L29K-G2J1-24      | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                             |            |
|     18 | J1, J4                                                                 |           |     2 | ZX62D-B-5P8                                                                                 | HIROSE ELECTRIC CO LTD.                  | ZX62D-B-5P8          | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                               |            |
|     19 | J2                                                                     |           |     1 | 800-10-002-10-001000                                                                        | MILLMAX                                  | 800-10-002-10-001000 | CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS                                                                    |            |
|     20 | J3                                                                     |           |     1 | PBC06DBAN                                                                                   | SULLINS ELECTRONICS CORP.                | PBC06DBAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING                     |            |
|     21 | JP1, JP4, JP5, JP12, JP14                                              |           |     5 | PBC03SAAN                                                                                   | SULLINS                                  | PBC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                    |            |
|     22 | JP2, JP3, JP10, JP11, JP13, JP15, JP16                                 |           |     7 | PBC02SAAN                                                                                   | SULLINS ELECTRONICS CORP.                | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                           |            |
|     23 | JP6-JP9                                                                |           |     4 | TSW-104-07-L-S                                                                              | SAMTEC                                   | TSW-104-07-L-S       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                   |            |
|     24 | L1-L3, L5                                                              |           |     4 | DFE201612E-2R2M                                                                             | MURATA                                   | 2.2UH                | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                       |            |
|     25 | MISC1                                                                  |           |     1 | MAXPICO2PMB#                                                                                | MAXIM                                    | MAXPICO2PMB#         | ACCESSORY; BRD; PACKOUT; MAXPICO2PMB ADAPTER BOARD                                                                  |            |
|     26 | PB1                                                                    |           |     1 | 1825910-6                                                                                   | TE CONNECTIVITY                          | 1825910-6            | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY          |            |
|     27 | R1, R2, R10, R11, R38-R40, R49, R53                                    |           |     9 | RC0402FR-0710KL                                                                             | YAGEO PHICOMP                            | 10K                  | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                   |            |

## Evaluates: MAX20345

## MAX20345 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                             | DNI/DNP   |   QTY | MFG PART #                  | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                                                                                             | COMMENTS   |
|--------|-----------------------------------------------------|-----------|-------|-----------------------------|---------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 28     | R6, R13, R15, R16                                   | -         |     4 | ERJ-2RKF1001                | PANASONIC                             | 1K            | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                        |            |
| 29     | R8, R9, R12, R42                                    | -         |     4 | CRCW0402499RFK              | VISHAY DALE                           |               | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                   |            |
| 30     | R14, R63                                            | -         |     2 | PV36Y105C01B00              | MURATA                                | 1M            | RESISTOR; THROUGH-HOLE-RADIAL LEAD; PV36 SERIES; 1M OHM; 10%; 100PPM; 0.5W; TRIMMER POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                                                             |            |
| 31     | R17-R21, R23-R27, R34, R35, R45, R46, R48, R50, R57 | -         |    17 | ERJ-2GEJ104                 | PANASONIC                             | 100K          | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                                      |            |
| 32     | R51                                                 | -         |     1 | ERJ-2GE0R00                 | PANASONIC                             |               | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                           |            |
| 33     | R52                                                 | -         |     1 | ERJ-2RKF5100                | PANASONIC                             |               | 510 RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                   |            |
| 34     | R54, R56                                            | -         |     2 | WSL0805R1000FEA18           | VISHAY DALE                           |               | 0.1 RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                                                                    |            |
| 35     | R58                                                 | -         |     1 | 3296Y-1-253LF               | BOURNS                                | 25K           | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                                                    |            |
| 36     | R59                                                 | -         |     1 | ERJ-2RKF1152                | PANASONIC                             | 11.5K         | RES; SMT (0402); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                     |            |
| 37     | R61                                                 | -         |     1 | CRCW04023K40FK              | VISHAY DALE                           | 3.4K          | RES; SMT (0402); 3.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                      |            |
| 38     | SPACER1-SPACER4                                     | -         |     4 | 9032                        | KEYSTONE                              |               | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                          |            |
| 39     | SU1-SU16                                            | -         |    16 | S1100-B;SX1100-B; STC02SYAN | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                 |            |
| 40     | TP9, VHC                                            | -         |     2 | 5000                        | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                        |            |
| 41     | TP22-TP33                                           | -         |    12 | 5001                        | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                      |            |
| 42     | U1                                                  | -         |     1 | MAX20345AEWN+               | MAXIM                                 | MAX20345AEWN+ | EVKIT PART - IC; PMIC WITH ULTRA- LOW IQ VOLTAGE REGULATORS; OHR DRIVER AND CHARGER FOR SMALL LITHIUM ION SYSTEMS; WLP 56 PINS; 0.4MM PITCH; PACKAGE CODE: W563H3+1; PACKAGE OUTLINE DRAWING: 21-100260 |            |
| 43     | U2                                                  | -         |     1 | OPA569AIDWPR                | TEXAS INSTRUMENTS                     | OPA569AIDWPR  | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                                                                                           |            |
| 44     | U3                                                  | -         |     1 | MAX8880EUT+                 | MAXIM                                 | MAX8880EUT+   | IC; VREG; ULTRA-LOW-IQ LOW- DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                                                                  |            |
| 45     | U4                                                  | -         |     1 | NC7WZ07P6X                  | FAIRCHILD SEMICONDUCTOR               | NC7WZ07P6X    | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                                                                                |            |
| 46     | PCB                                                 | -         |     1 | MAX20345SYS                 | MAXIM                                 | PCB           | PCB:MAX20345SYS                                                                                                                                                                                         | -          |
| 47     | MISC2-MISC4                                         | DNI       |     3 | 3025010-03                  | QUALTEK ELECTRONICS CORP              | 3025010-03    | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                                                                                                           |            |
| TOTAL  | TOTAL                                               | TOTAL     |   166 |                             |                                       |               |                                                                                                                                                                                                         |            |

## MAX20345 Evaluation System

## MAX20345 EV Kit Schematics

<!-- image -->

## MAX20345 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX20345

## MAX20345 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX20345

## MAX20345 Evaluation System

## MAX20345 EV Kit PCB Layouts

MAX20345 EV Kit PCB Layout -Silk Top

<!-- image -->

MAX20345 EV Kit PCB Layout -Layer 2

<!-- image -->

## Evaluates: MAX20345

MAX20345 EV Kit PCB Layout -Top

<!-- image -->

MAX20345 EV Kit PCB Layout -Layer 3

<!-- image -->

│

## MAX20345 Evaluation System

## MAX20345 EV Kit PCB Layouts (continued)

MAX20345 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX20345 EV Kit PCB Layout -Layer 5

<!-- image -->

MAX20345 EV Kit PCB Layout -Bottom

<!-- image -->

│

## MAX20345 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/21           | Release for Market Intro | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX20345