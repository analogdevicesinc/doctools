<!-- lastmod 2025-06-19 -->
<!-- image -->

## General Description

The MAX77789 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that evaluates the MAX77789,  standalone  3.15A  USB  Type-C ®   and  I 2 C configurable charger in WLP Package.

The MAX77789 EV kit includes the IC evaluation board, USB micro-B  cable,  and  MAXUSB\_INTERFACE#  board.  The MAXUSB\_INTERFACE# board allows the use of Windows ® based graphical user interface (GUI) software with the EV kit and can be downloaded from the Analog Devices website at www.analog.com/en/products/MAX77789.html (under the Design &amp;  Development tab). Windows  7 or newer Windows operating system is required to use the EV kit software.

## MAX77789 EV Kit Photo

Figure 1. MAX77789 EV Kit Photo

<!-- image -->

USB Type-C is a registered trademark of USB Implementers Forum. Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Evaluates  the  MAX77789  USB  Type-C  Autonomous Charger for Single Cell Li-Ion Battery
- 4.6V to 13.4V Input Operating Range
- Supports Charging Current Up to 3.15A
- Demonstrates 5V, 1.5A OTG Mode, and BYP Reverse Boost
- Includes  On-Board  Thermistor  Options  to  Validate JEITA Compliance
- Demonstrates  USB  Type-C  Power  Source  Detection and Sink Devices
- Demonstrates Spread Spectrum
- Easy Evaluation of Factory Ship Mode
- MAXUSB\_INTERFACE# Allows Easy Communication with a Windows PC
- GUI Software that Drives the I 2 C Serial  Interface for Optional Software Control

Ordering Information appears at end of data sheet .

Evaluates: MAX77789

319-100990; Rev 2; 6/25

## MAX77789 Evaluation Kit

## MAX77789 EV Kit Files

| SOFTWARE                  | DESCRIPTION                        |
|---------------------------|------------------------------------|
| MAX77789GUISetupX.X.X.exe | Installs the EV kit software on PC |

## MAX77789 EV Kit Component List

| HARDWARE                     |   QTY | DESCRIPTION                                |
|------------------------------|-------|--------------------------------------------|
| MAX77789 EV kit              |     1 | MAX77789 evaluation kit                    |
| USB high-speed A-to- B cable |     1 | USB Micro-B cable                          |
| MAXUSB interface board       |     1 | Interface for the MAX77789 EV kit software |

## Quick Start

## Required Equipment

- MAX77789 evaluation kit
- USB Type-C travel adapter and cable
- USB Micro-B cable
- MAXUSB interface board
- PC with  Windows  7  or  newer  operating  system  and USB port
- Battery or battery simulator
- Power supply
- Oscilloscope
- Multimeters

## Setup Overview

A typical bench setup for the MAX77789 EV kit is shown in Figure 2 .

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify the board operation. Use twisted wires that are as short  as  possible  to  connect  the  battery  and  power sources. Make sure the PC is connected to the internet throughout  the  process  so  that  the  USB  driver  can  be automatically installed.

Note: Do  not  turn  on  the  DC  power  supply  until  all connections are made.

## Evaluates: MAX77789

