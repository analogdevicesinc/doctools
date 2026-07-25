<!-- lastmod 2022-08-05 -->
## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

## General Description

The MAX20096 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX20096  dual-channel  synchronous buck, high-brightness LED controller with and without  SPI  interface  for  high-power  HB  LED  drivers. The  EV  kit  is  set  up  as  a  dual-buck  LED  driver  and operates from a 4.5V to 65V DC supply voltage. The EV kit is configured to deliver up to 3A in each string of LEDs for both channels. The total voltage of the string can vary from 3V to 55V. The anode of the LED string should be connected to the LED+ terminal; the cathode should be connected to PGND.

## Benefits and Features

- 4.5V to 65V Input Voltage
- Drives 1-16 LEDs in Each of the Dual Channels
- 0A to 3A LED Current
- Demonstrates SPI Interface Capability
- Demonstrates PWM Dimming and Analog Dimming Using the SPI Interface
- Demonstrates LED Open/Short Faults Monitoring Using the SPI Interface
- Monitors the LED Current Using the Graphical User Interface (GUI)
- Proven PCB and Thermal Design
- Fully Assembled and Tested

## MAX20096 EV Kit Files

| FILE              | DESCRIPTION             |
|-------------------|-------------------------|
| MAX20096EVKit.exe | Windows ® GUI Installer |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX20096

## Quick Start

## Required Equipment

- MAX20096 EV kit
- MINIQUSB interface board and USB cable
- 5V to 65V, 4A DC power supply
- Four digital voltmeters
- Two series-connected HB LED strings rated to no less than 4A
- Two current probes to measure the HB LED current
- Small flat-blade screwdriver to turn the potentiometer wiper adjustment pin

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

- 1) Visit www.maximintegrated/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX20096EVKit.exe.
- 2) Install  the  EV  kit  software  GUI  on  your  PC  by  running  the  MAX20096EVKit.exe  program.  The  EV  kit software application will be  installed with the required MINIQUSB drivers.
- 3) Connect the MINIQUSB board to J7 and J14 on the EV kit.
- 4) If connecting multiple EV kits in a daisy-chain, see the Daisy-Chain Connections section.
- 5) Verify jumper settings, as shown in Table 1 and Table 2.
- 6) Connect the power supply to the IN and GND1 terminals on the EV kit.
- 7) Connect  the  LED  loads  to  the  LED1+/GND1  and LED2+/GND2 terminals on the EV kit.
- 8) Connect the MINIQUSB board to the PC running the software with the provided USB cable.
- 9) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

<!-- image -->

## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

Evaluates: MAX20096

Figure 1. MAX20096 Evaluation Kit Software (GUI Screenshot)

<!-- image -->

## Table 1. Jumper Settings (J1-J6, J12, J15)

| JUMPER   | SHUNT POSITION                           | SHUNT POSITION                                  | SHUNT POSITION                                |
|----------|------------------------------------------|-------------------------------------------------|-----------------------------------------------|
| JUMPER   | 1-2                                      | 2-3                                             | OPEN                                          |
| J1       | LED2 analog current set by potentiometer | -                                               | LED2 external analog current control on REFI2 |
| J2       | Single input supply (V IN )              | -                                               | Dual input supply (V IN and V IN2 )           |
| J3       | DIM2 pullup to V CC                      | DIM2 pulldown to GND                            | DIM2 external control                         |
| J4       | IC powered by IN                         | Bypass V CC regulator, V IN range is 4V to 5.5V | -                                             |
| J5       | DIM1 pullup to V CC                      | DIM1 pulldown to GND                            | DIM1 external control                         |
| J6       | LED1 analog current set by potentiometer | -                                               | LED1 external analog current control on REFI1 |
| J12      | VIO provided by MINIQUSB board           | -                                               | External VIO supply                           |
| J15      | RESETB pullup                            | -                                               | No RESETB pullup                              |

Table 2. Jumper Settings for Single Board and Daisy-Chain (J10, J11, J13)

|        | SHUNT POSITION   | SHUNT POSITION            | SHUNT POSITION              | SHUNT POSITION           |
|--------|------------------|---------------------------|-----------------------------|--------------------------|
| JUMPER | SINGLE BOARD     | DAISY-CHAIN (FIRST BOARD) | DAISY-CHAIN (MIDDLE BOARDS) | DAISY-CHAIN (LAST BOARD) |
| J10    | 1-2              | 1-2                       | 2-3                         | 2-3                      |
| J11    | Open             | 1-2                       | Open                        | 2-3                      |
| J13    | 1-2              | 2-3                       | 2-3                         | 2-3                      |

