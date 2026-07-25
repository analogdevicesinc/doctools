<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX5974A Evaluation Kit

## General Description

## Features

The MAX5974A evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  the MAX5974A  active-clamped,  spread-spectrum,  currentmode  PWM  controller  for  Power-over-Ethernet  (PoE) powered  device  (PD)  applications.  The  EV  kit  is  a compact  and  low-cost  design  used  in  Power-overLAN  (PoLAN)  applications  requiring  DC  power  from an  Ethernet  network  port  for  PDs  such  as  IP  phones, wireless access nodes, and security cameras.

The EV kit features a galvanically isolated 25W, 600kHz switching  frequency  forward  DC-DC  converter  using the  IC.  The  circuit  achieves  high  efficiency  up  to  92% (VIN = +42V) using a coupled-inductor forward DC-DC converter topology. The  surface-mount  transformer provides up to +1650V galvanic isolation for the output. The  EV  kit  output  voltage  is  configured  for  +5V  and provides up to 4.7A load current.

The  EV  kit  includes  the  MAX5969B  IEEE ®   802.3af/ at-compliant  network  PD  interface-controller  IC,  which provides  PD  detection  signature, PD  classification signature,  in-rush  current  control,  and  undervoltage lockout (UVLO).

The EV kit circuit receives its power from IEEE 802.3af/ at-compliant power-sourcing equipment (PSE). The PSE provides  the  required  -30V  to  -57V  DC  power  over  an unshielded  twisted-pair  Ethernet  network  cable  to  the EV kit's RJ45 MagJack ® . The EV kit features a 1 x 1Gb RJ45 MagJack and two full-bridge diodes for separating the  DC  power  provided  by  an  endspan  or  midspan Ethernet system.

The  EV  kit  circuit  can  also  be  powered  by  a  +37V  to +57V wall-adapter power source applied at the PWR+ and PWR- PCB pads. When a wall-adapter power source is  detected,  it  takes  precedence  over  the  PSE  source, allowing the wall adapter to power the EV kit.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power that could result in the mechanical  ejection  of  a  component  or  of  component debris at high velocity. Operate this kit with care to avoid possible personal injury.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

MagJack is a registered trademark of Bel Fuse Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- S IEEE 802.3af/at-Compliant PD Interface Circuit
- S -30V to -57V Input Range
- S Demonstrates an Isolated 23.5W Coupled-Inductor Forward DC-DC Converter
- S 92% Efficiency (MAX5974A DC-DC Circuitry)
- S Isolated +5V Output at 4.7A
- S PD Detection and Configurable Classification Signatures
- S 2-Event Classification or Wall-Adapter Detect Output
- S In-Rush Current Limit of 180mA (max)
- S Internal UVLO at +16V
- S Evaluates Endspan and Midspan Ethernet Systems
- S Simplified Wall-Adapter Interface
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5974AEVKIT# | EV Kit |

# Denotes RoHS compliant.

1

## MAX5974A Evaluation Kit

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1            |     1 | 10pF Q 5%, 50V COG ceramic capacitor (0603) Murata GRM1885C1H100H                    |
| C2            |     1 | 0.1µF Q 10%, 100V X7R ceramic capacitor (1206) KEMET C1206C104K1RACTU                |
| C3            |     1 | 0.056µF Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R61C104K                |
| C4            |     1 | 22µF Q 10%, 25V X7R ceramic capacitor (1210) Murata GRM32ER61E226K                   |
| C5            |     1 | 0.047µF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473K                |
| C6            |     1 | 1µF Q 10%, 100V X7R ceramic capacitor (1210) AVX 1210C105KAT9A                       |
| C7            |     1 | 33µF Q 20%, 63V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE1JA330P |
| C8-C11        |     4 | 47µF Q 10%, 16V X5R ceramic capacitors (1210) Murata GRM32ER61C476K                  |
| C12           |     1 | 0.1µF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K                  |
| C13           |     1 | 0.1µF Q 10%, 100V X7S ceramic capacitor (0603) TDK C1608X7S2A104K                    |
| C14           |     1 | 0.01µF Q 10%, 25V X5R ceramic capacitor (0402) AVX 04023D103KAT2A                    |
| C15           |     1 | 0.047µF Q 10%, 16V X5R ceramic capacitor (0402) TDK C1005X7R1C473K                   |
| C16           |     1 | 1500pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H152K                 |
| C17           |     1 | 0.01µF Q 10%, 250V X7R ceramic capacitor (1206) KEMET 12062C103KARACT4               |

