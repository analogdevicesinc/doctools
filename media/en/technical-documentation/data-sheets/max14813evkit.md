<!-- lastmod 2022-08-03 -->
## MAX14813 Evaluation Kit

## General Description

The MAX14813 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14813  high-voltage,  highfrequency, three-level octal/five-level quad pulser. It also provides the capability to control the MAX14813 through an onboard USB-to-SPI interface, on-board high-frequency clock  generator  and  synchronous  trigger.  The  EV  kit includes  a  graphical  user  interface  (GUI)  for  exercising the beam forming features of the IC, making it a complete PC-based evaluation system.

## EV Kit Contents

- MAX14813EVKIT# including the MAX14813EWX+
- USB Cable Type A Male to Type B Male

## MAX14318 EV Kit Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX14813

## Benefits and Features

- Easy Evaluation of the MAX14813
- Configurable for Three-Level or Five-Level Mode
- Programmable Master Clock Frequency and Trigger
- Option for External Clock and External Trigger
- Includes 3.5mm Scope-Probe Jacks for High-Voltage Outputs
- Windows XP ® , Windows ® 7, Windows 8.1, Windows 10-Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14813 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX14318 EV Kit Files

| FILE                       | DESCRIPTION         |
|----------------------------|---------------------|
| MAX14813EVKitSetupV1.0.ZIP | Application Program |

## Quick Start

## Required Equipment

- MAX14813 EV kit
- Type A Male to Type B Male USB Cable
- Optional  custom  controller  board  or  pattern  generator  to  drive  the  INN1-INN8,  INP1-INP8  control signals  (see  the  MAX14813  IC  data  sheet  for  more information)
- +3.3V  DC,  100mA  power  supply  (optional  if  the  onboard LDO is used)
- +5V DC, 1A power supply
- -5V DC, 0.5A power supply (optional if the on-board LDO is used)
- +5V  to  +100V  DC,  30mA  (+100V)  to  600mA  (+5V) power supply
- -5V  to  -100V  DC,  -30mA  (-100V)  to  -600mA  (-5V) power supply
- Optional (for 5 levels configuration) +5V to +100V DC, 30mA (+100V) to 600mA (+5V) power supply
- Optional (for 5 levels configuration) -5V to -100V DC, -30mA (-100V) to -600mA (-5V) power supply
- Digital storage oscilloscope

It is recommended that the engineer read the MAX14813 IC data sheet prior to using the EV kit and GUI.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underline refers to items from the Windows operating system.

Evaluates: MAX14813

## MAX14813 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify MAX14813 EV kit operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV kit software, MAX14813EVKitSetupV1.0.ZIP.
- 2) Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 3) Install the EV kit software and USB driver on your com -puter by running the MAX14813EVKitSetupV1.0.exe program inside the temporary folder. A message box asking Do you want to allow the following program to make changes to this computer? may appear. If so, click Yes .
- 4) The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process, the installer will launch the installer for the FTDI Chip CDM drivers.
- 5) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and

once complete, click Finish .  The  default  location  of the software is in the program files directory.

- 6) Connect  the  EV kit to  the  PC  with  the  USB  cable. Windows should automatically recognize the device, install  the  driver  and  display  a  message  near  the System Icon menu  indicating  that  the  hardware  is ready to use.
- 7) Once  the  hardware  is  ready  to  use,  launch  the EV  kit  software  by  opening  its  icon  in  the Start  | Programs menu.  The  EV kit software  appears  as shown in Figure 1. The EV kit software will automatically connect to the EV kit hardware and lower-right status bar  should  indicate  ' MAX14813  EV  Kit  Hardware Connected '. Otherwise from the Device menu select Connect Hardware . Verify that the lower-right status bar indicates the EV kit hardware is Connected .

The EV kit is ready to be tested for Beam Forming evaluation. To use it  in Direct mode,  please  note  that  you  have  to change a couple of resistors as further described in the Procedure for ' Direct Mode '.

Figure 1. MAX14813 EV Kit Software Startup Window

<!-- image -->

## Beam Forming Mode (MODE1 = MODE2 = 1)

- 1) Connect the PC to the EV kit  using  a  Type  B  USB cable.  Windows  should  automatically  recognize  the device and display a message in the lower-right status bar,  indicating  the  EV  kit driver  is  Installed  and  the hardware is ready to use.
- 2) Verify that all jumpers are in their default positions for the EV kit (Table 1 ).
- 3) Connect the +5V DC power supply to the VCC\_EXT test point.
- 4) Connect the -5V DC power supply to the VEE\_EXT test point.
- 5) Connect the +3.3V DC power supply to the VIO\_EXT test point.
- 6) Connect the +5V to +100V DC power supply to the VPPA test point.
- 7) Connect  the  -5V  to  -100V  DC  power  supply  to  the VNNA test point.
- 8) If  5  levels configuration is used and therefore sepa -rate supplies are required for VPPA and VPPB, VNNA and  VNNB,  uninstall  the  shunts  VPPA\_VPPB  and VNNA\_VNNB and connect the optional +5V to +100V DC power supply to VPPB and the optional  -5V  to -100V power supply to VNNB.
- 9) Enable all of the power supplies in steps 3 to 8.
- 10) Through the provided GUI, program the device and the clock generator chip in order to obtain the desired outputs.
- 11) To observe the output signals from the IC, connect the oscilloscope to the HVOUT1-HVOUT8 scope-probe jacks.

## Direct Mode (MODE1 = 1 and MODE2 = 0 or MODE1 = 0 and MODE2 = 1)

Direct  mode  is  NOT  controlled  by  the  SPI  port,  but  by input control pins. The INP4/TRIG pin has a double func -tion: it works as a standard control pin INPx when in Direct mode, but it assumes the trigger function when in Beam Forming mode. Since the EV kit is prepared to work in Beam  Forming  mode,  the  INP4/TRIG  pin  is  connected to the output of a clock generator through a 0Ω resistor (R0\_TR). To use the EV kit in Direct mode, you have to

## Evaluates: MAX14813

remove R0\_TR and install R0\_TR1 (0Ω) and open all the SW1 micro-switches.

Follow the steps below to verify board operation:

- 1) Connect the  custom  controller  board  or  the  pattern generator signals to the header H1 and H2 to drive the INN1-INN8, INP1-INP8 control signals (see Table 4 and Table 5. Refer to the MAX14813 IC data sheet for more information).
- 2) Verify that all jumpers are in the correct position as shown in Table 1 . In particular,
- a.  Change  the  jumper  settings  on  MODE2  and MODE1  to  configure  MAX14813  into  the  Direct mode, either 3 levels configuration (MODE2 = 0, MODE1 = 1) or 5 levels configuration (MODE2 = 1, MODE1 = 0).
- b.  Install  the  jumper  on  CC0,  CC1  to  select  the desired driving current.
- 3) Connect the +5V DC power supply to the VCC\_EXT test point.
- 4) Connect the -5V DC power supply to the VEE\_EXT test point.
- 5) Connect the +3.3V DC power supply to the VIO\_EXT test point.
- 6) Connect the +5V to +100V DC power supply to the VPPA test point.
- 7) Connect  the  -5V  to  -100V  DC  power  supply  to  the VNNA test point.
- 8) If  5  levels configuration is used and therefore sepa -rate supplies are required for VPPA and VPPB, VNNA and  VNNB,  uninstall  the  shunts  VPPA\_VPPB  and VNNA\_VNNB and connect the optional +5V to +100V DC power supply to VPPB and the optional  -5V  to -100V power supply to VNNB.
- 9) Make sure all the control signals INPx and INNx are stable low.
- 10) Enable all of the power supplies in steps 3 to 8.
- 11) Apply signals on INPx and INNx input control pins.
- 12) To observe the output signals from the IC, connect the oscilloscope to the HVOUT1-HVOUT8 scope-probe jacks.

Table 1. MAX14318 EV Kit Jumper Settings

| JUMPER                | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                               |
|-----------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POWER SUPPLIES        | POWER SUPPLIES   | POWER SUPPLIES                                                                                                                                                                                                                                                            |
| V_CLK                 | Open             | Disables +3.3V supply to Clock Generator.                                                                                                                                                                                                                                 |
| V_CLK                 | Closed*          | Enables +3.3V supply to Clock Generator.                                                                                                                                                                                                                                  |
| VCC_REG               | Open*            | Disables on-board LDOs.                                                                                                                                                                                                                                                   |
| VCC_REG               | Closed           | Enables on-board LDOs.                                                                                                                                                                                                                                                    |
| VEE_SEL               | 1 - 2*           | VEE for the MAX14813 is externally supplied.                                                                                                                                                                                                                              |
| VEE_SEL               | 2 - 3            | VEE for the MAX14813 is supplied by the on-board regulator (VCC_REG shunt needs to be installed).                                                                                                                                                                         |
|                       | 1 - 2*           | VIO for the MAX14813 is externally supplied.                                                                                                                                                                                                                              |
| VIO_SEL               | 2 - 3            | VIO for the MAX14813 is supplied by the on-board regulator (VCC_REG shunt needs to be installed).                                                                                                                                                                         |
| VPPA_VPPB             | Open             | Use two high voltage positive supplies for VPPA and VPPB, respectively.                                                                                                                                                                                                   |
| VPPA_VPPB             | Closed*          | Use a single high voltage positive supply for both VPPA and VPPB.                                                                                                                                                                                                         |
| VNNA_VNNB             | Open             | Use two high voltage negative supplies for VNNAand VNNB, respectively.                                                                                                                                                                                                    |
| VNNA_VNNB             | Closed*          | Use a single high voltage negative supply for both VNNAand VNNB.                                                                                                                                                                                                          |
| OPERATING MODE        | OPERATING MODE   | OPERATING MODE                                                                                                                                                                                                                                                            |
| MODE1                 | 1 - 2*           | Connect MODE1 to VIO.                                                                                                                                                                                                                                                     |
| MODE1                 | 2 - 3            | Connect MODE1 to GND.                                                                                                                                                                                                                                                     |
| MODE2                 | 1 - 2*           | Connect MODE2 to VIO.                                                                                                                                                                                                                                                     |
| MODE2                 | 2 - 3            | Connect MODE2 to GND.                                                                                                                                                                                                                                                     |
| SYNC (*Not Installed) | 1 - 2            | Enable the SYNC feature in Direct mode: the MAX14813 will sample each INPx, INNx on the rising edge of the clock signal. Remove this shunt if the MAX14813 is used in Beam Forming mode since in this case SYNC will be INT (INT will signal an SPI communication error). |
| SYNC (*Not Installed) | 2 - 3            | Disable the SYNC feature in Direct mode: the MAX14813 does not take care of the clock applied at its input. Remove this shunt if the MAX14813 is used in Beam Forming mode since in this case SYNC will be INT (INT will signal an SPI communication error).              |
| INT                   | Open             | Unconnected.                                                                                                                                                                                                                                                              |
| INT                   | Closed*          | Connects a LED to INT signal so that any interrupt will be shown when in Beam Forming mode. Remove this shunt if the MAX14813 is used in Direct mode otherwise the LED will be always on when the shunt on SYNC/INT is connected to VIO.                                  |
| CC0 (*not installed)  | 1 - 2            | Connects the MAX14813 CC0 pin to VIO. See Table 3 for pulser current programmability truth table when in Direct mode. Remove this shunt if the pulser is used in Beam Forming mode since, in this case, CC0 will be the SPI SDIO.                                         |
| CC0 (*not installed)  | 2 - 3            | Connects the MAX14813 CC0 pin to GND. See Table 3 for pulser current programmability truth table when in Direct mode. Remove this shunt if the pulser is used in Beam Forming mode since in this case CC0 will be the SPI SDIO.                                           |

Evaluates: MAX14813

Table 1. MAX14318 EV Kit Jumper Settings (continued)