## Daisy-Chain Connections

When connecting multiple EV kits in a daisy-chain, only connect to the MINIQUSB board from the first EV kit. The other  EV  kits  do  not  require  the  MINIQUSB  boards;  if present, they should not be connected through the USB. Connect J9 of the first EV kit to J8 of the next EV kit, then connect J9 of the second board to J8 of the next board, and so on. Note: Do not connect to J9 of the last board or to J8 of the first board. Configure the jumpers on these boards per Table 2.

The EV kit software automatically detects the daisy-chain configuration when it first starts up and connects. If this configuration  is  changed  while  the  software  is  running, the  user  must  reconnect  by  pressing  F9  or  selecting Connect from the Device menu bar. Select which board to be controlled by the software from the Board Selection drop-down list. The 0 corresponds to the first EV kit board in the daisy-chain; the highest numbered board is the last one in the daisy-chain.

## Detailed Description

The  MAX20096  EV  kit  demonstrates  the  MAX20096 dual-channel synchronous buck controller for high-power HB LED drivers  with  and  without  SPI  interface.  The  IC consists of a dual-channel, fully synchronous step-down converter with external MOSFETs. The IC also includes the SPI interface, which can be used for PWM dimming, analog dimming, fault monitoring, turning on and off the dual  channels  individually,  monitoring  the  LED  output voltage, and reading the LED currents of each channel. The IC can drive a series string of LEDs at currents as high as 3A. The IC uses a proprietary average current-modecontrol  scheme  to  regulate  the  inductor  current.  This control method does not need any control-loop compensation,  maintaining  nearly  constant  switching  frequency. Inductor current sense is achieved by sensing the current in the bottom synchronous n-channel MOSFET. The EV kit is configured to deliver up to 3A to a series LED string. The string-forward voltage can vary from 3V to 55V.

## PWM Dimming

The  GUI  that  comes  with  the  EV  kit  communicates  to the  SPI  interface  of  the  IC  so  PWM  dimming  can  be done. The dimming frequency can be varied from 200Hz to  2kHz  through  the  GUI.  The  duty  cycle  can  also  be adjusted to control the brightness of the LEDs. Each of the  dual  channels  can  be  dimmed  separately  and  with

## Evaluates: MAX20096

different duty cycles. PWM dimming can be done without the SPI Interface as well. Keep jumpers J3 and J5 in the open position and connect an external signal to the DIM1 and DIM2 tests points. Analog PWM dimming can also be done using the DIM1/DIM2 test points. Force an external analog DC voltage from 0.2V to 3V to vary the duty cycle from 0% to 100%, respectively.

## Analog Dimming

The  LED  currents  on  both  channels  can  be  adjusted through the GUI using the SPI interface. The LED current can be varied from 0A to 3A. If the current-sense resistors are chosen for a different full-scale current, use the GUI's Options menu bar and select Change Design Values , and  then RCS1 and RCS2 to  set  the  correct  currentsense resistor value.

The LED currents can also be adjusted through the REFI pins. Close jumpers J1 and J6. Using the potentiometers (R5  and  R23),  LED  currents  of  both  channels  can  be varied. The REFI voltage can be changed from 0.2V to 1.25V.  Below  the  0.2V  threshold,  the  LED  currents  are zero  and  when  REFI  voltage  is  adjusted  higher  than 1.25V, the internal REFI voltage is clamped for the fullscale LED current.

## Fault Monitoring

Faults  like  LED  Short,  LED  Open,  LED  overcurrent and overvoltage are reported in the GUI through the SPI interface. The Short LED threshold can be programmed from 100mV to 400mV in steps of 100mV.

## LED Current Monitor and LED Output Voltage

The  GUI  reports  the  LED  currents  of  each  of  the channels.  The  IC's  IOUTV1  and  IOUTV2  pins  report  a voltage  proportional  to  the  LED  currents.  The  internal ADC converts this voltage to a digital value and reports it through the SPI interface, which can be read using the GUI.  Similarly,  the  LED  output  voltage  is  also  digitized and monitored through the GUI.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX20096EVSYS# | EV System |

