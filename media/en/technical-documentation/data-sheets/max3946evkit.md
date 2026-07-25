<!-- lastmod 2022-08-02 -->
## General Description

The MAX3946 evaluation kit (EV kit) is an assembled demonstration board that provides optical evaluation of the MAX3946 1.0625Gbps to 11.3Gbps laser driver. The controlling software communicates with the EV kit through the USB port and provides simplified control of  all  the  device  functions.  The  EV  kit  can  be  fully powered by the USB port, or the user can choose to power  the  device  by  a  single  external  3.3V  supply while  the  USB  port  supplies  the  on-board  microcontroller.  The  flex-cable  connection  on  the  EV  board allows attachment of lasers incorporating flex cables.

## EV Kit Contents

## S MAX3946 EV Kit Board

## Component List

* EP = Exposed pad.

| DESIGNATION                 |   QTY | DESCRIPTION                                    |
|-----------------------------|-------|------------------------------------------------|
| C1-C6, C8, C9, C16, C41     |    10 | 0.01 F F Q 10% ceramic capacitors (0402)       |
| C7, C10, C12, C14           |     4 | 0.1 F F Q 20% ceramic capacitors (0204)        |
| C11, C13, C15               |     3 | 10 F F Q 10% ceramic capacitors (0805)         |
| C17-C20                     |     0 | Not installed                                  |
| C21, C22                    |     2 | 33pF Q 10% ceramic capacitors (0402)           |
| C25, C26, C27, C49, C52     |     5 | 0.1 F F Q 10% ceramic capacitors (0402)        |
| C34, C55                    |     2 | 1 F F Q 10% ceramic capacitors (0603)          |
| C35, C37, C38               |     3 | 4.7 F F Q 10% ceramic capacitors (0805)        |
| D6                          |     1 | Green LED                                      |
| J1, J2                      |     2 | SMA edge-mount connectors                      |
| J3, J4, TP3, TP7, TP10-TP13 |     8 | Test points                                    |
| J8                          |     1 | USB connector                                  |
| JU2                         |     1 | 2 x 6 header, 0.1in centers                    |
| L1                          |     1 | 22 F H Q 20% inductor Taiyo Yuden CBC3225T220M |
| L2, L3                      |     2 | 18nH Q 2% inductors (0402)                     |
| L4, L11, L12                |     3 | Ferrite beads (0402) Murata BLM15GG471         |

| DESIGNATION             |   QTY | DESCRIPTION                                                               |
|-------------------------|-------|---------------------------------------------------------------------------|
| L10, L14, L15, L16      |     4 | 10 F H Q 10% inductors (0603)                                             |
| R1, R2                  |     2 | 1.00k I Q 1% resistors (0402)                                             |
| R3                      |     1 | 680 I Q 5% resistor (0402)                                                |
| R5, R6                  |     2 | 20 I Q 5% resistors (0603)                                                |
| R7, R8                  |     2 | 100 I Q 5% resistors (0603)                                               |
| R15, R50                |     2 | 4.7k I Q 5% resistors (0402)                                              |
| R16, R17                |     2 | 1k I Q 5% resistors (0402)                                                |
| R18, R52, R55, R66, R73 |     5 | 51 I Q 5% resistors (0402)                                                |
| R24                     |     1 | 1.5k I Q 5% resistor (0402)                                               |
| R31, R51, R53           |     3 | 10k I Q 5% resistors (0402)                                               |
| SW1                     |     1 | SPDT switch                                                               |
| U1                      |     1 | 1.0625Gbps to 11.3Gbps, SFP+ laser driver (24 TQFN-EP*) Maxim MAX3946ETG+ |
| U2                      |     1 | Low-noise LDO regulator (8 TDFN-EP*) Maxim MAX8902AATA+                   |
| U6                      |     0 | User-supplied TOSA                                                        |
| U10                     |     1 | Microcontroller (28 SO) Microchip PIC16C745-I/SO                          |
| Y2                      |     1 | 6MHz crystal ECS Inc. ECS-60-32-5PXDN                                     |
| -                       |     1 | PCB: MAX3946 EVALUATION BOARD, REV A                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

## Features

- S Drives Differential-Connected Lasers
- S Software Control of the MAX3946
- S Power Supplied Through USB or External Connection

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX3946EVKIT | EV Kit |

## MAX3946 Evaluation Kit

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  kit  software.  Text  in bold  and underlined refers to items from the Windows M operating system.