1. Visit www.analog.com/products/MAX77789 under  the Design  &amp;  Development tab  to  download  the  latest version  of  the  MAX77789  EV  kit  software.  Save  the software to a temporary folder and unpack the zip file.
2.  Install the EV kit software on the computer by running the MAX77789GUISetupX.X.X.exe program inside the temporary  folder.  This  copies  the  program  files  and creates  an  icon  in  the  Windows Start menu.  The software requires the .NET Framework 4.5 or later. If connected  to the internet,  Windows  automatically updates the .NET Framework as needed.
3.  The  EV  kit software launches  automatically after installation,  and  it  can  be  launched  by clicking on its icon in the Windows Start menu.
4.  Make jumper connections based on the default position column  in Table  1 .  Change  it  later  when  evaluating more features.
5.  Plug in the MAXUSB interface board into the connector J10 on the EV kit.
6.  Use the USB Micro B cable provided with the EV kit to connect the MAXUSB interface board to the PC's USB port.
7. Connect  a  1-cell  battery  or  simulated  battery  to  the connectors labeled BATT and GND2. Connect a DC power  supply  to  the  connectors  labeled  CHGIN  and GND6. Note that CHGIN can come from three sources (the Micro-USB connector, the USB Type-C connector, or  the  CHGIN  loop),  but  only  one  of  these  sources should  be  connected  at  any  time.  Take  note  that  if CHGIN comes from the CHGIN loop, the GUI must be connected, and the BC1.2 dependency register under the BC/CC control tab must be written to 1, then the EV kit  can  be  powered  up  successfully,  whereby  the STAT1 and INOKB LEDs lit up. This is not required for the Micro-USB connector or the USB Type-C connector.
8. 8.
9.  Launch the MAX77789 GUI software.
10. Select  Device→Connect  from  the  window  options  to connect to the EV kit.

Evaluates: MAX77789

Figure 2. MAX77789 EV Kit Board Connections

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER NUMBER   | DEFAULT POSITION Short 3-4   | FUNCTION                                                    |
|-----------------|------------------------------|-------------------------------------------------------------|
| J3              |                              | Short 1-2: Connect THM pin to a variable resistor           |
| J3              |                              | Short 3-4: Connect THM pin to a thermistor                  |
| J3              |                              | Short 5-6: Connect THM pin to a fixed value resistor 10K    |
| J3              |                              | Short 7-8: Connect THM pin to GND                           |
| J4, J5          | Short 1-2                    | Short 1-2: Connect SDA, SCL pins to MAXUSB interface module |
| J4, J5          | Short 1-2                    | Short 3-4: Connect SDA, SCL pins to VCC18                   |
| J4, J5          | Short 1-2                    | Short 5-6: Connect SDA, SCL pins to GND                     |
| J6              | Short 3-4                    | Short 1-2: Connect INTB pin to MAXUSB interface module      |
| J6              | Short 3-4                    | Short 3-4: Connect INTB pin to VCC18                        |
| J6              | Short 3-4                    | Short 5-6: Connect INTB pin to GND                          |
| J7              | Short 1-2                    | Short 1-2: Connect on-board LDO input to BATT               |
| J8              | Open                         | Short 1-2: Connect CC1 to 10K pull-up resistor              |
| J8              | Open                         | Short 3-4: Connect CC1 to 22K pull-up resistor              |
| J8              | Open                         | Short 5-6: Connect CC1 to 56K pull-up resistor              |
| J9              | Open                         | Short 1-2: Connect CC2 to 10K pull-up resistor              |
| J9              | Open                         | Short 3-4: Connect CC2 to 22K pull-up resistor              |
| J9              | Open                         | Short 5-6: Connect CC2 to 56K pull-up resistor              |
| J11             | Open                         | Short 1-2: Connect EXTSM pin to SYS                         |
| J11             | Open                         | Short 3-4: Connect EXTSM pushbutton to BATT                 |
| J12             | Open                         | Short 1-2: Connect STBY pin to VCC18 (for USB suspend mode) |
| J13             | Open                         | Short 1-2: Connect CC2 pin to 5.1K pull-down resistor       |
| J14             | Open                         | Short 1-2: Connect 5.1K pull-down resistors to GND          |
| J15             | Open                         | Short 1-2: Connect CC1 pin to 5.1K pull-down resistor       |
| J17             | Short 1-2                    | Short 1-2: Connect VCC18 to on-board LDO output             |
| J17             | Short 1-2                    | Short 2-3: Connect VCC18 to MAXUSB interface module         |
| J18             | Short 1-2                    | Short 1-2: Connect STAT2 pin to LED and pull-up resistor    |
| J19             | Short 1-2                    | Short 1-2: Connect STAT1 pin to LED and pull-up resistor    |
| J20             | Short 1-2                    | Short 1-2: Connect INOKB pin to LED and pull-up resistor    |
| J21             | Short 2-3                    | Short 1-2: Connect OVLOA pin to resistor divider            |
| J21             | Short 2-3                    | Short 2-3: Connect OVLOA pin to GND                         |
| J22             | Short 2-3                    | Short 1-2: Connect OVLOB pin to pull-up resistor            |
| J22             | Short 2-3                    | Short 2-3: Connect OVLOB pin to GND                         |
| J23             | Short 2-3                    | Short 1-2: Connect OTG_ENA pin to pull-up resistor          |
| J23             | Short 2-3                    | Short 2-3: Connect OTG_ENA pin to GND                       |