# Denotes RoHS compliant.

## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

## MAX20096 EV Kit Bill of Materials

| REF DES                                                                      |   QTY | VALUE          | DESCRIPTION                                                                                                                                                                       | MFG PART #                              | MANUFACTURER        |
|------------------------------------------------------------------------------|-------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------|
| C1, C28                                                                      |     2 | 1UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                    | CGA4J3X7R1H105M125AB                    | TDK                 |
| C2, C6, C14, C16, C23, C27                                                   |     6 | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO; SOFT TERMINATION                                                                | CGA3E2X7R1H104K080AE                    | TDK                 |
| C3, C12, C18, C26                                                            |     4 | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G; AUTO                                                                                 | CGA3E2C0G2A102J080AA                    | TDK                 |
| C4, C20                                                                      |     2 | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                    | CGA3E1X7R1V105K                         | TDK                 |
| C9, C11, C17, C21                                                            |     4 | 4.7UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                                                 | CGA6M3X7S2A475K200AE                    | TDK                 |
| C10, C19                                                                     |     2 | 0.22UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                 | CGA3E3X7R1H224K080AB; GCM188R71H224KA49 | TDK; MURATA         |
| C13                                                                          |     1 | 2.2UF          | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                      | CGA3E1X7R0J225K080AC                    | TDK                 |
| C15                                                                          |     1 | 0.1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                 | CGA4J2X7R2A104K125AA                    | TDK                 |
| CS, SDI, SDO, VCC, VIO, DIM1, DIM2, RSTB, SCLK, REFI1, REFI2, IOUTV1, IOUTV2 |    13 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | 5007                                    | KEYSTONE            |
| D1, D4                                                                       |     2 | 1N4448WS-7-F   | DIODE; SWT; SOD-323; PIV=75V; IF=0.5A                                                                                                                                             | 1N4448WS-7-F                            | DIODES INCORPORATED |
| D2, D3, D5, D6                                                               |     4 | B180-13-F      | DIODE; SCH; SCHOTTKY BARRIER RECTIFIER; SMA; PIV=80V; IF=1A                                                                                                                       | B180-13-F                               | DIODES INCORPORATED |
| IN, IN2, AGND, GND1-GND4, LED1+, LED2+                                       |     9 | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                          | 9020 BUSS                               | WEICO WIRE          |
| J1, J2, J6, J12, J15                                                         |     5 | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                          | PCC02SAAN                               | SULLINS             |
| J3-J5, J10, J11, J13                                                         |     6 | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                          | PCC03SAAN                               | SULLINS             |
| J7                                                                           |     1 | SSQ-108-23-G-S | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; STRAIGHT; 8PINS                                                                                                                      | SSQ-108-23-G-S                          | SAMTEC              |

│

Evaluates: MAX20096

## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

## MAX20096 EV Kit Bill of Materials (continued)

