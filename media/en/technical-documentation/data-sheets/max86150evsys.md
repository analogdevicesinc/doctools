<!-- lastmod 2022-08-04 -->
## MAX86150 Evaluation System

## General Description

The MAX86150 Evaluation System (EV system) provides  a  proven  platform  to  evaluate  the  MAX86150 integrated photoplethysmogram (PPG) and 1-lead electrocardiogram (ECG) sensor module. The EV system consists of two boards that connect through header pins: a MAX32630FTHR microcontroller board and a MAX86150 evaluation  kit  (EV  kit).  The  MAX32630FTHR  houses a  microcontroller  with  preloaded  firmware,  Bluetooth communication,  and  power  management.  The  sensor board contains the MAX86150 module and two stainless steel  dry  electrodes  for  ECG  measurement.  The  EV  kit is  powered  by  the  included  lithium  ion  battery,  which  is charged with a micro-USB cable.

## MAX86150 EV System Photo

<!-- image -->

## MA86150 EV System Files

| FILE                        | DECRIPTION            |
|-----------------------------|-----------------------|
| SetupECPPG_EvKit.msi        | EV Software Installer |
| MAX86150EVSYS_Firmware.msbl | EV System Firmware    |

Windows is a registered trademark and registered service marks of Microsoft Corporation.

## Features

- Real-Time Monitoring of PPG and 1-Lead ECG
- Data-Logging Capability
- Windows ®  10 Compatible GUI Software
- Integrated Dry Electrodes
- Fully Assembled and Tested

## EV System Contents

- MAX86150 EV kit
- MAX32630FTHR
- Pico programming adapter
- 2 x USB A to micro-USB cables
- 500mAh lithium polymer battery

Ordering Information appears at end of data sheet.

Evaluates: MAX86150

<!-- image -->

## Quick Start

## Required Equipment

Note: In  the  following  section, text  in  bold  refers  to items directly from the install of EV software . Text in bold with underline refers to items from the Windows operating system .

- MAX86150 EV system
- Windows 10 PC with integrated Bluetooth or Bluetooth adapter (not included)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install the EV software.
- Download  and  extract  the  latest  EV  software from  the  MAX86150  Design  Resources  page (MAX86150EVSYS\_PcGuiWin.zip)
- Double-click  the  SetupECPPG\_EvKit.msi  file to run the installer. If a message box stating 'The publisher could not be verified. Are you sure you want to run this software?' appears, select Yes .
- When the installer GUI appears, read and accept the  License Agreement, and click  Install .  When the  installation  completes, click  Finish .  The installed  software  is  named  DeviceStudio5,  and a shortcut is automatically added to your desktop.
- 2) Turn on the EV kit.
- Connect  the  battery  to  the  plastic  connector  as shown in the MAX86150 EV System Photo .
- Press and hold SW1 for 400ms. LED indicator D1 flashes red to indicate that the Bluetooth is ready to pair.
- 3) Pair the EV kit to your Windows PC.
- If  your  PC  does  not  have  integrated  Bluetooth hardware, a generic Windows 10 USB Bluetooth adapter can be used. Install any necessary software and connect the adapter before proceeding.
- Open  the  Bluetooth  settings  panel on  your PC  and click  Add  Bluetooth  or  other  device. Scan for Bluetooth devices and select MAX86150EVSYS# .  The  scanning  process  can take up to one minute to recognize the EV kit.
- When Windows prompts you to match the device PIN, click Connect .
- 4) Connect the EV kit to the EV software.
- Open DeviceStudio5 and click the Scan button . The software connects to the EV kit and displays hardware and software information. Once connected, the EV kit LED flashes blue.
- In the Tools section, click Launch Tool .
- 5) Click Start Monitoring to  view  live  ECG  and  PPG data.  Place  one  finger  from  each  hand  on  the stainless-steel electrodes to measure ECG (see the ECG Measurement section) and rest a finger over the sensor  module  to  measure  PPG  (see  the PPG Measurement section).  If  measuring  both  signals simultaneously,  take  care  not  to  touch  any  metal components or bare solder near the module because doing so degrades the ECG signal.

## Evaluates: MAX86150

## MAX86150 Evaluation System

## Detailed Description of Software

