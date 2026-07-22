<!-- lastmod 2022-08-05 -->
## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## General Description

The MAX14589E/MAX14594E/MAX14689 evaluation kits (EV  kits)  are  fully  assembled  and  tested  circuit  boards that  demonstrate  the  functionality  of  the  MAX14589E, MAX14594E,  and  MAX14689  double-pole  double-throw (DPDT)  analog  switches  in  a  9-bump  wafer-level  package (WLP). The features of the EV kits enable evaluation of  the  analog  switches  through  audio  jack  inputs  and outputs, as well as SMA connectors for AC characteristic evaluation.  Input  power  to  the  EV  kits  is  provided  by  a Micro-USB, type-B connector or an external power supply.

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX14589E, MAX14594E, or MAX14689 EV kit
- USB power supply or 1.8V to 5.5V power supply
- Audio source (e.g., MP3 player, computer, etc.)
- External speakers or headphones with 3.5mm audio jack

## Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps below to verify board operation and begin evaluation:

- 1) If using a USB power supply to power the board through the  Micro-USB  connector  (J1),  verify  that  a  shunt  is installed shorting pins 3-4 on jumper JU2. This powers the  device  from  the  output  of  the  on-board  LDO.  To adjust the LDO output voltage, connect a voltmeter at test point T3 and turn the screw on the potentiometer (R3) until reaching the desired value. To use the raw bus voltage as the power supply for the device, place the shunt so that it is shorting pins 5-6 on JU2.
- 2) If an external power supply is used, apply the power at test point T2 and use the shunt to short pins 1-2 on JU2 to provide power to the parts from the external supply.
- 3) Verify that jumper JU1 has a shunt installed shorting pins  2-3,  and  that  jumper  JU4  has  a  shunt  installed shorting  pins  2-3.  Installing  the  shunts  in  these locations provides power from the source to the V CC pin of the device.

## Evaluate: MAX14589E/MAX14594E/ MAX14689

## Features and Benefits

- Proven PCB Layout
- Decrease Evaluation Time
- Fully Assembled and Tested
- SMA and 3.5mm Audio Jack Connectors
- Directly Evaluate AC Characteristics through SMA Connectors
- Quickly Evaluate Audio Performance with 3.5mm Audio Jack Connectors
- USB 5V Power with On-Board Adjustable LDO
- 4) Verify that jumper JU3 has a shunt installed shorting pins 1-2. This shorts the control bit (CB) on the device to  GND,  electrically  connecting  NC1  to  COM1  and NC2 to COM2.
- 5) Connect an audio source to the normally closed audio jack (P2), using the male-to-male 3.5mm audio cable included with the EV kit.
- 6) Connect  external  speakers  or  headphones  to  the common audio jack (P3).
- 7) When the audio source outputs the audio signal, and JU3 has a  shunt  shorting  pins  1-2,  the  audio  signal should  be  heard  on  the  speakers  or  headphones connected at P3.
- 8) Move the shunt on JU3 from pins 1-2 to pins 2-3. The audio signal should no longer be heard on the speakers or headphones connected at P3.
- 9) If  the  audio  source  connection  moves  from  the normally closed audio jack (P2) to the normally open audio jack (P1) with a shunt in position 2-3 on JU3, the audio signal on the common audio jack (P3) is heard on the speakers or headphones. If the shunt on JU3 is in position 1-2, there is no audio signal heard on the speaker or headphones.

<!-- image -->

## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## Detailed Description of Hardware

The MAX14589E, MAX14594E, and MAX14689 EV kits are fully assembled and tested circuit boards that demonstrate the functionality of the MAX14589E, MAX14594E, and MAX14689 DTDT analog switches in a 9-bump WLP. The  EV  kit  features  enables  evaluation  of  the  analog switches through audio jack inputs and outputs, as well as SMA connectors for AC characteristic evaluation. Input power to the EV kits is provided by a Micro-USB, type-B connector or an external power supply. The EV kit PCBs are designed with 1oz copper.

## Power Supply

The EV kits are powered by a user-supplied 1.6V to 5.5V external  DC  power  supply  connected  between  V EXT and GND, the raw USB bus supplied at the Micro-USB connector (J1), or the regulated output of the LDO (U2) that is powered by the USB bus.

## Table 1. Jumper Settings (J6, J7, JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| J6       | 1-2              | Connects NC1 on U2 to DC bias applied at test point T7 through a 475kΩ resistor     |
| J6       | 3-4              | Connects COM1 on U2 to DC bias applied at test point T7 through a 475kΩ resistor    |
| J7       | 1-2              | Connects NC2 on U2 to DC bias applied at test point T8 through a 475kΩ resistor     |
| J7       | 3-4              | Connects COM2 on U2 to DC bias applied at test point T8 through a 475kΩ resistor    |
| JU1      | 1-2              | Connects V CC of U1 to GND; places U1 in shutdown mode                              |
| JU1      | 2-3*             | Connects V CC of U1 to the power-supply bus; places U1 in normal, powered operation |
| JU2      | 1-2              | Connects the external power supply applied at T2 to the power-supply bus            |
| JU2      | 3-4*             | Connects the regulated LDO output to the power-supply bus                           |
| JU2      | 5-6              | Connects raw V BUS voltage from the USB to the power-supply bus                     |
| JU3      | 1-2*             | Connects CB of U1 and U2 to GND; NC_ and COM_ are electrically connected            |
| JU3      | 2-3              | Connects CB of U1 and U2 to V CC ; NO_ and COM_ are electrically connected          |
| JU4      | 1-2              | Connects V CC of U2 to GND; places U3 in shutdown mode                              |
| JU4      | 2-3*             | Connects V CC of U2 to power supply bus; places U3 in normal, powered operation     |

