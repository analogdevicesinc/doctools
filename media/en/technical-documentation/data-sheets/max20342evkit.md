<!-- lastmod 2022-08-03 -->
## MAX20342 Evaluation Kit

## General Description

The MAX20342 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX20342  USB Type-C ®   charger  detector  with  integrated  overvoltage protection.  The  EV  kit  features  a  Pmod™  connector, allowing  the  USB2PMB2  adapter  board  to  provide  I 2 C interface.

The EV kit features an on-board LDO to generate a supply voltage from the USB +5V. The on-board LDO output is configurable for 4.2V, 3.3V, or 2.3V to power the IC.

The  EV  kit  software  controls  the  USB2PMB2  adapter board  over  the  USB,  which  generates  I 2 C  commands. The EV kit ships with jumpers installed and supply voltages set to typical operating values.

Ordering Information appears at end of data sheet.

## MAX20342 EV Kit Photo

USB Type-C ®  is a registered trademark of USB Implementers Forum. Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Pmod is a trademark of Digilent Inc.

Evaluates: MAX20342

## Features

- USB-Powered Operation
- USB Type-C Receptable Connector
- Proven High-Speed USB PCB Layout
- Pmod I 2 C Interface
- Flexible Configuration
- On-Board Regulator and USB Connectors for Device Multiplexing
- Windows ®  8/10-Compatible GUI Software
- Fully Assembled and Tested

## Evaluation Kit Contents

- MAX20342 EV Kit
- USB2PMB2 Adapter Board
- Two USB A to Micro-B Cables
- USB Type-C Cable

<!-- image -->

## MAX20342 Evaluation Kit

## MAX20342 EV Kit Files

| FILE              | DESCRIPTION    |
|-------------------|----------------|
| MAX20342EVKit.exe | PC GUI Program |

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software. Text which is bold and underlined refers  to  items  from  the  Windows  operating system.

- MAX20342 EV Kit
- USB2PMB2 Adapter Board
- Two USB A to Micro-B Cables
- USB Type-C Cable
- Windows PC with USB Ports

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit https://www.maximintegrated.com to download  the  latest  version  of  the  EV  kit  software, MAX20342EVKitSetupVxxx.ZIP located on the MAX20342 EV kit web page. Download the EV kit software to a temporary folder and unzip the ZIP file.
- 2) Install  the  EV  kit  software  on  your  computer  by running  the MAX20342EVKitSetupVxxx.EXE program inside the temporary folder.
- 3) Verify  that  all  jumpers  are  in  their  default  positions,  as shown in Table 1.
- 4) Connect the USB2PMB2 adapter board to J1 Pmod connector on the EV Kit.
- 5) Connect a USB A-to-micro-B cable between the PC and the  X1  port  on  the  USB2PMB2.  USB  driver  should  be installed automatically.
- 6) Connect  the  USB A-to-micro-B  cable  between  the  PC and the USB1 port on the EV kit.
- 7) Start  the  MAX20342  EV  Kit  tool.  The  EV  kit  software main window appears, as shown in Figure 1.
- 8) If  connection is successfully established, the status bar the bottom displays Connected .
- 9) The EV kit is now ready for additional evaluations.

Figure 1. The Status of the GUI Shows Connected Ready for Further Evaluation

<!-- image -->

│

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the  IC  device  addresses.  The  EV  kit  enters  the  normal operating mode when the connection is established and addresses are found. If the USB connection is not detected,  the  status  bar  displays Not Connected .  If  the  USB connection is detected, but the MAX20342 is not found, the status bar displays MAX20342 Not Found .

The Read All button reads all the registers visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## ToolStrip Menu Bar

The  Toolstrip  menu  bar  (Figure  2)  is  located  at  the  top of  the  GUI  window.  This  bar  comprises File , Device , Options ,  and Help menus whose functions are detailed in the following sections.

## File Menu

The File Menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV kit to the GUI. If a board is disconnected while the GUI is open, the GUI displays Not Connected in  the  lower  right  corner.  If  the  device  is  then  plugged back  in,  the  bottom  right  corner  of  the  GUI  displays Connected .  The I2C  Read/Write in  the Device menu allows the user to read from or write to a selected register with a specified slave address.

## Options Menu

The Options menu  provides  additional  setting  to  access more  features  offered  by  the  GUI.  Read  the  registers manually instead of getting automatically frequent register updates from the IC by using the Disable polling option.

## Help Menu

The Help menu  contains  the About option,  which displays the GUI splash screen, indicating which GUI version is being used.

## Tab Controls

The MAX20342 EV kit software GUI provides a convenient way to test the features of the MAX20342. Each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write operation to the MAX20342 to update the register contents.

Figure 2. The ToolStrip Menu Items

<!-- image -->

## Evaluates: MAX20342

│

## MAX20342 Evaluation Kit

## General Tab

The General tab (Figure 3) provides all important information and options to set up the MAX20342 general configurations. The Device Information and Status panel provides detection of VBAT and VBUS. USB Switch Control and VB Switch Control can be found in the middle and right panels. Configuring low power modes can be accomplished through settings in the Low Power Mode panel.

