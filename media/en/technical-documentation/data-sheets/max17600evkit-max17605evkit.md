<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX17600-MAX17605 Evaluation Kits Evaluate: MAX17600-MAX17605

## General Description

The  MAX17600-MAX17605  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX17600MAX17605 dual, high-speed, low-side MOSFET drivers that can source/sink up to a 4A peak current. Each EV kit provides four separate designs to evaluate four different IC packages. The EV kits use a 4V to 14V (MAX17600/ MAX17601/MAX17602),  or  a  6V  to  14V  (MAX17603/ MAX17604/MAX17605) input supply.

Installed on the EV kits are the MAX17600-MAX17605 (in 8-pin TDFN, F MAX M , and SO packages).

| DESIGNATION                      |   QTY | DESCRIPTION                                                                          |
|----------------------------------|-------|--------------------------------------------------------------------------------------|
| C1, C4, C7, C10                  |     4 | 2.2 F F Q 10%, 25V X7R ceramic capacitors (1206) Murata GRM31MR71E225M               |
| C2, C3, C5, C6, C8, C9, C11, C12 |     8 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K              |
| C13-C16                          |     4 | 10 F F, 25V aluminum electrolytic SMD capacitors (4mm x 5.8mm) Panasonic EEEFK1E100R |

F MAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Benefits and Featres

- S 4V to 14V Input Range (MAX17600/MAX17601/MAX17602)
- S 6V to 14V Input Range (MAX17603/MAX17604/ MAX17605)
- S Sources/Sinks Up to 4A Peak Current
- S Enable Inputs
- S TTL (MAX17600/MAX17601/MAX17602) or High Noise Margin (HNM) (MAX17603/MAX17604/ MAX17605) Logic-Level Inputs with Hysteresis for Noise Immunity
- S Evaluates Four Different Packages
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information/Selector Guide appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| JU1-JU8       |     8 | 2-pin headers, 0.1in centers           |
| U1            |     1 | See the EV Kit-Specific Component List |
| U2            |     1 | See the EV Kit-Specific Component List |
| U3            |     1 | See the EV Kit-Specific Component List |
| U4            |     0 | Not installed (8 TDFN-EP*)             |
| -             |     8 | Shunts                                 |
| -             |     1 | PCB: MAX17600/1/2/3/4/5 EVALUATION KIT |

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

## EV Kit-Specific Component List

| PART           | REFERENCE DESIGNATOR   | DESCRIPTION                                   |
|----------------|------------------------|-----------------------------------------------|
| MAX17603EVKIT# | U1                     | MAX17603ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17603EVKIT# | U2                     | MAX17603ASA+ Dual MOSFET driver (8 SO)        |
| MAX17603EVKIT# | U3                     | MAX17603AUA+ Dual MOSFET driver (8 F MAX-EP*) |
| MAX17604EVKIT# | U1                     | MAX17604ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17604EVKIT# | U2                     | MAX17604ASA+ Dual MOSFET driver (8 SO)        |
| MAX17604EVKIT# | U3                     | MAX17604AUA+ Dual MOSFET driver (8 F MAX-EP*) |
| MAX17605EVKIT# | U1                     | MAX17605ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17605EVKIT# | U2                     | MAX17605ASA+ Dual MOSFET driver (8 SO)        |
| MAX17605EVKIT# | U3                     | MAX17605AUA+ Dual MOSFET driver (8 F MAX-EP*) |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Indicate that you are using the MAX17600-MAX17605 when contacting these component suppliers.

Note:

| PART           | REFERENCE DESIGNATOR   | DESCRIPTION                                   |
|----------------|------------------------|-----------------------------------------------|
| MAX17600EVKIT# | U1                     | MAX17600ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17600EVKIT# | U2                     | MAX17600ASA+ Dual MOSFET driver (8 SO)        |
| MAX17600EVKIT# | U3                     | MAX17600AUA+ Dual MOSFET driver (8 F MAX-EP*) |
| MAX17601EVKIT# | U1                     | MAX17601ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17601EVKIT# | U2                     | MAX17601ASA+ Dual MOSFET driver (8 SO)        |
| MAX17601EVKIT# | U3                     | MAX17601AUA+ Dual MOSFET driver (8 F MAX-EP*) |
| MAX17602EVKIT# | U1                     | MAX17602ATA+ Dual MOSFET driver (8 TDFN-EP*)  |
| MAX17602EVKIT# | U2                     | MAX17602ASA+ Dual MOSFET driver (8 SO)        |
| MAX17602EVKIT# | U3                     | MAX17602AUA+ Dual MOSFET driver (8 F MAX-EP*) |

## MAX17600-MAX17605 Evaluation Kits Evaluate: MAX17600-MAX17605

## Quick Start

## Required Equipment

- MAX17600-MAX17605 EV kit
- 4V to 14V DC power supply
- 3)  Set  the  VDD1  power  supply  to  14V  and  enable  its output.
- 4)  Drive INA1 high and verify that the OUTA1 polarity is according to Table 2.
- 5)  Drive INB1 high and verify that the OUTB1 polarity is according to Table 2.
- 6)  Drive INA1 low and verify that the OUTA1 polarity is according to Table 2.
- 7)  Drive INB1 low and verify that the OUTB1 polarity is according to Table 2.
- 8)  Repeat accordingly for the other circuits.

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify U1 board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify that all jumpers are in their default positions, as shown in Table 1.
- 2)  Connect the positive terminal of the power supply to the VDD1 PCB pad and the negative terminal to the nearest GND PCB pad on the EV kit.

