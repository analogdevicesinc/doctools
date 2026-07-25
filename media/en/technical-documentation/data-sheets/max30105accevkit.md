<!-- lastmod 2022-08-03 -->
## MAX30105 Evaluation Kit

## General Description

The MAX30105 evaluation kit (EV kit) provides a proven design to evaluate the MAX30105 particle-sensing module. The  EV  kit  consist  of  two  boards.  USBOSMB  is  the mother  board  and  MAX30105DBEVKIT  is  the  daughter board that includes the MAX30105 and an accelerometer. The EV kit is powered using the USB supply to generate +1.8V  for  the  sensor  and  +4.5V  for  the  internal  LEDs of  the  MAX30105,  and  +3.3V  for  the  accelerometer. However, users do not need the accelerometer to evaluate the MAX30105.

The EV kit comes with a MAX30105EFD+ installed in a 14-pin OESIP package.

## Features and Benefits

- Real-Time Monitoring
- Flexible PCB Design
- USB-Powered
- On-Board Accelerometer
- Proven PCB Layout
- Fully Assembled and Tested
- Windows® 7, and Windows 8/8.1-Compatible Software

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX30105

## Quick Start

## Required Equipment

- MAX30105 EV kit (MAX30105DBEVKIT#, USBOSMB#, 10-pin FFC cable, and micro-USB cable included)
- Windows PC

Note: Text  in bold refers  to  items  directly  from  the  EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkit-software to download the most recent version of the EV kit software, MAX30105EVKitSetupVx.x.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Open up MAX30105EVKitSetupVx.x.exe and follow the instructions from the pop-up windows.
- 3) Insert one end of the ribbon cable to the J3 connector of the USBOSMB and the other end of the ribbon cable to the J1 connector of the MAX30105DBEVKIT. Make sure that both connectors and blue ends of the ribbon cable is facing the user.
- 4) Connect the USB cable from the PC to the EV kit board. Windows will automatically install all drivers.
- 5) Open the MAX30105EVKit.exe and verify that the EV kit is connected by observing the status bar at the lower left corner of the GUI. See Figure 1.
- 6) Press the Start Monitor button.
- 7) Direct the LEDs of the MAX30105 (U4) of the EV kit towards the particles of interest and observe the Measurement graphs. See Figure 2.

<!-- image -->

Figure 1. MAX30105 EV Kit Main Window

<!-- image -->

Figure 2. MAX30105 EV Kit Main Window (Sampling Data)

<!-- image -->

## Detailed Description of Software

The main window of the MAX30105 EV kit software displays the  mode  configuration,  settings,  LED  currents,  proximity, timing  slots  of  the  LED  mode, ADC  code  measurements, of both the MAX30105 and the accelerometer and example algorithms.

## Mode Configuration

The Mode Configuration drop-down list allows for three options:  1  LED,  2  LEDs,  and  multi  LEDs.  When  1  LED mode is selected, only red ADC codes are plotted. When 2 LEDs mode is selected, only the Red and IR channels will  be  active  when  the  GUI  is  operational.  When  Multi LED mode is selected, the user can select any combination of Red, IR, and Green channels to be active when the GUI is operational. Within LED mode, the Led Mode Timing Slots groupbox  selections  allow  the  user  to  enable  the desired LEDs at each LED slot.

## Settings

The Settings groupbox consist of controls to the sample rate and average, pulse width, and ADC full-scale range.

The Sample Rate drop-down list is adjustable from 50Hz to 400Hz.

The Sample Average drop-down  list  is  adjustable  from 1 to 32.

The Pulse Width dropdown list is adjustable from 50µs to 400µs.

The ADC Full Scale Range dropdown list is adjustable from 2048nA to 16384nA.

## LED Currents

Within the LED Currents groupbox, the peak currents are adjustable from 0 to 50 mA for each LED. The average current based on the Pulse Width and Sample Rate is recalculated with each change in peak current.

## Proximity

Under  Proximity, PILOT\_PA is  adjustable  from 0 to 50 mA.

## Accelerometer

The  accelerometer  provides  three  degrees  of  freedom (3DOF).  Moving  the  MAX30105DBEVKIT  board  will trigger changes in ADC data of the X, Y, and/or Z graphs.

## Algorithms

Along with Maxim's sensor, customers will need smart algorithms  to  detect  the  particles  of  interest.  Maxim is  partnering  with  Valor  Inc.  to  develop  state-of-theart  algorithms  for  smoke  detection  application  using MAX30105. Please contact Valor for licensing information at http://www.valorfiresafety.com/licensing/ .

## Data Logging