## Evaluates: MAX77789

| JUMPER NUMBER   | DEFAULT POSITION   | FUNCTION                                           |
|-----------------|--------------------|----------------------------------------------------|
| J24             | Short 2-3          | Short 1-2: Connect OTG_ENB pin to pull-up resistor |
| J24             | Short 2-3          | Short 2-3: Connect OTG_ENB pin to GND              |
| J25             | Short 2-3          | Short 1-2: Connect PCON pin to pull-up resistor    |
| J25             | Short 2-3          | Short 2-3: Connect PCON pin to GND                 |
| J26             | Short 2-3          | Short 1-2: Connect OVP_ENB pin to pull-up resistor |
| J26             | Short 2-3          | Short 2-3: Connect OVP_ENB pin to GND              |
| J27             | Short 5-6          | Short 1-2: Connect VCCEN pin to pull-up resistor   |
| J27             | Short 5-6          | Short 3-4: Connect VCCEN pin to STAT2              |
| J27             | Short 5-6          | Short 5-6: Connect VCCEN pin to GND                |

## Detailed Description of Software

The MAX77789 GUI software provides an easy-to-use interface to control the function blocks of the IC.

## Software Installation

Double-click the MAX77789GUISetupX.X.X.exe icon to begin the installation process. Follow the prompts to complete the installation. The evaluation software can be uninstalled in the Add/Remove Programs tool in the Control Panel . After the installation is complete, open the Analog Devices/MAX77789 folder and run MAX77789.exe or select it from the program menu. Figure 3 shows a splash screen containing information about the evaluation kit that appears while the program is loading.

Figure 3. Splash Screen

<!-- image -->

## MAX77789 Evaluation Kit

## Establish Communication

Power up the MAX77789 by connecting a 1-cell battery or simulated battery at BATT/GND. Open the GUI software and select Device → Connect . A window should pop up showing that a slave address 0xD2 has been found. If not, check the USB  connection  and  power.  Choose Read  and  Close and  the  status  bar  displays  'Connected'  to  signify  active communication. An example of a successful connection is shown in Figure 4 .

Figure 4. Communication Window

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Main Display

Status bits and programmable functions of the charger can be accessed through the interface tabs in the left column of the window as shown in Figure 5 . Follow the guidance on the MAX77789 IC data sheet for the usage of each register.

Figure 5. Top-Level Registers

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Register Explorer

To view the ICs register map, select the Tools → Register Explorer menu from the main window. The value of all control registers is displayed and updated automatically when changes are made using the GUI.

Double-click on register or bit names to open the selection to manually program the ICs registers. Writeable registers are indicated with a teal-colored background in the Meaning column as shown in Figure 6 .

Figure 6. Register Explorer

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Register Dashboard

A Register Dashboard is also provided under Tools → Register Dashboard . In this interface, clicking on the empty slots allows the user to display specific registers of interest and their values in a compact window, as shown in Figure 7 .

Figure 7. Register Dashboard

<!-- image -->

Evaluates: MAX77789

## Detailed Description of Hardware

## Battery Charger Test Setup

1.  Connect a 1-cell battery pack or simulated battery between BATT and GND2. For the battery simulator, adjust the voltage to 3.8V with a 3.5A current limit, and turn it on.

