<!-- lastmod 2024-09-11 -->
<!-- image -->

Evaluates: MAX30101

## General Description

The MAX30101 evaluation kit (EV kit) provides a proven design to evaluate the MAX30101 integrated pulse-oximetry and heart-rate monitor integrated circuit (IC). The EV kit consist  of  two  boards.  USBOSMB  is  the  mother  board and  MAX30101DBEVKIT  is  the  daughter  board  that includes  the  MAX30101 and an accelerometer. The EV kit  is  powered  using  the  USB supply to generate +1.8V for  the  sensor  and  +4.5V  for  the  internal  LEDs  of  the MAX30101, and +3.3V for the accelerometer.

The EV kit comes with a MAX30101EFD+ installed in a 14-pin OESIP package.

## Features

- Real-Time Monitoring
- Flexible PCB Design
- USB-Powered
- On-Board Accelerometer
- Proven PCB Layout
- Fully Assembled and Tested
- Windows® 7-, and Windows 8/8.1-Compatible Software

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX30101 Evaluation System

## Quick Start

## Required Equipment

- MAX30101  accelerometer EV kit (MAX30101DBEVKIT#, USBOSMB#, 10-pin FFC cable, and micro-USB cable included)
- Windows PC

## Note:

- 1) Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.
- 2) The GUI setup files can be obtained by the Procedure section
- 3) EVKIT design files are attached at the end of this document.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.analog.com/evkit-software to download the most recent version of the EV kit software, MAX30101EVKitSetupVx.x.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Open up MAX30101EVKitSetupVx.x.exe and follow the instructions from the pop-up windows.
- 3) Insert one end of the ribbon cable to the J3 connector of the USBOSMB and the other end of the ribbon cable to the J1 connector of the MAX30101DBEVKIT. Make sure that both connectors and blue ends of the ribbon cable is facing the user.
- 4) Connect the USB cable from the PC to the EV kit board. Windows will automatically install all drivers.
- 5) Open the MAX30101EVKit.exe and verify that the EV kit is connected by observing the status bar at the lower left corner of the GUI. See Figure 1.
- 6) Press the Start Monitor button.
- 7) Place your finger in front of the MAX30101 (U4) of the EV kit and observe the Measurement graphs. See Figure 2. Example algorithm 1 and 2 are shown in separate windows (Figure 3 and Figure 4).

## MAX30101 Evaluation System

Figure 1. MAX30101 EV Kit Main Window

<!-- image -->

Figure 2. MAX30101 EV Kit Main Window (Sampling Data)

<!-- image -->

Evaluates: MAX30101

Figure 3. Maxim Example Algorithm 1 Window

<!-- image -->

Figure 4. Maxim Example Algorithm 2 Window

<!-- image -->

## MAX30101 Evaluation System

## Detailed Description of Software

The  main  window  of  the  MAX30101  EV  kit  software displays the mode configuration, settings, LED currents, proximity, timing slots of the LED mode, ADC code measurements, and example algorithms.

## Mode Configuration

The Mode Configuration drop-down list allows for three options: HR, SPO2, and LED. When HR is selected, only

Figure 5. MAX30101 EV Kit Main Window (LED Mode with Green LED)

<!-- image -->

Evaluates: MAX30101

red ADC codes are plotted. When SPO2 is selected, only red and IR codes are plotted. When LED is selected, red, IR, and/or green ADC codes are plotted. Figure 5 shows the  device  configured  to  LED  mode  and  using  all  three LEDs:  red,  IR,  and  green.  Within  LED  mode,  the Led Mode Timing Slots groupbox selections allow the user to enable the desired LEDs at each LED slot.

│

## MAX30101 Evaluation System

## Settings

The Settings groupbox consist of controls to the sample rate and average, pulse width, and ADC full-scale range.

The Sample Rate drop-down list is adjustable from 50Hz to 400Hz.

The Sample Average drop-down  list  is  adjustable  from 1 to 32.

The Pulse Width dropdown list is adjustable from 50µs to 400µs.

The ADC Full Scale Range dropdown list is adjustable from 2048nA to 16384nA.

## LED Currents

Within the LED Currents groupbox, the peak currents are adjustable  from 0 to 50 mA for  each  LED. The  average current based on the Pulse Width and Sample Rate is recalculated with each change in peak current.

## Proximity

Under Proximity, PILOT\_PA is adjustable from 0 to 50 mA.

## Accelerometer

The  accelerometer  provides  three  degrees  of  freedom (3DOF). Moving the MAX30101DBEVKIT board will trigger changes in ADC data of the X, Y, and/or Z graphs.

## Algorithms

Figure 3 and Figure 4 are example algorithms to calculate heart rate and SpO 2 . They are calculated using the raw ADC data from the LEDs.