Figure 3. General Tab

<!-- image -->

## MAX20342 Evaluation Kit

## Type-C Tab

The Type-C tab (Figure 4) configures the USB Type-C detection and displays detection status. Several Type-C modes control can be configured through the T ype-C Detection Configuration panel. The user can also select options for VCONN configuration and other settings in this tab.

Figure 4. Type-C Tab

<!-- image -->

## MAX20342 Evaluation Kit

## BC1.2 Tab

The BC1.2 tab  (Figure  5)  hosts  the  settings  for  BC1.2  charger  detection.  View  charger  detection  results  and  status according to charger type and proprietary charger. The BC1.2 Charger Detection Configuration panel  provides an Enable Charger Detection button to enable or disable the charger detection, and Manual Charger Detection button to force a charger detection manually. The Data Contact Detection panel provides the DCD timeout status and options to select wait time for DCD.

Figure 5. BC1.2 Tab

<!-- image -->

## MAX20342 Evaluation Kit

## Moisture Tab

The Moisture Tab  (Figure  6) provides settings for a moisture detection configuration. The moisture detection function can be automatically configured (by toggling on Enable  Automatic  Configuration )  or  manually  configured (by toggling off Enable Automatic Configuration ). It  also  supports  manual  triggering  (by  clicking  the Run button  next  to Manual Moisture  Detection )  or  10-second periodic triggering (by toggling on Enable Periodic Measurements ).  The  moisture  detection  function  is  run only when the MAX20342 is not in shutdown mode, and VB or a CC connection has not been detected. Refer to Moisture Detection section in the the MAX20342 IC data sheet, for details about these configurations.

The moisture detection threshold (R MOIST ) can be set by two parameters:  selecting  the  voltage  value  in Moisture  Detection Voltage Threshold drop-down menu and selecting pullup current in Moisture Detection Max Pull-up Current . Based on these selections, the program GUI updates and displays RMOIST. Refer to Table 5 of the MAX20342 IC data sheet for the conditions of moisture detected.

Evaluates: MAX20342

In manual configuration (by toggling off Enable Automatic Configuration ), select the pullup and pulldown  pins  through  the Non-Automatic  Moisture Detection  Pull-up  and  Pull-down  Settings panel.  If more than one pullup or pulldown pins are selected, the ADC results show the equivalent resistance connected in parallel.

The ADC  Results  and  Interrupts panel  outputs  the average ADC voltage results and the final pullup current. The  program  GUI  calculates  the  resistance  based  on obtained  voltage  and  current  results.  Interrupts,  selfcleared  after  read,  are  set  according  to  Figure  3  and Figure 6 of the MAX20342 IC data sheet.

Burst  measurement  happens  when  it  is  in  automatic configuration ( Enable Automatic Configuration toggled on)  and  moisture  is  detected.  Each  pin,  CC1,  CC2, SBU1,  and  SBU2  is  individually  pulled  up  while  other pins are grounded. The resistance results measured from each pin are updated in the Moisture Detection Burst Measurement Results panel.

Figure 6. Moisture Tab

<!-- image -->

│

## MAX20342 Evaluation Kit

## SBU Resistance Tab

The SBU Resistance tab (Figure 7) provides settings for debug accessory resistance detection. The detection can be  triggered  manually  (by  clicking  the Run button  next to Manual  SBU1/SBU2  Detection ),  continuously  (by toggling  on Enable  Continuous  SBU1/SBU2  Resistor Measurement ),  or  one-shot  (by  toggling  on Enable One-shot  SBU1/SBU2  Resistor  Measurement ).  One detection  consists  of  measuring  the  resistances  on SBU1/SBU2 to ground in sequence, reporting the results, and asserting the corresponding interrupts. Refer to the Debug  Accessory  Modes section  in  the  MAX20342  IC data sheet for details about these configurations.

The MAX20342 can automatically detect up to five accessory  modes  based  on  the  measured  resistance  between

Figure 7. SBU Resistance Tab

<!-- image -->

Evaluates: MAX20342

SBU1 (or SBU2) and ground. These five resistance thresholds are selected by the corresponding drop-down option from Choose an Accessory to Configure block. Configure the minimum and maximum voltage thresholds as well as pullup current for each accessory mode. With these parameters set, a resistance range for each accessory mode is defined  and  displayed  on  the  GUI.  Refer  to  Table  7  and Table  8  of  the  MAX20342  IC  data  sheet  for  the  allowed ranges of debug accessory detection.

The SBU1/SBU2 resistance results are shown in the SBU Accessory Detection Measurement Results panel. The program GUI calculates the resistance based on obtained voltage and current results.

│

## MAX20342 Evaluation Kit

## Register Map Tab

The Register Map tab (Figure 8) provides all names and values of MAX20342 registers. Click Read All at the top right corner to perform a burst read of all registers.

