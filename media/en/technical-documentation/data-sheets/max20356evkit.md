<!-- lastmod 2025-04-04 -->
<!-- image -->

## Evaluates: MAX20356/MAX20358

## General Description

The MAX20356 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX20356/MAX20358 power-management solution designed for ultra-low-power wearable applications.

A  flexible set of  power-optimized  voltage  regulators, including 3 x buck converters, a buck-boost converter, 4 x linear  regulators,  including  an  RTC  LDO,  and  3  x  load switches, provide a high level of integration and the ability to create a fully optimized power architecture. Refer to the MAX20356/MAX20358 IC data sheet for detailed information  regarding  the  operation  and  features  of  the devices.

The device is configurable through an I 2 C interface that allows  for  programming  various  functions  and  reading device status. The EV kit GUI application sends commands  to  the  MAXPICO2PMB#  adapter  board  to configure the device.

The  EV  kit  comes  standard  with  the  MAX20356  EV  kit version IC installed.

## Features

- USB-Power Option
- Flexible Configuration
- On-Board Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Windows ®  8/Windows 10-Compatible Graphical User Interface (GUI) Software
- Fully Assembled and Tested

## EV KIT Contents

- MAX20356\_EVKIT\_A System
- MAXPICO2PMB# board
- Two USB A to USB micro-B cables

## MAX20356 EV Kit Files

| FILE                       | DESCRIPTION    |
|----------------------------|----------------|
| MAX20356EVKitSetupVxxx.exe | PC GUI Program |

computer

Ordering Information appears at end of data sheet.

## MAX20356 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20356 EV kit
- Windows PC with USB ports
- One  USB  A-to-USB  Micro-B  cable  and  PICO2PMB adapter board with the latest firmware
- One USB A-to-USB Micro-B cable or power supply (for battery simulation or battery voltage)
- One USB A-to-USB Micro-B cable or power supply (for charger)
- One voltmeter

Note : In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV  kit software. Text which  is bold  and underlined refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  install  the  EV  kit  software,  make  required  hardware connections, and start operation of the kit.

1. Visit www.maximintegrated/evkitsoftware under the Tools  and  Simulations  tab  to  download  the  latest version of the MAX20356 EV kit software. MAX20356EVKitSetupVxxx.zip is located on the MAX20356 EV kit web page. Save the software to a temporary folder and unpack the zip file.
2. Install the EV kit software on the computer by running the MAX20356EVKitSetupVxxx.exe program  inside the temporary folder. This copies the program files and creates  an  icon  in  the  Windows Start menu.  The software requires the .NET Framework 4.5 or later. If connected  to the internet,  Windows  automatically updates the .NET Framework as needed.
3. The  EV  kit  software launches  automatically after installation,  and  it  can  be  launched  by clicking on its icon in the Windows Start menu.
4. Verify that all jumpers are in their default positions, as shown in Table 1 .
5. Make  sure  JP7  and  JP20  are  not  installed  until  all connections have been verified.
6. Connect the type-A end of a cable to the PC and the micro-USB  end  of  a  cable  to  the  MAXPICO2PMB# board, and connect the MAXPICO2PMB# to J3 located on the top left of the EV kit board.

## Evaluates: MAX20356/MAX20358

7.  Connect a USB A to micro-B cable from the computer to J7 on the upper left corner of the EV kit board to use VBUS2 to power the battery simulation circuits on the board.
8.  Reinstall JP7 and JP20.
9.  Use a voltmeter to check VSIM test point is approximately 5V; BATSIM test point is approximately 3.7V. To adjust the BATSIM voltage, connect DMM to BATSIM TP and turn the R58 BATSIM potentiometer.
10.  On the computer, open the MAX20356 GUI. The status bar  at  the  bottom  shows MAX20356 Not Found, as shown in Figure 1 . The IC is in Seal mode.
11.  Set DMM to measure voltage and connect the positive lead to TP6, SYS and ground lead to any GND TP.

## MAX20356 EV Kit Photo

## MAX20356 Evaluation Kit

12.  Hold PFN1 button for ~4s to power on the device and measure VSYS ~ 3.7V
13.  The MAX20356EVKIT should be powered on, and the status of the EV kit Tool now shows Connected , and the registers are read and displayed Figure 2.
14.  The EV kit is now ready for additional evaluation.
15.  To evaluate the battery charger, shunt J4 and plug in the USB micro-B cable to J1 of the EV kit to use USB VBUS power, or externally supply the charging power on TP4 CHGIN.

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

Figure 1. MAX20356 Not Found Status

<!-- image -->

Figure 2. Connected Status

<!-- image -->