| DESIGNATION     |   QTY | DESCRIPTION                                                                     |
|-----------------|-------|---------------------------------------------------------------------------------|
| C18             |     1 | 2200pF Q 10%, 250V AC X7R ceram- ic capacitor (2220) Murata GA355QR7GF222KW0IL  |
| C22             |     1 | 1000pF Q 10%, 1500V X7R ceramic capacitor (1210) AVX LD10SC102KAB1A             |
| C24             |     1 | 330pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H331K             |
| D1, D2          |     2 | 200V, 1A bridge rectifiers (MiniDIP) Diodes Inc. HD01-T                         |
| D3              |     1 | 58V, 600W transient voltage suppressor (SMB) Diodes Inc. SMBJ58A (Top Mark: NG) |
| D4, D5, D8, D10 |     4 | 100mA, 80V diodes (SOD323) Diodes Inc. 1N4148WS                                 |
| D7              |     1 | 100V, 2A Schottky diode (SMB) Diodes Inc. B2100-13-F                            |
| D11             |    01 | Not installed, zener diode                                                      |
| GND, 5V         |     2 | Binding posts                                                                   |
| J1              |     1 | Modular jack assembly, side entry, 8 position                                   |
| N1, N2          |     2 | 25V, 20A n-channel MOSFETs (PowerPak, 8 SO) Vishay SiR412DP                     |
| N3              |     1 | 150V, 4.1A n-channel MOSFET (8 SO) Fairchild FDS86242                           |
| N4              |     1 | 150V, -0.42V p-channel MOSFET (6 SC70) Vishay Si1411DH                          |
| Q1              |     0 | Not installed, transistor (SOT23)                                               |
| Q2              |     1 | 30V, 100mA pnp transistor (SOT23)                                               |
| R1, R8          |     2 | 30.1k I Q 1% resistors (0603)                                                   |
| R2              |     1 | 69.8 I Q 1% resistor (0603)                                                     |
| R3              |     1 | 54.9k I Q 1% resistor (0402)                                                    |
| R4              |     1 | 30.9 I Q 1% resistor (0805)                                                     |
| R5              |     1 | 59.0k I Q 1% resistor (0603)                                                    |
| R6              |     1 | 16.9k I Q 1% resistor (0402)                                                    |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5974A Evaluation Kit

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                         |
|--------------------|-------|-------------------------------------|
| R7, R26            |     2 | 499 I Q 1% resistors (0402)         |
| R9, R27            |     2 | 100k I Q 1% resistors (0402)        |
| R10                |     1 | 2k I Q 1% resistor (0402)           |
| R11                |     1 | 10k I Q 1% resistor (0402)          |
| R12, R13           |     2 | 10 I Q 5% resistors (0805)          |
| R14                |     1 | 24.9k I Q 1% resistor (0603)        |
| R15                |     1 | 14.7k I Q 1% resistor (0402)        |
| R16                |     1 | 0 I Q 5% resistor (0402)            |
| R17                |     0 | Not installed, resistor (0402)      |
| R18                |     1 | 4.02k I Q 1% resistor (0402)        |
| R19, R23           |     2 | 10 I Q 5% resistors (0603)          |
| R20                |     1 | 10k I Q 1% resistor (0603)          |
| R21, R25           |     2 | 0.33 I Q 1%, 1/4 W resistors (1206) |
| R28                |     1 | 49.9k I Q 1% resistor (0402)        |
| R38, R39, R44, R45 |     0 | Not installed, resistors (0603)     |
| R40-R43            |     4 | 75 I Q 5% resistors (0603)          |
| R46                |     1 | 0 I Q 5% resistor (0603)            |
| R47                |     1 | 1M I Q 5% resistor (0603)           |
| R49                |     1 | 100 I Q 1% resistor (0402)          |

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R50           |     1 | 10 I Q 1% resistor (1206)                                                       |
| RJ45          |     1 | RJ45 MagJack 1G-Ethernet, 802.3af/at standard Bel Fuse Inc. 0826-1X1T-GH-F      |
| T1            |     1 | 26W forward transformer (EP10) Cooper Bussmann CTX03-18774                      |
| T2            |     1 | Transformer (EP8) Cooper Bussmann CTX03-18775                                   |
| TP1           |     1 | Small red test point                                                            |
| TP2           |     1 | Small black test point                                                          |
| U1            |     1 | Active-clamp PWM controller (16 TQFN-EP) Maxim MAX5974AETE+ (Top Mark: AHY)     |
| U2            |     1 | IEEE802.3at-powered device interface controller (10 TDFN-EP) Maxim MAX5969BETB+ |
| -             |     1 | PCB: MAX5974A EVALUATION KIT                                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp                         | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX5974A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX5974A Evaluation Kit