## Evaluate: MAX14589E/MAX14594E/ MAX14689

## AC Evaluation

The  EV  kits have  a secondary  IC configured for evaluation  of  the AC  characteristics  of  the  device.  SMA connectors  (J2-J5)  allow  for  direct  connection  to  a network  analyzer.  50 I termination  resistors  (R6,  R7) provide  termination  to  match  the  typical  50Ω  source resistance  of  the  network  analyzer,  allowing  for  easy evaluation  of  these  parameters.  The  ability  to  connect external DC bias voltages at test points T7 and T8 further simplifies evaluation of AC characteristics, while using a network analyzer that cannot provide DC offset voltages.

## VBUS Status LED

An  indicator  diode  (D1)  is  included  on  the  EV  kits, indicating  that  a  VBUS  voltage  is  present  on  the  MicroUSB connector  (J3).  If  the  LED  glows  green,  power  is present at J3 and the board can be powered by the LDO output or by the raw V BUS  supply (see Table 1 for jumper configurations).  The  status  LED  does  not  glow  when  a voltage is present on test point T2.

│

## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                      |
|---------------|-------|--------------------------------------------------|
| C1, C4        |     2 | 0.01µF ±10%, 16V X7R ceramic capacitors (0603)   |
| C2            |     1 | 4.7µF ±10%, 10V X7R ceramic capacitor (0805)     |
| C3, C5-C7     |     4 | 1µF ±10%, 10V X5R ceramic capacitors (0603)      |
| D1            |     1 | Green LED (1206) Lumex SML-LX1206GW-TR           |
| J1            |     1 | Micro-USB, type-B receptacle Hirose ZX62D-B-5PA8 |
| J2-J5         |     4 | Side-mount SMAconnectors Johnson 142-0701-851    |
| J6, J7        |     2 | 4-pin, single-row headers                        |
| JU1, JU3, JU4 |     3 | 3-pin, single-row headers                        |
| JU2           |     1 | 6-pin, dual-row header                           |
| P1-P3         |     3 | 3.5mm audio connectors CUI Inc. SJ1-3523NG       |
| R1            |     1 | 31.6kΩ ±1% resistor (0805)                       |

## EV Kit-Specific Component List

| PART            | DESIGNATION   | DESCRIPTION                                                   |
|-----------------|---------------|---------------------------------------------------------------|
| MAX14589EEVKIT# | U1, U3        | High-density DPDT analog switches (9 WLP) Maxim MAX14589EEWL+ |
| MAX14594EEVKIT# | U1, U3        | High-density DPDT analog switches (9 WLP) Maxim MAX14594EEWL+ |
| MAX14689EVKIT#  | U1, U3        | High-density DPDT analog switches (9 WLP) Maxim MAX14689EWL+  |

## Component Suppliers

| SUPPLIER                  | PHONE              | WEBSITE                    |
|---------------------------|--------------------|----------------------------|
| Bourns, Inc.              | 951-781-5500 x2778 | www.bourns.com/            |
| CUI Inc.                  | 800-275-4899       | www.cui.com/               |
| Hirose Electric Co. Ltd.  | -                  | www.hirose-connectors.com/ |
| Johnson Components        | 507-833-8822       | johnsoncomponents.com/     |
| Lumex Optocomponents Inc. | 800-278-5666       | www.lumex.com/             |

Note: Indicate that you are using the MAX14589/MAX14594/MAX14689 when contacting these component suppliers.

│

Evaluate: MAX14589E/MAX14594E/ MAX14689

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R2            |     1 | 7.32kΩ ±1% resistor (0805)                                                      |
| R3            |     1 | 100kΩ ±10%, 0.5W potentiometer Bourns 3296W-1-104LF                             |
| R4            |     1 | 100kΩ ±1% resistor (0805)                                                       |
| R5            |     1 | 1kΩ ±5% resistor (0805)                                                         |
| R6, R7        |     2 | 49.9Ω ±1% resistors (0805)                                                      |
| R8-R11        |     4 | 475kΩ ±1% resistors (0805)                                                      |
| T1, T4-T6     |     4 | Black test points                                                               |
| T2, T3        |     2 | Red test points                                                                 |
| T7, T8        |     2 | White test points                                                               |
| U1, U3        |     2 | See the EV Kit-Specific Component List                                          |
| U2            |     1 | Ultra-low-I Q , low-dropout linear regulator with POK (6 SOT) Maxim MAX8880EUT+ |
| -             |     8 | Shunts                                                                          |
| -             |     1 | PCB: MAX14589/94/689 EVKIT                                                      |

Figure 1a. MAX14589E/MAX14594E/MAX14689 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## Evaluate: MAX14589E/MAX14594E/ MAX14689

Figure 1b. MAX14589E/MAX14594E/MAX14689 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 2. MAX14589E/MAX14594E/MAX14689 EV Kit Component Placement Guide

<!-- image -->

Figure 3. MAX14589E/MAX14594E/MAX14689 EV Kit PCB Layout-Component Side

<!-- image -->

Evaluate: MAX14589E/MAX14594E/

MAX14689

Figure 4. MAX14589E/MAX14594E/MAX14689 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX14589E/MAX14594E/MAX14689 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 6. MAX14589E/MAX14594E/MAX14689 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX14589E EVKIT# | EV Kit |
| MAX14594E EVKIT# | EV Kit |
| MAX14689 EVKIT#  | EV Kit |

# Denotes RoHS compliant.

Evaluate: MAX14589E/MAX14594E/ MAX14689

│

## MAX14589E/MAX14594E/ MAX14689 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations Zithout notice at any time.

│

Evaluate: MAX14589E/MAX14594E/

MAX14689