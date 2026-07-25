<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX5969B Evaluation Kit

## General Description

## Features

The MAX5969B evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  circuit  board  featuring  an  Ethernet  port,  network  powered-device  (PD) interface-controller circuit for IEEE® 802.3af/at-compliant power-over-Ethernet (PoE) systems. The EV kit features the  MAX5969B  IEEE  802.3af/at-compliant  network  PD interface  controller  IC  in  a  10-pin  TDFN  package.  The MAX5969B  is  used  in  PoE  applications  requiring  DC power from an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The EV kit receives power from IEEE 802.3af/at-compliant power-sourcing equipment (PSE). Refer to the  MAX5965 and  MAX5971  IC  data  sheets  for  PSE  controllers.  The PSE provides the required -30V to -57V DC power over an  unshielded  twisted-pair  Ethernet  network  cable  to the EV kit's RJ45 magnetic jack. The EV kit features a 1 x 1GbE RJ45 magnetic jack and two diode bridges for separating  the  DC  power  provided  by  an  endspan  or midspan Ethernet system.

The EV kit can also be powered by a wall adapter power source.  The  EV  kit  provides  PCB  pads  to  accept  the output  of  a  wall  adapter  power  source.  When  a  wall adapter  power  source  is  detected,  it  always  takes precedence  over  the  PSE  source,  allowing  the  wall adapter to power the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the IC,  such  as  PD  detection  signature,  PD  classification signature,  in-rush  current  control,  and  input  undervoltage  lockout  (UVLO).  The  EV  kit  also  provides  a modular  RJ45  jack  to  interface  with  the  Ethernet  data signals only.

The EV kit  also  features  a  galvanically  isolated  22.7W, 600kHz switching frequency flyback DC-DC converter, which  uses  the  MAX15000A  current-mode  PWM  controller. The IC's output provides power for the converter circuit. The DC-DC converter is configured for an output voltage of +12V and provides up to 1.9A. High efficiency up to 89% is achieved using a single transistor flyback DC-DC  converter  topology.  The  surface-mount  transformer provides up to +1500V galvanic isolation for the output. UVLO, soft-start, and thermal shutdown provide a  robust  22.7W  isolated  power  supply.  The  DC-DC converter operates at 600kHz, allowing the use of small magnetics  and  output  capacitors.  The  EV  kit  can  also evaluate the MAX5969A after IC replacement (U1).

- S IEEE 802.3af/at-Compliant PD Interface Circuit
- S -30V to -57V Input Range
- S Demonstrates an Isolated +12V/22.7W Flyback DC-DC Converter
- S PD Detection and Configurable Classification Signatures
- S 2-Event Classification or Wall Adapter Detect Output
- S Power-Good Indicator Output
- S In-Rush Current Limit of 180mA (max)
- S Evaluates Endspan and Midspan Ethernet Systems
- S Evaluates the MAX5969B/MAX5969A in a 10-Pin TDFN Package
- S Simplified Wall Adapter Interface
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5969BEVKIT+ | EV Kit |

+Denotes lead(Pb)-free and RoHS compliant.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 0.1 F F Q 10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A104K      |
| C2            |     1 | 0.1 F F Q 10%, 100V X7R ceramic capacitor (0603) Murata GRM188R72A104K      |
| C3            |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H102K        |
| C4            |     1 | 1000pF Q 10%, 250V AC X7R ceramic capacitor (1206) AVX Corp. 1206GC102KAT1A |

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969B Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C5, C8        |     2 | 1 F F Q 10%, 100V X7R ceramic capacitors (1210) Murata GRM32CR72A105K                  |
| C6            |     1 | 4.7 F F Q 20%, 35V aluminum electrolytic capacitor (4mm x 5.8mm) Panasonic EEEFK1V4R7R |
| C7            |     1 | 68 F F Q 20%, 63V aluminum electrolytic capacitor (8mm x 10.2mm) SANYO 63CE68FS        |
| C9, C12, C20  |     3 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                 |
| C10           |     1 | 330pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H331K                    |
| C11           |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                  |
| C13           |     1 | 5600pF Q 10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E562K                   |
| C14           |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H101J                     |
| C15           |     1 | 8200pF Q 10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E822K                   |
| C16           |     1 | 2200pF Q 10%, 250VAC X7R UL ceramic capacitor (1812) Murata GA343QR7GD222K             |
| C17, C18, C19 |     3 | 47 F F Q 10%, 16V X5R ceramic capacitors (1210) Murata GRM32ER61C476K                  |
| C21           |     0 | Not installed, capacitor (0805)                                                        |
| C24           |     0 | Not installed, capacitor (0402)                                                        |

