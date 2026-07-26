<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

## General Description

The MAX5969A evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  the MAX5969A IEEE 802.3af/at-compliant network powered device  (PD)  interface  controller  and  the  MAX5974A inductive-feedback, spread-spectrum, current-mode PWM controller. The EV kit is designed as a high-performance, compact, and cost-efficient solution for a Class 3 (scalable to Class 4) PD used in Power-over-Ethernet (PoE) applications.

The  EV  kit  demonstrates  the  full  functionality  of  the MAX5969A,  such as PD detection signature, PD classification signature, inrush current control, and input undervoltage  lockout  (UVLO).  The  EV  kit  also  features an isolated 12W, 300kHz switching-frequency, synchronous-rectified flyback DC-DC converter topology, using the  MAX5974A inductive-feedback, current-mode PWM controller. The EV kit circuit is configured for an output voltage of +12V and provides up to 1A load current using primary-side  regulation.  The  surface-mount  transformer provides up to +1500V galvanic isolation for the output.

The EV kit receives power from IEEE M 802.3af/at-compliant power-sourcing equipment (PSE). The PSE provides the required -36V to -57V DC power over an unshielded twisted-pair Ethernet network cable to the EV kit's RJ45 magnetic jack.  The  EV  kit  features  a  1  x  1Gb  Ethernet RJ45 magnetic jack and two full-bridge diodes for separating the DC power provided by an endspan or midspan Ethernet system.

The  EV  kit  circuit  can  also  be  powered  by  a  +36V  to +57V wall adapter power source, applied at the WAD\_IN and WAD\_GND PCB pads. When a wall adapter power source is detected, it always takes precedence over the PSE source, allowing the wall adapter to power the EV kit.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or the power sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- S IEEE 802.3af/at-Compliant PD Interface Circuit
- S -36V to -57V Startup Input Voltage Range
- S 92% (typ) Efficiency
- S Demonstrates Isolated 12W Flyback DC-DC Converter
- S Isolated +12V Output at 1A
- S 300kHz Switching Frequency
- S Configurable for Optocoupler Feedback Operation
- S Scalable to 12V Class 4 PD
- S PD Detection and Configurable Classification Signatures
- S 2-Event Classification or Wall Adapter Detect Output
- S Inrush Current Limit of 135mA (typ)
- S Internal UVLO at -35.6V (typ)
- S Evaluates Endspan and Midspan Ethernet Systems
- S Simplified Wall Adapter Interface
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C1, C21       |     0 | Not installed, ceramic capacitors (0805)                                        |
| C2, C18       |     2 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0805) TDK C2012X7R2A104K            |
| C3            |     1 | 0.022 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E223K         |
| C4            |     1 | 10 F F Q 10%, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMK316B7106K         |
| C5            |     1 | 10pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H100J               |
| C6, C13, C30  |     3 | 1 F F Q 10%, 100V X7R ceramic capacitors (1206) TDK C3216X7R2A105K              |
| C7            |     1 | 22 F F Q 20%, 63V electrolytic capacitor (6.6mm x 6.6mm) Panasonic EEEFK1J220XP |
| C8            |     1 | 1000pF Q 10%, 1500V X7R ceramic capacitor (1808) AVX 1808SC102KAT1A             |
| C9            |     1 | 330pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H331J              |
| C10           |     1 | 47 F F Q 10%, 16V X5R ceramic capacitor (1210) Murata GRM32ER61C476K            |
| C11           |     1 | 10 F F Q 10%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61C106KC31K        |
| C12, C17      |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K          |
| C14           |     1 | 0.01 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E103K          |
| C15           |     1 | 0.047 F F, 16V X7R ceramic capacitor (0402) Murata GRM155R71E473K               |
| C16           |     1 | 100pF, 50V X7R ceramic capacitor (0402) Murata GRM1555C1H101J                   |