## Evaluates: MAX20356/MAX20358

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the IC device addresses. The EV kit enters the normal operating mode when the connection is established and addresses are found. If the USB connection is not detected, the status bar displays Not Connected . If the USB connection is detected, but the MAX20356 is not found, the status bar shows MAX20356 Not Found.

## ToolStrip Menu Bar

The ToolStrip menu bar ( Figure 3 ) is located at the top of the GUI window. This bar comprises File , Device , Options , and Help menus; each function is detailed in the following sections.

Wearable Power Management Solution (MAX20356) EV Kit Tool

File

Device

Options

Help

Figure 3. The ToolStrip Menu Items

<!-- image -->

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV kit to the GUI. The Advanced → I2C Read/Write menu allows the user to read from or write to a selected register with a specified slave address. The Advanced → Use USB2PMB2# option should be checked if using with the USB2PMB2# adapter board.

## Options Menu

The Options menu provides several settings to access additional features offered by the GUI. The Disable Polling option allows  registers  to  be  read  manually  instead  of  receiving  automatic  frequent  register  updates  from  the  IC.  The Lock/Unlock option allows for the lock or unlock of the bucks, buck-boost, LDOs, LSWs, charger, watchdog, and rail sequence through I 2 C.

## Help Menu

The Help menu contains the About option, which displays the GUI splash screen indicative of the GUI version being used.

## Tab Controls

The MAX20356 EV kit software GUI provides a convenient way to test the features of the MAX20356. Each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write operation to the MAX20356 to update the register contents. The Read All button reads all the configuration registers that are visible on the current tab page. The Interrupts and Status section in each tab shows the state of the status registers and their corresponding interrupts. Checking or unchecking the Mask option controls which interrupts cause the INT output to be pulled low when asserted.

Click the Read Interrupts button to read and clear the interrupts visible in the current tab. Asserted interrupts are denoted by bold text in the Interrupt Name . All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## MAX20356 Evaluation Kit

## Evaluates: MAX20356/MAX20358

## General Tab

The General tab ( Figure 4 ) provides information on device info, PFNs and MPCs status, and configuration. Charger input current and voltage limit setting, IVMON setting, power commands, and some general interrupts and status are also found under this tab.

Figure 4. General Tab

<!-- image -->

## Charger Tab

The Charger tab ( Figure 5 ) provides options to set charger voltage, current, and timer in different charging states. The thermistor monitor configuration can be accessed by clicking the Advanced button.

## MAX20356 Evaluation Kit

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

Figure 5. Charger Tab

<!-- image -->

## Buck1/2/3, Buck-Boost Tab

The Buck1 , Buck2 , Buck3 , and Buck-Boost tabs ( Figure 6 , Figure 7 , Figure 8 and Figure 9 ) provide options to enable buck/buck-boost, set output voltages, inductor current settings, DVS mode, voltage setting, and some additional settings.

Figure 6. Buck1 Tab

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

Figure 7. Buck2 Tab

<!-- image -->

Figure 8. Buck3 Tab

<!-- image -->

Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

Figure 9. Buck-Boost Tab

<!-- image -->

## LDO1/2/3 and RTC LDO Tab

The LDO1 and LDO2 , and LDO3 and RTC ( Figure 10 and Figure 11 ) provide options to enable LDOs, set LDO voltage, and change other LDO settings.

Figure 10. LDO1 and LDO2 Tab

<!-- image -->

www.analog.com

Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

Figure 11. LDO3 and RTC Tab

<!-- image -->

## Load Switches Tab

The Load Switches tab ( Figure 12 ) includes Load Switch 1, Load Switch 2, and Load Switch 3 settings.

Figure 12. Load Switches Tab

<!-- image -->

## Evaluates: MAX20356/MAX20358

## Register Map Tab

The Register Map tab ( Figure 13 ) provides all names and values of the MAX20356 registers. Click Read All in the top right corner to perform a burst read of all registers.

The left table shows the register to be read from and written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To set a bit, click the bit label. Bold text represents logic 1, and regular text represents logic 0. To configure the changes to the device, click the Write button at the bottom right.

Figure 13. Register Map Tab

<!-- image -->

## Evaluates: MAX20356/MAX20358

## Detailed Description of Hardware

The MAX20356 EV kit evaluates the MAX20356 ultra-low-power wearable PMIC, which communicates over the I 2 C interface. The EV kit demonstrates the IC features such as bucks, buck-boost, linear regulators, load switches, and a battery charger. The EV kit uses the IC in a 63-bump wafer-level package on a proven, six-layer PCB design. The EV kit can use USB VBUS 5V DC for battery and charger input power source. Alternatively, the EV kit can be powered from an external power supply. Figure 14 shows the EV kit block annotated picture.

## Hardware Setup

