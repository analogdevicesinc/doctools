<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14895E Evaluation Kit

## Evaluates: MAX14895E

## General Description

The MAX14895E evaluation kit (EV kit) provides a proven design to evaluate the MAX14895E IC, which integrates level-translating buffers and features RED, GRN, and BLU (RGB) port protection for VGA signals. In addition, horizontal  and  vertical  synchronization  (SYNCH0,  SYNCV0) inputs feature level-shifting buffers to support low-voltage CMOS or standard TTL-compatible graphics controllers.

The MAX14895E EV kit comes with the MAX14895EETE+ installed.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C106K    |
| C2-C10, C17   |    10 | 0.1 F F Q 10%, 16V X5R ceramic capacitors (00603) Murata GRM188R61C104K |
| C11-C16       |     0 | Not installed, ceramic capacitors (0603)                                |
| D1, D2        |     2 | Green LEDs (0603)                                                       |
| D3, D4        |     2 | 40V, 500mA Schottky diodes (SOD123) Central Semi CMHSH5-4               |
| GND           |     1 | Black test point                                                        |
| JU1           |     1 | 3-pin header                                                            |
| JU2           |     1 | 2-pin header                                                            |

## Features

- S Single 5V DC Supply
- S VGA Input and Output Connectors
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| L1, L2, L3    |     0 | Not installed, inductors-short (PC trace) (0603)             |
| P1, P2        |     2 | 15-pin VGA, HD sub-D female connectors                       |
| R1, R2        |     2 | 39 I Q 5% resistors (0603)                                   |
| R3            |     1 | 47k I Q 5% resistor (0603)                                   |
| R4, R5        |     2 | 560 I Q 5% resistors (0603)                                  |
| U1            |     1 | Enhanced VGA port protector (16 TQFN-EP) Maxim MAX14895EETE+ |
| VCC           |     1 | Red test point                                               |
| -             |     2 | Shunts                                                       |
| -             |     1 | PCB: MAX14895E EVALUATION KIT                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14895E when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

- MAX14895E EV kit
- PC with VGA connector
- Monitor with VGA connector
- Two VGA cables

## MAX14895E Evaluation Kit

## Evaluates: MAX14895E

## Quick Start

## Required Equipment

## Detailed Description of Hardware

The  MAX14895E  EV  kit  provides  a  proven  design  to evaluate  the  MAX14895E  IC,  which  integrates  leveltranslating  buffers  and  features  RGB  port  protection for  VGA  signals.  In  addition,  SYNCH0  and  SYNCV0 inputs feature level-shifting buffers to support low-voltage CMOS or standard TTL-compatible graphics controllers.

## Enabling (EN and EN )

The device has dual complementary EN and EN enable inputs and can accept either an active-low or active-high enable signal.

The device is in manual operation mode when the shunt on  jumper  JU2  is  not  installed.  In  this  configuration, jumper JU1 determines whether the device is enabled.

The device is in automatic operation when jumpers JU1 and  JU2  are  in  their  default  configuration.  In  this  configuration, connect a monitor to the VGA connector (P2), which automatically enables the device.

## Input Supply (VCC)

Power is applied to the device using the 5V supply from the  VGA.  Optionally,  a  4.75V  to  5.25V  single  supply providing up to 100mA can be applied across the VCC and GND test points. LED D2 indicates that the voltage is present on the EV kit and LED D1 indicates that the V S output voltage is present from the device.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  jumpers  JU1  and JU2 are in their default positions, as shown in Table 1.
- 2)  Connect the first VGA cable from the PC to the VGA connector (P1) on the EV kit.
- 3)  Connect the second VGA cable from the monitor to the VGA connector (P2) on the EV kit.
- 4)  Enable the monitor.
- 5)  Enable the PC.
- 6)  Move the shunt on jumper JU1 to the 1-2 position.
- 7)  Verify that video is present on the monitor.

Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | Enables the device for normal operation.                                                                                         |
| JU1      | 2-3*             | Disables the device if a shunt is not installed on jumper JU2. If the JU2 shunt is installed, the device is in normal operation. |
| JU2      | Not installed    | Disables the device if a shunt is installed in the 2-3 position on jumper JU1.                                                   |
| JU2      | 1-2*             | Enables the device for automatic operation.                                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14895E Evaluation Kit Evaluates: MAX14895E

<!-- image -->

Figure 1. MAX14895E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14895E Evaluation Kit

## Evaluates: MAX14895E

<!-- image -->

Figure 2. MAX14895E EV Kit Component Placement Guide-  Component Side

Figure 3. MAX14895E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14895E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14895E Evaluation Kit

## Evaluates: MAX14895E

Figure 5. MAX14895E EV Kit PCB Layout-Inner Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX14895E EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14895EEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14895E Evaluation Kit

## Evaluates: MAX14895E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.