From the menu bar, select File | Log and ADC data can be logged to a .csv file with the option of collecting data for a specific time using the File | Timed Data Collection selection  from 5 to 60 seconds .  Once  the  desired configuration  is  set,  press  the Start  Monitor button  to capture data. The header for each data set includes the settings for sample rate, LED current, pulse width, and the mode. If the file  name  is  not  changed,  subsequent  data collection will append to the existing file and will include a new header.

## Options

From the menu bar, Options allows the user to adjust the plot length and the x-axis, hide unused channels, show/ hide the algorithm windows, and access registers from a bit level.

│

Evaluates: MAX30105

## Detailed Description of Hardware

The  MAX30105  EV  kit  provides  a  proven  design  to evaluate the MAX30105 integrated particle-sensing module. The EV kit is powered through the +5V from the USB port to generate the regulated +1.8V to V DD  supply and +4.5V to  the  +VLED supply of the MAX30105. Use Table 1 to change the R10 resistor to obtain the desired +VLED supply. The IC U1 of the USBOSMB is the on-board microcontroller that communicates with the MAX30105 through GPIO for the interrupt signal and I 2 C interface.

There  is  also  a  3.3V  supply  on  the  EV  board  and  is intended for the on-board MCU.

## Table 1. Resistor Selection for +VLED Supply

| +VLED   | R10 (kΩ)   |
|---------|------------|
| 2.5V    | 14.3       |
| 3.3V    | 23.2       |
| 4.0V    | 31.6       |
| 4.5V    | 36.5*      |

* Default

Evaluates: MAX30105

│

Figure 3. MAX30105 Daughter Board Schematic

<!-- image -->

## MAX30105 Evaluation Kit

<!-- image -->

Figure 4. MAX30105 Daughter Board Component Placement Guide-Component Side

Figure 6. MAX30105 Daughter Board PCB Layout-Layer 3

<!-- image -->

Figure 8. MAX30105 Daughter Board PCB Layout-Solder Side

<!-- image -->

## Evaluates: MAX30105

<!-- image -->

Figure 5. MAX30105 Daughter Board PCB Layout-Layer 2

Figure 7. MAX30105 Daughter Board PCB LayoutComponent Side

<!-- image -->

Figure 9. MAX30105 Daughter Board Component Placement Guide-Solder Side

<!-- image -->

│

Evaluates: MAX30105

Figure 10. USBOSMB Mother Board Schematic

<!-- image -->

Figure 11. USBOSMB Mother Board Component Placement Guide-Component Side

<!-- image -->

Figure 12. USBOSMB Mother Board PCB Layout-Component Side

<!-- image -->

Figure 13. USBOSMB Mother Board PCB Layout-Solder Side

<!-- image -->

## Component Lists

## MAX30105 EV Kit

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX30105DBEVKIT# |     1 | MAX30105 Daughter Board       |
| USBOSMB#         |     1 | Serial Interface Mother Board |

## Component Information

See the following links for component information.

- MAX30105 DB EV BOM
- MAX30105 USBOSMB EV BOM

## Ordering Information

| PART              | TYPE   | LED            |
|-------------------|--------|----------------|
| MAX30105ACCEVKIT# | EV Kit | IR, Red, Green |

# Denotes RoHS compliant.

Evaluates: MAX30105

│