To use the EV kit with the EV kit software, connect the MAXPICO2PMB# to the PMOD connector in the top left corner of the board. The MAXPICO2PMB# also provides 3.3V to the logic voltage VIO of the EV kit when shunting 1-2 in a JP20. The user can use the J7 USB VBUS to power the battery simulation circuits on the EV kit to supply the BAT of the IC. Turning the R58 potentiometer can change the BATSIM voltage. Connect BATSIM to the BAT of the IC with a shunt on JP9. Alternatively, instead of using battery simulation circuits on the board, the user can connect a Li-ion battery to the J2 connector. The user can use the J1 USB VBUS as a CHGIN source and place a shunt on J4.

Figure 14. MAX20356 EV Kit Block Annotated Picture

<!-- image -->

## PFNs and MPCs States

The PFNs and MPCs can be pulled up or pulled low to VIO through a 100kΩ resistor or connected to the ground through a 100kΩ resistor.

## Regulators and Peripherals

All  regulator outputs are made available on test points. The inputs to the LDOs and Load Switches can be supplied through  setting  the  corresponding  jumper  for  L\_IN  (JP25,  JP24,  and  JP26)  and  LSW\_IN  (JP27,  JP8,  and  JP22)  or

## MAX20356 Evaluation Kit

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

externally supplied through test points. The LDO1 input can be supplied from the V CCINT  of the IC if set through the I 2 C (bit LDO1IntSup). The bucks and buck-boost outputs have sense test points, which provide easy voltage measurement.

## Thermistor setup

There are two configurations to set the desired thermistor voltage level. The thermistor pin has a 10kΩ internal pullup.

To position the thermistor in the room zone, set the DMM to measure Ω and connect the positive lead to pin1 of JP3. Turn the THM POT until the DMM reads ~10kΩ.

Remove the DMM and install a shunt in position 1-2 of JP3. The register map should report that the thermistor is in the room temperature zone.

There is also a 10kΩ fixed resistor by positioning the JP3 shunt to 2 -3. This setting will put the thermistor in the room temperature zone.

## INT and RST LED Indicators

Shunts can be installed on JP1 and JP2 to show the status of INT and RST as LED indicators, DS2 and DS3. When the corresponding LED illuminates, it verifies the active-low output is pulled low.

## Jumper Setting

Table 1 shows the detailed jumper setting, and Table 2 shows the connector description.

## Table 1. Jumper Table

| JUMPER   | SHUNT POSITION   | MAX20356 DESCRIPTION               |
|----------|------------------|------------------------------------|
| JP1      | 1-2*             | INT connect to pull up VIO and DS2 |
| JP2      | 1-2*             | RST connect to pull up VIO and DS3 |
| JP3      | 1-2*             | THM connect to potentiometer       |
| JP3      | 2-3              | THM connect to 10kΩ                |
| JP4      | 1-2*             | Connects CHGOUT to CSN/RSN         |
| JP4      | 2-3              | Connects CHGOUT to RSP             |
| JP5      | 1-2              | Connects CSP/FT_TST to RSP_S       |
| JP5      | 2-3*             | Connects CSP/FT_TST to CSN/RSN     |
| JP6      | 1-2*             | Connects VIO to PMOD 3.3V          |
| JP6      | 1-3              | Connects VIO to 1.8V_LDO           |
| JP7      | 1-2*             | Connects VBUS2 to VSIM             |
| JP8      | 1-2              | Connects BK3OUT to LSW2IN          |
| JP9      | 1-2*             | Connects BATSIM to CSN/RSN         |
| JP10     | 1-2              | PFN1 pull down to ground           |
| JP10     | 1-3              | PFN1 connect to GPIO1              |
| JP10     | 1-4              | PFN1 pull up to VIO                |
| JP11     | 1-2              | PFN2 pull down to ground           |
| JP11     | 1-3              | PFN2 connect to GPIO1              |
| JP11     | 1-4              | PFN2 pull up to VIO                |
| JP12     | 1-2              | MPC0 pull down to ground           |
| JP12     | 1-3              | MPC0 connect to GPIO1              |
| JP12     | 1-4              | MPC0 pull up to VIO                |

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

