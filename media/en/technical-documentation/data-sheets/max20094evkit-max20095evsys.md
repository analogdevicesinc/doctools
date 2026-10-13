<!-- lastmod 2022-08-04 -->
## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## General Description

The  MAX20094/MAX20095  evaluation  kits  (EV  kits) are  fully  assembled  and  tested  application  circuits  for the MAX20094/MAX20095 backup battery chargers and boost controllers with I 2 C capability. The EV kits are set up to provide the user with a convenient method to assess the  constant-current/constant-voltage  (CC/CV)  battery charger,  state-of-health  (SOH)  diagnostic  features,  and the boost controller.

Both  EV  kits  are  recommended  for  use  with  the  free MAX20094 companion GUI and an I 2 C interface board, such as the Maxim Integrated command module (MINIQUSB). The MINIQUSB enables I 2 C  communication  through  the USB port of a PC by emulating a 2-wire interface. The EV system  includes  both  the  EV  kit  and  the  MINIQUSB command module. Note: The EV kit can also be used as a stand-alone board without these items. The EV kit can also evaluate  the  pin-compatible  MAX20095  with  IC  replacement of U1.

## MAX20094 EV Kit Photo

Evaluate: MAX20094/MAX20095

## Benefits and Features

- ● Easy Testing of CC/CV Charger, SOH Functions, and Boost Controller
- ● Free Downloadable EV Kit GUI
- ● MINIQUSB for Simplified Control
- ● Jumpers and Pins for External I 2 C Controller
- ● Optimized Application Layout for Quick Implementation
- ● Both MAX20094 and MAX20095 EV Kits Can be Used to Evaluate Either of the Pin-Compatible ICs with Component Replacement of the U1 IC
- ● Proven PCB Layout
- ● Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Note: Photo shows the Maxim MINIQUSB board on left and the MAX20094 EV kit board on right.

<!-- image -->

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## Quick Start

## Required Equipment

- ● MAX20094 or MAX20095 EV kit
- ● Latest  version  of  the  MINIQUSB  command  module firmware (optional, USB cable included) available from www.maximintegrated.com/evkitsoftware
- ● Latest  version  of  the  MAX20094  EV  kit  software, available from www.maximintegrated.com/evkit -software
- ● Three adjustable DC power supplies (PS1, PS2, PS3)
- ● Digital multimeter (DMM)
- ● Power  resistor,  adjustable  preferred  (this  can  be omitted if power supply can sink current)
- ● Electronic load

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download the latest version of the EV kit software, and  install  to  your  PC  using  the  .EXE  setup  file. The supported operating systems are Windows ®  7, Windows 8, and Windows 10.
- 2) Connect the USB cable from the PC to the MINIQUSB board, and then plug it into JU1 on the EV kit.
- 3) If  the  firmware  on  the  MINIQUSB  board  is  not compatible  with  the  GUI,  the  most  recent  version should be downloaded and the board updated. Refer to the MINIQUSB Firmware Update instructions in the downloaded file for further information.
- 4) Verify that all jumpers are in their default positions, as shown in Table 1.

Evaluate: MAX20094/MAX20095

## Procedure for CC/CV Charging

To quickly test the CC/CV battery-charging functionality, power  supplies  and  a  variable  power  resistor  are  used instead of actual batteries:

- 1) Preset the PS1 power supply to 14V, then disable the supply. Connect the positive and negative terminals to the MBATT1 and the neighboring GND test pads, respectively, and turn on the supply.
- 2) Preset the PS2 power supply to 4V, then disable the supply. Connect the positive and negative terminals to  the  VSUP1  and  the  neighboring  GND  test  pads, respectively, and turn on the supply.
- 3) Preset  the  PS3  power  supply  to  3.2V,  then  disable the supply.
- 4) Set a DMM to measure current. Connect the positive terminal of PS3 to the DMM's COM, and then connect the positive side of the DMM to the BBAT+ test pad. Close the current path by connecting the neighboring GND test pad to the supply's negative terminal and turn on PS3.
- 5) Connect  a  60Ω  power  resistor  across  PS3,  and optimize  the  value  of  the  resistor  to  the  charging current being tested.
- 6) Start  the  EV  kit  software  on  the  PC  and  click  the splash screen to bring up the main window.
- 7) Check CHG\_EN in the GUI (Figure 1) to enable the charger.
- 8) Verify that current through the DMM is approximately 50mA, from the board to the supply.