| JUMPER               | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                    |
|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CC1 (*not installed) | 1 - 2            | Connects the MAX14813 CC1 pin to VIO. See Table 3 for pulser current programmability truth table when in Direct mode. Remove this shunt if the pulser is used in Beam Forming mode since in this case CC1 will be the SPI SDO. |
| CC1 (*not installed) | 2 - 3            | Connects the MAX14813 CC1 pin to GND. See Table 3 for pulser current programmability truth table when in Direct mode. Remove this shunt if the pulser is used in Beam Forming mode since in this case CC0 will be the SPI SDO. |
| HV OUT               | HV OUT           | HV OUT                                                                                                                                                                                                                         |
| OUT1_OUT5            | Open*            | HVOUT1 and HVOUT5 open.                                                                                                                                                                                                        |
| OUT1_OUT5            | Closed           | Shorts HVOUT1 to HVOUT5 for quad, five level mode.                                                                                                                                                                             |
| OUT2_OUT6            | Open*            | HVOUT2 and HVOUT6 open.                                                                                                                                                                                                        |
| OUT2_OUT6            | Closed           | Shorts HVOUT1 to HVOUT5 for quad, five level mode.                                                                                                                                                                             |
| OUT3_OUT7            | Open*            | HVOUT3 and HVOUT7 open.                                                                                                                                                                                                        |
| OUT3_OUT7            | Closed           | Shorts HVOUT1 to HVOUT5 for quad, five level mode.                                                                                                                                                                             |
| OUT4_OUT8            | Open*            | HVOUT4 and HVOUT8 open.                                                                                                                                                                                                        |
| OUT4_OUT8            | Closed           | Shorts HVOUT1 to HVOUT5 for quad, five level mode.                                                                                                                                                                             |
| LOAD1                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD1                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT1.                                                                                                                                                                          |
| LOAD2                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD2                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT2.                                                                                                                                                                          |
| LOAD3                | Open             | No load.                                                                                                                                                                                                                       |
|                      | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT3.                                                                                                                                                                          |
| LOAD4                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD4                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT4.                                                                                                                                                                          |
| LOAD5                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD5                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT5.                                                                                                                                                                          |
| LOAD6                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD6                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT6.                                                                                                                                                                          |
| LOAD7                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD7                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT7.                                                                                                                                                                          |
| LOAD8                | Open             | No load.                                                                                                                                                                                                                       |
| LOAD8                | Closed*          | Connects a 220pF&#124;&#124;1KΩ dummy load to HVOUT8.                                                                                                                                                                          |

Evaluates: MAX14813

## MAX14813 Evaluation Kit

Table 1. MAX14318 EV Kit Jumper Settings (continued)

| JUMPER               | SHUNT POSITION       | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                               |
|----------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONTROL INPUTS       | CONTROL INPUTS       | CONTROL INPUTS                                                                                                                                                                                                                                                                                                                                                            |
| H1 (*not installed)  | 1,3,5,7,9, 11,13,15  | GND                                                                                                                                                                                                                                                                                                                                                                       |
| H1 (*not installed)  | 2,4,6,8,10, 12,14,16 | INN 5-8 and INP 5-8 Signals for Direct mode Operation To use the EV kit in Direct mode, you have to remove R0_TR and install R0_TR1 (0 Ω ) and open all the SW1 micro-switches.                                                                                                                                                                                           |
| H2 (*not installed)  | 1,3,5,7,9, 11,13,15  | GND                                                                                                                                                                                                                                                                                                                                                                       |
| H2 (*not installed)  | 2,4,6,8,10, 12,14,16 | INN 1-4 and INP 1-4 Signals for Direct mode operation. To use the EV Kit in Direct mode, you have to remove R0_TR and install R0_TR1 (0 Ω ) and open all the SW1 micro-switches.                                                                                                                                                                                          |
| J1                   | 1                    | J1 is intended for a pattern generator source input. Never install a shunt on it. NOTE: In order to use external clock source on either J1 or J2, the 0Ω resistor R0_CK must be removed and the 0Ω resistor R0_CK1 must be installed (not provided). If the signal source needs to be terminated, a termination of 50Ω resistor can be mounted on R50_CK1 (not provided). |
| J1                   | 2                    | GND                                                                                                                                                                                                                                                                                                                                                                       |
| J2                   |                      | Female SMAConnector for a pattern generator source input (same connection as J1-1 and scope probe connector CLK).                                                                                                                                                                                                                                                         |
| CLK (*not installed) |                      | Low capacitance scope probe connector to monitor the signal on J1 and J2.                                                                                                                                                                                                                                                                                                 |
| J4                   | 1                    | J4 is intended for a pattern generator source input. Never install a shunt on it. NOTE: In order to use external trigger on either on J3 or J4, the 0Ω resistor R0_TR must be removed and the 0Ω resistor R0_TR1 must be installed. If the signal source needs to be terminated a 50Ω termination resistor can be mounted on R50_TR1 (not provided).                      |
| J4                   | 2                    | GND                                                                                                                                                                                                                                                                                                                                                                       |
| J3                   |                      | Female SMAConnector for pattern generator source input (same connection as J4-1 and TRIG test point).                                                                                                                                                                                                                                                                     |
| TRIG                 |                      | Test point to monitor the signal on J4-1 and J3.                                                                                                                                                                                                                                                                                                                          |
| SW1 (DIP SWITCH)     | 1 - 8                | Close all switches to enable on-board USB to SPI*. Open all switches to disable on-board USB to SPI and connect through connector SPI. Keep all the SW1 micro-switches open in Direct mode.                                                                                                                                                                               |
| SW1 (DIP SWITCH)     | 2 - 7                | Close all switches to enable on-board USB to SPI*. Open all switches to disable on-board USB to SPI and connect through connector SPI. Keep all the SW1 micro-switches open in Direct mode.                                                                                                                                                                               |
| SW1 (DIP SWITCH)     | 3 - 6                | Close all switches to enable on-board USB to SPI*. Open all switches to disable on-board USB to SPI and connect through connector SPI. Keep all the SW1 micro-switches open in Direct mode.                                                                                                                                                                               |
| SW1 (DIP SWITCH)     | 4 - 5                | Close all switches to enable on-board USB to SPI*. Open all switches to disable on-board USB to SPI and connect through connector SPI. Keep all the SW1 micro-switches open in Direct mode.                                                                                                                                                                               |

Evaluates: MAX14813

## Table 1. MAX14318 EV Kit Jumper Settings (continued)

| JUMPER   | SHUNT POSITION          | DESCRIPTION                                                                                                                           |
|----------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| SPI      | 1,3,4,6 - No Connection | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| SPI      | 2, 10 - GND             | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| SPI      | 5 - SDO                 | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| SPI      | 7 - CLK                 | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| SPI      | 8 - SDIO                | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| SPI      | 9 - CS                  | 10-pin header to use as test points for external SPI communication (selected through SW1). DO NOT USE JUMPERS TO SHORT PINS TOGETHER. |
| J_USB    |                         | USB Type B connector.                                                                                                                 |
| RESET    |                         | USB to SPI Reset button.                                                                                                              |

* Default Position

## Detailed Description of Software

A  GUI  is  provided  to  support  the  evaluation  of  the MAX14813 in Beam Forming mode. The MAX14813 EV kit  GUI  only  supports  the Internal  Line  Memory mode (refer to MAX14813 IC data sheet for details). If the users wish to use the External Line Memory modes, they can hardwire the external SPI signals to SPI connector.