The left table shows the register to be read from or written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To  set  a  bit,  click  the  bit  label. Bold text  represents logic 1 and regular text represents logic 0. To configure the changes to the device, click the Write button at the bottom right.

## Detailed Description of Hardware

The  MAX20342  EV  kit  evaluates  the  MAX20342  USB Type-C  charger  detector  with  integrated  overvoltage protection  that  communicates  over  the  I 2 C  interface. The EV kit demonstrates the IC features such as BC1.2 charger  detection,  USB  Type-C  detection,  overvoltage protection,  USB  switch  control,  moisture  detection,  and SBU accessory  detection.  The  EV  kit  uses  the  IC  in  a 24-bump (2.62mm x 2.02mm) wafer-level package (WLP) on a proven, four-layer PCB design. The EV kit operates from the USB +5V DC, and therefore, does not require an external power supply. Alternatively, the EV kit can be powered with an external power supply through EXT\_5V of JU1 or EXT\_VBAT of JU2.

Figure 8. Register Map Tab

<!-- image -->

│

## MAX20342 Evaluation Kit

## Table 1. Jumper Table (JU1-JU24)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                  |
|----------|------------------|------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connect VB of U1 to VBUS of USB4. U1 powered from the USB Type-C port.       |
| JU1      | 2-3              | Connect VB of U1 to the external 5V applied at EXT_5V test point.            |
| JU2      | 1-2*             | Connect VBAT of U1 to INT_VBAT of U2. U1 powered from USB1 and regulator U2. |
| JU2      | 2-3              | Connect VBAT of U1 to the external VBAT applied at EXT_VBAT test point.      |
| JU3      | 1-2*             | Pullup SCL of U1 to VIO 3.3V.                                                |
| JU4      | 1-2*             | Pullup SDA of U1 to VIO 3.3V.                                                |
| JU5      | 1-2*             | Pullup INT of U1 to VIO 3.3V.                                                |
| JU6      | 1-2*             | Pullup CE of U1 to VIO 3.3V.                                                 |
| JU7      | 1-2*             | Connect VB of U1 to the LED indicator D3.                                    |
| JU8      | 1-2*             | Connect VBAT of U1 to the LED indicator D4.                                  |
| JU9      | 1-2*             | Connect OUT of U1 to the LED indicator D5.                                   |
| JU10     | 1-2              | Select 2.3V for INT_VBAT to supply BAT of U1.                                |
| JU10     | 1-3              | Select 3.3V for INT_VBAT to supply BAT of U1.                                |
| JU10     | 1-4*             | Select 4.2V for INT_VBAT to supply BAT of U1.                                |
| JU11     | 1-2*             | Pullup DB of U1 to VIO 3.3V.                                                 |
| JU12     | 1-2              | Connect VBUS of USB4 (USB Type-C port) to VBUS2 of USB2 and USB3.            |
| JU12     | Open             | Disconnect VBUS of USB4 (USB Type-C port) to VBUS2 of USB2 and USB3.         |
| JU14     | 1-2              | Connect VIO to the 3.3V output of regulator U3.                              |
| JU14     | 2-3*             | Connect VIO to 3.3V_EXT of J1.                                               |
| JU15     | 1-2*             | Connect VBUS2 of USB2 and USB3 to OUT of U1.                                 |
| JU15     | 2-3              | Connect VBUS2 of USB2 and USB3 to 5V supply from USB1.                       |
| JU16     | 1-2              | Connect SBU1 of U1 to pulldown resistor R18 7.5kΩ.                           |
| JU16     | 3-4              | Connect SBU1 of U1 to pulldown resistor R19 24kΩ.                            |
| JU16     | 5-6*             | Connect SBU1 of U1 to pulldown resistor R28 30kΩ.                            |
| JU16     | 7-8              | Connect SBU1 of U1 to pulldown resistor R40 80.6kΩ.                          |
| JU16     | 9-10             | Connect SBU1 of U1 to pulldown resistor R20 100kΩ.                           |
| JU16     | 11-12            | Connect SBU1 of U1 to pulldown resistor R29 150kΩ.                           |
| JU16     | 13-14            | Connect SBU1 of U1 to pulldown resistor R21 330kΩ.                           |
| JU17     | 1-2              | Connect SBU2 of U1 to pulldown resistor R22 7.5kΩ.                           |
| JU17     | 3-4              | Connect SBU2 of U1 to pulldown resistor R23 24kΩ.                            |
| JU17     | 5-6              | Connect SBU2 of U1 to pulldown resistor R30 30kΩ.                            |
| JU17     | 7-8*             | Connect SBU2 of U1 to pulldown resistor R41 80.6kΩ.                          |
| JU17     | 9-10             | Connect SBU2 of U1 to pulldown resistor R24 100kΩ.                           |
| JU17     | 11-12            | Connect SBU2 of U1 to pulldown resistor R31 150kΩ.                           |
| JU17     | 13-14            | Connect SBU2 of U1 to pulldown resistor R25 330kΩ.                           |

│

Evaluates: MAX20342

