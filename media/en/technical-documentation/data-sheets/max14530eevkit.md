<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX14530E evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the MAX14530E IC. The MAX14530E is an overvoltage-protection device with a low-dropout (LDO) regulator, ESD protection, and USB charger detection. The EV kit operates from the 5V DC available from the USB VBUS and the 3.3V pullup available from the system input/output voltage (VIO).

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105K or TDK C3216X7R1H105K   |
| C2            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K   |
| C3            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K |

## Features

- ♦ 5V Supply Operation from USB VBUS
- ♦ 3.3V Pullup from Application System's VIO or VPU
- ♦ 6.8V Overvoltage-Protection Trip Level
- ♦ 100mA, 3.3V LDO Output
- ♦ High-Current USB Charger Detection
- ♦ Evaluates the MAX14530E in a 12-Bump WLP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14530EEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers                                                      |
| JU3, JU4      |     2 | 2-pin headers                                                      |
| P1            |     1 | USB type-AB right-angle mini jack                                  |
| R1-R4         |     4 | 10k Ω ±5% resistors (0603)                                         |
| R5            |     1 | 1.5k Ω ±5% resistor (0603)                                         |
| U1            |     1 | Overvoltage protector (12 WLP) Maxim MAX14530EEWC+ (Top Mark: AAQ) |
| -             |     4 | Shunts (JU1-JU4)                                                   |
| -             |     1 | PCB: MAX14530E EVALUATION KIT+                                     |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX14530E when contacting these component suppliers.

## MAX14530E Evaluation Kit

## Quick Start

## Required Equipment

- 18) Verify that the CDET PCB pad is at 0V.
- 19) Increase the VBUS power-supply output to 7V.
- 20) Verify that the VOK PCB pad is at 3.3V.
- 21) Verify that the OUT PCB pad is at 0V.
- 22) Verify that the LOUT PCB pad is at 0V.

## Detailed Description of Hardware

The MAX14530E EV kit contains the MAX14530E, an overvoltage-protection device with a low-dropout (LDO) regulator, ESD protection, and USB charger detection. The EV kit operates from the 5V DC available from the USB VBUS. The EV kit's logic inputs and outputs can be pulled up by the input/output voltage (VIO) available from the application system.

## Application System Interface

The MAX14530E EV kit features a USB jack and PCB pads that allow convenient interfacing between the USB port and the application system. Connect the USB cable to the USB type-AB mini jack on the MAX14530E EV kit.  Connect the system charger to the OUT and GND PCB pads. Connect the USB transceiver signals to the D+ and D- PCB pads, and the USB transceiver input/output voltage (VIO or VPU) to the VPU PCB pad. Connect the USB transceiver VCC to the LOUT PCB pad. Connect the OEN , LEN , VOK ,  and CDET PCB pads to the appropriate locations in the system microprocessor circuit.

## Jumper Selection

## Overvoltage-Protection Enable, OEN (JU1)

The MAX14530E EV kit provides jumper JU1 to enable or  disable the overvoltage-protection function in the MAX14530E IC, thus preventing damage to the protected components. Table 1 lists the options to enable or disable the overvoltage-protection function in the MAX14530E IC.

## Table 1. JU1 Jumper Functions ( OEN )

| SHUNT POSITION   | OEN PIN CONNECTED TO       | MAX14530E OVERVOLTAGE PROTECTION   |
|------------------|----------------------------|------------------------------------|
| 1-2              | +3V3 (through resistor R1) | Disabled                           |
| 2-3*             | GND                        | Enabled                            |

## Procedure

The MAX14530E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 2-3 of jumper JU1 (overvoltage protection enabled).
- 2) Verify that a shunt is installed on pins 2-3 of jumper JU2 (low dropout enabled).
- 3) Verify  that  a  shunt  is  not  installed  on  jumper  JU3 (VPU not connected to +3V3).
- 4) Verify  that  a  shunt  is  not  installed  on  jumper  JU4 (no charger connected).
- 5) Set the VBUS power supply to provide 5V and disable the power supply.
- 6) Set the +3V3 power supply to 3.3V and disable the power supply.
- 7) Connect the VBUS power-supply positive terminal to the VBUS PCB pad.
- 8) Connect the VBUS power-supply ground to the GND PCB pad (near the VBUS PCB pad).
- 9) Connect the +3V3 power-supply positive terminal to the +3V3 PCB pad.
- 10) Connect the +3V3 power-supply ground to the GND PCB pad (any nearby GND PCB pad).
- 11) Enable both power supplies.
- 12) Verify that the OUT PCB pad is at 5V.
- 13) Verify that the LOUT PCB pad is at 3.3V.
- 14) Verify that the VOK PCB pad is at 0V.
- 15) Connect the D- PCB pad to ground and verify that the CDET PCB pad is at 3.3V.
- 16) Disconnect the D- PCB pad from ground and install a shunt on jumper JU3 (VPU connected to +3V3).
- 17) Install a shunt on jumper JU4 (D- connected to D+, simulate charger connected).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX14530E EV kit
- 2.2V to 8V, 100mA DC power supply (VBUS)
- 3.3V, 100mA DC power supply for +3V3
- Voltmeter

<!-- image -->

## MAX14530E Evaluation Kit

## Table 2. JU2 Jumper Functions ( LEN )

| SHUNT POSITION   | LEN PIN CONNECTED TO       | MAX14530E LDO REGULATOR OUTPUT   |
|------------------|----------------------------|----------------------------------|
| 1-2              | +3V3 (through resistor R2) | Disabled                         |
| 2-3*             | GND                        | Enabled                          |

## Table 3. JU3 Jumper Functions (VPU and +3V3)

| SHUNT POSITION   | VPU PAD AND +3V3 PAD   | CHARGER SIMULATION PULLUP (VPU) CONNECTED TO   |
|------------------|------------------------|------------------------------------------------|
| Installed        | Connected              | +3V3                                           |
| Not installed*   | Not connected          | External pullup voltage required for VPU       |

## Table 4. JU4 Jumper Functions (D- and D+)

| SHUNT POSITION   | D- AND D+ PAD   | CHARGER SIMULATION MODE   |
|------------------|-----------------|---------------------------|
| Installed        | Connected       | Charger connected         |
| Not installed*   | Not connected   | No charger connected      |

<!-- image -->

## Low-Dropout Enable, LEN (JU2)

The MAX14530E EV kit provides jumper JU2 to enable or  disable the LDO regulator in the MAX14530E IC. Table 2 lists the options to enable or disable the LDO regulator in the MAX14530E IC.

## Charger Simulation Pullup Voltage, VPU (JU3)

The MAX14530E EV kit provides jumper JU3 to connect the charger simulation pullup voltage (VPU) to the MAX14530E EV kit pullup voltage (3.3V). Table 3 lists the jumper options for jumper JU3.

## Charger Simulation Mode, D- and D+ (JU4)

The MAX14530E EV kit provides jumper JU4 to short the USB D- and D+ data lines that simulate a chargerconnected condition. Table 4 lists the jumper options for jumper JU4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14530E Evaluation Kit

Figure 1. MAX14530E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14530E Evaluation Kit

<!-- image -->

Figure 2. MAX14530E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14530E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14530E Evaluation Kit

Figure 4. MAX14530E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_