## Table 1. Jumper Descriptions (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                             |
|----------|------------------|---------------------------------------------------------|
| JU1      | 1-2              | Disables channel A for the TDFN-EP (3mm x 3mm) package  |
| JU1      | Open*            | Enables channel A for the TDFN-EP (3mm x 3mm) package   |
| JU2      | 1-2              | Disables channel B for the TDFN-EP (3mm x 3mm) package  |
| JU2      | Open*            | Enables channel B for the TDFN-EP (3mm x 3mm) package   |
| JU3      | 1-2              | Disables channel A for the SO (3.9mm x 4.9mm) package   |
| JU3      | Open*            | Enables channel A for the SO (3.9mm x 4.9mm) package    |
| JU4      | 1-2              | Disables channel B for the SO (3.9mm x 4.9mm) package   |
| JU4      | Open*            | Enables channel B for the SO (3.9mm x 4.9mm) package    |
| JU5      | 1-2              | Disables channel A for the F MAX-EP (3mm x 3mm) package |
| JU5      | Open*            | Enables channel A for the F MAX-EP (3mm x 3mm) package  |
| JU6      | 1-2              | Disables channel B for the F MAX-EP (3mm x 3mm) package |
| JU6      | Open*            | Enables channel B for the F MAX-EP (3mm x 3mm) package  |
| JU7      | 1-2              | Disables channel A for the TDFN-EP (2mm x 3mm) package  |
| JU7      | Open*            | Enables channel A for the TDFN-EP (2mm x 3mm) package   |
| JU8      | 1-2              | Disables channel B for the TDFN-EP (2mm x 3mm) package  |
| JU8      | Open*            | Enables channel B for the TDFN-EP (2mm x 3mm) package   |

## Table 2. OUTA/OUTB Polarity vs. INA/INB Polarity

| PART           | OUTA POLARITY   | OUTB POLARITY   |
|----------------|-----------------|-----------------|
| MAX17600EVKIT# | Inverting       | Inverting       |
| MAX17601EVKIT# | Noninverting    | Noninverting    |
| MAX17602EVKIT# | Inverting       | Noninverting    |
| MAX17603EVKIT# | Inverting       | Inverting       |
| MAX17604EVKIT# | Noninverting    | Noninverting    |
| MAX17605EVKIT# | Inverting       | Noninverting    |

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

## Detailed Description of Hardware

- 3)  INA3/INB3  inputs  control  the  output  state  for  the F MAX-EP package

The  MAX17600-MAX17605 EV kits operate  on  a  4V  to 14V (MAX17600/MAX17601/MAX17602) or a 6V to 14V (MAX17603/MAX17604/MAX17605)  wide-input  voltage range and sources/sinks 4A peak current.

## Enable (EN\_ \_)

Each EV kit has four separate sets of enables to evaluate each package:

- 1)  ENA1/ENB1 enables/disables the TDFN-EP package
- 2)  ENA2/ENB2 enables/disables the SO package
- 3)  ENA3/ENB3 enables/disables the F MAX-EP package
- 4)  ENA4/ENB4 enables/disables the TDFN-EP package

## Input (IN\_ \_)

Each EV kit has four separate sets of inputs to evaluate each package:

- 1)  INA1/INB1inputs  control  the  output  state  for  the TDFN-EP package
- 2)  INA2/INB2 inputs control the output state for the SO package

<!-- image -->

Figure 1a. MAX17600-MAX17605 EV Kit Schematic (U1)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4)  INA4/INB4  inputs  control  the  output  state  for  the TDFN-EP package

## Power Supply Input (VDD\_)

Each  EV  kit  has  four  separate  VDD  inputs  to  evaluate each package:

- 1)  VDD1 supplies power to the TDFN-EP package
- 2)  VDD2 supplies power to the SO package
- 3)  VDD3 supplies power to the F MAX-EP package
- 4)  VDD4 supplies power to the TDFN-EP package

## Ground (GND)

Each EV kit has four circuits to evaluate each package. Each circuit has its own ground plane and each GND is not connected to the GND of the nearby circuit.

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

<!-- image -->

Figure 1b. MAX17600-MAX17605 EV Kit Schematic (U2)

<!-- image -->

Figure 1c. MAX17600-MAX17605 EV Kit Schematic (U3)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

<!-- image -->

Figure 1d. MAX17600-MAX17605 EV Kit Schematic (U4)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

Figure 2. MAX17600-MAX17605 EV Kit Component Placement Guide-Component Side

<!-- image -->

<!-- image -->

Figure 3. MAX17600-MAX17605 EV Kit PCB LayoutComponent Side

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17600-MAX17605 Evaluation Kits

## Evaluate: MAX17600-MAX17605

<!-- image -->

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information/Selector Guide

| PART            | TYPE   | INPUT LOGIC TYPE   | OUTA POLARITY   | OUTB POLARITY   |
|-----------------|--------|--------------------|-----------------|-----------------|
| MAX17600EVKIT#* | EV Kit | TTL                | Inverting       | Inverting       |
| MAX17601EVKIT#  | EV Kit | TTL                | Noninverting    | Noninverting    |
| MAX17602EVKIT#  | EV Kit | TTL                | Inverting       | Noninverting    |
| MAX17603EVKIT#  | EV Kit | HNM                | Inverting       | Inverting       |
| MAX17604EVKIT#  | EV Kit | HNM                | Noninverting    | Noninverting    |
| MAX17605EVKIT#  | EV Kit | HNM                | Inverting       | Noninverting    |

# Denotes RoHS compliant.

* Future product-contact factory for availability.

## MAX17600-MAX17605 Evaluation Kits Evaluate: MAX17600-MAX17605

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.