<!-- image -->

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C19           |     1 | 1000pF, 50V X7R ceramic capacitor ( 0402) Murata GRM155R71H102K                |
| C20, C22      |     2 | 2200pF, 100V X5R ceramic capacitors (0603) Murata GRM188R72A222K               |
| C23           |     1 | 2200pF Q 20%, 250V AC X7R ceramic capacitor (2220) Murata GA355QR7GF222KW0IL   |
| C24-C29       |     0 | Not installed, ceramic capacitors (0603)                                       |
| C31           |     0 | Not installed, ceramic capacitor (1210)                                        |
| D1, D2        |     2 | 100V, 0.8A bridge rectifiers (miniDIP) Diodes Inc. HD01-T                      |
| D3            |     1 | 58V transient-voltage suppressor (SMB) Diodes Inc. SMBJ58A-13-F (Top Mark: NG) |
| D4            |     1 | 100V, 2A Schottky diode (SMB) Diodes Inc. ES2B-13-F                            |
| D5            |     0 | Not installed, zener diode (SOT23)                                             |
| D6            |     1 | 58V transient-voltage suppressor (SMA) Diodes Inc. SMAJ58A-13-F                |
| D7            |     1 | 100V, 1A rectifier (SMA) Diodes Inc. S1B-13-F                                  |
| D8            |     1 | 60V, 500mA Schottky diode (SOD123) STMicroelectronics STPS0560                 |
| D9            |     0 | Not installed, Schottky diode (SOD123)                                         |
| D10           |     1 | 100mA, 80V switching diode (SOD323) Diodes Inc. 1N4148WS                       |
| J1            |     1 | Modular, side-entry, 8-position jack assembly                                  |
| L1            |     1 | 80V, 2A common-mode choke TDK ZJYS81R5-2P24 or Sumida CPFC74NP-4251-T11        |
| L2            |     1 | 3.3 F H, 2.6A inductor Cooper Bussmann SD53-3R3-R                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                |   QTY | DESCRIPTION                                                                 |
|--------------------------------------------|-------|-----------------------------------------------------------------------------|
| L3                                         |     1 | 50V, 2A common-mode choke TDK ZJYS51R5-2P-01 or Sumida CPFC74NP-PS02H2A20   |
| N1                                         |     1 | 150V, 4.1A n-channel transistor (8 SO) Fairchild FDS86242                   |
| N2                                         |     1 | 60V, 2.7A n-channel MOSFET (3 SOT23) International Rectifier IRLML0060TRPbF |
| N3                                         |     0 | Not installed, MOSFET (3 SOT23)                                             |
| Q2                                         |     1 | 30V, 100mA pnp transistor (SOT23) Central Semi CMPT3906 (Top Mark: 3L)      |
| R1                                         |     1 | 24.9k I Q 1% resistor (0603)                                                |
| R2                                         |     1 | 68 I Q 5% resistor (0603)                                                   |
| R3                                         |     1 | 330 I Q 1% resistor (0603)                                                  |
| R4                                         |     1 | 43.2 I Q 1% resistor (0805)                                                 |
| R5                                         |     1 | 59k I Q 1% resistor (0603)                                                  |
| R6                                         |     1 | 16.9k I Q 1% resistor (0603)                                                |
| R7                                         |     1 | 34k I Q 1% resistor (0603)                                                  |
| R8                                         |     1 | 53.6k I Q 1% resistor (0603)                                                |
| R9, R27                                    |     2 | 100k I Q 1% resistors (0603)                                                |
| R10                                        |     1 | 2k I Q 1% resistor (0603)                                                   |
| R11                                        |     1 | 30.1k I 1% resistor (0603)                                                  |
| R12, R16                                   |     2 | 10k I Q 1% resistors (0603)                                                 |
| R13, R14                                   |     2 | 10 I Q 5% resistors (0805)                                                  |
| R15                                        |     1 | 29.4k I Q 1% resistor (0603)                                                |
| R17, R38, R41, R43, R44, R45, R47-R54, R56 |     0 | Not installed, resistors (0603)                                             |
| R18                                        |     1 | 4.02k I Q 1% resistor (0603)                                                |

MagJack is a registered trademark of Bel Fuse Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

## Component List (continued)

| DESIGNATION                  |   QTY | DESCRIPTION                                                                                        |
|------------------------------|-------|----------------------------------------------------------------------------------------------------|
| R19                          |     1 | 10 I Q 5% resistor (0603)                                                                          |
| R20, R22, R23, R24, R40, R55 |     0 | Not installed, resistors (0805)                                                                    |
| R21, R25                     |     2 | 0.43 I Q 1%, 1/4W resistors (1206)                                                                 |
| R26                          |     1 | 499 I Q 5% resistor (0603)                                                                         |
| R28                          |     1 | 49.9k I Q 1% resistor (0603)                                                                       |
| R29                          |     1 | 1M I Q 5% resistor (0603)                                                                          |
| R30-R33                      |     4 | 75 I Q 5% resistors (0805)                                                                         |
| R35                          |     1 | 1.5M I Q 1% resistor (0603)                                                                        |
| R46                          |     1 | 0 I Q 5% resistor (0603)                                                                           |
| RJ45                         |     1 | RJ45 MagJack M 1G Ethernet, 802.3af/at standard Bel Fuse Inc. 0826-1X1T-GH-F                       |
| T1                           |     1 | 4.0:8.0:3.2:1 flyback transformer (8 EP10) Pulse Engineering PA3342NL or Sumida CEP1311-04367-T204 |
| TP1, VDD                     |     2 | Small red test points                                                                              |
| TP2, VSS                     |     2 | Small black test points                                                                            |
| U1                           |     1 | IEEE 802.3af/at-compliant PD interface (10 TDFN-EP) Maxim MAX5969AETB+                             |
| U2                           |     1 | Current-mode PWM controller (16 TQFN-EP) Maxim MAX5974AETE+                                        |
| U3                           |     0 | Not installed, phototransistor (4 DIP)                                                             |
| U4                           |     0 | Not installed, shunt regulator (5 SOT23)                                                           |
| -                            |     1 | PCB: MAX5969A EVALUATION KIT                                                                       |