| 1-2     | MPC1 pull down to ground    |
|---------|-----------------------------|
| 1-3     | MPC1 connect to GPIO1       |
| 1-4     | MPC1 pull up to VIO         |
| 1-2     | MPC2 pull up to VIO         |
| 2-3     | MPC2 pull down to ground    |
| 1-2     | MPC3 pull up to VIO         |
| 2-3     | MPC3 pull down to ground    |
| 1-2     | MPC4 pull up to VIO         |
| 2-3     | MPC4 pull down to ground    |
| 1-2     | MPC5 pull up to VIO         |
| 2-3     | MPC5 pull down to ground    |
| 1-2     | MPC6 pull up to VIO         |
| 2-3     | MPC6 pull down to ground    |
| 1-2     | MPC7 pull up to VIO         |
| 2-3     | MPC7 pull down to ground    |
| 1-2*    | Selects 3.3V from 3.3V_PMOD |
| 2-3     | Selects 3.3V from 3.3V_LDO  |
| 1-2     | USB VBUS2 connects to 5V TP |
| 1-2     | Connects BK2OUT to LSW3IN   |
| 1-2     | Connects LDO1_2 to L1OUT    |
| 2-3     | Connects LDO1_2 to L2OUT    |
| 1-2     | Connects L2IN to BK1OUT     |
| 2-3     | Connects L2IN to SYS        |
| 1-2     | Connects L1IN to SYS        |
| 1-2     | Connects L3IN to SYS        |
| 1-2     | Connects LSW1IN to BK3OUT   |
| 1-2     | Reserved for future (RFU)   |
| 1-2     | RFU                         |
| 1-2     | RFU                         |
| 1-2     | RFU                         |
| 2-3 1-2 | RFU RFU                     |
| 1-2     |                             |
|         | RFU                         |
| 2-3     | RFU                         |
| 1-2     | RFU                         |
| 1-2     | RFU                         |
| 2-3     | RFU                         |
| 1-2     | RFU                         |

*Default position.

Evaluates: MAX20356/MAX20358

Table 2. Connector Description

| CONNECTOR                                                            | DESCRIPTION                                                          |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| J1                                                                   | Connect to USB cable for CHGIN voltage                               |
| J2                                                                   | J2 Connect to battery                                                |
| J3                                                                   | Connect to MAXPICO2PMB#                                              |
| J4                                                                   | Connect to the VBUS1 to CHGIN. Install to use CHGIN                  |
| J5                                                                   | 1 Connects to BBOUT                                                  |
| J5                                                                   | 2 Connects to LDO1_2 selector                                        |
| J5                                                                   | 3 Connects to L3OUT                                                  |
| J6                                                                   | 1 Connects to MPC7                                                   |
| J6                                                                   | 2 Connects to MPC6                                                   |
| J6                                                                   | 3 Connects to SYS                                                    |
| J7 Connect to the USB cable for battery simulation and 5V connection | J7 Connect to the USB cable for battery simulation and 5V connection |
| J8                                                                   | 1 Connects to SDA                                                    |
| J8                                                                   | 2 Connects to GND                                                    |
| J8                                                                   | 3 Connects to SCL                                                    |

## Evaluates: MAX20356/MAX20358

## MAXPICO2PMB Firmware Update

This section covers the procedure to update the PICO2PMB Adapter Board with the latest firmware by programming a firmware image file (.bin) onto the on-board MAX32625PICO microcontroller.

Put the board in maintenance mode by holding the button while the board is connected to the computer. It may be easier to  hold  the  button  while  inserting  the  USB  cable  at  the  computer  end  rather  than  the  micro-USB  connector  end (see Figure 15 ).

Figure 15.  Enter Maintenance Mode on the MAX32625PICO.

<!-- image -->

If the board enters bootloader mode successfully, the LED on the board turns red, and the board appears to the computer as a USB drive named MAINTENANCE .

Drag and drop the firmware image file (.bin) into the MAINTENANCE drive, and the board installs the new firmware.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20356EVKIT# | EV Kit |