## MAX20342 Evaluation Kit

## Table 1. Jumper Table (JU1-JU24) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                |
|----------|------------------|------------------------------------------------------------|
| JU18     | 1-2              | Connect VBUS of U1 to the potentiometer selection of JU19. |
| JU18     | 3-4              | Connect SBU1 of U1 to the potentiometer selection of JU19. |
| JU18     | 5-6              | Connect SBU2 of U1 to the potentiometer selection of JU19. |
| JU18     | 7-8              | Connect CC1 of U1 to the potentiometer selection of JU19.  |
| JU18     | 9-10             | Connect CC2 of U1 to the potentiometer selection of JU19.  |
| JU18     | 11-12            | Connect CDP of U1 to the potentiometer selection of JU19.  |
| JU18     | 13-14            | Connect CDN of U1 to the potentiometer selection of JU19.  |
| JU18     | 15-16            | Connect GND to the potentiometer selection of JU19.        |
| JU19     | 1-2*             | Select potentiometer R1 50kΩ between JU19 and JU20.        |
| JU19     | 3-4              | Select potentiometer R26 300kΩ between JU19 and JU20.      |
| JU19     | 5-6              | Select potentiometer R27 1MΩ between JU19 and JU20.        |
| JU20     | 1-2              | Connect VBUS of U1 to the potentiometer selection of JU19. |
| JU20     | 3-4              | Connect SBU1 of U1 to the potentiometer selection of JU19. |
| JU20     | 5-6              | Connect SBU2 of U1 to the potentiometer selection of JU19. |
| JU20     | 7-8              | Connect CC1 of U1 to the potentiometer selection of JU19.  |
| JU20     | 9-10             | Connect CC2 of U1 to the potentiometer selection of JU19.  |
| JU20     | 11-12            | Connect CDP of U1 to the potentiometer selection of JU19.  |
| JU20     | 13-14            | Connect CDN of U1 to the potentiometer selection of JU19.  |
| JU20     | 15-16            | Connect GND to the potentiometer selection of JU19.        |
| JU21     | 1-2              | Connect CC1 of U1 to resistor R34 56.2kΩ.                  |
| JU21     | 3-4              | Connect CC1 of U1 to resistor R35 5.1kΩ.                   |
| JU21     | 5-6              | Connect CC1 of U1 to resistor R36 1kΩ.                     |
| JU22     | 1-2              | Pullup resistor R34 56.2kΩ to VBUS (R P ).                 |
| JU22     | 3-4              | Pullup resistor R35 5.1kΩ to GND (R D ).                   |
| JU22     | 4-6              | Pullup resistor R36 1kΩ to GND (R A ).                     |
| JU23     | 1-2              | Connect CC2 of U1 to resistor R37 56.2kΩ.                  |
| JU23     | 3-4              | Connect CC2 of U1 to resistor R38 5.1kΩ.                   |
|          | 5-6              |                                                            |
|          |                  | Connect CC2 of U1 to resistor R39 1kΩ.                     |
| JU24     | 1-2              | Pullup resistor R37 56.2kΩ to VBUS (R P ).                 |
| JU24     | 3-4              | Pullup resistor R38 5.1kΩ to GND (R D ).                   |
| JU24     | 4-6              | Pullup resistor R39 1kΩ to GND (R A ).                     |

* Default position

Evaluates: MAX20342

│

## Supply Voltage Selection

This section covers the procedure to select supply voltage to power the MAX20342 either from V B  or BAT.

## Supply Voltage from BAT

To select the supply voltage from BAT, configure the default jumper connections from Table 1, then connect the USB A-to-micro-B cable between the PC and the USB1 port on the EV kit. The LED D4 illuminates, indicating the voltage of BAT. The GUI program shows the battery voltage status in the General tab (see Figure 9).

Figure 9. Status of Battery Voltage Detection

<!-- image -->

│

## MAX20342 Evaluation Kit

## Supply Voltage from VB

To select the supply voltage from V B , configure default jumper connections from Table 1, then disconnect the USB A-tomicro-B cable between the PC and the USB1 port on the EV kit. Connect USB Type-C cable between the PC and the USB4 port on the EV kit. The LED D3 illuminates, indicating the voltage of V B . The GUI program shows the VBUS voltage status in the General tab (see Figure 10).

Figure 10. Status of VBUS Voltage Detection

<!-- image -->

## MAX20342 Evaluation Kit

## Supply Voltages Present on Both BAT and VB

With both valid supply voltages present on the BAT and V B  pins, the MAX20342 features an internal supply voltage selector that can be set through the VCCINTOnBAT bit of register 0x15. By default, the MAX20342 is powered from the higher valid voltages between BAT and V B . However, it is possible to switch the valid supply voltage to BAT by writing 1 to the VCCINTOnBAT bit or toggle the button in the GUI program (see Figure 11).

Figure 11. Internal Supply Voltage Switchover

<!-- image -->

│

## MAX20342 Evaluation Kit

## Moisture Detection