- MAX5969A	EV	kit
- IEEE	 802.3af/at-compliant	 PSE	 and	 Category	 5e Ethernet network cable
- -48V,	1A-capable	DC	power	supply
- Voltmeter

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Use one of the following methods to power the EV kit:
- If  network  connectivity  is  required: Connect  a Category 5e Ethernet network cable from the EV kit  input  port  RJ45  connector  to  the  corresponding PSE Ethernet LAN connection, which provides power  to  the  EV  kit.  A  modular  Ethernet  jack (J1)  provides  an  interface  with  the  Ethernet  data signals only.
- If network connectivity is not required: Connect a  -48V  DC  power  supply  between  the  V+  and V-  PCB  pads  on  the  EV  kit.  Connect  the  powersupply positive  terminal  to  the  V+  PCB  pad  and the negative terminal to the V- PCB pad.
- 2)  Activate the PSE power supply or turn on the external DC power supply.
- 3)  Using a voltmeter, verify that the EV kit provides +12V across  the  VOUT  and  PGND  PCB  pads.  PGND  is galvanically  isolated  from  the  EV  kit's  input  V+  and WAD\_IN PCB pads.

<!-- image -->

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Pulse Engineering                      | 858-674-8100 | www.pulseeng.com            |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5969A when contacting these component suppliers.

## Quick Start

## Required Equipment

## Detailed Description of Hardware

The MAX5969A EV kit features an Ethernet port network PD interface-controller circuit for -57V supply rail systems. The  EV  kit  circuit  contains  a  MAX5969A  IEEE  802.3af/ at-compliant  network  PD  interface  controller  and  the MAX5974A  inductive-feedback,  spread-spectrum,  current-mode PWM controller. The EV kit circuit is used in PoE applications for powering PDs from an unshielded twistedpair (UTP) Category 5e Ethernet network cable and PSE port using endspan or midspan Ethernet systems.

The  EV  kit  demonstrates  the  full  functionality  of  the MAX5969A,  such  as  PD  detection,  PD  classification, inrush current control, and UVLO. Resistors R1 and R4 set the PD detection signature and the PD classification signatures, respectively.

The EV kit's power circuit is a galvanically isolated 12W power  supply  using  the  MAX5974A  DC-DC  currentmode PWM controller in a synchronous-rectified flyback DC-DC  converter  topology.  The  EV  kit  receives  power from an IEEE 802.3af/at-compliant PSE and a Category 5e  Ethernet  network  cable  connected  to  the  EV  kit's RJ45 MagJack. The EV kit uses a 1 x 1Gb Ethernet RJ45 MagJack and two full-bridge power rectifiers (D1, D2) to separate the -57V DC power sent by the PSE. The EV kit accepts  power  from  an  endspan  or  midspan  PSE  network configuration. The EV kit also provides an Ethernet jack (J1) for interfacing to the Ethernet data signals. PCB pads  V+  and  V-  are  available  for  powering  the  EV  kit if  network  connectivity  is  not  required.  Common-mode chokes L1 and L3 are provided for EMI filtering  at  the EV kit power supply (V+, V-) and wall adapter (WAD\_IN, WAD\_GND) inputs, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