PowerDI is a registered trademark of Diodes Incorporated.

MagJack is a registered trademark of Bel Fuse Inc.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION           |   QTY | DESCRIPTION                                                                     |
|-----------------------|-------|---------------------------------------------------------------------------------|
| D1                    |     1 | 56.7V, 600W transient voltage suppressor (SMB) Fairchild SMBJ51A (Top Mark: MZ) |
| D2                    |     1 | 100V, 2A diode rectifier (SMB) Diodes Inc. ES2B-13-F                            |
| D3, D4                |     2 | 200V, 1A bridge rectifiers (MiniDIP) Diodes Inc. HD02                           |
| D5                    |     1 | 27V, 500mW zener diode (SOD123) Diodes Inc. BZT52C27 (Top Mark: WP)             |
| D6                    |     1 | 75V, 150mA switching diode (SOD323) Diodes Inc. 1N4148WS (Top Mark: T4 or T6)   |
| D7                    |     1 | 60V, 7A Schottky diode (PowerDI ® 5) Diodes Inc. PDS760                         |
| J3                    |     1 | Modular side-entry, 8-position jack assembly Tyco Electronics 5520252-4         |
| L1                    |     1 | 3.3 F H, 2.26A inductor Cooper Bussmann SD53-3R3-R (Top Mark: C)                |
| N1                    |     1 | 150V, 4.1A n-channel MOSFET (8 SO) Fairchild FDS2582                            |
| Q1                    |     0 | Not installed, transistor (SOT23)                                               |
| RJ45                  |     1 | 1GbE IEEE 802.3af/at-compliant RJ45 MagJack ® Bel Fuse 0826-1X1T-GH-F           |
| R1, R8                |     2 | 24.9k I Q 1% resistors (0603)                                                   |
| R2                    |     1 | 30.9 I Q 1% resistor (0805)                                                     |
| R3, R7                |     2 | 59k I Q 1% resistors (0402)                                                     |
| R4, R5, R30, R32, R33 |     0 | Not installed, resistors (0402)                                                 |

<!-- image -->

## MAX5969B Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                      |
|--------------------|-------|------------------------------------------------------------------|
| R6                 |     1 | 1.37M I Q 1% resistor (0402)                                     |
| R9, R10            |     2 | 10 I Q 5% resistors (0805)                                       |
| R11, R19           |     2 | 1k I Q 1% resistors (0402)                                       |
| R12, R13           |     2 | 0.39 I Q 1%, 0.25W sense resistors (0805) Panasonic ERJ-6BQFR39V |
| R14                |     1 | 8.25k I Q 1% resistor (0402)                                     |
| R15                |     1 | 845 I Q 1% resistor (0402)                                       |
| R16                |     1 | 4.99k I Q 1% resistor (0402)                                     |
| R17, R18, R22      |     3 | 10k I Q 1% resistors (0402)                                      |
| R20                |     1 | 0 I Q 5% resistor (0402)                                         |
| R21                |     1 | 3.32k I Q 1% resistor (0402)                                     |
| R23                |     1 | 9.53k I Q 1% resistor (0402)                                     |
| R24                |     1 | 23.2k I Q 1% resistor (0402)                                     |
| R25                |     1 | 2.49k I Q 1% resistor (0402)                                     |
| R26                |     0 | Not installed, resistor (0805)                                   |
| R27, R28, R29, R31 |     4 | 75 I Q 5% resistors (0402)                                       |

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R34           |     1 | 100k I Q 5% resistor (0402)                                                     |
| T1            |     1 | 12V, 30W flyback transformer Pulse PA2669NL EP13-10                             |
| U1            |     1 | IEEE 802.3af-compliant PD (10 TDFN-EP*) Maxim MAX5969BETB+                      |
| U2            |     1 | Current-mode PWM controller (10 F MAX ® ) Maxim MAX15000AEUB+                   |
| U3            |     1 | 70V, 200% to 400% phototransistor CTR (4 surface-mount DIP) Fairchild FOD817CSD |
| U4            |     1 | 2.5V precision shunt regulator (5 SOT23)                                        |
| -             |     1 | PCB: MAX5969B EVALUATION KIT+                                                   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Pulse Engineering                      | 858-674-8100 | www.pulseeng.com            |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyo.com               |
| Tyco Electronics                       | 800-522-6752 | www.tycoelectronics.com     |