Note: Only use a battery pack with a charge termination voltage that matches the setting on the board (see step 8).

2. Connect the MAXUSB interface board to J10 on the EV kit. Then connect the MAXUSB interface board to the PC with a USB Micro-B cable.
3. Connect the DC power supply between CHGIN and GND6 on the EV kit board.
4. Adjust voltage and current limits of the DC power supply to 5.0V and 3.5A. Output of the power supply is off.
5. Open the EV kit software and connect to the EV kit ( Device→Connect ).
6. In this case, since CHGIN is coming from the CHGIN loop, set BC1.2 dependency from Type C under the BC/CC Control tab. Then click Write to send the command. If CHGIN come from a USBC or Micro USB source, then this step can be skipped.

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

Evaluates: MAX77789

7.  Set Charger Settings Protection under the Configuration 4-7 tab to 0x3 = Write capability unlocked . Click Write to send the command. Note that 0x3 must be written to unlock the charger register setting.

<!-- image -->

## MAX77789 Evaluation Kit

Evaluates: MAX77789

8.  Program  the  appropriate  charger  settings  for  your  system.  CHGIN  input  current  limit  can  be  programmed  with CHGIN\_ILIM by setting Bypass USBC control for INLIM to 1 .

In  the Configuration 8-12 tab,  set CHGIN input current limit (CHGIN\_ILIM) in  the Charger Configurations 9 register. Click Write to send the command to the charger. Note that the maximum setting of the CHGIN input current limit for the MAX77789 is 0x7F = 3200mA .

<!-- image -->

## MAX77789 Evaluation Kit

Evaluates: MAX77789

9. In the Configuration 0-3 tab, set Battery Charging Current in the Charger Configurations 2 register. Click Write to send the command to the charger. Note that the maximum setting of Fast Charge Current for the MAX77789 is 0x3F = 3150mA .

At the same time, set Smart Power Selector to 0x5 = Charger = On, Buck = On, OTG = Off, and Boost = Off and click Write to enable charger mode.

<!-- image -->

## MAX77789 Evaluation Kit

Evaluates: MAX77789

10.  In the Configuration 4-7 tab, set Charge Termination Voltage Setting in the Charger Configurations 4 register . Click Write to send the command to the charger. Note that the maximum setting of Charge Termination Voltage setting for the MAX77789 is 0x3F = 4.55V.
11. Turn on the DC power supply's output to enable charging.
12.  Use data log equipment to log the charge current and battery voltage profile while charging a 1-cell battery.

<!-- image -->

## MAX77789 Evaluation Kit

## BC1.2 and CC Detection Setup

1.  Connect a 1-cell battery pack or simulated battery between BATT and GND2. For the battery simulator, adjust the voltage to 3.8V with a 3.5A current limit, and turn it on.
2.  Set Charger Settings Protection under Configuration 4-7 tab to 0x3 = write capability unlocked. Click Write to send the command. Note that 0x3 must be written to unlock the charger register setting.
3.  For the input current limit, which is set by USB, set Bypass USBC control for INLIM to 0 .
4.  In the Configuration 0-3 tab, set Battery Charging Current to 0x3F (3150mA) in the Charger Configurations 2 register. Click Write to send the command to the charger.
5. At the same time, set Smart Power Selector to 0x5 = Charger = On, Buck = On, OTG = Off, and Boost = Off and click Write to enable charger mode.
5.  Plug in USB Type-C cable from travel adaptor/PC to J1 connector on the MAX77789 EV kit.
6.  The MAX77789 automatically sets the CHGIN input current limit based on the charger type detection results. If the input source is not a standard power source described by BC1.2, USB Type-C, or a proprietary charger type that the MAX77789 can detect, the MAX77789 sets the input current limit according to I 2 C register CHGIN\_ILIM (0xC0).

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## OTG Reverse Boost Setup