## Table 1. MAX20094/MAX20095 EV Kits Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTION                                        |
|----------|--------------------------|-------------------------------------------------|
| JU1      | -                        | MINIQUSB socket                                 |
| JU2      | -                        | -                                               |
| JU3      | Open                     | Disables (shorts EN1B to VDDIO)                 |
| JU4      | Installed                | Shorts MINIQUSB's VDD to VDDIO                  |
| JU5      | Installed                | Shorts SDA to MINIQUSB's SDA                    |
| JU6      | Installed                | Shorts SCL to MINIQUSB's SCL                    |
| JU7      | Installed                | Connects STATUSB to VDDIO through 10kΩ resistor |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## Evaluate: MAX20094/MAX20095

## Procedure for the State-of-Health (SOH)

To quickly test the SOH functionality, power supplies are used instead of actual batteries:

- 1) Preset PS1 to 14V, then disable the supply. Connect the positive and negative terminals to MBATT1 and the neighboring GND test pads, respectively, and turn on the supply.
- 2) Preset PS2 to 4V, then disable the supply. Connect the positive and negative terminals to VSUP1 and the neighboring GND test pads, respectively, and turn on the supply.
- 3) Preset PS3 to 3.2V, then disable the supply.
- 4) Set  the  DMM  to  measure  current.  Connect  the positive terminal of PS3 to the DMM's COM, and then connect the positive side of the DMM to the BBAT+ test  pad.  Close  the  current  path  by  connecting  the neighboring  GND  test  pad  to  the  supply's  negative terminal, then turn on PS3.
- 5) Start  the  EV  kit  software  on  the  PC  and  click  the splash screen to bring up the main window.
- 6) Check SOH\_EN in the GUI (Figure 1) to enable the SOH function.
- 7) Verify that the MAX20094/MAX20095 current through the DMM is approximately -500mA, flowing from the supply to the board.

## Procedure for the Boost Controller

To  quickly  test  the  boost-controller  functionality,  power supplies are used instead of actual batteries:

- 1) Preset PS1 to 14V, then disable the supply. Connect the positive and negative terminals to MBATT1 and the neighboring GND test pads, respectively, and turn on the supply.
- 2) Preset PS2 to 4V, then disable the supply. Connect the positive and negative terminals to VSUP1 and the neighboring GND test pads, respectively, and turn on the supply.
- 3) Preset PS3 to 3.2V, then disable the supply. Connect the positive and negative terminals to BBAT+ and the neighboring GND test pads, respectively, and turn on the supply.
- 4) Connect  an  electronic  load's  positive  and  negative terminals to MBATT2 and the neighboring GND test pads, respectively. Set the load to 100mA.
- 5) Start  the  EV  kit  software  on  the  PC  and  click  the splash screen to bring up the main window.
- 6) Check BST\_EN in  the  GUI  to  enable  the  boost controller.
- 7) Lower PS1 from 14V to 0V.
- 8) Verify that MBATT2 voltage is approximately 6.2V on the MAX20094 EV kit and 9V on the MAX20095 EV kit.

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## Detailed Description Software

The  GUI  shown  in  Figure  1  is  the  main  window  of MAX20094 EV kit  software,  and  provides  a  convenient means  to  control  both  the  MAX20094  and  MAX20095 ICs. When the software is first opened, a splash screen appears. Click anywhere on the screen to proceed to the main  window.  Verify  that  the  bottom-right  corner  of  the status bar displays EV Kit: Connected . If there is a problem with the connection, reconnect the EV kit to the PC, power it up, and then click Device &gt; Connect ,  or  press F9 on the keyboard. Refer to the MAX20094/MAX20095 IC data sheet for a full description of each register and their bits.

## CC/CV Charging Details

The  normal  operating  mode  of  the  IC  is  to  maintain charge on the backup battery of a system. Several key aspects  of  the  charging  function  can  be  easily  tested through the GUI.

Evaluate: MAX20094/MAX20095

## Switching Between Charging Modes

When the charger is enabled, the operation is governed by an internal state machine.

Disabled: The charger is in an OFF state if the CHG\_EN bit (register 0x04) = 0, or if the die temperature is above thermal-shutdown threshold.