- 1) Solder a laser to connection U6. See Figure 1 for more information about the laser connection.
- 2) Set SW1 to the desired power-supply option (USB or external supply).
- 3) If an external power supply is used, set the voltage to 3.3V, the current limit to 300mA, and connect the supply to the board.
- 4) To download the latest version of the EV kit software (MAX3946Rev1.ZIP),  visit  the  Maxim  website  at www.maxim-ic.com/evkitsoftware .  Unzip  the  file to a local folder and run the installation file (setup. EXE). Installation requires administrative rights and can also require Internet access to download necessary drivers.
- 5) After  installation  is  complete,  follow  this  path to  start  the  program: Start → All  Programs → MAX3946EVGUI → MAX3946EVGUI .
- 6) Connect the computer to the EV kit with a USB cable (A-male  to  Mini-B-male).  LED  D6  should  illuminate, indicating that USB power is detected. Click the USB Connect button in the software to initiate communication  to  the  EV  kit.  The Status indicator  turns  green when communication is established.
- 7) Connect a 50 I source to TIN- and TIN+ (J1 and J2). Set the source differential amplitude to 500mVP-P.
- 8) Connect  the  output  from  the  TOSA  to  an  optical receiver  (optical-to-electrical  converter  or  optical input head on an oscilloscope).
- 9) All  device  controls  are  available  in  the  software. Fault and warning indicators are displayed on the right  side  of  the  graphical  user  interface  (GUI) window. When a hard fault has occurred the device goes into latched shutdown. The source of the fault should  be  removed  and  the DISABLE checkbox should be toggled to reset the part.
- 10) The registers contain a default setting and can be read using the Tx Read All button. For detailed register functions, refer to the MAX3946 IC data sheet.
- 11) To enable the part, the DISABLE checkbox should be toggled (checked and then unchecked) and the Tx Enable checkbox should be checked. After doing this,  click  the Tx  Read  All button  twice  and  verify whether any faults are indicated. All fault indicators should be green if everything is set up properly.
- 12) The Tx De-emphasis Control edit box can be used to  adjust  the  eye  diagram.  After  choosing  a  new setting, click the Tx De-emphasis Control edit box Load button  followed  by  the IMod edit  box Load button. Doing so loads the new preemphasis setting to  the  modulation  current  driver.  Further  improvements to the eye diagram can be accomplished by adjusting the component values of L2, L3, L11, L12, and R5-R8.

Figure 1. TOSA Connection

<!-- image -->

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

Figure 2. MAX3946 EV Kit Software

<!-- image -->

## Detailed Description of Software

## Graphical User Interface (GUI)

The GUI consists of three main blocks: bias and modulation control, data path adjustments, and fault indicators.

## Bias and Modulation Control

For bias and modulation current there are three controls: set current, set maximum, and increment. The left-side data-entry boxes allow the user to write to the SET\_IBIAS or  SET\_IMOD register directly, as long as that value is below the value loaded in the IBIASMAX and IMODMAX registers.  The  middle  data-entry  boxes  allow  the  user to write to the IBIASMAX and IMODMAX registers. The right-side data-entry boxes allow the user to increment or decrement the bias and modulation current registers over  a Q 15  LSB  range  by  writing  to  the  BIASINC  and MODINC registers.  The  appropriate Load button  must be  clicked  to  initiate  a  register  write.  The Read buttons read and display the values held in the SET\_IBIAS/ SET\_IMOD, IBIASMAX/IMODMAX, and BIASINC/MODINC registers. Calculated bias and modulation current values are displayed below the data-entry boxes. The modulation current is calculated based on the laser's effective series  resistance  provided  by  the  user  in  the Laser Resistance (Rld) edit box.

<!-- image -->

## Data Path Adjustments

This  block  allows  control  of  preemphasis,  the  input equalization, data polarity, and pulse-width adjustment. The Tx De-emphasis Control edit box has a pull-down box with four options for setting the TXDE\_MD bits in the TXCTRL register. When manual control is selected, the De-emphasis edit box becomes available to write values to the SET\_TXDE register. When the Tx Polarity checkbox is checked the TOUT+ pin sinks current when TIN+ is  high (typical setup). The output polarity is inverted if the box is unchecked. Check the Tx Equalizer Enable checkbox to enable the input equalizer. Once checked, the Tx EQ Control edit box becomes available to write to the SET\_TXEQ register.

## Fault Indicators

Along  the  right-hand  side  of  the  GUI  are  fault  indicators that show the status of the TXSTAT1 and TXSTAT2 registers.  Hard  faults  disable  the  device  and  require  a toggling of the DISABLE checkbox to restart the device (once  the  source  of  the  fault  has  been  removed).  Soft faults operate as warnings, but do not disable the part. Automatic updating of the fault monitors can be enabled by checking the Auto Read Monitors checkbox.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3946 Evaluation Kit

Figure 3. MAX3946 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

<!-- image -->

Figure 4. MAX3946 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3946 Evaluation Kit

Figure 5. MAX3946 EV Kit PCB Layout-Top Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

Figure 6. MAX3946 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3946 Evaluation Kit

Figure 7. MAX3946 EV Kit PCB Layout-Power Plane

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

Figure 8. MAX3946 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3946 Evaluation Kit

Figure 9. MAX3946 EV Kit Component Placement Guide-Solder Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3946 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.