The two algorithms included with the EV kit are PBA and SKA. They are provided to demonstrate the capability of the  product  and  are  not  intended  for  mass  production. Here are some significant differences between the two.

PBA  looks  for  zero  crossing  using  slow  threshold.  The algorithm completes its cycle each sampling point. SKA waits for 3s and then looks for peak detection. The algorithm is  processed  every  1s,  but  it  requires  a  more  complex math operation. The user needs to present 3s FIFO data to algorithm. Heart rate is from average of 3s of data.

Each of these algorithms has its own advantage. For example, PBA  requires  much  less  data  space  and  code  space compared to SKA.

| ALGORITHM   | DELAY   |   MEMORY |   DATA SPACE |
|-------------|---------|----------|--------------|
| PBA         | None    |     5772 |          870 |
| SKA         | 3s      |    31160 |        52723 |

## Data Logging

From the menu bar, select File | Log and ADC data can be logged to a .csv file with the option of collecting data for a specific time using the File | Timed Data Collection selection  from 5 to 60 seconds .  Once  the  desired configuration  is  set,  press  the Start  Monitor button  to capture data. The header for each data set includes the settings for sample rate, LED current, pulse width, and the mode. If the file  name  is  not  changed,  subsequent  data collection will append to the existing file and will include a new header.

## Options

From the menu bar, Options allows the user to adjust the plot length and the x-axis, hide unused channels, show/ hide the algorithm windows, and access registers from a bit level.

## Detailed Description of Hardware

The MAX30101 EV kit provides a proven design to evaluate  the  MAX30101  integrated  pulse-oximetry,  heart-rate monitor  module.  The  EV  kit  is  powered  through  the +5V from the USB port to generate the regulated +1.8V to  V DD  supply  and  +4.5V  to  the  +VLED  supply  of  the MAX30101. Use Table 1 to change the R10 resistor  to obtain the desired +VLED supply. The IC U1 of the EV kit is  the  on-board  microcontroller  that  communicates  with the MAX30101 through GPIO for the interrupt signal and I 2 C interface.

There  is  also  a  3.3V  supply  on  the  EV  board  and  is intended for the on-board MCU.

## Table 1. Resistor Selection for +VLED Supply

| +VLED   | R10 (KΩ)   |
|---------|------------|
| 2.5V    | 14.3       |
| 3.3V    | 23.2       |
| 4.0V    | 31.6       |
| 4.5V    | 36.5*      |

* Default

## MAX30101 Evaluation System

## Evaluates: MAX30101

Figure 6. MAX30101 Daughter Board Schematic

<!-- image -->

│

## MAX30101 Evaluation System

<!-- image -->

Figure 7. MAX30101 Daughter Board Component Placement Guide-Component Side

Figure 9. MAX30101 Daughter Board PCB Layout-Layer 3

<!-- image -->

Figure 11. MAX30101 Daughter Board PCB Layout-Solder Side

<!-- image -->

## Evaluates: MAX30101

<!-- image -->

Figure 8. MAX30101 Daughter Board PCB Layout-Layer 2

Figure 10. MAX30101 Daughter Board PCB LayoutComponent Side

<!-- image -->

Figure 12. MAX30101 Daughter Board Component Placement Guide-Solder Side

<!-- image -->

## MAX30101 Evaluation System

## Evaluates: MAX30101

Figure 13. USBOSMB Mother Board Schematic

<!-- image -->

## MAX30101 Evaluation System

Figure 14. USBOSMB Mother Board Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX30101

Figure 15. USBOSMB Mother Board PCB Layout-Component Side

<!-- image -->

## MAX30101 Evaluation System

Figure 16. USBOSMB Mother Board PCB Layout-Solder Side

<!-- image -->

## Evaluates: MAX30101

## Component Lists

## MAX30101 Accelerometer EV Kit

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX30101DBEVKIT# |     1 | MAX30101 Daughter Board       |
| USBOSMB#         |     1 | Serial Interface Mother Board |

## Ordering Information

| PART              | TYPE   | LED     |
|-------------------|--------|---------|
| MAX30101ACCEVKIT# | EV Kit | IR, RED |

# Denotes RoHS compliant.

## MAX30101 ACC EV BOM

| PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   | PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)   |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| ITEM                                                                    | QTY                                                                     | REF DES                                                                 | MFG PART #                                                              | MANUFACTURER                                                            | VALUE                                                                   | DESCRIPTION                                                             |
| 1                                                                       | 1                                                                       | PACKOUT                                                                 | 88-00713-LRG                                                            | N/A                                                                     | ?                                                                       | BOX;+;LARGE BROWN 15 1/8' X 8 3/4" X 3'                                 |
| 2                                                                       | 1                                                                       | PACKOUT                                                                 | 87-02162-00                                                             | N/A                                                                     | ?                                                                       | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in; W/ESD LOGO - PACKOUT             |
| 3                                                                       | 3                                                                       | PACKOUT                                                                 | 85-MAXKIT-PNK                                                           | N/A                                                                     | ?                                                                       | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                   |
| 4                                                                       | 3                                                                       | PACKOUT                                                                 | EVINSERT                                                                | N/A                                                                     | ?                                                                       | WEB INSTRUCTIONS FOR ANALOG DEVICES DATA SHEET                          |
| 5                                                                       | 3                                                                       | PACKOUT                                                                 | 85-84003-006                                                            | N/A                                                                     | ?                                                                       | LABEL(EV KIT BOX) - PACKOUT                                             |
| 6                                                                       | 1                                                                       | PACKOUT                                                                 | 88-00712-MDM                                                            | N/A                                                                     | ?                                                                       | BOX;+;MEDIUMBROWN 9 3/8' X 7 1/4' X 2 1/2"                              |
| 7                                                                       | 1                                                                       | PACKOUT                                                                 | 87-02159-000                                                            | N/A                                                                     | ?                                                                       | ESD BAG;+;BAG; STATIC SHIELD 5"X8"; W/ESD LOGO                          |
| 8                                                                       | 1                                                                       | PACKOUT                                                                 | 88-00711-SML                                                            | N/A                                                                     | ?                                                                       | BOX;SMALL BROWN 9 3/16"X7"X1 1/4" - PACKOUT                             |
| 9                                                                       | 1                                                                       | PACKOUT                                                                 | 87-02163-000                                                            | N/A                                                                     | ?                                                                       | ESD BAG;+;BAG; STATIC SHIELD ZIP 8'X10'; W/ ESD LOGO                    |
| 10                                                                      | 1                                                                       | PACKOUT                                                                 | 6.88E+11                                                                | WURTH ELECTRONICS INC.                                                  |                                                                         | WR_FFC 0.50mm TYPE 1 CABLE                                              |
| TOTAL                                                                   | 16                                                                      |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |

## MAX30101 DB EV BOM

| ITEM   |   QTY | REF DES      | MFG PART #                                              | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                         |
|--------|-------|--------------|---------------------------------------------------------|--------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------|
| 1      |     1 | C6           | C1608X5R1A106K                                          | TDK                                  | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |
| 2      |     2 | C7, C16      | C1608X5R1E106M080AC; CL10A106MA8NRNC                    | TDK/SAMSUNG ELECTRONICS              | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                            |
| 3      |     1 | C12          | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA                          | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                          |
| 4      |     1 | C13          | UMK107AB7105KA                                          | TAIYO YUDEN                          | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |
| 5      |     1 | C14          | C1608X5R1E475K080AC                                     | TDK                                  | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R           |
| 6      |     1 | C15          | C0603C104K4RACAUTO                                      | KEMET                                | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO                     |
| 7      |     0 | DS1, DS4     | SMT660N                                                 | EPITEX                               | SMT660N        | DIODE; LED; HIGH PERFORMANCE TOP LED; RED; SMT; VF=2V; IF=0.02A                                                     |
| 8      |     0 | DS2, DS3     | SMT880                                                  | EPITEX                               | SMT880         | DIODE; LED; HIGH PERFORMANCE TOP IR LED; INFRARED; SMT; VF=1.45V; IF=0.05A                                          |
| 9      |     0 | DS5, DS6     | SMT525                                                  | EPITEX                               | SMT525         | DIODE; LED; HIGH PERFORMANCE TOP LED; GREEN; SMT; VF=3.2V; IF=0.02A                                                 |
| 10     |     1 | J1           | 68711014522                                             | WURTH ELECTRONICS INC.               | 68711014522    | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                             |
| 11     |     0 | R1           | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL          | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                |
| 12     |     3 | R2, R12, R13 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00              | VISHAY DALE/ROHM/PANASONIC           | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                |
| 13     |     1 | U4           | MAX30101EFD+                                            | ANALOG DEVICES                       | MAX30101EFD+   | MODULE; SNSR; HIGH-SENSITIVITY PULSE OXIMETER AND HEART-RATE SENSOR FOR WEARABLE; SMT 5.6MM X 3.3MM                 |
| 14     |     1 | U6           | LIS2DH                                                  | ST MICROELECTRONICS                  | LIS2DH         | IC; MEMS; MEMS DIGITAL OUTPUT MOTION SENSOR; ULTRA LOW-POWER HIGH PERFORMANCE 3-AXIS FEMTO ACCELEROMETER; LGA14 2X2 |
| 15     |     1 | U7           | MAX8510EXK33+                                           | ANALOG DEVICES                       | MAX8510EXK33+  | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                   |
| 16     |     1 |              | EPCB                                                    | MAX                                  | ANALOG DEVICES | PCB                                                                                                                 |
| TOTAL  |    15 |              |                                                         |                                      |                |                                                                                                                     |