This  section  covers  the  procedure  to  perform  moisture detection with the MAX20342.

## Hardware setting

- 1) Follow the default jumper settings from Table 1.
- 2) Connect pin 3-4 of JU21 and pin 3-4 of JU22. Such configuration connects a 5.1kΩ resistor to pin CC1.
- 3) Do not connect any jumpers of JU23 and JU24. Such configuration leaves pin CC2 open.
- 4) Power the MAX20342 through USB1 (through BAT).
- 5) Do not connect a USB Type-C cable to the USB4 port, or supply any voltage to V B .

## GUI Program

Interpreting  moisture  detection  results  is  detailed  in  the following procedure and Figure 12.

- 1) Open  the  MAX20342  EV  kit  GUI  program.  The status bar should display Connected . Navigate to the Moisture tab.
- 2) Toggle on, if necessary, both Enable Periodic Measurements and Enable Automatic  Configuration , which are on by default. For Enable Automatic Configuration , the MAX20342 is configured to measure the resistance between CC1 (alternatively CC2) and all other USB Type-C pins which are grounded. Regarding periodic measurements, the MAX20342 updates  the  measured  resistance  every  10  seconds. In this case, the pattern repeats such that resistance measurement on CC1 is displayed, and 10 seconds later, CC2 resistance measurement is shown. Refer the MAX20342 IC data sheet for more information.
- 3) By default, the Moisture Detection Voltage Threshold is set to 0.600V, and the Moisture Detection Max Pull-up Current is 32µA. These two parameters are used  to  compute  the  moisture  resistance  threshold (R MOIST ), approximately 18.750kΩ. If the resistance result from either CC1 or CC2 is less than R MOIST , in this case 18.750kΩ, moisture is detected.

Evaluates: MAX20342

Figure 12. Moisture Detection Shows Resistance Measurement Results of CC1

<!-- image -->

│

## MAX20342 Evaluation Kit

- 4) The ADC Results  and  Interrupts panel  shows  resistance  result  for  pin  CC1.  The Measured  Resistance shows 5.147kΩ ,  which  is  close  to  the  actual resistance value connected to CC1. Since the computed resistance result is less than R MOIST 18.750kΩ, moisture  is  detected.  Click  the Read button  next to Read  Resistance  Measurement  Interrupts to display the corresponding interrupt (i.e., Moisture = 1 ).
2. Burst measurements happen after moisture is detected on CC1 (refer to Figure 2 in the  MAX20342 IC  data  sheet).  Results  are  shown  in  the Moisture Detection Burst Measurement Results panel. CC1 resistance is 5.147kΩ (discussed above). CC2 resistance is 750.0kΩ , with interrupt Open = 1 ,
3. since CC2 is left open. SBU1 resistance is 29.963kΩ due to a default jumper connection at pin 5-6 of JU16. SBU2 resistance is 80.882kΩ due to a default jumper connection at pin 7-8 of JU17.
- 5) After  10  seconds,  the  ADC  shows  the  resistance measurement of pin CC2 (see Figure 13). As CC2 is left open, the Measure Resistance displays the highest ADC value equivalent to 750.0kΩ .
- 6) The ADC Results and Interrupts panel is updated every  10  seconds.  The  resistance  measurement results  of  CC1  and  CC2  are  shown  alternatively  in Figure 12 and Figure 13.

Figure 13. Moisture Detection Shows Resistance Measurement Results of CC2

<!-- image -->

│

## MAX20342 Evaluation Kit

## SBU Resistance Detection

This section covers the procedure to perform SBU resistance detection with the MAX20342.

## Hardware Setting

- 1) Follow the default jumper settings from Table 1.
- 2) Connect a USB Type-C cable to the USB4 port. The MAX20342 is now powered through V B .

## GUI Program

Interpreting  moisture  detection  results  is  detailed  in  the following procedure and Figure 14.

- 1) Open the MAX20342 EV Kit GUI Program. The status bar displays Connected . Navigate to the SBU Resistance tab.
- 2) By  default,  the Continuous  SBU1/SBU2  Resistor Measurement is  toggled  on.  Click  the Run button next to Manual SBU1/SBU2 Detection .
- 3) This panel is used to customize the accessory resistance  ranges.  By  default, Accessory  1 resistance range is set between 28.125kΩ and 31.985kΩ.
- 4) Since  there  are  resistors  connected  to  both  pins SBU1 (30kΩ) and SBU2 (80.6kΩ), the ADC Results and Interrupts panel shows the overall SBU Detection Overall Result (refer to Table 6 of the MAX20342 IC data sheet). Click the Read button next to Read Resistance Measurement Interrupts to  show  corresponding interrupts (i.e., SBU = 1 and Abort = 1 ).
- 5) The SBU Accessory Detection Measurement Results panel shows measured resistance results from the  SBU1  and  SBU2  pins.  SBU1  resistance  shows 29.963kΩ, which is close to 30kΩ. SBU2 resistance shows 80.882kΩ, which is close to 80.6kΩ.