#Denotes RoHS-compliance.

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                        | DNI/ DNP   |   QTY | MFG PART #                            | MANUFA CTURER           | VALUE   | DESCRIPTION                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------|------------|-------|---------------------------------------|-------------------------|---------|------------------------------------------------------------------------------------------------------------------------|
|      1 | 5V                                                                                                                             | -          |     1 | 5010                                  | KEYSTO NE               | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                  |
|      2 | 60, R74, R88, R144, R167                                                                                                       | -          |     5 | ERJ- 2RKF4703                         | PANASO NIC              | 470K    | RES; SMT (0402); 470K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                    |
|      3 | AIN5-AIN7, BBOUT_S, BK1OUT_S- BK3OUT_S, TP4-TP13, TP55-TP57, VIL_BBOUT, VIL_BK1L3 OUT, VIL_BK2L1 OUT, VIL_BK3L2 OUT, VIL_RTC_L | -          |    25 | 5002                                  | KEYSTO NE               | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                  |
|      4 | BATSIM, TP2, TP3, TP14-TP18                                                                                                    | -          |     8 | 5003                                  | KEYSTO NE               | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
|      5 | C1, C5, C9, C10, C12, C13, C15, C16                                                                                            | -          |     8 | C1005X7S1A 225K050BC                  | TDK                     | 2.2UF   | CAP; SMT (0402); 2.2UF; 10%; 10V; X7S; CERAMIC                                                                         |
|      6 | C2                                                                                                                             | -          |     1 | C1005X5R1V 225K050BC                  | TDK                     | 2.2UF   | CAP; SMT (0402); 2.2UF; 10%; 35V; X5R; CERAMIC                                                                         |
|      7 | C3                                                                                                                             | -          |     1 | C1005X5R0J 225K050BC; CL05A225K Q5NSN | TDK;SAM SUNG            | 2.2UF   | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X5R; CERAMIC                                                                        |
|      8 | C4, C18                                                                                                                        | -          |     2 | C1005X5R0J 475K050BC                  | TDK                     | 4.7UF   | CAP; SMT (0402); 4.7UF; 10%; 6.3V; X5R; CERAMIC                                                                        |
|      9 | C6-C8, C11, C14, C17, C19, C20                                                                                                 | -          |     8 | GRM158R61 A226ME15                    | MURATA                  | 22UF    | CAP; SMT (0402); 22UF; 20%; 10V; X5R; CERAMIC ;                                                                        |
|     10 | C21, C22, C32, C39, C40, C47, C48, C55, C56, C87, C88, C96, C104, C105, C109, C112,                                            | -          |    18 | ANY                                   | ANY                     | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
|     11 | C23, C27                                                                                                                       | -          |     2 | GRM31CR71 H475KA12;G RJ31CR71H        | MURATA; MURATA; MURATA; | 4.7UF   | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                         |

www.analog.com

Analog Devices | 16

## MAX20356 Evaluation Kit

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

|    |                                                   |    |    | 475KE11;GX M31CR71H4 75KA10;UMK 316AB7475K L;GRM31CR 71H475KA12 L;CC1206KK X7R9BB475; CC1206KKX 7R9BB475   | TAIYO YUDEN; MURATA; YAGEO   |         |                                                                                                                       |
|----|---------------------------------------------------|----|----|------------------------------------------------------------------------------------------------------------|------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------|
| 12 | C24                                               | -  |  1 | C1608X5R1 H104K080AA                                                                                       | TDK                          | 0.1UF   | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                        |
| 13 | C25, C106, C107                                   | -  |  3 | ANY                                                                                                        | ANY                          | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| 14 | C26                                               | -  |  1 | C0603C225K 9PAC; GRM188R60 J225KE01; C1608X5R0J 225K080AB                                                  | KEMET; MURATA; TDK           | 2.2UF   | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                                      |
| 15 | C28                                               | -  |  1 | C0603C475K 9PAC                                                                                            | KEMET                        | 4.7UF   | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                                      |
| 16 | C29                                               | -  |  1 | C0402X7R50 0- 222KNE;GR M155R71H2 22KA01;C10 05X7R1H222 K050BA                                             | VENKEL LTD.;MU RATA;TD K     | 2200P F | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                       |
| 17 | C30                                               | -  |  1 | C0603C104K 8RAC                                                                                            | KEMET                        | 0.1UF   | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                        |
| 18 | C31                                               | -  |  1 | C3216X5R1 C476M160A B;GRM31CR 61C476ME44                                                                   | TDK;MU RATA                  | 47UF    | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                         |
| 19 | C33, C41, C49, C57, C89                           | -  |  5 | ANY                                                                                                        | ANY                          | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      |
| 20 | C34                                               | -  |  1 | GRM188R60 J105KA01                                                                                         | MURATA                       | 1UF     | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                                        |
| 21 | C35, C42, C43, C50, C51, C58, C59, C90, C91, C102 | -  | 10 | GRM155R71 H102JA01;G CM155R71H 102JA37                                                                     | MURATA; MURATA               | 1000P F | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                        |
| 22 | C36, C44, C52, C60, C92                           | -  |  5 | ANY                                                                                                        | ANY                          | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR |
| 23 | C37, C38, C45, C46, C53, C54,                     | -  | 13 | C0402C472J 5RAC                                                                                            | KEMET                        | 4700P F | CAP; SMT (0402); 4700PF; 5%; 50V; X7R; CERAMIC                                                                        |

www.analog.com

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