The main window of the EV kit software contains three tabs: Configuration, Line Tables, and Pulse Wave Tables and  a  panel  accessible  from  any  tabs  to  control  the master  clock  and  trigger Clock/Trigger  Control .  The Configuration tab provides control for the IC configuration, Beam Forming Setup, Channel Enable, and Error Status. The other two tabs are used for establishing desired data patterns.

Figure 2. Main MAX14913 EV Kit Software Window

<!-- image -->

## MAX14813 Evaluation Kit

## Configuration Tab

The Configuration tab provides an interface for selecting and configuring the IC from a functional perspective, see Figure 3.

In order to prepare the MAX14813 to output a pattern, use this sequence:

- Press the button Reset RAMs to clear the Pulse Wave Table, Line Number Table, and Line Type Table.
- Press the button Reset Registers to clear the content of any registers and possible errors.
- Press the button Initialize to pre-fill the Configuration tab with default values.
- Since all the channels are enabled, verify if you want to use all of them by checking/unchecking the corresponding Channel Enable checkboxes  and Channel TX Enable checkboxes.
- Configure the Internal Line Memory mode using the Line Number Table Address ,  the Line Type Table Address and the INV checkbox. Then press Set button. This corresponds to the 'Set New Line 1' command in the MAX14813 IC data sheet register map. If you are not experienced with EV kit, do not change the default values.
- The Line Number Table address is the address of the line containing the delay, the Pulse Wave Table address, etc.
- The Line Type Table address is the address of the lines containing the global parameters like the cycles number, pulse duration, current of the pulser, etc.
- The INV checkbox selects the phase of output pattern (in-phase or out-of-phase).
- Clicking Refresh will  update  the Error Status flags; red is an error and green is good. Please refer to the MAX14813 IC data sheet for a detailed explanation of each possible flags.

Figure 3. MAX14813 EV Kit Software - Configuration Tab

<!-- image -->

## MAX14813 Evaluation Kit

## Line Tables Tab

The Line Tables tab allows the software to set the Line Type Tables and Line Number Tables, see Figure 4. Line Type Tables will configure the cycles number, pulse dura -tion, driving current of the pulser, etc., for all the channels. The Line Number Tables will configure the channel delay, the address of the pattern in the Pulse Wave Tables, etc., for each individual channel.

In order to prepare the MAX14813 to output a pattern, use this sequence:

- Go to the Line Type Table . It is a global register that affects all the channels, see Figure 5. It contains 128 addresses, from 0 to 127.
- Use  the Address(Hex) of  the Line  Type  Table to select the address to be written. If you are not experi -enced with the EV kit, do not change the default values.
- To choose how many times to repeat the pattern, fill the Cycles number. Zero (0) means one cycle.

Figure 4. MAX14813 EV Kit Software - Line Tables Tab

<!-- image -->

Figure 5. Line Type Table

<!-- image -->

Evaluates: MAX14813

- To choose how many clock periods each pulse has to last, fill the Pulse Width number. Zero (0) means the pulse will last for a single period of clock. For example, to have a 5MHz pattern generated from a 20MHz mas -ter clock, if the Pulse Wave Table is VPP , VNN , and EOP , the Pulse Width has to be 1.
- Program  the Current list  to  set  the  desired  pulser current.
- Check the CWD checkbox to have a continuous pat -tern  or  uncheck  it  to  have  a  finite  pattern. Please double  check  the  VPP\_  and  VNN\_  supply  voltages when enabling the CWD function: VPP and VNN must be set at low voltages (less than +/-8V)! Using higher voltages in CWD mode will damage the device.
- Press the Write button to update the pulser memory.

## MAX14813 Evaluation Kit

In the Line Table s tab, you can also change the parameters in Line Number Table for each channel, see Figure 6. Follow the example for channel 1 below to program the Line Number Table.

- Use the Address of the Line Number Table to select the address to be written. It contains 1536 addresses, from 0 to 1535. If you are not experienced with the EV kit, do not change the default values.
- To choose the delay of this channel in number of clock periods, fill the Delay number. Zero (0) means delay will  be  set  by  the  fixed  internal  latency only (refer to the MAX14813 IC data sheet for details).
- To select the address of the pattern in the Pulse Wave Table to be used, fill the Pulse Wave Table Address Pointer number (see Pulse Wave Tables Tab ).
- Check RX checkbox If the channel goes into receive mode after the pattern transmission.

You can also write the same value to a specific address for  all  channels  simultaneously  using  the  Line  Number Table CH1-8, see Figure 7.

## Pulse Wave Tables Tab

The Pulse  Wave  Tables tab  allows  using  the  software to  write  a  desired  pattern  to  different  Pulse  Wave Table channels, see Figure 8.

<!-- image -->

Figure 6. Line Number Table CH1

Figure 7. Line Number Table CH1-8

<!-- image -->

Figure 8. MAX14813 EV Kit Software - Pulse Wave Tables Tab

<!-- image -->

## MAX14813 Evaluation Kit

For example, in 3 Level Beam Forming mode, in order to create a VPP, VNN, ZERO and EOP pattern on Channel 1, use this sequence:

- Use  the Address(Hex) of  the Pulse  Wave  Table to  select  the  address  to  be  written.  It  contains  1024 addresses, from 0 to 1023. If you are not experienced with EV kit, do not change the default values.
- To select the patterns of the pulser, use the drop-down menus to fill the first four fields with VPP , VNN , ZERO , and EOP and press the Write button, see Figure 9.
- It  is  mandatory  to  finish  all  sequences  with  an EOP (End of Pattern); otherwise, the pulser will not be able to know where to stop.
- If  needed,  create  other  patterns  for  the  remaining channels  using  the  same  technique  with  the  values from drop-down menus.
- The Pulse Wave Table CH1-8 is useful to program all channels  simultaneously  with  the  same  pattern,  see Figure  10.  In  this  example,  the  pattern VPP , VNN , ZERO , and EOP will be written to the address 0 of all channels when pressing the Write button.

Evaluates: MAX14813

## Clock/Trigger Control

The on-board high-speed clock and trigger generator can be  programmed  through  EV  kit  software Clock/Trigger Control box. After MAX14813 is successfully configured, enable clock and trigger frequency to start Beam Forming mode operation.

To enable on-board clock and trigger frequency, use this sequence:

- Select  the  appropriate Clock  Frequency from  the drop-down menu.
- Select  the  appropriate Trigger  Frequency that  will determine the pulse repetition frequency (PRF) of the pattern.
- Check the Power-On checkbox.
- Check the Trigger checkbox.
- This  will  start  the  trigger  and  the  pulser  will  fire  the programmed pattern at the desired device frequency and pulse repetition frequency (PRF).
- To stop the pattern uncheck the Trigger checkbox.