Prequal: The prequalify  state  is  a  current-limited  mode that occurs if BBAT+ voltage is less than an internal OTP threshold.  To  enter  this  mode,  set  BBAT+  to  0V  before enabling the charger.

Standby: Once the charger is enabled, it remains in this state until a valid supply condition is met. To verify on EV kit, enable the charger and then enter SUP1 undervoltage lockout (UVLO) by reducing the V SUP1  to below 3.5V.

CC: The  continuous-current  mode  is  used  when  the rechargeable battery needs a significant amount of charge. To enter this mode, follow the quick start Procedure for CC/CV Charging section.

Figure 1. MAX20094 Evaluation Kit Software Main Window (also applies to the MAX20095 EV Kit)

<!-- image -->

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## Evaluate: MAX20094/MAX20095

CV: Continuous-voltage mode is triggered automatically if the rechargeable battery approaches full charge, set by 0x06 CHGR\_CV threshold.  To test this from the Quick Start setup,  slowly  increase  the  BBAT+  voltage  until  it  is  just below the threshold.

Done: When the charger detects that battery voltage has surpassed 0x06 CHGR\_CV threshold, it enters the done state and no longer charges the battery. To quickly enter this state, lower the 0x06 slider in the GUI below BBAT+ voltage.

## Setting Charger CC Current

In  constant-current  mode,  the  fast-charging  current  can be adjusted based on system requirements. To adjust this on the EV kit, adjust the 0x05 CHGR\_CC slider in the GUI (Figure 1). If a power supply without sinking capability is used for  BBAT+, a power resistor should be connected in  parallel  to  the  board  to  dissipate  the  charge  current (flowing from board to supply). To prevent excess power from  being  drawn,  the  optimal  resistor  value  is  derived from:

<!-- formula-not-decoded -->

If  the resistor value is too low, the charger may become current limited and will automatically switch to CV mode.

## State-of-Health (SOH) Details

The SOH function allows the IC to determine the condition of the backup battery based on the output impedance.

## SOH Test Current

Test  current  used  by  the  SOH  system  to  determine  the battery  condition  can  be  adjusted  using  the  slider  in the  0x07  SOH  register  box.  The  default  for  the  EV  kit is  500mA,  which  can  be  changed  with  the  lower  slider (REG\_ISINK). To set it in the IC, enable SOH\_OVR in the 0x04 CONTROL register box.

## SOH Current Limit

The SOH will report a current-limit error if SOH\_ILIM is operating  in  overcurrent  condition,  or  BBAT+  is  below 2.5V. When this occurs, SOH can no longer be enabled, so  the  SOH\_ILIM  indicator  in  0x02  GEN\_STATUS register blinks until the supply is increased again.

## Boost Controller Details

The boost controller allows the IC to maintain a regulated supply voltage on the MBATT2 pin using the backup battery in the event of a main battery failure. The IC includes a synchronous current-mode boost controller with factorypreset output. The standard switching frequency is 2.1MHz and operates in both FPWM and skip modes. When the SUP2 pin is above the regulation voltage, the boost block enters an ultra-low I Q  standby mode.

## Mode of Operation

The  default  mode  of  operation  for  the  MAX20094/ MAX20095  is  skip  mode,  which  increases  efficiency  at light loads to reduce the power consumption of the backup battery.  To  operate  in  FPWM  mode,  uncheck  BST\_SKIP in  the 0x04 CONTROL register in the GUI. To guarantee FPWM operation across all load conditions, R4 should be switched  to  250Ω.  In  addition,  for  IC  options  with  boost output voltages greater than or equal to 8V, the inductor (L1) should be increased to accommodate the larger ripple current. A 2.2µH inductor is sufficient for the 12V option, which can be used for lower output voltages as well.

## Ordering Information

| PART            | TYPE      |
|-----------------|-----------|
| MAX20094 EVKIT# | EV Kit    |
| MAX20094EVSYS#  | EV System |
| MAX20095 EVKIT# | EV Kit    |
| MAX20095EVSYS#  | EV System |

# Denotes RoHS compliant.

Note: The EV system includes both the EV kit and the MINIQUSB command module.

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## MAX20094/MAX20095 EV Kits Bill of Materials