|    | C61-C63, C86, C93, C110, C238                  |    |    |                                          |                            |                        |                                                                                                                   |
|----|------------------------------------------------|----|----|------------------------------------------|----------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------|
| 24 | C64, C103                                      | -  |  2 | C1005X5R1A 475K050                       | TDK                        | 4.7UF                  | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                    |
| 25 | C94, C95                                       | -  |  2 | GRM155R61 C104KA88                       | MURATA                     | 0.1UF                  | CAP; SMT (0402); 0.1UF; 10%; 16V; X5R; CERAMIC                                                                    |
| 26 | C97-C100                                       | -  |  4 | C0402C105K 8PAC;CC040 2KRX5R6BB 105      | KEMET;Y AGEO               | 1UF                    | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                      |
| 27 | C101, C111                                     | -  |  2 | GRM155R71 A104JA01                       | MURATA                     | 0.1UF                  | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                                                     |
| 28 | C108                                           | -  |  1 | C3216X5R1 H106K160AB ;GRM31CR6 1H106KA12 | TDK;MU RATA                | 10UF                   | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC                                                                     |
| 29 | DS1-DS3, DS6, DS10                             | -  |  5 | LG L29K- G2J1-24                         | OSRAM                      | LG L29K- G2J1- 24      | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                           |
| 30 | DS5                                            | -  |  1 | LTST- C190CKT                            | LITE-ON ELECTR ONICS INC.  | LTST- C190C KT         | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                   |
| 31 | J1, J7                                         | -  |  2 | ZX62D-B- 5P8                             | HIROSE ELECTRI C CO LTD.   | ZX62D- B-5P8           | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                             |
| 32 | J2                                             | -  |  1 | 800-10-002- 10-001000                    | MILLMAX                    | 800-10- 002-10- 001000 | CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS                                                                  |
| 33 | J3                                             | -  |  1 | PBC06DBAN                                | SULLINS ELECTR ONICS CORP. | PBC06 DBAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING                   |
| 34 | J4, JP1, JP2, JP7- JP9, JP21, JP22, JP25- JP27 | -  | 11 | PBC02SAAN                                | SULLINS ELECTR ONICS CORP. | PBC02 SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                         |
| 35 | J5, J6                                         | -  |  2 | PEC04SBAN                                | SULLINS ELECTR ONICS CORP. | PEC04 SBAN             | CONNECTOR; MALE; THROUGH HOLE; 0.100INCH CONTACT CENTERS; MALE BREAKAWAY HEADERS; RIGHT ANGLE; NO MOUNTING; 4PINS |
| 36 | JP14-JP20, JP23, JP24, JP203, JP205, JP207     | -  | 17 | PBC03SAAN                                | SULLINS                    | PBC03 SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                  |
| 37 | JP10-JP13                                      | -  |  4 | TSW-104-07- L-S                          | SAMTEC                     | TSW- 104-07- L-S       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                 |

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

|   38 | JP200- JP202, JP204, JP206, JP208, JP209                           | -   |   7 | TSW-102-07- T-S                      | SAMTEC                                                                                       | TSW- 102-07- T-S        | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; - 55 DEGC TO +105 DEGC                                                    |
|------|--------------------------------------------------------------------|-----|-----|--------------------------------------|----------------------------------------------------------------------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|   39 | L1-L4                                                              | -   |   4 | DFE201612E -2R2M                     | MURATA                                                                                       | 2.2UH                   | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                               |
|   40 | L7                                                                 | -   |   1 | BLM18AG60 1SN1                       | MURATA                                                                                       | 600                     | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                      |
|   41 | PB1                                                                | -   |   1 | 1825910-6                            | TE CONNEC TIVITY                                                                             | 182591 0-6              | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY                                  |
|   42 | Q200-Q204                                                          | -   |   5 | IPC100N04S 5L1R1ATMA 1               | INFINEO N                                                                                    | IPC100 N04S5 L1R1A TMA1 | TRAN; OPTIMOS 5 POWER-TRANSISTOR; NCH; PG-TDSON-8-34; PD-(150W); I-(100A); V-(40V)                                                          |
|   43 | Q208                                                               | -   |   1 | FDN360P                              | ON SEMICO NDUCTO R                                                                           | FDN36 0P                | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=- 30V,VGSS=+/-20V                                                         |
|   44 | Q209                                                               | -   |   1 | 2N7002;2N7 002;2N7002; 2N7002        | DIODES INCORP ORATED; ST MICROE LECTRO NICS;ON SEMICO NDUCTO R;MICRO COMME RCIAL COMPON ENTS | 2N700 2                 | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                               |
|   45 | R1, R13, R15, R16                                                  | -   |   4 | ERJ- 2RKF1001                        | PANASO NIC                                                                                   | 1K                      | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                            |
|   46 | R3, R22, R55, R69, R83, R139                                       | -   |   6 | 9C04021A10 00FL; RC0402FR- 07100RL   | PANASO NIC;YAG EO PHYCOM P                                                                   | 100                     | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                                           |
|   47 | R4                                                                 | -   |   1 | PV36Y105C0 1B00                      | MURATA                                                                                       | 1M                      | RESISTOR; THROUGH-HOLE-RADIAL LEAD; PV36 SERIES; 1M OHM; 10%; 100PPM; 0.5W; TRIMMER POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
|   48 | R5, R10, R11, R38, R39, R49, R53, R96- R99, R174, R175, R281, R282 | -   |  15 | RC0402FR- 0710KL;CR0 402-FX- 1002GLF | YAGEO;B OURNS                                                                                | 10K                     | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                           |

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