1.  Connect the power supply between BATT and GND2, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
2.  Set Charger Settings Protection under Configuration 4-7 tab to 0x3 = write capability unlocked. Click Write to send the command. Note that 0x3 must be written to unlock charger register setting.
3.  In the Configuration 0-3 tab, set Smart Power Selector to 0xA in  the Charger Configurations 0 register. Click Write to send the command to the charger. This enables the OTG mode.

Set CHGIN Output Current Limit to 0x3 for maximum output current limit 1.5A.

<!-- image -->

4.  Monitor the voltage of CHGIN at the CHGINS test point and see whether it equals 5.1V. Note that VCHGIN must be lower than 0.7V for OTG mode; otherwise, CHGIN does not supply current when OTG mode is enabled.

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## BYP Reverse Boost Test Setup

1.  Connect the power supply between BATT and GND, adjust the voltage to 3.8V with a 3.5A current limit, and turn it on.
2.  Set Charger Settings Protection under Configuration 4-7 tab to 0x3 = write capability is unlocked. Click Write to send the command. Note that 0x3 must be written to unlock charger register setting.
3.  In the Configuration 0-3 tab, set Smart Power Selector to 0x8 in the Charger Configurations 0 register . Click Write to send the command to the charger. This enables the reverse boost BYP mode.
4.  Monitor the voltage of BYP at BYPS test point and check that it equals 5.1V.

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## LED Indicator

1.  Three LED indicators are installed on the EV kit: DS1 is for INOKB, DS2 is for the STAT1, and DS5 is for STAT2.
2.  The STAT1 pin is an open-drain and active-low output that indicates charge status. See Table 2 details.

## Table 2. STAT1 Output with Charging Status

| CHARGING STATUS                 | STAT1                                                  | LOGIC STATE                                             | CHARGE STATUS LED                 |
|---------------------------------|--------------------------------------------------------|---------------------------------------------------------|-----------------------------------|
| No Input                        | High Impedance                                         | High                                                    | Off                               |
| Trickle, Precharge, Fast Charge | Repeat Low and High Impedance with 1Hz, 50% duty cycle | After an external diode and a capacitor rectifier, High | Blinking with 1Hz, 50% duty cycle |
| Top-Off and Done                | Low                                                    | Low                                                     | Solid On                          |
| Faults                          | High Impedance                                         | High                                                    | Off                               |

3.  INOKB is an open-drain and active-low output that indicates the input status. If a valid input source is inserted and the buck converter starts switching, INOKB pulls low. When the reverse boost is enabled, INOKB pulls low to indicate the 5V output from CHGIN.
4.  STAT2 is an open-drain and active low output. There is an option to display either the Fault indication or the Charger Type detection done indication by setting the register STAT2 PIN Usage in the Configuration 13-15 tab. See Table 3 for details. The STAT2 pin also has options to be controlled by either a state machine or an external MCU. Options can be selected by the setting of the register STAT2 PIN Control in the Configuration 13-15 tab.

## Table 3. STAT2 Output with Fault Indication or Charger Type Detection

| USAGE            | INPUT                                              | INITIAL STATE   | AFTER STATE   | STATUS LED (AFTER STATE)   |
|------------------|----------------------------------------------------|-----------------|---------------|----------------------------|
| Fault Indication | Charger Timer Fault Thermal Shutdown SYS OVLO/UVLO | High            | Low           | Solid On                   |
| Charger Type     | DCP                                                | Low             | Low           | Solid On                   |
| Detection Done   | SDP/CDP                                            | Low             | High          | Off                        |

## EXTSM Pin

1.  The EXTSM pin is an active-high input. When the EXTSM pin is pulled high, the MAX77789 is operating in three ways based on the status of the IC. See Table 4 for details.

Note: In the Configuration 4-7 tab, Factory Ship Mode (FSHIP\_MODE) in the Charger Configurations 7 register makes MAX77789 enter factory ship mode or non-factory ship mode.

## Table 4. EXTSM Pin Function