Figure 14. SBU Resistance Results on Both SBU1 and SBU2 Pins

<!-- image -->

Evaluates: MAX20342

│

## MAX20342 Evaluation Kit

Temporarily remove SBU2 resistance by removing jumper connection of JU17. The SBU Resistance tab shows only the measured resistance from SBU1 (see Figure 15).

- 6) Click  the Run button  next  to Manual  SBU1/SBU2 Detection to update the ADC result.
- 7) Click  the Read button  next  to Read  Resistance Measurement Interrupts to show corresponding interrupts  (i.e. SBU = 1 ).  The Measured Resistance shows 29.963kΩ , close to the actual resistance value on SBU1. Accessory 1 is detected as the measured resistance falls into the Accessory 1 range.
- 8) The SBU  Accessory Detection Measurement Results panel  shows  measured  resistance  results from SBU1 and SBU2 pins. SBU1 resistance shows 29.963kΩ , which is close to 30kΩ. SBU2 resistance shows 750.0kΩ (interrupt Open = 1 ), with SBU2 open.

## Evaluates: MAX20342

Temporarily remove SBU1 resistance by removing jumper connection of JU16. The SBU Resistance tab shows only the measured resistance from SBU2 (see Figure 16), with Accessory 2 resistance detected.

Figure 15. SBU Resistance Result with Resistor Connected to Only SBU1.

<!-- image -->

│

Figure 16. SBU Resistance Result with Resistor Connected to Only SBU2

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

| PART           | TYPE   |
|----------------|--------|
| MAX20342EVKIT# | EV Kit |

