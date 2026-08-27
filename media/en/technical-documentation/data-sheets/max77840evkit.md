<!-- lastmod 2022-08-03 -->
## MAX77840 Evaluation Kit

## General Description

The MAX77840 evaluation kit (EV kit) consists of a board and the Maxim MINIQUSB with an extender board command module.

The  MAX77840  includes  a  single  input,  3.15A  switch mode charger with  reverse  boost  capability  for  one-cell Lithium-Ion (Li+) battery; USB BC1.2 adapter type detection  with  proprietary  ModelGauge  fuel-gauging  technology, and a Safeout LDO.

The EV kit comes standard with the MAX77840 installed. MiniQUSB board with an extender board should be used that  allows  a  PC  to  use  a  USB  port  to  emulate  an  I 2 C 2-wire  interface.  This  Windows ®   based  graphical  user interface (GUI) software is available for use with the EV kit and can be downloaded from the MAX77840 product webpage at www.maximintegrated.com . Windows 7 or newer operating system is required to use the EV kit GUI software.

Ordering Information appears at end of data sheet.

## MAX77840 EV Kit Files

| FILE                              | DESCRIPTION                     |
|-----------------------------------|---------------------------------|
| MAX77840GUISetupx.x.x.            | Installs the EV kit files on PC |
| Maxim_VID_FTDI_xxx_CDM_x.x.xx.zip | Installs MINIQUSB driver on PC  |

## MAX77840 EV Kit Component List

| FILE                            |   QTY | DESCRIPTION               |
|---------------------------------|-------|---------------------------|
| MAX77840EVKIT                   |     1 | MAX77840 evaluation board |
| MAXIM MINIQUSB                  |     1 | MINIQUSB interface board  |
| USB HIGH-SPEED A-TO-B CABLE 6FT |     1 | MINIQUSB cable            |

Evaluates: MAX77840

## Benefits and Features

- MAX77840 EV kit Includes all Necessary Components for Device Operation in Addition to many Components for added Flexibility and Easy to Use
- Easy-to-Use Push-Button Interface for On-Off Control
- 0Ω Resistors in Series with Several Key Nodes to be able to Isolate them and for Added Flexibility
- Assembled and Tested
- Test Points Allow Convenient Access to Nodes of Interest
- Jumper Headers Acting as both Test Points and Shunts

## Jumper Header Configuration

Table  1  summarizes  all  jumper  headers  included  in  the MAX77840  EV  kit  and  their  function.  Additionally,  the MAX77840 EV Kit Schematic Diagram can be used as a reference.

## Table 1. Jumper Header Summary

| JUMPER NUMBER   | NODE    | DEFAULT POSITION   | FUNCTION                                                                                       |
|-----------------|---------|--------------------|------------------------------------------------------------------------------------------------|
| J4              | V IO    | 2-3                | 1-2: Connect V IO to external I 2 C pullup 2-3: Connect V IO to V SYS                          |
| J6              | SLAVE   | 2-3                | 1-2: Enable SLAVE charger 2-3: Disable SLAVE charger (or SLAVE not present)                    |
| J8              | DETBATB | 2-3                | 1-2: Connect to V IO 2-3: Connect to GND                                                       |
| J9              | V CC    | 1-2                | 1-2: Connect voltage translator to V SYS 2-3: Connect voltage translator to I 2 C V DD (+3.3V) |

* Indicates default jumper position.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX77840 Evaluation Kit

## Quick Start

## Required Equipment

- MAX77840 EV kit
- Single-cell Lithium-ion (Li-ion) battery pack
- Charging wall adapter or DC power supply capable of supplying 15.0V/3A
- Standard USB Type A to Type B cable (included in the EV kit bundle)
- PC running Windows 7 or above

## Setup Overview

A typical bench setup for the MAX77840 EV kit is shown in Figure 1.

## Procedure

Follow the steps to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly

## Evaluates: MAX77840

from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system and Do not turn on the DC power supplies until all connections are made.

- 1) Carefully connect the boards by inserting the 20-pin female connector of the EV kit with the 20-pin male header  of  the  MINIQUSB  interface  board.  The  two boards should be flush with each other.
- 2) Use the USB cable provided in the EV kit bundle to connect the MINIQUSB interface board to the PC's USB port.
- 3) Install the MINIQUSB driver:
- a. [Windows 32-bit](https://www.maximintegrated.com/en/design/software-description.html/swpart=SFW0004920A)
- b. [Windows 64-bit](https://www.maximintegrated.com/en/design/software-description.html/swpart=SFW0004910A)
- 4) Verify whether the jumper settings follow the default configuration. See Jumper Header Configuration .
- 5) Connect  a  Li-ion  battery  to  the  pads  labeled  BATT and BATTGND.

Figure 1. MAX77840 Bench Setup

<!-- image -->