| PIN   | INITIAL STATE                                                          | FUNCTIONS                                                                                                                                                                        |
|-------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EXTSM | Factory ship mode (FSHIP_MODE = 1)                                     | Pull EXTSM pin high by pressing the pushbutton SW1 for 10ms forces the MAX77789 to exit from Ship Mode.                                                                          |
| EXTSM | Non-factory ship mode (FSHIP_MODE = 0), QBAT_RST = 0 and CHGIN invalid | Pull EXTSM pin high by pressing the pushbutton SW1 for 10s forces MAX77789 enter the System Reset mode . After releasing EXTSM pin, Q BAT is turning ON to provide power to SYS. |
| EXTSM | Battery charging and FSHIP_MODE = 0, QBAT_RST = 0 and CHGIN is valid   | Pull EXTSM pin high by connecting J11 (short 3 - 4). This makes the MAX77789 stop charging the battery and Q BAT is off.                                                         |

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Spread Spectrum

1.  The spread-spectrum modulation can be enabled/disabled by setting the Spread Spectrum Enable to  1  or  0  in Charger Configurations 13-15 tab.
2.  Set Charger Settings Protection under Configuration 4-7 tab to 0x3 = write capability unlocked. Click Write to send the command. Note that 0x3 must be written to unlock charger register setting.
3.  Spread-spectrum modulation pattern is programmable either pseudo-random or triangular by the Spread-Spectrum Pattern Setting in Charger Configuration 13-15 tab.

<!-- image -->

## Ordering Information

| PART NUMBER    | IC           | TYPE   |
|----------------|--------------|--------|
| MAX77789EVKIT# | MAX77789EWX+ | EV Kit |

#Denotes RoHS-compliance.

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## MAX77789 EV Kit Bill of Materials

| QTY                                                                  | REF DES                                                              | MFG PART#                                                            | MANUFACTURER                                                         | VALUE                                                                |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| MINIMAL BILL OF MATERIALS FOR MAX77789 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77789 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77789 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77789 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77789 AUTONOMOUS CHARGER WITH JEITA |
| 2                                                                    | C1, C8                                                               | C1005X5R1A225K050BC                                                  | TDK                                                                  | 2.2µF; 10%; 10V; X5R; SMT (0402); CERAMIC                            |
| 1                                                                    | C2                                                                   | EMK105ABJ225MV; GRM155R61C225ME11                                    | TAIYO YUDEN; KEMET                                                   | 2.2µF; 20%; 16V; X5R; SMT (0402); CERAMIC                            |
| 1                                                                    | C3                                                                   | C1608JB1C106M080AB                                                   | TDK                                                                  | 10µF; 20%; 16V; JB; SMT (0603); CERAMIC                              |
| 1                                                                    | C4                                                                   | GRM155R61C104KA88                                                    | MURATA                                                               | 0.1µF; 10%; 16V; X5R; SMT (0402); CERAMIC                            |
| 3                                                                    | C5, C7, C9                                                           | C1608X5R1A106K080AC                                                  | TDK                                                                  | 10µF; 10%; 10V; X5R; SMT (0603); CERAMIC                             |
| 1                                                                    | C6                                                                   | ANY                                                                  | ANY                                                                  | 22µF; 16V; 10%; X5R; SMT (0805); CERAMIC                             |
| 1                                                                    | L1                                                                   | HTEH25201T-R47MSR-63                                                 | CYNTEC                                                               | 0.47µH; ±20%; 5.6A                                                   |
| 1                                                                    | RT1                                                                  | NCP15XH103F03                                                        | MURATA                                                               | 10KΩ; ±1%; SMT (0402); THERMISTOR; THICK FILM                        |
| 1                                                                    | R3                                                                   | RC0402FR-0710KL                                                      | YAGEO PHICOMP                                                        | 10KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                             |
| 1                                                                    | U1                                                                   | MAX77789                                                             | ANALOG DEVICES                                                       | MAX77789EWX+                                                         |
| OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  |
| 0                                                                    | C10                                                                  | N/A                                                                  | N/A                                                                  | NOT INSTALLED                                                        |
| 2                                                                    | C11, C12                                                             | C0402X5R100-105KNE; GRM155R61A105KE15                                | VENKEL LTD; MURATA                                                   | 1µF;10V;10%; X5R; SMT (0402); CERAMIC                                |
| 1                                                                    | C13                                                                  | GRM155R71E104ME14                                                    | MURATA                                                               | 0.1µF; 25V; 20%; X7R; SMT (0402); CERAMIC                            |
| 3                                                                    | R1, R3, R20, R21                                                     | RC0402FR-0710KL                                                      | YAGEO PHICOMP                                                        | 10KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                             |
| 1                                                                    | R2                                                                   | 3296Y-1-503LF                                                        | BOURNS                                                               | 50KΩ; 10%; THROUGH -HOLE- RADIAL LEAD; 0.5W                          |
| 2                                                                    | R4, R7                                                               | CRCW04022K20JN                                                       | VISHAY DALE                                                          | 2.2KΩ; ±5%; SMT (0402); ±200PPM/K; 0.063W                            |
| 3                                                                    | R5, R6, R29                                                          | CR0402-16W-1651FT                                                    | VENKEL LTD.                                                          | 1.65KΩ; ±1%; SMT (0402); ±100PPM/°C; 0.063W                          |
| 6                                                                    | R8, R11, R12, R14, R15, R28                                          | ERJ-2RKF1003                                                         | PANASONIC                                                            | 100KΩ; ±1%; SMT (0402); ±100PPM/°C; 0.1W                             |