Note: Indicate that you are using the MAX5969B when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX5969B Evaluation Kit

## Quick Start

## Required Equipment

- IEEE	 802.3af/at-compliant	 PSE	 and	 Category	 5e Ethernet network cable
- -48V,	1A-capable	DC	power	supply
- MAX5969B	EV	kit
- Voltmeter

the  PSE.  The  EV  kit  accepts  power  from  an  endspan or  midspan PSE network configuration. The EV kit also provides an RJ45 jack (J3) for interface to the Ethernet data signals only.

The  EV  kit  can  also  accept  power  from  a  wall  adapter power  source.  When  a  wall  adapter  power  source  is detected between the WAD and RTN PCB pads, the IC's internal isolation switch disconnects VSS from RTN, which allows the wall adapter to supply power to the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the MAX5969B,  such  as PD  detection signature, PD classification  signature,  in-rush  current  control,  and UVLO. The EV kit also provides modular jack J3 to interface with the Ethernet data signals from the RJ45 magnetic jack. Resistor R1 sets the PD detection signature; the PD classification signature is determined by resistor R2.

The EV kit's galvanically isolated 22.7W flyback DC-DC converter  uses  a  MAX15000A  current-mode  PWM controller.  The  MAX5969B's  VDD  and  RTN  pins  provide  power  for  the  DC-DC  converter  input  circuit.  The DC-DC converter is configured for an output voltage of +12V  and  provides  up  to  1.9A  at  the  output,  while achieving  up  to  89%  efficiency.  Minimal  component count is achieved using a single transistor (N1) flyback DC-DC  converter  topology.  The  surface-mount  transformer (T1) provides up to 1500V galvanic isolation for the  output.  Current-sense  resistors  R12  and  R13  limit the peak current through transistor N1 and the primary of transformer T1. Isolated feedback voltage is achieved using optical coupler U3 and shunt regulator U4. Voltage feedback resistors R23 and R25 set the output voltage. Resistor R26 and capacitor C21 form a snubber network that  suppresses  transient  overvoltage  ringing  at  diode D7 caused by transformer T1's leakage inductance and the junction capacitance of diode D7.

Internal  UVLO,  soft-start,  and  thermal  shutdown  within the  MAX15000A  provide  for  a  robust  22.7W  isolated power-supply design. The MAX15000A PWM controller operates at 600kHz and the switching duty cycle is limited to 50% (max). Refer to the MAX15000 IC data sheet for more information on this controller.

Warning: The MAX5969B EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately when working with high-voltage electrical equipment.

## Hardware Connections

The  MAX5969B  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Use one of the following methods to power the EV kit:
- If	 network	 connectivity	 is	 required: Connect a  Category  5e  Ethernet  network  cable  from  the EV  kit  input  port  RJ45  connector  to  the  corresponding  PSE  Ethernet  LAN  connection,  which provides power to the EV kit. A modular RJ45 jack (J3)  provides an interface with the Ethernet data signals only.
- If	network	connectivity	is	not	required: Connect a  -48V  DC  power  supply  between  the  VDD  and VSS pads on the EV kit. Connect the power-supply positive terminal to the VDD pad and the negative terminal to the VSS pad.
- 2)  Activate the PSE power supply or turn on the external DC power supply.
- 3)  Using a voltmeter, verify that the EV kit provides +12V across the +12V and GND pads. GND is galvanically isolated from the EV kit's input VDD and WAD pads.

## Detailed Description of Hardware

