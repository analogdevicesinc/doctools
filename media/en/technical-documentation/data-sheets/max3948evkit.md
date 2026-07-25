<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3948 evaluation kit (EV kit) is a fully tested and assembled  demonstration  board  that  provides  optical  evaluation  of  the  MAX3948  DC-coupled,  1Gbps  to 11.3Gbps laser driver. The controlling software communicates with the EV kit through the USB port and provides simplified  control  of  all  functions  of  the  MAX3948.  The EV kit can be fully powered by the USB port, or the user can choose to power the MAX3948 by a single external 3.3V  supply  while  the  USB  port  supplies  the  on-board microcontroller. The flex-cable connection on the evaluation  board  allows  attachment  of  lasers  incorporating flex-cables.

| DESIGNATION               |   QTY | DESCRIPTION                                     |
|---------------------------|-------|-------------------------------------------------|
| C1, C3, C4, C5, C8, C16   |     6 | 0.01 F F Q 10% ceramic capacitors (0402)        |
| C2                        |     1 | 0.3pF Q 0.1pF ceramic capacitor (0201)          |
| C6, C9                    |     0 | 0.5pF Q 0.1pF ceramic capacitors (0402)         |
| C7, C12, C29              |     3 | 0.1 F F Q 20% ceramic capacitors (0204)         |
| C11, C13, C15             |     3 | 10 F F Q 10% ceramic capacitors (0805)          |
| C21, C22                  |     2 | 33pF Q 10% ceramic capacitors (0402)            |
| C25, C26, C27, C49, C52   |     5 | 0.1 F F Q 10% ceramic capacitors (0402)         |
| C28                       |       | Not installed (0201)                            |
| C33                       |     1 | 0.01 F F Q 10% ceramic capacitor (0201)         |
| C34, C55                  |     2 | 1 F F Q 10% ceramic capacitors (0603)           |
| C35, C37, C38             |     3 | 4.7 F F Q 10% ceramic capacitors (0805)         |
| D6                        |     1 | Green LED                                       |
| J1, J2                    |     2 | SMA connectors, edge mount                      |
| J3, J4, TP1-TP4, TP6-TP15 |    16 | Test points                                     |
| J5, J6, J7, J9, J10       |     5 | 1 x 2 headers, 0.1in centers                    |
| J8                        |     1 | Mini-B USB connector                            |
| L1                        |     1 | 22 F F, Q 20% inductor Taiyo Yuden CBC3225T220M |

## MAX3948 Evaluation Kit Evaluates: MAX3948

## Features

- S Drives Differentially-Connected Lasers
- S Software Control of the MAX3948
- S Power Supplied Through USB or External Connection

## EV Kit Contents

- S MAX3948 EV Kit Board

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                       |
|-------------------------|-------|-------------------------------------------------------------------|
| L2, L3                  |     2 | 18nH Q 2% inductors (0402)                                        |
| L4                      |     1 | Ferrite bead (0402) Murata BLM15GG471                             |
| L10, L14                |     2 | 10 F H Q 10% inductors (0603)                                     |
| R1                      |     1 | 1.00k I Q 1% resistor (0402)                                      |
| R3                      |     1 | 680 I Q 5% resistor (0402)                                        |
| R4, R31, R51, R53       |     4 | 10k I Q 5% resistors (0402)                                       |
| R5, R6                  |     2 | 20 I Q 5% resistors (0402)                                        |
| R7                      |     1 | 100 I Q 5% resistor (0201)                                        |
| R12                     |     0 | Not installed (0201)                                              |
| R15, R50                |     2 | 4.7k I Q 5% resistors (0402)                                      |
| R18, R52, R55, R66, R73 |     5 | 51 I Q 5% resistors (0402)                                        |
| R24                     |     1 | 1.5k I Q 5% resistor (0402)                                       |
| SW1                     |     1 | SPDT switch                                                       |
| U1                      |     1 | 1Gbps to 11.3Gbps , SFP+ laser driver (16 TQFN) Maxim MAX3948ETE+ |
| U2                      |     1 | Low-noise LDO regulator (8 TDFN) Maxim MAX8902AATA+               |
| U6                      |     0 | User-supplied TOSA                                                |
| U10                     |     1 | Microcontroller (28 SO) Microchip PIC16C745-I/SO                  |
| Y2                      |     1 | 6MHz crystal ECS Inc. ECS-60-32-5PXDN                             |
| None                    |     1 | MAX3948 EVALUATION BOARD, REV A                                   |

## Quick Start

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows ®  operating system.

- 1) Solder a laser to U6. See Figure 1 for more information about the laser connection.
- 2) Set SW1 to the desired power-supply option (USB or external supply).
- 3) If an external power supply is used, set the voltage to 3.3V, the current limit to 300mA, and connect the supply to the board.

Figure 1. TOSA Connection

<!-- image -->

## MAX3948 Evaluation Kit Evaluates: MAX3948