www.analog.com

Analog Devices | 19

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Evaluates: MAX77789

|   QTY | REF DES                               | MFG PART#                         | MANUFACTURER               | VALUE                                                 |
|-------|---------------------------------------|-----------------------------------|----------------------------|-------------------------------------------------------|
|     3 | R9, R22, R27                          | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD. | 0Ω; ±5%; SMT (0402); JUMPER; 0.063W                   |
|     2 | R23, R24                              | ERJ-2RKF2202                      | PANASONIC                  | 22KΩ; ±1%; SMT (0402); ±100PPM/°C; 0.1W               |
|     2 | R25, R26                              | ERJ-2GEJ563                       | PANASONIC                  | 56KΩ; ±5%; SMT (0402); ±200PPM/°C; 0.1W               |
|     1 | R28                                   | ERJ-S02F2401                      | PANASONIC                  | RES; SMT (0402); 2.4K; 1%; +/- 200PPM/DEGK; 0.1000W   |
|     2 | R33, R34                              | CRCW04025K10FK                    | VISHAY DALE                | 5.1KΩ; ±1%; SMT (0402); ±100PPM/°C; 0.063W            |
|     0 | R10, R13, R16, R17                    | N/A                               | N/A                        | 0603; NOT INSTALLED                                   |
|     0 | R18, R19                              | N/A                               | N/A                        | 0805; NOT INSTALLED                                   |
|     1 | L2                                    | DFE322520F-1R0M                   | MURATA                     | 1µH; ±20%; 6.3A                                       |
|     1 | J1                                    | 12401832E402A                     | AMPHENOL                   | FEMALE; USB TYPE C CONNECTOR; 24 PINS                 |
|     1 | J2                                    | 10118193-0001LF                   | FCI CONNECT                | FEMALE; MICRO USB B TYPE RECEPTACLE; 5 PINS           |
|     1 | J3                                    | PEC04DAAN                         | SULLINS ELECTRONICS CORP.  | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 8 PINS       |
|     8 | J4, J5, J8, J9, J27                   | PEC03DAAN                         | SULLINS ELECTRONICS CORP.  | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 6 PINS       |
|     2 | J6, J11                               | PEC02DAAN                         | SULLINS ELECTRONICS CORP.  | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 4 PINS       |
|     7 | J7, J12-J15, J18-J20                  | PBC02SAAN                         | SULLINS ELECTRONICS CORP.  | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 2 PINS       |
|     1 | J10                                   | PPPC092LJBN-RC                    | SULLINS ELECTRONICS CORP.  | CONNECTOR; FEMALE; THROUGH HOLE; RIGHT ANGLE; 18 PINS |
|     8 | J17, J21-J26                          | TSW-103-07-T-S                    | SAMTEC                     | CONNECTOR; THROUGH HOLE; STRAIGHT; 3 PINS             |
|    11 | BATT, BYP, CHGIN, GND1-GND6, SYS, VIN | 9020 BUSS                         | WEICO WIRE                 | ANALOG PAD; WIRE; SOLID; 20AWG                        |