The  MAX5969B  EV  kit  features  an  Ethernet port, network PD interface-controller circuit for -57V supply  rail  systems.  The  EV  kit  contains  a  MAX5969B IEEE  802.3af/at-compliant  PD  controller  IC  in  a  10-pin TDFN package with an exposed pad. The IC is used in PoE applications for powering PDs from an unshielded twisted-pair  (UTP)  Ethernet  Category 5e network cable and PSE port using endspan or midspan Ethernet systems.

The  EV  kit  receives  power  from  an  IEEE  802.3af/atcompliant  PSE  and  a  UTP  cable  connected  to  the  EV kit's  RJ45  magnetic  jack.  The  EV  kit  uses  a  1  x  1GbE RJ45 magnetic jack and two diode-bridge power rectifiers  (D3,  D4)  to  separate  the  -57V  DC  power  sent  by

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5969B Evaluation Kit

Table 1. PD Classification Signature Selection

power source. The wall adapter power-source operatingvoltage range must be within +30V to +57V for the EV kit.

|   CLASS | MAXIMUM POWER USED BY PD (W)   |   RESISTOR R2 ( I ) |
|---------|--------------------------------|---------------------|
|       0 | 0.44 to 12.95                  |                 619 |
|       1 | 0.44 to 3.84                   |                 118 |
|       2 | 3.84 to 6.49                   |                66.5 |
|       3 | 6.49 to 12.95                  |                43.2 |
|       4 | 12.95 to 25.5                  |                30.9 |
|       5 | > 25.5                         |                21.5 |

Under severe fault or failure conditions, this EV kit can dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

## PD Classification Signature

By  default,  the  EV  kit  is  set  for  a  Class  4  (12.95W  to 25.5W) PD classification by resistor R2. To change the PD  classification,  replace  surface-mount  resistor  R2. Table 1 lists the PD classification options.

## Wall Adapter Power Source (WAD, RTN)

The EV kit can also accept power from a wall adapter power  source.  Use  the  WAD  PCB  pad  for  connecting the more positive terminal and the RTN PCB pad for connecting the more negative terminal to the wall adapter When the wall adapter power source is above +10V, it takes precedence over the PSE source. Once the wall adapter  power  source  is  detected,  the  IC's  internal isolation  switch  disconnects  VSS  from  RTN.  The  wall adapter  power  is  supplied  to  VDD  (through  diode  D2) and RTN. Once it takes over, the classification process is disabled.

<!-- image -->

When the wall adapter power source is below +7V, the PSE  provides  power  through  the  IC's  RTN.  Diode  D2 prevents  the  PSE  from  back-driving  the  wall  adapter power source when it is below +7V.

## Ethernet Data Signal Interfacing

The  EV  kit  features  a  modular  RJ45  jack  (J3)  to  interface  with  the  Ethernet  data  signals.  J3  is  provided  for interfacing the EV kit with the Ethernet data signals only. Refer to the RJ45 magnetic jack data sheet on the Bel Fuse website prior to interfacing the EV kit's J3 modular RJ45 jack with the Ethernet data signals.

## Evaluating the MAX5969A

The EV kit can also evaluate the MAX5969A. Remove the MAX5969B IC (U1) and replace it with the MAX5969A. The MAX5969A is pin compatible with the MAX5969B. The  MAX5969A  has  a  lower  UVLO  of  -35.4V  compared  to  the  MAX5969B's  UVLO  of  -38.6V.  Refer  to the  MAX5969A/MAX5969B IC data sheet for additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX5969B Evaluation Kit

Figure 1a. MAX5969B EV Kit Schematic-PD Interface Controller Circuit (Sheet 1 of 2)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969B Evaluation Kit

<!-- image -->

Figure 1b. MAX5969B EV Kit Schematic-12V, 22W Isolated Power-Supply Circuit (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX5969B Evaluation Kit

<!-- image -->

Figure 2. MAX5969B EV Kit Component Placement GuideComponent Side

Figure 3. MAX5969B EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5969B EV Kit PCB Layout-GND Layer 2

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5969B Evaluation Kit

<!-- image -->

Figure 5. MAX5969B EV Kit PCB Layout-VCC Layer 3

Figure 6. MAX5969B EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX5969B EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9