|   49 | R6                                                   | -   |   1 | ERJ- 2LWFR010                  | PANASO NIC                        | 0.01   | RES; SMT (0402); 0.01; 1%; 0 TO +500PPM/DEGC; 0.2000W                                                                                                |
|------|------------------------------------------------------|-----|-----|--------------------------------|-----------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------|
|   50 | R7, R17- R21, R23- R35, R41, R45, R46, R48, R50, R57 | -   |  25 | ERJ- 2GEJ104                   | PANASO NIC                        | 100K   | RES; SMT (0402); 100K; 5%; +/- 200PPM/DEGC; 0.1000W                                                                                                  |
|   51 | R8, R9, R12, R100, R152                              | -   |   5 | CRCW04024 99RFK                | VISHAY DALE                       | 499    | RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
|   52 | R14, R40, R68, R82, R138                             | -   |   5 | CRCW04022 0K0FK                | VISHAY DALE                       | 20K    | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
|   53 | R36, R42, R70, R84, R140, R161, R178-R180, R286      | -   |  10 | ANY                            | ANY                               | 0      | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                                                   |
|   54 | R43                                                  | -   |   1 | CRCW04024 K70FK;MCR 01MZPF4701 | VISHAY DALE;RO HM SEMICO NDUCTO R | 4.7K   | RES; SMT (0402); 4.7K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                                  |
|   55 | R44, R72, R73, R86, R87, R142, R143, R164- R166      | -   |  10 | ERJ- 2RKF2002                  | PANASO NIC                        | 20K    | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
|   56 | R47, R61, R81, R89, R145                             | -   |   5 | CRCW04026 49KFK                | VISHAY DALE                       | 649K   | RES; SMT (0402); 649K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                                  |
|   57 | R51, R60, R158-R160                                  | -   |   5 | ERJ- 2GE0R00                   | PANASO NIC                        | 0      | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                          |
|   58 | R52                                                  | -   |   1 | ERJ- 2RKF5100                  | PANASO NIC                        | 510    | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
|   59 | R54, R56                                             | -   |   2 | WSL0805R1 000FEA18             | VISHAY DALE                       | 0.1    | RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                     |
|   60 | R58                                                  | -   |   1 | 3296Y-1- 253LF                 | BOURNS                            | 25K    | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
|   61 | R59                                                  | -   |   1 | ERJ- 2RKF1152                  | PANASO NIC                        | 11.5K  | RES; SMT (0402); 11.5K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                 |
|   62 | R62, R75, R90, R148, R170                            | -   |   5 | CRCW04021 M00FK                | VISHAY DALE                       | 1M     | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                     |
|   63 | R63, R64, R76, R77, R91, R92, R146, R147,            | -   |  10 | ANY                            | ANY                               | 1K     | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                                                      |
|   64 | R168, R169 R65, R67, R78, R80,                       | -   |  10 | CRCW04027 87KFK                | VISHAY DALE                       | 787K   | RES; SMT (0402); 787K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                                  |

www.analog.com

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