<!-- image -->

Figure 9. Pulse Wave Table CH1

Figure 10. Pulse Wave Table CH1-8

<!-- image -->

Figure 11. MAX14813 EV Kit Software-Clock/Trigger Control

<!-- image -->

## MAX14813 Evaluation Kit

## Detailed Description of Hardware

The MAX14813 EV kit provides a proven layout for the IC and it provides an on-board USB to SPI interface, a high-speed clock and trigger in order to be able to evaluate the innovative Beam Forming feature with the simple use of a PC.

## Power Supplies

The  EV  kit  has  the  option  to  be  powered  entirely  from external supplies or using on-board LDOs to generate low voltage  supplies. At  default,  it  is  configured  for  external supplies, so VCC\_EXT, VEE\_EXT, and VIO\_EXT are to be  provided.  To  enable  the  LDOs,  install  the  shunt  on VCC\_REG and move the  shunts  on  jumpers  VIO\_SEL and  VEE\_SEL to  position  2-3.  In  this  case,  only  VCC\_ EXT is needed.

Default Configuration

<!-- image -->

LDOs Enabled

<!-- image -->

## Evaluates: MAX14813

If common voltage supplies are used for VPPA and VPPB, VNNA  and  VNNB,  two  fully  independent  high-voltage supplies  (VNNA  and  VPPA)  have  to  be  provided  from external  power  supplies  by  the  use  of  the  VNNA  and VPPA  test  points,  respectively.  If  separate  supplies  are used  for  VNNA  and  VNNB,  VPPA  and  VPPB,  four  fully independent  high-voltage  supplies  have  to  be  provided from  external  power  supplies  by  the  use  of  the  VNNA, VNNB,  VPPA,  and  VPPB  test  points,  respectively.  In  this case, remove the shunts VPPA\_VPPB and VNNA\_VNNB.

## Programmable High-Speed Clock Generator and Trigger for Beam Forming Mode Evaluation

The EV kit has an on-board high-speed clock generator programmable through the GUI. This generator will also produce  the  trigger  signal  synchronous  with  the  clock. The frequency of the trigger (PRF) will be programmed the  same way as the clock by using the GUI. It is also possible to block the trigger in a low or high state. This will be useful when the pulser is configured in CW mode: a  high  state  of  the  trigger  will  start  the  CW  sequence; meanwhile a low state will stop it.

The  FTDI  chip  receives  the  USB  commands  from  the GUI and converts to µ-wire/SPI signals for on-board clock generator configuration.

A  single-ended  clock  can  also  be  provided  to  the MAX14813 externally through the female SMA connector J2 or the header J1. It can be probed at the CLK socket (provided, not installed). T o use these connectors, disconnect the  on-board  clock  signal  by  removing  the  0Ω  resistor R0\_CK and installing the 0Ω resistor R0\_CK1.

In a similar way, a single-ended trigger can be provided to  the  MAX14813  externally  through  the  female  SMA connector J3 or the header J4. It can be probed at the TRIG test point. To use these connectors, disconnect the on-board trigger by removing the 0Ω resistor R0\_TR and installing the 0Ω resistor R0\_TR1.

## MAX14813 Evaluation Kit

## Operating Modes

The operating modes are set by the MODE1 and MODE2 inputs. These inputs can be manually configured by the shunt positions, as described in Table 2 . In Direct mode, when  MODE1  =  1  and  MODE2  =  0,  the  MAX14813 can  generate  a  3-level  pulsing  scheme.  If  MODE1  =  0 and MODE2 = 1 the MAX14813 can generate a 5-level dual  mode  pulsing  scheme  when  HVOUT1/HVOUT5, HVOUT2/HVOUT6,  HVOUT3/HVOUT7,  and  HVOUT4/ HVOUT8 are shorted by placing a shunt on OUT1\_OUT5, OUT2\_OUT6, OUT3\_OUT7, OUT4\_OUT8 headers.

To  use  the  innovative  Beam  Forming  feature,  MODE1 and MODE2 have to be both high. All the features of the pulser can be programmed via SPI port. Please read the MAX14813 IC data sheet to learn how to use this operat -ing mode.

Depending  on  the  logic  combination  of  the  INNx,  INPx input  pin,  the  pulser  operates  either  from  VPPA,  VNNA or from VPPB, VNNB with up to 2A driving current. The pulser output current can be set based on the shunt positions of CC0 and CC1, as shown in Table 3 .

## Table 2. Operating Modes

|   MODE1 |   MODE2 | OPERATING MODE     |
|---------|---------|--------------------|
|       0 |       0 | Shut Down          |
|       1 |       0 | Octal Three Levels |
|       0 |       1 | Quad Five Levels   |
|       1 |       1 | Beam Forming       |

## Table 3. Pulser Output Current (Typical)

|   CC0 |   CC1 |   PULSER OUTPUT CURRENT (TYP) (A) |
|-------|-------|-----------------------------------|
|     0 |     0 |                                 2 |
|     1 |     0 |                               1.2 |
|     0 |     1 |                               0.7 |
|     1 |     1 |                              0.35 |

## Evaluates: MAX14813

Table  4 describes  the  combination  between  the  logic signals INNx and INPx and voltage outputs HVOUT and LVOUT in Direct mode octal 3 levels. Table 5 describes the  combination  between  the  logic  signals  INNx,  INPx, INNy, and INPy and voltage outputs HVOUT and LVOUT in Direct mode quad 5 levels.

## High-Voltage Outputs

The high-voltage outputs can be observed on the oscilloscope  using  HVOUT1-HVOUT8  scope-probe  jacks. The high-voltage scope-probe jacks are not installed but the  pads  are  present  on  the  PCB  and  components  are included.

## Low-Voltage Outputs

The  low-voltage outputs can be observed  on  the oscilloscope  using  LVOUT1-LVOUT8  or  scope-probe jacks.  The  low-voltage  output  scope-probe  jacks  are not  installed  but  the  pads  are  present  on  the  PCB  and components are included.

## Table 4. MODE1 = 1, MODE2 = 0 Octal 3 Levels