│

## MAX77840 Evaluation Kit

- 6) Connect a USB wall adapter to the micro-USBport on the board.
- 7) Launch the MAX77840 application file.
- 8) Select Device &gt; Connect from the window options to connect to the EV kit.
- a.  If a supply is chosen to power the IC instead of a battery, then preset the power supply to 5V, 1A. Do not turn on the power supply until all connections are completed.
- b.  Connect the positive and negative terminals of the supply to BATT and BATTGND, respectively.
- c.  Turn on the 5V power supply.
- d.  Charging current should be ~500mA default. Measured value varies with the EV kit configuration.

## Detailed Description of Software

## Graphical User Interface (GUI) Panel

The  GUI  is  separated  into  several  tabs  that  provide  a convenient means to control the MAX77840 IC. Use the mouse or press the tab key to navigate through the GUI controls. Each tab is named with respect to the subsystems within the chip. The correct SMBus read and write operations are generated to update the ICs internal memory registers when any of these controls are executed.

## Communication Port

The software automatically finds the EV kit board through USB identification. If the connection cannot be found, a Not Connected message  is  displayed  as  shown  in  Figure  3. Once the USB cable is attached, click on the main window option, Device &gt; Connect , and a synchronization window pops up. Choose Read and Close and the status bar displays Connected signifying active communication.

Figure 2. MAX77840 EV Kit GUI Screen

<!-- image -->

Figure 3. MAX77840 EV kit status bar

<!-- image -->

│

## Detailed Description of Hardware

## Battery Charger Test Setup

- 1) Power Source:
- a.  If the charging source is a DC power supply, then adjust  its  voltage  and  current  limits  to  5.0V  and 3.0A, respectively. Connect the power supply between VBUS and GND on the EV kit board.
- b. If the charging source is a wall adapter, then the micro-USB port  can  be  used  for  charging.  Note that high current charging (up to 3A) requires an adapter and cable capable of high-power delivery.
- 2) Connect  a  single-cell  Li-Ion  battery  between  BATT and BATTGND.
- 3) Open the software screen and program the charger settings adequate to your system.
- 4) In the Charger tab, enable the DIS\_CD\_CTRL bit in the CHG\_CNFG\_00 to  enable  charging using a micro-USB port or power supply.
- 5) In the Charger Detect 2 tab, enable NoAutoIBUS in the CHGDET\_CNTRL1 register  so  that  the  current limit setting can be manually controlled by I 2 C.
- 6) Set  the  maximum  input  current  limit  in  the CHG \_ CNFG\_09 register, and then select the required fast charge current in the CHG \_CNFG\_02 register.
- 7) Use  data  log  equipment  to  log  charge  current  and VBATT  profile  while  charging  a  fully  discharged single-cell Li+ battery.

Evaluates: MAX77840

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77840EVKIT# | EV Kit |

# Denotes RoHS compliant

Note: The MAX77840 EV kit software is included with the EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim MINI-Q module and the EV kit.

│

## MAX77840 Evaluation Kit

## MAX77840 EV Kit Bill of Materials

| REF_DES                                                                                                                                                                     |   QTY | MFG PART #                                                                   | DESCRIPTION                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| AVL, PVL, SAFEOUT, VBFG, VIO                                                                                                                                                |     5 | 5010                                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;              |
| BATT, BATTGND, CHGGND, CHGIN, GND1-GND4, VBUS, VSYS                                                                                                                         |    10 | 9020 BUSS                                                                    | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| BST, BYP, BYPS, CHGIND, CHGINS, CHGINS-, CHGLX, CSP, DETBATB, DM, DP, ENU_EN, INOKB, INTB, ONKEY, OVPENB, SCL, SCLLS, SDA, SDALS, SW1, SW2, SYSS, SYSS-, THM, THMB, VBUSDET |    27 | 5000                                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| C3                                                                                                                                                                          |     1 | C0603H102J1GAC                                                               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO +200 DEGC; TC=C0G       |
| C4                                                                                                                                                                          |     1 | ATC520L103KT16T                                                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=ULTRA-BROADBAND; TG=-55 DEGC TO +125 DEGC; TC=X7R |
| C1, C2, C5, C21, C22                                                                                                                                                        |     5 | ANY                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                  |
| C6                                                                                                                                                                          |     1 | ZRB157R61A225KE11; GRM155R61A225KE95; CL05A225KP5NSN                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                          |
| C7                                                                                                                                                                          |     1 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12             | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                  |
| C9                                                                                                                                                                          |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC        | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                           |
| C10                                                                                                                                                                         |     1 | GRM155R61C104KA88                                                            | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R             |
| C11, C20                                                                                                                                                                    |     2 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |

Evaluates: MAX77840

## MAX77840 Evaluation Kit

## MAX77840 EV Kit Bill of Materials (continued)

