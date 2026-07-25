<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5986A evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  an Ethernet  port,  network  powered-device  (PD)  interface controller circuit for -57V supply rail systems. The EV kit uses the MAX5986A IEEE M 802.3af/at-compliant network PD interface  controller  in  a  16-pin  TQFN  package  with an  exposed  pad.  The  IC  is  used  in  Power-over-LAN (PoL) applications requiring DC power from an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The EV kit receives power from IEEE 802.3af/at-compliant power-sourcing equipment (PSE). Refer to the MAX5952, MAX5965A/MAX5965B, and MAX5980 IC data sheets for PSE controllers. The PSE provides the required -36V to -57V DC power over an unshielded twisted-pair Ethernet network cable to the EV kit's RJ45 magnetic jack. The EV kit features a 1 x 1 Gigabit RJ45 magnetic jack and two active full-wave rectifiers (N101 and N102) for separating the DC power provided by an endspan or midspan Ethernet system.

The EV kit can also be powered by a wall adapter power source. The EV kit provides PCB pads to accept the output of a wall adapter power source. When a wall adapter power  source  is  detected,  it  always  takes  precedence over the PSE source and allows the wall adapter to power the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the  IC, such as PD detection signature, PD classification signature,  inrush  current  control,  input  undervoltage  lockout (UVLO), and an integrated DC-DC step-down converter. The  integrated  step-down  converter  operates  at  a  fixed 275kHz switching frequency, and is configured for a nonisolated +5V DC output that can deliver 768mA of current.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX5986A Evaluation Kit

Evaluates: MAX5986

## Features

- S IEEE 802.3af/at-Compliant PD Interface Circuit
- S PoE Classification 1
- S -36V to -57V Input Range
- S Demonstrates an Integrated 3.84W Step-Down DC-DC Converter
- S +5V Output at 768mA
- S Inrush Current Limit of 49mA (typ)
- S Evaluates Endspan and Midspan Ethernet Systems
- S Simplified Wall Adapter Interface
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                               |
|-------------------------|-------|-------------------------------------------------------------------------------------------|
| AUX, GND, LX, VCC, VDRV |     5 | Miniature white test points                                                               |
| C1, C3                  |     2 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0603) Murata GRM188R72A104K                   |
| C2, C14                 |     2 | 1 F F Q 10%, 100V X7R ceramic capacitors (1206) Murata GRM31CR72A105K                     |
| C4, C6                  |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                    |
| C5                      |     1 | 1 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K                       |
| C7, C10, C15            |     3 | 22 F F Q 10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A226K                     |
| C8                      |     1 | 10 F F Q 20%, 80V aluminum electrolytic capacitor (6.3mm x 7.7mm) Panasonic EEE-FK1K100XP |
| C9                      |     0 | Not installed, ceramic capacitor (0402)                                                   |

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| C11           |     0 | Not installed, ceramic capacitor (0805)                        |
| C12, C13      |     0 | Not installed, ceramic capacitors (0603)                       |
| D1            |     0 | Not installed, Schottky diode (SMB)                            |
| D2, D101-D104 |     5 | 100V, 2A Schottky diodes (SMB) Diodes Inc. B2100               |
| D5            |     0 | Not installed, zener diode (SOD323)                            |
| D6            |     0 | Not installed, transient voltage suppressor (SMB)              |
| D105-D108     |     4 | 8.2V Q 5%, 200mW zener diodes (SOD323) Fairchild MM3Z8V2C      |
| L1            |     1 | 47 F H, 1.15A inductor (8.3mm x 8.3mm) Sumida CDRH8D28NP-470NC |
| L2, L3        |     0 | Not installed, common-mode chokes (9.5mm x 6mm)                |
| N101, N102    |     2 | 100V, 3.5A dual n-channel MOSFETs (8 SO) Fairchild FDS89141    |

## MAX5986A Evaluation Kit

## Evaluates: MAX5986A

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R1            |     1 | 0 I Q 5% resistor (0402)                                                   |
| R2            |     1 | 100k I Q 1% resistor (0402)                                                |
| R3            |     1 | 1k I Q 1% resistor (0603)                                                  |
| R4            |     1 | 2.49k I Q 1% resistor (0402)                                               |
| R5            |     1 | 24.9k I Q 1% resistor (0402)                                               |
| R12           |     1 | 10 I Q 1% resistor (0603)                                                  |
| R13           |     1 | 10 I Q 1% resistor (0402)                                                  |
| R14           |     1 | 7.5k I Q 1% resistor (0402)                                                |
| R19           |     0 | Not installed, resistor (0402)                                             |
| R20-R23       |     4 | 0 I Q 5% resistors (0603)                                                  |
| R101-R104     |     4 | 499k I Q 1% resistors (0402)                                               |
| R105-R108     |     4 | 49.9k I Q 1% resistors (0402)                                              |
| RJ45          |     1 | RJ45 MagJack 1G-Ethernet, 802.3af/at standard Bel Fuse Inc. 0826-1X1T-M1-F |
| U1            |     1 | PD with integrated DC-DC converter (16 TQFN-EP*) Maxim MAX5986AETE+        |
| -             |     1 | PCB: MAX5986A EVALUATION KIT                                               |