|   INNx |   INPx | HVOUTx            | LVOUTx                     |
|--------|--------|-------------------|----------------------------|
|      0 |      0 | Clamp ON Damp OFF | TR Switch OFF LVOUT = Hi-Z |
|      0 |      1 | VPP Damp OFF      | TR Switch OFF LVOUT = Hi-Z |
|      1 |      0 | VNN Damp OFF      | TR Switch OFF LVOUT = Hi-Z |
|      1 |      1 | Clamp ON Damp ON  | TR Switch ON               |

## MAX14813 Evaluation Kit

## Table 5. MODE1 = 0, MODE2 = 1 Quad 5 Levels Dual Mode

|   INNx X = 1,2,3,4 |   INPx X = 1,2,3,4 | INNy 'SEL' Y = 5,6,7,8   | INPy 'RTZ' Y = 5,6,7,8   | HVOUTx = HVOUTy   | LVOUTx x = 1,2,3,4         | LVOUTy x = 5,6,7,8         |
|--------------------|--------------------|--------------------------|--------------------------|-------------------|----------------------------|----------------------------|
|                  0 |                  0 | X                        | 0                        | Hi-Z Damp OFF     | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  0 |                  0 | X                        | 1                        | Clamp ON Damp OFF | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  0 |                  1 | 0                        | X                        | VPPA Damp OFF     | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  1 |                  0 | 0                        | X                        | VNNA Damp OFF     | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  0 |                  1 | 1                        | X                        | VPPB Damp OFF     | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  1 |                  0 | 1                        | X                        | VNNB Damp OFF     | TR Switch OFF LVOUT = Hi-Z | TR Switch OFF LVOUT = Hi-Z |
|                  1 |                  1 | 1                        | X                        | Clamp ON Damp ON  | TR Switch ON               | TR Switch OFF LVOUT = Hi-Z |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14813EVKIT# | EV KIT |

#Denotes RoHS compliant.

The MAX14813EVKIT# includes the MAX14813EWX+ in a 156-Bump WLP.

## MAX14813 EV Bill of Materials