## Quick Start

## Required Equipment

The EV kit is a galvanically isolated 25W DC-DC converter using the active-clamped, current-mode PWM controller in a forward, coupled-inductor feedback topology. The EV kit receives power from an IEEE 802.3af/at-compliant PSE and a UTP cable connected to the EV kit's RJ45 MagJack. The EV kit uses a 1 x 1Gb RJ45 MagJack and two diodebridge power rectifiers (D1, D2) to separate the -57V DC power sent by the PSE. The EV kit accepts power from an endspan or midspan PSE network configuration. The EV kit also provides an RJ45 jack (J1) for interfacing to the Ethernet data signals. PCB pads VDD and VSS are available for powering the EV kit if network connectivity is not required.

The  EV  kit  output  voltage  is  configured  for  +5V  and provides up to 4.7A output current while achieving up to 92% efficiency. Transformer T1 provides up to +1650V galvanic isolation for the output. Transformer T2 is used for  providing  the  operating  voltage  at  the  device's  IN input  and  for  coupled-inductor  feedback  control  for setting the output voltage using resistors R3, R11, and R49. Current-sense resistors R21 and R25 limit the peak current  through  transistor  N3  and  primary  transformer T1.  PCB  pad  D11  is  available  for  clamping  the  IC  IN input when driving the EN input using an external source. Capacitor  C17  and  transistor  N4  form  a  clamping network that protects transformer T1 against saturation, due to reverse current, by monitoring the voltage across the device's CS input during auxiliary driver N4's off time.

The EV kit also demonstrates the full PD functionality of the device, such as PD detection signature, PD classification signature, in-rush current control, and UVLO. Resistors R14 and R4 set the PD detection signature and the PD classification signature, respectively.

The EV kit circuit accepts power from a wall-adapter DC power source. When a +37V to +57V wall-adapter power source is applied at the PWR+ and PWR- PCB pads, it takes precedence over the PSE source, allowing the wall adapter to power the EV kit circuit. When applying a valid voltage source between the PWR+ and PWR- PCB pads, the  MAX5696B's  internal  isolation  switch  disconnects VSS from RTN, which allows the wall adapter to supply power to the EV kit.

## Hardware Connections

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Use one of the following methods to power the EV kit:
- If network connectivity is required: Connect a Category 5e Ethernet network cable from the EV kit input port RJ45 MagJack connector (RJ45) to the corresponding PSE Ethernet LAN connection to provide power to the EV kit. A modular RJ45 jack (J1) provides an interface with the Ethernet data signals only.
- If network connectivity is not required: Connect a -48V DC power supply between the VDD and VSS pads on the EV kit. Connect the power-supply positive terminal to the VDD pad and the negative terminal to the VSS pad.
- 2)  Activate the PSE power supply or turn on the external DC power supply.
- 3)  Using  a  voltmeter,  verify  that  the  EV  kit  provides approximately +5V across the +5V and GND PCB pads. GND is galvanically isolated from the EV kit's input VDD and VSS pads.

