<!-- lastmod 2022-08-02 -->
## MAX5974C Evaluation Kit

## General Description

The MAX5974C evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  circuit  board  featuring  the  MAX5974C  active-clamped,  spread-spectrum, current-mode  PWM  controller  for  Power-over-Ethernet (PoE)  powered  device  (PD)  applications.  The  EV  kit is  a  compact  and  low-cost  design  used  in  power-overLAN (PoLAN) applications  requiring  DC  power  from  an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The EV kit features a galvanically isolated 25W, 250kHz switching-frequency,  active-clamped,  synchronous-rectified  forward  DC-DC  converter  using  the  IC. The  device circuit  achieves  high  efficiency  up  to  93.5%  using  a forward  DC-DC  converter  topology.  The  surface-mount transformer provides up to +1500V galvanic isolation for the output. The EV kit output voltage is configured for +5V and provides up to 4.7A load current.

The  EV  kit  includes  the  MAX5969B  IEEE ®   802.3af/atcompliant network PD interface controller IC, which provides PD detection signature, PD classification signature, inrush current control, and undervoltage lockout (UVLO).

The  EV  kit  circuit  receives  its  power  from  IEEE  802.3af/ at-compliant  power-sourcing  equipment  (PSE).  The  PSE provides  the  required  -39V  to  -57V  DC  power  over  an unshielded  twisted-pair  Ethernet  network  cable  to  the  EV kit's RJ45 MagJack ® . The EV kit features a 1 x 1Gb RJ45 MagJack and two full-bridge diodes for separating the DC power provided by an endspan or midspan Ethernet system.

The  EV  kit  circuit  can  also  be  powered  by  a  +37V  to +57V wall  adapter  power  source,  applied  at  the  PWR+ and PWR- PCB pads. When a wall adapter power source is  detected,  it  always  takes  precedence  over  the  PSE source, allowing the wall adapter to power the EV kit.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault  or  failure  conditions,  this  EV  kit  can dissipate  large  amounts  of  power,  which  could  result  in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

## Features

- IEEE 802.3af/at-Compliant PD Interface Circuit
- -39V to -57V Startup Input Voltage Range
- Demonstrates an Isolated 25W Active-Clamped, Synchronous-Rectified Forward DC-DC Converter
- Demonstrates Up to 93.5% Efficiency
- Isolated +5V Output at 4.7A
- PD Detection and Configurable Classification Signatures
- Inrush Current Limit of 180mA (max)
- 2-Event Classification or Wall Adapter Detect Output
- Internal UVLO at +38V
- Evaluates Endspan and Midspan Ethernet Systems
- Simplified Wall Adapter Interface
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Efficiency vs. Output Current at VIN = 42V, 48V, and 57V

<!-- image -->

Ordering Information appears at end of data sheet.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

MagJack is a registered trademark of Stewart Connector Systems, Inc.

<!-- image -->

Evaluates: MAX5974C

## MAX5974C Evaluation Kit

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                         |
|--------------------|-------|-------------------------------------------------------------------------------------|
| C1, C6             |     2 | 1µF ±10%, 100V X7R ceramic capacitors (1210) AVX 12101C105KAT9A                     |
| C2                 |     1 | 0.1µF ±10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A104K                    |
| C3                 |     1 | 0.056µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R61C563K                |
| C4                 |     1 | 22µF ±10%, 25V X7R ceramic capacitor (1210) Murata GRM32ER61E226K                   |
| C5                 |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473K                |
| C7                 |     1 | 33µF ±20%, 63V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE1JA330P |
| C8, C9             |     2 | 100µF ±20%, 6.3V X5R ceramic capacitors (1210) TDK C3225X5R0J107M                   |
| C10                |     1 | 22µF ±10%, 10V X7R ceramic capacitor (1210) Murata GRM32ER71A226K                   |
| C11                |     0 | Not installed, ceramic capacitor (1210)                                             |
| C12                |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K                  |
| C13                |     1 | 0.1µF ±10%, 100V X7S ceramic capacitor (0603) TDK C1608X7S2A104K                    |
| C14                |     1 | 0.01µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A103K                 |
| C15                |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A105K                    |
| C16, C20, C23, C26 |     0 | Not installed ceramic capacitors (0402)                                             |
| C17                |     1 | 4700pF ±10%, 250V X7R ceramic capacitor (1206) AVX 1206PC472KAT1A                   |