The EV software provides a graphical user interface (GUI) to  interact  with  the  EV  system  hardware  and  visualize the measurement data. There are three main GUI pages: Device Info, ECG and PPG Evaluation kit, and Register Map, which can be viewed through the View menu and are detailed in the following sections.

## Device Info

The Device Info page, shown in Figure 1 , is used to scan for connected devices and display the software, firmware, and hardware versions. Click Scan to detect any devices using USB or Bluetooth. Once detected, click Launch Tool to open to open the PPG and ECG Evaluation Kit page.

Figure 1. The Device Info Page Is Used to Connect with the EV System

<!-- image -->

Evaluates: MAX86150

│

## MAX86150 Evaluation System

## PPG and ECG Evaluation Kit

This page, shown in in Figure 2 ,  gives  control  of  device  register  settings,  displays  live  sensor  data,  and  allows  data logging. Each function is detailed in the subsections below. Click Start Monitoring to begin viewing live sensor data and click Stop Monitoring to halt data collection. Settings can only be modified when monitoring is not active.

Figure 2. The ECG and PPG EV Kit Page Is Used to Control the EV System and View Live Data.

<!-- image -->

│

## MAX86150 Evaluation System

## ECG and Filter Settings

The ECG Settings, shown in Figure 3 ,  control  registers corresponding to the ECG analog front end. See Table 1 for details. The Filter Settings, shown in Figure 3 , control software filters that are applied to the Filtered ECG signal. The Filtered ECG signal is delayed 17 samples from the Raw ECG signal. See Table 2 for details.

Figure 3. ECG and Filter Settings

<!-- image -->

## Table 1. ECG Settings Details

| ECG SETTING   | REGISTER [BITS]           | ADDR   | DESCRIPTION                                                                |
|---------------|---------------------------|--------|----------------------------------------------------------------------------|
| IA Gain       | ECG Configuration 3 [1:0] | 0x3E   | Differential input chopping instrumentation amplifier gain setting (mV/mV) |
| ECG Gain      | ECG Configuration 3 [3:2] | 0x3E   | PGAgain (mV/mV)                                                            |
| Sample Rate   | ECG Configuration 1 [2:0] | 0x3C   | Delta sigmaADC output data rate (sps)                                      |

## Table 2. Filter Settings Details

| FILTER SETTING   | DESCRIPTION                                                                                                       |
|------------------|-------------------------------------------------------------------------------------------------------------------|
| Adaptive Filter  | Enables the adaptive hybrid-time-domain software filter.                                                          |
| Notch Freq       | Sets the frequency of the software notch filter. Set to theAC main frequency in your region for best performance. |
| Cutoff Freq      | Sets the cutoff frequency for the software low-pass filter.                                                       |

│

Evaluates: MAX86150

## PPG and FIFO Settings

The PPG Settings tabs,  shown  in Figure  4 ,  control  configuration  registers  for  the  PPG  analog  front  end.  The  FIFO Settings tab, shown in Figure 4 , controls FIFO configuration register in the digital interface. See Table 3 for details.

Figure 4. PPG and FIFO Settings

<!-- image -->

## Table 3. PPG and FIFO Settings Details

| PPG SETTING        | REGISTER [BITS]           | ADDR   | DESCRIPTION                                                                                                      |
|--------------------|---------------------------|--------|------------------------------------------------------------------------------------------------------------------|
| AGC                | N/A                       | N/A    | Enables automatic gain control, which allows the EV software to dynamically adjust the LED current andADC range. |
| IR PA              | LED2 PA [7:0]             | 0x12   | Adjusts the IR LED current amplitude in conjunction with IR Range                                                |
| Red PA             | LED1 PA [7:0]             | 0x11   | Adjusts the Red LED current amplitude in conjunction with Red Range                                              |
| IR Range           | LED Range [3:2]           | 0x14   | IR LED current range                                                                                             |
| Red Range          | LED Range [1:0]           | 0x14   | Red LED current range                                                                                            |
| ALC + FDM          | PPG Configuration 1 [7]   | 0x0F   | Enables ambient light cancellation                                                                               |
| Sample Rate        | PPG Configuration 1 [5:2] | 0x0E   | PPG sample rate                                                                                                  |
| Pulse Width        | PPG Configuration 1 [1:0] | 0x0E   | LED current pulse width                                                                                          |
| ADC Range          | PPG Configuration 1 [7:6] | 0x0E   | PhotodiodeADC full-scale range                                                                                   |
| FIFO Rolls on Full | FIFO Configuration [4]    | 0x1F   | When the FIFO is full, new samples overwrite existing unread samples.                                            |
| FIFO Almost Full   | FIFO Configuration [3:0]  | 0x1F   | Controls the number of unread samples in the FIFO that causes an alert.                                          |
| Sample Averaging   | PPG Configuration 2 [1:0] | 0x19   | Controls the PPG averaging filter width. Only available whenAGC is disabled.                                     |