## Detailed Description of Hardware

The  MAX5974A  EV  kit  is  a  fully  assembled  and  tested surface-mount circuit board that evaluates the MAX5974A active-clamped,  spread-spectrum,  current-mode  PWM controller. The EV kit features a powered Ethernet port, a data-only Ethernet port, and a MAX5969B IEEE 802.3af/ at-compliant network PD interface-controller IC.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX5974A EV kit
- IEEE  802.3af/at-compliant  PSE  and  Category  5e Ethernet network cable
- -48V, 1A-capable DC power supply
- Voltmeter

## MAX5974A Evaluation Kit

## PD Classification Signature

The EV kit is configured for a Class 4 (12.95W to 25.5W) PD classification by resistor R4. To reconfigure the PD classification,  replace  surface-mount  0805  resistor  R4. Table 1 lists the PD classification options.

## Wall-Adapter Power Source (PWR+, PWR-)

The EV kit can also accept power from a wall-adapter DC power source applied at the PWR+ and PWR- PCB pads. The wall-adapter power-source operating-voltage range must be within +37V to +57V for the EV kit.

When the wall-adapter power source is above +30V, it takes precedence over the PSE source. Once the walladapter  power  source  is  detected,  the  MAX5969B's internal  isolation  switch  disconnects  VSS  from  RTN. The  wall-adapter  power  is  supplied  to  VDD  (through diode D7) and RTN. Once it takes over, the classification process is disabled. Resistors R27 and R28 are available for adjusting the EV kit wall-adapter voltage for disabling the PSE source.

When the wall-adapter power source is below +21V, the PSE  provides  power  through  the  device's  RTN.  Diode D7 prevents the PSE from back-driving the wall-adapter power source when it is below +7V.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## Ethernet Data-Signal Interfacing

The EV kit features a modular RJ45 jack (J1) to interface with the Ethernet data signals. J1 is provided for interfacing the EV kit with the Ethernet data signals only. Refer to the RJ45 MagJack data sheet on the Bel Fuse website prior to interfacing the EV kit's J1 modular RJ45 jack with the Ethernet data signals.

## Table 1. PD Classification Signature Selection

|   CLASS | MAXIMUM POWER USED BY PD (W)   |   RESISTOR R4 ( I ) |
|---------|--------------------------------|---------------------|
|       0 | 0.44 to 12.95                  |                 615 |
|       1 | 0.44 to 3.84                   |                 117 |
|       2 | 3.84 to 6.49                   |                66.5 |
|       3 | 6.49 to 12.95                  |                43.7 |
|       4 | 12.95 to 25.5                  |                30.9 |
|       5 | > 25.5                         |                22.6 |

## MAX5974A Evaluation Kit

<!-- image -->

Figure 1. MAX5974A EV Kit Efficiency vs. Output (V IN  = +42V, +48V, and +57V)

Figure 2. MAX5974A EV Kit Load Regulation vs. Output Current (V IN  = +42V, +48V, and +57V)

<!-- image -->

Figure 3. MAX5974A EV Kit Load Transient (V IN  = +57V)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5974A Evaluation Kit

<!-- image -->

Figure 4. MAX5974A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX5974A Evaluation Kit

Figure 5. MAX5974A EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX5974A EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5974A Evaluation Kit

<!-- image -->

Figure 7. MAX5974A EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 8. MAX5974A EV Kit PCB Layout-Signal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX5974A Evaluation Kit

Figure 9. MAX5974A EV Kit PCB Layout-Solder Side

<!-- image -->

Figure10. MAX5974A EV Kit Component Placement Guide-Solder Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5974A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.