Evaluates: MAX5974C

| DESIGNATION     |   QTY | DESCRIPTION                                                             |
|-----------------|-------|-------------------------------------------------------------------------|
| C18             |     1 | 2200pF ±20%, 250VAC X7R ceramic capacitor (2220) Murata GA355QR7GF222KW |
| C19             |     1 | 6800pF ±10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E682K     |
| C21             |     1 | 0.1µF ±10%, 16V ceramic capacitor (0402) Murata GRM155R71C104K          |
| C22             |     1 | 1000pF ±10%, 1500V X7R ceramic capacitor (1210) AVX 1210SC102KATA       |
| C24             |     1 | 330pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H331K      |
| C25             |     1 | 0.015µF ±10%, 25V ceramic capacitor (0402) TDK C1005X7R1E153K           |
| D1, D2          |     2 | 200V, 1A bridge rectifier diodes (Mini-DIP) Diodes Inc. HD01-T          |
| D3              |     1 | 600W, 58V TVS diode (SMB) Diode Inc. SMBJ58A                            |
| D4, D5, D8, D10 |     4 | 100mA, 80V diodes (SOD323) Diodes Inc. 1N4148WS                         |
| D6              |     1 | 22V zener diode (SOD123) Fairchild MMSZ5251B                            |
| D7              |     1 | 100V, 2A Schottky diode (SMB) Diodes Inc. B2100-13-F                    |
| D9, D11         |     2 | 200mA, 200V diodes (S-Mini2) Panasonic DA2J108                          |
| J1              |     1 | Modular side-entry, 8-position jack assembly                            |
| L1              |     1 | 3300µH, 0.024A inductor Coilcraft LPS4018-335ML                         |
| L2              |     1 | 6.8µH, 8.5A inductor Pulse PG0702.682NL                                 |
| L3              |     1 | 3.3µH, 2.6A inductor Cooper Bussmann SD53-3R3-R                         |
| N1, N2          |     2 | 25V, 58A n-channel MOSFETs (PowerPak 8 SO) Infineon BSC050NE2LS         |
| N4              |     1 | -150V, -0.42A p-channel transistor (6 SC70) Vishay Si1411DH             |

│

## MAX5974C Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| N5            |     1 | 150V, 2.3A n-channel transistor (6 SuperSOT) Fairchild FDC86244 |
| PGND, +5V     |     2 | Uninsulated banana jacks                                        |
| Q1            |     0 | Not installed, npn transistor (SOT23)                           |
| Q2            |     0 | Not installed, pnp transistor (SOT23)                           |
| R1            |     1 | 30.1kΩ ±1% resistor (0603)                                      |
| R2, R17, R47  |     0 | Not installed, resistors (0402)                                 |
| R4            |     1 | 30.9Ω ±1% resistor (0805)                                       |
| R5            |     1 | 59kΩ ±5% resistor (0603)                                        |
| R6            |     1 | 16.9kΩ ±1% resistor (0402)                                      |
| R7            |     1 | 34kΩ ±1% resistor (0402)                                        |
| R8            |     1 | 1.5MΩ ±1% resistor (0603)                                       |
| R9            |     1 | 100kΩ ±5% resistor (0402)                                       |
| R10           |     1 | 2kΩ ±1% resistor (0402)                                         |
| R12, R13      |     2 | 10Ω ±5% resistors (0805)                                        |
| R14           |     1 | 24.9kΩ ±1% resistor (0603)                                      |
| R15           |     1 | 34.8kΩ ±1% resistor (0402)                                      |
| R16           |     1 | 0Ω ±5% resistor (0402)                                          |
| R18           |     1 | 499Ω ±1% resistor (0402)                                        |
| R19, R23      |     2 | 10Ω ±5% resistors (0603)                                        |
| R20           |     1 | 10kΩ ±1% resistor (0603)                                        |
| R21, R25      |     2 | 0.4Ω ±1%, 1/2 Wresistors (1206) IRC LRC-LRF-1206LF-01-R400-F    |
| R26, R48      |     2 | 100Ω ±1% resistors (0402)                                       |
| R27           |     1 | 100kΩ ±1% resistor (0402)                                       |
| R28           |     1 | 36.5kΩ ±1% resistor (0402)                                      |
| R29           |     1 | 162kΩ ±1% resistor (0402)                                       |
| R30           |     1 | 121kΩ ±1% resistor (0402)                                       |
| R31           |     1 | 4.99kΩ ±1% resistor (0402)                                      |
| R32           |     1 | 1kΩ ±1% resistor (0402)                                         |
| R33           |     1 | 1kΩ ±1% resistor (0402)                                         |
| R34           |     1 | 4.02kΩ ±1% resistor (0402)                                      |

