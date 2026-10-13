<!-- lastmod 2022-08-04 -->
## MAX14653-MAX14655 Evaluation Kits

## General Description

The  MAX14653-MAX14655  evaluation  kits  (EV  kits) are fully  assembled  and  tested  circuit  boards  that demonstrate the functionality of the MAX14653MAX14655  high-current  overvoltage protectors with adjustable  OVLO  in  a  12-bump  wafer-level  package (WLP). Each EV kit features  a  jumper  for  selecting  the preset OVLO threshold or the external resistor-divider for the adjustable OVLO threshold. Input power to the EV kits is provided by external supplies.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H104K     |
| C2            |     1 | 1.0µF ±10%, 35V X7R ceramic capacitor (0805) Taiyo Yuden GMK212B7105KG |
| C3            |     1 | 0.1µF, 16V X7R ceramic capacitor (0805) Murata GRM219R71C104K          |
| H5            |     0 | Not installed, test point                                              |
| J1            |     1 | 3-pin header, 0.1in centers                                            |
| J2            |     1 | 2-pin header, 0.1in centers                                            |
| LED1          |     1 | Green LED (0805) Lumex SML-LXT0805GW-TR                                |
| R1            |     1 | 1MΩ ±1% resistor (0805)                                                |
| R2, R5        |     0 | Not installed, resistors (0805)                                        |

## Evaluate: MAX14653-MAX14655

## Benefits and Features

- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| R3            |     1 | 1kΩ ±5% resistor (0805)                        |
| R4            |     1 | 100kΩ ±5% resistor (0805)                      |
| R6            |     1 | 10kΩ ±5% resistor (0805)                       |
| TP1, TP3, TP8 |     3 | Red test points                                |
| TP2, TP4, TP7 |     3 | Black test points                              |
| TP5, TP6      |     2 | White test points                              |
| TP9, TP11     |     2 | Red insulated binding posts                    |
| TP10, TP12    |     2 | Black insulated binding posts                  |
| U1            |     1 | See the EV Kit-Specific Component List         |
| U2            |     1 | Dual, high-speed inverter Fairchild NC7WZ04P6X |
| -             |     2 | Shunts                                         |
| -             |     1 | PCB: MAX14653/4/5 EVKIT                        |

<!-- image -->

## EV Kit-Specific Component List

| PART           | DESIGNATION   | DESCRIPTION                                                                    |
|----------------|---------------|--------------------------------------------------------------------------------|
| MAX14653EVKIT# | U1            | High-current overvoltage protector (12 WLP) Maxim MAX14653EWC+ (Top Mark: ACS) |
| MAX14654EVKIT# | U1            | High-current overvoltage protector (12 WLP) Maxim MAX14654EWC+ (Top Mark: ACT) |
| MAX14655EVKIT# | U1            | High-current overvoltage protector (12 WLP) Maxim MAX14655EWC+ (Top Mark: ACU) |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE                |
|-------------------------|--------------|------------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchild.com      |
| Lumex Inc.              | 800-278-5666 | www.lumex.com          |
| Murata Americas         | 800-241-6574 | www.murataamericas.com |
| Taiyo Yuden             | 800-348-2496 | www.t-yuden.com        |

Note: Indicate that you are using the MAX14653-MAX14655 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14653-MAX14655 EV kit
- 5V power supply
- Variable power supply

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify board operation and begin evaluation:

- 1)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J1 for evaluation of preset overvoltage threshold or that a shunt is installed across pins 1-2 of J1 for evaluation  of  external  resistor-divider-set  threshold. Refer  to  the  MAX14653/MAX14654/MAX14655  IC data sheet for instructions on how to select external resistors R1 and R2.
- 2)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper J2 to enable LED1. LED1 glows green when ACOK goes low indicating no fault condition on IN.
- 3)  Connect the 5V power supply at the EV kit's V CC test point to power the ACOK LED indicator circuit.
- 4)  Connect  the  variable  power  supply  set  to  2.5V minimum to V IN .
- 5)  Evaluate  the  device  by  increasing  the  power  supply above the OVP threshold, as defined by the setup.

## Detailed Description of Hardware

The MAX14653-MAX14655 EV kits are fully assembled and tested circuit boards that demonstrate the functionality of the MAX14653-MAX14655 high-current overvoltage protectors with adjustable OVLO in a 12-bump WLP. Each EV kit features a jumper for selecting the preset OVLO threshold or the external resistor-divider for the adjustable OVLO threshold. Input power to the EV kit is provided by external supplies. The EV kit's PCB is designed with 1oz copper.

## Power Supply

Each EV kit is powered by a user-supplied 4.5V to 5.5V DC power supply connected between V CC and GND, as well as a variable 2.5V minimum DC power supply con -nected between V IN  and GND.

│

## MAX14653-MAX14655 Evaluation Kits

## ACOK Indicator LED

Each EV kit features a peripheral circuit that gives visual indication  of  no  fault  at  V IN .  Simply  install  the  shunt  on jumper J2 to connect the peripheral circuit to the ACOK output of the device. See Table 1 for jumper settings.

## OVP Threshold

Each EV kit features a jumper to change the overvoltage threshold  of  the  device  between  preset  threshold  mode and adjustable threshold mode, in which the threshold is

## Table 1. Jumper Settings (J1, J2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                             |
|----------|------------------|-------------------------------------------------------------------------|
| J1       | 1-2              | Adjustable external OVLO threshold                                      |
| J1       | 2-3*             | Preset internal OVLO threshold                                          |
| J2       | 1-2*             | Connects the LED peripheral circuit to the ACOK output of the device    |
| J2       | Not installed    | Disconnects the LED peripheral circuit to the ACOK output of the device |

## Evaluate: MAX14653-MAX14655

set  by  an  external  resistor-divider  connected  at  OVLO. To  use  the  device  in  preset  threshold  mode,  simply connect a shunt across pins 2-3 on jumper J1. For adjustable threshold mode, connect a shunt across pins 1-2 on J1.  Refer  to  the  MAX14653/MAX14654/MAX14655  IC data  sheet  for  information  on  how  to  set  the  adjustable threshold  using  resistors  R1  and  R2.  See  Table  1  for jumper settings.

│

Figure 1 MAX14653-MAX14655 EV Kit Schematic

<!-- image -->

│

## MAX14653-MAX14655 Evaluation Kits

Figure 2. MAX14653-MAX14655 EV Kit Component Placement Guide-Component Side

<!-- image -->

## Evaluate: MAX14653-MAX14655

Figure 3. MAX14653-MAX14655 EV Kit PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX14653-MAX14655 EV Kit PCB LayoutSolder Side

<!-- image -->

│

## MAX14653-MAX14655 Evaluation Kits

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14653EVKIT # | EV Kit |
| MAX14654EVKIT # | EV Kit |
| MAX14655EVKIT # | EV Kit |

# Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

MAX14653-MAX14655