| REF DESIGNATORS                                                                              |   QTY | VALUE    | DESCRIPTION                                                                                                                                                                 | MFG PART NO.                                            |
|----------------------------------------------------------------------------------------------|-------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| AVB, AVI, NTC, SCL, SDA, EN1B, IMON, VBIAS, BUBTRIG, STATUSB, MINIQ_VL, MINIQ_SCL, MINIQ_SDA |    13 | -        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | 5000                                                    |
| C1, C22                                                                                      |     2 | 1.0UF    | CAPACITOR; SMT (0603); CERAMIC; 1UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-0001u-63                      | GRM188R70J105KA01; CL10B105KQ8NNNC                      |
| C2                                                                                           |     1 | 3900PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 3900PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                 | C0402X7R500-392KNE; GRM155R71H392KA01                   |
| C3                                                                                           |     1 | 100PF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                   | C1005C0G1H101G050                                       |
| C4, C13, C17, C21                                                                            |     4 | 0.1UF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                  | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 |
| C5-C8                                                                                        |     4 | 4.7UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          | GRM31CR71H475KA12                                       |
| C9,10                                                                                        |     2 | 330UF    | CAPACITOR; SMT; ALUMINUM-ELECTROLYTIC; 330UF; 35V; TOL=20%                                                                                                                  | EEE-FK1V331GP                                           |
| C11                                                                                          |     1 | 2.2UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          | C2012X7R1H225K                                          |
| C12                                                                                          |     1 | 10UF     | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                   | C3216X7R1C106M160AC                                     |
| C14, C23                                                                                     |     1 | 2.2UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                                                  | GRM188C71E225KE11                                       |
| C15                                                                                          |     1 | Open     | -                                                                                                                                                                           | -                                                       |
| C16                                                                                          |     1 | 2.2UF    | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                | CGA3E1X7R0J225K080AC                                    |
| C18, C19                                                                                     |     2 | Open     | -                                                                                                                                                                           | -                                                       |
| C20                                                                                          |     1 | 680PF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 680PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                   | GRM1555C1H681GA01 C1005C0G1H681G050                     |
| D1                                                                                           |     1 | -        | DIODE; SCH; SCHOTTKY DIODE; SMT (SOD-323); PIV=30V; IF=0.2A                                                                                                                 | BAT54H                                                  |
| D2                                                                                           |     1 | -        | DIODE; RECT; SMC; PIV=600V; IF=4A                                                                                                                                           | MURS360T3G                                              |
| GND1-GND5, BBAT+, VDDIO, VSUP1, MBATT1, MBATT2                                               |    10 | -        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                    | 9020 BUSS                                               |
| JU1                                                                                          |     1 | -        | CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHT ANGLE; 20PINS                                                                                                      | PPTC102LJBN-RC                                          |
| JU2                                                                                          |     1 | -        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                                                                           | PBC10SAAN                                               |
| JU3-JU7                                                                                      |     5 | -        | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                                                     | TSW-102-07-T-S                                          |
| L1                                                                                           |     1 | 680NH    | INDUCTOR; SMT; SHIELDED; 680NH; TOL=+/-20%; 25A                                                                                                                             | IHLP2525CZERR68M01                                      |
| L2                                                                                           |     1 | 10UH     | INDUCTOR; SMT; SHIELDED; 10UH; TOL=+/-20%; 5.4A                                                                                                                             | IHLP3232DZER100M11                                      |
| M1                                                                                           |     1 | -        | TRAN; AUTOMOTIVE DUAL N-CHANNEL 40V (D-S) 175 DEGC MOSFET; NCH; SO-8L; PD-(48W); I-(30A); V-(40V)                                                                           | SQJ912AEP-T1_GE3                                        |
| M2                                                                                           |     1 | -        | CONNECTOR; FEMALE; SMT; MICRO FIT 3.0 VERTICAL HEADER; 3MM PITCH; SINGLE ROW; WITH PCB PRESSFIT METAL RETENTION CLIP; STRAIGHT; 3PINS                                       | 43650-0322                                              |
| M3                                                                                           |     1 | -        | TRAN; AUTOMOTIVE P-CHANNEL TRENCHFET POWER MOSFET; PCH; POWERPAK1212-8; PD-(62.5W); I-(-16A); V-(-40V)                                                                      | SQS401EN-T1-GE3                                         |
| M4                                                                                           |     1 | -        | TRAN; AUTOMOTIVE P-CHANNEL TRENCHFET POWER MOSFET; PCH; SO-8; PD-(83W); I-(-40A); V-(-40V)                                                                                  | SQJ443EP-T1-GE3                                         |
| R1                                                                                           |     1 | 49.9k    | RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                      | CRCW040249K9FK; 9C04021A4992FLHF3                       |
| R2                                                                                           |     1 | 499      | RESISTOR; 0402; 499 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                    | CRCW0402499RFK                                          |
| R3, R4                                                                                       |     2 | 100      | RESISTOR; 0402; 100 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                                                       | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL        |
| R5                                                                                           |     1 | 0.003    | RESISTOR; 1206; 0.003 OHM; 1%; 150PPM; 1W; METAL FILM                                                                                                                       | WSLP12063L000F                                          |
| R6, R13                                                                                      |     2 | 1K       | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                         | CRCW04021K00FK; RC0402FR-071KL                          |
| R7, R8, R14                                                                                  |     3 | 0        | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                                                         | CRCW04020000Z0EDHP                                      |
| R9                                                                                           |     1 | Open     | -                                                                                                                                                                           | -                                                       |
| R10                                                                                          |     1 | 0.2      | RESISTOR; 0603; 0.2 OHM; 1%; 200PPM; 0.10W; THICK FILM                                                                                                                      | CRL0603-FW-R200ELF                                      |
| R11, R12                                                                                     |     2 | 10K      | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                     | CRCW040210K0JN                                          |
| U1                                                                                           |     1 | MAX20094 | EVKIT PART-IC; CTRL; BACKUP BATTERY CHARGER AND BOOST CONTROLLER; QFN28-EP; PACKAGE CODE: T2855Y-5C, 2.2MHz                                                                 | MAX20094ATIA/VY+                                        |
| U1                                                                                           |     1 | MAX20095 | EVKIT PART-IC; CTRL; BACKUP BATTERY CHARGER AND BOOST CONTROLLER; QFN28-EP; PACKAGE CODE: T2855Y-5C, 2.2MHz                                                                 | MAX20095ATIC/VY+                                        |
| -                                                                                            |     1 | -        | PCB: MAX20094 EVKIT#                                                                                                                                                        | MAX20094EVKIT#                                          |