Evaluates: MAX5974C

| DESIGNATION        |   QTY | DESCRIPTION                                                                                       |
|--------------------|-------|---------------------------------------------------------------------------------------------------|
| R35                |     1 | 7.5kΩ ±1% resistor (0402)                                                                         |
| R36                |     1 | 2.49kΩ ±1% resistor (0402)                                                                        |
| R37                |     1 | 1MΩ ±5% resistor (0402)                                                                           |
| R38, R39, R44, R45 |     0 | Not installed, resistors (0603)                                                                   |
| R40, R41, R42, R43 |     4 | 75Ω ±5% resistors (0603)                                                                          |
| R46                |     1 | 0Ω ±5% resistor (0603)                                                                            |
| RJ45               |     1 | RJ45 MagJack 1G-Ethernet, 802.3af/at standard Bel Fuse Inc. 0826-1X1T-GH-F                        |
| TPGND              |     1 | Black test point                                                                                  |
| TP5V               |     1 | Red test point                                                                                    |
| T1                 |     1 | 0.50:0.25:0.25:1 forward transformer (10 EP13) Cooper Bussmann CTX03-18842-R                      |
| U1                 |     1 | Active-clamped PWM controller (16 TQFN-EP) Maxim MAX5974CETE+ (Top Mark: AIA)                     |
| U2                 |     1 | IEEE802.3 at-compliant powered device (10 TDFN-EP ) Maxim MAX5969BETB+ (Top Mark: AWP)            |
| U3                 |     1 | 70V, 200% to 400% CTR phototransistor (4 DIP, surface mount) Fairchild FOD817CSD (Top Mark: TAI_) |
| U4                 |     1 | 1.24V shunt regulator (5 SOT23)                                                                   |
| -                  |     1 | PCB: MAX5974C EVALUATION KIT                                                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Infineon TechnologiesAG                | 919-998-5334 | www.infineon.com            |
| IRC Inc.                               | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Pulse Engineering                      | 858-674-8100 | www.pulseeng.com            |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX5974C when contacting these component suppliers.

## Quick Start

## Required Equipment

-  MAX5974C EV kit
- IEEE  802.3af/at-compliant  PSE  and  Category  5e Ethernet network cable
- -48V, 1A-capable DC power supply
- Voltmeter

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Use one of the following methods to power the EV kit:
- If  network  connectivity  is  required: Connect  a Category  5e  Ethernet  network  cable  from  the  EV kit  input  port  RJ45  MagJack  connector  (RJ45)  to the  corresponding PSE Ethernet LAN connection, which provides power to the EV kit. Ethernet jack J1 provides an interface with the Ethernet data signals only.
- If network connectivity is not required: Connect a -48V DC power supply between the V DD  and V SS PCB pads on the EV kit. Connect the power-supply positive terminal to the V DD  pad and the negative terminal to the V SS  PCB pad.
- 2)  Activate the PSE power supply or turn on the external DC power supply.
- 3)  Using a voltmeter, verify that the EV kit provides +5V across the +5V and PGND PCB pads. PGND is gal -vanically isolated from the EV kit's input V DD and VSS PCB pads.

## Detailed Description of Hardware

The MAX5974C EV kit is a fully assembled and tested surface-mount circuit board that evaluates the MAX5974C active-clamped, current-mode PWM controller. The EV kit features  a  powered  Ethernet  port,  a  data-only  Ethernet port,  and  a  MAX5969B  IEEE  802.3af/at-compliant  network PD interface-controller IC.

The EV kit is a galvanically isolated 25W DC-DC converter using the active-clamped, current-mode PWM controller IC in a forward-feedback topology. The EV kit receives power from an IEEE 802.3af/at-compliant PSE and a UTP cable connected to the EV kit's RJ45 MagJack. The EV kit uses a 1 x 1Gb RJ45 MagJack and two diode-bridge power rectifiers (D1, D2) to separate the -57V DC power sent by the PSE. The EV kit accepts power from an endspan or midspan PSE network configuration.