## MAX77789 Evaluation Kit

## Evaluates: MAX77789

|   QTY | REF DES                                                                                                                                                    | MFG PART#     | MANUFACTURER              | VALUE                                                      |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------|------------------------------------------------------------|
|    25 | BATTS, BYPS, CC1, CC2, CHGINS, DN, DP, EXT1, EXT2, GNDS, INAOK, INBOK, LX, OTGENA, OTGENB, OVLOA, OVLOB, OVPENB, PCON, PVL, SYSS, THM, USB_DN, USB_DP, VDD | 5000          | KEYSTONE                  | TEST POINT; RED                                            |
|     6 | INOKB, INTB, SCL, SDA, STAT1, STAT2                                                                                                                        | 5002          | KEYSTONE                  | TEST POINT; WHITE                                          |
|     3 | DS1, DS2, DS5                                                                                                                                              | SML-311UT     | ROHM                      | LED; SMT (0603); RED; VF = 1.8V; IF =0.02A; -30°C to +85°C |
|     4 | MH1-MH4                                                                                                                                                    | 9032          | KEYSTONE                  | ROUND-THRU HOLE SPACER; NYLON                              |
|     1 | MISC1                                                                                                                                                      | AK67421-1-R   | ASSMANN                   | USB2.0 MICRO CONNECTION CABLE                              |
|    17 | EV_KIT_BOX1, EV_KIT_BOX2                                                                                                                                   | NPC02SXON-RC  | SULLINS ELECTRONICS CORP. | JUMPER; MINI SHUNT; 0.100IN CC; 2 PINS                     |
|     1 | PCB                                                                                                                                                        | MAX77789      | ANALOG DEVICES            | MAX77789EVKIT#                                             |
|     1 | U2                                                                                                                                                         | MAX8891EXK18+ | ANALOG DEVICES            | LOW DROP-OUT LINEAR REGULATOR                              |
|     1 | U3                                                                                                                                                         | MAX20336ENT+  | ANALOG DEVICES            | DPST ANALOG SWITCH                                         |
|     1 | U4                                                                                                                                                         | MAX14727EWV+  | ANALOG DEVICES            | BIRECTIONAL OVERVOLTAGE PROTECTOR                          |
|     1 | SW1                                                                                                                                                        | EVQ-Q2K03W    | PANASONIC                 | SWITCH; SPST; 15V; 0.02A; LIGHT TOUCH SWITCH               |

## MAX77789 Evaluation Kit

## MAX77789 EV Kit Schematic

<!-- image -->

Evaluates: MAX77789

## MAX77789 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77789

## MAX77789 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77789

## MAX77789 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## MAX77789 EV Kit PCB Layouts

MAX77789 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

O

MAX77789 EV Kit PCB Layout -Top

<!-- image -->

## Evaluates: MAX77789

MAX77789 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77789 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX77789 EV Kit PCB Layouts (continued)

MAX77789 EV Kit PCB Layout -Bottom

<!-- image -->

Evaluates: MAX77789

## MAX77789 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 4/23            | Initial release                           | -               |
|                 1 | 3/25            | Updated Table 1                           | 3               |
|                 2 | 6/25            | Updated MAX77789 EV Kit Schematic section | 22 - 25         |

<!-- image -->

Evaluates: MAX77789