Evaluate: MAX20094/MAX20095

## MAX20094 EV Kit Schematic

<!-- image -->

│

Evaluate: MAX20094/MAX20095

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## MAX20095 EV Kit Schematic

<!-- image -->

│

Evaluate: MAX20094/MAX20095

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## MAX20094/MAX20095 EV Kits PCB Layouts

MAX20094 EV Kit Component Placement Guide-Top (also applies to the MAX20095 EV Kit)

<!-- image -->

Evaluate: MAX20094/MAX20095

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

Evaluate: MAX20094/MAX20095

## MAX20094/MAX20095 EV Kits PCB Layouts (continued)

MAX20094 EV Kit Component Placement Guide-Bottom (also applies to the MAX20095 EV Kit)

<!-- image -->

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

Evaluate: MAX20094/MAX20095

## MAX20094/MAX20095 EV Kits PCB Layouts (continued)

<!-- image -->

MAX20094 EV Kit PCB Layout-Internal 2 (also applies to the MAX20095 EV Kit)

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

Evaluate: MAX20094/MAX20095

## MAX20094/MAX20095 EV Kits PCB Layouts (continued)

MAX20094 EV Kit PCB Layout-Internal 3 (also applies to the MAX20095 EV Kit)

<!-- image -->

│

## MAX20094/MAX20095 Evaluation Kits/ MAX20094/MAX20095 Evaluation Systems

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                                       | -               |
|                 1 | 8/17            | Added missing Ordering Information table                              | 5               |
|                 2 | 1/18            | Added MAX20095EVKIT# and MAX20095EVSYS# to Ordering Information table | 5               |
|                 3 | 1/18            | Added MAX20095 EV kit and MAX20095 EV system to entire data sheet     | 1-13            |
|                 4 | 3/18            | Replaced MAX20094 and MAX20095 schematics                             | 7, 8            |
|                 5 | 3/18            | Updated the Ordering Information table                                | 5               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX20094/MAX20095