The EV kit's 12W, 300kHz flyback DC-DC converter uses a  MAX5974A  inductive-feedback  current-mode  PWM controller. The MAX5969A's VDD and RTN pins provide power for the DC-DC converter input circuit. The DC-DC converter  is  configured  for  an  output  voltage  of  +12V and provides up to 1A of output load current. The EV kit circuit achieves up to 92% efficiency using MOSFET N2 for synchronous rectification on the secondary side. An additional  MOSFET  N3  (SOT23)  PCB  pad  is  available for  increasing  the  output  current  load  up  to  2A  with  a switching frequency of 400kHz. Transistor Q2 is provided to  limit  the  output  overshoot  at  startup.  Surface-mount transformer  T1  provides  up  to  1500V  galvanic  isolation for the isolated output. Current-sense resistors R21 and R25  limit  the  peak  current  through  transistor  N1  and the  primary  of  transformer  T1.  Primary-side  feedback regulation  is  achieved  using  T1  auxiliary  winding  and voltage  feedback  resistors  R3,  R8,  and  R12  to  set  the isolated output voltage. Diodes D6 and D7 are provided for  limiting  the  voltage  spikes  across  transformer  T1 during N1 turn-off time. The EV kit also includes additional circuitry with uninstalled PCB pads to reconfigure the EV kit  using  optocoupler  feedback.  See  the Reconfiguring the EV  Kit for  Optocoupler  Feedback section for additional information.

## PD Classification Signature

The EV kit is configured for a Class 3 (6.49W to 12.95W) PD classification  by  resistor  R4.  To  reconfigure  the  PD classification, replace surface-mount (0805) resistor R4. Table 1 lists the PD classification options.

## Wall Adapter Power Source (WAD\_IN, WAD\_GND)

The EV kit  can  also  accept  power  from  a  wall  adapter power source. Use the WAD\_IN and WAD\_GND (+30V to  +57V) PCB pads to connect the wall adapter power source.  The  wall  adapter  power-source  operating-voltage range must be within +36V to +57V for the EV kit.

When the wall adapter power source is above +36V, it takes  precedence  over  the  PSE  source.  Once  the  wall adapter power source is detected, The MAX5969A (U1) internal isolation switch disconnects VSS from RTN. The wall  adapter  power  is  supplied  to  VDD  (through  diode D4 and RTN). Once it takes over, the PD internal switch is  turned  off.  Resistors  R27  and  R28  are  available  for adjusting the EV kit wall adapter voltage for disabling the PSE source.

<!-- image -->

If the wall adapter power source is below +27V, the PSE provides  power  through  the  device's  RTN  after  a  successful detection and classification. Diode D4 prevents the PSE from backdriving the wall adapter power source.

## Ethernet Data-Signal Interfacing

The  EV  kit  features  Ethernet  jack  J1  to  interface  with the Ethernet data signals. J1 is provided for interfacing the  EV  kit  with  the  Ethernet  data  signals  only.  Refer  to the RJ45 MagJack data sheet on the Bel Fuse website prior to interfacing the EV kit's J1 jack with the Ethernet data signals.

## Reconfiguring the EV Kit for Optocoupler Feedback

The  EV  kit  also  supports  an  isolated  DC-DC  converter design using optocoupler feedback. On the transformer's secondary  side,  PCB  footprint  pads  are  available  for shunt  regulator  U4,  along  with  additional  resistors  and capacitor  components,  providing  secondary-side  voltage feedback to  the  primary  side  through  optocoupler U3. The MAX5974A receives the voltage feedback signal on the primary side from biasing resistors R51, R53, and R54. When reconfiguring the EV kit for optocoupler feedback, the following modifications must be made:

- Remove	components	R3,	R8,	and	R12	(primary-side feedback regulation components)
- Install	optocoupler	U3	(4-pin	DIP	footprint)
- Install	shunt	regulator	U4	(5-pin	SOT23	footprint)
- Install	 required	 surface-mount	 (0402/0603)	 resistor and capacitor components for feedback regulation.

## Table 1. PD Classification Selection

|   CLASS | MAXIMUM POWER USED BY PD (W)   |   RESISTOR R4 ( I ) |
|---------|--------------------------------|---------------------|
|       0 | 0.44 to 12.95                  |                 619 |
|       1 | 0.44 to 3.84                   |                 118 |
|       2 | 3.84 to 6.49                   |                66.5 |
|       3 | 6.49 to 12.95                  |                43.2 |
|       4 | 12.95 to 25.5                  |                30.9 |
|       5 | > 25.5                         |                21.3 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

<!-- image -->

Figure 1a. MAX5969A EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

<!-- image -->

Figure 1b. MAX5969A EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evalutes: MAX596

/

M

A

X

5

9

7

4

<!-- image -->

Figure 2. MAX5969A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX5969A EV Kit PCB Layout-Component Side

<!-- image -->

## MAX596 Evalution Kit

Figure 4. MAX5969A EV Kit PCB Layout-Ground Layer 2

<!-- image -->

Figure 5. MAX5969A EV Kit PCB Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evalutes: MAX596

/

M

A

X

5

9

7

4

<!-- image -->

Figure 6. MAX5969A EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX596 Evalution Kit

Figure 7. MAX5969A EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5969AEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX5969A Evaluation Kit

## Evaluates: MAX5969A/MAX5974A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.