## MAX20342 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                              | MAXINV                | MFG PART #                                                                                                                                                  | MANUFACTURER                                              | VALUE             | DESCRIPTION                                                                                                                                                                          |
|--------|-------|--------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     6 | +5V, EXT_5V, EXT_VBAT, OUT, VB, VBAT | 02-TPMINI5000-00      | 5000                                                                                                                                                        | KEYSTONE                                                  | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST    |
|      2 |     6 | C1, C4-C7, C9                        | 20-0001U-04           | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG                                                                                       | MURATA; SAMSUNG ELECTRONICS; TDK                          | 1µF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL=10%; TG =-55°C TO +125°C; TC = X7R                                                                                                |
|      3 |     5 | C2, C14-C17                          | 20-004U7-72           | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10                                                                                                     | MURATA;MURATA; MURATA                                     | 4.7µF             | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7µF; 50V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X7R                                                                                   |
|      4 |     4 | C3, C11-C13                          | 20-000U1-91           | C0603C104K5RAC; C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN; 06035C104KAT2A | KEMET;TDK; PANASONIC;MURATA; TDK;TDK;SAMSUNG; SAMSUNG;AVX | 0.1µF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL=10%; TG = -55°C TO +125°C; TC = X7R; NOTE: NOT RECOMMENDED FOR NEW DESIGN USE 20-000U1-01                                       |
|      5 |     2 | C8, C10                              | EC111000002734        | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73                                                                                       | SAMSUNG;TAIYO YUDEN; KEMET;MURATA                         | 10µF              | CAP; SMT (0805); 10µF; 10%; 10V; X7R; CERAMIC CHIP                                                                                                                                   |
|      6 |     2 | CD+, CD-                             | 02-TPMINI5117-00      | 5117                                                                                                                                                        | KEYSTONE                                                  | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|      7 |     5 | CE, DBB, INT, SCL, SDA               | 02-TPMINI5002-00      | 5002                                                                                                                                                        | KEYSTONE                                                  | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                        |
|      8 |     3 | D1, D2, D6                           | 30-LSL29KG1J21Z-00    | LS L29K-G1J2-1-Z                                                                                                                                            | OSRAM                                                     | LS L29K-G1J2-1-Z  | DIODE; LED; SMART; RED; SMT (0603); PIV = 1.8V; IF = 0.02A; -40°C TO +100°C                                                                                                          |
|      9 |     3 | D3-D5                                | 30-5988070107F-00     | 598-8070-107F                                                                                                                                               | DIALIGHT                                                  | 598-8070-107F     | DIODE; LED; STANDARD; GREEN; SMT (0603); PIV=3.2V; IF=0.02A                                                                                                                          |
|     10 |     1 | D7                                   | 30-CMPZ5242B-00       | CMPZ5242B                                                                                                                                                   | CENTRAL SEMICONDUCTOR                                     | 12V               | DIODE; ZNR; SMT (SOT-23); VZ = 12V; IZ = 0.02A                                                                                                                                       |
|     11 |     1 | J1                                   | 01-TSW10608SDRA12P-17 | TSW-106-08-S-D-RA                                                                                                                                           | SAMTEC                                                    | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                                           |
|     12 |     4 | JU1, JU2, JU14, JU15                 | 01-PEC03SAAN3P-21     | PEC03SAAN                                                                                                                                                   | SULLINS                                                   | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                            |
|     13 |     9 | JU3-JU9, JU11, JU12                  | 01-PEC02SAAN2P-21     | PEC02SAAN                                                                                                                                                   | SULLINS                                                   | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                            |
|     14 |     1 | JU10                                 | 01-TSW10407LS4P-17    | TSW-104-07-L-S                                                                                                                                              | SAMTEC                                                    | TSW-104-07-L-S    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                    |
|     15 |     2 | JU16, JU17                           | 01-PEC07DAAN14P-21    | PEC07DAAN                                                                                                                                                   | SULLINS ELECTRONICS CORP.                                 | PEC07DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS                                                                                                                           |
|     16 |     2 | JU18, JU20                           | 01-PEC08DAAN16P-21    | PEC08DAAN                                                                                                                                                   | SULLINS ELECTRONICS CORP.                                 | PEC08DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65°C TO +125°C                                                                                                          |
|     17 |     1 | JU19                                 | 01-PEC03DAAN6P-21     | PEC03DAAN                                                                                                                                                   | SULLINS ELECTRONICS CORP.                                 | PEC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65°C TO +125°C                                                                                                   |
|     18 |     4 | JU21-JU24                            | 01-PBC03DAAN6P-21     | PBC03DAAN                                                                                                                                                   | SULLINS ELECTRONICS CORP.                                 | PBC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65°C TO +125°C                                                                                                           |
|     19 |     1 | R1                                   | 80-0050K-33           | 3266W-1-503LF                                                                                                                                               | BOURNS                                                    | 50K               | RESISTOR; THROUGH-HOLE-RADIAL LEAD; SQUARE TRIMMING POTENTIOMETER; 12 TURNS; 50K Ω ; 10%; 100PPM; ; TADJ; MOLDER CERAMIC OVER METAL FILM                                             |
|     20 |     5 | R2-R5, R17                           | 80-002K2-53           | CRCW06032K20JN; ERJ-3GEYJ222                                                                                                                                | VISHAY DALE; PANASONIC                                    | 2.2K              | RESISTOR; 0603; 2.2KΩ; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                 |
|     21 |     4 | R6-R8, R15                           | 80-0001K-77           | RR0816P-102-B-T5; PCF0603R-1K0B                                                                                                                             | SUSUMU CO LTD; TT ELECTRONICS                             | 1K                | RESISTOR; 0603; 1KΩ; 0.1%; 25PPM; 0.063W; METAL FILM                                                                                                                                 |
|     22 |     2 | R9, R10                              | 80-0100K-53           | ERJ-3GEYJ104; CRCW0603100KJN                                                                                                                                | PANASONIC;VISHAY                                          | 100K              | RESISTOR; 0603; 100KΩ; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                 |
|     23 |     1 | R11                                  | 80-0102K-24           | CRCW0603102KFK                                                                                                                                              | VISHAY DALE                                               | 102K              | RESISTOR; 0603; 102KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |
|     24 |     1 | R12                                  | 80-043K2-24           | CRCW060343K2FK; ERJ-3EKF4322                                                                                                                                | VISHAY DALE; PANASONIC                                    | 43.2K             | RESISTOR; 0603; 43.2KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                |
|     25 |     1 | R13                                  | 80-061K9-24           | CRCW060361K9FK                                                                                                                                              | VISHAY DALE                                               | 61.9K             | RESISTOR; 0603; 61.9KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                |
|     26 |     1 | R14                                  | 80-0124K-24           | CRCW0603124KFK                                                                                                                                              | VISHAY DALE                                               | 124K              | RESISTOR; 0603; 124KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |
|     27 |     1 | R16                                  | 80-0000R-27A          | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                                                                                              | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH                      | 0                 | RESISTOR; 0603; 0Ω; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                    |
|     28 |     2 | R18, R22                             | 80-007K5-24           | ERJ-3EKF7501; CRCW06037K50FK                                                                                                                                | PANASONIC;VISHAY                                          | 7.5K              | RESISTOR; 0603; 7.5KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |

## MAX20342 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES         | MAXINV                 | MFG PART #                                                                         | MANUFACTURER                           | VALUE           | DESCRIPTION                                                                                                                                                                              |
|--------|-------|-----------------|------------------------|------------------------------------------------------------------------------------|----------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     29 |     2 | R19, R23        | 80-0024K-24            | ERJ-3EKF2402                                                                       | PANASONIC                              | 24K             | RESISTOR; 0603; 24KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     30 |     2 | R20, R24        | 80-0100K-24            | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC     | 100K            | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     31 |     2 | R21, R25        | 80-0330K-24            | CRCW0603330KFK                                                                     | VISHAY DALE                            | 330K            | RESISTOR, 0603, 330KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                     |
|     32 |     1 | R26             | 80-0300K-H4            | 3362P-1-304LF                                                                      | BOURNS                                 | 300K            | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 300KΩ; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER                                                                                              |
|     33 |     1 | R27             | 80-0001M-86            | 3214W-1-105E                                                                       | BOURNS                                 | 1M              | RESISTOR; SMT J-LEAD; TRIMMING POTENTIOMETER; 5 TURNS; 1MΩ; 10%; 100PPM; 0.25W; TADJ                                                                                                     |
|     34 |     2 | R28, R30        | 80-0030K-24            | CRCW060330K0FK                                                                     | VISHAY DALE                            | 30K             | RESISTOR; 0603; 30KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     35 |     2 | R29, R31        | 80-0150K-24            | CRCW0603150KFK                                                                     | VISHAY DALE                            | 150K            | RESISTOR, 0603, 150KΩ,1%, 100PPM, 0.10W, THICK FILM                                                                                                                                      |
|     36 |     2 | R32, R33        | 80-0000R-BA38          | CRCW04020000Z0EDHP; RCS04020000Z0                                                  | VISHAY DRALORIC; VISHAY DALE           | 0               | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.2W; THICK FILM                                                                                                                                         |
|     37 |     2 | R34, R37        | 80-056K2-24            | CRCW060356K2FK; ERJ-3EKF5622                                                       | VISHAY;PANASONIC                       | 56.2K           | RESISTOR; 0603; 56.2KΩ; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                    |
|     38 |     2 | R35, R38        | 80-005K1-24            | ERJ-3EKF5101                                                                       | PANASONIC                              | 5.1K            | RESISTOR; 0603; 5.1KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                     |
|     39 |     2 | R36, R39        | 80-0001K-24A           | CR0603-FX-1001ELF                                                                  | BOURNS                                 | 1K              | RESISTOR; 0603; 1KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                       |
|     40 |     2 | R40, R41        | 80-080K6-24            | CRCW060380K6FK; ERJ-3EKF8062; RC0603FR-0780K6L                                     | VISHAY;PANASONIC; YAGEO                | 80.6K           | RESISTOR; 0603; 80.6KΩ; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                    |
|     41 |     4 | SPACER1-SPACER4 | 02-SOM35016H-00        | 9032                                                                               | KEYSTONE                               | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                |
|     42 |    15 | SU1-SU15        | 02-JMPFS1100B-00       | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                                              |
|     43 |     2 | TD+, TD-        | 02-TPMINI5116-00       | 5116                                                                               | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST      |
|     44 |     2 | TP1, TP2        | 02-TPMINI5001-00       | 5001                                                                               | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST    |
|     45 |     2 | TP3, TP4        | 02-TPMINI5011-00       | 5011                                                                               | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     46 |     1 | U1              | 00-SAMPLE-01           | MAX20342                                                                           | MAXIM                                  | MAX20342        | EVKIT PART - IC; MAX20342; WLP24; PACKAGE OUTLINE: 21-100430; PACKAGE CODE: W242A2+1                                                                                                     |
|     47 |     1 | U2              | 10-MAX8880EUT-U        | MAX8880EUT+                                                                        | MAXIM                                  | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                                                    |
|     48 |     1 | U3              | 10-MAX8511EXK33-X      | MAX8511EXK33+                                                                      | MAXIM                                  | MAX8511EXK33+   | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5                                                                                                              |
|     49 |     2 | UR, UT          | 02-TPMINI5118-00       | 5118                                                                               | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; GREY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST       |
|     50 |     1 | USB1            | 01-101181920001LF5P-26 | 10118192-0001LF                                                                    | FCI CONNECT                            | 10118192-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                                                                  |
|     51 |     2 | USB2, USB3      | 01-6764339114P-26      | 67643-3911                                                                         | MOLEX                                  | 67643-3911      | CONNECTOR; FEMALE; THROUGH HOLE; USB A-TYPE CONNECTOR; RIGHT ANGLE; 4PINS                                                                                                                |
|     52 |     1 | USB4            | 01-DX07S024XJ124P-26   | DX07S024XJ1                                                                        | JAE ELECTRONIC INDUSTRY                | DX07S024XJ1     | CONNECTOR; FEMALE; USB TYPE-C RECEPTACLE; THROUGH HOLE; DX07 SERIES; RIGHT ANGLE; 24PINS                                                                                                 |
|     53 |     1 | PCB             | EPCB                   | MAX                                                                                | MAXIM                                  | PCB             | PCB:MAX                                                                                                                                                                                  |

## MAX20342 EV Kit Schematic Diagrams

<!-- image -->

## MAX20342 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX20342 EV Kit PCB Layout Diagrams

MAX20342 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

│

## MAX77962 EV Kit PCB Layout Diagrams

MAX20342 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX77962 EV Kit PCB Layout Diagrams

MAX20342 EV Kit PCB Layout-Layer GND

<!-- image -->

## MAX77962 EV Kit PCB Layout Diagrams

MAX20342 EV Kit PCB Layout-Layer 3\_PWR

<!-- image -->

│

## MAX77962 EV Kit PCB Layout Diagrams

MAX20342 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77962 EV Kit PCB Layout Diagrams

<!-- image -->

MAX20342 EV Kit PCB Layout-Silkscreen Bottom

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20342