| REF DES                              |   QTY | VALUE                   | DESCRIPTION                                                                                                                                          | MFG PART #                                  | MANUFACTURER               |
|--------------------------------------|-------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|----------------------------|
| J8, J9                               |     2 | B6B-PH-K-S(LF)(SN)      | CONNECTOR; MALE; THROUGH HOLE; PH SERIES; STRAIGHT; 6PINS                                                                                            | B6B-PH-K-S(LF)(SN)                          | JST MANUFACTURING          |
| J14                                  |     1 | PEC08DAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                    | PEC08DAAN                                   | SULLINS ELECTRONICS CORP.  |
| L1, L2                               |     2 | 33UH                    | INDUCTOR; SMT; FERRITE BOBBIN CORE; 33UH; TOL=+/- 20%; 3.1A; -40 DEGC TO +125 DEGC                                                                   | MSS1278T-333ML                              | COILCRAFT                  |
| Q1, Q4                               |     2 | BUK9Y58-75B             | TRAN; N-CHANNEL TRENCHMOS LOGIC LEVEL FET; NCH; LFPAK; PD-(60.4W); I-(20.7A); V-(75V)                                                                | BUK9Y58-75B                                 | NEXPERIA                   |
| Q2, Q3                               |     2 | BUK9Y107-80E            | TRAN; N-CHANNEL 80V; 107MOHM LOGIC LEVEL MOSFET; NCH; LFPAK; PD-(37W); I-(11.8A); V-(80V)                                                            | BUK9Y107-80E                                | NXP                        |
| R1, R24                              |     2 | 453K                    | RESISTOR; 0603; 453K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                              | ERJ-3EKF4533V                               | PANASONIC                  |
| R2, R25                              |     2 | 24.9K                   | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                             | CRCW060324K9FK                              | VISHAY DALE                |
| R3, R21                              |     2 | 49.9K                   | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                             | CRCW060349K9FK; ERJ-3EKF4992V               | VISHAY DALE/PANASONIC      |
| R4, R14, R22                         |     3 | 10K                     | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                   | CRCW060310K0FK; ERJ-3EKF1002                | VISHAY DALE; PANASONIC     |
| R5, R23                              |     2 | 10K                     | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM | 3296W-1-103LF                               | BOURNS                     |
| R6, R20, R33, R34                    |     4 | 0.13                    | RESISTOR; 1206; 0.13 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                                                               | CSR1206FTR130                               | STACKPOLE ELECTRONICS INC  |
| R7, R8, R10, R16, R18, R19, R31, R32 |     8 | 0                       | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00 | VISHAY DALE/ROHM/PANASONIC |
| R9, R17                              |     2 | 1K                      | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                    | CRCW06031001FK; ERJ-3EKF1001V               | VISHAY DALE; PANASONIC     |
| R11-R13, R15                         |     4 | 4.7                     | RESISTOR; 0603; 4.7 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                               | CRCW06034R70FN                              | VISHAY DALE                |
| R26-R28                              |     3 | 4.75K                   | RESISTOR; 0603; 4.75K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                 | CRCW06034K75FK; ERJ-3EKF4751                | VISHAY DALE/PANASONIC      |
| R29, R30                             |     2 | 4.99K                   | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                 | CRCW06034K99FK; ERJ-3EKF4991V               | VISHAY DALE/PANASONIC      |
| SW1                                  |     1 | PTS810 SJM 250 SMTR LFS | SWITCH; SPST; SMT; 16V; 0.05A;PTS 810 SERIES; MICROMINIATURE SMT TOP ACTUATED; GRAY ACTUATOR; RCOIL=0.5 OHM; RINSULATION=100M OHM; C&K COMPONENTS    | PTS810 SJM 250 SMTR LFS                     | C&K COMPONENTS             |
| U1                                   |     1 | MAX20096ATI+            | EVKIT PART-IC; DRV; DUAL CHANNEL HIGH VOLTAGE BUCK LED DRIVER WITH SPI INTERFACE; PACKAGE OUTLINE: 21- 0140; PACKAGE CODE: T3255-6C; TQFN32-EP       | MAX20096ATI+                                | MAXIM                      |
| -                                    |     1 | PCB                     | PCB: MAX20096 EVKIT                                                                                                                                  | MAX20096EVKIT#                              | MAXIM                      |

Evaluates: MAX20096

## MAX20096 EV Kit Schematic

<!-- image -->

Evaluates: MAX20096

## MAX20096 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX20096

## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

## MAX20096 EV Kit PCB Layout Diagrams

MAX20096 EV Kit Component Placement Guide-Component Side

<!-- image -->

Evaluates: MAX20096

│

## MAX20096 EV Kit PCB Layout Diagrams (continued)

MAX20096 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX20096

│

## MAX20096 Evaluation Kit/ MAX20096 Evaluation System

## MAX20096 EV Kit PCB Layout Diagrams (continued)

MAX20096 EV Kit PCB Layout-Inner Layer 1

<!-- image -->

Evaluates: MAX20096

│

## MAX20096 EV Kit PCB Layout Diagrams (continued)

MAX20096 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Evaluates: MAX20096

│

## MAX20096 EV Kit PCB Layout Diagrams (continued)

MAX20096 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX20096

│

## MAX20096 Evaluation Kit/

## MAX20096 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/17           | Initial release                                                                                       | -               |
|                 1 | 1/18            | Removed MAX20096 EV System from Ordering Information                                                  | 3               |
|                 2 | 1/18            | Removed MAX20096 EV System from entire data sheet                                                     | 1-13            |
|                 3 | 6/19            | Updated title to include MAX20096 Evaluation System, added MAX20096 EV System to Ordering Information | 1-13            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20096