| REF_DES        |   QTY | MFG PART #                                                                                    | DESCRIPTION                                                                                                           |
|----------------|-------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| C12            |     1 | GRM188R61C106MA73                                                                             | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R            |
| C13, C14, C16  |     3 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
| C15            |     1 | ANY                                                                                           | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR |
| C17            |     1 | ANY                                                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR |
| C18            |     1 | ANY                                                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 25V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| C23            |     1 | TCJB107M006R0070                                                                              | CAPACITOR; SMT (3528); TANTALUM CHIP; 100UF; 6.3V; TOL=20%; MODEL=TCJ SERIES                                          |
| D1, D2         |     2 | RCLAMP0521P                                                                                   | DIODE; TVS; SMT (0402); PIV=5V; IF=4A                                                                                 |
| DS3            |     1 | LTST-C190GKT                                                                                  | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                    |
| J1             |     1 | 10118193-0001LF                                                                               | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHTANGLE; 5PINS                                                |
| J2             |     1 | PPTC102LJBN-RC                                                                                | CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHTANGLE; 20PINS                                                 |
| J4, J6, J8, J9 |     4 | TSW-103-07-T-S                                                                                | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                      |
| L1             |     1 | CIGT252010EH1R0M                                                                              | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                                    |
| R4, R8         |     2 | ANY                                                                                           | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                 |
| R6             |     1 | RK73H1ETTP1204F                                                                               | RESISTOR, 0402, 1.2M OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                             |
| R7             |     1 | CRCW0402120KFK                                                                                | RESISTOR, 0402, 120K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                             |
| R10, R12       |     2 | CRCW0402200KFK; RF73H1ELTP2003                                                                | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                 |
| R13, R14       |     2 | CRCW04022K21FK                                                                                | RESISTOR; 0402; 2.21K; 1%; 100PPM; 0.0625W; THICK FILM                                                                |

│

Evaluates: MAX77840

## MAX77840 Evaluation Kit

## MAX77840 EV Kit Bill of Materials (continued)

| REF_DES            |   QTY | MFG PART #                        | DESCRIPTION                                                                                                            |
|--------------------|-------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------|
| R15                |     1 | CRCW0402470RJN                    | RESISTOR; 0402; 470 OHM; 5%; 200PPM; 0.063W; METAL FILM                                                                |
| R16, R17, R22, R23 |     4 | CRCW04020000Z0EDHP; RCS04020000Z0 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                    |
| R18, R21, R25      |     3 | ANY                               | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                     |
| R19                |     1 | ERJ-2GEJ103                       | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                 |
| R24                |     1 | RLM-0816-4F-R005-FNH              | RESISTOR; 0603; 0.005 OHM; 1%; 200PPM; 0.5W; METAL FOIL                                                                |
| R26                |     1 | 3214W-1-104E                      | RESISTOR; ; 100K OHM; 10%; 100PPM; 0.25W; MOLDER CERAMIC OVER METAL FILM                                               |
| SW4                |     1 | EVQ-Q2K03W                        | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                             |
| U1                 |     1 | MAX77840EWG+                      | EVKIT PART - IC; CHGR; INTEGRATED CHARGER WITH FUEL GAUGE CHARGER; WLP81; PKG CODE: W813C3+1; PKG OUTLINE NO.: 21-0775 |
| U2                 |     1 | MAX8511EXK18+                     | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW=DROPOUT; LINEAR REGULATOR; SC70-5                                            |
| U3                 |     1 | MAX14681EWC+                      | IC; PROT; HIGH ACCURACY; SURGE-PROTECTED OVERVOLTAGE PROTECTOR; WLP12                                                  |
| U4                 |     1 | MAX3395EETC+                      | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4             |
| PACK-OUT           |     1 | MINIQUSB+                         | ASSEMBLED BOARD                                                                                                        |
| PCB                |     1 | MAX77840                          | PCB:MAX77840                                                                                                           |
| BATT1              |     0 | 7006                              | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                       |
| BATTGND1           |     0 | 7007                              | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                     |
| RT1                |     0 | NCP15XH103F03                     | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                     |
| C19                |     0 | N/A                               | CAPACITOR; SMT (0805); OPEN; IPC MAXIMUM LAND PATTERN                                                                  |
| R20                |     0 | N/A                               | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                       |

│

Evaluates: MAX77840

## MAX77840 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX77840

## MAX77840 EV Kit PCB Layout Diagrams

MAX77840 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Top Layer

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Internal 2

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Internal 3

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Internal 4

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Internal 5

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Bottom Layer

<!-- image -->

│

## MAX77840 EV Kit PCB Layout Diagrams (continued)

MAX77840 EV Kit PCB Layout Diagram-Bottom Silkscreen

<!-- image -->

│

## MAX77840 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 4/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserves the right to change the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX77840