| ITEM     | REF_DES C1-C5, C7, C9, C10, C13, C15, C18-C20,                                                             | DNI/DNP     | QTY                                    | MFG PART #                                                            | MANUFACTURER                                      | VALUE                              | DESCRIPTION CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 10V; TOL = 10%;                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------|-------------|----------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2        | C34, C37, C47, C64, C65, C67 C6, C8, C11, C12, C16, C27-C29                                                | -           | 8                                      | CGA5L3X7T2E224K160                                                    | TDK                                               | 0.22µF                             | MODEL=; TG = -55°C TO +85°C; TC = X5R; CAPACITOR; SMT (1206); CERAMIC CHIP; 0.22µF; 250V; TOL = 10%; TG=-55°C TO +125°C; TC = X7T AUTO                                                      |
| 3        | C24, C30, C31, C61                                                                                         | -           | 4                                      | RFS1A100MCN1GB                                                        | NICHICON                                          | 10µF                               | CAPACITOR; SMT (CASE_B); ALUMINUM-ELECTROLYTIC; 10µF; 10V; TOL = 20%; MODEL=; TG = -55°C TO +105°C                                                                                          |
| 4        | C32                                                                                                        | -           | 1                                      | TPSA106M010R0900                                                      | AVX                                               | 10µF                               | CAPACITOR; SMT (3216); TANTALUM CHIP; 10µF; 10V; TOL = 20%; MODEL =TPS SERIES; TG = -55°C TO +125°C                                                                                         |
| 5        | C33                                                                                                        | -           | 1                                      | C0603C0G500-820JNE; GRM1885C1H820JA01                                 | VENKEL LTD./MURATA                                | 82PF                               | CAPACITOR; SMT (0603); CERAMIC CHIP; 82PF; 50V; TOL = 5%; MODEL=; TG=-55°C TO +125°C; TC = C0G                                                                                              |
| 6        | C35                                                                                                        | -           | 1                                      | B45197A2476K409                                                       | KEMET                                             | 47µF                               | CAPACITOR; SMT (7343); TANTALUM CHIP; 47µF; 10V; TOL=10%; MODEL = B45197A SERIES; TG = -55°C TO +125°C                                                                                      |
| 7        | C36, C38-C46, C49-C58, C72, C73                                                                            | -           | 22                                     | C0603C104K9RAC; GRM188R70J104KA01                                     | KEMET; MURATA                                     | 0.1µF                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 6.3V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X7R;                                                                                        |
| 8        | C59, C60                                                                                                   | -           | 2 GRM39C0G220J50V; C1608C0G1H220J080AA | GRM1885C1H220J;                                                       | MURATA/TDK                                        | 22PF                               | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TO L = 5%; MODEL=; TG=-55°C TO +125°C; TC = C0G                                                                                             |
| 9        | C62                                                                                                        | -           | 1                                      | C0603C475K9PAC; GRM188R60J475KE19; C1608X5R0J475K080AB; ECJ-1VB0J475K | KEMET/MURATA/TDK/PANASONIC                        | 4.7µF                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 6.3V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X5R;                                                                                        |
| 10       | C63                                                                                                        | -           | 1                                      | 593D107X0010D                                                         | VISHAY SPRAGUE                                    | 100µF                              | CAPACITOR; SMT (7343); TANTALUM CHIP; 100µF; 10V; TOL = 20%; MODEL = 593D SERIES; TG = -55°C TO +125°C                                                                                      |
| 11       | C66                                                                                                        | -           | 1                                      | TAJR105K010RNJ                                                        | AVX                                               | 1µF                                | CAPACITOR; SMT (2012); TANTALUM CHIP; 1µF; 10V; TOL = 10%                                                                                                                                   |
| 12       | C68-C71                                                                                                    | -           | 4                                      | EEV-EB2C100Q                                                          | PANASONIC                                         | 10µF                               | CAPACITOR; SMT (CASE_G); ALUMINUM-ELECTROLYTIC; 10µF; 160V; TOL = 20%; MODEL=EEV SERIES; TG=-40°C TO +105°C                                                                                 |
| 13       | CHV1-CHV8                                                                                                  | -           | 8                                      | C0603C221K1GAC                                                        | KEMET                                             | 220PF                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 100V; TOL = 10%; MODEL = C0G; TG =-55°C TO +125°C; TC = +TBD                                                                                    |
| 14 15    | D1 DINT, DTHP                                                                                              | - -         | 1 2                                    | SS12 LX3044GD                                                         | FAIRCHILD SEMICONDUCTOR Lumex Opto/Components Inc | SS12 LX3044GD                      | DIODE; SCH; SMT (DO-214AC); V = 20V; I = 1.0A GREEN LIGHT EMITTING DIODE                                                                                                                    |
| 16       | J1, J4, INT, LOAD1-LOAD8, V_CLK, VCC_REG, OUT1_OUT5, OUT2_OUT6, OUT3_OUT7, OUT4_OUT8, VNNA_VNNB, VPPA_VPPB | -           | 19                                     | PCC02SAAN                                                             | SULLINS                                           | PCC02SAAN                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65°C TO +125°C                                                                                                          |
| 17       | J2, J3                                                                                                     | -           | 2                                      | CONSMA002                                                             | LINX TECHNOLOGIES                                 | CONSMA002                          | CONNECTOR; FEMALE; THROUGH HOLE; SMA PCB MOUNT; RIGHT ANGLE; 5PINS                                                                                                                          |
| 18       | J5, J6, J11-J16, J19-J22, J32-J35, VBUS                                                                    | -           | 17                                     | PBC01SAAN                                                             | SULLINS ELECTRONICS CORP                          | PBC01SAAN                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                                                                                    |
| 19       | J7-J10, J57-J60                                                                                            | -           | 8                                      | 5001                                                                  | KEYSTONE                                          | N/A                                | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                    |
| 20       | J_USB                                                                                                      | -           | 1                                      | 67068-9000                                                            | MOLEX                                             | 67068-9000                         | CONNECTOR; FEMALE; THROUGH HOLE; USB B-TYPE CONNECTOR WHITE; RIGHT ANGLE; 4PINS                                                                                                             |
| 21       | L1                                                                                                         | -           | 1                                      | BLM18SG331TN1                                                         | MURATA                                            | 330                                | INDUCTOR; SMT (0603); FERRITE-BEAD; 330; TOL = ±25%; 1.5A                                                                                                                                   |
| 22       | L2                                                                                                         | -           | 1                                      | CR54NP-100MC                                                          | SUMIDA                                            | 10µH                               | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; 10µH; TOL= ± 20%; 1.44A                                                                                                           |
| 23       | MODE1, MODE2, VEE_SEL, VIO_SEL                                                                             | -           | 4                                      | PCC03SAAN                                                             | SULLINS                                           | PCC03SAAN                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                                                                                          |
| 24       | R0_CK, R0_TR                                                                                               | -           | 2                                      | CRCW06030000ZS;                                                       | DALE/ROHM/PANASONIC                               | 0                                  | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                           |
| 25       |                                                                                                            | -           | 7 CRCW0603100RFK;                      | MCR03EZPJ000; ERJ-3GEY0R00 ERJ-3EKF1000                               | VISHAY VISHAY DALE/PANASONIC                      | 100                                | RESISTOR; 0603; 100Ω; 1%; 100PPM; 0.10W; THICK FILM RESISTOR, 0603, 560Ω, 1%, 100PPM, 0.10W, THICK FILM                                                                                     |
| 26 27    | R7, R9, R12, R15, R16, R18, R52 R13, R51 R14, R19, R53                                                     | - -         | 2 3                                    | CRCW0603560RFK CR0603-FX-1001ELF                                      | VISHAY DALE BOURNS                                | 560 1K                             | RESISTOR; 0603; 1KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                          |
| 28       | R34, R35, R38, R39, R42-R45, R66-R73                                                                       | -           | 16                                     | MCR03EZPFX2002; ERJ-3EKF2002                                          | ROHM; PANASONIC                                   | 20K                                | RESISTOR; 0603; 20KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                         |
| 29       | R55                                                                                                        | -           | 1                                      | ERA-3YEB202V                                                          | PANASONIC                                         | 2K                                 | RESISTOR; 0603; 2KΩ; 0.1%; 25PPM; 0.10W; THICK FILM                                                                                                                                         |
| 30 31    | R56 R57-R59, R74, R77                                                                                      | - -         | 1 5 9C06031A1002FK;                    | ERA-3YEB113V CRCW060310K0FK; ERJ-3EKF1002                             | PANASONIC VISHAY DALE/YAGEO PHICOMP/ PANASONIC    | 11K 10K                            | RESISTOR; 0603; 11KΩ; 0.1%; 25PPM; 0.10W; METAL FILM RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |
| 32 33    | R75 R76                                                                                                    | -           | 1 1                                    | ERJ-3EKF1303V CRCW0603300KFK                                          | PANASONIC VISHAY DALE                             | 130K 300K                          | RESISTOR; 0603; 130KΩ; 1%; 100PPM; 0.10W; THICK FILM RESISTOR, 0603, 300KΩ, 1%, 100PPM, 0.1W, THICK FILM                                                                                    |
| 34 35    | R78                                                                                                        | - -         | 1                                      | CRCW060347K0FK                                                        | VISHAY DALE                                       | 47K                                | RESISTOR; 0603; 47K; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0603; 169KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |
| 36       | R79 R80                                                                                                    | - -         | 1 1                                    | ERJ-3EKF1693V ERA-3AEB104; AT0603BRD07100KL                           | PANASONIC PANASONIC                               | 169K 100K                          | RESISTOR; 0603; 100KΩ; 0.1%; 25PPM; 0.1W; THIN FILM                                                                                                                                         |
| 37       | RESET                                                                                                      | -           | 1                                      | FSM4JSMA                                                              | TE CONNECTIVITY                                   | FSM4JSMA                           | SWITCH; SPST; SMT; 12V; 0.05A;FSMJSMA SERIES; TACTILE SWITCH; RCOIL =0.1Ω; RINSULATION = 1GΩ                                                                                                |
| 38       | RHV1-RHV8                                                                                                  | -           | 8                                      | ERJ-1TYJ102U                                                          | PANASONIC                                         | 1K                                 | RESISTOR; 2512; 1KΩ; 5%; 100PPM; 1.0W; THICK FILM CONNECTOR; THROUGH HOLE; PIN STRIP HEADER; STRAIGHT; 10PINS                                                                               |
| 39 40    | SPI SU1-SU27                                                                                               | - -         | 1 27                                   | 961210-6404-AR STC02SYAN                                              | 3M SULLINS ELECTRONICS CORP.                      | 961210-6404-AR STC02SYAN           | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                               |
| 41       | SW1                                                                                                        | -           | 1                                      | DBS 3104                                                              | KNITTER-SWITCH                                    | DBS 3104                           | SWITCH; SPST; THROUGH HOLE; 24V; 0.025A;DBS 3100 SERIES; DUAL-IN-LINE SWITCH; RCOIL ≤ 0.05 OHM; RINSULATION ≥ 100MΩ; KNITTER-SWITCH                                                         |
| 42       | TRIG, VNNA, VNNB, VPPA, VPPB, VCC_EXT, VEE_EXT, VIO_EXT                                                    | -           | 8                                      | 5000                                                                  | KEYSTONE                                          | N/A                                | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                      |
| 43 44    | U1 U3                                                                                                      | - -         | 1 1                                    | MAX14813EXP+ MAX1806EUA33+                                            | MAXIM MAXIM                                       | MAX14813EXP+ MAX1806EUA33+         | EVKIT PART -IC; PACKAGE OUTLINE 156 BUMPS; WLP PKG 0.5MM PITCH; W1566A6+1; 21-100007 IC; VREG; LOW-VOLTAGE LINEAR REGULATOR; UMAX8-EP                                                       |
| 45       | U4                                                                                                         | -           | 1                                      | FT2232HL                                                              | FUTURE TECHNOLOGY DEVICES INTL LTD.               | FT2232HL                           | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                             |
| 46       | U5                                                                                                         | -           | 1                                      | MAX755CSA+                                                            | MAXIM                                             | MAX755CSA+                         | IC; VREG; -5V/ADJUSTABLE; NEGATIVE-OUTPUT; INVERTING; CURRENT-MODE PWM REGULATOR; NSOIC8 150MIL                                                                                             |
| 47 48    | U6                                                                                                         | -           | 1                                      | LMK01801BISQE/NOPB                                                    | ?                                                 | LMK01801BISQE/NOPB                 | IC; CLK; LMK01801 DUAL CLOCK DIVIDER BUFFER; WQFN48-EP 7X7                                                                                                                                  |
| 49       | U7 U8                                                                                                      | - - -       | 1 1                                    | MAX1735EUK50+ MAX8892EXK+                                             | MAXIM MAXIM INTEGRATED                            | MAX1735EUK50+ MAX8892EXK+          | IC; VREG; NEGATIVE-OUTPUT LOW-DROPOUT LINEAR REGULATOR; SOT23-5 IC; VREG; HIGH PSRR; LOW DROP-OUT LINEAR REGULATOR; SC70-5 IC; EPROM; 16 BIT; 1K 2.5V MICROWIRE SERIAL EEPROM; TSSOP8 3X4.4 |
| 50 51    | U9 VDD                                                                                                     | -           | 1 1                                    | 93LC46B-I/ST 5116                                                     | MICROCHIP KEYSTONE                                | 93LC46B-I/ST N/A                   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE = 0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE                                                                                |
| 52       | Y1 Y2                                                                                                      | -           | 1                                      | ABLJO-160.000MHZ ABLS2-12.000MHZ-D4Y-T                                | ABRACON                                           |                                    | FINISH; OSCILLATOR; SMT 14.3 X 8.7 X 5.5mm; 15PF; 160MHZ; ± 25PPM                                                                                                                           |
| 54 55    | CLK, HVOUT1-HVOUT8                                                                                         | - DNI       | 1 9                                    | 131-5031-00                                                           | ABRACON TEKTRONIX                                 | ABLJO-160.000MHZ 12MHZ 131-5031-00 | CRYSTAL; SMT ; 18PF; 12MHZ; ; ±30PPM CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE;                                                                                                 |
| 53       |                                                                                                            |             |                                        |                                                                       |                                                   |                                    | STRAIGHT; 5PINS                                                                                                                                                                             |
|          | MTH1-MTH8                                                                                                  | DNI         | 8                                      | EVKIT_STANDOFF_M2.5_20MM                                              | ?                                                 | EVKIT_STANDOFF_M2.5_20MM           | KIT; ASSY-STANDOFF20MM; 1PC. STANDOFF/FEM/HEX/M2.5/(20MM)/ALUMINUM; 1PC. SCREW/SLOT/PAN/M2.5/(6MM)/STEEL; ZINC PLATE                                                                        |
| 56       | CC0, CC1, SYNC                                                                                             | DNP         | 0                                      | PCC03SAAN                                                             | SULLINS                                           | PCC03SAAN                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 ° C TO +125°C                                                                                                        |
| 57       | H1, H2                                                                                                     |             | 0                                      | PEC08DAAN                                                             | SULLINS ELECTRONICS CORP.                         | PEC08DAAN                          | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 16PINS; -65°C TO +125°C                                                                                                                            |
|          |                                                                                                            | DNP         |                                        |                                                                       |                                                   |                                    | BREAKAWAY; CONNECTOR; WIREMOUNT;                                                                                                                                                            |
| 58 59    | LVOUT1-LVOUT8 R0_CK1, R0_TR1, R50 CK1 R50 TR1 RLV1-RLV8                                                    | DNP DNP DNP | 0 0                                    | 131-5031-00 N/A                                                       | TEKTRONIX TBD                                     | 131-5031-00 OPEN TBD               | 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS RESISTOR; 0603; OPEN; FORMFACTOR PACKAGE OUTLINE CFM1 RESISTOR THROUGH HOLE                                                                |
| 60       |                                                                                                            |             | 0                                      | N/A                                                                   | N/A                                               |                                    | WITH HOLE DIAMETER RECEPTACLE 0555                                                                                                                                                          |
| 61 TOTAL | PCB                                                                                                        | -           | 1                                      | MAX14813                                                              | MAXIM                                             | PCB                                | PCB Board:MAX14813 EVALUATION KIT                                                                                                                                                           |
|          |                                                                                                            |             | 246                                    |                                                                       |                                                   |                                    |                                                                                                                                                                                             |

Evaluates: MAX14813

## MAX14813 EV Schematics

<!-- image -->

Evaluates: MAX14813

## MAX14813 EV Schematics (continued)

<!-- image -->

## MAX14813 EV Schematics (continued)

<!-- image -->

## MAX14813 EV Schematics (continued)

<!-- image -->

Evaluates: MAX14813

## MAX14813 EV Schematics (continued)

<!-- image -->

Evaluates: MAX14813

## MAX14813 EV PCB Layout

<!-- image -->

## MAX14813 EV PCB Layout (continued)

<!-- image -->

## MAX14813 EV PCB Layout (continued)

<!-- image -->

## MAX14813 EV PCB Layout (continued)

<!-- image -->

## MAX14813 EV PCB Layout (continued)

<!-- image -->

## MAX14813 EV PCB Layout (continued)

<!-- image -->

## MAX14813 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 10/16           | Initial release                                  | -               |
|                .1 |                 | Corrected typo in the Ordering Information table | 15              |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14813