- 4) Get the latest version of the EV  kit software (MAX3948Rev1.ZIP) by contacting Maxim customer support  at www.maximintegrated.com/support . After  receiving  the  file  unzip  it  to  a  local  folder and  run  the  installation  executable  (setup.EXE). Installation  requires  administrative  rights  and  can also  require  Internet  access  to  download  the  necessary drivers.
- 5) After  installation  is  complete,  follow  this  path  to start the program: Start → All Programs → Maxim Integrated Products → MAX3948 EV Kit GUI .
- 6) Connect the computer to the EV kit with a USB cable (A-male to Mini-B-Male). LED D6 should illuminate, indicating that USB power is detected. Click the USB Connect button in the software to initiate communication to the EV kit. The Status indicator turns green when communication is established.
- 7) Connect a 50 I source to TIN- and TIN+ (J1 and J2). Set the source differential amplitude to 500mV P-P .
- 8) Connect  the  output  from  the  TOSA  to  an  optical receiver  (optical-to-electrical  converter  or  optical input head on an oscilloscope).
- 9) All device controls are available in the software. Fault and warning indicators are displayed on the right side of the GUI window. When a hard fault has occurred, the  part  goes  into  latched  shutdown.  The  source  of the fault should be removed and the DISABLE checkbox should be toggled to reset the part.
- 10)  The  registers  contain  a  default  setting  and  can  be read using the Tx Read All button. For detailed register functions, refer to the MAX3948 IC data sheet.

Figure 2. MAX3948 EV Kit Software

<!-- image -->

Windows is a registered trademark of Microsoft Corp.

- 11)  To enable the part, the DISABLE checkbox should be  toggled  (check,  then  uncheck)  and  the TX Enable checkbox  should  be  checked.  After  doing this, click the TX Read All button twice and check to see if any faults are indicated. If everything is set up properly all fault indicators should be green.
- 12)  The Tx De-emphasis Control can be used to adjust the  eye  diagram.  After  choosing  a  new  setting, click the Tx De-emphasis Control Load button followed by the IMOD Load button. Doing so loads the new pre-emphasis setting to the modulation current driver. Further improvements to the eye diagram can be accomplished by tuning the component values of C2, C6, C9, C28, L2, L3, R5, R6, R7, and R12.

## Graphical User Interface (GUI)

The GUI consists of three main blocks: DC and modulation control, data path adjustments, and fault indicators.

## DC and Modulation Control

For DC and modulation current there are three controls: set  current,  set  maximum,  and  increment.  The  left-side data-entry boxes allow the user to write to the SET\_IDC or  SET\_IMOD register directly,  as  long  as  that  value  is below the value loaded in the IDCMAX and IMODMAX registers.  The  middle  data-entry  boxes  allow  the  user to  write  to  the  IDCMAX  and  IMODMAX  registers.  The right-side  data-entry  boxes  allow  the  user  to  increment or decrement the bias and modulation current registers over  a Q 15  LSB  range  by  writing  to  the  DCINC  and MODINC registers. The appropriate Load button must be clicked to initiate a register write. The Read buttons read and display the values held in the SET\_IDC/SET\_IMOD, IDCMAX/IMODMAX, and DCINC/MODINC registers.

## Data Path Adjustments

This  block  allows  control  of  de-emphasis,  the  input equalization,  and  data  polarity.  The Tx  De-emphasis Control has a drop-down box with four options for setting the TXDE\_MD register. When manual control is selected, the De-emphasis checkbox becomes available to write values  to  the  SET\_TXDE  register.  The Tx  EQ  Control data-entry  boxes  let  you  set  the  two  SET\_TXEQ  bits, checked for a '1' and unchecked for a '0'. When the Tx Polarity box  is  checked,  the  TOUT+  pin  sinks  current when TIN+ is high (typical setup). The output polarity is inverted if the box is unchecked.

## MAX3948 Evaluation Kit Evaluates: MAX3948

## Fault Indicators

Along the right-hand side of the GUI are fault indicators that show the status of the TXSTAT1 and TXSTAT2 registers. Hard faults disable the part and require a toggling of the DISABLE checkbox to restart the part (once the source of the fault has been removed). The hard faults can be masked by checking the appropriate box beside the  fault  indicator.  Soft  faults  operate  as  warnings  but do not disable the part. Automatic updating of the fault monitors  can  be  enabled  by  checking  the Auto  Read Monitors checkbox.

## Output Network

The output network has multiple components to improve the  optical  eye  diagram.  The  RC  shunts  on  the  laser's anode  and  cathode  (R5,  C6,  R6,  and  C9)  affect  the S22 of the MAX3948 and must be placed very close to the output pins TOUTA and TOUTC. The differential RC (R7  and  C2)  also  affects  the  S22  and  must  be  placed as  close  as  possible  to  the  output.  Another  differential RC (R12 and C28) is placed as close as possible to the laser connector to help compensate for the mismatch in impedance where the TOSA solders to the PCB. These last two components may not be necessary depending on the TOSA.

## MAX3948 Evaluation Kit Evaluates: MAX3948

Figure 3. MAX3948 EV Kit Schematic

<!-- image -->

Figure 4. MAX3948 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX3948 EV Kit PCB Layout-Top Side

<!-- image -->

## MAX3948 Evaluation Kit Evaluates: MAX3948

O

Figure 6. MAX3948 EV Kit PCB Layout-Ground Plane

<!-- image -->

Figure 7. MAX3948 EV Kit PCB Layout-Power Plane

<!-- image -->

Figure 8. MAX3948 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 9. MAX3948 EV Kit PC Component Placement GuideSolder Side

<!-- image -->

## MAX3948 Evaluation Kit Evaluates: MAX3948

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX3948EVKIT | EV Kit |

## MAX3948 Evaluation Kit Evaluates: MAX3948

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/11           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.