## MAX30105 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 5/16            | Initial Release                         | -               |
|                 1 | 7/16            | Updated schematic and bill of materials | 1, 4-6, 10      |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUe LPSlLeG. 0D[LP IQWeJUDWeG UeVeUYeV WKe ULJKW WR FKDQJe WKe FLUFXLWU\ DQG VSeFLfiFDWLRQV ZLWKR

│

Evaluates: MAX30105

TITLE:

Bill of Materials

DATE:

07/12/2016

DESIGN:

max30105\_db\_evkit\_a

## NOTE: DNI -- &gt;

DO NOT INSTALL ; DNP -- &gt; DO NOT PROCURE

| REF_DES    | DNI/DNP   | QTY MFG PART #                                            | MANUFACTURER            | VALUE   | DESCRIPTION                                                                                                 |
|------------|-----------|-----------------------------------------------------------|-------------------------|---------|-------------------------------------------------------------------------------------------------------------|
| 1 C6       | -         | 1 C1608X5R1A106K                                          | TDK                     | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG= - 55 DEGC TO +85 DEGC; TC=X5R          |
| 2 C7, C16  | -         | 2 C1608X5R1E106M080AC; CL10A106MA8NRNC                    | TDK/SAMSUNG ELECTRONICS | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG= - 55 DEGC TO +85 DEGC; TC=X5R                  |
| 3 C12      | -         | 1 C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA             | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG= - 55 DEGC to +125 DEGC; TC=C0G                |
| 4 C13      | -         | 1 UMK107AB7105KA                                          | TAIYO YUDEN             | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R                  |
| 5 C14      | -         | 1 C1608X5R1E475K080AC                                     | TDK                     | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG= - 55 DEGC TO +85 DEGC; TC=X5R |
| 6 C15      | -         | 1 C0603C104K4RACAUTO                                      | KEMET                   | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R AUTO           |
| 7 DS1, DS4 | -         | 2 SMT660N                                                 | EPITEX                  | SMT660N | DIODE; LED; HIGH PERFORMANCE TOP LED; RED; SMT; VF=2V; IF=0.02A                                             |
| 8 DS2, DS3 | -         | 2 SMT880                                                  | EPITEX                  | SMT880  | DIODE; LED; HIGH PERFORMANCE TOP IR LED; INFRARED; SMT; VF=1.45V; IF=0.05A                                  |
| 9 DS5, DS6 | -         | 2 SMT525                                                  | EPITEX                  | SMT525  | DIODE; LED; HIGH PERFORMANCE TOP LED; GREEN; SMT; VF=3.2V; IF=0.02A                                         |

| 10 J1       | -   | 1 68711014522                                         | WURTH ELECTRONICS INC.               | 6.87E+10       | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACTWR - FPC; RIGHT ANGLE; 10PINS                                |
|-------------|-----|-------------------------------------------------------|--------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
| 11 R2, R12, | -   | 3 CRCW06030000ZS; MCR03EZPJ000; ERJ - 3GEY0R00        | VISHAY DALE/ROHM/PAN ASONIC          | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                    |
| 12 U4       | -   | 1 MAX30105EFD+                                        | MAXIM                                | MAX3010 5EFD+  | IC; SNSR; HIGH - SENSITIVITY OPTICAL SENSOR FOR SMOKE DETECTION APPLICATIONS; OLGA14                                    |
| 13 U6       | -   | 1 LIS2DH                                              | ST MICROELECTRONI CS                 | LIS2DH         | IC; MEMS; MEMS DIGITAL OUTPUT MOTION SENSOR; ULTRA LOW - POWER HIGH PERFORMANCE 3 - AXIS FEMTO ACCELEROMETER; LGA14 2X2 |
| 14 U7       | -   | 1 MAX8510EXK33+                                       | MAXIM                                | MAX8510 EXK33+ | IC; VREG; ULTRA - LOW - NOISE; HIGH PSRR; LOW - DROPOUT; 0.12A LINEAR REGULATOR; SC70 - 5                               |
| 15 R1       | DNP | 0 RC1608J000CS; CR0603 - J/ - 000ELF;RC0603JR - 070RL | SAMSUNG ELECTRONICS/BO URNS/YAGEO PH | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    |
| 16 PCB      | -   | 1 MAX                                                 | MAXIM                                | PCB            | PCB Board:MAX30105 DB EVALUATION KIT                                                                                    |
| TOTAL       |     | 21                                                    |                                      |                |                                                                                                                         |

TITLE:

Bill of Materials

DATE:

03/27/2015,

DESIGN:

Rev

0

usbosmb\_evkit\_a

| ITEM       | QTY                                  | REF DES MFG PART MANUFACTURER        | VALUE                                                                                            | DESCRIPTION                                                                                                                                                        | STATUS               |
|------------|--------------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| 1          | 1 C1                                 | C0603C104KEMET                       | 0.1UF CAPACITOR; SMT (0603); CERAMIC 55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (1210); CERAMIC | CHIP; 0.1UF; 16V; TOL=10%; TG= - AUTO EVKIT - NOT FOR TEST CHIP; 10UF; 50V; TOL=10%; TG= -                                                                         |                      |
| 2          | 1 C2                                 | GRM32ER7MURATA; SAMSUNG ELECTRONICS  | 10UF                                                                                             | 55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG= -                                                                         | ACTIVE               |
| 3          | 3 C3, C4, C8 UMK107ABTAIYO YUDEN     | 3 C3, C4, C8 UMK107ABTAIYO YUDEN     | 1UF 55                                                                                           | DEGC TO +125 DEGC; TC=X7R                                                                                                                                          | ACTIVE               |
| 4          | 3 C5, C9, C11C1608X5R1TDK            | 3 C5, C9, C11C1608X5R1TDK            | 4.7UF CAPACITOR; SMT (0603); CERAMIC CHIP; MODEL=C SERIES; TG= - 55 DEGC TO +85                  | 4.7UF; 25V; TOL=10%; DEGC; TC=X5R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG= -                                                                  | ACTIVE               |
| 5          | 1 C10                                | C1608C0G1TDK; MURATA                 | 0.01UF                                                                                           | 55 DEGC to +125 DEGC; TC=C0G DIODE; LED; SURFACE MOUNT CHIP LED; RED; SMT (0603); PIV=1.8V;                                                                        | ACTIVE               |
| 6          | 1 DS1                                | HSMH - C19AVAGO TECHNOLOGIES         | HSMH - C190                                                                                      | IF=0.02A                                                                                                                                                           | EVKIT - NOT FOR TEST |
| 7          | 1 DS2                                | HSMG - C19AVAGO TECHNOLOGIES         | HSMG - C190                                                                                      | DIODE; LED; SURFACE MOUNT CHIP LED; GREEN; SMT (0603); PIV=2.2V; IF=0.02A CONNECTOR; MALE; SMT; MICRO - USB CONNECTOR MEETING                                      | EVKIT - NOT FOR TEST |
| 8          | 1 J1                                 | ZX62RD - ABHIROSE ELECTRIC CO LTD.   | ZX62RD - AB - 5P8                                                                                | REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                                                                                                               | ACTIVE               |
| 9          | 1 J2                                 | GRPB031VW SULLINS ELECTRONICS CORP.  | GRPB031VWVN - RC                                                                                 | CONNECTOR; MALE; THROUGH HOLE; 0.050" SINGLE ROWMALE HEADER CONNECTOR; STRAIGHT; 3PINS; - 40 DEGC TO +105 DEGC CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM | EVKIT - NOT FOR TEST |
| 10         | 1 J3                                 | 6.87E+10 WURTH ELECTRONICS INC.      | 68711014522                                                                                      | CONTACTWR - FPC; RIGHT ANGLE; 10PINS                                                                                                                               | EVKIT - NOT FOR TEST |
| 11         | 3 R1, R4, R5 ERJ - 2GEJ47PANASONIC   | 3 R1, R4, R5 ERJ - 2GEJ47PANASONIC   | 470                                                                                              | RESISTOR; 0402; 470 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                             | EVKIT - NOT FOR TEST |
| 12         | 6 R2, R3, R6 - ERJ - 2GEJ47PANASONIC | 6 R2, R3, R6 - ERJ - 2GEJ47PANASONIC | 4.7K                                                                                             | RESISTOR; 0402; 4.7K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                            | EVKIT - NOT FOR TEST |
| 13         | 1 R9                                 | CRCW0402VISHAY DALE                  | 13.7K                                                                                            | RESISTOR; 0402; 13.7K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                          | ACTIVE               |
| 14         | 1 R10                                | CRCW0402PANASONIC                    | 36.5K                                                                                            | RESISTOR; 0402; 36.5K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                          | EVKIT - NOT FOR TEST |
| 15         | 1 U1                                 | C8051F321SILICON LABORATORIES        | C8051F321                                                                                        | IC; CTRL; FULL SPEED USB, 16K ISP FLASH MCU FAMILY; QFN28 - EP IC; PROT; DUAL, QUAD, AND HEX HIGH - SPEED DIFFERENTIAL ESD -                                       | EVKIT - NOT FOR TEST |
| 16         | 1 U2                                 | MAX3207EMAXIM                        | MAX3207EAUT                                                                                      | PROTECTION IC; SOT23 - 6 IC; VREG; ULTRA - LOW - NOISE; HIGH PSRR; LOW - DROPOUT; 0.12A                                                                            | ACTIVE               |
| 17         | 1 U3                                 | MAX8510EMAXIM                        | MAX8510EXK18                                                                                     | LINEAR REGULATOR; SC70 - 5                                                                                                                                         | ACTIVE               |
| 18         | 1 U5                                 | MAX8512EMAXIM                        | MAX8512EXK                                                                                       | IC, VREG, Ultra - Low - Noise, High PSRR, Adjustable Vout, SC70 - 5                                                                                                | ACTIVE               |
| 19         | 1                                    | EPCB MAX                             | MAXIM                                                                                            | PCB                                                                                                                                                                | PCB: MAX             |
| TOTAL      | 30                                   |                                      |                                                                                                  |                                                                                                                                                                    |                      |
| PACK_OUT 1 | 1                                    | 6.88E+11 WURTH ELECTRONICS INC.      |                                                                                                  | WR_FFC 0.50mm TYPE 1 CABLE                                                                                                                                         |                      |