The EV kit also provides Ethernet jack J1 for interfacing to the Ethernet data signals. PCB pads V DD  and V SS  are available for powering the EV kit, if network connectivity is not required. The EV kit output voltage is configured for +5V and provides up to 4.7A output current. The EV kit circuit  achieves  up  to  93.5%  efficiency  using  MOSFETs N1 and N2 for synchronous rectification on the second -ary side. Transformer T1 provides up to 1500V galvanic isolation  for  the  output.  Isolated  feedback  voltage  is achieved using optical coupler U3 and voltage regulator U4. Current-sense resistors R21 and R25 limit the peak current through transistor N5 and primary transformer T1. Capacitor C17 and transistor N4 form a clamping network that  protects  transformer  T1  against  saturation  due  to reverse current, by monitoring the voltage across the IC's CS input during auxiliary driver N4 off-time.

Evaluates: MAX5974C

The EV kit also demonstrates the full PD functionality of the MAX5969B (U2), such as PD detection signature, PD classification signature, inrush current control, and UVLO. Resistors R14 and R4 set the PD detection signature and the PD classification signature, respectively.

The  EV  kit  circuit  accepts  power  from  a  wall  adapter DC  power  source.  When  a  wall  adapter  power  source in  the +37V to +57V range is applied at the PWR+ and PWR- PCB pads,  it  always  takes  precedence  over  the PSE source, allowing the wall adapter to power the EV kit circuit. When applying a valid voltage source between the PWR+ and PWR- PCB pads, the MAX5969B internal isolation switch disconnects VSS from RTN, which allows the wall adapter to supply power to the EV kit.

## PD Classification Signature

The EV kit is configured for a Class 4 (12.95W to 25.5W) PD classification  by  resistor  R4.  To  reconfigure  the  PD classification,  replace  surface-mount  0805  resistor  R4. Table 1 lists the PD classification options.

## Wall Adapter Power Source (PWR+, PWR-)

The EV kit can also accept power from a wall adapter DC power source, applied at the PWR+ and PWR- PCB pads. The wall  adapter  power-source  operating-voltage  range must be within +37V to +57V for the EV kit.

## Table 1. PD Classification Signature Selection

|   CLASS | Maximum Power Used by PD (W)   |   Resistor R4 (Ω) |
|---------|--------------------------------|-------------------|
|       0 | 0.44 to 12.95                  |               615 |
|       1 | 0.44 to 3.84                   |               117 |
|       2 | 3.84 to 6.49                   |              66.5 |
|       3 | 6.49 to 12.95                  |              43.7 |
|       4 | 12.95 to 25.5                  |              30.9 |
|       5 | > 25.5                         |              21.3 |

When the wall adapter power source is above +33.6V it takes  precedence over the PSE source. Once the wall adapter power source is detected, the MAX5969B internal isolation switch disconnects VSS from RTN. The wall adapter  power  is  supplied  to  VDD  (through  diode  D7) and RTN. Once it takes over, the classification process is  disabled.  Resistors  R27  and  R28  are  available  for adjusting the EV kit wall adapter voltage for disabling the PSE source.

When the wall adapter power source is below +27V the PSE provides power through the RTN pin on U2. Diode D7 prevents the PSE from backdriving the wall adapter power source when it is below +7V.

## Ethernet Data-Signal Interfacing

The EV kit features Ethernet jack J1 to interface with the Ethernet data signals. J1 is provided for interfacing the EV kit with the Ethernet data signals only. Refer to the RJ45 MagJack data sheet on the Bel Fuse website prior to interfacing the EV kit's J1 jack with the Ethernet data signals.

## MAX5974C EV Kit Schematic

<!-- image -->

## MAX5974C EV Kit PCB Layout

Component Placement Guide-Component Side

<!-- image -->

Component Side

<!-- image -->

│

## MAX5974C EV Kit PCB Layout (continued)

GND Layer 2

<!-- image -->

Signal Layer 3

<!-- image -->

│

## MAX5974C EV Kit PCB Layout (continued)

<!-- image -->

Solder Side

Component Placement Guide-Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5974CEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX5974C

## MAX5974C Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5974C