* EP = Exposed pad.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |

Note:

Indicate that you are using the MAX5986A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX5986A EV kit
- An IEEE 802.3af/at-compliant PSE and a Category 5e Ethernet network cable
- -48V, 1A capable DC power supply
- Voltmeter

## Quick Start

## Required Equipment

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Use one of the following methods to power the EV kit:
- a. If network connectivity is required: Connect a Category 5e Ethernet network cable from the EV kit input port RJ45 connector to the corresponding  PSE  Ethernet  LAN  connection  that  provides power to the EV kit.
- b. If network connectivity is not required: Connect a -48V DC power supply between the V- and V+ PCB  pads  on  the  EV  kit.  Connect  the  powersupply positive terminal to the V+ PCB pad and the negative terminal to the V- PCB pad.
- 2) Activate the PSE power supply or turn on the external DC power supply.
- 3) Using a voltmeter, verify that the EV kit provides +5V across the OUT and VSS PCB pads.

## Detailed Description of Hardware

The MAX5986A EV kit features an Ethernet port and network  PD  interface  controller  circuit  for  -57V  supply  rail systems. The EV kit contains a MAX5986A IEEE 802.3af/ at-compliant network PD interface controller in a 16-pin TQFN-EP package. The IC is used in PoL applications for powering PDs from an unshielded twisted-pair (UTP) Ethernet Category 5e network cable and PSE port using endspan or midspan Ethernet systems.

The  EV  kit  receives  power  from  an  IEEE  802.3af/atcompliant  PSE  and  a  UTP  cable  connected  to  the  EV kit's RJ45 magnetic jack. The EV kit uses a 1 x 1 gigabit RJ45  magnetic  jack  and  two  active  full-wave  bridge power rectifiers to separate the -57V DC power sent by the PSE. The EV kit can accept power from an endspan or midspan PSE network configuration.

<!-- image -->

## MAX5986A Evaluation Kit Evaluates: MAX5986A

The EV kit  can  also  accept  power  from  a  wall  adapter power  source.  When  a  wall  adapter  power  source  is detected  between  the  WAD\_IN  and  WAD\_GND  PCB pads, the IC's internal isolation switch disconnects VCC from VDD, which allows the wall adapter to supply power to the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the  IC such as PD detection signature, PD classification signature, inrush current control, and UVLO. Resistor R5 sets the PD detection and classification signatures. The EV kit is set to a Class 1 PD by resistor R5.

The  EV  kit's  integrated  DC-DC  step-down  converter  is configured for a nonisolated output voltage of +5V and provides up to 768mA at the output while achieving up to  86.68%  and  90.22%  efficiencies  at  +36V  and  +12V input,  respectively. The integrated step-down converter operates at a fixed 275kHz switching frequency.

## Wall Adapter Power Source (WAD\_IN, WAD\_GND)

The EV kit  can  also  accept  power  from  a  wall  adapter power  source.  Use  the  WAD\_IN  (0V)  and  WAD\_GND (-10V  to  -57V)  PCB  pads  to  connect  the  wall  adapter power source. The wall adapter power source operatingvoltage range must be within +10V to +57V for the EV kit.

When the wall  adapter  power  source  is  above  +10V  it always takes precedence over the PSE source. Once the wall adapter power source is detected, the IC's internal isolation  switch  disconnects  VCC  from  VDD.  The  wall adapter  power  is  supplied  to  VCC  (through  diode  D2) and VSS. Once it takes over, the classification process is disabled.

When the wall adapter power source is below +8.5V, the PSE provides power through the IC's VSS. Diode D2 prevents the PSE from back-driving the wall adapter power source when it is below +8.5V.

## Undervoltage Lockout (UVLO)

The EV kit operates up to a -57V supply with a turn-on UVLO  threshold  (V ON )  at  -37.6V  and  a  turn-off  UVLO threshold  (V OFF )  at  -30.0V.  When  the  input  voltage  is above V ON , the EV kit is enabled. When the input voltage goes below V OFF , the EV kit is disabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5986A Evaluation Kit Evaluates: MAX5986A

<!-- image -->

Figure 1. MAX5986A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5986A Evaluation Kit

## Evaluates: MAX5986A

<!-- image -->

Figure 2. MAX5986A EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX5986A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5986A EV Kit PCB Layout-PGND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5986A Evaluation Kit

## Evaluates: MAX5986A

<!-- image -->

Figure 5. MAX5986A EV Kit PCB Layout-VCC Layer 3

<!-- image -->

Figure 6. MAX5986A EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX5986A EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5986AEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX5986A Evaluation Kit

## Evaluates: MAX5986A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8