## MAX86150 Evaluation System

## Plot Controls

Each plot can hold two data series on the same Y-axis or two Y-axes. Click on the value box for a data type to cycle between the primary Y-axis, secondary Y-axis, and hidden. By default, the two axes auto-scale independently. If  Sync  Y  Scales  is  enabled,  the  vertical  axes  have the  same  vertical  scale,  but  the  vertical  offsets  remain independent.

## Data Logging

Enable Log to File to record the desired data to a CSV file. Enable Write Header to include a row of data labels and enable Write Settings to include a list of GUI settings at the top of the log file. Click Browse to designate a file location  and  click  Select  Data  to  choose  which  data  to include in the log file, as shown in Figure 5.

Figure 5. Data Log Selection Window

<!-- image -->

Evaluates: MAX86150

│

## MAX86150 Evaluation System

## Register Map

This page, shown in Figure 6 , shows the contents of each register in the MAX86150 and allows them to be written to user values. Clicking on the fields for each register allows you to change the decimal value, the hexadecimal value, or individual bits. For changes to take effect, change the Update Registers option to Selected, and click Set Reg. Registers can be manually read and set using the Manual Update section.

Figure 6. The Register Map Page Allows the User to Read and Write the MAX86150 Registers

<!-- image -->

## MAX86150 Evaluation System

## Prerequisite for HDK Adapter ONLY

Depending  on  the  build  date,  the  MAX86150EVSYS ships  with  either  a  MAX32625PICO  or  a  Maxim  HDK board.  The  HDK  adapter  firmware  image  needs  to  be updated  to  enable  drag-and-drop  programming  to  the MAX32630FTHR  board.  This  update  only  needs  to  be performed once, and then the HDK can be used to update the  MAX32630FTHR by following the  Firmware  Update Procedure.

- 1) Start with the HDK adapter unplugged from both the PC and the EVKIT. Open File Explorer on your PC to see a list of active drives.
- 2) While holding down the button on the HDK adapter, connect the HDK port to your PC with a USB-A to micro-USB cable. Continue to hold the button until a drive named MAINTENANCE appears in File Explorer.
- 3)  Download the DAPLINK image from this link: https:// os.mbed.com/media/uploads/switches/max32620\_ daplink\_max32630fthr.bin
- 4) Drag and drop the downloaded file onto the MAIN -TENANCE drive. After the file transfer completes, the MAINTENANCE drive disappears and is replaced by a DAPLINK drive a few seconds later. Once the DAPLINK drive appears, continue to step 2.

## Updating the EV System Firmware

The EV software allows firmware updates to be flashed to the microcontroller via the included programming adapter. Follow the steps below to update the firmware:

## Evaluates: MAX86150

- 1) Connect the programming adapter.
- Connect the programming adapter to the MAX32630FTHR with the 10-pin JTAG connector as shown in Figure 7.
- Connect a micro-USB cable between the HDK port on the programming adapter and your PC. For the HDK, use the port labeled HDK.
- Connect  a  battery  or  a  micro-USB  cable  to  the MAX32630FTHR  to  supply  power.  Power  is  not supplied  via  the  10-pin  JTAG  connector.  If  the MAX32630FTHR LED is  not  flashing,  press  and hold SW1 for two seconds to power on the board.
- 2) Flash the new firmware.
- Download and extract the latest EV system firmware  from  the  MAX86150's  Design  Resources page (MAX86150EVSYS\_PC\_GUI\_Win10.zip)
- Drag  and  drop  the  'MAX86150EVSYS\_FTHR\_ FW.bin' file onto the DAPLINK drive and wait for the file transfer to complete. The red LED on the programming adapter flashes to indicate the firm -ware flash ins in progress.
- Open the file transfer is complete and the adapter has  stopped  flashing,  press  the  button  on  the adapter  to  reset  the  MAX32630FTHR.  The  firmware update is not complete.
- 3) When  the update is complete, reassemble the EV  system  and  unplug  the  programming  adapter. Power cycle the EV system and follow the Quick Start section to reconnect it.