Evaluates: MAX30101

## MAX30101 Evaluation System

## MAX30101 USBOSMB EV BOM

| ITEM   |   QTY | REF DES            | MFG PART #                                              | MANUFACTURER                | VALUE          | DESCRIPTION                                                                                                    | STATUS             |
|--------|-------|--------------------|---------------------------------------------------------|-----------------------------|----------------|----------------------------------------------------------------------------------------------------------------|--------------------|
| 1      |     1 | C1                 | C0603C104K4RACAUTO                                      | KEMET                       | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO                | EVKIT-NOT FOR TEST |
| 2      |     1 | C2                 | GRM32ER71H106KA12L; CL32B106KBJNNN                      | MURATA; SAMSUNG ELECTRONICS | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                      | ACTIVE             |
| 3      |     3 | C3, C4, C8         | UMK107AB7105KA                                          | TAIYO YUDEN                 | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       | ACTIVE             |
| 4      |     3 | C5, C9, C11        | C1608X5R1E475K080AC                                     | TDK                         | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R      | ACTIVE             |
| 5      |     1 | C10                | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA                 | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                     | ACTIVE             |
| 6      |     1 | DS1                | HSMH-C190                                               | AVAGO TECHNOLOGIES          | HSMH-C190      | DIODE; LED; SURFACE MOUNT CHIP LED; RED; SMT (0603); PIV=1.8V; IF=0.02A                                        | EVKIT-NOT FOR TEST |
| 7      |     1 | DS2                | HSMG-C190                                               | AVAGO TECHNOLOGIES          | HSMG-C190      | DIODE; LED; SURFACE MOUNT CHIP LED; GREEN; SMT (0603); PIV=2.2V; IF=0.02A                                      | EVKIT-NOT FOR TEST |
| 8      |     1 | J1                 | ZX62RD-AB-5P8                                           | HIROSE ELECTRIC CO LTD.     | ZX62RD-AB-5P8  | CONNECTOR; MALE; SMT; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS         | ACTIVE             |
| 9      |     1 | J2                 | GRPB031VWVN-RC                                          | SULLINS ELECTRONICS CORP.   | GRPB031VWVN-RC | CONNECTOR; MALE; THROUGH HOLE; 0.050" SINGLE ROW MALE HEADER CONNECTOR; STRAIGHT; 3PINS; -40 DEGC TO +105 DEGC | EVKIT-NOT FOR TEST |
| 10     |     1 | J3                 | 68711014522                                             | WURTH ELECTRONICS INC.      | 68711014522    | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                        | EVKIT-NOT FOR TEST |
| 11     |     3 | R1, R4, R5         | ERJ-2GEJ471X                                            | PANASONIC                   | 470            | RESISTOR; 0402; 470 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                         | EVKIT-NOT FOR TEST |
| 12     |     6 | R2, R3, R6-R8, R11 | ERJ-2GEJ472X                                            | PANASONIC                   | 4.7K           | RESISTOR; 0402; 4.7K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                        | EVKIT-NOT FOR TEST |
| 13     |     1 | R9                 | CRCW040213K7FK                                          | VISHAY DALE                 | 13.7K          | RESISTOR; 0402; 13.7K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                      | ACTIVE             |
| 14     |     1 | R10                | CRCW040236K5FK                                          | PANASONIC                   | 36.5K          | RESISTOR; 0402; 36.5K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                      | EVKIT-NOT FOR TEST |
| 15     |     1 | U1                 | C8051F321                                               | SILICON LABORATORIES        | C8051F321      | IC; CTRL; FULL SPEED USB, 16K ISP FLASH MCU FAMILY; QFN28-EP                                                   | EVKIT-NOT FOR TEST |
| 16     |     1 | U2                 | MAX3207EAUT+                                            | ANALOG DEVICES              | MAX3207EAUT    | IC; PROT; DUAL, QUAD, AND HEX HIGH- SPEED DIFFERENTIAL ESD-PROTECTION IC; SOT23-6                              | ACTIVE             |
| 17     |     1 | U3                 | MAX8510EXK18                                            | ANALOG DEVICES              | MAX8510EXK18   | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                              | ACTIVE             |
| 18     |     1 | U5                 | MAX8512EXK                                              | ANALOG DEVICES              | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                  | ACTIVE             |
| 19     |     1 |                    | EPCB                                                    | MAX                         | ANALOG DEVICES | PCB                                                                                                            | PCB: MAX           |
| TOTAL  |    30 |                    |                                                         |                             |                |                                                                                                                |                    |

Evaluates: MAX30101

## MAX30101 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------|-----------------|
|                 0 | 5/16            | Initial Release                            | -               |
|                 1 | 4/24            | Updated Quick Start and Procedure sections | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX30101