|    | R93, R95, R149, R151, R172, R173   |    |    |                                                      |                                          |                |                                                                                                                                          |
|----|------------------------------------|----|----|------------------------------------------------------|------------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| 65 | R66, R79, R94, R171                | -  |  4 | CRL1206- JW-R100ELF                                  | BOURNS                                   | 0.1            | RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W                                                                                        |
| 66 | R71, R85, R141, R162, R163         | -  |  5 | RC0402FR- 07680RL                                    | YAGEO                                    | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                                        |
| 67 | R150                               | -  |  1 | CRCW12061 78RFK                                      | VISHAY DALE                              | 178            | RES; SMT (1206); 178; 1%; +/-100PPM/DEGC; 0.2500W                                                                                        |
| 68 | R153                               | -  |  1 | CRCW04024 752FK; 9C04021A47 52FLHF3; CRCW04024 7K5FK | VISHAY DALE;YA GEO;VIS HAY DALE          | 47.5K          | RES; SMT (0402); 47.5K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                     |
| 69 | R2, R37, R154, R156                | -  |  4 | CRCW04021 00KFK;RC04 02FR- 07100KL                   | VISHAY; YAGEO                            | 100K           | RES; SMT (0402); 100K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                      |
| 70 | R155                               | -  |  1 | CRCW04021 69KFK                                      | VISHAY DALE                              | 169K           | RES; SMT (0402); 169K; 1%; +/- 100PPM/DEGK; 0.0630W                                                                                      |
| 71 | R157                               | -  |  1 | CRCW04024 70RFK                                      | VISHAY DALE                              | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                                        |
| 72 | R176, R177                         | -  |  2 | ANY                                                  | ANY                                      | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                                         |
| 73 | SPACER1- SPACER4                   | -  |  4 | 9032                                                 | KEYSTO NE                                | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                |
| 74 | SU1-SU27, SU200- SU209             | -  | 37 | S1100- B;SX1100- B;STC02SYA N                        | KYCON;K YCON;S ULLINS ELECTR ONICS CORP. | SX110 0-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                  |
| 75 | TP1, TP19- TP24, VSIM              | -  |  8 | 5000                                                 | KEYSTO NE                                | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                         |
| 76 | TP25-TP54                          | -  | 30 | 5001                                                 | KEYSTO NE                                | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                       |
| 77 | U1                                 | -  |  1 | MAX20356                                             | MAXIM                                    | MAX20 356      | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE DRAWING: 21-100616; WLP 63 PINS; 0.5MM PITCH; PACKAGE CODE: W633A4+1 |
| 78 | U2                                 | -  |  1 | OPA569AID WPR                                        | TEXAS INSTRU MENTS                       | OPA56 9AIDW PR | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                            |
| 79 | U3                                 | -  |  1 | MAX5825AW P+                                         | MAXIM                                    | MAX58 25AWP +T | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                         |

## Evaluates: MAX20356/MAX20358

## MAX20356 Evaluation Kit

| 80    | U4                    | -   |   1 | NC7WZ07P6 X     | FAIRCHI LD SEMICO NDUCTO R   | NC7W Z07P6 X     | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                       |
|-------|-----------------------|-----|-----|-----------------|------------------------------|------------------|--------------------------------------------------------------------------------|
| 81    | U5                    | -   |   1 | MAX1697UE UT+   | MAXIM                        | MAX16 97UEU T+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                          |
| 82    | U6, U8, U10, U12, U20 | -   |   5 | MAX44251A UA+   | MAXIM                        | MAX44 251AU A+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8;                           |
| 83    | U22                   | -   |   1 | MAX6071AA UT41+ | MAXIM                        | MAX60 71AAU T41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6          |
| 84    | U23                   | -   |   1 | MAX11614E EE+   | MAXIM                        | MAX11 614EE E+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12- BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16 |
| 85    | U24, U25              | -   |   2 | MAX8512EX K+    | MAXIM                        | MAX85 12EXK      | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                  |
| 86    | U26                   | -   |   1 | AT24CS02- SSHM  | MICROC HIP                   | AT24C S02- SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8               |
| 87    | U27                   | -   |   1 | MAX8880EU T+    | MAXIM                        | MAX88 80EUT +    | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6          |
| 88    | PCB                   | -   |   1 | MAX20356        | MAXIM                        | PCB              | PCB:MAX20356                                                                   |
| 89    | MISC1, MISC2          | DNI |   2 | AK67421-0.5     | ASSMAN N                     | AK674 21-0.5     | CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-4PINS; 500MM                   |
| 90    | MISC3                 | DNI |   1 | MAXPICO2P MB#   | MAXIM                        | MAXPI CO2P MB#   | ACCESSORY; BRD; PACKOUT; MAXPICO2PMB ADAPTER BOARD                             |
| TOTAL | TOTAL                 |     | 438 |                 |                              |                  |                                                                                |

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

P OJ  T TIT

M  203    V IT

D   I   TIT

D T

H  D       M

I

0  30 2022

M  203

V

D

I

T MP  T    V

H  T   O

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit PCB Layouts

<!-- image -->

z

MAX20356 EV Kit Component Placement Guide -Top Silkscreen

MAX20356 EV Kit PCB Layout -GND1

<!-- image -->

## MAX20356 Evaluation Kit

MAX20356 EV Kit PCB Layout -Top

<!-- image -->

MAX20356 EV Kit PCB Layout -Power

<!-- image -->

## Evaluates: MAX20356/MAX20358

## MAX20356 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20356 EV Kit PCB Layout -Signal

<!-- image -->

MAX20356 EV Kit PCB Layout -Bottom

MAX20356 EV Kit PCB Layout -GND2

<!-- image -->

MAX20356 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX20356 Evaluation Kit

## Evaluates: MAX20356/MAX20358

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/23            | Initial release | -               |
|                 1 | 3/25            | Added MAX20358  | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX20356 Evaluation Kit