Figure 7. Programming Adapter Connections

<!-- image -->

│

## MAX86150 Evaluation System

## Detailed Description of Hardware

The MAX86150 EV system hardware provides a platform to evaluate the PPG and ECG measurement capabilities of the MAX86150. The EV kit board contains the MAX86150 module  with  supporting  components,  stainless  steel dry  electrodes  for  ECG  measurement,  a  passive  ECG filter,  and  a  header  pin  socket  for  the  MAX32630FTHR. The  MAX32630FTHR  Cortex-M4F  Microcontroller  for Wearables provides an interface between the MAX86150 and the EV kit software as well as power for the system.

## Powering the EV System

The  EV  system  is  powered  by  a  lithium  ion  or  lithium polymer battery and the MAX14690 power management IC (PMIC) included on the MAX32630FTHR. The PMIC turns on power to the system when SW1 is pressed for at least 400ms and turn off power when SW1 is held for 12s. When powered on, the PMIC supplies the rest of the MAX32630FTHR with power and supplies 3.3V to VLED on the EV kit board via an internal LDO. The EV kit has a MAX8511 ultra-low-noise linear regulator to step VLED down to 1.8V for the VDD analog supply. The PMIC also has  an  integrated  battery  charger  and  is  configured  to automatically charge the battery at 100mA when a microUSB  cable  is  connected.  Note:  The  micro-USB  cable should not be connected when measuring ECG, as the noise introduced by the cable will obscure the sensitive ECG signal.

## ECG Analog Filter

The EV kit has a passive first-order common-mode and differential filter at the ECG inputs to the MAX86150. The board comes populated with components that implement a  common-mode lowpass filter  with  a  corner  frequency of  319kHz  (R2,  R3,  C2,  and  C4).  The  differential-mode capacitor  is  not  populated  as  it  is  not  needed  in  most applications. The purpose of this analog filter is to reject high-frequency EMI; low-frequency filtering is done by the internal  filters  of  the  MAX86150.  The  filter  components were chosen as a tradeoff between input impedance and component size, and the corner frequency is not critical.

## ECG Measurement

After  following  the  steps  in  the Quick  Start section, measure ECG lead I by firmly placing a right-hand finger on  the  ECG\_N  electrode  (TP1)  and  a  left-hand  finger on  the  ECG\_P  electrode  (TP2),  as  shown  in Figure  8. Alternately, an ECG signal generator can be connected to the ECG\_N and ECG\_P test loops to simulate contact. To achieve the best ECG signal performance, be careful not to touch any other conductive points on the EV kit board or  conductive  surfaces  in  the  environment.  The  microUSB cable should be detached to isolate the board from EMI transmitted through the cable.

Figure 8. Finger Placement for ECG Measurement

<!-- image -->

## Evaluates: MAX86150

│

## MAX86150 Evaluation System

## PPG Measurement

After  following  the  steps  in  the Quick  Start section, measure PPG by lightly resting a finger from either hand on the MAX86150 module, as shown in Figure 9. When monitoring is active, the module uses IR proximity mode

## Evaluates: MAX86150

to detect a finger, so the red LED will not turn on until a finger  is  near  the  module.  To  measure  ECG  and  PPG simultaneously, place fingers as shown in Figure 10 being careful not to touch any nearby components or test points.

Figure 9. Finger Placement for PPG Measurement

<!-- image -->

Figure 10. Finger Placement for ECG and PPG Measurement

<!-- image -->

│

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX86150EVSYS# | EV SYSTEM |

#Denotes RoHS compliant.

## MAX86150 EV System Bill of Materials (BOM)

|   ITEM |   QTY | REF DES                                                | MFG PART #                                        | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                                                                                               |
|--------|-------|--------------------------------------------------------|---------------------------------------------------|---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     1 | C1                                                     | JMK063ABJ105MP                                    | TAIYO YUDEN               | 1UF           | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 6.3V; TOL = 20%; MODEL = ; TG = -25°C TO +85°C; TC = X5R                                                                                        |
|      2 |     2 | C2, C4                                                 | C0402C100K4GACTU                                  | KEMET                     | 10PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = C0G                                                                                                 |
|      3 |     2 | C5, C7                                                 | C0402X5R6R3-105JNP                                | VENKEL LTD.               | 1UF           | CAPACITOR; SMT; 0402; CERAMIC; 1uF; 6.3V; 5%; X5R; -55°C to + 85°C; 0 ± 15%°C MAX., USE 20-0001u-B8 FOR NEW DESIGN                                                                        |
|      4 |     2 | C6, C8                                                 | CL05A106MP5NUNC                                   | SAMSUNG ELECTRONICS       | 10UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TG = -55°C TO +85°C; TC = X5R                                                                                                             |
|      5 |     2 | C10, C12                                               | GRM155R71A104KA01; C1005X7R1A104K; C0402C104K8RAC | MURATA;TDK;KEMET          | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-000u1-04A                           |
|      6 |     1 | C13                                                    | CL05A225KP5NSN                                    | SAMSUNG ELECTRONICS       | 2.2UF         | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 10V; TOL=10%; TG = -55°C TO +85°C; TC = X5R                                                                                                        |
|      7 |     9 | ECG_N, ECG_P, GND_ANA, INTB, PGND, SCL, SDA, VDD, VLED | 5006                                              | KEYSTONE                  | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|      8 |     1 | J1                                                     | PBC12SAAN                                         | SULLINS ELECTRONICS CORP. | PBC12SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65°C TO +125°C                                                                                                               |
|      9 |     1 | J2                                                     | PBC16SAAN                                         | SULLINS ELECTRONICS CORP. | PBC16SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65°C TO +125°C                                                                                                               |
|     10 |     1 | R1                                                     | CRCW04024K70FK                                    | VISHAY DALE               | 4.7K          | RESISTOR, 0402, 4.7K Ω , 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                  |
|     11 |     2 | R2, R3                                                 | 288-0603-49.9K-RC                                 | XICON                     | 49.9K         | RESISTOR, 0603, 49.9K Ω , 0.1%, 10PPM, 1/16W, THIN FILM                                                                                                                                   |
|     12 |     1 | U1                                                     | MAX86150EFF+                                      | MAXIM                     | MAX86150EFF+  | EVKIT PART-IC; MAX86150EFF+; OLGA22 3.3X5.6X1.3; 0.5MM PITCH                                                                                                                              |
|     13 |     1 | U2                                                     | MAX8511EXK18+                                     | MAXIM                     | MAX8511EXK18+ | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW = DROPOUT; LINEAR REGULATOR; SC70-5                                                                                                             |
|     14 |     1 | PCB                                                    | MAX86150FTHR                                      | MAXIM                     | PCB           | PCB:MAX86150FTHR                                                                                                                                                                          |

│

## MAX86150 EV System Schematic

<!-- image -->

## MAX86150 Evaluation System

## MAX86150 EV System PCB Layout Diagrams

MAX86150 EV System-Top Silkscreen

<!-- image -->

MAX86150 EV System-Top Layer

<!-- image -->

Evaluates: MAX86150

│

## MAX86150 EV System PCB Layout Diagrams (continued)

MAX86150 EV System-Layer 2

<!-- image -->

MAX86150 EV System-Layer 3

<!-- image -->

│

## MAX86150 EV System PCB Layout Diagrams (continued)

MAX86150 EV System-Bottom Layer

<!-- image -->

MAX86150 EV System-Bottom Silkscreen

<!-- image -->

## MAX86150 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/17            | Initial release                                                                                             | -               |
|                 1 | 11/17           | Updated Ordering Information and General Description                                                        | 1, 12           |
|                 2 | 11/18           | Replaced all figures and sections to reflect updated hardware and software updates                          | 1-17            |
|                 3 | 6/19            | Updated the Updating the EV System Firmware section and added the Prerequisite for HDK Adapter ONLY section | 9               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX86150